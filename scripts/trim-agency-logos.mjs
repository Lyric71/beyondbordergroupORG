import sharp from 'sharp';
import { readdir, mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, '..', 'public', 'AgencyLogos');
const BACKUP_DIR = path.resolve(__dirname, '..', '.cache', 'agency-logos-originals');

async function main() {
  if (!existsSync(BACKUP_DIR)) {
    await mkdir(BACKUP_DIR, { recursive: true });
  }

  const entries = await readdir(SRC_DIR, { withFileTypes: true });
  const pngs = entries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith('.png'))
    .map((e) => e.name);

  for (const file of pngs) {
    const src = path.join(SRC_DIR, file);
    const backup = path.join(BACKUP_DIR, file);

    if (!existsSync(backup)) {
      await copyFile(src, backup);
    }

    const before = await sharp(backup).metadata();

    // Some logos use real transparency, others were exported with a solid or
    // checkerboard "transparency" background rasterized in. Detect background
    // type by sampling many perimeter pixels.
    const { data, info } = await sharp(backup)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const w = info.width;
    const h = info.height;
    const stride = info.channels; // 4 (RGBA)

    const sample = (x, y) => {
      const i = (y * w + x) * stride;
      return [data[i], data[i + 1], data[i + 2], data[i + 3]];
    };

    const sat = (r, g, b) => {
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      return max > 0 ? (max - min) / max : 0;
    };

    // Collect perimeter samples (top/bottom rows + left/right columns)
    const perim = [];
    const step = Math.max(1, Math.floor(Math.min(w, h) / 200));
    for (let x = 0; x < w; x += step) {
      perim.push(sample(x, 0));
      perim.push(sample(x, h - 1));
    }
    for (let y = 0; y < h; y += step) {
      perim.push(sample(0, y));
      perim.push(sample(w - 1, y));
    }

    const corners4 = [
      sample(0, 0),
      sample(w - 1, 0),
      sample(0, h - 1),
      sample(w - 1, h - 1),
    ];
    const cornersAllTransparent = corners4.every((p) => p[3] < 16);
    const allTransparent = cornersAllTransparent || perim.every((p) => p[3] < 16);
    const grayish = perim.filter((p) => sat(p[0], p[1], p[2]) < 0.12);
    const grayishRatio = grayish.length / perim.length;
    // Treat as gray-range bg if the vast majority of perimeter is low-saturation
    // (a few content pixels touching the perimeter shouldn't disqualify it).
    const isGrayRange = grayishRatio > 0.85;
    // Compute brightness range from the grayish subset only, so stray saturated
    // content pixels don't poison the band.
    const brightSrc = isGrayRange ? grayish : perim;
    const brightVals = brightSrc.map((p) => (p[0] + p[1] + p[2]) / 3);
    const minBrightBg = Math.min(...brightVals);
    const maxBrightBg = Math.max(...brightVals);

    const RGB_TOLERANCE = 18;
    const ALPHA_TOLERANCE = 12;
    const SAT_THRESHOLD = 0.18;
    const BRIGHT_PAD = 30;

    let mode;
    if (allTransparent) {
      mode = 'alpha';
    } else if (isGrayRange) {
      mode = 'gray-range';
    } else {
      mode = 'corner-color';
    }

    const corner = sample(0, 0);

    const isContent = (r, g, b, a) => {
      if (mode === 'alpha') {
        return a > ALPHA_TOLERANCE;
      }
      if (mode === 'gray-range') {
        // Content is anything outside the perimeter brightness band OR clearly saturated
        if (sat(r, g, b) > SAT_THRESHOLD) return true;
        const br = (r + g + b) / 3;
        if (br < minBrightBg - BRIGHT_PAD) return true;
        if (br > maxBrightBg + BRIGHT_PAD) return true;
        return false;
      }
      // corner-color mode
      if (Math.abs(a - corner[3]) > ALPHA_TOLERANCE) return true;
      if (Math.abs(r - corner[0]) > RGB_TOLERANCE) return true;
      if (Math.abs(g - corner[1]) > RGB_TOLERANCE) return true;
      if (Math.abs(b - corner[2]) > RGB_TOLERANCE) return true;
      return false;
    };

    // Reference background for the post-extract whitening step
    const bg = mode === 'alpha' ? [0, 0, 0, 0] : corner;

    let minX = w, minY = h, maxX = -1, maxY = -1;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * stride;
        if (isContent(data[i], data[i + 1], data[i + 2], data[i + 3])) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    if (maxX < 0) {
      console.log(`${file}: no content pixels found, skipping`);
      continue;
    }

    const cropW = maxX - minX + 1;
    const cropH = maxY - minY + 1;

    const baseExtract = () =>
      sharp(backup).extract({
        left: minX,
        top: minY,
        width: cropW,
        height: cropH,
      });

    const needsCleanup = mode !== 'alpha';

    if (needsCleanup) {
      const cropped = await baseExtract()
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });
      const cw = cropped.info.width;
      const ch = cropped.info.height;
      const ch4 = cropped.info.channels;
      const out = Buffer.from(cropped.data);
      for (let y = 0; y < ch; y++) {
        for (let x = 0; x < cw; x++) {
          const i = (y * cw + x) * ch4;
          const r = out[i], g = out[i + 1], b = out[i + 2];
          if (mode === 'gray-range') {
            const s = sat(r, g, b);
            const br = (r + g + b) / 3;
            const inBg =
              s < SAT_THRESHOLD &&
              br >= minBrightBg - 8 &&
              br <= maxBrightBg + 8;
            if (inBg) out[i + 3] = 0;
          } else {
            // corner-color mode (e.g., solid white): null out pixels matching corner
            const dr = Math.abs(r - corner[0]);
            const dg = Math.abs(g - corner[1]);
            const db = Math.abs(b - corner[2]);
            if (dr < RGB_TOLERANCE && dg < RGB_TOLERANCE && db < RGB_TOLERANCE) {
              out[i + 3] = 0;
            }
          }
        }
      }
      await sharp(out, { raw: { width: cw, height: ch, channels: ch4 } })
        .png()
        .toFile(src);
    } else {
      await baseExtract().png().toFile(src);
    }
    console.log(`  mode: ${mode}`);

    const after = await sharp(src).metadata();
    console.log(
      `${file}: ${before.width}x${before.height} -> ${after.width}x${after.height}`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

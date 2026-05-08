#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import { extname, basename } from 'node:path';
import sharp from 'sharp';

const QUALITY = 85;
const PNG_COMPRESSION = 9;
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

async function main() {
  let payload;
  try {
    payload = JSON.parse(await readStdin());
  } catch {
    return;
  }

  const filePath =
    payload?.tool_input?.file_path ??
    payload?.tool_response?.filePath ??
    payload?.tool_response?.file_path;
  if (!filePath) return;

  const ext = extname(filePath).toLowerCase();
  if (!SUPPORTED.has(ext)) return;

  let buf;
  try {
    buf = await readFile(filePath);
  } catch {
    return;
  }
  const before = buf.length;

  let pipeline = sharp(buf, { animated: ext === '.gif' || ext === '.webp' });

  switch (ext) {
    case '.jpg':
    case '.jpeg':
      pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
      break;
    case '.png':
      pipeline = pipeline.png({ compressionLevel: PNG_COMPRESSION, palette: true });
      break;
    case '.webp':
      pipeline = pipeline.webp({ quality: QUALITY });
      break;
    case '.gif':
      pipeline = pipeline.gif();
      break;
  }

  let out;
  try {
    out = await pipeline.toBuffer();
  } catch (err) {
    process.stderr.write(`[optimize-image-hook] ${basename(filePath)} failed: ${err.message}\n`);
    return;
  }

  if (out.length >= before) return;

  await writeFile(filePath, out);
  const savings = ((1 - out.length / before) * 100).toFixed(0);
  process.stderr.write(
    `[optimize-image-hook] ${basename(filePath)}: ${(before / 1024).toFixed(0)}KB → ${(out.length / 1024).toFixed(0)}KB (-${savings}%)\n`
  );
}

main().catch((err) => {
  process.stderr.write(`[optimize-image-hook] error: ${err.message}\n`);
});

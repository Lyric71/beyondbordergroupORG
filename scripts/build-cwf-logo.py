"""Composite the ChinaWebFoundry cloud icon with a wordmark.

Outputs a single transparent PNG that drops in for
public/AgencyLogos/Logo-ChinaWebFoundry-transparent.png.
"""
from __future__ import annotations

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
CLOUD = ROOT / ".cache" / "agency-logos-originals" / "Logo-ChinaWebFoundry-transparent.png"
OUT_DIR = ROOT / "public" / "AgencyLogos"

FONT_BOLD = "C:/Windows/Fonts/segoeuib.ttf"
FONT_SEMI = "C:/Windows/Fonts/seguisb.ttf"

NAVY = (27, 31, 75, 255)
WHITE = (245, 247, 252, 255)
EMBER = (231, 110, 50, 255)

VARIANTS = {
    "Logo-ChinaWebFoundry-transparent.png": {"base": NAVY, "accent": EMBER},
    "Logo-ChinaWebFoundry-light.png": {"base": WHITE, "accent": EMBER},
}


def kern_width(font: ImageFont.FreeTypeFont, text: str, tracking: int) -> int:
    if not text:
        return 0
    total = 0
    for ch in text[:-1]:
        total += font.getlength(ch) + tracking
    total += font.getlength(text[-1])
    return int(total)


def draw_kerned(draw: ImageDraw.ImageDraw, xy, text: str,
                font: ImageFont.FreeTypeFont, fill, tracking: int) -> int:
    x, y = xy
    start = x
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += font.getlength(ch) + tracking
    return int(x - start)


def build(filename: str, base_color, accent_color) -> None:
    cloud = Image.open(CLOUD).convert("RGBA")
    cw, ch = cloud.size

    target_h = ch
    icon_w = cw
    gap = int(target_h * 0.06)

    font_size = int(target_h * 0.32)
    font_main = ImageFont.truetype(FONT_BOLD, font_size)

    tracking = int(font_size * -0.015)
    w_china = kern_width(font_main, "China", tracking)
    w_web = kern_width(font_main, "Web", tracking)
    w_foundry = kern_width(font_main, "Foundry", tracking)
    word_w = w_china + w_web + w_foundry

    side_pad = int(target_h * 0.08)
    canvas_w = icon_w + gap + word_w + side_pad
    canvas_h = target_h

    canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    canvas.alpha_composite(cloud, (0, 0))

    draw = ImageDraw.Draw(canvas)

    ascent, descent = font_main.getmetrics()
    text_h = ascent + descent
    text_y = (canvas_h - text_h) // 2 - int(target_h * 0.02)

    x = icon_w + gap
    x += draw_kerned(draw, (x, text_y), "China", font_main, base_color, tracking)
    x += draw_kerned(draw, (x, text_y), "Web", font_main, base_color, tracking)
    draw_kerned(draw, (x, text_y), "Foundry", font_main, accent_color, tracking)

    out = OUT_DIR / filename
    canvas.save(out, "PNG", optimize=True)
    print(f"Wrote {out} ({canvas.size[0]}x{canvas.size[1]})")


def main() -> None:
    for filename, colors in VARIANTS.items():
        build(filename, colors["base"], colors["accent"])


if __name__ == "__main__":
    main()

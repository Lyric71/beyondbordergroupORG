"""Regenerate the Beyond Border Group logo files.

The wordmark is outlined to paths so the SVG never depends on a font being
present (and never fetches one at runtime, which the Great Firewall rule
forbids anyway). Type is Newsreader Variable, the same face the site loads
through @fontsource-variable/newsreader for its headings.

Run:  python script/build-wordmark.py
"""

import io
import os
import re

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.pens.svgPathPen import SVGPathPen
import uharfbuzz as hb

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_FONT = os.path.join(
    ROOT, 'node_modules', '@fontsource-variable', 'newsreader', 'files',
    'newsreader-latin-standard-normal.woff2',
)
SRC_MARK = os.path.join(ROOT, 'script', 'assets', 'bbg-mark.svg')

NAVY = '#07275e'
ARC = '#00a1e9'

# Type. Newsreader is an optical-size family: a low opsz gives sturdier strokes
# and less stroke contrast, which is what a logo set at header size needs.
WEIGHT = float(os.environ.get('BBG_WGHT', 550))
OPSZ = float(os.environ.get('BBG_OPSZ', 16))
FS = 56.0          # font size, in the px-scale the lockup is designed at
TRACK = -0.012     # letter-spacing, em

# Lockup geometry, in the same px scale
GLOBE_H = 80.0     # the circular part of the mark, ignoring the arc tail
GAP = 13.0         # clearance between the tip of the arc and the first letter
STACK_GAP = 16.0   # leading between the two lines of the stacked lockup


def load_instance():
    font = TTFont(SRC_FONT)
    upm = font['head'].unitsPerEm
    cap = font['OS/2'].sCapHeight
    inst = instancer.instantiateVariableFont(
        font, {'wght': WEIGHT, 'opsz': OPSZ}, inplace=False, updateFontNames=False
    )
    buf = io.BytesIO()
    inst.flavor = None
    inst.save(buf)
    return inst, buf.getvalue(), upm, cap


def shape(raw, upm, text):
    face = hb.Face(raw)
    hbfont = hb.Font(face)
    hbfont.scale = (upm, upm)
    buf = hb.Buffer()
    buf.add_str(text)
    buf.guess_segment_properties()
    hb.shape(hbfont, buf, {'kern': True, 'liga': True})
    return list(zip(buf.glyph_infos, buf.glyph_positions))


def runs(inst, upm, text, spans, scale, x0, baseline):
    """Lay out `text` and return {color: path data} plus the pen x after it."""
    glyphs = inst.getGlyphSet()
    order = inst.getGlyphOrder()
    track_units = TRACK * upm
    out = {}
    x = x0 / scale
    shaped = shape(raw_font, upm, text)
    for i, (info, pos) in enumerate(shaped):
        name = order[info.codepoint]
        color = NAVY
        for lo, hi, c in spans:
            if lo <= info.cluster < hi:
                color = c
        pen = SVGPathPen(glyphs, ntos=lambda v: f'{v:.1f}')
        glyphs[name].draw(pen)
        d = pen.getCommands()
        if d.strip():
            gx = (x + pos.x_offset) * scale
            gy = baseline - pos.y_offset * scale
            out.setdefault(color, []).append(
                f'<path transform="translate({gx:.2f} {gy:.2f}) '
                f'scale({scale:.6f} {-scale:.6f})" d="{d}"/>'
            )
        x += pos.x_advance
        if i < len(shaped) - 1:
            x += track_units
    return out, x * scale


def mark_group(x, y, height):
    """The existing globe, kept byte for byte from the original logo."""
    s = io.open(SRC_MARK, encoding='utf-8').read()
    inner = s[s.index('<g transform='):s.rindex('</svg>')].rstrip()
    k = height / 562.75
    return (f'<g transform="translate({x:.2f} {y:.2f}) scale({k:.6f})">'
            f'{inner}</g>')


def emit(path, body, width, height, title):
    svg = (
        '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'
        f'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" '
        f'viewBox="0 0 {width:.2f} {height:.2f}" role="img" '
        f'aria-label="{title}" '
        'style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;'
        'stroke-miterlimit:2;">\n'
        f'    <title>{title}</title>\n'
        f'{body}\n</svg>\n'
    )
    io.open(path, 'w', encoding='utf-8', newline='\n').write(svg)
    print(f'{os.path.basename(path)}  {width:.2f} x {height:.2f}')
    return width, height


inst, raw_font, UPM, CAP = load_instance()
SCALE = FS / UPM
MARK_SCALE = GLOBE_H / 562.75
MARK_INK_W = 650.25 * MARK_SCALE     # globe plus the arc that runs past it

cap_px = CAP * SCALE

# ---------------------------------------------------------------- horizontal
# The globe is centred on the cap band of the wordmark, so the descenders of
# y and p hang below it the way they do in running text.
baseline = GLOBE_H / 2 + cap_px / 2
text_x = MARK_INK_W + GAP
text = 'Beyond Border Group'
spans = [(7, 13, ARC)]
paths, end_x = runs(inst, UPM, text, spans, SCALE, text_x, baseline)

body = ['    ' + mark_group(0, 0, GLOBE_H)]
for color in (NAVY, ARC):
    if color in paths:
        body.append(f'    <g fill="{color}" fill-rule="nonzero">'
                    + ''.join(paths[color]) + '</g>')

OUT = os.environ.get('BBG_OUT', os.path.join(ROOT, 'public'))

emit(os.path.join(OUT, 'Logo BeyondBorderGroup - Horizontal.svg'),
     '\n'.join(body), end_x, GLOBE_H, 'Beyond Border Group')

# ------------------------------------------------------------------ stacked
# Two lines, mark on the left: the narrower lockup for tight headers, email
# signatures and anywhere the wide version would have to shrink too far.
l1, l2 = 'Beyond Border', 'Group'
line_h = cap_px + STACK_GAP
block_h = cap_px * 2 + STACK_GAP
base1 = 0.0
base2 = base1 + line_h

globe_h2 = 96.0
mark_scale2 = globe_h2 / 562.75
mark_ink_w2 = 650.25 * mark_scale2
text_x2 = mark_ink_w2 + GAP

p1, e1 = runs(inst, UPM, l1, [(7, 13, ARC)], SCALE, text_x2, base1)
p2, e2 = runs(inst, UPM, l2, [], SCALE, text_x2, base2)

# Vertical: centre the two-line block against the globe.
top_ink = base1 - cap_px
mark_y = top_ink + block_h / 2 - globe_h2 / 2
shift = -min(0.0, mark_y)
mark_y += shift
desc_px = 530 / 2000 * FS
content_bottom = max(mark_y + globe_h2, base2 + shift + desc_px)
content_top = min(mark_y, top_ink + shift)

body2 = ['    ' + mark_group(0, mark_y - content_top, globe_h2)]
merged = {}
for src, dy in ((p1, shift - content_top), (p2, shift - content_top)):
    for color, items in src.items():
        merged.setdefault(color, []).extend(
            re.sub(r'translate\((-?[\d.]+) (-?[\d.]+)\)',
                   lambda m: f'translate({m.group(1)} {float(m.group(2)) + dy:.2f})',
                   it) for it in items
        )
for color in (NAVY, ARC):
    if color in merged:
        body2.append(f'    <g fill="{color}" fill-rule="nonzero">'
                     + ''.join(merged[color]) + '</g>')

emit(os.path.join(OUT, 'Logo BeyondBorderGroup - Vertical.svg'),
     '\n'.join(body2), max(e1, e2), content_bottom - content_top,
     'Beyond Border Group')

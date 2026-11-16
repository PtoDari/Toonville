"""ep00-sc01-sh002 plate, version 3: the falling rain painted out of the user's elevated view of the Midtown alley
(ElevatedMidtownAlley.png, 1672x941), with no generation.
Usage: python3 -I derain_sh002.py <ElevatedMidtownAlley.png> <out.png> [overlay.png]   (derain.py beside it)
The art is full of painted wet drips and lit edges, so a candidate streak is kept only if it is straight: a line fitted
through it stays within about a pixel, and it leans less than 12 degrees from vertical. Graffiti outlines and drips curve."""
import sys, numpy as np, cv2
from PIL import Image
from derain import streak_mask3, fill_across

def straight(m, min_h=24, max_tilt=12, max_rms=1.0, min_tilt=0.0):
    n, lab, st, _ = cv2.connectedComponentsWithStats(m.astype(np.uint8), connectivity=8)
    keep = np.zeros(n, bool)
    for i in range(1, n):
        x, y, w, h, area = st[i]
        if h < min_h: continue
        ys, xs = np.nonzero(lab[y:y + h, x:x + w] == i)
        A = np.stack([ys, np.ones_like(ys)], 1).astype(np.float32)
        coef, *_ = np.linalg.lstsq(A, xs.astype(np.float32), rcond=None)
        rms = np.sqrt(np.mean((A @ coef - xs) ** 2))
        tilt = abs(np.degrees(np.arctan(coef[0])))
        if min_tilt <= tilt <= max_tilt and rms <= max_rms: keep[i] = True
    return keep[lab]

def box_mask(shape, boxes):
    k = np.zeros(shape, bool)
    for b in boxes:
        if len(b) == 4 and not isinstance(b[0], (tuple, list)):
            x0, y0, x1, y1 = b; k[y0:y1, x0:x1] = True
        else:
            t = np.zeros(shape, np.uint8); cv2.fillPoly(t, [np.array(b, np.int32)], 1); k |= t > 0
    return k

# the far alley and its towers: painted streaks and window columns everywhere, so only long lines are taken there
FAR = [(1040, 0), (1530, 0), (1530, 130), (1470, 130), (1470, 690), (1040, 690)]
# fine detail the loosest pass leaves alone: the windows, the fire escape and its landing
DETAIL = [(90, 0, 372, 250), (500, 0, 700, 250), (560, 0, 990, 310)]
PROTECT = [(428, 90, 456, 262), (600, 100, 632, 182),            # the lit edge of the drainpipe; a window mullion
           (1494, 250, 1545, 700),                               # the lit corner of the building beside the cyan light
           (1052, 0, 1110, 215)]                                 # the violet sign
PASSES = [  # t_top, frac, min_h, ink, ink_frac, straight min_h, region (None = everywhere but FAR; 'loose' = and not DETAIL)
    (12, 0.42, 26, 14, 0.45, 26, None),
    (8, 0.45, 30, 30, 0.35, 30, None),
    (6, 0.5, 24, 30, 0.35, 24, [(560, 560), (1250, 560), (1360, 941), (420, 941)]),   # the alley floor
    (6, 0.5, 60, 30, 0.35, 60, "far"),        # long slanted lines over the far alley and sky; the towers' window columns stand upright
    (6, 0.4, 20, 30, 0.6, 20, "loose"),       # fainter streaks, and those crossing the fence's ink
    (6, 0.45, 24, 30, 0.35, 24, [(1175, 300), (1275, 300), (1345, 720), (1000, 720)]),   # the far alley floor
    (5, 0.4, 20, 30, 0.6, 20, [(1175, 300), (1275, 300), (1345, 720), (1000, 720)]),
]

# streaks too faint against the haze for the passes, traced by hand: (top), (bottom)
MANUAL = [((1380, 0), (1372, 88))]

def run(a):
    out = a.copy(); total = np.zeros(a.shape[:2], bool)
    far = box_mask(a.shape[:2], [FAR]); prot = box_mask(a.shape[:2], PROTECT)
    for t_top, frac, min_h, ink, ink_frac, smin, region in PASSES:
        m = streak_mask3(out, t_top=t_top, frac=frac, min_h=min_h, ink=ink, ink_frac=ink_frac)
        m = straight(m, min_h=smin, max_rms=1.0 if ink_frac < 0.5 else 1.6, min_tilt=2.0 if region == "far" else 0.0)
        if region is None: keep = ~far
        elif region == "far": keep = far
        elif region == "loose": keep = ~far & ~box_mask(a.shape[:2], DETAIL)
        else: keep = box_mask(a.shape[:2], [region])
        m = cv2.dilate((m & keep & ~prot).astype(np.uint8), np.ones((3, 5), np.uint8)) > 0
        m &= keep & ~prot
        out = fill_across(out, m, reach=6); total |= m
    m = np.zeros(a.shape[:2], np.uint8)
    for p0, p1 in MANUAL: cv2.line(m, p0, p1, 1, 4)
    m = m > 0
    out = fill_across(out, m, reach=6); total |= m
    return out, total

if __name__ == "__main__":
    src, dst = sys.argv[1:3]
    a = np.asarray(Image.open(src).convert("RGB"))
    out, m = run(a)
    Image.fromarray(out).save(dst)
    if len(sys.argv) > 3:
        ov = a.copy(); ov[m] = [255, 0, 0]; Image.fromarray(ov).save(sys.argv[3])
    print("pixels repainted:", int(m.sum()))

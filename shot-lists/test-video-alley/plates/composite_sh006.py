"""ep00-sc01-sh006 k01 and k02: Ozzy and the bounty hunter, each made on their own with the compositing block (the user's
three ChatGPT images, 1024x1536, on flat grey), pasted onto shot 6's locked plate at 1920x1080. No generation.
  A  Ozzy for k01: from behind at the shutter, turning his head to the viewer's right.
  B  Ozzy for k02: facing the viewer's right, his right side to the camera.
  C  the hunter, for both: facing the viewer's left, rifle across his body, antenna and canister toward the camera.
Fixes, each area filled flat with the median of the matching colour just around it, with a soft edge:
  A  the "$" and the governor chip ChatGPT drew on the hand on the viewer's right, which from behind is his right hand, which is
     bare; the New Era flag on the side of the balaclava turned toward the camera, his right side, where it belongs on his left;
     and the Polo logo showing on the back of his joggers.
  B  the New Era flag on the back of the balaclava, on his right side.
Sizes, from the plate's perspective: the door (210 cm) and the bollards (about 92 cm) put the horizon at y 685 and the scale at
0.0182 px per cm for each pixel below it, a camera about 55 cm up. Ozzy is 190.5 cm in sneakers to the top of his head, and the
hunter 191 cm to the top of the helmet (not the antenna), so standing at the same depth they're level, as the shot list says.
Placed: Ozzy between the bollards, on the left third; the hunter stepping in at the right edge in k01, and on the right third in
k02, just right of the third, so the steam rising from the vent in front of him stays clear of his boots. Check: no pixel outside the two figures' masks differs from the plate.
Usage: python3 -I composite_sh006.py <A.png> <B.png> <C.png> <ep00-sc01-sh006-plate.png> <out_dir>"""
import sys, cv2, numpy as np
from PIL import Image
A_p, B_p, C_p, plate_p, out = sys.argv[1:6]
HORIZON, K = 685, 0.0182

def cut(a):
    H, W = a.shape[:2]; ff = np.zeros((H + 2, W + 2), np.uint8)
    for seed in [(0, 0), (W - 1, 0), (0, H - 1), (W - 1, H - 1), (W // 2, 0), (W // 2, H - 1), (0, H // 2), (W - 1, H // 2)]:
        if ff[seed[1] + 1, seed[0] + 1] == 0:
            cv2.floodFill(a.copy(), ff, seed, (0, 0, 0), (8, 8, 8), (8, 8, 8),
                          cv2.FLOODFILL_MASK_ONLY | cv2.FLOODFILL_FIXED_RANGE | 8 | (255 << 8))
    m = (ff[1:-1, 1:-1] == 0).astype(np.uint8)
    n, lab, st, _ = cv2.connectedComponentsWithStats(m, connectivity=8)
    return (lab == 1 + int(np.argmax(st[1:, cv2.CC_STAT_AREA]))).astype(np.uint8)

def fill(a, m, ellipses, pick):
    f = a.astype(np.float32)
    for (cx, cy, ax, ay) in ellipses:
        reg = np.zeros(m.shape, np.uint8); cv2.ellipse(reg, (cx, cy), (ax, ay), 0, 0, 360, 1, -1); reg &= m
        ring = (cv2.dilate(reg, np.ones((15, 15), np.uint8)) > 0) & (reg == 0) & (m > 0)
        ok = ring & pick(f)
        col = np.median(f[ok], 0)
        soft = cv2.GaussianBlur(reg.astype(np.float32), (0, 0), 1.5)[..., None] * (m[..., None] > 0)
        f = f * (1 - soft) + col * soft
    return np.clip(np.round(f), 0, 255).astype(np.uint8)

skin = lambda f: (f[..., 0] > f[..., 1] + 15) & (f[..., 1] > f[..., 2]) & (f[..., 0] > 90) & (f[..., 0] < 235)
navy = lambda f: (f @ np.float32([0.3, 0.59, 0.11])) < 60
jog = lambda f: (f[..., 2] > f[..., 0] + 25) & ((f @ np.float32([0.3, 0.59, 0.11])) < 120)

def load(p):
    a = np.asarray(Image.open(p).convert("RGB")).copy(); return a, cut(a)
A, mA = load(A_p); B, mB = load(B_p); C, mC = load(C_p)
A = fill(A, mA, [(661, 685, 19, 19), (675, 741, 15, 23)], skin)
A = fill(A, mA, [(520, 92, 21, 16)], navy)
A = fill(A, mA, [(586, 764, 10, 19)], jog)
B = fill(B, mB, [(486, 97, 20, 16)], navy)

def top_bottom(m, min_width=1):
    rows = np.nonzero((m > 0).sum(1) >= min_width)[0]; return rows[0], rows[-1]

def paste(canvas, full, a, m, feet_x, feet_y, height_cm, min_width=1):
    t, b = top_bottom(m, min_width)
    target = (feet_y - HORIZON) * K * height_cm          # px from the top (head or helmet) to the soles
    s = target / (b - t)
    x0, y0, w, h = cv2.boundingRect(m)
    cutimg = cv2.resize(a[y0:y0 + h, x0:x0 + w], (round(w * s), round(h * s)), interpolation=cv2.INTER_AREA).astype(np.float32)
    al = cv2.resize(m[y0:y0 + h, x0:x0 + w].astype(np.float32), (cutimg.shape[1], cutimg.shape[0]), interpolation=cv2.INTER_AREA)
    al[al < 0.02] = 0
    px = round(feet_x - cutimg.shape[1] / 2); py = round(feet_y - (b - y0 + 1) * s)
    H, W = canvas.shape[:2]
    sx0, sy0 = max(0, -px), max(0, -py); sx1, sy1 = min(cutimg.shape[1], W - px), min(cutimg.shape[0], H - py)
    sub = canvas[py + sy0:py + sy1, px + sx0:px + sx1]; al_ = al[sy0:sy1, sx0:sx1, None]
    sub[:] = sub * (1 - al_) + cutimg[sy0:sy1, sx0:sx1] * al_
    full[py + sy0:py + sy1, px + sx0:px + sx1] |= (al[sy0:sy1, sx0:sx1] > 0)
    return round(target)

plate = np.asarray(Image.open(plate_p).convert("RGB")).astype(np.float32)
for name, oz, mo, oz_feet, hunter_x in (("k01", A, mA, (700, 805), 1845), ("k02", B, mB, (700, 820), 1320)):
    canvas = plate.copy(); full = np.zeros(plate.shape[:2], bool)
    h_oz = paste(canvas, full, oz, mo, oz_feet[0], oz_feet[1], 190.5)
    h_hu = paste(canvas, full, C, mC, hunter_x, oz_feet[1], 191.0, min_width=60)   # helmet top: the first row wider than the antenna
    res = np.clip(np.round(canvas), 0, 255).astype(np.uint8)
    res[~full] = plate[~full].astype(np.uint8)
    changed = np.abs(res.astype(int) - plate.astype(int)).max(2) > 0
    print(name, "| Ozzy px:", h_oz, "| hunter to helmet top px:", h_hu, "| changed outside the masks:", int((changed & ~full).sum()))
    assert (changed & ~full).sum() == 0
    Image.fromarray(res).save(f"{out}/ep00-sc01-sh006-{name}.png")
    Image.fromarray((full * 255).astype(np.uint8)).save(f"{out}/ep00-sc01-sh006-{name}-mask.png")
Image.fromarray(A).save(f"{out}/A-fixed.png"); Image.fromarray(B).save(f"{out}/B-fixed.png")

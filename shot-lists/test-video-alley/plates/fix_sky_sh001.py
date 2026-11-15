"""ep00-sc01-sh001 plate: the user's ChatGPT sky, fixed locally with no generation.
1. Graded so the sky is the same navy as shot 2's sky (its plate, from the approved aerial view): the camera tilts
   straight from this sky down into shot 2, so the bottom of this frame meets the top of shot 2's sky.
2. The bright stars' four-point flares turned into flat cel points with a slight round bloom.
3. Fine film grain added, matched to shot 2's sky. Then scaled to 1920x1080; k01 is the centre 70%.
Usage: python3 -I fix_sky_sh001.py <the ChatGPT sky.png> <ep00-sc01-sh002-plate-1672.png> <out_dir>"""
import sys, cv2, numpy as np
from PIL import Image
src, ref, out = sys.argv[1:4]
a = np.asarray(Image.open(src).convert("RGB").resize((1672, 941), Image.LANCZOS)).astype(np.float32)
H, W = a.shape[:2]
r = np.asarray(Image.open(ref).convert("RGB")).astype(np.float32)
# target colours from shot 2's open sky (right of the Chase Tower, above the skyline)
top2 = np.median(r[0:40, 1000:1650].reshape(-1, 3), 0)          # top of shot 2's frame
hi2 = np.median(r[0:12, 1000:1650].reshape(-1, 3), 0)
# background of this sky (stars removed) row by row
bg = cv2.medianBlur(a.astype(np.uint8), 15).astype(np.float32)
bg = cv2.GaussianBlur(bg, (0, 0), 25)
excess = a - bg
# 2. flares: the brightest stars get their cross spikes removed and a flat point with a soft round bloom
lum = excess @ np.float32([0.3, 0.59, 0.11])
# only the three bright stars drawn with four-point flares (the largest points, 80+ px above the sky); the rest stay as drawn
n, lab, st, cen = cv2.connectedComponentsWithStats((lum > 40).astype(np.uint8))
yy, xx = np.mgrid[0:H, 0:W]
for i in [j for j in range(1, n) if st[j, cv2.CC_STAT_AREA] >= 50]:
    cx, cy = cen[i]; rr = np.hypot(xx - cx, yy - cy)
    excess[rr < 22] = 0
    point = np.clip(3.2 - rr, 0, 1)[..., None] * (np.float32([222, 231, 232]) - 12)
    bloom = np.exp(-(rr / 4.5) ** 2)[..., None] * np.float32([40, 46, 60])
    excess += point + bloom
# 1. grade: a vertical ramp from a slightly darker navy at the top to shot 2's top-of-frame navy at the bottom
t = (np.arange(H, dtype=np.float32) / (H - 1))[:, None, None]
top1 = hi2 * 0.72
target = top1 * (1 - t) + top2 * t
res = target + excess
# 3. grain like shot 2's sky
rng = np.random.default_rng(1101)
g = cv2.GaussianBlur(rng.standard_normal((H, W)).astype(np.float32), (0, 0), 0.6); g /= g.std()
c = cv2.GaussianBlur(rng.standard_normal((H, W, 3)).astype(np.float32), (0, 0), 0.6); c /= c.std()
res = res + g[..., None] * 1.9 * 0.9 + c * 1.9 * 0.45
res = np.clip(res, 0, 255).astype(np.uint8)
im = Image.fromarray(res)
im.save(f"{out}/ep00-sc01-sh001-plate-1672.png")
im.resize((1920, 1080), Image.LANCZOS).save(f"{out}/ep00-sc01-sh001-plate.png")
cw, ch = round(W * 0.7), round(H * 0.7); x0, y0 = (W - cw) // 2, (H - ch) // 2
im.crop((x0, y0, x0 + cw, y0 + ch)).resize((1920, 1080), Image.LANCZOS).save(f"{out}/ep00-sc01-sh001-k01.png")
print("shot 2 top sky", top2.round(), "top of this sky", top1.round())

"""ep00-sc01-sh002 background plate, version 2, made from the approved aerial view with no generation, for Daiya's
violet night sky with flat cel clouds (README, Daiya, Night sky, 2026-11-16):
1. Only the comet and its glow are painted out, with the sky's own model, grain and stars; the clouds stay.
2. The sky and its clouds are regraded from navy to the violet of shot 1's approved sky, which the tilt runs out of:
   the hue turned about 40 degrees toward violet and the values lifted, so the top of this frame meets the bottom of
   shot 1's. Buildings, neon, the Chase Tower and its spire keep their own colours.
Usage: python3 -I make_plate_sh002_v2.py <locations/midtown-alley/midtown-alley-aerial-night.jpg> <out_dir> (zone_sh002_v2.py beside it)"""
import sys, cv2, numpy as np
from PIL import Image
from zone_sh002_v2 import ZONES, GAP, SPIRE, GLOW, COMET
src, out = sys.argv[1:3]
a = np.asarray(Image.open(src).convert("RGB")).astype(np.float32); Hh, Ww = a.shape[:2]
L = np.float32([0.3, 0.59, 0.11]); lum = a @ L
poly = lambda pts: cv2.fillPoly(np.zeros((Hh, Ww), np.uint8), [np.array(pts, np.int32)], 1).astype(bool)
zone = np.zeros((Hh, Ww), bool)
for z in ZONES + [GAP]: zone |= poly(z)
comet = poly(COMET) & zone
yy, xx = np.mgrid[0:Hh, 0:Ww]
rr = np.hypot(xx - GLOW[0][0], yy - GLOW[0][1])
# 1. sky model from sky far from the comet and its glow, iterated to drop clouds and stars
far_from_comet = ~cv2.dilate(poly(COMET).astype(np.uint8), np.ones((41, 41), np.uint8)).astype(bool)
def model(w, sig):
    # the sky changes mostly with height (the glow above the horizon), so it's smoothed more across than up and down
    w = w.astype(np.float32); sx, sy = sig * 2.0, sig * 0.35
    num = cv2.GaussianBlur(a * w[..., None], (0, 0), sigmaX=sx, sigmaY=sy)
    den = cv2.GaussianBlur(w, (0, 0), sigmaX=sx, sigmaY=sy)[..., None]
    return num / np.maximum(den, 1e-5)
hsv = cv2.cvtColor(a.astype(np.uint8), cv2.COLOR_RGB2HSV_FULL).astype(np.float32); hue = hsv[..., 0] * 360 / 256
# the horizon glow beside the comet, just under the zone's floor, so the sky there keeps its glow
band = (~zone) & (yy >= 200) & (yy <= 270) & (xx >= 1140) & (xx <= 1620) & (hue > 210) & (hue < 245) & (lum < 45)
src_px = (zone | band) & far_from_comet
clean = src_px & (lum < 32)
sky = model(clean, 45)
for _ in range(3):
    dl = lum - sky @ L
    clean = src_px & (np.abs(dl) < 4)
    clean = cv2.erode(clean.astype(np.uint8), np.ones((5, 5), np.uint8)).astype(bool)
    sky = model(clean, 45)
wide = model(clean, 160); wt = cv2.GaussianBlur(clean.astype(np.float32), (0, 0), 45)[..., None]
sky = sky * np.clip(wt / 0.08, 0, 1) + wide * (1 - np.clip(wt / 0.08, 0, 1))
dl = lum - sky @ L
# 2. what stays: dark detail (antennas, ink), the spire, the core of its glow, and the open sky's own stars
weak = zone & (dl > 6)
n, lab, st, _ = cv2.connectedComponentsWithStats(weak.astype(np.uint8), connectivity=8)
peak = np.zeros(n, np.float32); np.maximum.at(peak, lab[weak], dl[weak])
small = (st[:, cv2.CC_STAT_AREA] <= 14) & (peak > 14); small[0] = False
exc = a - sky
stars = small[lab] & ~comet & far_from_comet & (exc[..., 2] >= exc[..., 0])   # white or blue points, not pink sparks
spire = poly(SPIRE) & (np.abs(dl) > 6)
keep = (dl < -10) | stars | spire
keep = cv2.dilate(keep.astype(np.uint8), np.ones((3, 3), np.uint8)).astype(bool) & ((dl < -6) | stars | spire)
glowa = np.clip((rr - GLOW[1]) / (GLOW[2] - GLOW[1]), 0, 1)
# 3. fade along the zone's floor, so the low cloud bank thins upward instead of ending in a line
bottom = np.where(zone.any(0), Hh - 1 - np.argmax(zone[::-1], 0), 0).astype(np.float32)
k61 = np.ones((1, 61), np.uint8)
bottom = cv2.erode(cv2.dilate(bottom[None, :], k61), k61)         # closing: fills narrow tower notches only
bottom = cv2.GaussianBlur(bottom, (0, 0), sigmaX=3, sigmaY=0.1)
fade = np.clip((bottom - yy) / 22.0, 0, 1)
fade = np.where(comet, 1.0, fade)
# feather in from the zone's sides, so glow around the towers fades into the new sky (wider at the Chase Tower)
padded = np.pad(zone, ((8, 0), (0, 0)), constant_values=True).astype(np.uint8)   # the image's top isn't an edge
edt = cv2.distanceTransform(padded, cv2.DIST_L2, 5)[8:]
reach = np.where(((xx > 790) & (xx < 970)) | ((xx > 1075) & (xx < 1165)) | ((xx > 590) & (xx < 670)), 11.0, 4.0)
side = np.clip(edt / reach, 0, 1)
alpha = zone * (~keep) * fade * glowa * side
# version 2: only the comet and its glow come out; the clouds stay
comet_area = cv2.GaussianBlur(cv2.dilate(poly(COMET).astype(np.uint8), np.ones((31, 31), np.uint8)).astype(np.float32), (0, 0), 6)
alpha = alpha * np.clip(comet_area * 1.6, 0, 1)
alpha = cv2.GaussianBlur(alpha.astype(np.float32), (0, 0), 0.7) * zone
# 4. the replacement: sky model + the sky's grain + stars at the open sky's density
rng = np.random.default_rng(1101)
resid = (a - sky)[clean]; sd = float(np.median(np.abs(resid - np.median(resid, 0)), 0).mean() * 1.4826)
g = cv2.GaussianBlur(rng.standard_normal((Hh, Ww)).astype(np.float32), (0, 0), 0.6); g /= g.std()
ch = cv2.GaussianBlur(rng.standard_normal((Hh, Ww, 3)).astype(np.float32), (0, 0), 0.6); ch /= ch.std()
fill = sky + g[..., None] * sd * 0.9 + ch * sd * 0.45
dens = (small.sum()) / max((zone & far_from_comet).sum(), 1)
area = (alpha > 0.6) & ~far_from_comet | (alpha > 0.6) & ~(lum < 32)
k = rng.poisson(dens * area.sum()); ys, xs = np.nonzero(area)
pk = (a - sky)[stars & (dl == cv2.dilate(dl, np.ones((3, 3), np.uint8)))]
for i in rng.choice(len(ys), size=min(k, len(ys)), replace=False):
    y, x = ys[i], xs[i]; amp = pk[rng.integers(len(pk))]
    fill[y, x] += amp
    for dy, dx in ((0, 1), (1, 0), (0, -1), (-1, 0)):
        if 0 <= y + dy < Hh and 0 <= x + dx < Ww: fill[y + dy, x + dx] += amp * 0.25
# version 2: near the horizon, the comet's head sat in front of the haze and the low clouds, so there the gap is filled
# row by row from the colours just left and right of it, plus the same grain, instead of the plain sky model
gap = alpha > 0.02
rowfill = fill.copy()
for y in range(170, 275):
    xs = np.nonzero(gap[y, 1100:1600])[0]
    if len(xs) == 0: continue
    xl, xr = 1100 + xs[0], 1100 + xs[-1]
    cl = np.median(a[y, max(xl - 14, 0):xl - 2], 0); cr = np.median(a[y, xr + 3:xr + 15], 0)
    t = (np.arange(xl, xr + 1) - xl) / max(xr - xl, 1)
    rowfill[y, xl:xr + 1] = cl[None] * (1 - t[:, None]) + cr[None] * t[:, None]
rowfill = cv2.GaussianBlur(rowfill, (0, 0), sigmaX=1, sigmaY=3) + g[..., None] * sd * 0.9 + ch * sd * 0.45
blend = np.clip((yy - 170) / 25.0, 0, 1)[..., None]
fill = fill * (1 - blend) + rowfill * blend
res = np.clip(a * (1 - alpha[..., None]) + fill * alpha[..., None], 0, 255)
# version 2: regrade the sky and clouds to the violet night sky
hsv2 = cv2.cvtColor(res.astype(np.uint8), cv2.COLOR_RGB2HSV_FULL).astype(np.float32)
H2, S2, V2 = hsv2[..., 0] * 360 / 256, hsv2[..., 1] / 255, hsv2[..., 2] / 255
Vsky = cv2.cvtColor(np.clip(sky, 0, 255).astype(np.uint8), cv2.COLOR_RGB2HSV_FULL)[..., 2].astype(np.float32) / 255
# sky-coloured: blue-violet, not too bright (tower glass, neon), not much darker than the sky (ink lines, dark frames)
skyish = (np.clip((H2 - 198) / 8, 0, 1) * np.clip((256 - H2) / 8, 0, 1) * np.clip((0.66 - V2) / 0.08, 0, 1)
          * np.clip((S2 - 0.25) / 0.1, 0, 1) * np.clip((V2 - 0.6 * Vsky) / (0.15 * Vsky + 1e-3), 0, 1))
# where to regrade: the open sky, a 25 px margin round it (the strip of old sky beside each tower), and the low cloud band
region = cv2.dilate(zone.astype(np.uint8), np.ones((51, 51), np.uint8)).astype(np.float32)
for (x0, x1), (y0, y1) in (((0, 92), (95, 137)), ((406, 470), (140, 212)), ((660, 812), (140, 248)), ((946, Ww), (140, 285))):
    region[y0:y1, x0:x1] = 1
region[300:] = 0
region = cv2.GaussianBlur(region, (0, 0), 2)
w = np.clip(region * skyish, 0, 1)
w = cv2.GaussianBlur(w, (0, 0), 0.8)
Ht = np.mod(H2 + 40, 360); Vt = np.clip(0.33 + (V2 - 0.14) * 0.55, 0, 1)
hsv_t = np.stack([Ht * 256 / 360, S2 * 255, Vt * 255], -1)
hsv_t[..., 0] = np.clip(hsv_t[..., 0], 0, 255.99)
T = cv2.cvtColor(hsv_t.astype(np.uint8), cv2.COLOR_HSV2RGB_FULL).astype(np.float32)
res = np.clip(res * (1 - w[..., None]) + T * w[..., None], 0, 255).astype(np.uint8)
Image.fromarray(res).save(f"{out}/ep00-sc01-sh002-plate-1672.png")
Image.fromarray(res).resize((1920, 1080), Image.LANCZOS).save(f"{out}/ep00-sc01-sh002-plate.png")
print("grain sd", round(sd, 2), "star density", round(dens * 1e4, 2), "per 10k px, stars added", min(k, len(ys)))

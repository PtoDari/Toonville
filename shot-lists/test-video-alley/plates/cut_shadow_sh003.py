"""Cut Ozzy's shadow from the approved low walking shot (midtown-alley-low-walk-night.jpg), as a soft mask, with how much
it darkens the wall, ready to lay onto shot 3's plate B for k02. No generation.
Usage: python3 -I cut_shadow_sh003.py <locations/midtown-alley/midtown-alley-low-walk-night.jpg> <out_dir>"""
import sys, cv2, numpy as np
from PIL import Image
src, out = sys.argv[1:3]
a = np.asarray(Image.open(src).convert("RGB")).astype(np.float32); H, W = a.shape[:2]
box = np.zeros((H, W), bool); box[0:668, 125:540] = True
r = cv2.GaussianBlur(a[..., 0], (0, 0), 3)
lum = cv2.GaussianBlur(a @ np.float32([0.3, 0.59, 0.11]), (0, 0), 3)
m = (r < 58) & (lum < 30) & box          # dark in every channel: the shadow, not the grey plinth at the wall's foot
n, lab, st, _ = cv2.connectedComponentsWithStats(m.astype(np.uint8), connectivity=8)
big = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA]); m = lab == big
m = cv2.morphologyEx(m.astype(np.uint8), cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (9, 9)))
# fill holes (dark mortar inside the shadow is part of it)
ff = m.copy(); cv2.floodFill(ff, np.zeros((H + 2, W + 2), np.uint8), (W - 1, H - 1), 1); m = m | (1 - ff)
m = cv2.morphologyEx(m, cv2.MORPH_OPEN, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5)))
soft = cv2.GaussianBlur(m.astype(np.float32), (0, 0), 1.2)
# below about y 645 the wall's dark foot runs into the drain, so the feet fade out where they meet it
soft *= np.clip((660 - np.arange(H, dtype=np.float32)) / 15, 0, 1)[:, None]
lit = a[(~m.astype(bool)) & box & (r > 80)].mean(0); dark = a[m.astype(bool) & (r < 40)].mean(0)
ratio = dark / lit
Image.fromarray((soft * 255).astype(np.uint8)).save(f"{out}/ozzy-shadow-mask-lowwalk.png")
np.save(f"{out}/ozzy-shadow-ratio.npy", ratio)
ys, xs = np.nonzero(m); print("shadow box", xs.min(), xs.max(), ys.min(), ys.max(), "darkening per channel", ratio.round(2))
ov = a.copy(); ov[m.astype(bool)] = ov[m.astype(bool)] * 0.4 + np.float32([255, 255, 0]) * 0.6
Image.fromarray(ov.astype(np.uint8)).crop((100, 0, 620, 700)).save(f"{out}/shadow-mask-check.jpg", quality=88)

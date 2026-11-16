"""ep00-sc01-sh003 k02: plate B with Ozzy's shadow on the wall, with no generation. The shadow's shape is cut from the
approved low walking shot (cut_shadow.py), warped in perspective onto the receding wall: its shoulders at the wall's top
edge, so the wall's top cuts it off above the shoulders, and its legs running down out of the bottom of the frame.
It's laid only on the wall, below its top edge, and darkens the wall toward a cool violet, like the low walking shot's shadow.
Usage: python3 -I make_k02_sh003.py <plate-b-1672.png> <ozzy-shadow-mask-lowwalk.png> <out_dir>"""
import sys, cv2, numpy as np
from PIL import Image
plate, maskp, out = sys.argv[1:4]
a = np.asarray(Image.open(plate).convert("RGB")).astype(np.float32); H, W = a.shape[:2]
m = np.asarray(Image.open(maskp).convert("L")).astype(np.float32) / 255
m = m[0:668, 150:560]                                         # the shadow, shoulders at the top row, feet at the bottom
mh, mw = m.shape
ledge = lambda x: 434 - 0.821 * (x - 520)                     # the cyan top edge of the wall, measured on plate B
xl, xr = 620, 1100
quad = np.float32([[xl, ledge(xl) - 14], [xr, ledge(xr) - 14], [xr, 1085], [xl, 1005]])
M = cv2.getPerspectiveTransform(np.float32([[0, 0], [mw, 0], [mw, mh], [0, mh]]), quad)
sh = cv2.warpPerspective(m, M, (W, H), flags=cv2.INTER_LINEAR)
# only on the wall: below its top edge, right of its left corner, clear of the lamp
yy, xx = np.mgrid[0:H, 0:W]
wall = ((yy > ledge(xx) + 1.5) & (xx > 465)).astype(np.float32)
wall = cv2.GaussianBlur(wall, (0, 0), 0.8)
alpha = np.clip(sh, 0, 1) * wall
alpha = cv2.GaussianBlur(alpha, (0, 0), 0.9)[..., None]
dark = a * np.float32([0.30, 0.33, 0.52])
res = np.clip(a * (1 - alpha) + dark * alpha, 0, 255).astype(np.uint8)
Image.fromarray(res).save(f"{out}/ep00-sc01-sh003-k02-1672.png")
Image.fromarray(res).resize((1920, 1080), Image.LANCZOS).save(f"{out}/ep00-sc01-sh003-k02.png")
print("shadow quad", quad.round().tolist())

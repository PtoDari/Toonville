"""ep00-sc01-sh002 k02: Ozzy, made on his own with the compositing block (the user's ChatGPT image, 1086x1448, on flat grey),
pasted onto the locked plate for shot 2, version 3, at 1920x1080. No generation.
  - Cut: the flat grey background flood-filled from the edges, so the greys inside him stay.
  - Fixes on his left hand: the "$" ChatGPT drew on the back of the hand and the governor chip it drew as a raised disc on the
    back of the wrist are filled flat with the median of the skin around each, with a soft edge. The "$" belongs on the web of the thumb and the chip flush inside
    the wrist, both turned away here.
  - Placed: on the alley's road just right of the left kerb, partway down, walking toward the camera, his right side to the wall
    on the viewer's left. Sized by the floor's perspective, measured from the utility boxes and trash bags along the left
    sidewalk: about 0.234 px per cm for each pixel below the horizon at y 266, so at his feet's y 700 he's about 194 px tall.
  - Check: no pixel outside his mask differs from the plate.
Usage: python3 -I composite_k02_sh002.py <the ChatGPT Ozzy image> <ep00-sc01-sh002-plate.png> <out.png>"""
import sys, cv2, numpy as np
from PIL import Image
src, plate_p, dst = sys.argv[1:4]
a = np.asarray(Image.open(src).convert("RGB")).copy(); H, W = a.shape[:2]
# 1. cut: flood-fill the grey from the image's edges
ff = np.zeros((H + 2, W + 2), np.uint8)
work = a.copy()
for seed in [(0, 0), (W - 1, 0), (0, H - 1), (W - 1, H - 1), (W // 2, 0), (W // 2, H - 1), (0, H // 2), (W - 1, H // 2)]:
    if ff[seed[1] + 1, seed[0] + 1] == 0:
        cv2.floodFill(work, ff, seed, (0, 0, 0), (8, 8, 8), (8, 8, 8), cv2.FLOODFILL_MASK_ONLY | cv2.FLOODFILL_FIXED_RANGE | 8 | (255 << 8))
bg = ff[1:-1, 1:-1] > 0
m = (~bg).astype(np.uint8)
n, lab, st, _ = cv2.connectedComponentsWithStats(m, connectivity=8)
m = (lab == 1 + int(np.argmax(st[1:, cv2.CC_STAT_AREA]))).astype(np.uint8)
# 2. fixes on the left hand (viewer's right): the chip disc and the "$", filled from the skin around them
chip = np.zeros((H, W), np.uint8); cv2.circle(chip, (761, 836), 25, 1, -1)
box = np.zeros((H, W), np.uint8); box[866:912, 716:748] = 1
lum = a.astype(np.float32) @ np.float32([0.3, 0.59, 0.11])
dollar = np.zeros((H, W), np.uint8); cv2.ellipse(dollar, (732, 889), (17, 25), 0, 0, 360, 1, -1)       # the whole "$", with its soft edge
fix = (chip | dollar) & m
# the skin there is flat cel colour, so each area is filled with the median of the skin pixels just around it, with a soft edge
f = a.astype(np.float32)
for region in (chip & m, dollar & m):
    ring = (cv2.dilate(region, np.ones((15, 15), np.uint8)) > 0) & (region == 0) & (m > 0)
    R, G, B = f[..., 0], f[..., 1], f[..., 2]
    skin = ring & (R > G + 15) & (G > B) & (R > 90) & (R < 235)
    col = np.median(f[skin], 0)
    soft = cv2.GaussianBlur(region.astype(np.float32), (0, 0), 1.5)[..., None] * (m[..., None] > 0)
    f = f * (1 - soft) + col * soft
a = np.clip(np.round(f), 0, 255).astype(np.uint8)
# 3. scale and place
plate = np.asarray(Image.open(plate_p).convert("RGB")).astype(np.float32)
x0, y0, w, h = cv2.boundingRect(m)
FEET_Y, FEET_X, HORIZON, K, HEIGHT_CM = 700, 1200, 266, 0.234, 190.5
target_h = round((FEET_Y - HORIZON) * K * HEIGHT_CM / 100)
s = target_h / h
cut = cv2.resize(a[y0:y0 + h, x0:x0 + w], (round(w * s), round(h * s)), interpolation=cv2.INTER_AREA).astype(np.float32)
alpha = cv2.resize(m[y0:y0 + h, x0:x0 + w].astype(np.float32), (cut.shape[1], cut.shape[0]), interpolation=cv2.INTER_AREA)
alpha[alpha < 0.02] = 0
px, py = FEET_X - cut.shape[1] // 2, FEET_Y - cut.shape[0]
out = plate.copy(); sub = out[py:py + cut.shape[0], px:px + cut.shape[1]]
sub[:] = sub * (1 - alpha[..., None]) + cut * alpha[..., None]
out = np.clip(np.round(out), 0, 255).astype(np.uint8)
full = np.zeros(plate.shape[:2], np.uint8); full[py:py + cut.shape[0], px:px + cut.shape[1]] = alpha > 0
changed = np.abs(out.astype(int) - plate.astype(int)).max(2) > 0
print("his height px:", cut.shape[0], "| pixels changed outside his mask:", int((changed & (full == 0)).sum()),
      "| pixels painted on his hand:", int(fix.sum()))
assert (changed & (full == 0)).sum() == 0
Image.fromarray(out).save(dst)
Image.fromarray(full * 255).save(dst.replace(".png", "-mask.png"))
Image.fromarray(a).save(dst.replace(".png", "-fixed-source.png"))

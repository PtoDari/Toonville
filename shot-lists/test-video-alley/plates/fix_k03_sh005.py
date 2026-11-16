"""ep00-sc01-sh005 k03: the user's RaisingPanel.png, Ozzy pasted onto the locked plate for k02 (360Alley, 1920x1080),
his right fist raised at the loading bay. Two local fixes, with no generation, then the plate-lock check.
  1. A few stray changed pixels, disconnected from his figure (within 13 px of it, between his legs), go back to the plate,
     so the only change to the plate is his figure.
  2. The small New Era flag on the right side of his balaclava is painted out with the knit's navy: it belongs on his
     left side, which is turned away here.
Usage: python3 -I fix_k03_sh005.py <RaisingPanel.png> <ep00-sc01-sh005-plate-k02.png> <out.png>"""
import sys, cv2, numpy as np
from PIL import Image
src, plate_p, dst = sys.argv[1:4]
a = np.asarray(Image.open(src).convert("RGB")).copy()
p = np.asarray(Image.open(plate_p).convert("RGB"))
d = (np.abs(a.astype(int) - p.astype(int)).max(2) > 0).astype(np.uint8)
n, lab, st, _ = cv2.connectedComponentsWithStats(d, connectivity=8)
main = 1 + int(np.argmax(st[1:, cv2.CC_STAT_AREA]))
figure = lab == main
a[(d > 0) & ~figure] = p[(d > 0) & ~figure]                          # 1. the stray pixels back to the plate
# 2. the flag: its light pixels in a small box below the eye opening, inpainted from the navy knit around them
box = np.zeros(d.shape, np.uint8); box[480:493, 1271:1283] = 1
lum = a.astype(np.float32) @ np.float32([0.3, 0.59, 0.11])
flag = ((box > 0) & (lum > 50)).astype(np.uint8)
flag = cv2.dilate(flag, np.ones((5, 5), np.uint8)) & box & figure.astype(np.uint8)
a = cv2.inpaint(a, flag, 3, cv2.INPAINT_TELEA)
out_changed = (np.abs(a.astype(int) - p.astype(int)).max(2) > 0) & ~figure
print("pixels changed outside his figure:", int(out_changed.sum()), "| flag pixels painted:", int(flag.sum()))
assert out_changed.sum() == 0
Image.fromarray(a).save(dst)
Image.fromarray((figure * 255).astype(np.uint8)).save(dst.replace(".png", "-mask.png"))

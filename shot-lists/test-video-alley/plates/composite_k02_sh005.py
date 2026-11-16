"""ep00-sc01-sh005 k02: Ozzy cut from the user's Night_Walk.png (1672x941, a whole scene ChatGPT drew on the street
corner by Orion, whose background can't be used under the plate lock) and pasted onto the locked plate for k02 (360Alley, the
view back up Orion's alley), at 1920x1080. No generation.
  - Cut: a hand-traced outline refined with GrabCut, with a 1 px soft edge.
  - Fix: the "$" ChatGPT put on the back of his left hand is painted out with the hand's own skin; it belongs on the web
    of the thumb, which is turned away here.
  - Placed: walking toward the camera on the sidewalk on Orion's side, just past its entrance, scaled by the plate's
    perspective: the horizon at y 690, and his height 1.98 times his feet's distance below it, as at the loading bay in k03.
  - Check: no pixel outside his mask differs from the plate.
Usage: python3 -I composite_k02_sh005.py <Night_Walk.png> <ep00-sc01-sh005-plate-k02.png> <out.png>"""
import sys, cv2, numpy as np
from PIL import Image
src, plate_p, dst = sys.argv[1:4]
a = np.asarray(Image.open(src).convert("RGB")); H, W = a.shape[:2]
OUTLINE = [(1185, 288), (1205, 290), (1222, 300), (1226, 330), (1222, 365), (1214, 385), (1240, 395), (1262, 402), (1275, 420),
           (1285, 470), (1290, 530), (1288, 580), (1282, 600), (1278, 640), (1272, 665), (1258, 668), (1248, 650), (1245, 620),
           (1240, 600), (1238, 650), (1240, 700), (1238, 760), (1236, 810), (1240, 850), (1245, 875), (1243, 905), (1200, 907),
           (1176, 898), (1180, 860), (1182, 830), (1180, 760), (1178, 700), (1168, 695), (1162, 760), (1160, 800), (1158, 850),
           (1150, 862), (1126, 860), (1121, 830), (1124, 790), (1117, 740), (1117, 690), (1122, 640), (1128, 612), (1130, 636),
           (1118, 642), (1100, 632), (1093, 600), (1088, 560), (1085, 500), (1092, 450), (1106, 415), (1135, 400), (1160, 395),
           (1157, 370), (1152, 330), (1160, 300)]
poly = np.zeros((H, W), np.uint8); cv2.fillPoly(poly, [np.array(OUTLINE, np.int32)], 1)
gc = np.full((H, W), cv2.GC_BGD, np.uint8)
gc[cv2.dilate(poly, np.ones((21, 21), np.uint8)) > 0] = cv2.GC_PR_BGD
gc[poly > 0] = cv2.GC_PR_FGD
gc[cv2.erode(poly, np.ones((17, 17), np.uint8)) > 0] = cv2.GC_FGD
bgm, fgm = np.zeros((1, 65), np.float64), np.zeros((1, 65), np.float64)
cv2.grabCut(a.copy(), gc, None, bgm, fgm, 6, cv2.GC_INIT_WITH_MASK)
m = ((gc == cv2.GC_FGD) | (gc == cv2.GC_PR_FGD)).astype(np.uint8)
n, lab, st, _ = cv2.connectedComponentsWithStats(m, connectivity=8)
m = (lab == 1 + int(np.argmax(st[1:, cv2.CC_STAT_AREA]))).astype(np.uint8)     # his figure only
m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5)))
# the "$" on the back of his left hand: its dark ink strokes inside a small box on the hand, filled from the skin around
fix = a.copy()
box = np.zeros((H, W), np.uint8); box[608:640, 1250:1276] = 1
lum = a.astype(np.float32) @ np.float32([0.3, 0.59, 0.11])
ink = ((box > 0) & (lum < 70) & (m > 0)).astype(np.uint8)
ink = cv2.dilate(ink, np.ones((3, 3), np.uint8)) & box & m
fix = cv2.inpaint(fix, ink, 3, cv2.INPAINT_TELEA)
# scale and place on the plate
plate = np.asarray(Image.open(plate_p).convert("RGB")).astype(np.float32)
x0, y0, w, h = cv2.boundingRect(m)
TARGET_H, FEET = 416, (960, 900)            # his height in px at 1920x1080; the bottom centre of his feet on the plate
s = TARGET_H / h
cut = cv2.resize(fix[y0:y0 + h, x0:x0 + w], (round(w * s), round(h * s)), interpolation=cv2.INTER_AREA).astype(np.float32)
alpha = cv2.resize(m[y0:y0 + h, x0:x0 + w].astype(np.float32), (cut.shape[1], cut.shape[0]), interpolation=cv2.INTER_AREA)
alpha = cv2.GaussianBlur(alpha, (0, 0), 0.6)
alpha[alpha < 0.02] = 0
px, py = FEET[0] - cut.shape[1] // 2, FEET[1] - cut.shape[0]
out = plate.copy(); sub = out[py:py + cut.shape[0], px:px + cut.shape[1]]
sub[:] = sub * (1 - alpha[..., None]) + cut * alpha[..., None]
out = np.clip(np.round(out), 0, 255).astype(np.uint8)
full_mask = np.zeros(plate.shape[:2], np.uint8); full_mask[py:py + cut.shape[0], px:px + cut.shape[1]] = (alpha > 0)
changed = (np.abs(out.astype(int) - plate.astype(int)).max(2) > 0)
print("his height px:", cut.shape[0], "| pixels changed outside his mask:", int((changed & (full_mask == 0)).sum()),
      "| \"$\" pixels painted:", int(ink.sum()))
assert (changed & (full_mask == 0)).sum() == 0
Image.fromarray(out).save(dst)
Image.fromarray(full_mask * 255).save(dst.replace(".png", "-mask.png"))

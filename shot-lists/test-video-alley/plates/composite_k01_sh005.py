"""ep00-sc01-sh005 k01: Ozzy cut from the user's Neon_Sign.png (1672x941, a whole scene ChatGPT drew, whose background
can't be used under the plate lock) and pasted onto the locked plate for k01, Orion's entrance, at 1920x1080. No generation.
  - Cut: a hand-traced outline refined with GrabCut, with a 1 px soft edge.
  - Fix: the "$" ChatGPT put on the back of his left hand is painted out with the hand's own skin; it belongs on the web
    of the thumb, which is turned away here.
  - Placed: walking toward the right on the pavement in front of the forecourt, just right of the McDuffie mural, scaled
    so he stands about 1.9 times the gold posts by the doors (about 1 m), a little nearer the camera than they are.
  - Check: no pixel outside his mask differs from the plate.
Usage: python3 -I composite_k01_sh005.py <Neon_Sign.png> <ep00-sc01-sh005-plate-k01.png> <out.png>"""
import sys, cv2, numpy as np
from PIL import Image
src, plate_p, dst = sys.argv[1:4]
a = np.asarray(Image.open(src).convert("RGB")); H, W = a.shape[:2]
OUTLINE = [(985, 244), (1012, 246), (1030, 262), (1034, 300), (1028, 330), (1012, 342), (1030, 355), (1048, 385), (1062, 430),
           (1080, 480), (1090, 525), (1098, 548), (1108, 570), (1108, 605), (1098, 618), (1080, 612), (1068, 585), (1062, 560),
           (1050, 540), (1040, 520), (1035, 560), (1040, 640), (1050, 700), (1058, 760), (1060, 800), (1070, 830), (1110, 845),
           (1135, 862), (1132, 893), (1090, 905), (1045, 900), (1030, 880), (1028, 850), (1022, 815), (1015, 790), (1000, 760),
           (980, 725), (965, 705), (950, 740), (915, 790), (915, 835), (905, 860), (870, 860), (835, 840), (828, 815), (845, 800),
           (858, 780), (858, 750), (870, 705), (890, 650), (905, 610), (905, 580), (880, 575), (868, 600), (860, 625), (840, 630),
           (828, 612), (825, 580), (835, 560), (838, 520), (845, 470), (860, 420), (880, 380), (905, 348), (935, 330), (960, 322),
           (950, 300), (948, 270), (960, 252)]
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
box = np.zeros((H, W), np.uint8); box[550:572, 1076:1096] = 1
lum = a.astype(np.float32) @ np.float32([0.3, 0.59, 0.11])
ink = ((box > 0) & (lum < 70) & (m > 0)).astype(np.uint8)
ink = cv2.dilate(ink, np.ones((3, 3), np.uint8)) & box & m
fix = cv2.inpaint(fix, ink, 3, cv2.INPAINT_TELEA)
# scale and place on the plate
plate = np.asarray(Image.open(plate_p).convert("RGB")).astype(np.float32)
x0, y0, w, h = cv2.boundingRect(m)
TARGET_H, FEET = 355, (760, 990)            # his height in px at 1920x1080; the bottom centre of his feet on the plate
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

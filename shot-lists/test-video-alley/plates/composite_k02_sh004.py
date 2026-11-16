"""ep00-sc01-sh004 k02: shot 3's plate A, exactly as approved, with only Ozzy's legs and their reflections taken from the
ChatGPT edit (which lines up with plate A to within a pixel but redrew the rest). No generation.\nThe legs are traced by hand and refined with GrabCut.
Usage: python3 -I composite_k02_sh004.py <ep00-sc01-sh003-plate-a-1672.png> <the ChatGPT k02 image> <out_dir>"""
import sys, cv2, numpy as np
from PIL import Image
pa_p, k_p, out = sys.argv[1:4]
pa = np.asarray(Image.open(pa_p).convert("RGB")).astype(np.float32)
k = np.asarray(Image.open(k_p).convert("RGB")).astype(np.float32); H, W = k.shape[:2]
# his legs, socks, sneakers and their reflections, traced on the ChatGPT edit (x offset 900), then refined with GrabCut
X = 900
polys = [
    [(150,0),(300,0),(302,200),(300,420),(290,470),(280,560),(300,600),(298,680),(150,670),(150,560),(185,540),(185,480),(160,420),(145,300),(145,100)],
    [(380,0),(600,0),(598,200),(590,330),(575,380),(560,440),(585,500),(580,600),(560,735),(395,730),(390,660),(400,560),(445,440),(440,360),(415,300),(385,200)],
    [(150,680),(300,680),(300,780),(275,860),(195,860),(160,780)],
    [(390,740),(580,740),(600,800),(590,880),(410,880),(395,820)],
]
poly = np.zeros((H, W), np.uint8)
for pts in polys: cv2.fillPoly(poly, [np.array([(x + X, y) for x, y in pts], np.int32)], 1)
gc = np.full((H, W), cv2.GC_BGD, np.uint8)
gc[cv2.dilate(poly, np.ones((25, 25), np.uint8)) > 0] = cv2.GC_PR_BGD
gc[poly > 0] = cv2.GC_PR_FGD
gc[cv2.erode(poly, np.ones((25, 25), np.uint8)) > 0] = cv2.GC_FGD
bgm, fgm = np.zeros((1, 65), np.float64), np.zeros((1, 65), np.float64)
cv2.grabCut(k.astype(np.uint8), gc, None, bgm, fgm, 5, cv2.GC_INIT_WITH_MASK)
m = ((gc == cv2.GC_FGD) | (gc == cv2.GC_PR_FGD)).astype(np.uint8)
m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5)))
m = cv2.dilate(m, np.ones((3, 3), np.uint8))
alpha = cv2.GaussianBlur(m.astype(np.float32), (0, 0), 1.2)[..., None]
res = np.clip(pa * (1 - alpha) + k * alpha, 0, 255).astype(np.uint8)
Image.fromarray(res).save(f"{out}/ep00-sc01-sh004-k02-1672.png")
Image.fromarray(res).resize((1920, 1080), Image.LANCZOS).save(f"{out}/ep00-sc01-sh004-k02.png")
Image.fromarray((m * 255).astype(np.uint8)).save(f"{out}/k02-legs-mask.png")
ys, xs = np.nonzero(m); print("legs mask box", xs.min(), xs.max(), ys.min(), ys.max(), "px", int(m.sum()))

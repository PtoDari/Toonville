"""ep00-sc01-sh003 plate A, last step: the small patch of navy sky at the top, between the towers, shifted to Daiya's
violet night sky (hue turned 40 degrees toward violet, values lowered), so it matches shots 1 and 2. Lit windows keep their colour.
Usage: python3 -I sky_sh003_a.py <derained-low.png> <out-1672.png>"""
import sys, cv2, numpy as np
from PIL import Image
src, dst = sys.argv[1:3]
a = np.asarray(Image.open(src).convert("RGB")).astype(np.float32); H, W = a.shape[:2]
hsv = cv2.cvtColor(a.astype(np.uint8), cv2.COLOR_RGB2HSV_FULL).astype(np.float32)
h, s, v = hsv[..., 0] * 360 / 256, hsv[..., 1] / 255, hsv[..., 2] / 255
box = np.zeros((H, W), np.float32); box[0:175, 1128:1300] = 1
skyish = np.clip((h - 195) / 8, 0, 1) * np.clip((250 - h) / 8, 0, 1) * np.clip((0.42 - v) / 0.08, 0, 1) * np.clip((s - 0.45) / 0.1, 0, 1)
w = cv2.GaussianBlur(box * skyish, (0, 0), 1.2)
t = np.stack([np.mod(h + 40, 360) * 256 / 360, s * 255, np.clip(v * 0.62, 0, 1) * 255], -1); t[..., 0] = np.clip(t[..., 0], 0, 255.99)
T = cv2.cvtColor(t.astype(np.uint8), cv2.COLOR_HSV2RGB_FULL).astype(np.float32)
Image.fromarray(np.clip(a * (1 - w[..., None]) + T * w[..., None], 0, 255).astype(np.uint8)).save(dst)

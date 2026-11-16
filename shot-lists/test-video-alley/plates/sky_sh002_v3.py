"""ep00-sc01-sh002 plate, version 3, last step: the strip of navy sky above the far towers shifted to Daiya's violet
night sky, the same way as shot 3's plate A (hue turned 40 degrees toward violet, values lowered), so the tilt down
from shot 1's sky meets it. Only blue sky and haze pixels inside a hand-traced outline of the sky change; the towers' lit
windows, their brighter blue faces and the stars keep their colour.
Usage: python3 -I sky_sh002_v3.py <derained-1672.png> <out-1672.png>"""
import sys, cv2, numpy as np
from PIL import Image
src, dst = sys.argv[1:3]
a = np.asarray(Image.open(src).convert("RGB")).astype(np.float32); H, W = a.shape[:2]
hsv = cv2.cvtColor(a.astype(np.uint8), cv2.COLOR_RGB2HSV_FULL).astype(np.float32)
h, s, v = hsv[..., 0] * 360 / 256, hsv[..., 1] / 255, hsv[..., 2] / 255
# the sky between the far towers, traced on the 1672-wide image: left of the spire tower, and right of it
SKY = [[(1187, 0), (1329, 0), (1329, 14), (1319, 17), (1312, 33), (1312, 130), (1297, 130), (1297, 62), (1258, 62),
        (1258, 130), (1210, 130), (1210, 67), (1187, 67)],
       [(1337, 0), (1447, 0), (1447, 32), (1403, 32), (1400, 58), (1360, 58), (1360, 130), (1352, 130), (1352, 33), (1346, 33),
        (1346, 16), (1337, 14)]]
zone = np.zeros((H, W), np.uint8); cv2.fillPoly(zone, [np.array(p, np.int32) for p in SKY], 1)
skyish = (np.clip((h - 195) / 8, 0, 1) * np.clip((250 - h) / 8, 0, 1) * np.clip((0.55 - v) / 0.08, 0, 1)
          * np.clip((s - 0.35) / 0.1, 0, 1))
# full strength down to y 65, fading out by y 115, so the violet melts into the blue haze between the towers
fade = np.clip((115 - np.arange(H, dtype=np.float32)) / 50, 0, 1)[:, None]
w = cv2.GaussianBlur(zone.astype(np.float32) * skyish * fade, (0, 0), 1.2)
t = np.stack([np.mod(h + 40, 360) * 256 / 360, s * 255, np.clip(v * 0.62, 0, 1) * 255], -1); t[..., 0] = np.clip(t[..., 0], 0, 255.99)
T = cv2.cvtColor(t.astype(np.uint8), cv2.COLOR_HSV2RGB_FULL).astype(np.float32)
Image.fromarray(np.clip(a * (1 - w[..., None]) + T * w[..., None], 0, 255).astype(np.uint8)).save(dst)

"""ep00-sc01-sh001 k02: the comet, made on its own with the glowing-element block (the user's ChatGPT image, 1672x941, on
pure black), added to shot 1's locked sky plate at 1920x1080. No generation.
  - Black: the background's faint noise (at most 4 levels) is taken off every pixel, so the black is exactly 0 and the glow
    still fades smoothly to it.
  - Sized and turned: scaled so the head is about a sixteenth of the frame's width (304 px across in the image, 120 px here),
    as in the approved aerial view, and turned 9 degrees clockwise, so it travels down toward the lower right at about 35
    degrees below the horizontal, as the README's comet does. In the image it ran at about 26 degrees.
  - Placed: its head just right of the centre of the frame, its tail trailing up toward the upper left.
  - Added: the glow and tail by screen blend, so the black drops out and the sky shows through the glow; the rocky head
    (a disc fitted to it) on top, opaque, so stars and clouds don't show through the rock.
  - Check: no pixel outside the comet and its glow differs from the plate.
Usage: python3 -I composite_k02_sh001.py <the ChatGPT comet image> <ep00-sc01-sh001-plate.png> <out.png>"""
import sys, cv2, numpy as np
from PIL import Image
src, plate_p, dst = sys.argv[1:4]
e = np.asarray(Image.open(src).convert("RGB")).astype(np.float32)
FLOOR = 4
e = np.clip((e - FLOOR) * 255 / (255 - FLOOR), 0, 255)
H, W = e.shape[:2]
HEAD_C, HEAD_R = (1183, 610), 148                     # the rocky disc in the ChatGPT image
head = np.zeros((H, W), np.float32); cv2.circle(head, HEAD_C, HEAD_R, 1.0, -1)
head = cv2.GaussianBlur(head, (0, 0), 1.5)
plate = np.asarray(Image.open(plate_p).convert("RGB")).astype(np.float32); PH, PW = plate.shape[:2]
SCALE, TURN, TARGET = 120 / 304, -9.0, (1050, 560)    # TURN: degrees, negative turns clockwise on screen
small = cv2.resize(e, (round(W * SCALE), round(H * SCALE)), interpolation=cv2.INTER_AREA)
shead = cv2.resize(head, (small.shape[1], small.shape[0]), interpolation=cv2.INTER_AREA)
c = (HEAD_C[0] * SCALE, HEAD_C[1] * SCALE)
M = cv2.getRotationMatrix2D(c, TURN, 1.0); M[0, 2] += TARGET[0] - c[0]; M[1, 2] += TARGET[1] - c[1]
el = cv2.warpAffine(small, M, (PW, PH), flags=cv2.INTER_LINEAR, borderValue=(0, 0, 0))
ha = cv2.warpAffine(shead, M, (PW, PH), flags=cv2.INTER_LINEAR, borderValue=0)
el[el < 0.5] = 0; ha[ha < 0.01] = 0
p, x = plate / 255, el / 255
out = 1 - (1 - p) * (1 - x)                           # screen
out = out * (1 - ha[..., None]) + x * ha[..., None]   # the head, opaque
out = np.clip(np.round(out * 255), 0, 255).astype(np.uint8)
mask = (el.max(2) > 0) | (ha > 0)
out[~mask] = plate[~mask].astype(np.uint8)
changed = np.abs(out.astype(int) - plate.astype(int)).max(2) > 0
print("comet mask px:", int(mask.sum()), "| pixels changed outside it:", int((changed & ~mask).sum()))
assert (changed & ~mask).sum() == 0
Image.fromarray(out).save(dst)
Image.fromarray((mask * 255).astype(np.uint8)).save(dst.replace(".png", "-mask.png"))

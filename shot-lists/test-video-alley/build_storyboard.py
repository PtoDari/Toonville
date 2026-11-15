"""Rough storyboard for the alley test video, composited from approved Toonville sheets (no generation).

Usage: python3 -I build_storyboard.py <repo_root> <out_dir> <left-panel mural image> <opposite-wall mural image>
Each frame is 1920x1080 (16:9): an approved background plate, canon figures cut from their sheets (never mirrored),
and annotations: camera moves as arrows, and a caption bar with the shot's number, title, length and action.
"""
import sys, math
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

root, out = sys.argv[1:3]
W, H = 1920, 1080
F = lambda s, b=False: ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf" % ("-Bold" if b else ""), s)
WHITE, INK, YEL = (245, 245, 250), (12, 12, 20), (255, 214, 64)


def load(p):
    return Image.open(f"{root}/{p}").convert("RGB")


def cut(A, x0, x1, y0, y1, bg, keep_cols=None, keep_from=None, clear_rows=()):
    """Cut a figure from a flat-grey sheet with a soft alpha, unpremultiplied."""
    p = A[y0:y1, x0:x1].astype(np.float32).copy()
    for r0, r1 in clear_rows:                       # sheet ground line: clear it where no figure crosses it
        a, b = r0 - y0, r1 - y0
        above = np.abs(p[a - 8] - bg).max(-1) > 20
        below = np.abs(p[min(b + 8, p.shape[0] - 1)] - bg).max(-1) > 20
        p[a:b + 1, ~(above & below)] = bg
    if keep_cols is not None:                       # drop shadows: below keep_from keep only the soles' columns
        keep = np.zeros(p.shape[1], bool)
        for a, b in keep_cols:
            keep[a - x0:b - x0 + 1] = True
        p[keep_from - y0:, ~keep] = bg
    alpha = np.clip((np.abs(p - bg).max(-1) - 8) / 14, 0, 1)
    a3 = alpha[..., None]
    true = np.where(a3 > 0.02, (p - (1 - a3) * bg) / np.maximum(a3, 0.02), p)
    im = Image.fromarray(np.dstack([np.clip(true, 0, 255), alpha * 255]).astype(np.uint8), "RGBA")
    return im.crop(im.getbbox())


def scaled(fig, h):
    return fig.resize((max(1, round(fig.width * h / fig.height)), h), Image.LANCZOS)


def paste_feet(base, fig, cx, feet_y):
    base.alpha_composite(fig, (round(cx - fig.width / 2), round(feet_y - fig.height)))


def letterbox(img, box, top):
    """A wide sheet panel, scaled to the frame's width and set on a dark band, so the frame stays 16:9."""
    pan = img.crop(box)
    pan = pan.resize((W, round(pan.height * W / pan.width)), Image.LANCZOS)
    pan = pan.filter(ImageFilter.UnsharpMask(radius=3, percent=60, threshold=2))
    base = Image.new("RGBA", (W, H), (10, 12, 22, 255))
    base.paste(pan.convert("RGBA"), (0, top))
    return base


def plate(img, box=None, sharpen=False):
    im = img.crop(box) if box else img
    im = im.resize((W, H), Image.LANCZOS)
    if sharpen:
        im = im.filter(ImageFilter.UnsharpMask(radius=3, percent=60, threshold=2))
    return im.convert("RGBA")


def arrow(d, pts, width=9, head=34, col=WHITE):
    for w, c in ((width + 6, INK), (width, col)):
        d.line(pts, fill=c, width=w, joint="curve")
    (x0, y0), (x1, y1) = pts[-2], pts[-1]
    ang = math.atan2(y1 - y0, x1 - x0)
    tip = (x1 + math.cos(ang) * head * 0.35, y1 + math.sin(ang) * head * 0.35)
    left = (x1 + math.cos(ang + 2.6) * head, y1 + math.sin(ang + 2.6) * head)
    right = (x1 + math.cos(ang - 2.6) * head, y1 + math.sin(ang - 2.6) * head)
    d.polygon([tip, left, right], fill=col, outline=INK, width=4)


def arc(cx, cy, rx, ry, a0, a1, n=60):
    return [(cx + rx * math.cos(math.radians(a0 + (a1 - a0) * i / n)),
             cy + ry * math.sin(math.radians(a0 + (a1 - a0) * i / n))) for i in range(n + 1)]


def label(d, xy, text, size=34, anchor="la"):
    d.text(xy, text, font=F(size, True), fill=WHITE, anchor=anchor, stroke_width=5, stroke_fill=INK)


def caption(img, num, title, secs, lines):
    bar = Image.new("RGBA", (W, 150), (6, 8, 18, 215))
    img.alpha_composite(bar, (0, H - 150))
    d = ImageDraw.Draw(img)
    tag = f"SH{num:03d}"
    d.text((40, H - 142), tag, font=F(40, True), fill=YEL)
    d.text((40 + d.textlength(tag, font=F(40, True)) + 26, H - 142), f"{title}  ·  {secs} s", font=F(40, True), fill=WHITE)
    for i, t in enumerate(lines):
        d.text((40, H - 88 + i * 38), t, font=F(28), fill=WHITE)


def warp_onto(base, art, quad):
    """Perspective-warp art onto a quad (TL, TR, BR, BL) of an RGBA frame, with a 1.5 px soft edge."""
    import cv2
    a = np.asarray(art.convert("RGB"), np.float32)
    h, w = a.shape[:2]
    M = cv2.getPerspectiveTransform(np.float32([[0, 0], [w, 0], [w, h], [0, h]]), quad)
    warped = cv2.warpPerspective(a, M, (W, H), flags=cv2.INTER_AREA)
    mask = cv2.warpPerspective(np.ones((h, w), np.float32), M, (W, H), flags=cv2.INTER_LINEAR)
    mask = cv2.GaussianBlur(mask, (0, 0), 0.75)[..., None]
    b = np.asarray(base, np.float32)
    b[..., :3] = b[..., :3] * (1 - mask) + warped * mask
    return Image.fromarray(np.clip(b, 0, 255).astype(np.uint8), "RGBA")


def dashed_rect(d, box, dash=26, col=WHITE, w=5):
    x0, y0, x1, y1 = box
    for (ax, ay, bx, by) in ((x0, y0, x1, y0), (x1, y0, x1, y1), (x1, y1, x0, y1), (x0, y1, x0, y0)):
        L = math.hypot(bx - ax, by - ay)
        for s in range(0, int(L), dash * 2):
            t0, t1 = s / L, min((s + dash) / L, 1)
            seg = [(ax + (bx - ax) * t0, ay + (by - ay) * t0), (ax + (bx - ax) * t1, ay + (by - ay) * t1)]
            d.line(seg, fill=INK, width=w + 4)
            d.line(seg, fill=col, width=w)


# ---------------- canon figures, cut from their approved sheets (never mirrored)
OZ = np.asarray(load("characters/ozzy/ozzy-main-outfit-jacket-balaclava-no-staff.jpg"))
OZ_BG = np.array([127, 127, 127], np.float32)
GL = [(2864, 2874)]                                   # the sheet's ground line
oz_front = cut(OZ, 300, 1450, 100, 2966, OZ_BG, clear_rows=GL)
oz_side = cut(OZ, 3050, 3750, 100, 2966, OZ_BG, clear_rows=GL)
oz_back = cut(OZ, 4150, 5200, 100, 2966, OZ_BG, clear_rows=GL)
BH = np.asarray(load("characters/bounty-hunter/bounty-hunter-armour.jpg"))
BH_BG = np.array([124, 123, 123], np.float32)
hunter34 = cut(BH, 480, 830, 0, 917, BH_BG, keep_cols=[(518, 599), (641, 784)], keep_from=896)
# figures' heights on their sheets, to keep them in proportion: Ozzy 190.5 cm in sneakers (head top, not the
# balaclava's extra bulk); the hunter about 191 cm to the helmet top, plus the antenna above it
OZ_TO_HUNTER = 1.0

aerial = load("locations/midtown-alley/midtown-alley-aerial-night-16x9.jpg")
wide = load("locations/midtown-alley/midtown-alley-wide-night-16x9.jpg")
low = load("locations/midtown-alley/midtown-alley-low-walk-night-16x9.jpg")
orion = load("locations/orion/orion-exterior-sheet-night.jpg")
# The two approved memorial murals (images the user approved; not stored in the repo), passed as argv[3] and argv[4].
mcduffie = Image.open(sys.argv[3]).convert("RGB")   # exterior memorial, LEFT graffiti panel facing the entrance
toriyama = Image.open(sys.argv[4]).convert("RGB")   # memorial on the 13-storey wall opposite Orion
frames = []

# ---------------- sh001  The comet  4 s
img = plate(aerial, (700, 0, 1920, 686))
d = ImageDraw.Draw(img)
start = (640, 70, 1280, 430)
dashed_rect(d, start)
label(d, (start[0] + 14, start[1] + 12), "starts here: still sky", 30)
for (sx, sy), (ex, ey) in (((start[0], start[1]), (start[0] - 160, start[1] - 50)),
                           ((start[2], start[1]), (start[2] + 160, start[1] - 50)),
                           ((start[0], start[3]), (start[0] - 160, start[3] + 90)),
                           ((start[2], start[3]), (start[2] + 160, start[3] + 90))):
    arrow(d, [(sx, sy), (ex, ey)], width=7, head=26)
label(d, (W - 40, 590), "slow zoom out", 34, "ra")
arrow(d, [(1300, 250), (1420, 330), (1520, 400)], width=7, head=30, col=YEL)
label(d, (1210, 470), "comet streaks down-right", 30)
caption(img, 1, "The comet", 4, ["Camera: locked on the night sky, then a slow zoom out. No characters.",
                                 "The comet enters top left and streaks toward the lower right, its tail trailing up-left."])
frames.append(img)

# ---------------- sh002  Tilt down to the alley  5 s
img = plate(aerial)
d = ImageDraw.Draw(img)
paste_feet(img, scaled(oz_front, 128), 958, 868)
d = ImageDraw.Draw(img)
arrow(d, [(1000, 40), (1000, 150), (1000, 260)], width=9, head=36)
label(d, (1030, 60), "tilt down from the comet", 34)
d.ellipse((900, 720, 1020, 890), outline=YEL, width=5)
label(d, (560, 700), "Ozzy, small,", 30)
label(d, (560, 740), "walks toward camera", 30)
label(d, (560, 780), "on his right side", 30)
arrow(d, [(958, 900), (952, 960)], width=6, head=22, col=YEL)
caption(img, 2, "Tilt down to the alley", 5, ["Camera: continues sh001's move, tilting down to the aerial view (one continuous 9 s move).",
                                              "Ozzy, masked, no staff, walks up the Midtown alley toward the camera, close to the wall on the viewer's left."])
frames.append(img)

# ---------------- sh003  Skyline and shadow  5 s
img = plate(wide)
sil = scaled(oz_side, 330)
a = np.asarray(sil).astype(np.float32)
shadow = np.zeros_like(a)
shadow[..., :3] = (14, 3, 18)
shadow[..., 3] = a[..., 3] * 0.82
shadow = Image.fromarray(shadow.astype(np.uint8), "RGBA").resize((round(sil.width * 0.8), sil.height), Image.LANCZOS)
shadow = shadow.filter(ImageFilter.GaussianBlur(1.0))
paste_feet(img, shadow, 860, 655)
d = ImageDraw.Draw(img)
arrow(d, [(1290, 70), (1150, 140), (1000, 250), (900, 330)], width=9, head=36)
label(d, (1340, 40), "pan across the skyline,", 32)
label(d, (1340, 80), "settling on the brick wall", 32)
label(d, (420, 700), "his shadow slides across the bricks", 30)
caption(img, 3, "Skyline and shadow", 5, ["Camera: low in the alley, a slow pan across the skyline above the walls, settling on the brick wall.",
                                          "Ozzy's shadow slides across the bricks beside him, cut off above the shoulders. Footsteps audible."])
frames.append(img)

# ---------------- sh004  Low sweep behind his feet  4 s
img = plate(low)
d = ImageDraw.Draw(img)
pts = arc(1180, 860, 620, 150, 160, 340)
arrow(d, pts, width=9, head=36)
label(d, (360, 980 - 190), "starts on the canon frame", 30)
label(d, (1310, 560), "sweeps around", 32)
label(d, (1310, 600), "behind his heels", 32)
caption(img, 4, "Low sweep behind his feet", 4, ["Camera: low tracking shot, starting on the canon low walk frame and sweeping around behind his heels.",
                                                 "His Cortez sneakers on the wet concrete, his footsteps echoing. It ends looking past him to the alley's entrance."])
frames.append(img)

# ---------------- sh005  360 sweep past Orion  7 s
img = letterbox(orion, (472, 100, 1192, 386), 80)      # panel x472-1192 -> scale 2.667, top at y 80
sx = lambda x: (x - 472) * W / 720
sy = lambda y: 80 + (y - 100) * W / 720
fx, fy = sx(745), sy(372)
paste_feet(img, scaled(oz_back, 240), fx, fy)
d = ImageDraw.Draw(img)
arrow(d, arc(fx, fy - 10, 170, 42, 200, 520, 80), width=7, head=28)
label(d, (fx - 170, fy - 300), "camera circles him once", 28)
arrow(d, [(fx + 120, fy - 40), (sx(900), sy(355)), (sx(985), sy(330))], width=7, head=28, col=YEL)
label(d, (sx(840), sy(130)), "to the loading-bay shutter:", 28)
label(d, (sx(840), sy(130) + 36), "stops, raises his right fist", 28)
label(d, (40, 24), "Orion on his left  ·  its doors stay closed", 30)
# Memorial mural on the LEFT graffiti panel as you face the entrance (README, Orion exterior), warped onto that
# panel's corners on the exterior sheet (513,193) (615,210) (615,350) (513,360), mapped into this frame.
quad = np.float32([[sx(513), sy(193)], [sx(615), sy(210)], [sx(615), sy(350)], [sx(513), sy(360)]])
img = warp_onto(img, mcduffie.crop((150, 0, 745, 850)), quad)
d = ImageDraw.Draw(img)
label(d, (sx(513) + 6, sy(193) - 44), "memorial mural, left panel", 26)
# The wall opposite Orion turns toward the camera mid-sweep (k02): its memorial mural, from the approved image.
ins = toriyama.crop((300, 25, 1672, 797)).resize((440, 248), Image.LANCZOS)
ix, iy = W - 40 - 440, 100
d.rectangle([ix - 4, iy - 4, ix + 444, iy + 252], fill=WHITE)
img.paste(ins.convert("RGBA"), (ix, iy))
d = ImageDraw.Draw(img)
label(d, (ix + 220, iy + 262), "k02, mid-sweep: the wall opposite,", 24, anchor="ma")
label(d, (ix + 220, iy + 292), "with its memorial mural", 24, anchor="ma")
caption(img, 5, "360 sweep past Orion", 7, ["Camera: circles Ozzy once as he walks down Orion's side alley (crossing the line on purpose).",
                                            "He passes the ORION sign and closed doors, stops at the roll-up shutter and raises his clenched right fist."])
frames.append(img)

# ---------------- sh006  The bounty hunter  5 s
img = letterbox(orion, (542, 718, 985, 941), 0)        # scale 1920/443 = 4.33
g = np.zeros((H, W, 4), np.uint8)
ramp = np.clip((np.arange(H) - 650) / 430, 0, 1)[:, None]
g[..., 0], g[..., 1], g[..., 2] = 0x6F, 0x00, 0xFF
g[..., 3] = (ramp * 70).astype(np.uint8)
img.alpha_composite(Image.fromarray(g, "RGBA"))
oz_h = 540
paste_feet(img, scaled(oz_back, oz_h), 640, 900)
# the hunter's cut includes the antenna above the helmet: scale so the helmet top (antenna excluded) matches Ozzy
hunter_scale = oz_h / (917 - 35)                      # helmet top at row 35 to sole at 917 on his sheet
hunter = hunter34.resize((round(hunter34.width * hunter_scale), round(hunter34.height * hunter_scale)), Image.LANCZOS)
paste_feet(img, hunter, 1290, 900)
d = ImageDraw.Draw(img)
d.line([(640, 0), (640, 30)], fill=YEL, width=4); d.line([(1280, 0), (1280, 30)], fill=YEL, width=4)
label(d, (40, 30), "k01: Ozzy at the shutter, right fist raised", 30)
label(d, (W - 40, 30), "the hunter steps out of the service passage,", 30, "ra")
label(d, (W - 40, 70), "rifle held across his body", 30, "ra")
label(d, (W - 40, 110), "tension: puddles, sign glow and rim light turn indigo", 28, "ra")
caption(img, 6, "The bounty hunter", 5, ["Camera: standoff framing, Ozzy on the left third, the hunter on the right third. k02: Ozzy turns to face him.",
                                         "The hunter blocks his path and challenges him to a fight. Heights match: helmet top level with Ozzy's head."])
frames.append(img)

for i, f in enumerate(frames, 1):
    f.convert("RGB").save(f"{out}/ep00-sc01-sh{i:03d}-storyboard.jpg", quality=92)

# ---------------- overview, 16:9
ov = Image.new("RGB", (W, H), (14, 16, 28))
d = ImageDraw.Draw(ov)
d.text((40, 28), "Test video, the alley  ·  storyboard", font=F(46, True), fill=WHITE)
d.text((40, 88), "Rough frames composited from approved sheets  ·  6 shots, 30 s", font=F(28), fill=(190, 190, 205))
tw, th = 600, 338
lens = [4, 5, 5, 4, 7, 5]
titles = ["The comet", "Tilt down to the alley", "Skyline and shadow", "Low sweep behind his feet", "360 sweep past Orion", "The bounty hunter"]
for i, f in enumerate(frames):
    r, c = divmod(i, 3)
    x, y = 30 + c * (tw + 30), 150 + r * (th + 100)
    ov.paste(f.convert("RGB").resize((tw, th), Image.LANCZOS), (x, y))
    d.text((x, y + th + 12), f"{i + 1}  {titles[i]}  ·  {lens[i]} s", font=F(28, True), fill=WHITE)
ov.save(f"{out}/ep00-sc01-storyboard-overview.jpg", quality=92)
print("saved", len(frames), "frames and the overview to", out)

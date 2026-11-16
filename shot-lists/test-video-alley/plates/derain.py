"""Paint falling rain out of a drawn image: thin light near-vertical streaks, and (in given boxes) ripple rings.
Streaks are found with a ridge filter across x, averaged along near-vertical lines (-8..8 degrees), then filled from
the colours either side of them, so the texture along the streak (mortar lines, edges) carries straight through."""
import cv2, numpy as np
def ridge_x(lum, s=1.0):
    g = cv2.GaussianBlur(lum, (0, 0), s)
    dxx = cv2.Sobel(g, cv2.CV_32F, 2, 0, ksize=3)
    return np.maximum(-dxx, 0)
def line_kernels(L=31, angles=(-8, -4, 0, 4, 8)):
    ks = []
    for a in angles:
        k = np.zeros((L, L), np.float32); c = L // 2
        for t in range(-c, c + 1):
            k[c + t, int(round(c + t * np.tan(np.radians(a))))] = 1
        ks.append(k / k.sum())
    return ks
def streak_mask(a, t_ridge=6.0, t_line=3.2, min_h=16, max_sat=150, protect=None):
    lum = a.astype(np.float32) @ np.float32([0.3, 0.59, 0.11])
    r = ridge_x(lum)
    line = np.max([cv2.filter2D(r, -1, k) for k in line_kernels()], 0)
    hsv = cv2.cvtColor(a, cv2.COLOR_RGB2HSV)
    cand = ((r > t_ridge) & (line > t_line) & (hsv[..., 1] < max_sat)).astype(np.uint8)
    cand = cv2.morphologyEx(cand, cv2.MORPH_CLOSE, np.ones((7, 1), np.uint8))
    n, lab, st, _ = cv2.connectedComponentsWithStats(cand, connectivity=8)
    keep = np.zeros(n, bool)
    for i in range(1, n):
        x, y, w, h, area = st[i]
        if h >= min_h and w <= 2 + h * 0.18 and area <= h * 3.5: keep[i] = True
    m = keep[lab]
    if protect is not None: m &= ~protect
    return m
def ring_mask(a, boxes, t=10.0):
    lum = a.astype(np.float32) @ np.float32([0.3, 0.59, 0.11])
    g = cv2.GaussianBlur(lum, (0, 0), 1.0)
    log = -cv2.Laplacian(g, cv2.CV_32F, ksize=3)
    m = np.zeros(lum.shape, bool)
    for x0, y0, x1, y1 in boxes:
        sub = log[y0:y1, x0:x1] > t
        m[y0:y1, x0:x1] |= sub
    return m
def fill_across(a, m, reach=6):
    """Fill masked pixels from the nearest unmasked pixels left and right, within reach; the rest by inpainting."""
    out = a.astype(np.float32).copy(); H, W = m.shape
    ys, xs = np.nonzero(m)
    left = np.full(len(ys), -1); right = np.full(len(ys), -1)
    for d in range(1, reach + 1):
        xl = xs - d; ok = (left < 0) & (xl >= 0); ok[ok] &= ~m[ys[ok], xl[ok]]; left[ok] = xl[ok]
        xr = xs + d; ok = (right < 0) & (xr < W); ok[ok] &= ~m[ys[ok], xr[ok]]; right[ok] = xr[ok]
    both = (left >= 0) & (right >= 0)
    wl = (right[both] - xs[both]) / (right[both] - left[both])
    out[ys[both], xs[both]] = a[ys[both], left[both]] * wl[:, None] + a[ys[both], right[both]] * (1 - wl[:, None])
    rest = np.zeros_like(m); rest[ys[~both], xs[~both]] = True
    out = np.clip(out, 0, 255).astype(np.uint8)
    if rest.any(): out = cv2.inpaint(out, rest.astype(np.uint8), 3, cv2.INPAINT_TELEA)
    return out

def streak_mask2(a, t_top=12, frac=0.42, min_h=26, protect_boxes=(), L=31):
    """Pale lilac or white near-vertical streaks: light against the 3 px either side, bluish-white rather than amber,
    and lit along most of a 31 px near-vertical line."""
    f = a.astype(np.float32); R, G, B = f[..., 0], f[..., 1], f[..., 2]
    lum = f @ np.float32([0.3, 0.59, 0.11])
    top = lum - cv2.morphologyEx(lum, cv2.MORPH_OPEN, np.ones((1, 7), np.uint8))
    pale = (B >= 0.92 * R) & (B >= G + 6)
    hit = ((top > t_top) & pale).astype(np.float32)
    line = np.max([cv2.filter2D(hit, -1, k) for k in line_kernels(L)], 0)
    cand = ((hit > 0) & (line >= frac)).astype(np.uint8)
    cand = cv2.morphologyEx(cand, cv2.MORPH_CLOSE, np.ones((9, 1), np.uint8))
    n, lab, st, _ = cv2.connectedComponentsWithStats(cand, connectivity=8)
    keep = np.zeros(n, bool)
    for i in range(1, n):
        x, y, w, h, area = st[i]
        if h >= min_h and w <= 2 + h * 0.16: keep[i] = True
    m = keep[lab]
    for x0, y0, x1, y1 in protect_boxes: m[y0:y1, x0:x1] = False
    return m

def streak_mask3(a, t_top=12, frac=0.42, min_h=26, ink=14, ink_frac=0.45, protect_boxes=(), L=31):
    """streak_mask2, minus lines drawn as part of the scene: those run beside a black ink line (pipe edges,
    railings, window columns), while the rain is laid over the art with no ink of its own."""
    f = a.astype(np.float32); R, G, B = f[..., 0], f[..., 1], f[..., 2]
    lum = f @ np.float32([0.3, 0.59, 0.11])
    top = lum - cv2.morphologyEx(lum, cv2.MORPH_OPEN, np.ones((1, 7), np.uint8))
    pale = (B >= 0.92 * R) & (B >= G + 6)
    hit = ((top > t_top) & pale).astype(np.float32)
    line = np.max([cv2.filter2D(hit, -1, k) for k in line_kernels(L)], 0)
    cand = ((hit > 0) & (line >= frac)).astype(np.uint8)
    cand = cv2.morphologyEx(cand, cv2.MORPH_CLOSE, np.ones((9, 1), np.uint8))
    dark = (lum < ink).astype(np.uint8)
    near_ink = cv2.dilate(dark, np.ones((1, 9), np.uint8)) > 0       # ink within 4 px left or right
    n, lab, st, _ = cv2.connectedComponentsWithStats(cand, connectivity=8)
    keep = np.zeros(n, bool)
    inkfrac = np.bincount(lab.ravel(), weights=near_ink.ravel().astype(np.float32), minlength=n) / np.maximum(st[:, cv2.CC_STAT_AREA], 1)
    for i in range(1, n):
        x, y, w, h, area = st[i]
        if h >= min_h and w <= 2 + h * 0.16 and inkfrac[i] < ink_frac: keep[i] = True
    m = keep[lab]
    for x0, y0, x1, y1 in protect_boxes: m[y0:y1, x0:x1] = False
    return m

def ripple_mask(a, y_from, t=16, protect_boxes=()):
    """Ripple rings and splash dots on wet ground: thin, near-white curves, wider than tall."""
    f = a.astype(np.float32); lum = f @ np.float32([0.3, 0.59, 0.11])
    hsv = cv2.cvtColor(a, cv2.COLOR_RGB2HSV)
    top = lum - cv2.morphologyEx(lum, cv2.MORPH_OPEN, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5)))
    c = (top > t) & (hsv[..., 1] < 110)
    c[:y_from] = False
    for x0, y0, x1, y1 in protect_boxes: c[y0:y1, x0:x1] = False
    c = c.astype(np.uint8)
    # group the rings of one ripple together
    grp = cv2.dilate(c, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (9, 5)))
    n, lab, st, _ = cv2.connectedComponentsWithStats(grp, connectivity=8)
    keep = np.zeros(n, bool)
    for i in range(1, n):
        x, y, w, h, area = st[i]
        if 10 <= w <= 160 and h <= 50 and w >= 1.5 * h: keep[i] = True
    return (keep[lab] & (c > 0))

def clear_ripples(a, ellipses, t=5):
    """Inside each hand-placed ellipse (cx, cy, half-width, half-height), take out thin light curves (the rings and
    splash dots) with a grey opening, leaving the puddle and its reflections."""
    f = a.astype(np.float32); out = f.copy(); H, W = f.shape[:2]
    se = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7))
    opened = np.stack([cv2.morphologyEx(f[..., c], cv2.MORPH_OPEN, se) for c in range(3)], -1)
    opened = cv2.medianBlur(opened.astype(np.uint8), 3).astype(np.float32)
    lum = f @ np.float32([0.3, 0.59, 0.11]); lo = opened @ np.float32([0.3, 0.59, 0.11])
    region = np.zeros((H, W), np.uint8)
    for cx, cy, ax, ay in ellipses:
        cv2.ellipse(region, (int(cx), int(cy)), (int(ax), int(ay)), 0, 0, 360, 1, -1)
    m = ((lum - lo) > t) & (region > 0)
    m = cv2.dilate(m.astype(np.uint8), np.ones((3, 3), np.uint8)).astype(np.float32) * region
    m = cv2.GaussianBlur(m, (0, 0), 0.8)[..., None]
    return np.clip(f * (1 - m) + np.minimum(f, opened) * m, 0, 255).astype(np.uint8)

def derain(a, protect, ripples=(), passes=((12, 0.42, 26), (8, 0.5, 40)), widen=2):
    out = a.copy(); total = np.zeros(a.shape[:2], bool)
    for t_top, frac, min_h in passes:
        m = streak_mask3(out, t_top=t_top, frac=frac, min_h=min_h, protect_boxes=protect)
        m = cv2.dilate(m.astype(np.uint8), np.ones((3, 1 + 2 * widen), np.uint8)) > 0
        for x0, y0, x1, y1 in protect: m[y0:y1, x0:x1] = False
        out = fill_across(out, m, reach=4 + widen)
        total |= m
    if ripples: out = clear_ripples(out, ripples)
    return out, total

def clear_ripples2(a, ellipses, t=4, k=11):
    f = a.astype(np.float32); H, W = f.shape[:2]
    se = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (k, k))
    opened = np.stack([cv2.morphologyEx(f[..., c], cv2.MORPH_OPEN, se) for c in range(3)], -1)
    opened = cv2.GaussianBlur(opened, (0, 0), 1.2)
    lum = f @ np.float32([0.3, 0.59, 0.11]); lo = opened @ np.float32([0.3, 0.59, 0.11])
    region = np.zeros((H, W), np.uint8)
    for cx, cy, ax, ay in ellipses:
        cv2.ellipse(region, (int(cx), int(cy)), (int(ax), int(ay)), 0, 0, 360, 1, -1)
    m = ((lum - lo) > t) & (region > 0)
    m = cv2.dilate(m.astype(np.uint8), np.ones((3, 3), np.uint8)).astype(np.float32) * region
    m = cv2.GaussianBlur(m, (0, 0), 1.0)[..., None]
    return np.clip(f * (1 - m) + np.minimum(f, opened) * m, 0, 255).astype(np.uint8)

def derain2(a, protect, passes, ripples=(), widen=2):
    """passes: (t_top, frac, min_h, ink_frac, box or None). Each pass finds streaks (in its box) and fills them."""
    out = a.copy(); total = np.zeros(a.shape[:2], bool)
    for t_top, frac, min_h, ink_frac, box in passes:
        m = streak_mask3(out, t_top=t_top, frac=frac, min_h=min_h, ink_frac=ink_frac, protect_boxes=protect)
        if box is not None:
            keep = np.zeros(m.shape, np.uint8)
            if len(box) == 4 and not isinstance(box[0], (tuple, list)):
                x0, y0, x1, y1 = box; keep[y0:y1, x0:x1] = 1
            else:
                cv2.fillPoly(keep, [np.array(box, np.int32)], 1)      # a polygon
            m &= keep > 0
        m = cv2.dilate(m.astype(np.uint8), np.ones((3, 1 + 2 * widen), np.uint8)) > 0
        for x0, y0, x1, y1 in protect: m[y0:y1, x0:x1] = False
        if box is not None: m &= keep > 0
        out = fill_across(out, m, reach=4 + widen); total |= m
    if ripples: out = clear_ripples2(out, ripples)
    return out, total

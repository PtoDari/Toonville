"""ep00-sc01-sh003 plates: the falling rain painted out of the user's two alley views, with no generation.
Usage: python3 -I derain_sh003.py <view.png or .jpg> <out.png> <low|wall>   (derain.py beside it)
  low  = midtown-alley-low-night (plate A, k01);  wall = midtown-alley-low-wall-night (plate B)
Made from the user's original PNGs; run on the repo's JPG copies it comes out within a few levels."""
import sys, numpy as np, cv2
from PIL import Image
from derain import derain2
src, dst, which = sys.argv[1:4]
PROTECT = {
 "wall": [(462,0,488,150),(673,52,697,137),(726,78,750,154),(523,182,547,237),(556,182,577,242),(322,242,362,288),(275,266,298,318),
          (395,90,500,372),(600,130,772,342),(500,222,578,342),(245,298,308,472),(300,262,372,362),(138,388,208,492),
          (1480,0,1640,640),(1120,0,1400,130),(40,440,95,595),(225,615,270,660),
          (60,560,240,900),(815,0,1040,300)],      # the far-left alley walls and lights; the building on the wall and the drips under its ledge
 "low":  [(1045,0,1135,170),(1140,40,1200,170),(1210,0,1265,185),(1290,0,1325,125),(1335,165,1380,300),(600,0,720,110),
          (905,280,965,340),(1000,180,1300,560),(1270,280,1400,560),(820,0,1010,240)],
}
RIPPLES = {"wall": [], "low": [(280,714,72,18),(43,748,52,16),(272,791,44,14),(340,770,22,9),(787,720,50,14),(737,855,46,14),
          (1022,665,36,10),(842,720,28,10),(1082,812,40,12),(1010,890,118,36),(1412,892,80,28),(1552,892,82,27),
          (1520,685,28,9),(1652,722,18,8),(1590,727,18,8)]}
a = np.asarray(Image.open(src).convert("RGB"))
PASSES = {
 "wall": [(12, 0.42, 26, 0.45, None), (8, 0.5, 40, 0.45, None),
          (5, 0.5, 30, 1.1, [(335,0),(835,0),(835,60),(800,190),(640,315),(335,315)]),                      # the sky: fainter streaks, and so dark the ink test can't apply
          (3.5, 0.45, 30, 1.1, [(335,0),(835,0),(835,60),(800,190),(640,315),(335,315)]), (4, 0.45, 26, 1.1, (232, 280, 318, 350))],
 "low":  [(12, 0.42, 26, 0.45, None), (8, 0.5, 40, 0.45, None),
          (9, 0.45, 28, 0.9, (0, 540, 1672, 941)),                      # the ground, where black cracks are everywhere
          (6, 0.5, 30, 1.1, (1135, 0, 1300, 170)),
          (9, 0.45, 24, 1.1, (280, 380, 330, 560))],                      # the streak over the trash bag
}
out, m = derain2(a, PROTECT[which], PASSES[which], RIPPLES[which])
Image.fromarray(out).save(dst)
print(which, "pixels repainted:", int(m.sum()))

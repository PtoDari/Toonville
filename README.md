# Toonville

Toonville is an anime series. This repo holds its visual style guide: prompt blocks for characters and environments, and rules for how each scene reacts to the characters in it.

## How to use the blocks

1. Start with the **character block** and add that character's skin tone and accent colour from the character table below.
2. Add **one** environment block: night or day.
3. Pick the story moment from the **reactive environment** table and describe it in the prompt.

The character block and environment blocks are written to be pasted together. The character owns the strongest lines, darkest darks and hottest colour; the environment stays quieter so the two never compete.

For a single paste, use the **all-in-one block** instead. For character turnarounds, use the **character sheet block**.

## All-in-one block

One block (197 words) that merges the character block, both environment blocks and the reactive rule. Before using it:

- Delete the **Night** or **Day** line you don't need. If both stay in, most generators blend them into a muddled dusk scene.
- Replace `[SKIN HEX]` and `[ACCENT HEX]` with the character's colours from the character table below.

The separate blocks further down hold the same rules in more detail.

```
Style: 90s cel anime with comic-book inking, fine film grain. Core palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8.
Characters: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows; flat cel colour, one or two hard-edged shadow tones, solid spotted blacks; skin [SKIN HEX]; signature accent [ACCENT HEX]. Characters alone own pure black, top highlights, accent.
Environment: thin tinted lines, never black, light hatching; slightly desaturated; dense detail at edges, open space around the character; three hazy depth layers. Its main light becomes the character's rim light; bloom only on glowing sources. At story peaks, signs, reflections and haze take on the accent.
Camera: wide angle, low or aerial, foreshortened hands; background matches the shot.
Night: dark teal lines #031E1C, mid-to-dark values; hot accents only on signs and lamps; neon glows in glass and haze; rain as thin straight white streaks; wet pavement mirrors neon in long vertical smears.
Day: navy lines #344481, light-to-mid values; sky cobalt #3572C5, bright blue #4A97CF, haze blue #91B8D5, concrete grey #909BA8, sage green #9CD086, roof brown #573931; high sun, hard cast shadows, loose painterly clouds on flat sky; glass glints, banners and leaves react.
```

## Character sheet block

For turnaround sheets that keep a character consistent across shots. Replace `[CHARACTER DESCRIPTION]`, the three expressions, `[SKIN HEX]` and `[ACCENT HEX]`.

It differs from the story blocks on purpose: a straight eye-level camera (wide-angle and low or aerial shots distort proportions), one even light that matches in every view, and a flat background with no scenery or text.

```
Character turnaround sheet of [CHARACTER DESCRIPTION]. Front, three-quarter, side and back views, full body, same height and scale, aligned on one ground line, relaxed neutral standing pose. Row of three expression close-ups: [EXPRESSION 1], [EXPRESSION 2], [EXPRESSION 3]. Flat cloud white #DEE7E8 background, no scenery, no text.
Style: 90s cel anime with comic-book inking, fine film grain. Core palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8.
Character: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows; flat cel colour, one or two hard-edged shadow tones, solid spotted blacks; skin [SKIN HEX]; signature accent [ACCENT HEX].
Lighting: even light from upper left, identical in every view, no bloom.
Camera: eye level, long lens, no perspective distortion.
```

## Character block

```
90s cel anime with comic-book inking. Line work: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows. Palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8, plus the character's skin tone [SKIN HEX] and signature accent [ACCENT HEX]. Shading: flat cel colour, one or two hard-edged shadow tones, solid spotted blacks. Lighting: one strong source, crisp rim light; bloom only on glowing sources like neon, visors, energy. Texture: fine even film grain. Camera: wide angle, low or aerial, hands foreshortened toward the lens.
```

## Character table

Each main character has their own skin tone and one signature accent colour. The skin tone fills `[SKIN HEX]`. The accent fills `[ACCENT HEX]`; it appears on the character and is the colour the environment picks up when it reacts to them.

| Character | Skin tone | Accent name | Accent hex |
|---|---|---|---|
| Money | Deep brown `#9B7461` | _TBD_ | `#______` |
| _TBD_ | _TBD_ | _TBD_ | `#______` |
| _TBD_ | _TBD_ | _TBD_ | `#______` |
| _TBD_ | _TBD_ | _TBD_ | `#______` |

## Characters

### Money

A young man in his early 20s. Tone: understated and grounded, with realistic proportions, a calm heavy-lidded gaze and restrained detail.

- **Colours:** skin `#9B7461`, hair highlights `#4A4B63` (deep indigo blue), chain `#CEAF81` (gold).
- **Hair:** dark locs with blue highlights, worn two ways: tied up high, or loose and falling past his shoulders.
- **Face:** warm brown eyes with dark lashes, thin mustache and short chin beard, small silver nose ring in his left nostril.
- **Face tattoo, "All $ In" (left side only):** six small hand-lettered characters stacked upright in a vertical column. Top to bottom they read capital `A`, lowercase `l`, lowercase `l`, `$`, capital `I` with serifs (which tells it apart from the `l`s), lowercase `n`. Thin, faded blue-grey ink. The column starts at his left temple and runs down the front edge of his sideburn hairline to about cheekbone height, just in front of his ear. The right side of his face is bare.
- **Chest tattoo:** "High Power" in script across his upper chest, by the collarbone.
- **Outfit:** black Playboy T-shirt, blue Polo sweatpants, blue Nike Cortez sneakers, small thin gold chain.

Description for `[CHARACTER DESCRIPTION]`, hair tied up. For hair down, replace `dark locs tied up high,` with `long dark locs falling loose past his shoulders,`.

```
Money, a young Black man in his early 20s: athletic lean build, grounded realistic proportions, long face with high cheekbones and a defined jaw, deep brown skin, warm brown eyes with dark lashes, calm heavy-lidded gaze, thin mustache and short chin beard; dark locs tied up high, with deep indigo-blue highlights #4A4B63; small silver nose ring in his left nostril; face tattoo on the left side of his face only: six small hand-lettered characters stacked upright in a vertical column, reading top to bottom "A", "l", "l", "$", "I", "n" (All $ In), in thin faded blue-grey ink, running from his left temple down the front edge of his sideburn to cheekbone height, just in front of his ear; the right side of his face is bare; "High Power" script tattoo across his upper chest, just showing above the collar; small thin gold chain #CEAF81; black Playboy T-shirt, blue Polo sweatpants, blue Nike Cortez sneakers
```

For character sheets, add this straight after the description so the face tattoo lands on the correct side in every view:

```
; in the front view the face tattoo is on the viewer's right, and the three-quarter view, side view and expression close-ups show his left side
```

Default sheet expressions: calm heavy-lidded stare, slight confident smirk, cold narrowed glare.

## Night environment block

```
Night environment layer, same style. Line work: thin lines in dark teal #031E1C, never black, light hatching. Values: stay in the mid-to-dark range; pure black and pure white belong to characters only. Palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, slightly desaturated; hot accents only on signs and lamps. Composition: dense detail at the edges, a calm open area where the character stands. Depth: three layers, haze increasing with distance. Lighting: one main light source whose colour becomes the character's rim light. Reactive surfaces: wet ground, glass, neon signs, haze, rain. Rain: thin straight white streaks; wet pavement mirrors neon as long vertical colour smears. Camera: always matches the character shot's angle and lens.
```

## Day environment block

```
Day environment layer, same style. Line work: thin lines in dark navy #344481, never black, light hatching. Values: light-to-mid range, sky and distant haze nearly white; the deepest darks belong to characters. Palette: sky cobalt #3572C5, bright blue #4A97CF, haze blue #91B8D5, cloud white #DEE7E8, concrete grey #909BA8, sage green #9CD086, roof brown #573931, slightly desaturated. Clouds: loose painterly brushwork against a flat sky. Composition: dense detail at the edges, a calm open area where the character stands. Depth: three layers, fading to pale blue with distance. Lighting: high sun, hard cast shadows, cool sky fill as the character's rim light. Reactive surfaces: clouds, glass glints, banners, leaves, cast shadows. Camera: always matches the character shot's angle and lens.
```

## Reactive environment

The environment stays in the background until the story needs it, then picks up the character's accent colour.

| Story moment | Night | Day |
|---|---|---|
| Quiet scenes and dialogue | The scene keeps its own cool palette. Signs are steady, rain is light and reflections are soft. | Clouds drift slowly, shadows are soft-edged and the sky stays an even blue. |
| Tension and movement | The nearest sign, puddle and rim light take on the character's accent colour. | Wind picks up banners and leaves, shadows sharpen, and a glass glint or sign flashes the accent colour. |
| Climax or power moment | The accent fills the haze and reflections, every light source glows, and rain catches the light. Background detail dims so the character stands out. | Clouds streak and part around the character, sun flare takes on the accent colour, and the background fades paler so the character stands out. |

Emotion follows the same rules. In a sad beat, colours drain toward navy (night) or grey (day) and rain gets heavier. In a triumphant beat, the accent spreads across the whole scene. In production most of this happens at compositing, where glow and lighting are layered over the painted backgrounds.

## How characters stay readable

- **Lines:** characters use thick black ink; backgrounds use thin tinted lines (teal at night, navy by day).
- **Values:** characters own pure black, the brightest highlights and the accent colour. Backgrounds stay in a narrower, quieter range.
- **Shared light:** the environment's main light becomes the character's rim light, so characters sit in the scene instead of looking pasted on.
- **Space:** backgrounds keep detail at the edges and leave a calm area where the character stands.

## About the hex codes

Every hex code was sampled from pixels, not estimated. Style colours come from the style reference images. Character colours come from each character's reference photos, converted from the phone's Display P3 colour space to sRGB first. Neither set of images is stored in this repo.

# Toonville

Toonville is an anime series. This repo holds its visual style guide: prompt blocks for characters and environments, and rules for how each scene reacts to the characters in it.

## The style rule

Every Toonville prompt carries the established style, word for word, with no exceptions. That includes full prompts, short backups, edits and inpainting, one-line fixes, and anything sent to an image or video tool. This is what keeps every character, environment and prop consistent.

Every prompt is built in this order:

1. **Subject:** who or what, doing what, where. For a scene, add the story moment from the **reactive environment** table.
2. **Character style block:** for every character in the shot, their own block from the Characters section below. It covers their look, tattoos and outfit, with their skin and accent hex from the character table.
3. **Style block:** the block for the job, copied word for word.

| Job | Style block | The only edits allowed |
|---|---|---|
| Scenes and story shots | All-in-one block | Keep only the Night or Day line. Drop the "At story peaks" sentence for quiet scenes. |
| Character sheets | Character sheet block | Fill the description, expressions and hex slots. |
| Environments and props with no character | All-in-one block | Delete the Characters line. Keep only the Night or Day line. |
| Edits and inpainting on existing art | Edit block | Fill the hex slots. For background-only edits, swap the Characters line as its notes say. |

Every one of those blocks opens with the **master style line**, so it appears in every prompt:

```
Style: 90s cel anime with comic-book inking, fine film grain. Core palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8.
```

No prompt rewords, shortens or drops style wording. A style change happens only when it's asked for, and it goes into this README first.

The character, night and day blocks further down are reference copies that spell out the same rules in more detail. Prompts use the blocks in the table above.

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

It differs from the story blocks on purpose: a straight eye-level camera (wide-angle and low or aerial shots distort proportions), one even light that matches in every view, and a flat background with no scenery, labels or captions. It says "no labels or captions" rather than "no text", because generators read "no text" as no lettering anywhere and can erase tattoos and clothing logos.

```
Character turnaround sheet of [CHARACTER DESCRIPTION]. Front, three-quarter, side and back views, full body, same height and scale, aligned on one ground line, relaxed neutral standing pose. Row of three expression close-ups: [EXPRESSION 1], [EXPRESSION 2], [EXPRESSION 3]. Flat cloud white #DEE7E8 background, no scenery, no labels or captions.
Style: 90s cel anime with comic-book inking, fine film grain. Core palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8.
Character: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows; flat cel colour, one or two hard-edged shadow tones, solid spotted blacks; skin [SKIN HEX]; signature accent [ACCENT HEX].
Lighting: even light from upper left, identical in every view, no bloom.
Camera: eye level, long lens, no perspective distortion.
```

## Edit block

For edits and inpainting on existing Toonville art: write the edit first (what to change, and where), then the character style block for anyone being edited, then this block. For an edit that touches only the background, replace the Characters line with the all-in-one block's Environment line and its Night or Day line.

```
Style: 90s cel anime with comic-book inking, fine film grain. Core palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8.
Characters: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows; flat cel colour, one or two hard-edged shadow tones, solid spotted blacks; skin [SKIN HEX]; signature accent [ACCENT HEX]. Characters alone own pure black, top highlights, accent.
Outside the edited area, keep the image exactly as it is: same layout, lighting, camera, line weight and colours.
```

Some existing sheets drift from the style, with thinner lines, softer shading and a violet cast. An edit that carries this block can come out slightly bolder than the art around it. New sheets generated with the full style block avoid that.

## Character block

Reference copy of the character rules. Prompts use the blocks in the style rule table, which already contain them.

```
90s cel anime with comic-book inking. Line work: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows. Palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8, plus the character's skin tone [SKIN HEX] and signature accent [ACCENT HEX]. Shading: flat cel colour, one or two hard-edged shadow tones, solid spotted blacks. Lighting: one strong source, crisp rim light; bloom only on glowing sources like neon, visors, energy. Texture: fine even film grain. Camera: wide angle, low or aerial, hands foreshortened toward the lens.
```

## Character table

Each main character has their own skin tone and one signature accent colour. The skin tone fills `[SKIN HEX]`. The accent fills `[ACCENT HEX]`; it appears on the character and is the colour the environment picks up when it reacts to them.

| Character | Skin tone | Accent name | Accent hex |
|---|---|---|---|
| Money | Deep brown `#9B7461` | Royal blue | `#5381D4` |
| _TBD_ | _TBD_ | _TBD_ | `#______` |
| _TBD_ | _TBD_ | _TBD_ | `#______` |
| _TBD_ | _TBD_ | _TBD_ | `#______` |

## Characters

Every character has their own **character style block**: their look, tattoos and outfits, written to fill `[CHARACTER DESCRIPTION]` and to go in front of the style block in every prompt that shows them. Each character entry holds:

- a row in the character table, with skin tone and accent colour
- profile notes: colours, hair, face, tattoos and outfits
- their character style block
- a sheet note, if they have features that must stay on one side
- a short backup of their character style block
- a sheet for each outfit and hairstyle in `characters/<name>/`, named `<name>-<outfit>-<hairstyle>.jpg` (for example `-hair-up` or `-hair-down`), with any known differences listed

### Money

A young man in his early 20s. Tone: understated and grounded, with realistic proportions, a calm heavy-lidded gaze and restrained detail.

- **Main outfit, hair up:** [`characters/money/money-main-outfit-hair-up.jpg`](characters/money/money-main-outfit-hair-up.jpg), his official main-outfit turnaround with his hair tied up: front, three-quarter, side view facing right, side view facing left, and back. It's canon for his look, his outfit and where his tattoos sit: the face tattoo on his right temple, the "$" on his right hand, the leopard print below his left sleeve, and the tops of "High Power" above the collar in the front view. Exceptions, where the written rules here win:
  - **Nose rings:** each view shows one ring. He has one in each nostril.
  - **Face tattoo lettering:** a little garbled in the front view. It reads A, l, l, $, I, n.
  - **"High Power" at the collar:** reads as just the capitals H and P. The placement is right.
  - **Side-view sneakers:** chunkier than the slim Cortez in the other views.
  - **Colours:** the sheet has a violet cast, so use the hex codes listed here, not colours picked from the image.
- **Main outfit shirtless, hair up:** [`characters/money/money-main-outfit-shirtless-hair-up.jpg`](characters/money/money-main-outfit-shirtless-hair-up.jpg), his official shirtless asset: the shirtless tattoo-reference outfit with his hair tied up, in front, three-quarter, side (facing left) and back views. It's canon for his build (with slight ab definition on the front and three-quarter views), his nose rings, and where every tattoo sits. In the side view, "Power" wraps across his left pec, and the leopard print covers his left upper arm in every view. Exceptions, where the written rules here win:
  - **Face tattoo lettering:** garbled in the three-quarter view. It reads A, l, l, $, I, n.
  - **"High Power" lettering:** plainer than his real ornate script. The placement is right.
  - **Colours:** like his main outfit sheet, it has a violet cast, so use the hex codes listed here.
- **Colours:** skin `#9B7461`, accent `#5381D4` (royal blue, from his cap), locs `#2F1958` (deep indigo-violet, with shadow `#1E083C` and highlight `#422D7A`), gold `#CEAF81` (chain and nose rings).
- **Accent note:** royal blue is on trial. Its hue sits between the core palette's cobalt and violet, so check night scenes in particular to see whether he still stands out from the background when the environment picks up his accent.
- **Hair:** deep indigo-violet locs all over, not just highlights, with faded sides and back. Worn two ways: gathered into a high top knot, or falling loose past his shoulders.
- **Face:** warm brown eyes with dark lashes, thin mustache and short chin beard, a small gold nose ring in each nostril.
- **Face tattoo, "All $ In" (right side only):** six small hand-lettered characters stacked upright in a vertical column. Top to bottom they read capital `A`, lowercase `l`, lowercase `l`, `$`, capital `I` with serifs (which tells it apart from the `l`s), lowercase `n`. Clean, thin, evenly spaced print in muted indigo-violet ink. The column starts at his right temple at about eyebrow height, and runs down the front edge of his sideburn hairline to about earlobe height, just in front of his ear. The left side of his face is bare.
- **Chest tattoo, "High Power":** large ornate cursive script, with tall flourished capitals `H` and `P` and swashes under the words, in faded grey-black ink. It runs across his upper chest just below the collarbones. "High" sits on his right pec, which is the viewer's left in a front view, and "Power" crosses the sternum toward his left pec. In his main outfit, the crew-neck T-shirt covers most of it, but the tops of the lettering peek just above the front of the collar, so his character style block includes that. Any outfit that shows his chest must include the full chest tattoo text from the shirtless outfit below.
- **Chest piece, Eye of Horus:** a large outlined Eye of Horus, in the same faded grey-black ink, under "High Power". It's centred on his chest and reaches toward the top of his stomach. Like "High Power", it's hidden by his T-shirt and lives in the shirtless outfit text. Ignore the script near his left pec; it isn't part of his design.
- **Arm tattoo, leopard print:** open rosettes and solid spots in faded black ink, covering his left upper arm. It starts at the shoulder cap, runs down the outer arm and stops above the elbow. His left arm is the viewer's right in a front view. In his main outfit, the part below the T-shirt sleeve shows in every view where that arm is visible, so it's in his character style block.
- **Hand tattoo:** a small, bold, hand-drawn black-ink "$" with a single vertical stroke through it, and two short ticks crossing its lower curve. It sits on the back of his right hand, nearer the wrist than the knuckles.
- **Outfits:**
  - **Main (as on his main outfit sheet):** black Playboy T-shirt, cuffed blue Polo jogger sweatpants, white socks, blue Nike Cortez sneakers with a white swoosh and white soles, small thin gold chain.
  - **Shirtless (tattoo reference, as on his main outfit shirtless sheet):** no shirt, so the chest tattoo shows, with his main outfit's joggers, socks and sneakers. Use it for a tattoo reference sheet. Swap it in by replacing everything after `main outfit:` in his description with this:

    ```
    shirtless, showing his "High Power" chest tattoo: large ornate cursive script with tall flourished capital H and P and swashes beneath, in faded grey-black ink, running across his upper chest just below the collarbones, "High" on his right pec (the viewer's left in the front view) and "Power" crossing the sternum toward his left pec; below it, a large outlined Eye of Horus in the same faded grey-black ink, centred on his chest and reaching toward the top of his stomach; cuffed blue Polo jogger sweatpants, white socks, blue Nike Cortez sneakers with a white swoosh and white soles
    ```

  - More outfits to come. Add each one here as its own bullet.

**Money's character style block** (fills `[CHARACTER DESCRIPTION]`), with his hair tied up and his main outfit. For hair down, replace `gathered into a high top knot` with `falling loose past his shoulders`. For another outfit, replace everything after `main outfit:` with that outfit. Everything that depends on the outfit, such as which tattoos show past a sleeve or collar, sits after `main outfit:`, so the swap stays clean.

```
Money, a young Black man in his early 20s: athletic lean build, grounded realistic proportions, long face with high cheekbones and a defined jaw, deep brown skin, warm brown eyes with dark lashes, calm heavy-lidded gaze, thin mustache and short chin beard; deep indigo-violet locs #2F1958 gathered into a high top knot, with faded sides and back; small gold nose ring in each nostril; face tattoo on the right side of his face only: six small hand-lettered characters stacked upright in a vertical column, reading top to bottom "A", "l", "l", "$", "I", "n" (All $ In), in clean, thin, evenly spaced print in muted indigo-violet ink, running from his right temple at eyebrow height down the front edge of his sideburn to earlobe height, just in front of his ear; the left side of his face is bare; small bold hand-drawn black-ink "$" tattoo with a single vertical stroke, on the back of his right hand near the wrist; leopard-print tattoo of open rosettes and spots in faded black ink covering his left upper arm (the viewer's right in the front view) from the shoulder cap down, stopping above the elbow; small thin gold chain #CEAF81; main outfit: black Playboy T-shirt, with the lower part of the leopard print showing below the left sleeve and the tops of his ornate grey-black cursive "High Power" chest tattoo peeking just above the front of the collar; cuffed blue Polo jogger sweatpants, white socks, blue Nike Cortez sneakers with a white swoosh and white soles
```

For character sheets, add this straight after the description so the face tattoo lands on the correct side in every view. Generators mix up "his left" and "his right", so the note uses directions relative to the viewer. Every turned view faces the viewer's right, which keeps his right temple toward the camera, so the tattoo is always on the visible side:

```
; in the front view the face tattoo is on his right temple, the viewer's left; the three-quarter view, the side view and all three expression close-ups face toward the viewer's right, so his right temple and the tattoo face the camera and his bare left temple is turned away
```

Generators often put the face tattoo on whichever temple faces the camera, or drop it, so check every view before accepting a new sheet.

Default sheet expressions: calm heavy-lidded stare, slight confident smirk, cold narrowed glare.

**Short backup of his character style block (144 words).** Use this only if a generator cuts off the full prompt, which shows up as a sheet missing the ink lines or flat cel shading, since the style lines come last. It replaces both the full description and the sheet note above, because the viewing directions are already built in. With the character sheet block it comes to 267 words, about 1,700 characters. For hair down, replace `in a high top knot` with `falling loose past his shoulders`.

It leaves out his face shape, the full "High Power" description, the socks, the swoosh and soles, and the chain's hex code. It keeps everything that has gone wrong in past sheets: the tattoo letters and side, the viewing directions, his locs colour and the gold nose rings.

```
Money, a lean athletic young Black man in his early 20s: deep brown skin, calm heavy-lidded gaze, thin mustache and short chin beard; deep indigo-violet locs #2F1958 in a high top knot, faded sides; gold nose ring in each nostril; face tattoo on his right temple only, letters stacked top to bottom "A", "l", "l", "$", "I", "n" in thin indigo-violet ink, from eyebrow to earlobe, just in front of his ear; small "$" tattoo on the back of his right hand; leopard-print tattoo on his left upper arm; thin gold chain; black Playboy T-shirt, with the leopard print showing below the left sleeve and the top of the "High Power" chest script peeking above the collar; cuffed blue Polo joggers, blue Nike Cortez sneakers; front view: face tattoo on the viewer's left; three-quarter view, side view and close-ups all face the viewer's right
```

## Night environment block

Reference copy of the night rules. Prompts use the all-in-one block, which already contains them.

```
Night environment layer, same style. Line work: thin lines in dark teal #031E1C, never black, light hatching. Values: stay in the mid-to-dark range; pure black and pure white belong to characters only. Palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, slightly desaturated; hot accents only on signs and lamps. Composition: dense detail at the edges, a calm open area where the character stands. Depth: three layers, haze increasing with distance. Lighting: one main light source whose colour becomes the character's rim light. Reactive surfaces: wet ground, glass, neon signs, haze, rain. Rain: thin straight white streaks; wet pavement mirrors neon as long vertical colour smears. Camera: always matches the character shot's angle and lens.
```

## Day environment block

Reference copy of the day rules. Prompts use the all-in-one block, which already contains them.

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

Every hex code was sampled from pixels, not estimated. Style colours come from the style reference images. Character colours come from each character's reference photos, converted from the phone's Display P3 colour space to sRGB first. The exception is Money's locs, which were sampled from his first reference sheet, because that sheet's all-indigo locs are canon. The style references and photos are not stored in this repo. Finished character sheets are stored in `characters/<name>/`, one per outfit and hairstyle, named `<name>-<outfit>-<hairstyle>.jpg`.

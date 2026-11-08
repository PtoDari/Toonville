# Toonville

Toonville is an anime series. This repo holds its visual style guide: prompt blocks for characters and environments, and rules for how each scene reacts to the characters in it. [WORKFLOW.md](WORKFLOW.md) is the production workflow and checklist, from each character's sheets to every shot's stills. [STORY.md](STORY.md) holds the story so far: the conflict, the characters' stories, the world and the scenes.

## The style rule

Every Toonville prompt carries the established style, word for word, with no exceptions. That includes full prompts, short backups, edits and inpainting, one-line fixes, and anything sent to an image or video tool. This is what keeps every character, environment and prop consistent.

Every generation reflects it too. From now on, every image and video made for Toonville, in any tool, comes from a prompt that carries the master style line below and the job's style block, word for word. Each result is checked against the style before it's accepted, and one that drifts from it isn't used: it's fixed or made again.

Every prompt is built in this order:

1. **Subject:** who or what, doing what, where. For a scene, add the story moment from the **reactive environment** table.
2. **Character style block:** for every character in the shot, their own block from the Characters section below. It covers their look, tattoos and outfit, with their skin and accent hex from the character table.
3. **Style block:** the block for the job, copied word for word.

| Job | Style block | The only edits allowed |
|---|---|---|
| Scenes and story shots | All-in-one block | Keep only the Night or Day line. For a night scene set just after the rain, swap the Night line for the [Night line after the rain](#night-line-after-the-rain). Drop the "At story peaks" sentence for quiet scenes. For a close-up, over-the-shoulder, POV, standoff or screen shot, swap the Camera line for that shot's line from [Camera lines](#camera-lines). |
| Character sheets | Character sheet block | Fill the description, expressions and hex slots. |
| Turnaround sheets with no expression row | Turnaround sheet block | Fill the description and hex slots. |
| Headshot turnaround sheets | Headshot sheet block | Fill the description and hex slots. |
| Single medium shots on a plain background | Medium shot block | Fill the description, pose and expression, and hex slots. |
| Single action medium shots on a plain background, with a glowing power | Action medium shot block | Fill the description, pose and expression, glow source and hex slots. |
| Single full-body action poses on a plain background, without a glowing power | Full-body action pose block | Fill the description, pose and expression, and hex slots. |
| Object sheets for a character's objects | Object sheet block | Fill the object description, character name and hex slots. |
| Environments and props with no character | All-in-one block | Delete the Characters line. Keep only the Night or Day line. For a night plate set just after the rain, swap the Night line for the [Night line after the rain](#night-line-after-the-rain). For a plate that matches a close-up, over-the-shoulder, POV, standoff or screen shot, swap the Camera line for that shot's line from [Camera lines](#camera-lines). |
| Edits and inpainting on existing art | Edit block | Fill the hex slots. For background-only edits, swap the Characters line as its notes say. |

Every one of those blocks opens with the **master style line**, so it appears in every prompt:

```
Style: 90s cel anime with comic-book inking, fine film grain. Core palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8.
```

No prompt rewords, shortens or drops style wording. A style change happens only when it's asked for, and it goes into this README first.

The character, night and day blocks further down are reference copies that spell out the same rules in more detail. Prompts use the blocks in the table above.

## Video spec

Every Toonville video is 30 seconds long, 1080p (1920×1080), 16:9, at 24 frames per second: 720 frames in all.

- **Everything made for a video follows it:** stills, keyframes, storyboards, background plates, and any turnaround or other sheet that appears in a video are 16:9 and finished at 1920×1080. Generate at the generator's 16:9 size, then scale every image to 1920×1080 the same way.
- **Shots add up to 30 seconds:** each shot in the shot list has a length in seconds, and together they make the video's 30 seconds.
- **Screen shots:** live streams and video calls are made at 9:16, as their camera line says, and placed in the 16:9 frame in editing.
- **Video clips:** a clip that comes out of a video tool at another size or frame rate is conformed to 1920×1080 at 24 fps before it's cut in.
- **16:9 versions of the saved images:** the saved images that weren't 16:9 each have a 1920×1080 version saved beside them, named `<name>-16x9.jpg`: the doctor's two sheets, the balaclava and governor chip object sheets, the golden staff's design reference, Orion's concept blueprint, and its establishing shot, camera-position sheet, reverse angle, aerial, booth and bar views, platform, bar and booth close-ups, calm lobby view and exterior location sheet, the Chase Tower's establishing shot, close-up and night and day location sheets, the D. Bell marketplace's day and night location sheets, the Midtown alley's establishing shot, reverse angle and low-angle walking shot, and the Diamond District's establishing shot, reverse angle and aerial view by day (from about 1672×941), Wave's six turnarounds (from 3:2), his headphone mechanism sheet and four cargo combat action shots (from about 1671×941) and his fighting stance (from 4:3), Wave's headshot and expression strips (from 3:1), the hair-up medium shot, the front view, the three close-ups and Ozzy's five boxing shots (from portrait), and the Crystal Tower's drone view. Sheets are padded out at the sides on flat grey (his design sheet on its own navy, with the turnaround's ground line carried across, Orion's blueprint on its own navy, and Wave's sheets on their own grey, the strips padded above and below), and the drone view is cropped around its centre, keeping the aircraft and the tower's gold-lit top. Every other saved image is already 16:9 and is scaled to 1920×1080 when it goes in a video. The size chart is only a reference, and stays as it is.

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

## Night line after the rain

For a night scene or plate the story sets just after the rain, with no rain falling, such as Ozzy's walk down the Midtown alley. It replaces the all-in-one block's Night line, word for word. It's the Night line with one change, asked for by the user: the rain clause now says the rain has just stopped, and the wet pavement stays. It doesn't mention falling rain at all, because generators tend to draw whatever a prompt names.

```
Night: dark teal lines #031E1C, mid-to-dark values; hot accents only on signs and lamps; neon glows in glass and haze; the rain has just stopped; wet pavement mirrors neon in long vertical smears.
```

## Camera lines

The all-in-one block's Camera line is the default, for wide and medium shots. A scene or plate that needs one of the shots below swaps it for that shot's line, word for word. Every line ends with the background matching the shot, so the location stays in step with the camera. Pans and other camera moves are for video, and come with a video block.

**Default, for wide and medium shots:** already in the all-in-one block.

```
Camera: wide angle, low or aerial, foreshortened hands; background matches the shot.
```

**Close-up:** a face, a hand or an object filling the frame. A long lens keeps a face undistorted. The subject says which way the character turns, so one-sided features like Ozzy's face tattoo face the camera.

```
Camera: close-up, the subject filling the frame, long lens, slightly low angle, no distortion; background soft, matching the shot.
```

**Over the shoulder:** looking past one character at what they face. The near character is in the shot, so their character style block goes in the prompt too.

```
Camera: over the shoulder, eye level, the near character's head and shoulder dark and soft in the foreground at one side of the frame; the far subject sharp, long lens; background matches the shot.
```

**POV:** through a character's eyes. Their hands show only when they act. When they do, that character's style block goes in too, so the right tattoos and the right hand show.

```
Camera: first-person point of view from the character's eye level, wide angle, their own hands foreshortened at the bottom of the frame when they act; background matches the shot.
```

**Standoff:** rule-of-thirds framing before a stand-down or an intense fight.

```
Camera: wide shot, low angle, long lens; the opposing sides on the left and right thirds of the frame, facing each other across open ground, horizon on the lower third; background matches the shot.
```

**Screen:** what a phone's front camera sees, for a live stream or a video call. Generators garble on-screen text, so it's generated at 9:16 with no app interface. The stream's or call's interface is added in editing, where the shot is placed in the 16:9 frame.

```
Camera: phone front camera held at arm's length, slightly above eye level, ultra-wide selfie lens with mild distortion at the edges, the holding arm foreshortened toward the lens at one side, vertical framing; background matches the shot; no on-screen interface, labels or captions.
```

## Character sheet block

For turnaround sheets that keep a character consistent across shots. Replace `[CHARACTER DESCRIPTION]`, the three expressions, `[SKIN HEX]` and `[ACCENT HEX]`.

It differs from the story blocks on purpose: a straight eye-level camera (wide-angle and low or aerial shots distort proportions), one even light that matches in every view, and a flat mid grey `#808080` background with no scenery, labels or captions. Mid grey is the default background for every character sheet, including the turnaround and headshot sheet blocks below. It says "no labels or captions" rather than "no text", because generators read "no text" as no lettering anywhere and can erase tattoos and clothing logos.

```
Character turnaround sheet of [CHARACTER DESCRIPTION]. Front, three-quarter, side and back views, full body, same height and scale, aligned on one ground line, relaxed neutral standing pose. Row of three expression close-ups: [EXPRESSION 1], [EXPRESSION 2], [EXPRESSION 3]. Flat mid grey #808080 background, no scenery, no labels or captions.
Style: 90s cel anime with comic-book inking, fine film grain. Core palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8.
Character: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows; flat cel colour, one or two hard-edged shadow tones, solid spotted blacks; skin [SKIN HEX]; signature accent [ACCENT HEX].
Lighting: even light from upper left, identical in every view, no bloom.
Camera: eye level, long lens, no perspective distortion.
```

## Turnaround sheet block

For full-body turnarounds without the expression row, so heads never overlap the standing views. Replace `[CHARACTER DESCRIPTION]`, `[SKIN HEX]` and `[ACCENT HEX]`.

It's the character sheet block with one change, asked for: the row of expression close-ups is removed. Every other word is the same.

```
Character turnaround sheet of [CHARACTER DESCRIPTION]. Front, three-quarter, side and back views, full body, same height and scale, aligned on one ground line, relaxed neutral standing pose. Flat mid grey #808080 background, no scenery, no labels or captions.
Style: 90s cel anime with comic-book inking, fine film grain. Core palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8.
Character: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows; flat cel colour, one or two hard-edged shadow tones, solid spotted blacks; skin [SKIN HEX]; signature accent [ACCENT HEX].
Lighting: even light from upper left, identical in every view, no bloom.
Camera: eye level, long lens, no perspective distortion.
```

## Headshot sheet block

For head-and-shoulders turnarounds that keep a character's face, hair and face tattoos consistent. Replace `[CHARACTER DESCRIPTION]`, `[SKIN HEX]` and `[ACCENT HEX]`.

It's the character sheet block with one change, asked for: head-and-shoulders views instead of full body. Every style line is the same, word for word, including the mid grey background.

```
Headshot turnaround sheet of [CHARACTER DESCRIPTION]. Front, three-quarter, side and back views of the head and shoulders, same size and scale, eyes aligned on one level, relaxed neutral expression. Flat mid grey #808080 background, no scenery, no labels or captions.
Style: 90s cel anime with comic-book inking, fine film grain. Core palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8.
Character: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows; flat cel colour, one or two hard-edged shadow tones, solid spotted blacks; skin [SKIN HEX]; signature accent [ACCENT HEX].
Lighting: even light from upper left, identical in every view, no bloom.
Camera: eye level, long lens, no perspective distortion.
```

## Medium shot block

For a single shot of one character framed from the waist up, on the same plain background as the sheets. Replace `[CHARACTER DESCRIPTION]`, `[POSE AND EXPRESSION]`, `[SKIN HEX]` and `[ACCENT HEX]`. In the pose, say which way the character turns, so features that must stay on one side (like Ozzy's face tattoo) face the camera.

Its style lines are the sheet blocks' lines, word for word: one even light, an eye-level long-lens camera and flat mid grey `#808080`. A medium shot set in a place uses the all-in-one block instead.

```
Medium shot of [CHARACTER DESCRIPTION]. Single figure, framed from the waist up, [POSE AND EXPRESSION]. Flat mid grey #808080 background, no scenery, no labels or captions.
Style: 90s cel anime with comic-book inking, fine film grain. Core palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8.
Character: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows; flat cel colour, one or two hard-edged shadow tones, solid spotted blacks; skin [SKIN HEX]; signature accent [ACCENT HEX].
Lighting: even light from upper left, identical in every view, no bloom.
Camera: eye level, long lens, no perspective distortion.
```

## Action medium shot block

For a single action shot of one character framed from the waist up, on the same plain background as the sheets, while one of their powers glows: for example, Ozzy charging his plasma. Replace `[CHARACTER DESCRIPTION]`, `[POSE AND EXPRESSION]`, `[GLOW SOURCE]`, `[SKIN HEX]` and `[ACCENT HEX]`. In the pose, say which way the character turns, as in the medium shot block, and which hand holds what.

It's the medium shot block with one change, asked for: the lighting line lets the power glow with bloom and rim-light the character, because glowing sources get bloom and their light becomes the rim light. Every other line is the same, word for word, including the mid grey `#808080` background and the eye-level camera.

```
Medium shot of [CHARACTER DESCRIPTION]. Single figure, framed from the waist up, [POSE AND EXPRESSION]. Flat mid grey #808080 background, no scenery, no labels or captions.
Style: 90s cel anime with comic-book inking, fine film grain. Core palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8.
Character: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows; flat cel colour, one or two hard-edged shadow tones, solid spotted blacks; skin [SKIN HEX]; signature accent [ACCENT HEX].
Lighting: even light from upper left; [GLOW SOURCE] is the only glowing source, with bloom, and its colour becomes the character's rim light on the side facing it.
Camera: eye level, long lens, no perspective distortion.
```

## Full-body action pose block

For a single full-body action pose of one character on the same plain background as the sheets, without a glowing power. Replace `[CHARACTER DESCRIPTION]`, `[POSE AND EXPRESSION]`, `[SKIN HEX]` and `[ACCENT HEX]`. Describe the complete pose clearly, including the placement of both hands and feet, the direction the character faces and the distribution of their weight. Keep the whole figure visible from head to feet.

Its style lines are the sheet blocks' lines, word for word: the character ink, skin and accent line, one even light, an eye-level long-lens camera and flat mid grey `#808080`. The pose is dynamic, but the camera does not distort anatomy or proportions.

```
Full-body action pose of [CHARACTER DESCRIPTION]. Single figure, shown head to feet, [POSE AND EXPRESSION]. Flat mid grey #808080 background, no scenery, no labels or captions.
Style: 90s cel anime with comic-book inking, fine film grain. Core palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8.
Character: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows; flat cel colour, one or two hard-edged shadow tones, solid spotted blacks; skin [SKIN HEX]; signature accent [ACCENT HEX].
Lighting: even light from upper left, identical in every view, no bloom.
Camera: eye level, long lens, no perspective distortion; full figure kept inside the frame.
```

## Object sheet block

For the objects that belong to one character: things they carry, wear, use or are known by. Each object gets its own sheet, so it looks the same in every shot. Replace `[OBJECT DESCRIPTION]`, `[CHARACTER NAME]`, `[SKIN HEX]` and `[ACCENT HEX]`. The description comes from the object list in the owner's entry: what the object is, what it's made of, its colours as hex codes and its real size in cm. The owner's hand appears in one view, so the prompt carries their character style block too, after the subject.

Its style lines are the sheet blocks' lines, word for word: the character ink, skin and accent line, one even light, an eye-level long-lens camera and flat mid grey `#808080`. Objects that stay in one place are part of that location's sheet instead.

```
Object sheet of [OBJECT DESCRIPTION], belonging to [CHARACTER NAME]. Front, side, back and top views of the object alone, same scale, aligned on one ground line, plus one view of it held in [CHARACTER NAME]'s hand to show its size. Flat mid grey #808080 background, no scenery, no labels or captions.
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

Some existing sheets drift from the style, with thinner lines and softer shading. Their colour casts have been corrected by hand (see [Restyled images](#restyled-images)), but line weight and shading can't be fixed that way, so an edit that carries this block can come out slightly bolder than the art around it. New sheets generated with the full style block avoid that.

## Character block

Reference copy of the character rules. Prompts use the blocks in the style rule table, which already contain them.

```
90s cel anime with comic-book inking. Line work: bold black ink #030308, thick tapered contours, thin interiors, hatched shadows. Palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, cloud white #DEE7E8, plus the character's skin tone [SKIN HEX] and signature accent [ACCENT HEX]. Shading: flat cel colour, one or two hard-edged shadow tones, solid spotted blacks. Lighting: one strong source, crisp rim light; bloom only on glowing sources like neon, visors, energy. Texture: fine even film grain. Camera: wide angle, low or aerial, hands foreshortened toward the lens.
```

## Character table

Each main character has their own height, skin tone and one signature accent colour. The height, measured barefoot, sets their size on the [size chart](#size-chart). The skin tone fills `[SKIN HEX]`. The accent fills `[ACCENT HEX]`; it appears on the character and is the colour the environment picks up when it reacts to them.

| Character | Height | Skin tone | Accent name | Accent hex |
|---|---|---|---|---|
| Ozzy | 6'2" (188 cm) | Deep brown `#9B7461` | Electric indigo | `#6F00FF` |
| Dr. Erich Heyes, the doctor | 6'5" (196 cm) | Pale ivory `#EAD8C4` | Red | `#CC4747` |
| Wave, the intergalactic patrol officer | 6'4" (193 cm) | Warm brown `#9C6C4E` | Dark goldenrod | `#8B6508` |
| _TBD_ | _TBD_ | _TBD_ | _TBD_ | `#______` |

## Characters

Every character has their own **character style block**: their look, tattoos and outfits, written to fill `[CHARACTER DESCRIPTION]` and to go in front of the style block in every prompt that shows them. Each character entry holds:

- a row in the character table, with height, skin tone and accent colour
- profile notes: colours, hair, face, tattoos and outfits
- their character style block
- a sheet note, if they have features that must stay on one side
- a short backup of their character style block
- a sheet for each outfit and hairstyle in `characters/<name>/`, named `<name>-<outfit>-<hairstyle>.jpg` (for example `-hair-up` or `-hair-down`), with any known differences listed; a character who carries a weapon gets one turnaround with it and one without
- a list of the objects that belong to them, with an object sheet for each in `characters/<name>/objects/`

Asset IDs from earlier work label characters (`CHAR_`), their outfits (`SKIN_`) and their objects (`PROP_`). Keep them as given.

### Ozzy

Oswald, known as Ozzy (`CHAR_001`): a young man of 19. **Combat skill:** Underground amateur boxer with experience in underground boxing matches. "Money" is an old name for him from earlier work, not a separate character. Tone: understated and grounded, with realistic proportions, a calm heavy-lidded gaze and restrained detail.

Every sheet below except the governor chip's object sheet and his boxing shots shows the "$" tattoo on his right hand, or leaves it out, and none of them shows the governor chip. His boxing shots put the "$" on the back of his left hand and draw the chip as a raised dial on a strap. Both belong on his left hand: the "$" on the web between the thumb and index finger, and the chip on the inside of the wrist. The written rules here win.

Each outfit gets two turnarounds, one with his golden staff and one without. The balaclava turnaround has both. The jacket sheets with his hair up and hair down have the staff at his left hip, and the jacket-off and shirtless sheets have no staff; the other half of each of those pairs is still to come.

- **Main outfit with jacket, hair up (`SKIN_002`, with the staff):** [`characters/ozzy/ozzy-main-outfit-jacket-hair-up.jpg`](characters/ozzy/ozzy-main-outfit-jacket-hair-up.jpg), his main outfit as worn in most shots, with the grey bomber jacket open and his hair tied up: front, three-quarter, side view facing right, side view facing left, and back, on mid grey `#808080` (made with the turnaround sheet block, then fixed by hand). It's canon for the jacket outfit, the face tattoo on his right temple (bare left side), and where the retracted golden staff sits: at his left hip. Exceptions, where the written rules here win:
  - **Golden staff:** painted in by hand. The generator put it in his right hand, so it was painted out, and the retracted staff was placed at his left hip in the front, left-facing side and back views. In the three-quarter and right-facing side views his body hides it. Its top diamond sits in front of the jacket hem, not tucked under it.
  - **Face tattoo lettering:** garbled in every view. It reads A, l, l, $, I, n. The left-facing view had it on his left temple, so it was painted out there.
  - **Hair:** the locs are wound into a tight bun. His high top knot is looser, with the locs fanning up and out.
  - **Side-view sneakers:** chunkier than the slim Cortez in the other views.
  - **Colours:** colour-corrected by hand toward the master style and the hex codes listed here; the jacket still reads a little darker than `#C2C2C2`.
  - **Repaint traces:** close up, his right hand in the back view has a straight left edge, and the front view's jacket panel has a lighter patch where the staff's top diamond was.
- **Main outfit with jacket, hair down (`SKIN_003`, with the staff):** [`characters/ozzy/ozzy-main-outfit-jacket-hair-down.jpg`](characters/ozzy/ozzy-main-outfit-jacket-hair-down.jpg), the same jacket turnaround with his locs falling loose past his shoulders: front, three-quarter, side view facing right, side view facing left, and back, on mid grey `#808080` (made with the turnaround sheet block, then fixed by hand). It's canon for the jacket outfit with his hair down, the face tattoo on his right temple (bare left side), and the retracted golden staff at his left hip. Exceptions, where the written rules here win:
  - **Golden staff:** painted in by hand, as on his hair-up jacket sheet: at his left hip in the front, left-facing side and back views, hidden by his body in the three-quarter and right-facing side views, with its top diamond in front of the jacket hem.
  - **Face tattoo:** faint marks in the front view, because his face is too small at this sheet size, and garbled in the three-quarter and right-facing views. It reads A, l, l, $, I, n.
  - **Side-view sneakers:** chunkier than the slim Cortez in the other views.
  - **Colours:** colour-corrected by hand toward the master style and the hex codes listed here; the jacket still reads a little darker than `#C2C2C2`.
  - **Repaint traces:** close up, his right hand in the back view has a straight left edge.
- **Main outfit with jacket, balaclava (`SKIN_001`, with the staff):** [`characters/ozzy/ozzy-main-outfit-jacket-balaclava.jpg`](characters/ozzy/ozzy-main-outfit-jacket-balaclava.jpg), his main outfit with the jacket open and his balaclava pulled on, so only his eyes show: front, three-quarter, side and back, on mid grey `#808080` (made with the turnaround sheet block, then fixed by hand). It's canon for how the balaclava looks with his main outfit and the retracted golden staff at his left hip. Exceptions, where the written rules here win:
  - **Mirrored:** the generator drew him the wrong way round, so the staff was painted out on his right side and placed at his left hip, and the "$" was moved from his left hand to his right. The "$" has since moved to the web of his left hand, so on this sheet it's on the wrong hand again. The turned views still face the viewer's left, the opposite of his other sheets; with the mask on, nothing on his face is one-sided.
  - **Golden staff:** painted in by hand, using the sheet's own staff with diamonds added to its top third. In the three-quarter view his left hand overlaps it, so it can look gripped, and in the side view it hangs behind his arm. Its top diamond sits in front of the jacket hem.
  - **Side-view sneaker:** it pointed backwards, so it was flipped by hand to point the way he faces.
  - **Playboy logo:** the generator left the T-shirt plain, so the white bunny was printed on by hand in the front and three-quarter views, with its shape taken from his jacket-off sheet. In the side view the jacket hides it.
  - **"High Power":** both full words show on a bare strip of neck between the mask and the collar. In his main outfit, only the tops of the lettering peek above the crew-neck collar.
  - **New Era flag:** a small white mark low on the mask's neck, instead of on its left side just below the eye opening.
  - **Repaint traces:** close up, a faint smudge where each "$" was, and a slightly stepped jacket hem where the staff's top diamond was.
- **Main outfit with jacket, balaclava (`SKIN_001`, without the staff):** [`characters/ozzy/ozzy-main-outfit-jacket-balaclava-no-staff.jpg`](characters/ozzy/ozzy-main-outfit-jacket-balaclava-no-staff.jpg), the same turnaround without his golden staff: front, three-quarter, side and back, on mid grey `#808080`. It's made from the same generation as the version with the staff, then fixed by hand: the staff he held in his right hand was painted out, so both hands hang empty. It's canon for the balaclava with his main outfit and no staff, the "$" on the web of his left hand, and the white Playboy bunny on his T-shirt. Exceptions, where the written rules here win:
  - **Turned views:** they face the viewer's left, the opposite of his other sheets; with the mask on, nothing on his face is one-sided.
  - **"$" tattoo:** the generator put it on the back of his left hand, so it was moved by hand onto the web, using each view's own lettering. In the front view it sits just above where his thumb meets his index finger, and its lettering is narrower than in the other views.
  - **Side-view sneaker:** it pointed backwards, so it was flipped by hand to point the way he faces.
  - **Playboy logo:** printed on by hand, as on the version with the staff.
  - **"High Power":** both full words show on a bare strip of neck between the mask and the collar. In his main outfit, only the tops of the lettering peek above the crew-neck collar.
  - **New Era flag:** a small white mark low on the mask's neck, instead of on its left side just below the eye opening.
  - **Repaint traces:** close up, where the staff was painted out of his right hand, two fingertips end in a straight edge in the front view, a pale sliver sits beside the hand in the three-quarter view, and in the back view the outline along the hand runs a little past the fingertips. The back of his left hand has a soft patch where the "$" was.
- **Headshots, balaclava:** [`characters/ozzy/ozzy-headshots-balaclava.jpg`](characters/ozzy/ozzy-headshots-balaclava.jpg), his head-and-shoulders turnaround with his balaclava on, in his main outfit with the jacket: front, three-quarter, side and back, on mid grey `#808080` (made with the headshot sheet block). It's canon for the balaclava from the head and shoulders: only his eyes show, and the New Era flag is on his left side in every view. Exceptions, where the written rules here win:
  - **Lettering:** two bands of "Supreme", edged with thin white stripes. The balaclava has offset rows all over it, with no stripes.
  - **New Era flag:** it sits beside the eye opening, not just below it.
  - **"High Power":** both full words show above a lower neckline. In his main outfit, only the tops of the lettering peek above the crew-neck collar.
  - **Turned views:** they face the viewer's left, the opposite of his other sheets; with the mask on, nothing on his face is one-sided.
  - **Expression:** the three-quarter view's brow is sterner than the relaxed neutral look the block asks for.
  - **Colours:** colour-corrected by hand toward the master style and the hex codes listed here.
- **Medium shot, main outfit, balaclava:** [`characters/ozzy/ozzy-medium-shot-main-outfit-balaclava.jpg`](characters/ozzy/ozzy-medium-shot-main-outfit-balaclava.jpg), a single shot in his main outfit with the jacket and his balaclava on, framed from the waist up and turned toward the viewer's right, on mid grey `#808080` (made with the medium shot block, then fixed by hand). It's canon for the balaclava's offset rows of lettering and his chain. Exceptions, where the written rules here win:
  - **New Era flag:** the generator put it on his right side, so it was painted out. His left side, where it belongs, is turned away.
  - **Golden staff:** he was drawing it from his waistband with his right hand, so it was painted out. His left hip, where it belongs, is turned away, so it doesn't show.
  - **T-shirt:** it shows the "PLAYBOY" wordmark instead of the bunny logo.
  - **"High Power":** both full words show on a bare strip of chest above the collar. In his main outfit, only the tops of the lettering peek above the crew-neck collar.
  - **Repaint traces:** close up, the T-shirt folds where the staff was are repainted.
- **Overhead smash, main outfit, balaclava:** [`characters/ozzy/ozzy-action-smash-main-outfit-balaclava.jpg`](characters/ozzy/ozzy-action-smash-main-outfit-balaclava.jpg), an action shot from the waist up in his "Main, in action" outfit with his balaclava on: both hands on the extended golden staff, bringing it down overhead, with electric indigo plasma crackling around its diamond tip, on mid grey `#808080` (made with the action medium shot block). It's canon for the overhead smash, the plasma's colour with bloom and its indigo rim light on him, and the Playboy bunny logo on his T-shirt. Exceptions, where the written rules here win:
  - **Golden staff:** it bends in an arc through the swing. It's a rigid staff.
  - **Plasma:** it also arcs along the shaft, not only around the diamond tip.
- **Boxing shots, main outfit, hair up (without the staff):** five full-body shots, made by the user and made canon by the user, on grey, of him boxing with his hair in its top knot. Two are 1024×1536 and three are 1199×1312.
  - **Guard, jacket on:** [`ozzy-action-guard-main-outfit-jacket-hair-up.jpg`](characters/ozzy/ozzy-action-guard-main-outfit-jacket-hair-up.jpg), facing the viewer with both fists up.
  - **Guard, jacket off:** [`ozzy-action-guard-main-outfit-hair-up.jpg`](characters/ozzy/ozzy-action-guard-main-outfit-hair-up.jpg), the same guard in his T-shirt.
  - **Crouch, jacket on:** [`ozzy-action-crouch-main-outfit-jacket-hair-up.jpg`](characters/ozzy/ozzy-action-crouch-main-outfit-jacket-hair-up.jpg), crouched low and turned behind his fists.
  - **Jab, jacket on:** [`ozzy-action-jab-main-outfit-jacket-hair-up.jpg`](characters/ozzy/ozzy-action-jab-main-outfit-jacket-hair-up.jpg), throwing his right fist out toward the viewer's left, his left hand guarding his face.
  - **Jab, jacket off:** [`ozzy-action-jab-main-outfit-hair-up.jpg`](characters/ozzy/ozzy-action-jab-main-outfit-hair-up.jpg), the same jab in his T-shirt.

  They're canon for his boxing: his guard, his crouch and his jab. In every one, the face tattoo is on his right temple, there's a nose ring in each nostril and the Playboy bunny is white, and in the jacket-off shots the leopard print is on his left upper arm. Exceptions, where the written rules here win:
  - **Earring:** a gold hoop in his right ear. He doesn't wear one.
  - **"$" tattoo:** on the back of his left hand, not the web between his thumb and index finger.
  - **Governor chip:** a raised dial on a strap, like a watch, on the back of his left wrist. It's a flush implant on the inside of the wrist.
  - **"High Power":** both full words show above the collar. In his main outfit, only the tops of the lettering peek above the crew-neck collar.
  - **Colours:** the skin reads more orange, from `#AA6444` to `#D1703C`, than `#9B7461`; the locs are a brighter violet, from `#3D1353` to `#4E0B7A`, than `#2F1958`; the jacket reads darker and pinker `#A89CA3` than `#C2C2C2`; and the backgrounds are grey, about `#787575`, not mid grey `#808080`.
  - **16:9 versions:** each has one beside it, named `<name>-16x9.jpg`, scaled to 1080 pixels high and padded at the sides on its own grey to 1920×1080.
- **Approved references noted on GitLab's `main` branch, not stored in this repo:** made canon by the user on 2026-11-07 in other work. Some may be the same images as the boxing shots above, and the written rules here stay authoritative.
  - **Boxing:** a full-body bare-fist straight right-hand punch, jacket on and jacket off, and a full-body defensive slip-and-dodge, jacket on and jacket off, all without the golden staff. In them, the visible wrist implant, the "$" on the back of his hand and the exposed chest lettering are accepted for those references only.
  - **Other images:** `A55BEA8A-0217-4AD1-B635-C48103114AFC.png` (masked character sheet with turnaround and combat poses); `E2EA7916-5146-4731-AE46-436BB6FC90A2.png` (masked combat pose); `Smirk.jpg`, `Calm.jpg`, and `Glare .jpg` (default expression close-ups); `Facetat.png` (face tattoo detail); `FrontView.jpg` (full-body jacket-off front view); `MaskedNW(1).jpg` (masked jacket-on reference); and `NJHU.jpg` (jacket-off, hair-up reference). These approved references supplement the existing canon; the written character rules in this README remain authoritative where an image contains a known discrepancy. The source images are retained in the conversation.
- **Main outfit, hair up (`SKIN_006`, without the staff):** [`characters/ozzy/ozzy-main-outfit-hair-up.jpg`](characters/ozzy/ozzy-main-outfit-hair-up.jpg), his official main-outfit turnaround with his hair tied up: front, three-quarter, side view facing right, side view facing left, and back. It's canon for his look, his outfit and where his tattoos sit: the face tattoo on his right temple, the leopard print below his left sleeve, and the tops of "High Power" above the collar in the front view. Exceptions, where the written rules here win:
  - **Nose rings:** each view shows one ring. He has one in each nostril.
  - **Face tattoo lettering:** a little garbled in the front view. It reads A, l, l, $, I, n.
  - **"High Power" at the collar:** reads as just the capitals H and P. The placement is right.
  - **Side-view sneakers:** chunkier than the slim Cortez in the other views.
  - **Colours:** colour-corrected by hand toward the master style and the hex codes listed here, removing the violet cast it had. The Playboy bunny on the T-shirt is still violet; it's white.
- **Main outfit, hair down (`SKIN_007`, without the staff):** [`characters/ozzy/ozzy-main-outfit-hair-down.jpg`](characters/ozzy/ozzy-main-outfit-hair-down.jpg), his main-outfit turnaround with his locs falling loose past his shoulders: front, three-quarter, side view facing right, side view facing left, and back (made with the turnaround sheet block). It's canon for his hair down, his outfit and where his tattoos sit: the face tattoo on his right temple, the leopard print below his left sleeve, and the tops of "High Power" above the collar in the front view. Exceptions, where the written rules here win:
  - **Front-view face tattoo:** shows as faint marks, because his face is too small at this sheet size for the lettering to read. It reads A, l, l, $, I, n, clearly visible in the three-quarter and right-facing views.
  - **Side-view sneakers:** chunkier than the slim Cortez in the other views.
- **Main outfit shirtless, hair up (`SKIN_005`, without the staff):** [`characters/ozzy/ozzy-main-outfit-shirtless-hair-up.jpg`](characters/ozzy/ozzy-main-outfit-shirtless-hair-up.jpg), his official shirtless asset: the shirtless tattoo-reference outfit with his hair tied up, in front, three-quarter, side (facing left) and back views. It's canon for his build (with slight ab definition on the front and three-quarter views), his nose rings, and where every tattoo sits. In the side view, "Power" wraps across his left pec, and the leopard print covers his left upper arm in every view. Exceptions, where the written rules here win:
  - **Face tattoo lettering:** garbled in the three-quarter view. It reads A, l, l, $, I, n.
  - **"High Power" lettering:** plainer than his real ornate script. The placement is right.
  - **Colours:** colour-corrected by hand toward the master style and the hex codes listed here, removing the violet cast it had.
- **Main outfit shirtless, hair down (`SKIN_004`, without the staff):** [`characters/ozzy/ozzy-main-outfit-shirtless-hair-down.jpg`](characters/ozzy/ozzy-main-outfit-shirtless-hair-down.jpg), the shirtless tattoo-reference outfit with his locs falling loose past his shoulders, in front, three-quarter, side (facing left) and back views (made with the turnaround sheet block). It's canon for his hair down shirtless, his build (with slight ab definition on the front and three-quarter views), his nose rings, and where every tattoo sits: the face tattoo on his right temple, reading A, l, l, $, I, n in the three-quarter view; "High Power" across his upper chest with the Eye of Horus below; and the leopard print on his left upper arm in every view. In the side view, his bare left temple faces the camera and "Power" shows across his chest. Exceptions, where the written rules here win:
  - **Front-view face tattoo:** shows as faint marks, because his face is too small at this sheet size for the lettering to read. It's on the correct temple.
  - **"High Power" lettering:** plainer than his real ornate script, without the swashes beneath. The placement is right.
  - **Colours:** colour-corrected by hand toward the master style and the hex codes listed here.
- **Headshots, hair up:** [`characters/ozzy/ozzy-headshots-hair-up.jpg`](characters/ozzy/ozzy-headshots-hair-up.jpg), his head-and-shoulders turnaround in his main outfit: front, three-quarter, side and back, on mid grey `#808080` (made with the headshot sheet block). It's canon for his face, the face tattoo on his right temple (bare left side), his nose rings and chain. Exceptions, where the written rules here win:
  - **Hair:** the locs are wound into a tight bun. His high top knot is looser, with the locs fanning up and out.
  - **"High Power":** both full words show above a lower neckline. In his main outfit, only the tops of the lettering peek above the crew-neck collar.
- **Headshots, hair down:** [`characters/ozzy/ozzy-headshots-hair-down.jpg`](characters/ozzy/ozzy-headshots-hair-down.jpg), his head-and-shoulders turnaround in his main outfit with his locs falling loose past his shoulders: front, three-quarter, side and back, on mid grey `#808080`. It's his hair-up headshots with only the hair changed (an edit made with the edit block), so his face, the face tattoo on his right temple (bare left side), his nose rings and chain are the same. It's canon for his hair down from the head and shoulders, with the faded sides showing in the three-quarter and side views. Exceptions, where the written rules here win:
  - **"High Power":** both full words show above a lower neckline, as in his hair-up headshots. In his main outfit, only the tops of the lettering peek above the crew-neck collar.
- **Medium shot, main outfit, hair up:** [`characters/ozzy/ozzy-medium-shot-main-outfit-hair-up.jpg`](characters/ozzy/ozzy-medium-shot-main-outfit-hair-up.jpg), a single shot in his main outfit with his hair up, framed from the waist up and turned slightly toward the viewer's right, on mid grey `#808080` (made with the medium shot block). The generator mirrored him, so the shot was flipped and his tattoos were put back where they belong. It's canon for how he looks in a single shot: the face tattoo on his right temple in front of his ear, reading A, l, l, $, I, n; the leopard print below his left sleeve; a nose ring in each nostril; and his chain. Exceptions, where the written rules here win:
  - **"High Power":** most of both words show above a lower neckline. In his main outfit, only the tops of the lettering peek above the crew-neck collar.
  - **Hand tattoo:** the "$" doesn't show the two short ticks across its lower curve.
- **Front view, main outfit, hair up:** [`characters/ozzy/ozzy-front-view-main-outfit-hair-up.jpg`](characters/ozzy/ozzy-front-view-main-outfit-hair-up.jpg), the front view from his hair-up main-outfit sheet on its own, full body and centred, at the medium shot's size (1792×2400) on mid grey `#808080`. It's cut from that sheet at full resolution, with the sheet's ground line taken out, so it's canon for the same things and carries the same exceptions, where the written rules here win:
  - **Nose rings:** only one ring shows. He has one in each nostril.
  - **Face tattoo lettering:** a little garbled. It reads A, l, l, $, I, n.
  - **"High Power" at the collar:** reads as just the capitals H and P. The placement is right.
  - **Colours:** colour-corrected by hand toward the master style and the hex codes listed here, as on that sheet. The Playboy bunny is still violet; it's white.
- **Close-ups, hair up:** [`ozzy-close-up-glare-hair-up.jpg`](characters/ozzy/ozzy-close-up-glare-hair-up.jpg), [`ozzy-close-up-smirk-hair-up.jpg`](characters/ozzy/ozzy-close-up-smirk-hair-up.jpg) and [`ozzy-close-up-calm-hair-up.jpg`](characters/ozzy/ozzy-close-up-calm-hair-up.jpg) in `characters/ozzy/`, his three default expressions as head close-ups, each centred at 1792×2400 on mid grey `#808080`. They're cut at full resolution from the expression row of his first hair-up sheet. The glare and smirk turn toward the viewer's right with the face tattoo on his right temple, and the calm look turns toward the viewer's left, showing his bare left temple. They're canon for his expressions and his face from close up. Exceptions, where the written rules here win:
  - **Nose rings:** the glare and smirk show one small gold stud, and the calm look shows none. He has a small gold ring in each nostril.
  - **Collar:** a white collar band shows at the neck, and "High Power" doesn't show. His main outfit is a black crew-neck T-shirt with the tops of the lettering just above the collar.
  - **Colours:** colour-corrected by hand toward the master style and the hex codes listed here, removing the rosy, violet cast they had.
- **Colours:** skin `#9B7461`, accent `#6F00FF` (electric indigo, the same colour as his plasma), jacket lining `#5381D4` (royal blue, sampled from the cap in his reference photos), locs `#2F1958` (deep indigo-violet, with shadow `#1E083C` and highlight `#422D7A`), gold `#CEAF81` (chain, nose rings and golden staff), jacket `#C2C2C2` (light grey), plasma `#6F00FF` (electric indigo).
- **Height:** 6'2" (188 cm) barefoot, from the ground to the top of his head, with his locs down. He's about 6 heads tall, counting a head from the top of his head to his chin. His body and proportions are the same in every outfit, masked or not: his clothes, hair, balaclava and what he carries change, but his build doesn't. The camera angle and his shoes can change how tall he looks on screen, never his real height. Barefoot, his top knot reaches about 6'5" (196 cm) and his eye line sits at about 171 cm. His sneakers add about 2.5 cm, so in them he stands about 190.5 cm. All of it is measured on his canon sheets and drawn on the [size chart](#size-chart).
- **LoRA:** not used for now; see [LoRA training](#lora-training). His 30-image training set stays in [`characters/ozzy/lora/`](characters/ozzy/lora/), with the trigger word `ozzytoon`, in case that changes. Its images show the "$" on his right hand, from before it moved to his left.
- **Objects:** he keeps many stolen artifacts. Each one gets an entry here and an object sheet in `characters/ozzy/objects/`.
  - **Golden staff (`PROP_001`), once called the golden rod:** a stolen artifact, and his weapon. It's a telescoping staff of polished gold `#CEAF81`, the same gold as his chain.
    - **Size:** 150 cm long extended, reaching about his chin, and 30 cm retracted.
    - **Look:** the top third is encrusted with clear faceted diamonds and ends in a large faceted diamond tip. A matching large faceted diamond forms the end cap at the bottom.
    - **Carried:** retracted, tucked into his waistband at his left hip or inside his open jacket. He holds it and fires through it with his left hand, the leopard-print arm.
    - **Use:** he fights with it extended, and channels his plasma through its diamond tip (see Powers). It's also what powers his ship, the Crystal Tower: it increases his power, and its diamonds hold his charge and shine at a specific frequency that powers the ship's accelerators and boosters. While they hold his charge, the diamonds glow his electric indigo plasma `#6F00FF`, with bloom, since they're a glowing source. The doctor's power transfer needs it too, unless crafted by artificial means (see [STORY.md](STORY.md)).
    - **In every shot:** the shot list records which state it's in: retracted at his left hip, extended in his hand, or absent.
    - **Object sheets:** in `characters/ozzy/objects/`, made with the object sheet block, then fixed by hand. On both, Ozzy's face tattoo was on his left temple, so it was painted out and inked by hand on his right temple, and stray marks on his neck were painted out.
      - **Extended:** [`ozzy-golden-staff-extended.jpg`](characters/ozzy/objects/ozzy-golden-staff-extended.jpg), in front, side and back views with a top view of the diamond tip, and Ozzy holding it upright in his left hand. It's canon for its telescoping sections, diamond-encrusted top, large diamond tip and matching end cap. Exceptions, where the written rules here win:
        - **Length:** it reaches about his eyes, about 165 cm. It's 150 cm, reaching about his chin.
        - **Encrusting:** it covers about the top quarter of the staff, not the top third.
      - **Retracted:** [`ozzy-golden-staff-retracted.jpg`](characters/ozzy/objects/ozzy-golden-staff-retracted.jpg), in front, side and back views with a top view, and Ozzy holding it in his left hand. Exceptions, where the written rules here win:
        - **Encrusting:** it covers about the top two-thirds of the retracted staff.
        - **Size:** in his hand it reads about 45 cm. It's 30 cm retracted.
      - **On both sheets:** his T-shirt has no Playboy logo, and the nose rings don't match: one ring on the extended sheet, none on the retracted. He has a small gold ring in each nostril.
      - **Design reference:** [`ozzy-golden-staff-design-reference.jpg`](characters/ozzy/objects/ozzy-golden-staff-design-reference.jpg), a multi-panel design sheet, made canon by the user, at 1536×1024. It has:
        - extended and retracted views, most with the diamond encrusting and one of each without it
        - close-ups of the encrusted and plain sections, the collars between sections, the faceted diamond tip and the end cap
        - top views of the diamonds
        - the staff telescoping out in six steps
        - a hand gripping it, and Ozzy holding it upright in his left hand

        It's canon for the staff's design: its telescoping sections and how they extend, the collars, the diamond encrusting, the tip and the end cap. Exceptions, where the written rules here win:
        - **Ozzy:** drawn off model, with short locs, a purple-grey jacket, baggy pants and Dunks. Use his character sheets for his look.
        - **Encrusting:** on the extended views it covers about the top sixth of the staff, and one extended and one retracted view show none. Its top third is encrusted.
        - **Style:** more rendered than the Toonville look, with diagram arrows and panel borders.
        - **Colours:** colour-corrected by hand toward the master style and the hex codes listed here: the panels are flat mid grey and the gold is close to `#CEAF81`. His joggers read a little greyer than on his other sheets.
        - **16:9 version:** [`ozzy-golden-staff-design-reference-16x9.jpg`](characters/ozzy/objects/ozzy-golden-staff-design-reference-16x9.jpg), padded at the sides on flat grey to 1920×1080.
  - **Governor chip:** a cybernetic implant on the inside of his left wrist, not one of his stolen artifacts: the doctor put it there (see Governor chip below). It's never a handheld device, and it's only ever shown out of his wrist after he rips it out.
    - **Look:** from the user's reference image, which isn't stored in this repo: a squat round puck of brushed steel, with a polished steel bezel around a domed black glass face. On the face, a single glowing sky-blue line folds into two triangles meeting at a point, like an angular infinity sign. A thin band of lavender light circles the puck below the bezel, and a frosted base disc glows the same lavender underneath. A fine vent grille, a tiny button and a small amber port sit on its side. A short bundle of braided blue, violet and white wires runs from its side to a small rectangular steel anchor plate with two screws.
    - **Colours:** sampled from the reference image: symbol sky blue `#70B3F7`, light band lavender `#8D8EDB`, wires blue `#6C73B5`, steel `#86808D` and port amber `#B36A3B`. When it glitches, its light flickers his electric indigo `#6F00FF`.
    - **Size:** about the same size as his "$" tattoo, roughly 3 cm across.
    - **In his wrist:** set flush into the inside of his left wrist, level with the skin, never sticking out like a button. Only its glass face and thin steel rim show, with its faint lavender ring of light around the rim. It's never on his right arm, his palm or his hand, and in a palm-up view it shows on the inside of his left wrist.
    - **Object sheet:** [`ozzy-governor-chip.jpg`](characters/ozzy/objects/ozzy-governor-chip.jpg), made outside this project's Higgsfield account from the object sheet prompt, at 1536×1024, then fixed by hand. It has a large head close-up; a turnaround of him in his main outfit with the jacket, in front, three-quarter, side, back three-quarter and back views; close-ups of his face tattoo, his chest and his hands; the chip on its own from the front, both sides and the back; the chip set into the inside of his left wrist; a cutaway of it under the skin; and the retracted staff at his hip. It's canon for the chip's look, including the four screws on its steel back and its bow-tie symbol, and for how it sits flush inside his left wrist with its lavender glow. Exceptions, where the written rules here win:
      - **"$" tattoo:** in the hand panel at the bottom left it's on his left hand, but on the back of the hand just above the web, not on the web itself. The small hand panel on the right had it on his right hand, so it was painted out there.
      - **Chip on the forearm panel:** in the small panel on the right, it sits partway up the forearm, not at the wrist.
      - **Face tattoo lettering:** both face close-ups read A, A, l, $, I, n, so in each the second letter was painted out and replaced with a copy of the sheet's own "l". They now read A, l, l, $, I, n.
      - **Earrings:** the close-ups showed a gold stud in each ear, so they were painted out.
      - **Repaint traces:** very close up, a faint soft spot beside the top of the new "l" in the profile close-up.
      - **"High Power":** both full words show above a lower neckline in the close-ups. In his main outfit, only the tops of the lettering peek above the crew-neck collar.
      - **Golden staff:** plain gold with a red band and a diamond at each end, without the diamond-encrusted top third.
      - **Style:** more rendered than the Toonville look, with heavy hatching.
  - **Balaclava:** a dark navy knit balaclava by Supreme, made with New Era, that he pulls over his whole head, face and neck. It hides his hair completely, so only his eyes show.
    - **Colours:** dark navy `#262737` knit with white `#E3E1F0` lettering, sampled from the product photo after converting it from Display P3 to sRGB.
    - **Look:** rows of the white "Supreme" wordmark in chunky italic knit letters repeat all the way around it in offset rows, with no stripes between them. One wide rounded eye opening runs across both eyes. A small white New Era flag logo sits on its left side, just below the eye opening, which is the viewer's right in a front view. It ends in a plain navy ribbed hem at the base of the neck.
    - **Size:** one size, fitted close to his head, running from the crown to the ribbed hem at the base of his neck.
    - **Worn:** pulled all the way down, with its neck bunched in soft folds above his collar. For prompts, use the balaclava swap under his character style block.
    - **Object sheet:** [`ozzy-balaclava.jpg`](characters/ozzy/objects/ozzy-balaclava.jpg) in `characters/ozzy/objects/`, made from the object sheet block in ChatGPT, then fixed by hand: front, side, back and top views of the balaclava on its own, Ozzy holding it in his right hand, a view of him wearing it, an unmasked close-up and a full-body turnaround in his main outfit. It's canon for the balaclava's look: the offset rows of lettering with no stripes, the eye opening, the ribbed hem and the New Era flag on its left side. The unmasked close-up is also a good reference for his face tattoo, reading A, l, l, $, I, n on his right temple, and a nose ring in each nostril. Exceptions, where the written rules here win:
      - **"$" tattoo:** the full-body front view had it on both hands, so the one on his left hand was painted out. The "$" has since moved to the web of his left hand, so the one left on his right hand is now the wrong one.
      - **Style:** more rendered than the Toonville look, with hatching, at only 1536×1024. Use his character sheets for his look.
      - **Earring:** the close-up shows a small stud in his right ear. He doesn't wear one.
      - **"High Power":** both full words show above a lower neckline in the close-ups. In his main outfit, only the tops of the lettering peek above the crew-neck collar.
- **Fighting:** he's an underground amateur boxer, as the user made canon. His boxing shots, in his sheets list above, show his guard, crouch and jab. His story is in [STORY.md](STORY.md).
- **Powers:** he channels his energy into electric indigo `#6F00FF` plasma beams, fired from his hands or from the golden staff's diamond tip. The plasma is a glowing source, so it gets bloom. While he fires it, it's the main light on him: it becomes his rim light and lights the scene around him. His heated plasma is also the only thing that can power his ship, the Crystal Tower. He was born with these powers: he thinks they're electricity, but he really ionizes the gas in the air into plasma. The smaller crackle he takes for electricity looks light blue, with its hex code still TBD, while his plasma stays electric indigo. He charges from light, such as neon, the city's lights, starry nights and, above all, the sun, and stores the charge. The small star remnants he collects glow; their colour, and the look of the Star Seeds he makes from them, are TBD. How his powers work is in [STORY.md](STORY.md).
- **Governor chip:** a cybernetic implant the doctor set into the inside of his left wrist shortly after the crash of his ship, the Crystal Tower, to keep him from reaching his power too quickly and to stop the ship from recognizing him: it holds down his output, drains him faster and scrambles the frequency the ship knows him by. It's an implant, never a handheld device, and it's only shown out of his wrist after he rips it out. It malfunctions, now and then spitting out scrambled light frequencies, which come out as glitchy flickers of his electric indigo `#6F00FF` that show through the skin around it. It sits flush with the skin, about the size of his "$" tattoo, on the same hand but not touching it. Its look is in his objects list above, and it's in his character style block. Of his character sheets, only his boxing shots show it, drawn wrongly as a raised dial on a strap. His story is in [STORY.md](STORY.md).
- **Accent note:** electric indigo `#6F00FF` is canon, chosen by the user. It replaced royal blue `#5381D4`, which was on trial and stays the colour of his jacket lining. His accent and his plasma are now the same colour, so when a scene reacts to him, its signs, reflections and haze take on the indigo of his power.
- **Hair:** deep indigo-violet locs all over, not just highlights, with faded sides and back. Worn two ways: gathered into a high top knot, or falling loose past his shoulders.
- **Face:** warm brown eyes with dark lashes, thin mustache and short chin beard, a small gold nose ring in each nostril.
- **Face tattoo, "All $ In" (right side only):** six small hand-lettered characters stacked upright in a vertical column. Top to bottom they read capital `A`, lowercase `l`, lowercase `l`, `$`, capital `I` with serifs (which tells it apart from the `l`s), lowercase `n`. Clean, thin, evenly spaced print in muted indigo-violet ink. The column starts at his right temple at about eyebrow height, and runs down the front edge of his sideburn hairline to about earlobe height, just in front of his ear. The left side of his face is bare.
- **Chest tattoo, "High Power":** large ornate cursive script, with tall flourished capitals `H` and `P` and swashes under the words, in faded grey-black ink. It runs across his upper chest just below the collarbones. "High" sits on his right pec, which is the viewer's left in a front view, and "Power" crosses the sternum toward his left pec. In his main outfit, the crew-neck T-shirt covers most of it, but the tops of the lettering peek just above the front of the collar, so his character style block includes that. Any outfit that shows his chest must include the full chest tattoo text from the shirtless outfit below.
- **Abdomen piece, Eye of Horus:** a large outlined Eye of Horus, in the same faded grey-black ink, under "High Power". It's centred on his upper abdomen, just below his pecs, as on his shirtless sheets. Like "High Power", it's hidden by his T-shirt and lives in the shirtless outfit text. Ignore the script near his left pec; it isn't part of his design.
- **Arm tattoo, leopard print:** open rosettes and solid spots in faded black ink, covering his left upper arm. It starts at the shoulder cap, runs down the outer arm and stops above the elbow. His left arm is the viewer's right in a front view. In his main outfit, the jacket's sleeves cover it. With the jacket off, the part below the T-shirt sleeve shows in every view where that arm is visible, so it's in his jacket-off outfit text.
- **Hand tattoo:** a small, bold, hand-drawn black-ink "$" with a single vertical stroke through it, and two short ticks crossing its lower curve. It sits on the web of his left hand, between the thumb and index finger, which is the viewer's right in a front view. The governor chip is on the inside of the same wrist. The two don't touch, and his right hand is bare. The "$" is never on the back of his hand, his palm or his right hand. In a palm-up view it doesn't show on the palm: it shows only where the angle really reveals the web of his thumb.
- **Outfits:**
  - **Main (worn in most shots):** a light grey bomber jacket `#C2C2C2` worn open, with a ribbed knit collar, cuffs and hem, a front zip and royal blue lining `#5381D4`, over a black Playboy T-shirt; cuffed blue Polo jogger sweatpants, white socks, blue Nike Cortez sneakers with a white swoosh and white soles; his small thin gold chain; and his retracted golden staff at his left hip. The jacket's sleeves cover his leopard print. Its sheets are his jacket turnarounds, `ozzy-main-outfit-jacket-hair-up.jpg` and `ozzy-main-outfit-jacket-hair-down.jpg`, and with his balaclava on, `ozzy-main-outfit-jacket-balaclava.jpg` and, without the staff, `ozzy-main-outfit-jacket-balaclava-no-staff.jpg`. The T-shirt's Playboy logo is a white bunny head wearing a bow tie, centred on his chest just below the chain, as on his overhead smash sheet; some sheets draw it violet, and the written rule here wins. His other main-outfit sheets, headshots, medium shot, front view and close-ups all show it with the jacket off.
  - **Main, jacket off (as on his main outfit sheets):** the same outfit without the jacket, so the leopard print shows below the T-shirt's left sleeve. Swap it in by replacing everything after `main outfit:` in his description with this:

    ```
    black Playboy T-shirt with a white bunny-head logo wearing a bow tie, centred on the chest just below the chain, the lower part of the leopard print showing below the left sleeve and the tops of his ornate grey-black cursive "High Power" chest tattoo peeking just above the front of the collar; his retracted golden staff, 30 cm of polished gold with a diamond-encrusted top and a large faceted diamond at each end, tucked into his waistband at his left hip; cuffed blue Polo jogger sweatpants, white socks, blue Nike Cortez sneakers with a white swoosh and white soles
    ```

  - **Main, in action (staff extended in his left hand):** the main outfit with the jacket, for fight and power shots, with his golden staff extended to 150 cm in his left hand instead of retracted at his hip. Swap it in by replacing everything after `main outfit:` in his description with this:

    ```
    light grey bomber jacket #C2C2C2 worn open, with a ribbed knit collar, cuffs and hem, a front zip and royal blue lining #5381D4, its long sleeves covering the leopard print; under it a black Playboy T-shirt with a white bunny-head logo wearing a bow tie, centred on the chest just below the chain, and the tops of his ornate grey-black cursive "High Power" chest tattoo peeking just above the front of the collar; his golden staff extended to 150 cm in his left hand, a telescoping staff of polished gold #CEAF81 with its top third encrusted with clear faceted diamonds, ending in a large faceted diamond tip, and a matching large faceted diamond end cap at the bottom; cuffed blue Polo jogger sweatpants, white socks, blue Nike Cortez sneakers with a white swoosh and white soles
    ```

  - **Shirtless (tattoo reference, as on his main outfit shirtless sheet):** no shirt, so the chest tattoo shows, with his main outfit's joggers, socks and sneakers. Use it for a tattoo reference sheet. Swap it in by replacing everything after `main outfit:` in his description with this:

    ```
    shirtless, showing his "High Power" chest tattoo: large ornate cursive script with tall flourished capital H and P and swashes beneath, in faded grey-black ink, running across his upper chest just below the collarbones, "High" on his right pec (the viewer's left in the front view) and "Power" crossing the sternum toward his left pec; below it, a large outlined Eye of Horus in the same faded grey-black ink, centred on his upper abdomen just below his pecs; cuffed blue Polo jogger sweatpants, white socks, blue Nike Cortez sneakers with a white swoosh and white soles
    ```

  - **With or without the staff:** every outfit gets a turnaround with the staff and one without. For one without it, drop `his retracted golden staff, 30 cm of polished gold with a diamond-encrusted top and a large faceted diamond at each end, tucked into his waistband at his left hip; ` from the outfit text, or `retracted gold staff with a diamond at each end at his left hip; ` from the short backup.
  - **Not approved:** an alternate black technical bomber outfit was discussed in earlier work, but it isn't one of his outfits unless it's approved.
  - More outfits to come. Add each one here as its own bullet.

**Ozzy's character style block** (fills `[CHARACTER DESCRIPTION]`), with his hair tied up and his main outfit. For hair down, replace `gathered into a high top knot` with `falling loose past his shoulders`. For another outfit, replace everything after `main outfit:` with that outfit. Everything that depends on the outfit, such as which tattoos show past a sleeve or collar, sits after `main outfit:`, so the swap stays clean.

```
Ozzy, a 19-year-old Black man: athletic lean build, grounded realistic proportions, long face with high cheekbones and a defined jaw, deep brown skin, warm brown eyes with dark lashes, calm heavy-lidded gaze, thin mustache and short chin beard; deep indigo-violet locs #2F1958 gathered into a high top knot, with faded sides and back; small gold nose ring in each nostril; face tattoo on the right side of his face only: six small hand-lettered characters stacked upright in a vertical column, reading top to bottom "A", "l", "l", "$", "I", "n" (All $ In), in clean, thin, evenly spaced print in muted indigo-violet ink, running from his right temple at eyebrow height down the front edge of his sideburn to earlobe height, just in front of his ear; the left side of his face is bare; small bold hand-drawn black-ink "$" tattoo with a single vertical stroke, on the web between the thumb and index finger of his left hand (the viewer's right in the front view); a small round cybernetic implant set flush into the inside of his left wrist, level with the skin: a black glass disc in a thin steel rim, about the size of the "$", with a glowing sky-blue #70B3F7 angular symbol like an infinity sign and a faint lavender #8D8EDB ring of light; his right hand is bare; leopard-print tattoo of open rosettes and spots in faded black ink covering his left upper arm (the viewer's right in the front view) from the shoulder cap down, stopping above the elbow; small thin gold chain #CEAF81; main outfit: light grey bomber jacket #C2C2C2 worn open, with a ribbed knit collar, cuffs and hem, a front zip and royal blue lining #5381D4, its long sleeves covering the leopard print; under it a black Playboy T-shirt with a white bunny-head logo wearing a bow tie, centred on the chest just below the chain, and the tops of his ornate grey-black cursive "High Power" chest tattoo peeking just above the front of the collar; his retracted golden staff, 30 cm of polished gold with a diamond-encrusted top and a large faceted diamond at each end, tucked into his waistband at his left hip; cuffed blue Polo jogger sweatpants, white socks, blue Nike Cortez sneakers with a white swoosh and white soles
```

**With his balaclava:** replace everything from `long face with high cheekbones` through `the left side of his face is bare;` with the text below. The balaclava hides his hair, face tattoo, nose rings, mustache and beard, so this replaces all of them, and the hair swap doesn't apply. On character sheets, leave out the face tattoo sheet note below too, since the tattoo is hidden; the swap already says which side the New Era flag is on. The outfit swap still works as usual.

```
deep brown skin; his dark navy Supreme balaclava #262737 pulled over his whole head, face and neck, hiding his hair completely: rows of the white #E3E1F0 "Supreme" wordmark in chunky italic knit letters repeat all the way around it in offset rows, with no stripes between them, a small white New Era flag logo sits on its left side just below the eye opening (the viewer's right in a front view), and its neck is bunched in soft folds above his collar; one wide rounded eye opening shows only his warm brown eyes with dark lashes, his calm heavy-lidded gaze and the deep brown skin around them;
```

For character sheets, add this straight after the description so the face tattoo lands on the correct side in every view. Generators mix up "his left" and "his right", so the note uses directions relative to the viewer. Every turned view faces the viewer's right, which keeps his right temple toward the camera, so the tattoo is always on the visible side:

```
; in the front view the face tattoo is on his right temple, the viewer's left; the three-quarter view, the side view and all three expression close-ups face toward the viewer's right, so his right temple and the tattoo face the camera and his bare left temple is turned away
```

Generators often put the face tattoo on whichever temple faces the camera, or drop it, so check every view before accepting a new sheet.

Default sheet expressions: calm heavy-lidded stare, slight confident smirk, cold narrowed glare.

**Short backup of his character style block (175 words).** Use this only if a generator cuts off the full prompt, which shows up as a sheet missing the ink lines or flat cel shading, since the style lines come last. It replaces both the full description and the sheet note above, because the viewing directions are already built in. With the character sheet block it comes to 297 words, about 1,840 characters. For hair down, replace `in a high top knot` with `falling loose past his shoulders`.

It leaves out his face shape, the full "High Power" description, the jacket's collar, cuffs and zip, the staff's size, the socks, the swoosh and soles, and the hex codes for the chain, jacket and lining. It keeps everything that has gone wrong in past sheets: the tattoo letters and side, the viewing directions, his locs colour and the gold nose rings.

```
Ozzy, a lean athletic 19-year-old Black man: deep brown skin, calm heavy-lidded gaze, thin mustache and short chin beard; deep indigo-violet locs #2F1958 in a high top knot, faded sides; gold nose ring in each nostril; face tattoo on his right temple only, letters stacked top to bottom "A", "l", "l", "$", "I", "n" in thin indigo-violet ink, from eyebrow to earlobe, just in front of his ear; small "$" tattoo on the web of his left hand; small flush glowing implant inside his left wrist; leopard-print tattoo on his left upper arm, hidden by his jacket; thin gold chain; light grey bomber jacket worn open, royal blue lining, over a black Playboy T-shirt, with the top of the "High Power" chest script peeking above the collar; retracted gold staff with a diamond at each end at his left hip; cuffed blue Polo joggers, blue Nike Cortez sneakers; front view: face tattoo on the viewer's left, "$" and wrist implant on the viewer's right; three-quarter view, side view and close-ups all face the viewer's right
```

### Dr. Erich Heyes

The main antagonist, known as the doctor: the head of the medical wing in the Crystal Tower. His story is in [STORY.md](STORY.md).

- **Known so far:** half human, half Tall White, from infusing himself with their DNA. A highly decorated medical astronaut, once of the Luftwaffe air assault squadron, and now a political ambassador to a colony he's trying to start (see [STORY.md](STORY.md)). He has a commanding thin stature, though he's not nearly as tall as a full-blooded Tall White.
- **Build:** tall, thin and gaunt, with long limbs and a narrow frame, the same in every outfit and view. Never bulky or muscular.
- **Face and hair, from his reference portrait:** a long, gaunt, deeply lined face with a high forehead, a heavy furrowed brow over deep-set, hooded pale eyes, a long straight nose and thin downturned lips, under thick silver-grey hair swept back from the forehead and falling to the collar. His expression is stern and tired, and he holds himself with command. The portrait isn't stored in this repo, and prompts describe these features instead of naming the person painted.
- **Right hand:** black and cybernetic, from the hand up the forearm, with segmented fingers, joints, panels and mechanical detail. His left hand is natural.
- **Outfit, his Combat Skin:** a modernized astronaut suit in olive grey `#5F6352`, nothing bulky, fitted close to his thin frame. As on his Combat Skin sheets, it has a high stand-up collar with a front zip, thin matte silver trim lines over the shoulders and chest and down the legs, a belt with a square silver buckle, and hexagonal knee plates. His streamlined mechanized boots, in black and charcoal metal with silver trim, reach mid-calf, with a round joint at each ankle and chunky soles. He never wears a space helmet with it, so his face is bare. Its markings come from the user's references:
  - **Left chest:** three award decorations together: a winged insignia, a space mission insignia and a full multicoloured ribbon bar. From top to bottom on his sheets: silver wings with a star above, a silver space badge with a star, an orbit and a laurel, and the ribbon bar.
  - **Centre of the torso:** a large emblem, from a reference the user supplied: a silver globe circled by an orbit ring, over a laurel wreath, with a white three-pointed star in front. It sits on his lower chest, above the belt.
  - **Left upper arm:** a red `#CC4747` circular patch holding a black diamond with a white double lightning-rune insignia. The runes are the historical SS runes, used on purpose: the user confirmed it, so keep them as they are. Generators may refuse or garble them, so they may need painting in by hand.
  - **Right upper arm:** his medical insignia, a black Rod of Asclepius: a single snake coiled around a staff.
  - **Left and right** are his own: in a front view his left side is on the viewer's right, and in a back view it's on the viewer's left.
- **Crown helmet:** a helmet he fashioned to resemble a crown, with a small scrambler inside, so the young Tall Whites can't breach his mind (see [STORY.md](STORY.md)). He wears it with his Combat Skin, and any time he's in the presence of a Tall White. Its look is TBD, so his sheets and his character style block don't show it yet: once it's decided, it goes into his style block.
- **Height:** about 6'5" (196 cm), barefoot, from the ground to the top of his head. He's about 7 heads tall, counting a head from the top of his head to his chin. His boots add about 4 cm, so in them he stands about 200 cm. It's measured on his Combat Skin turnaround and drawn on the [size chart](#size-chart).
- **Colours:** pale ivory skin `#EAD8C4`, a red accent `#CC4747` and an olive grey suit `#5F6352`, all picked by the user. The reference portrait can't give his colours, because its skin is warm, it has a yellow varnish cast, and it has no red in it. The rest come from the palette swatches on his expanded sheet, adopted by the user: silver-grey hair `#9E9199`, matte silver trim `#A99E9F`, black metal `#212128` for his boots and cybernetic hand, and silver `#B2B2B7` for his award decorations and emblem.
- **Sheets:** in `characters/heyes/`, named `heyes-<outfit>.jpg`. Both were approved in earlier work. The user's original award and insignia references, which aren't stored in this repo, are the authority for fine detail.
  - **Combat Skin turnaround:** [`heyes-combat-skin.jpg`](characters/heyes/heyes-combat-skin.jpg), front, three-quarter, side and back views, full body, on flat grey, at 1536×1024. It's canon for his Combat Skin: his build, face and hair, the suit's details, the boots, the cybernetic right hand and where every marking sits. In every view, each marking and the cybernetic hand are on the correct side. Exceptions, where the written rules here win:
    - **Colours:** colour-corrected by hand toward the master style and his hex codes: his warm tan skin was recoloured to pale ivory `#EAD8C4`, and the suit pulled toward `#5F6352`.
    - **Left-arm patch:** a black disc inside the red ring, not a black diamond.
    - **Crown helmet:** not shown. He wears it with his Combat Skin.
  - **Expanded Combat Skin sheet:** [`heyes-combat-skin-expanded.jpg`](characters/heyes/heyes-combat-skin-expanded.jpg), a design sheet and a secondary guide, at 1536×1024. It has:
    - a five-view turnaround, with a back three-quarter view
    - a face close-up and a head turnaround
    - three expressions: neutral, thinking with his cybernetic hand at his chin, and commanding
    - detail panels for the award decorations, both sleeve insignia, the torso emblem, the cybernetic hand (back, palm, angle and clenched) and the boots
    - a colour palette

    In every view, each marking and the cybernetic hand are on the correct side. Exceptions, where the written rules here win:
    - **Style:** a dark navy background with a title, labels and panel borders, and a more rendered look. The title misspells "turnaround" as "TURNARUND".
    - **Skin and hair:** the warm tan skin was recoloured by hand to pale ivory `#EAD8C4`, including the palette's skin swatch, though its label still reads "Warm Ivory". In places the hair reads more lavender than `#9E9199`.
    - **Left-arm patch:** a black disc inside the red ring in the figure views. The detail panel shows the canon black diamond.
    - **Crown helmet:** not shown. He wears it with his Combat Skin.
    - **Rod of Asclepius:** the detail panel puts it on a grey round patch. On the suit it's drawn straight on the sleeve.
    - **Palette:** its suit `#554D3C`, insignia red `#C12A24` and skin `#F1BF91` swatches differ from the user's picks, so use the hex codes listed here. Its other swatches, for trim, boots and cybernetics, emblem and awards, and hair, are adopted as his hex codes.

**Dr. Heyes's character style block** (fills `[CHARACTER DESCRIPTION]`). His face and hair come from the reference portrait, and every colour and suit detail comes from this entry. Attach his Combat Skin turnaround as an image reference wherever the generator allows, because the award decorations, the emblem and the runes are small and easy to garble. His expanded sheet shows three expressions, but he has no default sheet expressions yet, so a new sheet of him uses the turnaround sheet block, which has no expression row.

```
Dr. Erich Heyes, a tall, gaunt older man with a commanding thin stature, long limbs and a narrow frame: a long, gaunt, deeply lined face with a high forehead, a heavy furrowed brow over deep-set, hooded pale eyes, a long straight nose and thin downturned lips, and a stern, tired gaze; pale ivory skin; thick silver-grey hair #9E9199 swept back from the forehead and falling to the collar; bare face, no helmet; his right hand and forearm are cybernetic, in black metal #212128, with segmented fingers, joints and panels, and his left hand is natural; outfit: a sleek modernized astronaut suit in olive grey #5F6352, fitted close to his thin frame, nothing bulky, with a high stand-up collar and front zip, thin matte silver #A99E9F trim lines over the shoulders, chest and legs, a belt with a square silver buckle and hexagonal knee plates; on his left chest, three award decorations together: silver #B2B2B7 wings with a star, a silver space mission badge and a full multicoloured ribbon bar; centred on his lower chest, a large emblem of a silver #B2B2B7 globe circled by an orbit ring over a laurel wreath, with a white three-pointed star in front; a black Rod of Asclepius insignia, a single snake coiled around a staff, on the suit's right bicep; a red #CC4747 circular patch on the suit's left bicep, holding a black diamond with a white double lightning-rune insignia; streamlined mechanized mid-calf boots in black and charcoal metal #212128, with silver trim and a round joint at each ankle
```

For sheets, add this straight after the description, so the insignia, the patch, the award decorations and the cybernetic hand land on the right sides. Like Ozzy's sheet note, it uses directions relative to the viewer, and every turned view faces the viewer's right:

```
; in the front view the black Rod of Asclepius and the cybernetic hand are on his right side, the viewer's left, and the red patch and the award decorations are on his left side, the viewer's right; in the back view the red patch is on the viewer's left and the insignia and the cybernetic hand are on the viewer's right; the three-quarter view and the side view face toward the viewer's right, so his right bicep, the insignia and the cybernetic hand face the camera
```

### Wave

The intergalactic patrol officer (`CHAR_002`), who moonlights as a DJ at Orion, his nightclub in Midtown, and becomes Ozzy's ally down the line. His story is in [STORY.md](STORY.md).

- **Known so far:** he's 22, still the age he was when the convoy left, because the crash kept him in cryogenic sleep until Ozzy released him. His com chip is severed and still down, so he can't speak at all.
- **References:** two photos the user supplied, for his face and skin, and two illustrations of him at the decks, for his build, outfit, headphones, com chip and power. None of them is stored in this repo, and prompts describe his features instead of naming the person photographed.
- **Build:** tall and athletic, with broad shoulders, as in the illustrations.
- **Face and hair, from the photos:**
  - **Face:** warm brown skin, dark brown eyes, a high forehead and a wide, warm smile.
  - **Beard:** full and short, with a mustache, near-black `#261C17`.
  - **Locs:** long and reddish brown `#4F211A`, falling past his chest, with copper cuffs `#C56C21` on some of them and tips in his dark goldenrod accent `#8B6508`. The reddish brown and the cuffs follow the user's sheets, as the user chose, in place of the photos' dark brown `#261F18`. The dark goldenrod tips are the user's later change, so only his fighting-stance shot shows them: on his other sheets, the written rule wins.
- **Com chip, on his left side only:** his severed com chip, shown as thin glowing cyan `#2EB9DB` circuit lines running from his left temple, up at the hairline, down across his left cheek and jaw into a small mechanical plate at his left jaw and ear. The temple lines follow the user's sheets, as the user chose. His left side is the viewer's right in a front view. The right side of his face is bare.
- **Fighting:** he's highly proficient in martial arts, including Bagua Zhang (Eight Trigram Palm), as the user made canon.
- **Powers:** sonic. In their muted state, which he can use as DJ tech, they show as holographic equalizer bars rising from his open palms, glowing cyan `#28DFF5`, blue `#108AE9` and pink-violet `#BC29E4`. The bars are a glowing source, so they get bloom. He can also hover in the air on rings of sound that pulse down from the speakers in his soles, glowing gold `#F2AA3E`, as the user made canon with his hovering shot. The rings are a glowing source too, so they get bloom. What else his sonic powers do at full strength is TBD.
- **Outfits:** his DJ skin (`SKIN_008`) and his combat skin (`SKIN_009`), confirmed by the user, and three extra outfits. In each, his large over-ear DJ headphones are built into the raised collar at the base of his neck, where they dock, never a separate headset, as the user chose. They close into his combat mask.
  - **DJ skin, as on his DJ turnaround:**
    - **Top:** a fitted near-black `#000002` long-sleeved top with a high collar, trimmed in his dark goldenrod accent `#8B6508`, with a dark goldenrod front zip, dark goldenrod cuffs and thin dark goldenrod seam lines over the shoulders. Thin glowing neon lines in cyan `#1BD1F2` and violet `#7009E9` run down the arms and torso.
    - **Trousers:** matching fitted near-black trousers, with cyan and violet neon lines down the legs.
    - **Shoes:** high-top sneakers in black `#15111B`, white `#D2C5CB` and purple `#461A6A`, with dark goldenrod trim on the soles.
    - **Hands:** bare.
  - **Combat skin, from the illustrations and his combat turnaround, with his accent added by the user:** a fitted near-black tech suit `#000002` with thin glowing neon lines in cyan `#1BD1F2` and violet `#7009E9`, and a few dark goldenrod `#8B6508` trim lines. At the centre of his chest sits a large dark goldenrod speaker cone with a honeycomb grille, in a dark armoured housing. These parts of the suit are dark goldenrod too, as the user confirmed, even where a sheet draws them black:
    - its armoured shoulder plates
    - its wrist gauntlets, with cables running from them and a round speaker dial on each
    - its belt
    - the pouches on his thighs

    Fully enclosed mechanized armoured gloves cover both hands, in the suit's near-black with dark goldenrod `#8B6508` mechanical accents and cyan and violet lines, with no bare fingers, as the user chose, so his palm holograms rise from gloved palms. His footwear is chunky armoured high-tops in black, with violet and cyan accents, reinforced segmented panels and articulated soles, and dark goldenrod speaker discs recessed along the undersides, projecting sound downward for flight. In combat his headphones close into his combat mask, and the waveform icons on its earcups glow dark goldenrod instead of cyan. The illustrations show his hands bare and none of the dark goldenrod.
  - **Extra outfits:** three more, added by the user alongside his DJ skin and combat skin.
    - **Track-jacket DJ look:** a black `#18141B` zip-up track jacket with a dark goldenrod front zip, dark goldenrod-zipped chest pockets, and violet `#771E9F` stripes over the shoulders and down the sleeves. Black cargo trousers with violet side stripes and violet-flapped cargo pockets on the thighs. High-top sneakers in black, dark goldenrod and violet, with white `#C9BAC4` soles. His headphones dock in its raised collar.
    - **Cargo combat look:** the armoured upper half of his combat skin, with the chest speaker, dark goldenrod wrist cuffs, black armoured gloves, and his combat mask closed. Below it, black cargo trousers with violet and cyan stripes, cargo pockets on the thighs, and black armoured knee plates with dark goldenrod trim. Armoured high-tops in black, dark goldenrod and violet, with a dark goldenrod waveform icon on each tongue, glowing cyan sole edges, and three dark goldenrod speakers set into each sole.
    - **Armoured combat look, headphones down:** the same fitted near-black tech suit with thin glowing cyan and violet neon lines, closed by a dark goldenrod front zip up to a high collar, with no chest speaker. Dark goldenrod armoured shoulder plates, dark goldenrod wrist gauntlets with a looped black cable running from each, dark goldenrod gloves, a dark goldenrod belt with pouches, and a dark goldenrod pouch strapped to each thigh. Black combat boots with dark goldenrod straps, toe caps and thick soles. His headphones dock in its high collar.
- **Combat mode:** his DJ headphones transform into a combat mask that closes over his head and face.
- **Objects:** each one gets an entry here and an object sheet in `characters/wave/objects/`.
  - **Headphones and combat mask (`PROP_002`):** large over-ear DJ headphones built into the raised collar at the base of his neck, where they dock, never a separate accessory, as the user chose. They transform into his combat mask, a full-face helmet.
    - **Headphones:** dark goldenrod `#8B6508` all over, from the headband and the hinged arms to the earcups, as on the mechanism sheet, which the user chose. Black ear cushions, and a black face `#191517` on each earcup showing a waveform icon. On his DJ skin, and on his combat skin and armoured combat look with the headphones down, the icons glow cyan `#51E6E6`, as the user confirmed. With his track jacket, on his headshot and expression sheets, and in combat with the mask closed, they're dark goldenrod. Each earcup sits on a hinged arm at his suit's collar.
    - **Size:** about 22 cm across the earcups, as marked on the mechanism sheet. Closed into his helmet, it's about 22 cm wide, 27 cm high and 29 cm deep.
    - **The change:** the earcups rise on their arms to his ears, and face guards slide forward from them along his jaw. A crest piece closes over the top of his head, a jaw ring closes under his chin, and a continuous visor glowing cyan `#2EB9DB` closes over his face, covering his eyes, nose, mouth and chin, as the user chose. The mask is dark goldenrod armour plates over black, with thin cyan slits glowing beside the visor and on the back. His locs fall free behind and below the mask. It's built from five parts: the two earcups with their face guards, the crest piece, the jaw ring and the visor. The mask covers his com chip.
    - **Mechanism sheet:** [`wave-headphones-mask-mechanism.jpg`](characters/wave/objects/wave-headphones-mask-mechanism.jpg), made by the user, at 1672×941. It replaced the user's earlier version, which had gunmetal earcups and a dark mask with dark goldenrod trim, as the user chose. It has:
      - the change in three front views: the headphones around his neck, the earcups rising as the face guards and an outline of the visor form, and the mask closed
      - close-ups of an earcup on its hinged arm, a face guard sliding forward and the jaw ring
      - the headphones on their own in four views, with their 22 cm width marked
      - the closed mask on its own from the front, three-quarter, back and top
      - an earcup rising and folding into its face guard in three steps
      - an earcup from the front, the back with its cushion, and the side
      - the jaw ring on its own

      It's canon for the headphones, the mask and how one becomes the other, and for both being dark goldenrod all over. It isn't canon for his look, which comes from his turnarounds. Exceptions, where the written rules here win:
      - **Earrings:** a gold hoop in each ear. He doesn't wear earrings.
      - **Face:** a thin mustache and goatee, not his full, short beard; amber eyes, not dark brown; and a small mark under his right eye.
      - **Locs:** gold cuffs, not copper `#C56C21`, and no dark goldenrod tips.
      - **Shoulders:** violet armour, where his combat skin's shoulder plates are dark goldenrod.
      - **Icons:** dark goldenrod with the headphones down on his combat skin, where they glow cyan `#51E6E6` until the mask closes.
      - **Headphones:** where they read as a separate headset around his neck, they're built into his collar, as the user chose.
      - **Colours:** the gold reads much brighter and more orange `#D67C02` than his dark goldenrod `#8B6508`, the skin `#B46A42` against `#9C6C4E`, and the background is grey `#767173`, not mid grey `#808080`.
      - **Diagram arrows** run between the stages, and a measurement line marks the headphones' width.
      - **16:9 version:** [`wave-headphones-mask-mechanism-16x9.jpg`](characters/wave/objects/wave-headphones-mask-mechanism-16x9.jpg), scaled to 1080 pixels high and padded at the sides on the sheet's own grey to 1920×1080.
- **Height:** 6'4" (193 cm) barefoot, from the ground to the top of his head. On his DJ turnaround he's about 7 heads tall, counting a head from the top of his head to his chin, under his beard. He's drawn on the [size chart](#size-chart) in his DJ skin, whose high-tops add about 5.7 cm, so in them he stands about 198.7 cm.
- **Colours:**
  - **Skin:** `#9C6C4E`, the average of the forehead and cheeks in both photos. The photos carry no colour profile, so they were read as sRGB.
  - **Hair:** locs `#4F211A` with copper cuffs `#C56C21`, sampled from his DJ turnaround, and beard `#261C17`, from the photos.
  - **Accent:** dark goldenrod `#8B6508`, picked by the user.
  - **Outfit, com chip and power:** sampled from the grey-background illustration.
- **Accent note:** dark goldenrod `#8B6508`, chosen by the user, tips his locs, colours his headphones and combat mask all over, and shows on both outfits. On his DJ skin it's the collar trim, front zip, cuffs, shoulder seams and sneaker soles. On his combat skin it's the chest speaker, shoulder plates, wrist gauntlets and their speaker dials, the mechanical accents on his gloves, belt, thigh pouches, the speaker discs on his soles, and a few trim lines.
- **Close colours:** his skin is within a few shades of Ozzy's `#9B7461`, and his suit's violet `#7009E9` is almost exactly Ozzy's electric indigo `#6F00FF`, which is also Orion's violet light.
- **Sheets:** in `characters/wave/`, named `wave-<outfit>.jpg`.
  - **DJ skin turnaround:** [`wave-dj-skin.jpg`](characters/wave/wave-dj-skin.jpg), made by the user, at 1536×1024. It has front, three-quarter, side and back views, full body, with close-ups of his face, the collar and an earcup, a hand and a sneaker, on grey. It's canon for his DJ skin, his face and build, the com chip on his left side, and the headphones at his neck. Its three-quarter and side views face the viewer's left, as his sheet note asks. Exceptions, where the written rules here win:
    - **Colours:** skin `#A15A35` against `#9C6C4E`, gold `#BE7819` against `#8B6508`, a more magenta violet `#BE20EF` against `#7009E9`, a violet-black suit `#181220`, and a grey background `#777272`, not mid grey `#808080`.
    - **16:9 version:** [`wave-dj-skin-16x9.jpg`](characters/wave/wave-dj-skin-16x9.jpg), padded at the sides on the sheet's own grey to 1920×1080.
  - **Combat skin turnaround:** [`wave-combat-skin.jpg`](characters/wave/wave-combat-skin.jpg), made by the user, the second of two versions, chosen by the user, at 1536×1024. It shows front, three-quarter, side and back views, full body, with his combat mask closed. Close-ups show the mask, the chest speaker, a gloved hand and a boot. It's canon for:
    - his combat skin
    - the closed mask, with its cyan visor and dark goldenrod earcup icons
    - the chest speaker
    - the wrist speaker dials
    - his near-black armoured gloves
    - his combat footwear
    - his locs falling free from the back of the mask

    Its three-quarter and side views face the viewer's left. Exceptions, where the written rules here win:
    - **Shoulder plates:** black armour with dark goldenrod trim, where they're dark goldenrod.
    - **Gauntlets:** no cables show.
    - **Colours:** the gold reads brighter `#B57818` than his dark goldenrod `#8B6508`, the locs browner `#5F2F12` than `#4F211A`, the violet `#A328EB` against `#7009E9`, and the background is grey `#70706F`, not mid grey `#808080`.
    - **16:9 version:** [`wave-combat-skin-16x9.jpg`](characters/wave/wave-combat-skin-16x9.jpg), padded at the sides on the sheet's own grey to 1920×1080.
  - **Track-jacket DJ turnaround:** [`wave-dj-track-jacket.jpg`](characters/wave/wave-dj-track-jacket.jpg), made by the user, at 1536×1024. It shows front, three-quarter, side and back views, full body, with his hands in his pockets, and three face close-ups: neutral, scowling and smirking. It's canon for his track-jacket DJ look. The com chip is on his left in every view, and the turned views face the viewer's left. Exceptions, where the written rules here win: the gold reads brighter `#C57706` than his dark goldenrod `#8B6508`, and the background is grey `#737272`, not mid grey `#808080`.
  - **Cargo combat turnaround:** [`wave-combat-cargo.jpg`](characters/wave/wave-combat-cargo.jpg), made by the user, at 1536×1024. It shows front, three-quarter, side and back views, full body, with his combat mask closed. Close-ups show the mask from three angles, the chest speaker, and a sneaker from the side and back, plus the soles with their speakers. It's canon for his cargo combat look. Exceptions, where the written rules here win: the gold reads brighter `#D3810E` than `#8B6508`, the violet `#8423CB` against `#7009E9`, and the background is grey `#757273`.
  - **Combat skin turnaround, version 1:** [`wave-combat-skin-version-1.jpg`](characters/wave/wave-combat-skin-version-1.jpg), made by the user, the first of the two versions of his combat skin turnaround, saved as an extra by the user, at 1536×1024. Version 2, `wave-combat-skin.jpg`, stays his combat skin sheet. It has the same views and close-ups: front, three-quarter, side and back, full body, with his combat mask closed, and close-ups of the mask, the chest speaker, a gloved hand and a boot. Where it differs from version 2, it has dark goldenrod plates on top of the shoulder armour, plain dark goldenrod wrist cuffs, dark goldenrod trim on the knee armour, and armour with a bluer violet sheen. Its three-quarter and side views face the viewer's left. Exceptions, where the written rules here win:
    - **Shoulder plates:** black armour with dark goldenrod plates on top, where they're dark goldenrod all over.
    - **Gauntlets:** plain cuffs, with no cables and no speaker dials.
    - **Colours:** the gold reads brighter `#B57715` than his dark goldenrod `#8B6508`, the locs browner `#562B14` than `#4F211A`, the violet `#8515D8` against `#7009E9`, and the background is a slightly lighter grey `#848385`, not mid grey `#808080`.
    - **16:9 version:** [`wave-combat-skin-version-1-16x9.jpg`](characters/wave/wave-combat-skin-version-1-16x9.jpg), padded at the sides on the sheet's own grey to 1920×1080.
  - **Armoured combat turnaround:** [`wave-combat-armour.jpg`](characters/wave/wave-combat-armour.jpg), made by the user, saved as an extra by the user, at 1536×1024. It shows front, three-quarter, side and back views, full body, on one ground line, with his headphones around his neck and his face bare. It's canon for his armoured combat look with his headphones down: the dark goldenrod shoulder plates, gauntlets with their looped cables, gloves, belt and thigh pouches, and the combat boots. The com chip's plate is on his left in every view, and the turned views face the viewer's left. Exceptions, where the written rules here win:
    - **Locs:** dark brown `#361E16` with auburn ends `#5F2C18`, not reddish brown `#4F211A` with copper cuffs `#C56C21`, and no dark goldenrod tips.
    - **Com chip:** its cyan circuit lines run across his left cheek only. They run from his left temple.
    - **Headphones:** silver and gunmetal earcups, each with a glowing cyan ring, and no waveform icons.
    - **Colours:** skin `#955B36` against `#9C6C4E`, the gold `#885517`, a little more orange than his dark goldenrod `#8B6508`, a duller violet `#762096` against `#7009E9`, and a grey background `#787475`, not mid grey `#808080`, with a faint pale patch between the back view's torso and left arm.
    - **16:9 version:** [`wave-combat-armour-16x9.jpg`](characters/wave/wave-combat-armour-16x9.jpg), padded at the sides on the sheet's own grey to 1920×1080.
  - **Headshots:** [`wave-headshots.jpg`](characters/wave/wave-headshots.jpg), made by the user, at 2172×724. It shows his head and shoulders in his track jacket, front, three-quarter, side and back, with the com chip on his left and the turned views facing the viewer's left. It's canon for his face, locs and com chip from close up.
  - **Masked headshots:** [`wave-headshots-mask.jpg`](characters/wave/wave-headshots-mask.jpg), made by the user, at 2172×724. It shows his head and shoulders with his combat mask closed, front, three-quarter, side and back, his locs falling free. It's canon for the closed mask from every side.
  - **Expressions:** [`wave-expressions.jpg`](characters/wave/wave-expressions.jpg), made by the user, at 2172×724. It shows three close-ups in his track jacket: a calm neutral look, a scowl and a slight smirk. These are his default sheet expressions.
  - **Mask views:** [`wave-expressions-mask.jpg`](characters/wave/wave-expressions-mask.jpg), made by the user, at 2172×724. It shows three close-ups with the mask closed: a three-quarter view, a front view with a cyan targeting reticle across the visor, and a front view with the visor glowing in a sharp V. It's canon for those visor states.
  - **On all four head sheets:** the background is grey, not mid grey `#808080`, and the gold reads brighter than `#8B6508`.
  - **Headphones and mask on every sheet above:** the earcups are gunmetal, silver and gunmetal on the armoured combat sheet, and the closed mask is dark armour with dark goldenrod trim. Since the user replaced the mechanism sheet, both are dark goldenrod all over. Where the headphones hang around his neck as a separate headset, they're built into his collar, as the user chose, and the closed mask's visor is a continuous cyan `#2EB9DB` from his eyes to his chin.
  - **Fighting stance, combat skin, mask closed:** [`wave-action-stance-combat-skin-mask.jpg`](characters/wave/wave-action-stance-combat-skin-mask.jpg), made by the user, at 1448×1086. It's a single action shot from the waist up, on grey: Wave in a martial-arts stance in his combat skin with his combat mask closed, turned a little toward the viewer's left, his right hand open toward the viewer and his left raised in guard. It's canon for his fighting stance, the dark goldenrod mask on him with its cyan visor and dark goldenrod earcup icons, the chest speaker, and his locs with their dark goldenrod tips falling free from the mask. Exceptions, where the written rules here win:
    - **Shoulders and arms:** violet and black armour. His shoulder plates are dark goldenrod.
    - **Wrists:** no cables or speaker dials show.
    - **Locs:** dark brown `#371E11`, not reddish brown `#4F211A`, with gold cuffs, not copper `#C56C21`.
    - **Colours:** the gold reads much brighter and more orange `#E58204` than his dark goldenrod `#8B6508`, and the loc tips `#B66403` too; the violet is duller `#6D25A0` against `#7009E9`; and the background is grey `#797574`, not mid grey `#808080`.
    - **16:9 version:** [`wave-action-stance-combat-skin-mask-16x9.jpg`](characters/wave/wave-action-stance-combat-skin-mask-16x9.jpg), padded at the sides on the shot's own grey to 1920×1080.
  - **Action shots, cargo combat look, mask closed:** four full-body shots, made by the user, each about 1671×941, on grey, made canon by the user. In each he wears his cargo combat look: the armoured top with the chest speaker glowing gold and dark goldenrod shoulder plates and wrist cuffs, baggy black trousers with cyan and violet stripes and dark goldenrod knee armour, and high-tops with dark goldenrod speakers in the soles. His locs, with their dark goldenrod tips, stream out behind the mask.
    - **Hovering:** [`wave-action-hover-cargo-combat-mask.jpg`](characters/wave/wave-action-hover-cargo-combat-mask.jpg), floating in the air facing the viewer, arms spread and knees bent, with rings of sound glowing gold pulsing down from the speakers in his soles. It's canon for his hovering power.
    - **Low stance:** [`wave-action-low-stance-cargo-combat-mask.jpg`](characters/wave/wave-action-low-stance-cargo-combat-mask.jpg), crouched low and wide, one hand raised upright before his chest and the other held low, palm up.
    - **Palm strike:** [`wave-action-palm-strike-cargo-combat-mask.jpg`](characters/wave/wave-action-palm-strike-cargo-combat-mask.jpg), lunging toward the viewer's right, one arm thrust out with the palm open and the other hand upright before his chest.
    - **Guard stance:** [`wave-action-guard-stance-cargo-combat-mask.jpg`](characters/wave/wave-action-guard-stance-cargo-combat-mask.jpg), in a wide stance turned toward the viewer's left, one palm pushed out and the other hand upright before his chest.

    They're canon for his martial-arts stances, his hovering power and his cargo combat look in motion. Exceptions, where the written rules here win:
    - **Mask:** black with dark goldenrod trim. It's dark goldenrod all over.
    - **Gloves:** black, with dark goldenrod fingertips and cuffs.
    - **Ankles:** in the three stances, a strip of bare skin shows between the trouser cuff and the shoe.
    - **Locs:** dark brown `#291504`, not reddish brown `#4F211A`.
    - **Colours:** the gold reads brighter and more orange, from `#BA7A05` to `#DE9206`, than his dark goldenrod `#8B6508`; the violet from `#7F22F5` to `#933CE2` against `#7009E9`; and the backgrounds are greys from `#7A7677` to `#807C7C`, not mid grey `#808080`.
    - **16:9 versions:** each has one beside it, scaled to 1080 pixels high and padded at the sides on its own grey to 1920×1080.
  - **Approved references noted on GitLab's `main` branch, not stored in this repo:** full-body pose references made canon by the user on 2026-11-07 in other work: a Bagua Zhang palm-strike stance, a spinning back-palm strike, a low circular palm sweep, and a sonic-assisted flight pose with corrected combat boots, flying on the gold-lit speakers recessed under both combat sneakers. Some may be the same images as the action shots above. The written rules here stay authoritative.
  - **16:9 versions:** each has a 1920×1080 version beside it, named `<name>-16x9.jpg`. The turnarounds are padded at the sides, and the headshot and expression strips above and below, each on its own grey.

**Wave's character style block** (fills `[CHARACTER DESCRIPTION]`). His skin and accent fill the style block's hex slots as usual. His default sheet expressions, from his expression sheet, are a calm neutral look, a scowl and a slight smirk. His power isn't in the block: a shot that shows it adds it to the subject.

```
Wave, a 22-year-old Black man: tall, athletic build with broad shoulders; warm brown skin; dark brown eyes and a high forehead; full, short near-black beard and mustache #261C17; long reddish-brown locs #4F211A falling past his chest, with copper cuffs #C56C21 on some of them and dark goldenrod #8B6508 tips; his severed com chip on the left side of his face only: thin glowing cyan #2EB9DB circuit lines running from his left temple down across his left cheek and jaw into a small mechanical plate at his left jaw and ear; the right side of his face is bare; outfit: a fitted near-black tech suit #000002 with thin glowing neon lines in cyan #1BD1F2 and violet #7009E9 and a few dark goldenrod #8B6508 trim lines; in dark goldenrod #8B6508, its armoured shoulder plates, its wrist gauntlets with cables running from them and a round speaker dial on each, its belt and the pouches on his thighs; fully enclosed armoured gloves in the suit's near-black with dark goldenrod mechanical accents and cyan and violet lines; a large dark goldenrod speaker cone with a honeycomb grille in a dark armoured housing at the centre of his chest; chunky armoured black high-tops with violet and cyan accents and dark goldenrod speaker discs along the soles; large over-ear DJ headphones built into the raised collar at the base of his neck, dark goldenrod #8B6508 all over, with black ear cushions and a glowing cyan #51E6E6 waveform icon on the black face of each earcup
```

That's his combat skin with his headphones down. With his combat mask closed, replace everything from `dark brown eyes and a high forehead` through `the right side of his face is bare;` with the text below, and drop `large over-ear DJ headphones built into the raised collar at the base of his neck, dark goldenrod #8B6508 all over, with black ear cushions and a glowing cyan #51E6E6 waveform icon on the black face of each earcup` from the outfit. The mask hides his face, beard and com chip, so on sheets the sheet note below is left out too:

```
his combat mask closed over his head and face: dark goldenrod #8B6508 armour plates over black, a crest over the top of his head, a jaw ring under his chin, a continuous glowing cyan #2EB9DB visor covering his eyes, nose, mouth and chin, and the dark goldenrod earcups at his ears, each with a dark goldenrod waveform icon on a black face; his long reddish-brown locs #4F211A, with copper cuffs #C56C21 and dark goldenrod #8B6508 tips, fall free from the back of the mask;
```

For his DJ skin, replace everything after `outfit:` with this:

```
a fitted near-black #000002 long-sleeved top with a high collar trimmed in dark goldenrod #8B6508, a dark goldenrod front zip, dark goldenrod cuffs and thin dark goldenrod seam lines over the shoulders, with thin glowing neon lines in cyan #1BD1F2 and violet #7009E9 down the arms and torso; matching fitted near-black trousers with cyan and violet neon lines down the legs; bare hands; high-top sneakers in black #15111B, white #D2C5CB and purple #461A6A with dark goldenrod trim on the soles; large over-ear DJ headphones built into the raised collar at the base of his neck, dark goldenrod #8B6508 all over, with black ear cushions and a glowing cyan #51E6E6 waveform icon on the black face of each earcup
```

For his track-jacket DJ look, replace everything after `outfit:` with this:

```
a black #18141B zip-up track jacket with a dark goldenrod #8B6508 front zip, dark goldenrod-zipped chest pockets and violet #771E9F stripes over the shoulders and down the sleeves; black cargo trousers with violet side stripes and violet-flapped cargo pockets on the thighs; high-top sneakers in black, dark goldenrod and violet with white #C9BAC4 soles; large over-ear DJ headphones built into the raised collar at the base of his neck, dark goldenrod #8B6508 all over, with black ear cushions and a dark goldenrod waveform icon on the black face of each earcup
```

For his cargo combat look, use the combat mask swap above, and replace everything after `outfit:` with this:

```
near-black #000002 armour over his upper body with thin glowing neon lines in cyan #1BD1F2 and violet #7009E9 and dark goldenrod #8B6508 trim; a large dark goldenrod speaker cone with a honeycomb grille in a dark armoured housing at the centre of his chest; dark goldenrod wrist cuffs and black armoured gloves; black cargo trousers with violet and cyan stripes, cargo pockets on the thighs and black armoured knee plates with dark goldenrod trim; armoured high-tops in black, dark goldenrod and violet, with a dark goldenrod waveform icon on each tongue, glowing cyan sole edges and three dark goldenrod speakers set into each sole
```

For his armoured combat look with his headphones down, replace everything after `outfit:` with this:

```
a fitted near-black tech suit #000002 with thin glowing neon lines in cyan #1BD1F2 and violet #7009E9, closed by a dark goldenrod #8B6508 front zip up to a high collar; in dark goldenrod #8B6508, armoured shoulder plates, wrist gauntlets with a looped black cable running from each, gloved hands, a belt with pouches, and a pouch strapped to each thigh; black combat boots with dark goldenrod straps, toe caps and thick soles; large over-ear DJ headphones built into the raised collar at the base of his neck, dark goldenrod #8B6508 all over, with black ear cushions and a glowing cyan #51E6E6 waveform icon on the black face of each earcup
```

For sheets, add this straight after the description, so the com chip lands on the right side. Like Ozzy's and the doctor's sheet notes, it uses directions relative to the viewer. His one-sided feature is on his left, so his turned views face the viewer's left, the opposite of theirs:

```
; in the front view the com chip's circuit lines and plate are on his left temple, cheek and jaw, the viewer's right, and the right side of his face is bare; the three-quarter view and the side view face toward the viewer's left, so his left cheek and the com chip face the camera
```

**Short backup of his character style block.** Adapted from `main`, with his locs and com chip as the user chose. Use it only when the user asks, or a generator cuts off the full prompt; it still goes with the full style block.

```
Wave, a tall, athletic 22-year-old Black man with broad shoulders: warm brown skin, dark brown eyes, full short near-black beard; long reddish-brown locs with copper cuffs and dark goldenrod tips; thin glowing cyan circuit lines from his left temple down his left cheek and jaw only, the right side of his face bare
```

## Restyled images

On 2026-11-06 every saved character sheet, object sheet and location sheet was brought back toward the master style by hand, without regenerating anything, so every hand fix on them stays. The LoRA training set (not used) was left as it was. The golden staff's design reference became canon afterwards and was restyled the same way, with its panel backgrounds brought to `#808080`.

- **Character and object sheets:** one colour correction per sheet, fitted to its background, ink, skin and, where they show, his locs or balaclava navy, his jacket, the gold and his blues, so the cast is removed and they land on their hex codes. The background region is now exactly flat mid grey `#808080`, the darkest lines are ink `#030308`, and sheets that had almost no grain got fine film grain.
- **Dr. Heyes:** his warm tan skin recoloured to pale ivory `#EAD8C4` on both sheets, with the suit, hair, background and ink corrected on his turnaround. His expanded sheet keeps its dark design-sheet panels.
- **Night locations:** rain added as thin straight white streaks, thin line work tinted toward dark teal `#031E1C`, large black areas toward navy `#09102E`, and pale areas pulled into night's mid-to-dark range, with neon and lamps kept bright.
- **What a hand fix can't change:** line weight, hatching and how rendered a sheet looks. Those differences stay listed in each sheet's entry, and only a new generation with the full style block fixes them.

## Size chart

[`characters/size-chart.jpg`](characters/size-chart.jpg) keeps every character's height and proportions consistent when they're placed into film. It shows each main character in front and side views on one ground line, against a feet-and-inches ruler, a centimetre ruler, and head-unit lines and bars for each character. It holds Ozzy, Dr. Heyes and Wave, and each one's height lines are in their accent colour.

![Toonville size chart: Ozzy at 6'2" (188 cm) barefoot, drawn in his sneakers in front and side views with his locs down and in a top knot; Dr. Heyes at 6'5" (196 cm) barefoot, drawn in his boots in front and side views; and Wave at 6'4" (193 cm) barefoot, drawn in his DJ skin's high-tops in front and side views; on one ground line, with feet, centimetre and head-unit rulers](characters/size-chart.jpg)

- **How heights are measured:** from the ground to the top of the head, barefoot, with the hair down. Characters are drawn on the chart in their usual shoes, standing on the ground line, so the sole each pair adds is noted on the chart: about 2.5 cm for Ozzy's sneakers, about 4 cm for the doctor's boots, and about 5.7 cm for Wave's DJ high-tops, each measured at the heel on their turnaround. Anything that sits above the head, like Ozzy's top knot, gets its own dashed line.
- **How the chart is made:** from each character's canon turnaround sheets, not generated, so the art and proportions stay exact. Each sheet is scaled so the character's height in their shoes, their barefoot height plus their soles, matches the rulers, at 9 px per cm. A sheet with a different hairstyle is scaled to the same eye height. The doctor's and Wave's turnarounds are smaller than Ozzy's sheets, so their figures are scaled up about 1.8 times and read a little softer. Wave's sheet has a soft drop shadow under his sneakers, which was painted out before his views were cut.
- **Adding a character:** once they have a height in the character table and a finished turnaround sheet, add their front and side views at their height, on the same scale and ground line, next to the others.
- **Using it in film:** in every shot, characters' heights relative to each other match the chart. When characters are composited into a scene, scale each one by their chart height, not by how big they were drawn on their own sheet. The camera angle and shoes can change how tall someone looks on screen, never their height.

## LoRA training

**Not used for now.** Toonville is going ahead without LoRAs, so prompts carry no trigger word. Each character stays consistent through their character style block and the job's style block, with their saved sheets attached as image references where the generator allows it. The notes below, and Ozzy's training set, are kept in case LoRAs come back.

Each main character gets their own LoRA, trained on their canon art, so every generation keeps their face, hair and tattoos. The LoRA holds who the character is, and the style block still holds the Toonville look, so prompts carry both.

- **Training sets:** in `characters/<name>/lora/`. Every canon view sits on its own 1024×1024 mid grey square, with a caption file of the same name, and `captions.csv` lists them all. Ozzy's set has 30 images, cut from his saved sheets, his medium shot and his three expression close-ups, with the trigger word `ozzytoon`.
- **Never mirror:** turn off flip, mirror or horizontal-flip augmentation in the trainer. Ozzy's face tattoo, "$" hand and leopard arm are one-sided, and mirrored copies would teach them on both sides.
- **Captions name only what changes:** view and facing direction, framing, hair, outfit, expression and background. What never changes stays out of the captions so it binds to the trigger word: for Ozzy, his face, locs colour, tattoos, nose rings and chain. Known sheet differences are captioned, such as `tight bun` or `low neckline, chest tattoo text visible`, so they don't become part of him.
- **Colours:** sources with a violet cast are colour-matched to his hair-down sheets before training.
- **One base model:** train and generate on the same base model. A LoRA trained on one base generally won't work on another.
- **In a prompt:** select the LoRA at about 0.7–0.9 weight and start the subject with the trigger word. The character style block and the job's style block follow as usual.
- **Before trusting it:** generate a test set (front, three-quarter, side and back, hair up and hair down) and check it against canon. For Ozzy that's the face tattoo on his right temple, a nose ring in each nostril, his locs colour, the "$" on the web of his left hand and the leopard print on his left arm. Small lettering like "All $ In" and "High Power" rarely comes out clean, so plan to touch it up.

## Locations

Every location the story uses gets an entry here before any shot is made there, following step 4 of [WORKFLOW.md](WORKFLOW.md). Each entry holds:

- its name and what happens there
- day, night or both
- its main light source and that light's colour, which becomes the rim light of every character there
- where characters stand: the calm open area
- its reactive surfaces, such as signs, glass, puddles, banners and leaves
- its location sheets in `locations/<location>/`, with any known differences listed

Toonville's world is Lepus, a frozen island city deep in the ice, built against Crystal Mountain, with a lush wild land on the mountain's far side. The story behind each place is in [STORY.md](STORY.md). The entries below hold everything known so far. Anything marked TBD is decided before that place's sheets are made, and only the Crystal Tower, Amethyst Path, the Diamond District, the Midtown alley, Orion, the Chase Tower and the D. Bell marketplace have sheets so far.

### Lepus, the frozen island city

These are the things every part of the city shares.

- **What it is:** Lepus, a city deep in the ice, resting against a large mountain, Crystal Mountain. The island is a frozen desert. The mood is cold, lifted by vibrant neon and the sun's rare glow: the sun appears only once every six months. It grew up in the 19 years since the ship crashed, established quickly with the Tall Whites' technology and the remaining survivors of the royal fleet's main ship.
- **Layout:** three parts. The Diamond District, the wealthy part with its towers, is at the foot of the mountain, where the Crystal Tower is lodged. Sunnymead, the rejected part, is far from it, and Midtown, for the common folk, the working class, separates the two. As far as the public knows, the city begins at the Crystal Tower and runs onward from it: they don't know about Amethyst Path or the Forbidden Foliage behind it.
- **Scale:** a metropolis, with extensive urban sprawl, many neighbourhoods and long-distance travel between districts.
- **The mountain:** the Crystal Tower blocks its passages, and there's no way around it. There are only two ways through the mountain, and the public never reaches either: the Tall Whites' secret underground tunnel beside the tower, a hidden route between the city and the far side, which can be opened by thought, or by an incredibly fast hover bike with a Tall White's help; and the tower's secret entrance, the ship's true doors and real entrance, caved into the mountain, where no one goes, because of the Tall Whites. The hover bike's look is TBD.
- **Streets:** paved in ice. At night they catch shine from the lights. When the sun is out, it bounces off them, and at certain times the whole city takes on a golden glow.
- **Weather at night:** rain, as the Night line has it, falling in thin white streaks over the ice streets, which mirror the neon. A scene the story sets just after the rain uses the [Night line after the rain](#night-line-after-the-rain) instead, with the streets still wet.
- **Technology:** advanced. Cybernetic limbs and cybernetic eyes are a common sight. Vehicles are angular, and aircraft look like what we'd call UFOs.
- **Day or night:** both.
- **Main light:** neon at night, in colours that differ from area to area. By day, the sun when it's out, once every six months. On days without the sun, the natural ice and the daylight light the city whenever the neon is off.
- **Reactive surfaces:** the ice streets and the towers' reflective neon.
- **Style note:** the Day line asks for a high sun, which fits the days the sun is out. The golden glow, and days without the sun, aren't covered by the style yet.

### The Diamond District

- **What happens there:** the rich, safe part of the city, away from the mayhem and common crime. It's at the foot of the mountain, around the Crystal Tower, far from Sunnymead, with Midtown between them.
- **Look:** beautiful, rich, modern steel-white towers with reflective neon lights, over naturally textured ice-paved streets. The ice surface is mostly even, with a mixture of natural pale-blue and icy-white colour. Street edges remain exposed ice, without snowbanks. Sidewalks are diamond. Building entrances have landscaped areas.
- **Day or night:** both.
- **Main light:** at night, ice-blue neon is distributed evenly through the district, reflecting off the steel buildings and ice roads, with gold neon only at the very tops of the buildings: ice blue `#6CB5D8` and gold `#E7BF68`, sampled from the Crystal Tower's establishing shot. By day, the sun gives the ice a softer, subdued reflection. The atmosphere is clear. **Where characters stand:** on the ice-paved streets.
- **Reactive surfaces:** the ice roads and steel towers reflect the evenly distributed ice-blue neon and the gold neon at the tops of the buildings. The landscaped areas are part of the district's surroundings.
- **Reactive states:**
  - **Quiet:** even ice-blue neon, gold lights steady at the tower tops, and soft reflections across the ice and steel.
  - **Tension:** ice-blue neon pulses subtly; reflections become more pronounced, while the gold lights remain at the tower tops.
  - **Climax:** ice-blue neon reaches its strongest intensity, with vivid reflections across the ice roads and steel towers; gold lights remain confined to the building tops.
- **Scale reference:** a standard building entrance doorway, 10 ft (3.05 m) tall.
- **Visual references:** the user's six supplied images (all except the final, accidentally included ship control-room reference) are references specifically for the Diamond District's futuristic architecture and glacial mountain setting. They establish the district's visual language: tall futuristic city structures, sleek glass architecture and walkways, and a glacier-textured environment integrated with the mountains. Floating homes and mountain-embedded homes belong closer to the mountain and the Crystal Tower/ship; they are part of the district's broader mountain-side setting, not required features of every street-level view.
- **Sheets:** in `locations/diamond-district/`, with their prompts and settings in `prompts.txt`. All three were generated and approved by the user as canon. Their prompts weren't recorded.
  - **Establishing shot, day:** [`diamond-district-wide-day.jpg`](locations/diamond-district/diamond-district-wide-day.jpg), at 1672×941, generated as `a_detailed_90s_anime_style_comic_inked_cityscape.png`. It looks down the ice-paved avenue `#79AAD7` toward Crystal Mountain and its glaciers, between steel-white towers `#E2DFE0` with dark blue glass `#0E517E`, elevated walkways and a glass skybridge. Landscaped diamond-patterned sidewalks run along both sides, with planters, cypresses and trees in purple blossom `#DC90E4`, lamp posts hung with violet banners `#413FA3` bearing a white diamond, and a building entrance on the left with gold-framed doors `#D4A858` under a diamond emblem. The Crystal Tower, a tall crystal spire glowing ice blue `#76C1EF`, rises at the end of the avenue, saucer-shaped aircraft hang in a cobalt sky `#1A61CF`, and buildings sit on the cliffs. It's canon for the district's tall steel-white futuristic towers, glass architecture and elevated walkways, landscaped diamond sidewalks, ice-paved avenue, Crystal Mountain glacier backdrop, the 10 ft (3.05 m) doorway scale reference, and the Crystal Tower as a faceted crystal spire, as the user confirmed. Exceptions, where the written rules here win:
    - **Road:** more reflective and textured than the written mostly even ice with soft, subdued reflections.
    - **Labels:** a "10 ft (3.05 m)" measurement marker stands beside the doorway.
    - **Style:** the lines are bold and black, where the day environment's lines are thin navy `#344481`, and the sky reads a deeper, more saturated blue `#1A61CF` than sky cobalt `#3572C5`.
    - **16:9 version:** [`diamond-district-wide-day-16x9.jpg`](locations/diamond-district/diamond-district-wide-day-16x9.jpg), scaled to 1920×1080.
  - **Reverse angle, day:** [`diamond-district-reverse-day.jpg`](locations/diamond-district/diamond-district-reverse-day.jpg), at 1671×941, generated as `a_detailed_anime_style_wide_reverse_angle_view_of.png`. It looks the opposite way along the avenue, with the same entrance and gold-framed doors now on the right, past a glass skybridge to a white arched gate topped with a diamond emblem, with the glacier-covered mountain, cliff-top buildings and saucer-shaped aircraft behind. It's canon for the opposite view along the avenue, with its steel-white futuristic towers, glass skybridges, landscaped entrances, diamond sidewalks, the glacier-covered mountain backdrop and the 10 ft (3.05 m) doorway scale reference. Exceptions, where the written rules here win:
    - **Road:** more reflective than the written mostly even ice with soft, subdued reflections.
    - **Labels:** a "10 ft (3.05 m)" measurement marker stands beside the doorway.
    - **Style:** the lines are bold and black, where the day environment's lines are thin navy `#344481`, and it's more saturated than the slightly desaturated environment rule.
    - **16:9 version:** [`diamond-district-reverse-day-16x9.jpg`](locations/diamond-district/diamond-district-reverse-day-16x9.jpg), scaled to 1920×1080.
  - **Aerial establishing view, day:** [`diamond-district-aerial-day.jpg`](locations/diamond-district/diamond-district-aerial-day.jpg), at 1672×941, generated as `a_detailed_wide_aerial_anime_style_cel_shaded_sci.png` and approved by the user as canon. It looks across the Diamond District toward Crystal Mountain, down the ice avenue through the arched gate with its diamond emblem. Steel-white towers with glass domes, landscaped terraces and rooftop gardens line it, linked by elevated glass walkways, with the same gold-framed entrance and diamond emblem in the foreground on the left. The Crystal Tower rises as the faceted crystal spire with its ring, dominating the skyline, under the glacier-covered mountain with cliff-top buildings and saucer-shaped aircraft. It's canon for the overall layout, the tall steel-white futuristic towers, elevated glass walkways, landscaped terraces, the glacier-covered mountain backdrop, the Crystal Tower dominating the skyline and the 10 ft (3.05 m) doorway scale reference. Exceptions, where the written rules here win:
    - **Road:** the ice roads are more reflective than the written mostly even ice with soft, subdued reflections.
    - **Labels:** a "10 ft (3.05 m)" measurement marker stands beside the doorway.
    - **Style:** the lines are bold and black, where the day environment's lines are thin navy `#344481`, and it's more saturated than the slightly desaturated environment rule.
    - **16:9 version:** [`diamond-district-aerial-day-16x9.jpg`](locations/diamond-district/diamond-district-aerial-day-16x9.jpg), scaled to 1920×1080.

### Midtown

- **What happens there:** the part of the city for its common folk, the working class. It separates the Diamond District, the wealthy part, from Sunnymead, the rejected part. The Chase Tower stands there, and Wave, the intergalactic patrol officer, moonlights as a DJ at Orion, his nightclub there (see [STORY.md](STORY.md)).
- **Look:** from the user's design work and references. A working-class city district with a mixture of older low-rise commercial and industrial buildings, using brick, concrete and metal, and newer high-rise towers with varied designs, including sleek glass structures, layered metal-and-glass forms and crystal-inspired architecture. Building heights change gradually throughout the district. The skyline is composed mostly of angular, sharp-edged towers. Building façades are mostly smooth and clean, without prominent exposed architectural layers or structural detailing. Streets have no overhead utility wires. The street network combines long avenues, grid-like blocks and irregular side streets, with a mixture of wide avenues and narrower side streets. Road intersections are mostly conventional, with occasional elevated connections. Roads are smooth, dark and glass-like, with crystal light beneath their surfaces in a mixture of fine glowing veins and thin geometric pathways. Main roads use traditional lane markings combined with crystal lighting. Traffic signals are embedded crystal signals integrated into roads and intersections. Crystal elements are primarily embedded in roads and public surfaces rather than visibly distributed throughout buildings and infrastructure. Crystal illumination is primarily cyan and teal. Public holographic displays focus on navigation, public information and transit rather than advertising. Midtown's overall atmosphere combines lively, energetic streets with a mysterious futuristic undertone. Its colour balance uses dark architecture contrasted by bright cyan, teal and varied business neon. Futuristic vehicles primarily levitate and move mostly along organized traffic lanes. Midtown's passenger vehicle traffic consists mostly of futuristic passenger cars with boxier futuristic designs. Passenger cars have bright illuminated trim and glowing panels. Public transportation beyond the elevated train system includes futuristic buses and shuttles. Street activity is busy, with visible street vendors, crowds and traffic. Small landscaped plazas and pocket parks provide green spaces throughout the district. Street-level greenery includes planters and vertical gardens attached to buildings rather than rows of sidewalk trees. Midtown has a varied climate, with clear skies, rain and occasional storms. Chase Tower is the dominant visual landmark in the Midtown skyline. A large public plaza sits at its base. The skyline is dense around Chase Tower and becomes more open toward the district edges. Aerial traffic is moderate, with levitating vehicles moving at different heights between buildings. Pedestrian crossings use illuminated crystal pathways integrated into the roads. Street markets and pedestrian shopping areas create public gathering spaces. Futuristic water features integrated with crystal technology appear in suitable public spaces. Advertising includes both large digital billboards on towers and building façades and smaller holographic and digital signs at street level. Sidewalks are relatively narrow, finished in dark concrete with crystal accents. Pedestrians both move along sidewalks and gather outside shops, markets and building entrances. Storefronts are mostly traditional in form, upgraded with futuristic technology. Street furniture combines benches, planters and public seating with futuristic kiosks, digital information panels and transit stations, distributed naturally through the district. Public art takes the form of digital and holographic installations rather than conventional statues or sculptures. Building entrances generally use large glass façades and doors with illuminated frames. Rooftop visibility varies by street and camera angle: some rooftops are clearly visible from street level, while others are hidden by surrounding buildings. Midtown has clear visual transitions marking where it meets the Diamond District and Sunnymead. Pedestrians wear futuristic streetwear, with occasional distinctive personal movement technology. Levitation height varies by vehicle type. Signs are blank glowing panels and neon shapes, with no lettering, as the user chose. The only words are on named signs, like Orion's "ORION" and the D. Bell marketplace's main sign: prompts spell them out, and every result is checked for the spelling. Permanent neon colours vary by business and street rather than following one district-wide colour scheme. Commercial building signs are mounted directly onto building façades. Permanent neon signs provide most of the street lighting. At night, neon storefront lighting works together with crystal illumination in sidewalks and other ground surfaces. Building windows show a natural mixture of illuminated and dark spaces. Midtown's elevated public transit uses enclosed glass-and-metal trains. Magnetic-levitation guideways are integrated into buildings and elevated structures rather than relying on conventional rail tracks. Stations are a mixture of elevated platforms and enclosed glass stations. Commercial businesses include restaurants, convenience stores, clothing shops and markets, presented as traditional street-level businesses upgraded with futuristic technology. Industrial infrastructure, including pipes, vents, power systems and mechanical structures, is sometimes visible and sometimes concealed behind buildings depending on the location. Rooftops combine gardens, lounges and recreational spaces with mostly hidden mechanical equipment and utility structures. Midtown commonly has light mist close to the roads. Midtown's visual identity combines neon and crystal-road lighting; daytime appearance varies by street and scene, with neon and daylight both used as appropriate. The district's overall visual language is drawn from the user's supplied Midtown references. Those images are design references, not approved final location sheets.
  - **Colours:** from the user's first Midtown reference, which isn't stored in this repo, with colours sampled from it: dark blue-black towers `#0D1A29` with warm amber-lit shop windows `#E89641` at street level, yellow neon `#FFDE14` in strips and bands, cyan neon panels `#0DF7FF` and the odd red `#FF443E` vertical sign, under a dark night-blue sky `#142837`. The reference's glowing crystal spire isn't part of Midtown.
  - **Streets:** the smooth, glass-like crystal roads above, as the user chose, in place of the reference's cracked street with yellow road lines.
- **Day or night:** both; the time of day changes according to how each scene is written.
- **Main light:** neon lighting and the city's crystal roads. Their light and reflections respond to the accent colours of Ozzy and Wave as appropriate to the scene.
- **Where characters stand:** normally on sidewalks or near buildings. A character stands in the street, on a balcony or on a roof only when the scene specifically calls for it.
- **Reactive surfaces:** the road naturally glistens and neon produces glare and reflections. Any additional environmental reaction is specified by the scene and its story moment.
- **User-supplied Midtown visual references:** `Midtown(1).png`, `Chase towerdj(1).png`, `from-PixAI-2075851943187926468 2.jpeg`, `from-PixAI-2075475171176371889(3).png`, `Unknown 14.jpeg`, `Unknown 4.jpeg`, `Alleyway(1).webp`, `785177624672033618(1).webp`, `Drone alley(3).webp` and `MidtownDrone(3).jpg`. They are visual references for the district's architecture, street atmosphere, lighting, skyline and alley compositions; they are not approved final location sheets. The specific Midtown aesthetic remains subject to the README style rules and the user's approval.
- **Style note:** the references are glossy and highly saturated. In Toonville, Midtown is flat cel colour with thin dark teal lines, slightly desaturated and mid-to-dark, with the bright colours kept to its signs, lamps and crystal light, and rain at night, as the Night line asks, except in scenes set just after the rain.

### The Midtown alley

- **What happens there:** an alley in Midtown that Ozzy walks down, unseen, in the test video: the audience hears him and sees his shadow move between the brick wall and the wet concrete, then a low sweeping shot comes down to his feet (see [STORY.md](STORY.md)).
- **Look:** a narrow, enclosed Midtown alley, wide enough for a small service vehicle to fit comfortably with clean, well-maintained dark red brick walls and widely spaced, vertically running dark metal service pipes with a matte finish. The floor is slightly textured, dark grey concrete with visible long-channel matte dark metal drain grates running along both edges of the alley, beside the walls, matching the service pipes. The brick walls have sparse, simple black monochrome graffiti tags in a mixture of small and medium sizes, placed at varied heights alongside the vertical service pipes. The alley remains open overhead, with no pipes connecting the two walls. It opens onto another street at the far end. The entrance from the near street has a more enclosed threshold. The hot-pink neon glow comes from outside the alley as a soft, subdued spill of light, entering from the alley entrance and from the other street at the far end; it flickers gently and irregularly. There are no neon signs or overhead lighting fixtures inside it. All illumination comes from the outside neon.
- **Approved reference:** the establishing wide night shot has been approved by the user as canon. It's saved as its establishing shot, under Sheets below.
- **Day or night:** night.
- **Main light:** flickering hot-pink neon `#F63BC4`, matching the hot-pink neon already used in Midtown. Its intermittent glow spills across nearby walls and the ground and becomes the character's rim light. **Where characters stand:** along Ozzy's own right side of the alley, close to the buildings, rather than in the middle of the road (his right, not the viewer's right). The user changed it from his left with the approved low-angle walking shot, under Sheets below: walking toward the camera, he keeps close to the wall on the viewer's left.
- **Reactive surfaces:** quiet state. Wet pavement reflects the gently flickering hot-pink neon. The pavement remains wet after the rain; rain is not falling during Ozzy's walk. The subdued outside neon softly washes the brick walls and ground, with no additional lighting or active effects. Its prompts use the [Night line after the rain](#night-line-after-the-rain).
- **Sheets:** in `locations/midtown-alley/`, with its prompt and settings in `prompts.txt`.
  - **Low-angle walking shot, night:** [`midtown-alley-low-walk-night.jpg`](locations/midtown-alley/midtown-alley-low-walk-night.jpg), made by the user and approved by the user as canon, at 1672×941. Its prompt wasn't recorded. It's the test video's low shot coming down to Ozzy's feet. He walks toward the camera along the wall on the viewer's left, his right side, in his blue Nike Cortez sneakers with white swooshes and soles, white socks and cuffed blue Polo joggers, with the hot-pink neon rim-lighting the joggers from the far street. His shadow, cut off above the shoulders, falls across the brick wall beside him, and the wet concrete mirrors the pink, with no rain falling. It's canon for his walk's side, his shadow on the wall and his outfit from the knees down. Exceptions, where the written rules here win:
    - **Style:** the environment's lines are bold and black, where they're thin and tinted, and the brick is more saturated than the slightly desaturated environment rule.
    - **16:9 version:** [`midtown-alley-low-walk-night-16x9.jpg`](locations/midtown-alley/midtown-alley-low-walk-night-16x9.jpg), scaled to 1920×1080.
  - **Reverse angle, night:** [`midtown-alley-reverse-night.jpg`](locations/midtown-alley/midtown-alley-reverse-night.jpg), made by the user and approved by the user as canon, at 1672×941. Its prompt wasn't recorded. It looks back up the empty alley to its enclosed entrance, where a dark concrete beam `#1B232F` spans the alley's mouth like a covered passage, with the near street beyond and a building whose windows glow hot pink `#F459C0`. The same dark red brick walls `#721F33`, dark metal pipes `#2C2539`, black tags and drain channels run down both sides, and the wet concrete `#2A2531` mirrors the pink `#DB3E8D`, under a dark sky `#092131` with lit towers. It's canon for the view back toward the entrance and for the enclosed threshold. Exceptions, where the written rules here win:
    - **Floor:** cracked, with darker patches, where it's slightly textured.
    - **Style:** the lines are bold and black, where the environment's lines are thin and tinted, and the brick is more saturated than the slightly desaturated environment rule.
    - **16:9 version:** [`midtown-alley-reverse-night-16x9.jpg`](locations/midtown-alley/midtown-alley-reverse-night-16x9.jpg), scaled to 1920×1080.
  - **Establishing shot, night:** [`midtown-alley-wide-night.jpg`](locations/midtown-alley/midtown-alley-wide-night.jpg), made by the user and made canon by the user, at 1672×941. Its prompt wasn't recorded. A low view from the alley's enclosed entrance, between two worn concrete pillars, down the empty alley to the street at the far end. Dark red brick walls `#6D2031` rise on both sides, with dark metal pipes `#27293E` running up them, black tags `#10141E` at varied heights, and drain channels along both walls. The wet, dark concrete `#2E2838` mirrors the hot-pink neon `#E04C97` spilling in from a storefront on the far street, under a dark sky `#0B3149` with cyan-lit towers. It's canon for the alley's look, its layout and its light, in its quiet state after the rain. Exceptions, where the written rules here win:
    - **Floor:** cracked, with darker patches, where it's slightly textured.
    - **Lettering:** the large tag under a crown on the left wall reads close to "TAK". Midtown's only words are on its named signs.
    - **Style:** the lines are bold and black, where the environment's lines are thin and tinted, and the brick is more saturated than the slightly desaturated environment rule.
    - **16:9 version:** [`midtown-alley-wide-night-16x9.jpg`](locations/midtown-alley/midtown-alley-wide-night-16x9.jpg), scaled to 1920×1080.

### Orion, Wave's nightclub

- **What happens there:** Orion, Wave's nightclub in Midtown, where he moonlights as a DJ. It's also his information hub: he listens to conversations, watches who comes and goes, and follows leads about Ozzy. It puts him in contact with people from across the city, while his true purpose stays hidden (see [STORY.md](STORY.md)).
- **What it is:** a medium-sized underground nightclub, called Orion. The first scene happens outside it. Nothing happens inside until further into the story, but the user had its interior designed ahead of time.
- **Layout:** from the user's design brief. It's spacious, with generous routes through it and clearly separated zones, so it never reads as one open empty room.
  - **Entrance:** a street-facing entrance at the front leads into a graffiti-covered entrance lobby, which opens straight into the main club, with no second door or connecting hallway. The first view from the lobby is the dance floor. The street door slides open when a character enters or leaves the club, then closes behind them, as the user set. It's a pair of glass doors that slide apart, as in the exterior below.
  - **Street front:** its sign spells "ORION" in illuminated neon lettering. It's the only readable signage at the club, inside or out, with no other words, slogans, logos or decorative lettering, and the rest of its neon outside is plain light. At the user's request, prompts carry the name in the sign, and every result is checked for the exact spelling: a garbled sign is fixed in editing. The rest of the exterior is described below.
  - **The sign:** made canon by the user, from the exterior inset of the concept blueprint, with its colours sampled from it. "ORION" is spelled in tall, rounded, geometric capitals, each letter a hollow outline drawn in neon tube. The tubes glow bright blue `#0A54ED` around a pale ice-blue core `#C3E9FD`. The letters sit on a dark navy panel `#001334` mounted on the façade above the entrance canopy. Violet neon `#9D1AF0` runs along the canopy's front edge, just below the sign, and glows again under the canopy.
  - **The exterior and the side alley:** from the user's design work, as the user chose. It keeps the blueprint inset's look at the entrance: the sign, the graffiti and violet neon beside the doors, the recessed sliding glass doors and the low step. Its exterior location sheet, below, made canon by the user, shows it all.
    - **Building:** Orion occupies the ground floor of a Midtown apartment building with seven residential floors above the club. Its upper residential floors have a mostly solid alley-facing wall with only a few windows; no continuous rows of windows or balconies. The upper building façade combines concrete and brick, with a flat roof. Black-metal exterior fire escapes in a classic zigzag configuration, with platforms alternating sides between floors, run along the fourth, fifth, sixth and seventh residential floors only, and end at a separate exit platform with a ground-level exit door opening into the alley, positioned farther down the alley near the bend. Their platforms have solid metal floors. Thick exposed utility pipes in dark grey run vertically up the alley-facing walls, spaced apart and extending from ground level to the roof, secured with visible joints, brackets and clamps. Their quantity should feel balanced with the architecture and not overcrowd or underdress the walls. The space overhead remains open to the sky, with no cables or electrical wiring strung across the alley.
    - **The side alley:** Orion is on the left when entering its fairly wide side alley from the main Midtown street. A pedestrian sidewalk runs along both sides of the alley, kept clear and usable alongside the vehicle route. The alley runs straight from the main street past Orion, then has a slight bend farther down; it continues beyond the club and eventually opens onto another street while also connecting to another service passage. It has enough clearance for a delivery truck to pass. The alley remains clear of parked cars; delivery vehicles are the only vehicles present, and they occasionally move through it. Use a combination of rugged, industrial futuristic cargo vans and box trucks, with enclosed cargo compartments, visible headlights, running lights and industrial warning lights. The road provides adequate width and clearance for the vehicles to gently levitate and move to their specified positions, while preserving a clear sidewalk for foot traffic. A built-in loading-bay entrance is integrated into Orion's apartment building farther down from the club entrance and secured by a maintained, clean black-metal roll-up shutter. The loading bay is sized to provide adequate clearance and usable space without overwhelming the alley environment. The alley is clear of litter and loose debris.
    - **Entrance:** Orion's entrance has a small recessed forecourt, offset within the façade and open directly to the alley with no gate or barrier. The entrance is a double sliding-door opening with dark tinted glass and metal frames; the doors slide open for entry and close after the person passes. The short raised step spans the full width. The exterior façade combines concrete and metal. A purple-neon canopy extends across the entire club frontage, with a large, centred illuminated ORION sign. Purple neon accents frame the recessed entrance.
    - **The wall opposite:** The wall opposite Orion belongs to a thirteen-storey building. Its upper windows are small and narrow; some are illuminated at night with a natural mix of warm yellow and cool blue light, while others remain dark. The wall is dark, muted concrete-dominant, with brick used as an accent material. Colourful street-art murals occupy multiple separate areas across large sections of the wall, leaving some concrete and brick exposed. The murals are arranged around utility fixtures and upper-level apartment windows, which interrupt the artwork naturally; there are no ground-level windows. The specific mural designs are intentionally left open for the user to create and define; do not invent, generate or specify the murals until supplied. Remind the user to return to the mural designs when the project reaches alternate-skin development.
    - **Light:** The alley is lit mainly by Orion's purple neon and light spilling from the club frontage, which visibly casts purple light across the opposite wall. A few small cool-white fixtures are mounted on the walls at street level; there are no continuous dedicated industrial wall lights. The surrounding buildings have some illuminated windows with a natural mix of warm yellow and cool blue light. Distant Midtown buildings are visible above the alley walls, with a dark nighttime sky and occasional distant aircraft.
    - **Pavement and services:** The alley pavement is normally dry, made of dark asphalt that is relatively smooth and maintained, without prominent cracks or patchwork. In Orion's scenes it's wet, just after the rain, as the user chose. Visible storm drains are set into the pavement as long, narrow metal channels positioned close to the alley's centre, appearing in separate, evenly spaced sections that run across the alley rather than one continuous run. Steam vents built into the ground, with visible metal grates flush with the pavement, release gentle, occasional bursts of steam. Two large commercial metal dumpsters in dark grey, one on each side of the alley, almost new and well-maintained, both with their lids closed, sitting directly on the ground with no visible wheels, and small, simple industrial warning labels and identification numbers on their exteriors, form part of the back-of-house infrastructure. Other utility equipment includes electrical cabinets, ventilation units and industrial control boxes. The two dumpsters are positioned by the loading-bay doors. Electrical cabinets, ventilation units and industrial control boxes are grouped by the loading bay; their placement and quantity complement the available space without overcrowding it. Steam vents and storm-drain channels are kept restrained and proportionate to the alley, complementing the area rather than becoming a dominant feature.
    - **At the entrance, from the blueprint inset:** a pair of upright violet neon tubes `#C81CFB` glows on the wall to the left of the sign, and a single tube at the canopy's right end. The canopy is near-black `#05082F`, with the sign's violet neon `#9D1AF0` along its front edge and under it. The doors are dark glass `#030925` with vertical bar pulls, between glass side panels, glowing faintly violet `#621DBA` from the lobby inside. Large wildstyle graffiti covers the lower walls on both sides of the entrance, up to the canopy, in blue `#1E72D8`, cyan `#1ECCF6` and violet `#7628DC`, with pink-magenta `#F189FA` highlights and dark navy outlines `#020518`.
    - **Exterior design reference:** the supplied Orion exterior reference establishes the architectural design and lighting language only: a broad nightclub façade, large illuminated ORION lettering, a projecting canopy with purple neon underneath, vertical purple neon accents, graffiti panels flanking the entrance, and a short raised step at the recessed entrance. It does not establish the final alley camera composition or exact building placement. The user approved the second generated Orion exterior location sheet as the visual reference, and the exterior's and the alley's layout come from it. It establishes the exterior, alley, seven-floor apartment elevation, fire escapes on floors four through seven, loading bay, opposite thirteen-storey building and the double sliding-glass entrance doors as the scale reference. It's saved as the exterior location sheet, below, where its differences from the written rules are listed. The opposite-wall mural artwork remains intentionally undesigned until alternate-skin development.
    - **Planned location-sheet coverage:** create a master overhead layout showing the full alley, Orion, loading bay, opposite building and service equipment; ground-level views from both directions; and a dedicated close-up of Orion's façade. Establishing compositions should include a view from the main Midtown street into the alley, a view from inside the alley toward Orion, and an elevated/drone-style view showing the full alley layout. The exterior location sheet covers all of them except the elevated drone-style view: its aerial view looks straight down.
    - **Style note:** the inset is glossy and saturated. In Toonville, the exterior is flat cel colour with thin dark teal lines, slightly desaturated and mid-to-dark, with the bright colours kept to the neon.
  - **Dance floor:** large, dark and mostly open, in the centre of the room, and kept unobstructed. It has no built-in illuminated panels: it catches reflected light.
  - **Lounge booths:** seated booths along both side walls, separated from the dance floor by industrial concrete half walls and dark metal partitions with cyan and violet neon trim. The partitions are made of vertical bars, as in the booth view, as the user chose. Both of the booths' looks are canon, as the user chose:
    - **The calm setting:** purple seats with warm amber table lamps, potted palms in the corners and amber pendant lamps over the bar, as in the aerial, booth and bar views, the close-ups and the calm lobby view. The pendants are cylinders, as in the bar and aerial views, as the user chose.
    - **The other look:** dark seats with glowing cyan cube lamps and no plants, as in the establishing shot, the camera-position sheet and the reverse angle. When it's used is TBD.
  - **Graffiti:** one dedicated custom graffiti artwork on each side wall, facing each other across the room. The rest of the walls are mostly abstract graffiti. The two artworks' designs are TBD.
  - **Bar:** a full-width bar spanning the entire rear wall, with room for customers in front of it and for staff behind it. Nothing shortens it.
  - **Bathrooms:** two separate bathrooms, the men's and the women's, clearly told apart, each with its own entrance. Each has a sliding door that slides open when a character goes in or comes out, then closes behind them, as the user set. They're near the back-right side of the club, as you look in from the entrance, just forward of the rear wall and close to the bar, with room to reach them without shortening the bar or blocking the lounges. Their stalls and fixtures aren't decided.
  - **DJ platform:** Wave's platform floats directly over the centre of the dance floor, high above it and out of the crowd's reach, with no supports, stairs, ladders, bridges or public way up. Wave reaches it from the roof. Its underside is 4 m (13'1") above the dance floor, twice a person's height. That keeps it at least 6 heads above everyone, as the user set, so it's never at the characters' heads in a shot. It's enclosed completely in illuminated cyan glass, and behind him one massive continuous LED display shows animated equalizer patterns. Inside the glass, a speaker stack stands on each side of the console, and the underside is dark panelling with small lights, as in its close-up. There's generous clearance between the dance floor, the platform and the ceiling.
  - **Ceiling:** covered entirely by a projected Milky Way galaxy in deep navy, cyan and violet, lit up as if stars were streaking across it, with moving spotlights overhead and haze over the dance floor.
  - **Scale:** everything inside is in proportion to the characters, as the user asked. The sizes below were approved by the user and are drawn on the scale sheet. Heights are measured from the floor:
    - **DJ platform:** its underside at 4 m (13'1"), its deck 40 cm thick and its glass walls 2.6 m (8'6") tall, so its top is at 7 m (23'). The tallest head in the club is the doctor's, at 200 cm in his boots. Six of Ozzy's 31 cm heads, the largest head unit of the three, reach 386 cm, so the underside clears everyone by more than 6 heads.
    - **Ceiling:** 9 m (29'6"), leaving 2 m between the top of the platform and the ceiling.
    - **Booths:** seats 46 cm (1'6"), seat backs 107 cm (3'6"), tables 76 cm (2'6"), and table lamps 25 cm tall.
    - **Concrete half walls:** 107 cm (3'6"), with the partitions' vertical bars rising to 220 cm (7'3").
    - **Bar:** stool seats at 76 cm (2'6") and the counter at 107 cm (3'6"). The back bar's counter is at 91 cm (3'), with shelves up to 240 cm (7'10").
    - **Pendant lamps:** their bottoms at 230 cm (7'7") or higher, clear of everyone's heads.
    - **Bathroom doors:** sliding, 213 × 91 cm (7' × 3').

    The furniture is standard real-world size, so next to the characters, who are all over 6 feet tall, the stools and booths look a little small. In prompts, the platform's height is given as its underside about twice a person's height above the dance floor, because generators follow that better than measurements. The room's widths aren't set. Where a sheet disagrees with these sizes, the sizes win.
- **Look:** a dark underground electronic music venue of industrial concrete, dark metal and abstract graffiti, lit mainly in cyan and violet. Inside, the light comes only from illuminated surfaces and light sources, with no readable words or neon signs.
- **Day or night:** night.
- **Main light:** cyan `#24C1D9` and violet, the club's dominant light. The cyan is sampled from the materials key on its concept blueprint, and matches its neon trim and the platform's cyan glass across the sheet. The violet is Ozzy's electric indigo `#6F00FF`, chosen by the user: every violet in the club, from the neon trim to the galaxy ceiling, is that colour. **Where characters stand:** on the dance floor, and some sit at the bar.
- **Reactive surfaces:** inside, the LED display behind Wave, which plays animated equalizer bars, and the Milky Way ceiling, with stars streaking across it. Outside, the "ORION" sign, the purple neon on the canopy and beside the doors, the glass doors, the alley's pavement, and the wall opposite, which catches the purple light. The street door and the bathroom doors react too, sliding open for anyone who goes through them.
- **Reactive states:** as the user asked, every scene at Orion, inside or outside, is set in the state its story moment calls for: quiet, tension or climax, as in the [reactive environment](#reactive-environment) table. The state uses the accent of the character the scene reacts to. Each scene records its state and that character in STORY.md and in its shot list, and its plates and stills are made in that state.
  - **Always moving, inside:** in every state, stars streak across the Milky Way ceiling, the equalizer bars play on the LED display, the spotlights sweep and the haze drifts over the dance floor. In a still, the stars show as streaks with trails. The story moment changes their colour and speed.
  - **Inside, by story moment,** as the user set them:
    - **Quiet scenes and dialogue:** the equalizer bars and the ceiling's stars glow in Wave's dark goldenrod `#8B6508`, and the stars streak steadily across the ceiling.
    - **Tension and movement:** the bars spike harder and flash the accent of the character the scene reacts to, and the stars streak faster.
    - **Climax or power moment:** the whole LED display and the ceiling flood with that character's accent, and the stars pour across in long streaks.
  - **Outside, by story moment:** the exterior and the alley follow the Night column of the reactive environment table, like the rest of the city. The goldenrod exception below covers only the display and the ceiling inside. Every scene outside is set just after the rain, as the user chose, so no rain falls, the pavement stays wet, and prompts use the [Night line after the rain](#night-line-after-the-rain).
    - **Quiet scenes and dialogue:** the sign and the canopy's neon glow steadily in their own blue and violet, and the reflections in the wet street are soft.
    - **Tension and movement:** the sign's glow, the puddles and the rim light take on the accent of the character the scene reacts to.
    - **Climax or power moment:** the accent fills the haze and the reflections in the wet street, and every light glows. The background dims so the character stands out.
  - **Doors, in every state:** the street door and the bathroom doors stay closed, and each slides open only when a character goes through it, then closes behind them. The shot list records which doors are open in each shot, and a plate with no one passing through shows them closed.
- **Style note:** the club's violet is the same colour as Ozzy's accent, so in Orion his indigo doesn't stand apart from the room by colour.
- **Deliberate exception:** Orion is Wave's club, so in its quiet scenes, the display and the ceiling inside glow in his dark goldenrod `#8B6508`, as the user chose. Everywhere else, a character's accent belongs to them, and the environment picks it up only at tension and climax. In Orion, Wave doesn't stand apart from the room by colour, and a tense scene that reacts to him changes only in movement, while one that reacts to Ozzy still turns indigo. It isn't a continuity error.
- **Sheets:** in `locations/orion/`, with its prompt and settings in `prompts.txt`.
  - **Concept blueprint, night:** [`orion-blueprint-night.jpg`](locations/orion/orion-blueprint-night.jpg), made by the user in ChatGPT from their brief, with their two earlier concept blueprints as layout references (those aren't stored in this repo), then fixed by hand. At 1536×1024, it has the top-down floor plan in the middle. On the left are the exterior with the "ORION" sign, a lounge booth and a lounge section detail. On the right are a side section, a front elevation of the DJ platform and the projected galaxy ceiling. A title block and a materials key run along the bottom. It's canon for the club's layout:
    - the street entrance and the graffiti lobby
    - the booths, with a dedicated graffiti panel, down both side walls
    - the full-width bar, with the staff area behind it
    - the men's and women's bathrooms at the back right
    - the open central dance floor
    - the floating platform in its cyan glass box, with the equalizer display behind the console
    - the galaxy ceiling with its spotlights
    - the lounges' construction: concrete half wall, dark metal partition with cyan and violet neon trim, and booth seating

    Its exterior inset is canon for the "ORION" sign and the look at the entrance: the graffiti and violet neon beside it, the recessed sliding glass doors and the low step. The building and the side alley around it come from the exterior entry above, as the user chose. Its lounge insets show one take on the booths, whose looks come from the interior views. Exceptions, where the written rules here win:
    - **Lobby doors:** a pair of swing doors stood where the lobby meets the club, so they were painted out. The lobby opens straight into the club.
    - **Platform:** in the side section, two unlabelled dashed lines ran from the ceiling to the platform and read as hanging cables, so they were painted out. It has no supports. In the plan it's drawn as a lit box on the dance floor; it floats overhead, with its underside 4 m above the floor.
    - **Dance floor:** in the side section, a glowing cyan strip lies on the floor under the platform. The floor has no built-in illuminated panels: it only catches reflected light.
    - **Women's bathroom door:** it opens about one door's width from the top right-hand booth, which is tight.
    - **Doors:** the plan draws the street door and both bathroom doors as swing doors, with arcs. All three slide open, as the user set.
    - **Street front:** the exterior shows double glass doors, where the plan shows one door. The double glass doors are canon, and they slide apart. A small plaque with garbled marks sits high on the wall to the right of the sign, and it isn't part of the street front.
    - **Style:** a glossy, saturated digital illustration with heavy glow, not 90s cel anime with comic-book inking and film grain. Its graffiti and neon are brighter than the slightly desaturated environment rule.
    - **Violet:** its violet neon reads `#7D20CC`, a little warmer than the club's violet, Ozzy's electric indigo `#6F00FF`. The "ORION" sign's canopy violet `#9D1AF0` is part of the canon sign and stays as it is.
    - **Repaint traces:** very close up, faint marks inside the platform's glass box, where the dashed lines met it.
    - **16:9 version:** [`orion-blueprint-night-16x9.jpg`](locations/orion/orion-blueprint-night-16x9.jpg), padded at the sides on the sheet's own navy to 1920×1080.
  - **Establishing shot, night:** [`orion-wide-night.jpg`](locations/orion/orion-wide-night.jpg), made by the user and made canon by the user, at 1672×941, from the prompt in `prompts.txt`. It's a wide low view from the graffiti-covered lobby, framed by its walls, looking straight into the empty club in its quiet state. It's canon for:
    - the view from the lobby, with no door between the lobby and the club
    - the dark, open dance floor catching reflections
    - the DJ platform floating high over the centre with no supports, in its cyan glass box, with the LED display behind the console playing dark goldenrod equalizer bars
    - the galaxy ceiling, with dark goldenrod stars streaking across it, and the spotlights and haze
    - the booths down both side walls, behind concrete half walls and dark metal partitions with cyan and violet neon trim
    - the bar with its stools, and the two bathroom doors at the back right

    Exceptions, where the written rules here win:
    - **Bar:** it sits in the middle of the rear wall, with graffiti on either side. It spans the whole rear wall.
    - **Bathroom doors:** set into the rear wall beside the bar. They're just forward of the rear wall, so nothing shortens the bar.
    - **Style:** smoother and glossier than 90s cel anime with comic-book inking, with strong glow and little hatching, and more saturated than the slightly desaturated environment rule. A few lines read near black, where the environment's lines are thin and tinted.
    - **Colours:** the equalizer bars and stars read brighter `#DFA523` than dark goldenrod `#8B6508`, the violet lighter `#9143E8` than `#6F00FF`, and the cyan brighter `#03D5E4` than `#24C1D9`.
    - **16:9 version:** [`orion-wide-night-16x9.jpg`](locations/orion/orion-wide-night-16x9.jpg), scaled to 1920×1080.
  - **Camera positions, night:** [`orion-camera-positions-night.jpg`](locations/orion/orion-camera-positions-night.jpg), made by the user, at 1672×941: the third of five sets the user made, chosen and made canon by the user. Its prompt wasn't recorded. It's a grid of four panels of the empty club in its quiet state, each about 835×470:
    - **Top left, the reverse angle:** from the DJ console inside the cyan glass box, looking back over the dance floor to the lobby, a dark opening in a graffiti-covered wall
    - **Top right, aerial:** from high above the lobby, looking down the dance floor past the platform to the bar and the bathroom doors at the back
    - **Bottom left, from a booth:** across the dance floor to the bar, with the platform floating overhead
    - **Bottom right, from behind the bar:** over the bar top and stools, back across the dance floor to the lobby, with the platform overhead

    It's canon for those four camera positions and for the club seen from each: the booths, the bar, the lobby, the platform and the galaxy ceiling, matching the establishing shot. The user plans to make each view on its own. Exceptions, where the written rules here win:
    - **Platform height:** in the console view the camera sits only a little above the floor, and in the aerial view the platform can read as resting on the floor. Its underside is 4 m above the dance floor.
    - **Bar and bathroom doors:** as in the establishing shot, the bar sits in the middle of the rear wall, and the doors are set into the rear wall beside it. The bar spans the whole rear wall, and the doors are just forward of it.
    - **Panel size:** each panel is only about 835×470, so one used as a background plate needs upscaling, and the grid has thin white borders.
    - **Style:** smoother and glossier than 90s cel anime with comic-book inking, with strong glow and little hatching, and more saturated than the slightly desaturated environment rule.
    - **Colours:** the equalizer bars and stars read brighter `#C19522` than dark goldenrod `#8B6508`, the violet lighter `#8D41E2` than `#6F00FF`, and the cyan brighter `#02E1EC` than `#24C1D9`.
    - **16:9 version:** [`orion-camera-positions-night-16x9.jpg`](locations/orion/orion-camera-positions-night-16x9.jpg), scaled to 1920×1080.
  - **Reverse angle, night:** [`orion-reverse-console-night.jpg`](locations/orion/orion-reverse-console-night.jpg), made by the user, at 1672×941: the first of two versions the user made, chosen and made canon by the user, and the camera-position sheet's console view on its own. Its prompt wasn't recorded. It looks from the DJ console, inside the cyan glass box with its glass walls on both sides and its frame overhead, back over the empty dance floor to the graffiti-covered wall around the lobby opening, with the booths down both sides, the spotlights and the galaxy ceiling with its dark goldenrod stars. It's canon for the view from the DJ platform and the enclosed glass box around the console. Exceptions, where the written rules here win:
    - **Height:** the dance floor looks only a few metres below the console. The platform's underside is 4 m above it, with the console's floor 40 cm higher.
    - **Lobby:** the opening leads into a long lit corridor. The graffiti-covered lobby opens straight into the club, with no connecting hallway.
    - **Style:** smoother and glossier than 90s cel anime with comic-book inking, with strong glow and little hatching, and more saturated than the slightly desaturated environment rule.
    - **Colours:** the stars read brighter and more orange `#D6831F` than dark goldenrod `#8B6508`, the violet lighter `#8C36EF` than `#6F00FF`, and the cyan brighter `#02D5EA` than `#24C1D9`.
    - **16:9 version:** [`orion-reverse-console-night-16x9.jpg`](locations/orion/orion-reverse-console-night-16x9.jpg), scaled to 1920×1080.
  - **Aerial view, night:** [`orion-aerial-night.jpg`](locations/orion/orion-aerial-night.jpg), made by the user and made canon by the user, at 1672×941, the camera-position sheet's aerial view on its own. Its prompt wasn't recorded. It looks down from high above the graffiti-covered lobby, which opens straight into the club, over the dark dance floor and the DJ platform in its cyan glass box, with its equalizer display and console, to the bar and the bathroom doors at the back. Booths run down both side walls behind half walls and metal partitions with violet and cyan trim, and abstract graffiti covers the walls. It's canon for the club's layout seen from above, in the calm setting, with its purple booths, amber lamps and palms. Exceptions, where the written rules here win:
    - **Platform:** it sits on the dance floor, with its reflection directly beneath it. Its underside is 4 m above the floor.
    - **Bar:** it sits in the middle of the rear wall, and the bathroom doors are set into the rear wall beside it. The bar spans the whole rear wall, and the doors are just forward of it.
    - **Ceiling, spotlights and haze:** the camera looks down from under the ceiling, so the galaxy, the spotlights and the haze don't show.
    - **Style:** smoother and glossier than 90s cel anime with comic-book inking, with strong glow and little hatching, and more saturated than the slightly desaturated environment rule.
    - **Colours:** the equalizer bars and lamps read brighter `#D69E3D` than dark goldenrod `#8B6508`, the violet lighter `#984DDC` than `#6F00FF`, and the cyan brighter `#20EFF7` than `#24C1D9`.
    - **16:9 version:** [`orion-aerial-night-16x9.jpg`](locations/orion/orion-aerial-night-16x9.jpg), scaled to 1920×1080.
  - **From a booth, night:** [`orion-booth-night.jpg`](locations/orion/orion-booth-night.jpg), made by the user and made canon by the user, at 1672×941, the camera-position sheet's booth view on its own, in the calm setting. Its prompt wasn't recorded. It looks from a booth on the left wall, past its purple seats, amber table lamp, potted palm, concrete half wall and barred metal partition, across the dark dance floor to the bar, the bathroom doors and the booths on the far wall. The DJ platform floats high overhead in its cyan glass box, with its dark goldenrod equalizer display behind the console, under the galaxy ceiling with its dark goldenrod stars and the spotlights. It's canon for the view from the booths, the calm setting and the platform floating high above the floor. Its exact height comes from the Scale list. Exceptions, where the written rules here win:
    - **Bar:** it sits in the middle of the rear wall, and the bathroom doors are set into the rear wall beside it. The bar spans the whole rear wall, and the doors are just forward of it.
    - **Style:** smoother and glossier than 90s cel anime with comic-book inking, with strong glow and little hatching, and more saturated than the slightly desaturated environment rule.
    - **Colours:** the equalizer bars, stars and lamps read brighter `#EDA329` than dark goldenrod `#8B6508`, the violet lighter `#9137DE` than `#6F00FF`, and the cyan brighter `#02DBEB` than `#24C1D9`.
    - **16:9 version:** [`orion-booth-night-16x9.jpg`](locations/orion/orion-booth-night-16x9.jpg), scaled to 1920×1080.
  - **From behind the bar, night:** [`orion-bar-night.jpg`](locations/orion/orion-bar-night.jpg), made by the user and made canon by the user, at 1672×941, the camera-position sheet's bar view on its own, in the calm setting. Its prompt wasn't recorded. It looks from the staff side of the bar, past its bottles, shakers, ice well and sink and over its bar top glowing cyan and violet, past the purple stools and under the amber pendant lamps, back across the dark dance floor to the graffiti-covered wall around the lobby opening. The DJ platform floats high overhead in its cyan glass box, with its dark goldenrod equalizer display, under the galaxy ceiling with its dark goldenrod stars and the spotlights, and the calm-setting booths, with their palms and amber lamps, line both side walls. It's canon for the view from behind the bar, the staff side of the bar and the bar top. Exceptions, where the written rules here win:
    - **Lobby:** the opening leads into a long corridor, as in the reverse angle. The graffiti-covered lobby opens straight into the club, with no connecting hallway.
    - **Style:** smoother and glossier than 90s cel anime with comic-book inking, with strong glow and little hatching, and more saturated than the slightly desaturated environment rule.
    - **Colours:** the equalizer bars, stars and lamps read brighter `#F6B135` than dark goldenrod `#8B6508`, the violet lighter `#9138E2` than `#6F00FF`, and the cyan brighter `#02D5F6` than `#24C1D9`.
    - **16:9 version:** [`orion-bar-night-16x9.jpg`](locations/orion/orion-bar-night-16x9.jpg), scaled to 1920×1080.
  - **Close-ups and the calm lobby view, night:** four shots made by the user for consistency in scene production, each made canon by the user, all in the calm setting. Their prompts weren't recorded. Unlike the earlier views, they're inked in bold black lines, closer to the comic-book look. In all four, these exceptions apply, where the written rules here win:
    - **Pendant lamps:** where they show, they're round globes. They're cylinders.
    - **Partitions:** where they show, they're diagonal lattice panels. They're vertical bars.
    - **Style:** the lines are bold and black, where the environment's lines are thin and tinted, never black. They're also glossier, with strong glow, and more saturated than the slightly desaturated environment rule.
    - **16:9 versions:** each has one beside it, named `<name>-16x9.jpg`, scaled to 1920×1080.

    The four shots:
    - **DJ platform close-up:** [`orion-platform-close-night.jpg`](locations/orion/orion-platform-close-night.jpg), at 1672×941. It looks up at the platform floating in its cyan glass box, with the galaxy ceiling, its dark goldenrod stars and the spotlights above it, and the back bar's shelves and pendants below. Inside the glass, the continuous LED display plays dark goldenrod equalizer bars behind the empty console and its decks, with a speaker stack on each side of the console. The box has glowing cyan edges, and its underside is dark panelling with small lights. It's canon for the platform from close up: the glass box, the console, the speaker stacks, the display and the underside. Its colours: the equalizer bars read brighter `#F9C403` than dark goldenrod `#8B6508`, the violet a little lighter `#781AE3` than `#6F00FF`, and the cyan brighter `#01EDF7` than `#24C1D9`.
    - **Bar close-up:** [`orion-bar-close-night.jpg`](locations/orion/orion-bar-close-night.jpg), at 1672×941. It looks along the bar from the customers' side, past a row of purple stools on chrome posts with foot rings, over the bar top glowing cyan and violet with cyan light under its front edge, to the back bar. The back bar has shelves of bottles lit amber and cyan, shakers, an ice well and a sink with a tap, with a violet neon tube at each end and the pendants hanging over it. The platform floats in the top left corner. It's canon for the bar from the customers' side, its stools and the back bar. Exceptions, where the written rules here win:
      - **Bar:** its left end stops short of the wall, with a palm and a booth beyond it. It spans the whole rear wall.
      - **Colours:** the lamps, bottles and equalizer bars read brighter `#FBC34F` than dark goldenrod `#8B6508`, the violet lighter `#9E36F5` than `#6F00FF`, and the cyan brighter `#02CEF2` than `#24C1D9`.
    - **Booth-row close-up:** [`orion-booths-close-night.jpg`](locations/orion/orion-booths-close-night.jpg), at 1672×941. It looks along the booths on the left wall from beside the end booth's concrete half wall, with its cyan neon edge. The booths have purple seats tufted in vertical channels and dark tables with cylinder amber lamps. Long planters of ferns and palms run along the booth backs, behind the partitions edged in violet and cyan neon. Beyond them are the bar and its back shelves at the rear, the platform in its cyan glass box with its dark goldenrod equalizer bars, the spotlights and the galaxy ceiling with its dark goldenrod stars. It's canon for the booths from close up: their seats, tables, lamps, half walls and planters. Exceptions, where the written rules here win:
      - **Stepped tiers:** behind the platform, steps edged in cyan and violet neon rise toward it, and can read as stairs up to it. It has no stairs or public way up.
      - **Platform height:** it reads low, just above the back bar's shelves. Its underside is 4 m above the dance floor, well above the shelves' 240 cm.
      - **Colours:** the lamps, equalizer bars and stars read brighter `#FAB73C` than dark goldenrod `#8B6508`, the violet lighter `#8F32E0` than `#6F00FF`, and the cyan brighter `#00CDF2` than `#24C1D9`.
    - **View from the lobby, calm setting:** [`orion-lobby-calm-night.jpg`](locations/orion/orion-lobby-calm-night.jpg), at 1671×941, the establishing shot's view again, in the calm setting. It looks from the graffiti-covered lobby, framed by its walls, straight into the empty club. On each lobby wall a tall violet neon tube glows above a concrete planter with a palm and a cyan-lit base, and cyan light strips cross the lobby ceiling. Beyond, the dark dance floor catches reflections, the platform floats high over the centre in its cyan glass box with dark goldenrod equalizer bars, and the galaxy ceiling has dark goldenrod stars and spotlights. Purple booths with amber lamps and palms run down the left wall. It's canon for the lobby in the calm setting, with its planters, palms, violet neon tubes and ceiling strips, and for the view from it. Exceptions, where the written rules here win:
      - **Right wall:** a bar with stools and bottle shelves runs down it. Booths line both side walls.
      - **Rear wall:** a short back bar sits in the middle of it, with booths in front. The bar spans the whole rear wall.
      - **Bathroom doors:** they don't show. They're at the back right, just forward of the rear wall.
      - **Dance floor:** a glowing cyan outline marks a rectangle on the floor under the platform. The floor has no built-in illuminated panels: it only catches reflected light.
      - **Colours:** the equalizer bars read brighter `#EEC203` and the stars `#D1AC3B` than dark goldenrod `#8B6508`, the violet lighter `#8C1CE6` than `#6F00FF`, and the cyan brighter `#01C2F1` than `#24C1D9`.
  - **Approved references noted on GitLab's `main` branch, not stored in this repo:** made canon by the user in other work. Some may be the same images as the views above.
    - **Approved overhead reference:** the user approved the generated true bird's-eye overhead view of Orion as canon. It establishes the full room layout: central floating cyan glass DJ platform, open central dance floor, lounge booths along both side walls, rear bar and stools, two separate bathroom doors at the rear right, and entrance lobby at the opposite end. The image also includes plants and extra lounge details not specified in the written design; these are present in this approved reference only and do not automatically amend the written location design. The written design and style rules remain authoritative where they differ. Repository image path: TBD.
    - **Approved left-side camera reference:** the user approved the generated 16:9 view looking diagonally across the left-side lounge booths toward the central dance floor and floating cyan glass DJ platform. It shows the rear bar and stools, two bathroom doors near the rear bar, galaxy ceiling and cyan/violet lighting. This approved image also contains plants and amber table lamps, which are canon in this specific approved reference; the written location description is otherwise unchanged unless separately amended. Known visual deviation: the DJ platform appears larger than in the approved overhead reference, and the rendering is more dimensional than the strict flat-cel style. Repository image path: TBD.
    - **Approved right-side camera reference:** the user approved the generated 16:9 view from the right-side lounge wall, looking diagonally across the lounge booths toward the central dance floor and floating cyan glass DJ platform. It includes the rear bar and stools, two bathroom doors near the rear bar, plants and amber table lamps, galaxy ceiling, and cyan/violet lighting. These plants and lamps are accepted in this approved reference; the written location description is otherwise unchanged. Known visual deviation: the DJ platform appears larger than in the approved overhead reference, and the rendering is more dimensional than the strict flat-cel style. Repository image path: TBD.
    - **Approved DJ platform close-up reference:** the user approved the generated close-up of Orion's floating, fully enclosed cyan glass DJ platform. It shows the DJ console, continuous dark-goldenrod equalizer display, cyan glass enclosure, galaxy ceiling and cyan/violet spotlights. This approved image also includes large speaker stacks inside the enclosure; they are accepted in this specific reference and do not otherwise amend the written location design or platform object description. Known visual deviation: the close-up presents the platform as a larger suspended stage than the smaller platform shown in the approved overhead reference; the written design remains authoritative where they differ. Repository image path: TBD.
    - **Approved bar close-up reference:** the user approved the generated 16:9 close-up of Orion's full-width rear bar, viewed from the customer side. It shows the long counter, purple stools, tiered bottle shelves, staff workspace with prep surfaces and equipment, cyan/violet lighting, amber pendant lamps and galaxy ceiling. The approved image includes cocktail tools, ice bins, garnish trays and a polished reflective counter surface; these details are accepted in this specific reference and do not otherwise amend the written location design. Known visual deviation: the counter reads as polished marble rather than the established industrial concrete and dark metal materials; the written design remains authoritative where they differ. Repository image path: TBD.
    - **Approved lounge booth close-up references:** the user approved both generated lounge booth variations. Together they show purple upholstered booth seating, tables with amber lamps, industrial concrete half walls, dark metal partitions with cyan/violet trim, plants, reflective flooring, galaxy ceiling and glimpses of the DJ platform/bar. Both images are accepted as canon references. Their added greenery and additional partition details are accepted in these specific images and do not otherwise amend the written location design. Known visual deviation: the rendering is more dimensional than the strict flat-cel style. Repository image paths: TBD.
    - **Approved entrance close-up reference:** the user approved the generated 16:9 view from inside Orion's graffiti-covered entrance lobby, looking directly into the club through the open double sliding-door entrance. It shows the central dance floor, floating cyan glass DJ platform and goldenrod equalizer, lounge booths and partitions, rear bar, plants and amber lamps, galaxy ceiling and cyan/violet lighting. The entrance image's more symmetrical, elaborate framing and additional neon strips and plants are accepted in this specific reference; they do not otherwise amend the written entrance design. Known visual deviation: the rendering is more dimensional than the strict flat-cel style. Repository image path: TBD.
  - **Scale sheet:** [`orion-scale-night.jpg`](locations/orion/orion-scale-night.jpg), made in this project from the canon figures on the size chart, not generated, at 3840×2160, and approved by the user. It's a side elevation at 2 px per cm, with metre and foot rulers. Ozzy, Dr. Heyes and Wave stand in their shoes on one ground line, beside:
    - a booth with its table and lamp
    - a half wall with its partition of vertical bars
    - the bar, with a stool, the back bar and a pendant lamp
    - a sliding bathroom door

    Under the floating platform the three stand together, with six of Ozzy's head units stacked above the doctor's head to show the platform clearing them. Wave stands inside the glass box at his console, between the speaker stacks, in front of the LED display, with the ceiling above. It's canon for every height in the Scale list above. Widths along the floor aren't to scale, and the furniture is drawn as plain shapes, for size only. It's already 16:9, and is scaled to 1920×1080 when it goes in a video.
  - **Exterior location sheet, night:** [`orion-exterior-sheet-night.jpg`](locations/orion/orion-exterior-sheet-night.jpg), the second version the user made, made canon by the user, at 1672×941, from the prompt in `prompts.txt`. A design sheet of nine panels, in the rain at night:
    - **Top row:** the establishing view from the Midtown street into the side alley, with Orion on the left; the alley view toward Orion, past its entrance to the cabinets, the loading bay and a delivery truck; and the reverse view down the alley, with a dumpster, cool-white wall lights and a steam vent
    - **Middle row:** an elevation of Orion's apartment building from the alley, with a floor ruler; and the alley's layout from straight above, from the Midtown street to the bend, with Orion, the loading bay and the 13-storey building opposite
    - **Bottom row:** the entrance close up, as the scale reference; the loading bay and service area; a fire escape; and a section across the alley, with a sidewalk on each side of the vehicle route and a delivery truck

    It's canon for the exterior and the side alley:
    - **The entrance:** the "ORION" sign on its dark panel, the pair of violet tubes to its left and the single tube on its right, the violet neon along the canopy's edge and the downlights under it, the wildstyle graffiti on both sides up to the canopy, the dark sliding glass double doors with bar pulls, and the step across the front
    - **The building:** concrete with a brick band, a flat roof with rooftop units, a few windows lit warm yellow and cool blue, thick dark pipes from the ground to the roof, and black zigzag fire escapes with solid platforms
    - **The alley:** Orion on the left as you enter from the Midtown street, a sidewalk on each side, the straight run past the club to the bend, open sky with no cables, and dark, smooth asphalt with drain grates and a steam vent
    - **The loading bay:** farther down from the entrance, with its roll-up shutter, a lamp over it, yellow bollards, and the electrical cabinets and ventilation units grouped beside it
    - **The light:** the club's violet spill across the pavement, a few small cool-white wall lights, and Midtown's towers above the alley walls

    Exceptions, where the written rules here win:
    - **Floors:** the elevation's ruler counts seven floors in all, with the club taking the first two, so only about five residential floors rise above it. Seven residential floors sit above the club, as the aerial view's label says.
    - **Fire escapes:** on the elevation they reach down to about the third floor, and the separate exit platform, with its ground-level exit door near the bend, doesn't show. They run along the fourth to seventh residential floors only, and end at that exit platform.
    - **Dumpsters:** both stand on Orion's side, one on each side of the loading bay, in navy `#122447` with pale magenta trim on the lids. They're dark grey, one on each side of the alley, by the loading-bay doors.
    - **Rain:** it falls in every panel. Orion's outside scenes are set just after the rain, with no rain falling and the pavement still wet.
    - **Lamp posts:** the alley section stands a lamp post on each sidewalk. The alley is lit by the club's neon and a few small cool-white wall lights.
    - **The wall opposite:** bare concrete and brick, with no murals. Its murals are still to be designed by the user, so none are invented.
    - **Labels:** a title, "ORION NIGHTCLUB — EXTERIOR (LOCATION SHEET) MIDTOWN — NIGHTTIME", a caption on every panel, labels on the aerial view and the section, and the elevation's floor ruler. The "D-742" on a dumpster is one of its identification numbers.
    - **Style:** a design sheet with panel borders. The lines are bold and dark in places, where the environment's lines are thin and tinted, and it's glossier and more saturated than the slightly desaturated environment rule.
    - **Colours:** the sign's tubes glow a lighter blue `#1992E8` than `#0A54ED`, the canopy's neon reads a deeper violet `#8A17BA` than `#9D1AF0`, and the graffiti's blue `#0575C7` against `#1E72D8`.
    - **16:9 version:** [`orion-exterior-sheet-night-16x9.jpg`](locations/orion/orion-exterior-sheet-night-16x9.jpg), scaled to 1920×1080.

### The Chase Tower

- **What happens there:** a tall residential building in Midtown, the district's dominant landmark, with a large public plaza at its base. The D. Bell marketplace sits directly across the street, opposite the plaza.
- **Look:** from the user's plaza reference image, which isn't stored in this repo, with colours sampled from it: a very tall tower of glowing blue glass `#3A8BD9`, brightest `#6BD1F4` where it glows, wrapped in a dark blue steel framework `#254999` of crossing beams, its lit floors showing through, tapering to a single spire with a white glowing tip. It rises above Midtown's dark towers. Two rings of glowing cyan light `#30B8E5` circle the upper tower, one above the other, as in its establishing shot, made canon by the user. Each ring is a structure of lit panels, held out from the tower on support struts, as in its close-up. A diamond-shaped crystal emblem identifies it: a large one on the tower's face between the two rings, one over its entrance, and others on the street banners around it.
- **Plaza, entrance and transit,** from the user's design work: the plaza has an open stone-and-crystal design with seating. Its landscaping combines minimal open surfaces with decorative planters and vertical gardens. Plaza lighting comes from ground-level crystal illumination. It supports everyday activity as well as occasional public gatherings and events. The Chase Tower entrance is grand, with a glass façade and a wide staircase. The elevated transit connection is integrated into the tower, with both an enclosed station inside the building and an elevated station attached to its exterior. Transit stations have a futuristic appearance with glowing crystal elements. The tower is identified by a distinctive illuminated geometric crystal emblem rather than a large readable name sign near the top. The elevated transit route passes through or connects directly to Chase Tower. At night, Chase Tower is the brightest element in a varied skyline, while surrounding buildings have differing levels of illumination. Its architecture combines sleek glass, layered metal-and-glass forms and crystal-inspired design elements. Its signature lighting is primarily cool blue and cyan.
- **Entrance and plaza, from its location sheets,** made canon by the user: a circular plaza rings the tower's base, with roads leading away from it. The entrance, at the top of its wide staircase, has a large lit emblem panel over a flat canopy with downlights, and glass double doors onto a warm-lit lobby `#DDA171`, with a planter of shrubs on either side and short bollard lights along the front.
- **Day or night:** both, as in its day and night location sheets, made canon by the user.
- **Main light:** TBD. **Where characters stand:** TBD.
- **Reactive surfaces:** TBD.
- **Sheets:** in `locations/chase-tower/`, with its prompt and settings in `prompts.txt`.
  - **Establishing shot, night:** [`chase-tower-wide-night.jpg`](locations/chase-tower/chase-tower-wide-night.jpg), made by the user and made canon by the user, at 1672×941. Its prompt wasn't recorded. It's a wide low view down a rainy Midtown street at night to the tower: shops with warm windows `#F5BD79` and awnings line both sides, an elevated train runs on its guideway toward the tower on the right, and the wet street mirrors the cyan and pink-violet light. It's canon for the tower's look in Midtown at night, its two rings of light, the crystal emblem over its entrance and on the street banners, its grand entrance, and the elevated train leading to it. Exceptions, where the written rules here win:
    - **Lettering:** "MIDTOWN ATL" on a sign, "CHASE TOWER" and "CHASE" on the banners, and "D. BELL MARKETPLACE" with an arrow on a wall sign. Midtown's signs are blank, the tower is identified by its emblem rather than its name, and D. Bell's one named sign hangs above the market's own entrance. Lepus has no "ATL".
    - **Street trees:** a row of trees lines the sidewalk. Midtown's greenery is planters and vertical gardens attached to buildings, not rows of sidewalk trees.
    - **Crystal roads:** the street is wet and glassy, but without the cyan and teal crystal light glowing beneath its surface.
    - **The plaza and D. Bell:** neither shows: the view looks straight down the street to the tower's entrance.
    - **Spire tip:** it glows pale cyan `#73D2F7`, where it's white.
    - **Style:** the lines are bold and black in places, where the environment's lines are thin and tinted, and it's glossier and more saturated than the slightly desaturated environment rule.
    - **Colours:** the glass glows a more cyan `#1FA9DB` than `#3A8BD9`, and the steel framework reads darker `#042036` than `#254999`.
    - **16:9 version:** [`chase-tower-wide-night-16x9.jpg`](locations/chase-tower/chase-tower-wide-night-16x9.jpg), scaled to 1920×1080.
  - **Close-up, night:** [`chase-tower-close-night.jpg`](locations/chase-tower/chase-tower-close-night.jpg), made by the user and made canon by the user, at 1672×941. Its prompt wasn't recorded. It looks up at the tower's upper half in the rain, with Midtown's towers around its base, their windows lit warm `#FACE9B` and cyan and pink beacon lights `#EB65D6` on their roofs. It's canon for the tower from close up: its glowing glass and crossing steel framework, the two rings as lit structures held out on support struts, the large diamond emblem on its face between the rings, and the spire. It has no lettering. Exceptions, where the written rules here win:
    - **Spire tip:** it glows pale cyan `#7BD8FA`, where it's white.
    - **Style:** the lines are bold and dark in places, where the environment's lines are thin and tinted, and it's glossier and more saturated than the slightly desaturated environment rule.
    - **Colours:** the glass glows a more cyan `#1A98E1` than `#3A8BD9`, and the steel framework reads darker and bluer `#032070` than `#254999`. The rings read `#3BBEF2`, close to `#30B8E5`.
    - **16:9 version:** [`chase-tower-close-night-16x9.jpg`](locations/chase-tower/chase-tower-close-night-16x9.jpg), scaled to 1920×1080.
  - **Location sheet, night:** [`chase-tower-sheet-night.jpg`](locations/chase-tower/chase-tower-sheet-night.jpg), made by the user and made canon by the user, at 1672×941. Its prompt wasn't recorded. A design sheet of seven panels, in the rain at night:
    - **Top left:** down a street to the tower, with its rings and the emblem at its base
    - **Top middle:** back down the street, with the elevated train on its guideway on the left
    - **Bottom left:** an aerial view of the tower among Midtown's buildings, with the circular plaza at its base
    - **Bottom middle:** the entrance close up, with its emblem panel, canopy, glass doors, planters and bollard lights
    - **Right column:** the spire, a ring on its struts, the emblem on the tower's face, the glass and framework, the doors, and swatches of the five core palette colours

    It's canon for the tower from every side, the circular plaza and the entrance. Exceptions, where the written rules here win:
    - **Staircase:** the entrance is flat. It sits at the top of a wide staircase, as the user chose.
    - **Street trees:** rows of trees line the streets and the plaza. Midtown's greenery is planters and vertical gardens attached to buildings.
    - **Lettering:** a vertical sign on the left building in the top-left panel carries garbled marks. Midtown's signs are blank.
    - **Crystal roads:** the streets don't show the crystal light glowing beneath their surface.
    - **Elevated train:** it runs along the street but doesn't visibly join the tower.
    - **Palette swatches:** they drift a little from the core palette: `#0B193A` for navy `#09102E`, `#004971` for deep teal `#084558`, `#1A84E9` for cobalt `#2F91DB`, `#4840C1` for violet `#5251B9` and `#D4E1E9` for cloud white `#DEE7E8`.
    - **Style:** a design sheet with panel borders. The lines are bold and dark in places, where the environment's lines are thin and tinted, and it's glossier and more saturated than the slightly desaturated environment rule.
    - **Colours:** the glass glows a more cyan `#1B9ADB` than `#3A8BD9`.
    - **16:9 version:** [`chase-tower-sheet-night-16x9.jpg`](locations/chase-tower/chase-tower-sheet-night-16x9.jpg), scaled to 1920×1080.
  - **Location sheet, day:** [`chase-tower-sheet-day.jpg`](locations/chase-tower/chase-tower-sheet-day.jpg), made by the user and made canon by the user, at 1671×941. Its prompt wasn't recorded. The night sheet's seven panels again, by day, under a blue sky with loose white clouds `#DEEBF7` and hard sun shadows: the two street views, the aerial view with the circular plaza, the entrance, the detail panels and the palette swatches. By day the rings glow a pale `#DBF2F9`. It has no lettering. It's canon for the tower, the plaza and the entrance by day. Exceptions, where the written rules here win:
    - **Streets:** plain grey asphalt `#A9A1A8` with white lane lines. Lepus's streets are paved in ice, and Midtown's are glass-like crystal roads.
    - **Street trees:** rows of trees line the streets and ring the plaza. Midtown's greenery is planters and vertical gardens attached to buildings.
    - **Staircase:** the entrance is flat. It sits at the top of a wide staircase, as the user chose.
    - **Palette swatches:** they drift a little from the core palette, as on the night sheet.
    - **Style:** a design sheet with panel borders. The lines are bold and dark in places, where the day environment's lines are thin navy `#344481`, and it's glossier and more saturated than the slightly desaturated environment rule.
    - **Colours:** the sky reads a deeper, more saturated blue `#146BD8` than sky cobalt `#3572C5`, and the trees a brighter yellow-green `#B1C93A` than sage green `#9CD086`. The glass reads `#2187E5` against `#3A8BD9`.
    - **16:9 version:** [`chase-tower-sheet-day-16x9.jpg`](locations/chase-tower/chase-tower-sheet-day-16x9.jpg), scaled to 1920×1080.

### The D. Bell marketplace

- **What happens there:** the D. Bell marketplace, a small open-air market in Midtown, directly across the street from the Chase Tower, opposite its public plaza, as the user set. What happens there in the story is TBD.
- **Look:** from the user's design work. A marketplace named the “D. Bell” marketplace is located directly across from Chase Tower, opposite the tower's public plaza. The marketplace is a small open-air market made up of individual vendor stalls, located directly on the street opposite Chase Tower. Its identity is that of a traditional neighborhood market with a strong futuristic character. The marketplace is clearly visible as a distinct destination from the street. The vendor stalls use metal frames with angled fabric awnings. Vendors wear coordinated market clothing or aprons. Vendors use advanced holographic displays and automated services, including small holographic price tags and product information at each stall. The canopies use the Toonville core palette—navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9 and cloud white #DEE7E8—with a distinct colour combination assigned to each merchandise section. The market is organized into clearly separated sections by merchandise type, identified by floor markings and recognizable produce, grocery and specialty-goods icons representing each merchandise section. Each section has its own entrance marker, combining clusters of uneven natural crystal shards rising from the ground to around waist height with small diamond-shaped crystal markers at floor level. The crystal shards emit a soft, steady illumination that remains constant, with no pulsing or fluctuations. The section symbols glow subtly when approached. The sections are connected by open walkways, with vendor stalls arranged in organized rows facing inward toward the central crystal fountain. A central medium-height circular crystal fountain with a raised dark-stone basin and a gentle continuous flow of water anchors the market, with a continuous circular seating edge made of dark polished stone around it. The water is clear and illuminated by cobalt-blue crystal lighting. It is overlooked by surrounding mid-rise apartment towers with concrete-and-glass façades, large floor-to-ceiling windows and balconies facing the marketplace; some balconies have plants and outdoor furniture, while others remain plain. Low crystal-accented concrete walls define its edges. Market lighting comes from warm vendor lights and overhead fixtures. A few public benches and tables provide seating. The market has heavy foot traffic and busy vendor aisles during the day. Its vendor aisles are wide enough for two-way pedestrian traffic. Vendors close individually throughout the evening, and the market becomes quiet after dark. Vendors sell familiar fruits and vegetables grown locally within Midtown, displayed in transparent glass refrigerated cases with futuristic illumination. Each vendor has an individual stall with distinct merchandise and identity, and personalizes the stall's decoration. Market vendors and customers include a mixture of humans and other species. The marketplace serves Midtown residents and is also a well-known destination attracting visitors from across the city. Its merchandise is organized into separate produce, grocery and specialty-goods sections. The market has multiple wide pedestrian entrances from the surrounding sidewalks, with decorative crystal-accented entrance structures and gates that close after business hours. The crystal-accented entrance gate is the marketplace's scale reference. Activity sometimes extends onto the surrounding sidewalks, especially near the entrances. A rear service entrance provides delivery access for small futuristic cargo vans and compact levitating delivery carts. The surrounding streets are pedestrian-focused, with designated delivery access. The market's main plaza has smooth glass-like paving with crystal illumination, while the vendor sections use dark concrete with crystal accents. Market floors are kept immaculately clean and polished by small autonomous cleaning robots. During daylight, natural daylight is the main light source. Its soundscape combines vendors calling out, conversations and bargaining with background music and electronic market announcements. Visible public waste bins and cleaning stations are present throughout the marketplace, with waste collection handled both by distributed bins and a central collection area. During business hours, background activity is primarily customers moving through the market and vendors serving them. Visible city security patrols operate both around the marketplace perimeter and through its interior pathways.
- **Its sign:** One main sign identifies the marketplace at its entrance, using distinctive custom lettering with an illuminated border, mounted above the entrance and visible from both the Chase Tower plaza and surrounding streets. Like Orion's, it's a named sign: prompts spell out "D. Bell", and every result is checked for the spelling. Every other sign around it is blank.
- **The shops around it:** as the user chose, the streets around the market are lined with ground-floor shops like those in the user's reference image, which isn't stored in this repo, with colours sampled from it: dark blue stone-panelled buildings `#102A55`.
  - **The corner shop:** large display windows glowing pink-violet `#BF54C6` and blue `#4C7CD1` in dark frames `#191B31`, under big neon shapes on its upper wall in hot pink `#F63BC4` and cyan `#07C3F1`, with a short canopy glowing pale amber `#FDD58F` at its side.
  - **Along the street:** tall vertical neon signs in pink `#F26CD6`, cyan `#02A5DF` and white run up the buildings. Further along, the buildings have rows of warm-lit windows and an amber-yellow sign `#FACA70`.
  - **Ground and sky:** the wet, dark sidewalks `#0F2043` mirror the pink `#CF4DBE` and cyan `#068BD6` neon, under a dark blue night sky `#063661`, with rain.
  - **Signs:** blank glowing neon shapes and panels, with no lettering. The reference's signs carry garbled lettering.
- **Day or night:** both. By day it's busy; vendors close through the evening and it's quiet after dark, when the shops' neon around it glows.
- **Main light:** by day, natural daylight, as the user set. At night, the hot-pink and cyan neon from the surrounding shops is the main light source; the market's warm vendor lights and overhead fixtures are secondary. **Where characters stand:** the circular seating edge around the central fountain is the main character gathering and standing area.
- **Reactive surfaces:** the shops' neon signs and windows, the wet sidewalks, the fountain's water and the market's glass-like paving. The crystal shards at the section entrances keep a soft, steady glow that never pulses, as the user set.
- **Style note:** the reference is glossy and saturated. In Toonville, the marketplace and the shops around it are flat cel colour with thin dark teal lines, slightly desaturated and mid-to-dark, with the bright colours kept to the neon, the crystals and the shop windows, and rain at night.
- **Sheets:** in `locations/d-bell/`, with their prompts and settings in `prompts.txt`. Both were made by the user and made canon by the user. Their prompts weren't recorded. Each is a design sheet of eleven panels, with the same layout:
  - an establishing view from the Chase Tower plaza, through the entrance gate
  - the market's layout from straight above
  - a reverse view from inside, toward the entrance
  - an elevated wide view of the market and the streets around it
  - the entrance gate as the scale reference, the central fountain, the produce, grocery and specialty-goods sections, the cleaning robot and its station, and the service entrance with a delivery van

  They're canon for:
  - **The entrance gate:** an arch of stone and dark metal, with violet banners hanging on its pillars, the "D. Bell" sign across its top and a glowing crystal above the sign
  - **The layout:** a square market, with rows of stalls on each side facing in toward the central fountain, crystal markers at its entrances and corners, and a service road along one side
  - **The stalls:** awnings in violet `#7F62D7`, teal `#48A8AE` and navy blue `#35456F`, the produce, grocery and specialty-goods stalls marked by a leaf, a cart and a diamond icon on their holographic signs and on the floor, and roll-up shutters that close each stall at night
  - **The fountain:** crystal spires over a round dark stone basin, with a seating edge and water lit cobalt blue `#458ED1`
  - **The people:** vendors and customers, including people of other species, and two city security officers in dark uniforms
  - **The cleaning robot:** a small white boxy robot with sweeping brushes, beside its station
  - **At night:** the shuttered stalls, the empty market in the rain, the steady glow of the crystal shards `#7592EE`, and the shops' pink and cyan neon around it

  Exceptions, where the written rules here win:
  - **Yellow awnings:** some awnings are mustard yellow `#DAB755`. The awnings use the core palette, as the user chose.
  - **Labels:** each sheet has a title, such as "D. BELL MARKETPLACE — DAYTIME (LOCATION SHEET)", and a caption on every panel. The elevated views spell the sign "D.Bell", without the space.
  - **Street trees:** rows of trees line the streets around the market. Midtown's greenery is planters and vertical gardens attached to buildings.
  - **The Chase Tower:** in the background, it has no rings, and by night its top glows pink.
  - **The gates:** by night, the entrance arch stands open. The market's gates close after business hours.
  - **Crystal roads:** the streets don't show the crystal light glowing beneath their surface.
  - **Style:** glossier and more saturated than the slightly desaturated environment rule, with bold dark lines in places, where the environment's lines are thin and tinted.
  - **16:9 versions:** each has one beside it, named `<name>-16x9.jpg`, scaled to 1920×1080.

  The two sheets:
  - **Day:** [`d-bell-sheet-day.jpg`](locations/d-bell/d-bell-sheet-day.jpg), at 1672×941, the market busy under a blue sky.
  - **Night:** [`d-bell-sheet-night.jpg`](locations/d-bell/d-bell-sheet-night.jpg), at 1671×941, the market closed and empty in the rain.

### Sunnymead

- **What happens there:** the rejected part of the city, its rough side, where the mayhem and common crime are. It's far from the Diamond District, with Midtown between them.
- **Look:** torn-down buildings in urban ruins, with occasional neon graffiti over the torn ice towers.
- **Day or night:** TBD.
- **Main light:** TBD. **Where characters stand:** TBD.
- **Reactive surfaces:** the neon graffiti. More TBD.

### The Crystal Tower and the orphanage

- **What happens there:** the Crystal Tower, the tallest tower in the city, is lodged at the foot of the mountain, in the Diamond District, the wealthy part of the city, among its towers. It blocks the mountain's passages, and there's no way around the mountain. There are only two ways through the mountain, and the public never reaches either: the Tall Whites' secret underground tunnel beside the tower, and the tower's secret entrance, the ship's true doors and real entrance, caved into the mountain (see the frozen island city above). The public knows only the tower's designated entrance, for everyone else and for visitors, which is equipped with hangars. The visitors come on business or for intergalactic travel, and even the businessmen don't know what they're funding. No one goes to the true doors, because of the Tall Whites. Visitors to the planet push straight on into the city and its amenities: as far as anyone knows, the city begins at the tower and runs onward from it. There are parts of the tower the public never sees or knows about. It's really an intergalactic spaceship, and it's Ozzy's: a biological vessel that incubates him and makes him stronger, and provides planetary travel at record speeds, with no expense spared for the prince. It's the ship the doctor, the main antagonist, took over from a royal convoy before it hit the mountain and slid down it, coming to rest upright as the tower seen today (see [STORY.md](STORY.md)). Only the doctor and the Tall Whites know it's a ship, and Ozzy finds out eventually. It stays standing upright, as a tower, to provide all the amenities the ones who took it over need, and it lies dormant because its key is missing: Ozzy is the key. Powering it takes an incredible amount of heated plasma. In its control room, generators help him build up his power, but he also needs his golden staff: it increases his power, and its diamonds hold his charge and shine at a specific frequency that powers the ship's accelerators and boosters. The orphanage, Lebensborn, is in its basement, the bottom of the ship, hidden from the public, who don't know it exists. Lebensborn began as the ship's storage chamber, turned into a holding and containment facility to keep people from reaching out for help. Once it worked as a prison, the doctor had it put underground, out of public sight: even someone who entered the tower wouldn't know what's in the basement. The doctor set it up not to help children, but to brainwash and condition them, and its medical wing, headed by him, experiments on them. Its hidden ways in and out are known only to the staff, and to Ozzy.
- **The ship and Ozzy:** the ship recognizes Ozzy's DNA from his childhood and calls to him. Parts of the orphanage respond to him, and doors sometimes open for him. The control room is barred off and seems to call for him, and systems near it malfunction or refuse commands. Strong electrical surges flash from the top of the tower: the ship trying to reach its owner, and to tell whether the frequency it senses is his. The surges' colour is TBD.
- **Look:** the city's tallest tower: a single tall faceted crystal spire glowing ice blue `#76C1EF`, with diamond-shaped panels up its face and a ring around its base, rising above the steel-white towers around it, as in the Diamond District's daytime establishing shot. The user chose this look in place of the steel-white stepped tower with two gold-tipped spires in its night establishing shot. Its entrance doors sit at the head of the ice road. The looks of the designated entrance's hangars and of the true doors caved into the mountain are TBD. From behind, seen from far along Amethyst Path, it rises the same way, as one tall faceted crystal spire glowing ice blue with touches of pink, as in Amethyst Path's sheet. The orphanage's and the medical wing's looks are TBD.
- **Day or night:** night, for the test video. Day TBD.
- **Main light:** the ice-blue neon `#6CB5D8`, as in the Diamond District, so it's the rim light on everyone there. **Where characters stand:** on the ice-paved road in front of the tower's entrance doors.
- **Reactive surfaces:** the ice road and the steel towers, which reflect the ice-blue neon, and the gold neon `#E7BF68` at the tops.
- **Sheets:** in `locations/crystal-tower/`, with each one's prompt and settings in `prompts.txt`.
  - **Establishing shot, night:** [`crystal-tower-wide-night.jpg`](locations/crystal-tower/crystal-tower-wide-night.jpg), a wide low-angle shot from the ice road, looking up the Crystal Tower with the snowy mountain behind it, flanked by towers whose tops glow gold, with angular armoured vehicles parked on the right and a saucer-shaped aircraft crossing the sky (made with the all-in-one block, without the Characters line). It's canon for the tower's place, the neon colours, the ice road and the entrance doors. Exceptions, where the written rules here win:
    - **The tower:** steel-white, in stepped tiers ringed with framework, with two spires each tipped with a small gold light. It's a single faceted crystal spire glowing ice blue, as the user chose.
    - **Restyled by hand:** rain added as thin straight white streaks, thin line work tinted toward dark teal `#031E1C`, and the pale towers pulled down into night's mid-to-dark range. The heavier lines stay dark navy.
    - **Snow:** drifts lie on the ground and the ledges, which this entry doesn't call for.
  - **Drone view, night:** [`crystal-tower-drone-night.jpg`](locations/crystal-tower/crystal-tower-drone-night.jpg), the drone view leaving the tower: high above the road, looking down it away from the tower, whose gold-lit top sits at the bottom of the frame, with the city's towers walling both sides, vehicles parked along the road's left side, lamps with warm gold lights along both edges, and a saucer-shaped aircraft over the road. It's canon for the drone view's camera and layout. Exceptions, where the written rules here win:
    - **Towers:** dark and stone-textured. They're steel-white.
    - **Neon:** signs in pink and cyan, with garbled lettering. The Diamond District's neon is ice blue `#6CB5D8` with gold `#E7BF68` at the tops, and nothing in the city carries lettering in prompts.
    - **Tower top:** a block crown lit gold. It's the top of a single faceted crystal spire glowing ice blue.
    - **Lines and texture:** heavy lines and a gritty texture, not flat cel colour with thin tinted lines. The near-black lines were tinted toward dark teal `#031E1C` by hand, and large black areas toward navy `#09102E`.
    - **Rain:** added by hand as thin straight white streaks.
    - **Shape:** 1760×1344, not 16:9. Its 16:9 version, [`crystal-tower-drone-night-16x9.jpg`](locations/crystal-tower/crystal-tower-drone-night-16x9.jpg), is cropped around the centre to 1920×1080, keeping the aircraft and the tower's gold-lit top, and losing the far glow at the end of the road and the lower edge of the tower block.

### The Crystal Tower's control room

- **What happens there:** the room inside the Crystal Tower where Ozzy powers his ship. Its generators help him build up his heated plasma, and his golden staff's diamonds shine at the frequency that powers the ship's accelerators and boosters. Until he does, it's barred off and seems to call for him, and systems near it malfunction or refuse commands.
- **Look:** TBD.
- **Day or night:** inside, so TBD.
- **Main light:** TBD. **Where characters stand:** TBD.
- **Reactive surfaces:** TBD.

### Amethyst Path

- **What happens there:** the way behind the Crystal Tower, leading to the Forbidden Foliage on the far side of the mountain. The Tall Whites live on it and underground, and never reveal themselves. The public doesn't know it exists: only the Tall Whites and the doctor do, and Ozzy finds out later. The tower blocks the mountain's passages, so it's reached only by the two secret ways through the mountain: the Tall Whites' underground tunnel and the tower's true doors, its secret entrance caved into the mountain.
- **Look:** as in its sheet: a wide road of ice tiles running between glass towers with ice-blue neon strips, with wind-blown ice drifts banked along both sides. Far down it, the Crystal Tower's back rises as a tall faceted crystal spire glowing ice blue with touches of pink. Saucer-shaped aircraft hang in a violet night sky, some casting beams of light.
- **Day or night:** night. Day TBD.
- **Main light:** TBD. In its sheet it's the ice-blue glow of the Crystal Tower and the towers' neon. **Where characters stand:** on the open ice road in the foreground.
- **Reactive surfaces:** the ice-tile road, which mirrors the neon and the tower, and the glass towers.
- **Sheets:** in `locations/amethyst-path/`, with each one's prompt and settings in `prompts.txt`.
  - **Wide view, night:** [`amethyst-path-wide-night.jpg`](locations/amethyst-path/amethyst-path-wide-night.jpg), at ground level on the path near the far side of the mountain, looking back along it at the Crystal Tower from behind. It's canon for Amethyst Path's look and for the back of the Crystal Tower. Exceptions, where the written rules here win:
    - **Rain:** added by hand as thin straight white streaks.
    - **Clouds:** loose painterly clouds, which the Day line has and the Night line doesn't.

### The Tall Whites' underground facility

- **What happens there:** the Tall Whites built it not long after the ship crashed, for illegal space trade. It's where the doctor, working for himself behind the Tall Whites' backs, trades trafficked children from the orphanage and intergalactic secrets for their technology, and for the freedom to run the ship under their protection. All the Tall Whites know about the trafficking.
- **Where it is:** on the far side of the mountain, before the Forbidden Foliage.
- **Look:** TBD.
- **Day or night:** underground, so TBD.
- **Main light:** TBD. **Where characters stand:** TBD.
- **Reactive surfaces:** TBD.

### The sky structures

- **What happens there:** small structures held in the sky by an advanced anti-gravity system, with an anti-magnetic shield against the mountain. Only the wealthiest are allowed up this high.
- **Look:** TBD.
- **Day or night:** TBD.
- **Main light:** TBD. **Where characters stand:** TBD.
- **Reactive surfaces:** TBD.

### The Forbidden Foliage

- **What happens there:** the wilds on the far side of the mountain, a heaven on earth, being colonized by the Tall Whites, a species of alien: tall, pale, emotionless corporate businessmen, who aren't villains as a species (see [STORY.md](STORY.md)). Amethyst Path leads to it. Like the path, it's unknown to the public: only the Tall Whites and the doctor know of it, and Ozzy finds out later.
- **Look:** lush foliage and exotic wildlife, from dinosaurs to cryptids, with the freshest springs and the most vibrant fruit.
- **Day or night:** TBD.
- **Main light:** TBD. **Where characters stand:** TBD.
- **Reactive surfaces:** TBD.
- **Style note:** the environment rules ask for slightly desaturated colour, so how vibrant this side gets is still to decide.

## Night environment block

Reference copy of the night rules. Prompts use the all-in-one block, which already contains them.

```
Night environment layer, same style. Line work: thin lines in dark teal #031E1C, never black, light hatching. Values: stay in the mid-to-dark range; pure black and pure white belong to characters only. Palette: navy #09102E, deep teal #084558, cobalt #2F91DB, violet #5251B9, slightly desaturated; hot accents only on signs and lamps. Composition: dense detail at the edges, a calm open area where the character stands. Depth: three layers, haze increasing with distance. Lighting: one main light source whose colour becomes the character's rim light. Reactive surfaces: wet ground, glass, neon signs, haze, rain. Rain: thin straight white streaks; wet pavement mirrors neon as long vertical colour smears. Camera: always matches the character shot's angle and lens.
```

Just after the rain, as in the [Night line after the rain](#night-line-after-the-rain), the rain has stopped and only the wet pavement mirroring the neon stays.

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

## Sound and music

Toonville's sound is part of its style, as much as the art. There's no audio prompt block yet. These are the rules every scene's sound follows.

- **Music:** futuristic hip-hop over a heavy bass beat, with a little EDM to carry the future. It keeps a grimy, underworld edge, even in the nicest places. Some scenes play a song to set the mood, or have a character singing along to it.
- **Sound effects:** strong and immersive, appropriate, never over the top. Hits and kicks land at different weights. Lasers and static pop.
- **Ambience:** the sound of the place carries the quiet moments, like wind, or traffic while a character sits before a monologue.
- **For every viewer:** the sound carries the story on its own, so even a blind viewer can follow and enjoy it.
- **Music rights:** TBD. A released song needs a licence for both the recording and the song itself before it goes in a video. Without one, platforms can mute or remove the video.

## About the hex codes

Every hex code was sampled from pixels, not estimated. Style colours come from the style reference images. Character colours come from each character's reference photos, converted from the phone's Display P3 colour space to sRGB first. The exceptions are Ozzy's locs, which were sampled from his first reference sheet, because that sheet's all-indigo locs are canon, and the doctor's skin `#EAD8C4`, accent `#CC4747` and suit `#5F6352`, which the user picked. The doctor's other colours were sampled from the palette swatches on his approved expanded sheet. The style references and photos are not stored in this repo. Finished character sheets are stored in `characters/<name>/`, one per outfit and hairstyle, named `<name>-<outfit>-<hairstyle>.jpg`.

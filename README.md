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
| Scenes and story shots | All-in-one block | Keep only the Night or Day line. Drop the "At story peaks" sentence for quiet scenes. For a close-up, over-the-shoulder, POV, standoff or screen shot, swap the Camera line for that shot's line from [Camera lines](#camera-lines). |
| Character sheets | Character sheet block | Fill the description, expressions and hex slots. |
| Turnaround sheets with no expression row | Turnaround sheet block | Fill the description and hex slots. |
| Headshot turnaround sheets | Headshot sheet block | Fill the description and hex slots. |
| Single medium shots on a plain background | Medium shot block | Fill the description, pose and expression, and hex slots. |
| Single action medium shots on a plain background, with a glowing power | Action medium shot block | Fill the description, pose and expression, glow source and hex slots. |
| Object sheets for a character's objects | Object sheet block | Fill the object description, character name and hex slots. |
| Environments and props with no character | All-in-one block | Delete the Characters line. Keep only the Night or Day line. For a plate that matches a close-up, over-the-shoulder, POV, standoff or screen shot, swap the Camera line for that shot's line from [Camera lines](#camera-lines). |
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
- **16:9 versions of the saved images:** the saved images that weren't 16:9 each have a 1920×1080 version saved beside them, named `<name>-16x9.jpg`: the doctor's two sheets, the balaclava and governor chip object sheets and the golden staff's design reference (from 3:2), the hair-up medium shot, the front view and the three close-ups (from portrait), and the Crystal Tower's drone view. Sheets are padded out at the sides on flat grey (his design sheet on its own navy, with the turnaround's ground line carried across), and the drone view is cropped around its centre, keeping the aircraft and the tower's gold-lit top. Every other saved image is already 16:9 and is scaled to 1920×1080 when it goes in a video. The size chart is only a reference, and stays as it is.

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
| _TBD_ | _TBD_ | _TBD_ | _TBD_ | `#______` |
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

Oswald, known as Ozzy (`CHAR_001`): a young man of 19. "Money" is an old name for him from earlier work, not a separate character. Tone: understated and grounded, with realistic proportions, a calm heavy-lidded gaze and restrained detail.

Every sheet below except the governor chip's object sheet shows the "$" tattoo on his right hand, or leaves it out, and none of them shows the governor chip. Both belong on his left hand: the "$" on the web between the thumb and index finger, and the chip on the inside of the wrist. The written rules here win.

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
- **Powers:** he channels his energy into electric indigo `#6F00FF` plasma beams, fired from his hands or from the golden staff's diamond tip. The plasma is a glowing source, so it gets bloom. While he fires it, it's the main light on him: it becomes his rim light and lights the scene around him. His heated plasma is also the only thing that can power his ship, the Crystal Tower. He was born with these powers: he thinks they're electricity, but he really ionizes the gas in the air into plasma. The smaller crackle he takes for electricity looks light blue, with its hex code still TBD, while his plasma stays electric indigo. He charges from light, such as neon, the city's lights, starry nights and, above all, the sun, and stores the charge. The small star remnants he collects glow; their colour, and the look of the Star Seeds he makes from them, are TBD. How his powers work is in [STORY.md](STORY.md).
- **Governor chip:** a cybernetic implant the doctor set into the inside of his left wrist shortly after the crash of his ship, the Crystal Tower, to keep him from reaching his power too quickly and to stop the ship from recognizing him: it holds down his output, drains him faster and scrambles the frequency the ship knows him by. It's an implant, never a handheld device, and it's only shown out of his wrist after he rips it out. It malfunctions, now and then spitting out scrambled light frequencies, which come out as glitchy flickers of his electric indigo `#6F00FF` that show through the skin around it. It sits flush with the skin, about the size of his "$" tattoo, on the same hand but not touching it. Its look is in his objects list above, and it's in his character style block. None of his sheets shows it. His story is in [STORY.md](STORY.md).
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

## Restyled images

On 2026-11-06 every saved character sheet, object sheet and location sheet was brought back toward the master style by hand, without regenerating anything, so every hand fix on them stays. The LoRA training set (not used) was left as it was. The golden staff's design reference became canon afterwards and was restyled the same way, with its panel backgrounds brought to `#808080`.

- **Character and object sheets:** one colour correction per sheet, fitted to its background, ink, skin and, where they show, his locs or balaclava navy, his jacket, the gold and his blues, so the cast is removed and they land on their hex codes. The background region is now exactly flat mid grey `#808080`, the darkest lines are ink `#030308`, and sheets that had almost no grain got fine film grain.
- **Dr. Heyes:** his warm tan skin recoloured to pale ivory `#EAD8C4` on both sheets, with the suit, hair, background and ink corrected on his turnaround. His expanded sheet keeps its dark design-sheet panels.
- **Night locations:** rain added as thin straight white streaks, thin line work tinted toward dark teal `#031E1C`, large black areas toward navy `#09102E`, and pale areas pulled into night's mid-to-dark range, with neon and lamps kept bright.
- **What a hand fix can't change:** line weight, hatching and how rendered a sheet looks. Those differences stay listed in each sheet's entry, and only a new generation with the full style block fixes them.

## Size chart

[`characters/size-chart.jpg`](characters/size-chart.jpg) keeps every character's height and proportions consistent when they're placed into film. It shows each main character in front and side views on one ground line, against a feet-and-inches ruler, a centimetre ruler, and head-unit lines and bars for each character. It holds Ozzy and Dr. Heyes.

![Toonville size chart: Ozzy at 6'2" (188 cm) barefoot, drawn in his sneakers in front and side views with his locs down and in a top knot, and Dr. Heyes at 6'5" (196 cm) barefoot, drawn in his boots in front and side views, on one ground line, with feet, centimetre and head-unit rulers](characters/size-chart.jpg)

- **How heights are measured:** from the ground to the top of the head, barefoot, with the hair down. Characters are drawn on the chart in their usual shoes, standing on the ground line, so the sole each pair adds is noted on the chart: about 2.5 cm for Ozzy's sneakers, and about 4 cm for the doctor's boots, measured at the heel on his turnaround. Anything that sits above the head, like Ozzy's top knot, gets its own dashed line.
- **How the chart is made:** from each character's canon turnaround sheets, not generated, so the art and proportions stay exact. Each sheet is scaled so the character's height in their shoes, their barefoot height plus their soles, matches the rulers, at 9 px per cm. A sheet with a different hairstyle is scaled to the same eye height. The doctor's turnaround is smaller than Ozzy's sheets, so his figures are scaled up about 1.8 times and read a little softer.
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

Toonville's world is Lepus, a frozen island city deep in the ice, built against Crystal Mountain, with a lush wild land on the mountain's far side. The story behind each place is in [STORY.md](STORY.md). The entries below hold everything known so far. Anything marked TBD is decided before that place's sheets are made, and only the Crystal Tower and Amethyst Path have sheets so far.

### Lepus, the frozen island city

These are the things every part of the city shares.

- **What it is:** Lepus, a city deep in the ice, resting against a large mountain, Crystal Mountain. The island is a frozen desert. The mood is cold, lifted by vibrant neon and the sun's rare glow: the sun appears only once every six months. It grew up in the 19 years since the ship crashed, established quickly with the Tall Whites' technology and the remaining survivors of the royal fleet's main ship.
- **Layout:** three parts. The Diamond District, the wealthy part with its towers, is at the foot of the mountain, where the Crystal Tower is lodged. Sunnymead, the rejected part, is far from it, and Midtown, for the common folk, the working class, separates the two. As far as the public knows, the city begins at the Crystal Tower and runs onward from it: they don't know about Amethyst Path or the Forbidden Foliage behind it.
- **The mountain:** the Crystal Tower blocks its passages, and there's no way around it. There are only two ways through the mountain, and the public never reaches either: the Tall Whites' secret underground tunnel beside the tower, a hidden route between the city and the far side, which can be opened by thought, or by an incredibly fast hover bike with a Tall White's help; and the tower's secret entrance, the ship's true doors and real entrance, caved into the mountain, where no one goes, because of the Tall Whites. The hover bike's look is TBD.
- **Streets:** paved in ice. At night they catch shine from the lights. When the sun is out, it bounces off them, and at certain times the whole city takes on a golden glow.
- **Weather at night:** rain, as the Night line has it, falling in thin white streaks over the ice streets, which mirror the neon.
- **Technology:** advanced. Cybernetic limbs and cybernetic eyes are a common sight. Vehicles are angular, and aircraft look like what we'd call UFOs.
- **Day or night:** both.
- **Main light:** neon at night, in colours that differ from area to area. By day, the sun when it's out, once every six months. On days without the sun, the natural ice and the daylight light the city whenever the neon is off.
- **Reactive surfaces:** the ice streets and the towers' reflective neon.
- **Style note:** the Day line asks for a high sun, which fits the days the sun is out. The golden glow, and days without the sun, aren't covered by the style yet.

### The Diamond District

- **What happens there:** the rich, safe part of the city, away from the mayhem and common crime. It's at the foot of the mountain, around the Crystal Tower, far from Sunnymead, with Midtown between them.
- **Look:** beautiful, rich, modern steel-white towers with reflective neon lights, over ice-paved streets.
- **Day or night:** both.
- **Main light:** at night, ice-blue neon, reflecting off the steel buildings and the ice roads, with hints of gold neon at the very tops of the buildings: ice blue `#6CB5D8` and gold `#E7BF68`, sampled from the Crystal Tower's establishing shot. By day, the sun. **Where characters stand:** TBD.
- **Reactive surfaces:** the ice roads and the steel towers, which reflect the ice-blue neon, and the gold neon at the tops.

### Midtown

- **What happens there:** the part of the city for its common folk, the working class. It separates the Diamond District, the wealthy part, from Sunnymead, the rejected part. The Chase Tower stands there, and its nightlife is where Wave, the intergalactic patrol officer, moonlights as a DJ (see [STORY.md](STORY.md)).
- **Look:** TBD.
- **Day or night:** night, for the test video. Day TBD.
- **Main light:** TBD. **Where characters stand:** TBD.
- **Reactive surfaces:** TBD.

### The Midtown alley

- **What happens there:** an alley in Midtown that Ozzy walks down, unseen, in the test video: the audience hears him and sees his shadow on the ground or a building, then a low sweeping shot comes down to his feet (see [STORY.md](STORY.md)).
- **Look:** TBD.
- **Day or night:** night.
- **Main light:** TBD. **Where characters stand:** TBD.
- **Reactive surfaces:** TBD.

### The Chase Tower

- **What happens there:** a tall residential building in Midtown.
- **Look:** TBD.
- **Day or night:** TBD.
- **Main light:** TBD. **Where characters stand:** TBD.
- **Reactive surfaces:** TBD.

### Sunnymead

- **What happens there:** the rejected part of the city, its rough side, where the mayhem and common crime are. It's far from the Diamond District, with Midtown between them.
- **Look:** torn-down buildings in urban ruins, with occasional neon graffiti over the torn ice towers.
- **Day or night:** TBD.
- **Main light:** TBD. **Where characters stand:** TBD.
- **Reactive surfaces:** the neon graffiti. More TBD.

### The Crystal Tower and the orphanage

- **What happens there:** the Crystal Tower, the tallest tower in the city, is lodged at the foot of the mountain, in the Diamond District, the wealthy part of the city, among its towers. It blocks the mountain's passages, and there's no way around the mountain. There are only two ways through the mountain, and the public never reaches either: the Tall Whites' secret underground tunnel beside the tower, and the tower's secret entrance, the ship's true doors and real entrance, caved into the mountain (see the frozen island city above). The public knows only the tower's designated entrance, for everyone else and for visitors, which is equipped with hangars. The visitors come on business or for intergalactic travel, and even the businessmen don't know what they're funding. No one goes to the true doors, because of the Tall Whites. Visitors to the planet push straight on into the city and its amenities: as far as anyone knows, the city begins at the tower and runs onward from it. There are parts of the tower the public never sees or knows about. It's really an intergalactic spaceship, and it's Ozzy's: a biological vessel that incubates him and makes him stronger, and provides planetary travel at record speeds, with no expense spared for the prince. It's the ship the doctor, the main antagonist, took over from a royal convoy before it hit the mountain and slid down it, coming to rest upright as the tower seen today (see [STORY.md](STORY.md)). Only the doctor and the Tall Whites know it's a ship, and Ozzy finds out eventually. It stays standing upright, as a tower, to provide all the amenities the ones who took it over need, and it lies dormant because its key is missing: Ozzy is the key. Powering it takes an incredible amount of heated plasma. In its control room, generators help him build up his power, but he also needs his golden staff: it increases his power, and its diamonds hold his charge and shine at a specific frequency that powers the ship's accelerators and boosters. The orphanage, Lebensborn, is in its basement, the bottom of the ship, hidden from the public, who don't know it exists. Lebensborn began as the ship's storage chamber, turned into a holding and containment facility to keep people from reaching out for help. Once it worked as a prison, the doctor had it put underground, out of public sight: even someone who entered the tower wouldn't know what's in the basement. The doctor set it up not to help children, but to brainwash and condition them, and its medical wing, headed by him, experiments on them. Its hidden ways in and out are known only to the staff, and to Ozzy.
- **The ship and Ozzy:** the ship recognizes Ozzy's DNA from his childhood and calls to him. Parts of the orphanage respond to him, and doors sometimes open for him. The control room is barred off and seems to call for him, and systems near it malfunction or refuse commands. Strong electrical surges flash from the top of the tower: the ship trying to reach its owner, and to tell whether the frequency it senses is his. The surges' colour is TBD.
- **Look:** the city's tallest tower, steel-white like the towers around it, in stepped tiers ringed with framework, with ice-blue neon running up its face and two spires at its top, each tipped with a small gold light. Its entrance doors sit at the head of the ice road. The looks of the designated entrance's hangars and of the true doors caved into the mountain are TBD. From behind, seen from far along Amethyst Path, it rises as one tall faceted crystal spire glowing ice blue with touches of pink, as in Amethyst Path's sheet. The orphanage's and the medical wing's looks are TBD.
- **Day or night:** night, for the test video. Day TBD.
- **Main light:** the ice-blue neon `#6CB5D8`, as in the Diamond District, so it's the rim light on everyone there. **Where characters stand:** on the ice-paved road in front of the tower's entrance doors.
- **Reactive surfaces:** the ice road and the steel towers, which reflect the ice-blue neon, and the gold neon `#E7BF68` at the tops.
- **Sheets:** in `locations/crystal-tower/`, with each one's prompt and settings in `prompts.txt`.
  - **Establishing shot, night:** [`crystal-tower-wide-night.jpg`](locations/crystal-tower/crystal-tower-wide-night.jpg), a wide low-angle shot from the ice road, looking up the Crystal Tower with the snowy mountain behind it, flanked by towers whose tops glow gold, with angular armoured vehicles parked on the right and a saucer-shaped aircraft crossing the sky (made with the all-in-one block, without the Characters line). It's canon for the tower's look and place, the neon colours, the ice road and the entrance doors. Exceptions, where the written rules here win:
    - **Restyled by hand:** rain added as thin straight white streaks, thin line work tinted toward dark teal `#031E1C`, and the pale towers pulled down into night's mid-to-dark range. The heavier lines stay dark navy.
    - **Snow:** drifts lie on the ground and the ledges, which this entry doesn't call for.
  - **Drone view, night:** [`crystal-tower-drone-night.jpg`](locations/crystal-tower/crystal-tower-drone-night.jpg), the drone view leaving the tower: high above the road, looking down it away from the tower, whose gold-lit top sits at the bottom of the frame, with the city's towers walling both sides, vehicles parked along the road's left side, lamps with warm gold lights along both edges, and a saucer-shaped aircraft over the road. It's canon for the drone view's camera and layout. Exceptions, where the written rules here win:
    - **Towers:** dark and stone-textured. They're steel-white.
    - **Neon:** signs in pink and cyan, with garbled lettering. The Diamond District's neon is ice blue `#6CB5D8` with gold `#E7BF68` at the tops, and nothing in the city carries lettering in prompts.
    - **Tower top:** a block crown lit gold, not the two gold-tipped spires of the establishing shot.
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

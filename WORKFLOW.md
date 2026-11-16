# Toonville workflow: from idea to finished clips

This workflow takes Toonville from an idea through approved character, prop and location assets, storyboards, stills and finished 30-second video clips. Each clip follows the README's 30-second, 1280×720, 16:9, 60 fps specification. Longer installments are assembled from multiple clips and scenes; do not compress the long-form story into one clip.

Work through it top to bottom, because each stage needs the one before it. Tick every box: a character, object, location or shot isn't done until all of its boxes are ticked.

[README.md](README.md) is the single source of truth for the style. Every prompt is built in its order: the subject, then each character's style block, then the job's style block, word for word. No prompt goes to OpenArt, Higgsfield or any other generator until it has been shown and given the go-ahead.

## 1. Setup

Do this once, and again whenever something changes.

- [ ] **Base model:** one base model chosen for the whole series and recorded in the README, so every still comes from the same model.
- [ ] **Settings:** fixed and recorded in the README, and the same for every still: sampler, steps, guidance (CFG) and clip skip, where the generator shows them.
- [ ] **Video spec:** every video is 30 seconds long, 720p (1280×720), 16:9, at 60 fps (1,800 frames total), as in the README's [Video spec](README.md#video-spec).
- [ ] **Frame size:** every story still, keyframe, storyboard frame and plate is 16:9. Generate at the base model's 16:9 size and upscale every still the same way to 1920×1080. Sheets keep their own sizes as references, but any sheet that appears in a video gets a 16:9 version at 1920×1080. Screen shots (live streams and video calls) are generated at 9:16 and placed in the 16:9 frame in editing.
- [ ] **Folders and names:** set up as in [Files and names](#files-and-names).

## 2. Each character

Do this for every main character before they appear in any shot.

- [ ] **Profile:** name, age, height, skin tone and accent colour, hair, face, tattoos and marks, outfits. Hex codes are sampled from reference images, not guessed. The profile goes in the character table and their README entry.
- [ ] **Style blocks:** their character style block, a sheet note for anything that must stay on one side, and a short backup, all in the README.
- [ ] **Turnaround sheets:** one for each outfit and hairstyle (turnaround sheet block), with front, three-quarter, side and back views. A character who carries a weapon gets one with it and one without.
- [ ] **Headshot sheets:** one for each hairstyle (headshot sheet block).
- [ ] **Expression close-ups:** their default expressions, turned so any one-sided feature faces the camera.
- [ ] **Object sheets:** one for each object that belongs to them (step 3).
- [ ] **Check and save:** every sheet checked against their README entry, with known differences listed, and saved to `characters/<name>/`.
- [ ] **Size chart:** added at their height.
- [ ] **Reference sheets:** their best canon sheets picked out to attach as image references, where the generator allows it. This project doesn't use LoRAs for now.

## 3. Each character's objects

These are the things a character carries, wears, uses or is known by, such as a phone, a bag, a weapon or a car. Props that stay in one place belong to that location instead (step 4).

- [ ] **Object list in their README entry**, with each object's:
  - what it is and what it's made of
  - colours as hex codes
  - real size in cm
  - where it's carried or worn, and in which hand
- [ ] **Object sheets:** one for each object (object sheet block), with front, side, back and top views plus one view showing the owner's scale relationship to it. The owner holds handheld objects; for vehicles or objects too large to hold, show the owner seated on or using the object instead, with the object sheet block's vehicle line in place of the hand view.
- [ ] **Check and save:** each sheet checked against the list, with known differences listed, and saved to `characters/<name>/objects/<name>-<object>.jpg`.
- [ ] **Approval and canon record:** only the user's final approval makes the design canon. Record the approved specifications, asset ID, sheet status and any known drawing differences in the README; the written character and object rules remain authoritative where a sheet has a visible error.

## 4. Each location

- [ ] **Entry in the README's Locations section:**
  - its name and what happens there
  - day, night or both
  - its main light source and that light's colour, which becomes every character's rim light there
  - where characters stand (the calm open area)
  - its reactive surfaces: signs, glass, puddles, banners, leaves
- [ ] **Location sheet:** an establishing wide shot, the reverse angle, and each camera position its shots will use, low or aerial and wide angle as the style asks. It uses the all-in-one block without the Characters line, keeping only the Night or Day line, or the Night line after the rain for a place shown just after the rain, with a Day set and a Night set if both are used.
- [ ] **Scale:** a doorway or another object of known size drawn in, so characters can be placed at their size-chart heights.
- [ ] **Reactive states:** for each scene there, the state the story moment calls for (quiet, tension or climax), using the accent colour of the character the scene reacts to.
- [ ] **Save:** saved to `locations/<location>/`, with known differences listed.

### Backdrop approval gate

- [ ] **Complete the backdrop aesthetic before storyboarding:** do not write a storyboard or shot list until the visual design of every location needed for the planned story is established, its reference material has been reviewed, its environment and lighting rules are recorded in README.md, and its required location sheets are complete and approved. If a location still depends on a reference the user has not supplied, pause that location's design and do not treat the backdrop as complete.
- [ ] **User approval:** the user confirms that the full backdrop aesthetic is complete before storyboarding begins.

## 5. Story and shot list

- [ ] **Script or beat outline,** split into scenes, in [STORY.md](STORY.md).
- [ ] **Each scene:**
  - its location, and day or night
  - the characters, with their outfits and hairstyles
  - the objects in play, and each weapon's state: for Ozzy's golden staff, retracted at his left hip, extended in his hand, or absent
  - its story moment (quiet, tension or climax) from the README's reactive environment table, and the character the scene reacts to, whose accent the location takes on
  - the location's reactive state for that moment, inside and outside where the scene uses both, from the location's README entry
- [ ] **Shot list:** every shot numbered, with:
  - the characters in it
  - framing (wide, medium or close-up)
  - camera angle and lens, with its camera line from the README's Camera lines
  - which way each character faces, keeping one-sided features toward the camera where the story allows
  - each weapon's state
  - the action
  - which doors are open: a door that opens for characters, like Orion's sliding doors, is open only while someone goes through it
  - the keyframes it needs (start, key poses, end)
  - its length in seconds, with every shot together making the video's 30 seconds
- [ ] **Storyboard:** a rough 16:9 thumbnail for every shot.
- [ ] **Continuity:** checked across every scene:
  - characters stay on their side of the line of action
  - eyelines match
  - outfits, hair and objects in hand carry from shot to shot
  - weather and light stay steady through the scene

## 6. Each shot's stills

- [ ] **Background plate first, then LOCK:** generate the location from the exact shot camera with no characters in the intended reactive state, using the all-in-one block without the Characters line. After user approval, preserve the exact plate file as read-only. Each camera position has its own locked plate; never use a different view.
- [ ] **PLATE LOCK — mandatory for all keyframes:** no background regeneration, inpainting, repainting, mural/graffiti alteration, relighting, cropping, reframing or replacement. Do not ask an image generator to generate the finished full scene or “preserve” an approved plate. Generate or edit **only the character**, then **directly composite** the character over the exact approved plate. All background pixels outside the character alpha mask must remain unchanged. No shadows, effects or reflections outside that mask without a separate user-approved plate revision.
- [ ] **Verify plate integrity:** compare each finished keyframe with its assigned approved source plate **pixel-for-pixel outside the character's alpha mask**. Reject any output with even one changed pixel; fix the composite, never the locked plate. Record the plate used and the result of the comparison.
- [ ] **Lossless, at the finished size:** the locked plate and every keyframe are PNGs, and the character is composited onto the 1920×1080 plate itself. A composite made at a generator's size and then scaled changes the plate's pixels along the character's edge.
- [ ] **Shadows and reflections:** when a shot needs a character's shadow or reflection on the location, it gets a plate revision that has them, approved by the user before it's used.
- [ ] **Fix each element before compositing:** generators often put one-sided marks on the wrong side, or on the back of a hand, even when the prompt says otherwise. Check every character element against their README entry and fix it in the element, by painting the mark out with the colour around it, before it goes on the plate. Never fix it on the plate.
- [ ] **Size and depth from the plate:** scale each figure from the plate's perspective, measured from objects of known size in it, such as a 210 cm door or a bollard, so heights match the size chart. Figures standing at the same depth keep the chart's height relationship.
- [ ] **In front stays in front:** anything on the plate nearer the camera than a character, like steam rising from a vent, stays in front of them. Place the character so they don't cover it; if they must, that's a plate revision.
- [ ] **Shared cameras share a plate:** keyframes from the same camera position use the same locked plate, so nothing in the background changes between them.
- [ ] **Finished full frame (pixel-preserving composite, NOT full-scene regeneration):**
  - **Prompt:** for character generation or edits, show the user the subject, every character's exact README style block and the job's full style block, including the verbatim master style line, before sending for a new go-ahead. A character made on their own uses the README's [compositing block](README.md#compositing-block), with its light and camera filled from the plate, and something that glows and isn't a character, like the comet, uses its [glowing-element block](README.md#glowing-element-block).
  - **References:** attach canon character sheets and approved poses when supported, but do not use a previous whole-scene keyframe as the background.
  - **Plate:** load the **exact approved camera-position plate as the compositing base**, never as a soft visual reference for a generative background.
  - **Delivery:** show one finished **1920×1080, 16:9** image with the character in the unchanged background. Character-only cutouts remain internal production assets.
- [ ] **Show before generating:** every prompt shown, saved and priced in credits before it's sent. Each image's prompt, seed and settings are recorded next to it.
- [ ] **Keyframes:** each uses its **assigned locked plate**. Within the same camera position, only the character pose, expression and placement may change. For camera moves with separate views, switch to the separately approved plate for each camera position. An approved older frame with a visual exception is not permission to repeat the mistake or modify later plates.
- [ ] **Canon check on every still:**
  - [ ] **Plate lock passes:** all pixels outside the character alpha mask match the approved plate exactly for this camera position; murals, signage, buildings, lighting, weather, pavement and reflections are untouched
  - [ ] each character matches their README entry and sheets: one-sided features stay on the character's anatomical left or right as written, never mirrored to suit the frame; tattoos, implants, insignia and awards remain in their approved anatomical positions; hair, outfit, and colours match their hex codes
  - [ ] objects match their object sheets, and each weapon is in the state the shot list records
  - [ ] heights match the size chart
  - [ ] characters are in thick black ink, and the environment is in thin tinted lines, never black
  - [ ] characters own the pure black, the brightest highlights and their accent colour
  - [ ] the location's main light is the characters' rim light, from the same direction in every still of the scene
  - [ ] the reactive state matches the story moment
- [ ] **Fix or redo:** a still that fails is fixed locally or regenerated, with any new prompt shown first, then checked again.
- [ ] **Save:** saved under the shot's name, together with its plate.

## 7. Ready for animation

- [ ] Every shot in the shot list has all of its keyframes.
- [ ] Every still has the same frame size: 16:9 at 1920×1080.
- [ ] Every clip runs at 1280×720 and 60 fps (1,800 frames per 30-second clip), and the cut runs 30 seconds.
- [ ] Every shot's background plate is kept next to its stills, so characters can later be separated and animated over the background.
- [ ] Neighbouring shots cut together: screen direction, eyelines, light and reactive state carry across the cut.
- [ ] A final pass through every scene in order, with each character compared side by side against their sheets.

## 8. Video generation and sound

A storyboard is a continuity and timing map, not a substitute for the character, prop and location references. A multi-panel storyboard may communicate shot order and composition, but generate or supply separate clean references for the character, important props and approved location. Do not expect a video model to reproduce tiny panel details as exact frames.

- [ ] **Storyboard plan:** assign every shot a number, start/end action, camera movement, framing, duration and transition. For a 30-second clip, all shot durations add up to exactly 30 seconds. Use a multi-panel overview as a guide; create separate 16:9 keyframes for any shot that needs precise control.
- [ ] **Reference pack:** attach the approved character turnaround/pose, object sheet and location plate separately wherever the chosen video platform supports them. Keep the storyboard as the sequence guide. Do not assume every platform exposes the same reference slots or accepts the same number of images.
- [ ] **Video prompt:** write each shot's action and camera movement clearly, then include the relevant character style block and the README's [video block](README.md#video-block). Preserve the established master style line and the video block word for word. Do not shorten them to fit a video tool without first preparing and showing an approved short backup.
- [ ] **Keyframes as start and end frames:** each clip runs from its shot's start keyframe to its end keyframe, on a model that takes both, so it begins and ends on approved, plate-locked frames. A shot with more keyframes than the model takes is made as one clip per pair, cut together to the shot's length. A clip longer than the shot, because of the model's shortest length, is trimmed in editing.
- [ ] **Credits first:** check the tool's balance and each clip's cost before showing its prompt, so a go-ahead isn't held up by an empty account.
- [ ] **Check each clip against its frames:** a video model redraws every frame, so a clip can't pass the plate lock's pixel check. Compare its first and last frames with its keyframes, and the frames between for drift: murals, signs and lettering, one-sided marks, heights and the location.
- [ ] **Conform to 60 fps:** once a clip passes that check, interpolate it to 60 fps at 1280×720, as in the README's [Video spec](README.md#video-spec), then check the in-between frames, above all on fast moves, for smeared or doubled ink lines, morphing shapes and blurred flat colour. A clip that fails isn't used until it's fixed.
- [ ] **Generation platform:** record the actual platform, model/version, mode, reference inputs, prompt, duration, aspect ratio, resolution, frame rate, seed (if available), settings and credit cost. Platform-specific upload instructions belong in the project notes only after the platform is identified; do not assume Seedance's interface is the same across providers.
- [ ] **Shot review:** review motion, anatomy, screen direction, object state, lighting, location continuity, and start/end frame stability. Reject or repair any shot that mirrors one-sided tattoos/implants, changes the prop design, invents a new location, or breaks the approved action.
- [ ] **Sound pass:** plan dialogue, footsteps, movement, impacts, machinery, ambience and music alongside the picture. Sound must communicate essential story information even to a viewer who cannot see the screen. Keep sound cues synchronized with visible actions; do not rely on visuals alone for a critical beat.
- [ ] **Edit and conform:** assemble the approved shots to exactly 30 seconds, conform to 1280×720 at 60 fps, and check transitions, audio levels, ambience continuity and the final mix.
- [ ] **Final approval:** show the finished clip for user review. Only explicit approval makes it final canon. Record its clip ID/path, prompt and settings, approved status, and any known deviations in the project inventory.

## Current production checkpoint — 2026-11-16

| Production asset | Status |
| --- | --- |
| C01 Orion loading-bay control-box close-up background plate | **User-approved canon 2026-11-16 as generated**, including a **round caged amber light fixture** that differs from previously approved wide bay plates. Exact original 1672×941 retained; separate resized 1920×1080 plate prepared and locked for C01 character compositing. **Camera-specific exception** only; earlier wide plates unchanged. Conversation files: `Toonville_C01_ControlPanel_Canon_Original.png` and `Toonville_C01_ControlPanel_Canon_1920x1080.png`; still need GitLab backup. Ozzy's reaching pose and K01 composite are separately approved; K02 corrected element/composite, animation and audio remain pending. |
| C01 Ozzy reaching-right-hand character element | **User-approved 2026-11-16**, source `ozzy_reaching_for_the_switch.png`; 1672×941. Right bare hand extended toward camera-left; masked main outfit with no staff; left tattoo and governor chip hidden, never moved. Approval is for the single pose/source image, not a redesign of character canon. Source image remains in conversation assets, pending GitLab backup. |
| C01 K01 first composited keyframe | **User-approved CANON 2026-11-16**, `Toonville_C01_K01_Canon_1920x1080.png` (1920×1080, SHA-256 `63a479e51fe9bb357781083356ecfb4b7e558f089417472220c6fd7710b0bc5d`); original draft remains unchanged and identical in content. Right fingertip reaches the existing orange-lit control switch. **Plate lock passed: zero changes outside character alpha mask.** Exact keyframe now locked; **C01 K02, animation and audio not approved**. Binary is backed up as a conversation file, **not yet uploaded to GitLab**. |
| Current style & video format | **README already records approved** `grit-shaded line intensity` in the master 90s-cel-anime style (related to user reference `--sref 10`); finished video target **30 seconds, 720p (1280×720), 16:9, 60 fps** (1,800 frames), as the user set on 2026-11-16; stills and keyframes stay at 1920×1080. Do not revert to older 24/30-fps values; earlier finished assets stay untouched. |
| C01 K02 first generated whole-scene attempt | **Rejected, not canon:** `a_detailed_sharp_high_contrast_90s_style_cel_ani.png` enlarged Ozzy and regenerated the locked electrical-cabinet/shutter environment. Do not use it as a source plate or approved K02 composite. |
| C01 K02 correction character element | **Individually user-approved character pose**, `ozzy_s_precise_pointing_gesture.png` (1672×941, SHA-256 `2591dd247d6c1da709ddf48a9adeadd4ac845ec2b20896c878ed4bb20e31cb9e`). Anatomical RIGHT bare index finger extended toward camera-left; LEFT hand tattoo and governor chip hidden. This approval does **not** approve any full keyframe, motion or sound. |
| C01 K02 plate-locked composite — approved CANON | **User-approved as generated 2026-11-16**, locked `Toonville_C01_K02_Canon_1920x1080.png` (1920×1080), byte-for-byte identical to prior `Toonville_C01_K02_Composite_Draft_1920x1080.png`; SHA-256 `8020467116aabc9f123ec06c15559a3d7d913e579636b650838814ab64e15e6d`. Non-generative character-only composite onto exact C01 locked background at K01's registered scale. **Plate check passed: zero modified pixels outside K02 character alpha mask.** User accepted the fingertip beside/partly on the lower rocker without a clearly depressed switch. **Lock K02 pixels; K01 and all earlier approved plates unchanged. Animation/audio and C02+ still await separate approval.** Binary remains conversation asset, not yet GitLab-backed up. |
| C01 animation prompt, K01 → K02 | **User approved the complete prompt 2026-11-16**. Seedance 2.5, locked K01/K02 reference images, generated 4 seconds and edited to 3 seconds; static camera, minimal right-hand finger motion, no model-generated audio. **Prompt approved only — no animated output or audio canon yet; current Higgsfield price/balance not verified.** |
| B01 empty wide Orion-alley background plate | **User-approved CANON 2026-11-16 as generated**. Original `Toonville_B01_Alley_Plate_Canon_Original.png` (1672×941, SHA-256 `15a9a218cc6ec62a6b9a4903fbaf8222d64ee6c82dceac20ad623afd5cd9332b`), from generated `neon_orion_alley_with_toriyama_mural.png`; locked 1920×1080 production copy `Toonville_B01_Alley_Plate_Canon_1920x1080.png` (SHA-256 `f28669d6bce79e8ace1c8bdb03afd400c1c40802cb278dc47808f7ba1df031f8`). **Separate camera-specific plate only**, not a replacement of the source video's last frame, other alley plates, memorial rules or the C01 close-up; slight new-drawing differences were accepted for B01 alone. Background **must remain unchanged outside character alpha mask**. No B01 Ozzy pose, composited end keyframe, bridge animation or audio approved. Files are still conversation assets, pending GitLab binary backup. |
| Uploaded video → C01 continuity bridge | Source `Toonville_iPhone_Compatible(1).mp4`: **27.9667s, 910×512 at 30 fps**, audio present. Last frame shows Ozzy still walking toward camera beside shutter, not touching cabinet. A direct cut to locked K01 is a jump. **Bridge timing/action remain PROPOSED, not approved:** 2.0333s (122 frames at 60 fps) of final step, turn toward panel and raised bare anatomical right hand, completing the first 30s installment before a motivated cut to locked C01 K01 at opening of next installment. **The empty B01 camera-specific background plate is now individually canon-approved**, but a new approved character-only Ozzy end pose/composite, separate animation prompt and motion/audio verification are still required. No old frames or plates are changed. |
| Ozzy electric-attack style reference experiment | **Generated, NOT approved as image canon:** original `02897314-B57F-4361-A687-2E4486D80A4F.png`; first wrong-source restyle `a_highly_detailed_gritty_comic_anime_cel_shaded_i.png` rejected; corrected grit-shaded illustration `ozzy_s_electric_guardian_stance.png` created from the correct unmasked electric-attack reference, still awaiting individual user approval and left-hand/wrist/tattoo/lettering/anatomy checks. Preserve original approved character assets. Neither illustration nor a new character design has been canonized by this experiment. |
| Orion 20-second continuation C01–C07 | User-directed **proposed storyboard segment**, not yet a canon final clip. C01 plate, reaching character pose and K01 are individually canon; K02 character correction and subsequent actions await review. Finished clips still follow the full 30-second/60-fps spec. |
| Bounty-hunter rifle `PROP_005` object sheet | **User-approved canon 2026-11-16**; moderate (~100 cm target) grey sci-fi prop with top scope and circular blue-white side details on both sides; reference PNG retained in conversation assets, **not yet copied to the GitLab production object directory** |
| SH005 K01–K07 | Seven separately approved canon keyframes |
| SH006 K01 | Approved with a frame-specific regenerated-background exception |
| SH006 K02 | Approved on unchanged `LoadingBay.png` |
| Additional SH006 cross-alley plate `SH006_New_Standoff_Plate_Candidate_1920x1080.png` | Approved **additional** locked camera view; previous plates stay canon |
| Scout armour turnaround | Rejected draft; established standard bounty-hunter armour still wins |
| Ozzy rear-three-quarter and right-facing character elements | Rejected drafts (hand tattoo/chip positions; New Era flag side) |
| Rifle-holding bounty-hunter isolated element | Generated, not individually approved |
| Isolated comet and aerial walking Ozzy | Generated, not separately approved |
| SH006 five-second silent animated MP4 | Draft, not canon |
| Complete 30-second clip with audio | Pending |
| This project's composited set, in the shot list: sh001 k01–k02, sh002 k02, sh003 k02, sh004 k01–k02, sh005 k01–k03, sh006 k01–k02 | Approved in this project, and chosen by the user for the clip; sh005's and sh006's names overlap with the rows above (see README) |
| Video tool | Higgsfield's Seedance 2.5, chosen by the user, at about 7 credits a second at 720p, with its audio off. Clips are conformed to 1280×720 at 60 fps, the in-between frames made by frame interpolation on this project's machine, at no credit cost |

- [ ] **Track separate approvals:** each element, plate, keyframe and animated clip has its own status, source filename and known differences. Approval of one full frame is not a blanket approval of reusable character features or motion.
- [ ] **Respect camera-view ownership:** the new SH006 plate is separate from `LoadingBay.png`. Never overwrite either approved source; use the assigned camera position for each composite.
- [ ] **Repair character-only drafts before compositing:** the dollar-sign tattoo remains on the web of Ozzy's left thumb and index finger, the chip flush on the inside of his left wrist, and the balaclava flag on his left. The original bounty-hunter armour sheet remains authoritative.
- [ ] **Animation approval stays separate:** the five-second test clip is only a draft; inspect motion, anatomy, exact plate pixels and sound before final canon approval.

## Files and names

- **Characters:** sheets in `characters/<name>/`, object sheets in `characters/<name>/objects/`, LoRA training sets (not used for now) in `characters/<name>/lora/`.
- **Size chart:** `characters/size-chart.jpg`.
- **Shot lists:** one per scene in `shot-lists/`, named after the scene, for example `shot-lists/test-video-alley.md`, with its approved storyboard in a folder of the same name beside it, one frame per shot named `ep<NN>-sc<NN>-sh<NNN>-storyboard.jpg`, for example `shot-lists/test-video-alley/ep00-sc01-sh001-storyboard.jpg`.
- **Locations:** `locations/<location>/<location>-<view>-<day|night>.jpg`, for example `locations/corner-store/corner-store-wide-night.jpg`.
- **Shots:** named `ep<NN>-sc<NN>-sh<NNN>-k<NN>.png` for keyframes and `ep<NN>-sc<NN>-sh<NNN>-plate.png` for the background plate, for example `ep01-sc03-sh012-k02.png`. A shot with more than one camera position has a locked plate for each one, named by letter or by the keyframe it's for, for example `-plate-a.png` or `-plate-k03.png`. Each shot folder keeps a `prompts.txt` with every prompt, seed and setting used, and each keyframe's plate and the result of its pixel check. Shots will grow large, so keep them in your production storage rather than in this repo. Files made in a cloud session are lost when the session ends, so download each approved plate and keyframe as soon as it's approved, for example as one zip per scene. The repo keeps the scripts that rebuild them from the original generated images.

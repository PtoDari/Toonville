# Toonville workflow: from idea to stills

This is how Toonville goes from an idea to a full set of stills, ready for animation. Animation itself comes later and isn't covered here.

Work through it top to bottom, because each stage needs the one before it. Tick every box: a character, object, location or shot isn't done until all of its boxes are ticked.

[README.md](README.md) is the single source of truth for the style. Every prompt is built in its order: the subject, then each character's style block, then the job's style block, word for word. No prompt goes to PixAI or any other generator until it has been shown and given the go-ahead.

## 1. Setup

Do this once, and again whenever something changes.

- [ ] **Base model:** one PixAI base model chosen for the whole series and recorded in the README. Every character's LoRA is trained on it.
- [ ] **Settings:** fixed and recorded in the README, and the same for every still: sampler, steps, guidance (CFG), LoRA weight (0.7–0.9) and clip skip, if PixAI offers it.
- [ ] **Frame size:** every story still is 16:9. Generate at the base model's 16:9 size and upscale every still the same way to 1920×1080. Sheets keep their own sizes.
- [ ] **Folders and names:** set up as in [Files and names](#files-and-names).

## 2. Each character

Do this for every main character before they appear in any shot.

- [ ] **Profile:** name, age, height, skin tone and accent colour, hair, face, tattoos and marks, outfits. Hex codes are sampled from reference images, not guessed. The profile goes in the character table and their README entry.
- [ ] **Style blocks:** their character style block, a sheet note for anything that must stay on one side, and a short backup, all in the README.
- [ ] **Turnaround sheets:** one for each outfit and hairstyle (turnaround sheet block), with front, three-quarter, side and back views.
- [ ] **Headshot sheets:** one for each hairstyle (headshot sheet block).
- [ ] **Expression close-ups:** their default expressions, turned so any one-sided feature faces the camera.
- [ ] **Object sheets:** one for each object that belongs to them (step 3).
- [ ] **Check and save:** every sheet checked against their README entry, with known differences listed, and saved to `characters/<name>/`.
- [ ] **Size chart:** added at their height.
- [ ] **LoRA:**
  - [ ] training set built from their canon views, with no mirrored images and a unique trigger word in the captions
  - [ ] trained on the series base model, with its base and settings recorded in their entry
  - [ ] test set passes their canon check

## 3. Each character's objects

These are the things a character carries, wears, uses or is known by, such as a phone, a bag, a weapon or a car. Props that stay in one place belong to that location instead (step 4).

- [ ] **Object list in their README entry**, with each object's:
  - what it is and what it's made of
  - colours as hex codes
  - real size in cm
  - where it's carried or worn, and in which hand
- [ ] **Object sheets:** one for each object (object sheet block), with front, side, back and top views plus one view in the owner's hand to show its size.
- [ ] **Check and save:** each sheet checked against the list, with known differences listed, and saved to `characters/<name>/objects/<name>-<object>.jpg`.
- [ ] **LoRA:** any object they hold in most shots is added to their training set, with a caption tag, and the LoRA retrained.

## 4. Each location

- [ ] **Entry in the README's Locations section:**
  - its name and what happens there
  - day, night or both
  - its main light source and that light's colour, which becomes every character's rim light there
  - where characters stand (the calm open area)
  - its reactive surfaces: signs, glass, puddles, banners, leaves
- [ ] **Location sheet:** an establishing wide shot, the reverse angle, and each camera position its shots will use, low or aerial and wide angle as the style asks. It uses the all-in-one block without the Characters line, keeping only the Night or Day line, with a Day set and a Night set if both are used.
- [ ] **Scale:** a doorway or another object of known size drawn in, so characters can be placed at their size-chart heights.
- [ ] **Reactive states:** for each scene there, the state the story moment calls for (quiet, tension or climax), using the accent colour of the character the scene reacts to.
- [ ] **Save:** saved to `locations/<location>/`, with known differences listed.

## 5. Story and shot list

- [ ] **Script or beat outline,** split into scenes.
- [ ] **Each scene:**
  - its location, and day or night
  - the characters, with their outfits and hairstyles
  - the objects in play
  - its story moment (quiet, tension or climax) from the README's reactive environment table
- [ ] **Shot list:** every shot numbered, with:
  - the characters in it
  - framing (wide, medium or close-up)
  - camera angle and lens
  - which way each character faces, keeping one-sided features toward the camera where the story allows
  - the action
  - the keyframes it needs (start, key poses, end)
- [ ] **Storyboard:** a rough thumbnail for every shot.
- [ ] **Continuity:** checked across every scene:
  - characters stay on their side of the line of action
  - eyelines match
  - outfits, hair and objects in hand carry from shot to shot
  - weather and light stay steady through the scene

## 6. Each shot's stills on PixAI

- [ ] **Background plate first:** the location from this shot's camera, with no characters, in the scene's reactive state. It uses the all-in-one block without the Characters line. Keep it, because the animation will need the background on its own.
- [ ] **Full frame:**
  - **Prompt:** the subject, starting with each character's trigger word, then each character's style block, then the all-in-one block. Keep the matching Night or Day line, and keep the "At story peaks" sentence only for tension and climax moments.
  - **LoRAs:** selected for every character in the shot.
  - **Plate:** used as the background reference if PixAI offers image reference, so the location doesn't drift.
- [ ] **Show before generating:** every prompt shown, saved and priced in credits before it's sent. Each image's prompt, seed and settings are recorded next to it.
- [ ] **Keyframes:** every keyframe in a shot uses the same plate, camera, seed and settings, and changes only pose and expression. If PixAI offers pose reference or image-to-image, use them to work from the previous keyframe.
- [ ] **Canon check on every still:**
  - [ ] each character matches their README entry and sheets: one-sided features on the right side, hair, outfit, and colours to their hex codes
  - [ ] objects match their object sheets
  - [ ] heights match the size chart
  - [ ] characters are in thick black ink, and the environment is in thin tinted lines, never black
  - [ ] characters own the pure black, the brightest highlights and their accent colour
  - [ ] the location's main light is the characters' rim light, from the same direction in every still of the scene
  - [ ] the reactive state matches the story moment
- [ ] **Fix or redo:** a still that fails is fixed locally or regenerated, with any new prompt shown first, then checked again.
- [ ] **Save:** saved under the shot's name, together with its plate.

## 7. Ready for animation

- [ ] Every shot in the shot list has all of its keyframes.
- [ ] Every still has the same frame size.
- [ ] Every shot's background plate is kept next to its stills, so characters can later be separated and animated over the background.
- [ ] Neighbouring shots cut together: screen direction, eyelines, light and reactive state carry across the cut.
- [ ] A final pass through every scene in order, with each character compared side by side against their sheets.

## Files and names

- **Characters:** sheets in `characters/<name>/`, object sheets in `characters/<name>/objects/`, LoRA training sets in `characters/<name>/lora/`.
- **Size chart:** `characters/size-chart.jpg`.
- **Locations:** `locations/<location>/<location>-<view>-<day|night>.jpg`, for example `locations/corner-store/corner-store-wide-night.jpg`.
- **Shots:** named `ep<NN>-sc<NN>-sh<NNN>-k<NN>.png` for keyframes and `ep<NN>-sc<NN>-sh<NNN>-plate.png` for the background plate, for example `ep01-sc03-sh012-k02.png`. Each shot folder keeps a `prompts.txt` with every prompt, seed and setting used. Shots will grow large, so keep them in your production storage rather than in this repo.

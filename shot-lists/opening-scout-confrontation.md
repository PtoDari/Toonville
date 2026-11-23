# The opening, the scout confrontation: shot list

The story's opening, beats 11 to 14 in [STORY.md](../STORY.md), under Scenes: Ozzy at the electrical cabinet by the loading bay in Orion's side alley, the scout's challenge, and the fight. Beats 15 and 16, the chase, are outlined at the end, and get their shots once the chase alley is designed.

Its direction and shots were approved by the user on 2026-11-23, as the scene's draft shot list. Every plate, keyframe and clip is still to be made and approved, each on its own, with its prompt shown first.

About 35.5 seconds before the chase, so it runs over one 30-second clip. Where the clips split is set once the whole opening is laid out, as the README's Video spec allows. Each clip is 1280x720, 16:9, 60 fps, and its keyframes stay at 1920x1080. Shot names here are sh001 to sh014; their full names come when the opening's scenes are numbered.

Whole scene:
- Night, just after the rain: no rain falls, the pavement is wet. Prompts use the Night line after the rain.
- Ozzy: main outfit with the jacket, balaclava on, no staff (sheet: ozzy-main-outfit-jacket-balaclava-no-staff.jpg). Golden staff: absent in every shot.
- The scout: a standard bounty hunter, in the bounty hunters' character style block, with their rifle (`PROP_005`), which fires red plasma beams `#AB3636`.
- Ozzy's power: only his light-blue crackle `#7DF9FF`, no plasma, as beat 14 sets.
- Story moment: quiet in sh001, until the scout spots him; tension, reacting to the scout, from sh002 on, so the nearest signs, puddles and rim light take on his copper `#6D4F46`.
- Main light: Orion's violet neon and the light from the club frontage, with the loading bay's amber lamp near the cabinet, and the red of the scout's beams while he fires.

## How it's filmed

As the user set on 2026-11-23, the fight never looks turn-based:
- **Both fighters move in every shot.** The scout backs off while he fires, Ozzy dodges and closes in the same motion, and a counter starts while the other fighter's swing is still finishing.
- **Attack and response share the frame.** Most fight shots are two-shots, and a single on one fighter is only a brief punctuation, like a visor flash or an impact.
- **Cuts land mid-move,** so a swing that starts in one shot lands in the next.
- **Anime camera:** whip pans, crash zooms, the background sliding behind a running character, camera shake on hits, and impact frames held for 3 or 4 frames.
- **Speed-line backgrounds at the biggest hits,** where the alley drops away into speed lines.

The standoff before it breathes, as the series' storyboards do.

How each kind of shot is made:
- **Plate shots:** the characters are made on their own, on flat chroma green `#00B140`, and composited onto that camera position's locked plate. Pushes, pans, zooms and shake are done on the plate in compositing.
- **Speed-line shots:** no plate. The characters are made on their own, on the same green, and the speed lines and impact frames are added in compositing.
- **Contact shots** (sh009 to sh013): both fighters are made together, in one clip, so the hits connect. Two characters in one clip drift more, so retries are likely.
- **Beams, crackle and sparks:** made with the README's glowing-element block and added by their light, with their glow as the mask.
- **Length:** Seedance's shortest clip is 4 seconds, so a shorter shot is trimmed in the edit. About 28 credits a shot at 720p, roughly 250 for the fight before retries.

## Part 1: the standoff, beats 11 to 13 (about 17 s)

sh001  He rips off the panel  3 s
- Characters: Ozzy. Plate: the cabinet close-up plate, C01, approved on 2026-11-16 (`Toonville_C01_ControlPanel_Canon_1920x1080.png`).
- Camera: close-up line. Locked.
- Action: he tears the cabinet's panel off. The bare wires are inches from his fingers.
- Keyframes: k01 his hand on the panel; k02 the panel off, his fingers reaching for the wires.
- Note: the open cabinet, with its wires showing, changes the plate, so it needs a plate revision of C01.

sh002  "Halt."  2.5 s
- Characters: Ozzy. Plate: new, a close view by the cabinet.
- Camera: close-up line, on his masked eyes.
- Action: "Halt. You are to come with me to the Crystal Tower." He freezes, then his eyes roll.
- Keyframes: k01 frozen; k02 mid eye-roll.

sh003  The standoff  5 s
- Characters: Ozzy and the scout. Plate: the test video's sh006 cross-alley plate, approved on 2026-11-16.
- Camera: standoff line, with a slow push in.
- Action: the scout on one third, Ozzy on the other. "Seriously, that place is soooo overrated."
- Keyframes: k01 and k02, the push in from start to end.

sh004  He draws the rifle  3.5 s
- Characters: the scout. Plate: new, low, looking up at him.
- Camera: default line, low.
- Action: the rifle swings up into frame as he accuses Ozzy of trespassing, and repeats that Ozzy comes with him or he's apprehended.
- Keyframes: k01 rifle low; k02 rifle levelled.

sh005  Over the shoulder  3 s
- Characters: Ozzy (near, dark and soft) and the scout. Plate: new, behind Ozzy, looking at the scout.
- Camera: over-the-shoulder line.
- Action: the rifle's blue-white side lenses glow, and the puddles take on copper.
- Keyframes: k01 and k02, the lenses brightening.

## Part 2: the fight, beat 14 (about 18.5 s)

sh006  The scout's POV  2.5 s
- Characters: the scout's hands and rifle in the foreground, Ozzy beyond. Plate: new, from the scout's position down the alley.
- Camera: POV line.
- Action: red beams fire down the alley. Ozzy is already weaving toward the lens, and the beams splash on the wet pavement.
- Keyframes: k01 the first beam; k02 Ozzy nearer, mid-weave.

sh007  He slides under a beam  2 s
- Characters: Ozzy. Plate: new, a wide plate for the background to slide across.
- Camera: default line, low, tracking beside him.
- Action: he slides under a beam, its red light raking across his jacket.
- Keyframes: k01 into the slide; k02 coming up out of it.

sh008  Crash zoom on the visor  1.5 s
- Characters: the scout. Plate: none, speed lines.
- Camera: close-up line, crash zoom, then a whip pan into sh009.
- Action: still firing, backing up, his X visor filling the frame.
- Keyframes: k01 wider; k02 the visor close.

sh009  The rifle swing and the duck  2.5 s
- Characters: Ozzy and the scout. Plate: new, side-on, for the camera to pan with the action.
- Camera: default line, side-on, panning with them.
- Action: the scout swings the rifle like a club at head height. In the same motion, Ozzy drops into his crouch under it, the light-blue crackle flaring on his fists.
- Keyframes: k01 the swing starting; k02 Ozzy crouched under the rifle.

sh010  Right fist to the stomach  1.5 s
- Characters: Ozzy and the scout. Plate: none, speed lines.
- Camera: default line, low.
- Action: his rising right fist hits the scout's stomach. Impact frame.
- Keyframes: k01 the fist rising; k02 the impact.

sh011  The scout swings back  2 s
- Characters: Ozzy and the scout. Plate: none, speed lines.
- Camera: default line. The cut lands mid-move from sh010.
- Action: the scout doubles over but swings the rifle butt back as he reels. Ozzy slips it, his left fist already rising.
- Keyframes: k01 the scout doubled over, swinging; k02 Ozzy slipping it, left fist rising.

sh012  Left fist to the helmet  1.5 s
- Characters: Ozzy and the scout. Plate: none, speed lines.
- Camera: default line, low, looking up at the helmet.
- Action: the left fist lands. The crackle bursts, the visor flashes and the camera shakes.
- Keyframes: k01 just before contact; k02 the impact.

sh013  Into the dumpster  3 s
- Characters: Ozzy and the scout. Plate: the test video's sh006 cross-alley plate, with the dumpster beside the shutter.
- Camera: standoff line.
- Action: the scout flies backward into the dumpster. Ozzy lands in his guard as the crackle fades.
- Keyframes: k01 the scout in the air; k02 the scout against the dumpster, Ozzy in guard.
- Note: a dent in the dumpster changes the plate, so it would need a plate revision.

sh014  He runs  2 s
- Characters: Ozzy and the scout. Plate: new, or the wide bridge plate, B01, if the camera matches.
- Camera: default line.
- Action: the scout stirs. Ozzy glances at the cabinet, then turns and sprints.
- Keyframes: k01 the glance; k02 mid-sprint.

## Part 3: the chase, beats 15 and 16 (outline)

The camera runs ahead of Ozzy as he sprints toward it, with the scout behind him firing. A POV glance back shows the scout gaining, and indigo starts to glow on his hands as his anger builds. Its shots come once the chase alley is designed.

## Still to settle

- **New plates:** sh002, sh004, sh005, sh006, sh007, sh009 and sh014 need plates of their own, each approved before use.
- **Tension on the plates:** the approved plates are in the quiet state. The copper tension needs approved plate revisions, or it stays in the rim light and the speed-line shots.
- **Plate revisions:** the open cabinet in sh001, and any dent in the dumpster in sh013.
- **The chase alley:** its README entry and location sheets, before Part 3 gets its shots.

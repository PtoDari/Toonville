# Test video, the alley: shot list

Approved by the user on 2026-11-15. The scene's story is in [STORY.md](../STORY.md), under Scenes, and every location in it has its approved sheets in [README.md](../README.md).

Storyboard: approved by the user on 2026-11-15, in [`test-video-alley/`](test-video-alley/): one 1920x1080 frame per shot, `ep00-sc01-sh001-storyboard.jpg` to `ep00-sc01-sh006-storyboard.jpg`, and an overview of all six, `ep00-sc01-storyboard-overview.jpg`. It was put together from the approved sheets and images, not generated: the location sheets as backgrounds, Ozzy's figures cut from his balaclava sheet without the staff and the bounty hunter's from their armour turnaround, never mirrored, at their size-chart heights, and the two approved memorial murals in sh005. Arrows mark the camera moves, and each frame's caption gives its action. It's a rough timing and continuity guide, not a still: his raised right fist and the hunter's rifle are in the captions only, because no approved art shows them yet. Its script, `build_storyboard.py`, needs the two mural images, which aren't stored in this repo.

One 30-second clip, 1920x1080, 16:9, 24 fps. Shot names: ep00-sc01-sh001 to ep00-sc01-sh006, with keyframes named as in [WORKFLOW.md](../WORKFLOW.md).

Whole scene:
- Night, just after the rain: no rain falls, the pavement is wet. Prompts use the Night line after the rain.
- Ozzy: main outfit with the jacket, balaclava on, no staff (sheet: ozzy-main-outfit-jacket-balaclava-no-staff.jpg). Golden staff: absent in every shot.
- Story moment: quiet in sh001-sh005; tension, reacting to Ozzy, from sh006 (sign glow, puddles and rim light turn electric indigo #6F00FF).
- Main light: in the Midtown alley, its own amber wall lamps, with cyan tube lights and violet neon panels, since the user changed its look on 2026-11-16 (it was hot-pink neon #F63BC4 spilling in from the streets); Orion's violet neon in its side alley.

sh001  The comet  4 s
- Characters: none. Plate: the sky of midtown-alley-aerial-night.
- Camera: default line. Locked on the night sky, then a slow zoom out.
- Action: still stars; the comet enters top left and streaks down toward the lower right, tail trailing up-left.
- Keyframes: k01 empty sky; k02 comet mid-frame, zoomed out.
- Plate, approved by the user as canon on 2026-11-16: `ep00-sc01-sh001-plate.png`, 1920x1080, kept in production storage, not in this repo, with its prompt in the shot's prompts.txt. The user generated it in ChatGPT: a night sky over Midtown, violet with flat, hard-edged cel clouds and flat star points, used as generated and scaled to 1920x1080. It set Daiya's night sky in [README.md](../README.md), under Daiya, Night sky. It replaces the first plate, a cloudless navy sky approved on 2026-11-15 and graded by [`plates/fix_sky_sh001.py`](test-video-alley/plates/fix_sky_sh001.py), whose files are kept as a record.
- k01 is the plate's centre 70%, scaled to 1920x1080: `ep00-sc01-sh001-k01.png`.

sh002  Tilt down to the alley  5 s  (one continuous move with sh001)
- Characters: Ozzy, small, from above. Plate: midtown-alley-aerial-night.
- Camera: default line, aerial. Tilts down from the comet to the alley.
- Action: he walks up the alley toward the camera, close to the wall on the viewer's left (his right side), as in the low walk shot.
- Keyframes: k01 = sh001 k02; k02 the aerial view with Ozzy small in the alley.
- Plate, approved by the user as canon on 2026-11-16: `ep00-sc01-sh002-plate.png`, version 2, 1920x1080, kept in production storage. It's the approved aerial view with no generation, rebuilt exactly from this repo by [`plates/make_plate_sh002_v2.py`](test-video-alley/plates/make_plate_sh002_v2.py) with [`plates/zone_sh002_v2.py`](test-video-alley/plates/zone_sh002_v2.py): the comet, its glow and the tail's first strands are painted out with the sky's own colour, grain and stars, so the comet can move over it; the clouds stay; and the sky and clouds are regraded from navy to Daiya's violet night sky, so the top of the frame meets the bottom of shot 1's sky and the tilt runs between them without a seam. The buildings, neon, the Chase Tower and its spire keep their own colours. Known differences, where the written rules win: the clouds are the aerial view's soft painterly ones, regraded violet, not flat cel shapes; right above the skyline, where the comet's head was, the haze is a touch flatter; and, carried from the aerial view, bold black lines and more saturation than the environment rules, and square paving slabs. It replaces the first plate, approved on 2026-11-15 with a navy sky and the clouds painted out ([`plates/make_plate_sh002.py`](test-video-alley/plates/make_plate_sh002.py)), whose files are kept as a record. A plate the user generated for this shot on 2026-11-16 wasn't used: it showed a different alley, with purple-grey walls, wall lamps and neon panels, clutter, a bridge overhead, a large mural, falling rain and a camera about one storey up.
- To remake: this plate shows the alley's first look, red brick, from above. The user changed the alley's look later the same day, so shot 2's plate needs remaking in the new look, from above the rooftops.

sh003  Skyline and shadow  5 s
- Characters: Ozzy's shadow only. Plates: midtown-alley-wide-night, midtown-wide-night (skyline).
- Camera: default line, low in the alley. Slow pan across the skyline above the alley walls, the Chase Tower among it, settling on the alley's block wall.
- Action: his shadow slides across the wall beside him, cut off above the shoulders as in the low walk shot.
- Keyframes: k01 the skyline over the alley walls; k02 the wall with his shadow.

sh004  Low sweep behind his feet  4 s
- Characters: Ozzy, knees down. Plate: midtown-alley-low-walk-night.
- Camera: low tracking shot, wide. Starts on the canon low walk frame and sweeps around behind his heels as he passes.
- Action: Cortez sneakers on the wet concrete; the wall stays on his right. Ends looking past his heels to the alley's enclosed entrance and the street beyond.
- Sound: his footsteps echoing on the pavement.
- Keyframes: k01 = midtown-alley-low-walk-night; k02 behind his heels, the entrance ahead.
- To remake: k01, the approved low walk shot, shows the alley's first look, red brick and hot-pink light. The user changed the alley's look on 2026-11-16, so it needs remaking in the new look; its pose, his side of the alley and his shadow stay.

sh005  360 sweep past Orion  7 s
- Characters: Ozzy, full figure. Plate: orion-exterior-sheet-night (alley view, entrance and loading bay panels).
- Camera: default line, wide. Circles him once, 360 degrees, as he walks (crosses the line on purpose).
- Action: he walks down Orion's side alley with Orion on his left, past the ORION sign, canopy neon, graffiti and closed sliding doors, to the loading bay's roll-up shutter farther down. He stops, faces the shutter and raises his clenched right fist (his bare hand), about to charge it.
- Doors: Orion's sliding doors closed; the shutter closed.
- Murals: the approved memorial mural fills the graffiti panel left of Orion's doors as you face the entrance, on the street side, where he passes it in k01; the panel right of the doors keeps its wildstyle graffiti. As the camera circles him, the wall of the 13-storey building opposite turns toward it in k02, with its approved memorial mural. The rest of that wall's mural areas stay bare concrete and brick until the user designs them.
- Keyframes: k01 passing Orion's entrance, the left-panel mural beside him; k02 mid-sweep, facing the wall opposite and its mural; k03 at the shutter, right fist raised.

sh006  The bounty hunter  5 s
- Characters: Ozzy and one bounty hunter. Plate: orion-exterior-sheet-night (loading bay panel).
- Camera: standoff line. Ozzy on the left third facing right, the hunter on the right third facing left, across the wet alley.
- Action: the bounty hunter steps out of the service passage ahead of him, rifle in hand, into his path, and challenges him to a fight; Ozzy turns from the shutter to face him.
- Rifle: the hunter's long grey rifle with a scope and a round blue-white lens on its side, held across his body.
- Facing: Ozzy's left hand ("$", chip) on the far side; the hunter's antenna and canister (his left side) toward the camera.
- Heights: the hunter's helmet top (about 191 cm) level with Ozzy's head in sneakers (190.5 cm).
- Story moment: tension, reacting to Ozzy.
- Keyframes: k01 the hunter appears; k02 the standoff.

Total: 4 + 5 + 5 + 4 + 7 + 5 = 30 s.

Sound: his footsteps are audible through the walk, sh002-sh005 (as the user set).

Set by the user: his right fist at the shutter; the hunter stepping out of a nearby alley holding his rifle; the footsteps audible. The nearby alley is the service passage that joins Orion's side alley farther down, ahead of Ozzy, as approved with this list.

# Toonville: instructions for Claude

Toonville is an anime series. Its visual style is fixed and defined in README.md, which is the single source of truth. Every prompt made for this project (characters, character sheets, environments, props, key art, video, edits) must carry that style.

@README.md

## The style rule: no exceptions

- **Every prompt carries the style block.** Every prompt for this project includes the established style block from README.md, copied word for word. That covers full prompts, short backups, edits and inpainting, one-line fixes, and every prompt sent to an image or video tool (OpenArt, Higgsfield or any other). There is no such thing as a style-free Toonville prompt.
- **Every character has their own character style block.** Each character's look, tattoos, outfits and colours live in their character style block in README.md. Any prompt that shows a character includes that character's block as written, with `[SKIN HEX]` and `[ACCENT HEX]` filled from the character table. If a character has no block yet, or either colour is still TBD, ask the user for the details and add the block to README.md before writing the prompt. Never invent a character's look or colours.
- **Build every prompt in this order:** the subject (who or what, doing what, where), then the character style block for each character in it, then the style block for the job from the table in README.md's "The style rule" section. Only the edits that table allows are permitted.
- **Check before sending.** Before showing or sending any prompt, confirm the master style line appears word for word, the job's style block is complete, and every character in the shot has their character style block. If anything is missing, fix the prompt first.
- **Never change the style inside a prompt.** Keep the hex codes, line rules, lighting rules and camera rules as written. If a request conflicts with the style, say so before writing the prompt. Change the style only when the user asks, and change it in README.md first, so every later prompt picks it up.

## Other rules for every prompt

- Use a character's short backup description only when the user asks for it, or says their generator is cutting off the full prompt. The short backups still go with the full style block.
- A character's finished sheets are in `characters/<name>/`, one per outfit and hairstyle, named `<name>-<outfit>-<hairstyle>.jpg` (for Money: `money-main-outfit-jacket-hair-up.jpg`, `money-main-outfit-jacket-hair-down.jpg`, `money-main-outfit-hair-up.jpg`, `money-main-outfit-hair-down.jpg`, `money-main-outfit-shirtless-hair-up.jpg`, `money-main-outfit-shirtless-hair-down.jpg`, `money-headshots-hair-up.jpg`, `money-headshots-hair-down.jpg`, `money-medium-shot-main-outfit-hair-up.jpg`, `money-front-view-main-outfit-hair-up.jpg`, and the close-ups `money-close-up-glare-hair-up.jpg`, `money-close-up-smirk-hair-up.jpg` and `money-close-up-calm-hair-up.jpg`). Use them for their look and outfit. Where a sheet disagrees with the written character style block or the hex codes in README.md, the README wins, and the character's entry lists any known differences in the sheet.
- Character sheets (character, turnaround and headshot sheet blocks), object sheets (object sheet block) and single medium shots on a plain background (medium shot and action medium shot blocks) use a flat mid grey `#808080` background by default, as written in their blocks.
- Follow WORKFLOW.md for the order of work and its checklists:
  - Every character has their sheets, object sheets and LoRA before appearing in shots.
  - Every location has a README entry and location sheets before shots are made there.
  - Every still passes the canon check in step 6.
  - Never invent an object's or location's look: ask the user, and add it to README.md first.
- The size chart is `characters/size-chart.jpg`, and each character's height is in the character table. Keep characters' heights in every shot in proportion to it, and add each new character to it once they have a height and a turnaround sheet. If a character's height is still TBD, ask the user before placing them on the chart or in a shot with others.
- When a prompt uses a character's LoRA (see README.md's LoRA training section), start the subject with its trigger word. The character style block and the job's style block still go in, word for word. Never add mirrored images to a training set.
- Characters own pure black, the brightest highlights and their accent colour. Environments stay quieter so characters always read clearly.
- Don't name existing series, characters or artists in prompts. Describe the look instead.

## Show the prompt before generating

- **Nothing goes to a generator without the user's go-ahead.** Before sending a prompt to OpenArt, Higgsfield or any other image or video tool, show the user the full prompt in a copyable code block, save a copy as a text file they can open, and say roughly what it will cost in credits. Then wait for the user to say to generate it.
- **Each send needs its own go-ahead.** That covers new images, edits and inpainting, retries and fixes. If a prompt changes after the user approved it, or a result needs another try, show the new prompt and wait again.
- Writing prompts, checking them and fixing images locally (without a generator) cost no credits and don't need a go-ahead.

## Keeping the guide current

When the user adds or changes a character, skin tone, accent colour or style rule, update README.md in the same change, so every future prompt picks it up.

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
- A character's finished reference sheets are in `characters/<name>/`: `reference-sheet.jpg` for their main outfit, plus a sheet for each other outfit that has one (for example `shirtless-sheet.jpg`). Use them for their look and outfit. Where a sheet disagrees with the written character style block or the hex codes in README.md, the README wins, and the character's entry lists any known differences in the sheet.
- Characters own pure black, the brightest highlights and their accent colour. Environments stay quieter so characters always read clearly.
- Don't name existing series, characters or artists in prompts. Describe the look instead.

## Keeping the guide current

When the user adds or changes a character, skin tone, accent colour or style rule, update README.md in the same change, so every future prompt picks it up.

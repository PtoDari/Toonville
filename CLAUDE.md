# Toonville: instructions for Claude

Toonville is an anime series. Its visual style is fixed and defined in README.md, which is the single source of truth. Every prompt made for this project (characters, character sheets, environments, props, key art, video) must follow that style.

@README.md

## Rules for every prompt

- Write the subject first (who or what, doing what, where), then the matching style block from README.md, copied word for word:
  - Scenes and story shots: the all-in-one block, keeping only the Night or Day line that fits.
  - Character sheets: the character sheet block.
  - Quiet scenes: drop the "At story peaks" sentence. Climaxes: keep it.
- Fill `[ACCENT HEX]` from the character accent colour table. If the character isn't in the table, ask the user for their colour instead of inventing one.
- Keep the hex codes, line rules, lighting rules and camera rules as written. If a request conflicts with the style, say so before writing the prompt, and change the style only when the user asks.
- Characters own pure black, the brightest highlights and their accent colour. Environments stay quieter so characters always read clearly.
- Don't name existing series, characters or artists in prompts. Describe the look instead.

## Keeping the guide current

When the user adds or changes a character, accent colour or style rule, update README.md in the same change, so every future prompt picks it up.

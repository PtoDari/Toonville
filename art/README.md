# Card art

One picture per card, named after the card id: `spongebob.jpg`, `aang.jpg`, `leo-rise.jpg`...

The `.jpg` files here are anime-style illustrations generated with Higgsfield (GPT Image 2.5;
Christmas SpongeBob via Z Image). Prompts: `scripts/portraits/hf-prompts.json`; job IDs:
`scripts/portraits/hf-jobs.json`. The older code-drawn stand-ins can be regenerated with `npm run portraits`.

To replace a picture, upload an image with the same card id. A **`.png`** takes priority over the
`.jpg` (e.g. `spongebob.png`), and pictures in the `main` branch's `art/` folder take priority over this branch.

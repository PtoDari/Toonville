# Toonville

A personal, just-for-fun anime-style card battler starring Nickelodeon and Nicktoons Marvel characters.

- [Game plan](PLAN.md)
- [Cast roster](docs/CAST.md): 101 characters and 22 skins
- [Card art prompts](docs/ART_PROMPTS.md): one anime-style prompt + filename per card

## Play it on your phone with Expo Go (no computer needed)

You need: the **Expo Go** app and a free **expo.dev** account. Two phones makes it easiest.

1. **Phone 1:** open **https://snack.expo.dev** in the browser (switch to "Desktop site" if it shows a simplified page) and sign in.
2. Open the menu (☰ / "Projects") → **Import git repository** and paste:
   `https://github.com/PtoDari/toonville/tree/claude/toonville-game`
3. When it finishes loading, tap **Run** → **My Device**. A QR code appears.
4. **Phone 2:** open **Expo Go** and scan the QR code. The game opens.
   - One phone only: sign into the same Expo account in Expo Go. The Snack appears under "Recently opened" or in your projects.

## Adding character pictures

Cards show a picture from the `art/` folder of this repo, matched by filename (`spongebob.png`, `aang.jpg`...).
Upload images there from the GitHub website or app (**art → Add file → Upload files**); they appear the next time the game starts.
Cards without a picture keep the placeholder design. See [docs/ART_PROMPTS.md](docs/ART_PROMPTS.md) for anime-style prompts and every filename.

## Play it on a computer (optional)

```bash
npm install
npx expo start      # scan the QR code with Expo Go
```

## Developer commands

```bash
npm test            # engine tests
npm run typecheck   # TypeScript check
npm run sim         # AI-vs-AI balance simulator (add --presets for preset decks only)
npm run cast        # regenerate docs/CAST.md from the card data
npm run art-prompts # regenerate docs/ART_PROMPTS.md
```

Card data lives in `src/data/cards.ts`; the rules engine is in `src/engine/`.

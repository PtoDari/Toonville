# Toonville

A personal, just-for-fun anime-style card battler starring Nickelodeon and Nicktoons Marvel characters.

- [Game plan](PLAN.md)
- [Cast roster](docs/CAST.md): 101 characters and 22 skins
- [Card art prompts](docs/ART_PROMPTS.md): one anime-style prompt + filename per card

## Play it on your phone

**https://ptodari.github.io/Toonville/**

Open the link in Safari (or Chrome), then tap **Share → Add to Home Screen** to get a full-screen app icon.
The site rebuilds automatically every time new code is pushed (see `.github/workflows/deploy-web.yml`).

> Why not Expo Go? Expo Snack currently supports up to SDK 56 while the App Store Expo Go runs SDK 58,
> so a Snack import can't run this project. The web version is the same game.

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

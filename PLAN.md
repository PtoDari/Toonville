# Toonville — Game Plan

A personal, just-for-fun mobile card battler starring classic and modern
Nickelodeon characters, plus the Marvel heroes from shows Nicktoons aired, drawn in an anime-action style.
Quick board-battle matches (place cards, reveal, score) are wrapped in deep
hero-collection progression (shards, stars, levels, training, leaders, events).

Roster: [docs/CAST.md](docs/CAST.md), with 101 characters and 22 skins.

---

## 1. Premise
Toonville is a city where every cartoon world collides. Five crews fight in the
**Toonville Grand Tournament**. You're a new **Crew Manager** recruiting fighters
from every show and every era.

## 2. The five synergy axes
Every card has **five independent traits**. Each one opens a different way to build a winning team.

| Axis | Values | Main bonus |
|---|---|---|
| **Faction** | Lab Rats (blue), Heroes (red), Villains (purple), Animals (green), Friends (yellow) | Faction Surge |
| **Role** | Captain, Striker, Strategist, Guardian, Trickster | Role Fit, Full Crew |
| **Era** | Retro (1987–99), Y2K (2000–09), Modern (2010–today) | Era Block, Time Warp |
| **Show** | Rugrats, SpongeBob, TMNT, Avatar, Danny Phantom... (29 shows) | Show Squad |
| **Tags** | Kid, Genius, Robot, Mutant, Ninja, Bender, Ghost, Pet, Sibling, Marvel... | Abilities and leaders |

Shows are deliberately **split across factions**. For example, Avatar has Aang and Katara as Heroes, Azula and Ozai as Villains, and Appa and Momo as Animals. So a Show Squad team and a Faction Surge team are two different decks, built from the same collection.

## 3. Match rules

### Board
```
Opponent:  [STR] [TRK] [CAP] [STG] [GRD]
             |     |     |     |     |     <- lanes
You:       [STR] [TRK] [CAP] [STG] [GRD]
```
- 5 slots per side, one per role. Neighbors are **adjacent**; the card straight across is your **lane** opponent.
- Any card can go in any slot. Matching its role gives a bonus.

### Flow
- Bring a **12-card roster**; draw 6. Draw 1 more at the start of Q2 and Q3.
- Both players place cards **face-down at the same time**, then reveal:
  - **Q1:** place 2 cards · **Q2:** place 2 · **Q3:** place the last 1, then you may **bench swap** 1 card with one from your hand
  - **Q4 Clutch:** no new cards; Clutch abilities fire; final score.
- Reveal order: Trickster → Strategist → Guardian → Striker → Captain.
- Highest total after Q4 wins. Tiebreaks: biggest single-faction count, then sudden death.

### Chemistry bonuses
| Bonus | Requirement | Points |
|---|---|---|
| **Role Fit** | card in its own role slot | +1 each (off-role −1) |
| **Full Crew** | all 5 cards role-fit | +4 |
| **Faction Surge** | 3 / 4 / 5 of one faction | +3 / +4 / +6 |
| **Show Squad** | 3 / 4 / 5 from one show | +2 / +3 / +5 |
| **Rainbow Crew** | 5 different factions | +8 |
| **Era Block** | 3 / 4 / 5 from one era | +1 / +2 / +3 |
| **Time Warp** | at least one card from each era | +4 |
| **Rivalry Wheel** | your card's faction beats the lane opponent's | +1 per lane |

Faction Surge and Show Squad **don't stack**: only the bigger one counts. Leader and team
effects boost your *other* cards, not the card itself. These values came out of the balance
simulator (`npm run sim`) and will keep moving as we playtest.

**Rivalry Wheel:** Heroes beat Villains, who beat Friends, who beat Animals, who beat Lab Rats, who beat Heroes.
(Villains bully Friends, Friends befriend Animals, Animals wreck the labs, gadgets outsmart Heroes, Heroes defeat Villains.)

### Ability keywords
- **On Reveal:** fires once when flipped.
- **Aura:** constant effect on adjacent cards.
- **Lane:** affects or depends on the card directly across.
- **Clutch:** active in Q4 only.
- **Combo (X):** bonus while character X is on your board.
- **Leader:** active only in the Captain slot.
- **Steadfast:** can't be debuffed. **Intangible:** immune to Lane effects.
- **Cleanse:** removes debuffs. **Silence:** the target loses its ability.

## 4. Ways to win (by design)
1. **Faction Surge:** stack one faction under its leader (e.g. Shredder + Foot Clan).
2. **Show Squad:** a full show cast across factions (Avatar, Rugrats, TMNT, Bikini Bottom).
3. **Rainbow Crew:** one of each faction, using the Rivalry Wheel to win lanes.
4. **Era decks:** all-Retro 90s nostalgia, or Time Warp across all three eras; era skins let you tune this.
5. **Tribes:** Kids, Geniuses and Robots, Mutants and Ninjas, Ghosts, Siblings, Pets, Benders, Marvel.
6. **Duos:** Ren & Stimpy, Bebop & Rocksteady, Mermaid Man & Barnacle Boy, Timmy + Cosmo & Wanda.
7. **Lane control:** debuff, silence and steal points from opponents (Azula, Ty Lee, Amon, Plankton).
8. **Clutch comeback:** stay close, then explode in Q4 (Aang, Ozai, Po, Chuckie, Sheen).
9. **Counters:** Ghost hunters vs Ghosts, Crocker vs Fairies, Amon vs Benders, Vicky vs Kids.

A simulation script will play thousands of AI-vs-AI matches with each archetype,
so we can check that no single strategy dominates.

## 5. Progression
| System | Details |
|---|---|
| **Rarity** | Common, Rare, Epic, Legendary |
| **Stars 1–7** | Shards from packs, campaign and events; +1 base point at 3★, 5★ and 7★ |
| **Levels 1–50** | XP from matches; ability upgrades at 10/20/35/50 |
| **Training I–VII** | Spend training items to unlock stronger ability ranks |
| **Campaign** | "Tournament Road" node map; energy per node; each node drops specific shards |
| **Legendary Trials** | Multi-stage events requiring specific teams (e.g. *Master the Four Elements* needs Avatar characters) |
| **Seasonal events** | Halloween, Winter Festival, Lunar New Year, Valentine's, Summer, Thanksgiving, plus show and movie events |
| **Achievements** | Milestones that unlock characters and Form skins |
| **Dailies** | Daily missions, login streak, free pack timer |
| **Currencies** | Coins, Crystals (no real money), Energy |

Locked cards show as silhouettes with their unlock requirement.

## 6. Art direction
- Anime-action look: bold linework, cel shading, speed lines, glow effects.
- Card frame color = faction; frame finish = rarity (matte, silver, holo, animated gold); badge = era.
- Card pictures load from the repo's `art/` folder (filename = card id); cards without one keep the
  placeholder design. Prompts for every card: `docs/ART_PROMPTS.md`.
- **Synergy popups:** when a combo, aura, leader or team bonus switches on, a "+3 Combo!" bubble
  floats over the card (green for you, pink for the CPU); team bonuses show as banners.

## 7. Tech stack
- **Expo (React Native) + TypeScript**, so it runs in **Expo Go** on your phone.
- **Game engine:** pure deterministic TypeScript (no UI code), tested with Vitest.
- **State:** React state for now; saves on the device (AsyncStorage) arrive with progression.
- **Content:** characters, skins, events and campaign as data files.

### Running it on your phone
See the README for step-by-step Expo Snack + Expo Go instructions.

### Structure
```
App.tsx         # screen switching
src/ui/         # screens and card components
src/engine/     # rules, abilities, scoring, AI (pure TS)
src/data/       # characters, skins, events, campaign
src/state/      # profile, collection, progression
tests/          # engine tests
scripts/        # balance simulator
```

## 8. Build phases
1. **Setup:** Expo + TypeScript project, tests, runs in Expo Go. ✅
2. **Match engine:** rules, abilities, all chemistry bonuses, all 123 cards as data, tests, balance simulator. ✅
3. **Playable match:** board UI, tap-to-place, reveal animations, AI opponent, 10 preset decks. *First playable build.* ✅
4. **Collection and roster builder:** browse cards, locked silhouettes, 12-card roster, pack opening.
5. **Progression:** XP and levels, shards and stars, training, leaders.
6. **Campaign and events:** Tournament Road, energy, Legendary Trials, seasonal calendar, achievements.
7. **Polish:** sounds, animations, tutorial.
8. **Later:** cloud save, PvP against a friend, trading.

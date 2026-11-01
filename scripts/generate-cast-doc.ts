/** Regenerates docs/CAST.md from the card data so the roster doc always matches the game. Run: npm run cast */
import { writeFileSync } from 'node:fs';
import { BASE_CARDS, SKINS } from '../src/data/cards';
import { cardText } from '../src/engine/describe';
import { ERA_LABEL, FACTION_NAMES } from '../src/engine/score';
import { CardDef, Faction } from '../src/engine/types';

const FACTION_BLURB: Record<Faction, string> = {
  labrats: 'Blue: geniuses, robots, gadgets',
  heroes: 'Red: benders, ninjas, superheroes',
  villains: 'Purple: overlords, aliens, ghosts, mutants',
  animals: 'Green: talking animals, sea creatures, spirit beasts',
  friends: 'Yellow: kids, families, neighborhoods',
};
const RARITY_ORDER = { legendary: 0, epic: 1, rare: 2, common: 3 };
const cap = (s: string) => s[0].toUpperCase() + s.slice(1);
const ability = (c: CardDef) => {
  const lines = cardText(c);
  const text = lines.length ? lines.join('. ') : '—';
  return c.abilityName ? `**${c.abilityName}:** ${text}` : text;
};

let md = `# Toonville — Cast Roster

> Generated from \`src/data/cards.ts\` by \`npm run cast\`. Edit the data file, not this doc.

**${BASE_CARDS.length} base characters** + **${SKINS.length} skins** = **${BASE_CARDS.length + SKINS.length} collectible cards**.
Personal, non-commercial fan project. Characters belong to their owners (Nickelodeon/Paramount, Marvel).

- Roles: **CAP** Captain · **STR** Striker · **STG** Strategist · **GRD** Guardian · **TRK** Trickster
- Eras: **Retro** (1987–1999) · **Y2K** (2000–2009) · **Modern** (2010–today)
- **Unlock** blank = packs/campaign.
`;

for (const f of Object.keys(FACTION_NAMES) as Faction[]) {
  const cards = BASE_CARDS.filter((c) => c.faction === f).sort((a, b) => RARITY_ORDER[a.rarity] - RARITY_ORDER[b.rarity] || b.points - a.points);
  md += `\n## ${FACTION_NAMES[f]} (${FACTION_BLURB[f]})\n\n| Name | Show | Era | Role | Rarity | Pts | Tags | Ability | Unlock |\n|---|---|---|---|---|---|---|---|---|\n`;
  for (const c of cards) {
    md += `| ${c.name} | ${c.show} | ${ERA_LABEL[c.era]} | ${c.role} | ${cap(c.rarity)} | ${c.points} | ${c.tags.join(', ')} | ${ability(c)} | ${c.unlock ?? ''} |\n`;
  }
}

md += `\n## Skins\n\nSkins share the base character's progression; you can't field two versions of one character.\n\n| Character | Skin | Type | Era | Faction | Ability | Unlock |\n|---|---|---|---|---|---|---|\n`;
for (const s of SKINS) {
  md += `| ${s.name} | ${s.skin} | ${cap(s.skinType!)} | ${ERA_LABEL[s.era]} | ${FACTION_NAMES[s.faction]} | ${ability(s)} | ${s.unlock} |\n`;
}

const locked = BASE_CARDS.filter((c) => c.unlock).length;
md += `\n**Locked:** ${locked} base characters and all ${SKINS.length} skins. **Available from packs/campaign:** ${BASE_CARDS.length - locked} characters.\n`;

writeFileSync(new URL('../docs/CAST.md', import.meta.url), md);
console.log(`Wrote docs/CAST.md (${BASE_CARDS.length} characters, ${SKINS.length} skins)`);

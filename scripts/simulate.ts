/**
 * Balance simulator: round-robin AI-vs-AI matches between deck archetypes.
 * Usage: npm run sim -- [matchesPerPairing] [--presets]
 *   --presets  only the hand-built preset decks (no random decks)
 */
import { BASE_CARDS } from '../src/data/cards';
import { PRESET_DECKS } from '../src/data/decks';
import { chooseAction } from '../src/engine/ai';
import { createMatch, playQuarter, scoresOf } from '../src/engine/match';
import { Rng } from '../src/engine/rng';
import { Era, Faction } from '../src/engine/types';

const args = process.argv.slice(2);
const N = Number(args.find((a) => /^\d+$/.test(a)) ?? 40);
const presetsOnly = args.includes('--presets');

interface Archetype {
  name: string;
  build: (rng: Rng) => string[];
}

const fixed = (cards: string[]) => () => cards;
const sample = (pool: string[], rng: Rng) => rng.shuffle(pool).slice(0, 12);
const byFaction = (f: Faction) => BASE_CARDS.filter((c) => c.faction === f).map((c) => c.id);
const byEra = (e: Era) => BASE_CARDS.filter((c) => c.era === e).map((c) => c.id);

const allArchetypes: Archetype[] = [
  ...PRESET_DECKS.map((d) => ({ name: d.name, build: fixed(d.cards) })),
  ...(['labrats', 'heroes', 'villains', 'animals', 'friends'] as Faction[]).map((f) => ({
    name: `Random ${f}`,
    build: (rng: Rng) => sample(byFaction(f), rng),
  })),
  { name: 'Random Y2K era', build: (rng: Rng) => sample(byEra('y2k'), rng) },
  {
    name: 'Rainbow mix',
    build: (rng: Rng) => (['labrats', 'heroes', 'villains', 'animals', 'friends'] as Faction[])
      .flatMap((f, i) => sample(byFaction(f), rng).slice(0, i < 2 ? 3 : 2)),
  },
  { name: 'Fully random', build: (rng: Rng) => sample(BASE_CARDS.map((c) => c.id), rng) },
];

const archetypes = presetsOnly ? allArchetypes.slice(0, PRESET_DECKS.length) : allArchetypes;

const wins = new Map<string, number>();
const games = new Map<string, number>();
const chemistryWins = new Map<string, number>();
let totalGames = 0;
let seed = 1;

for (let i = 0; i < archetypes.length; i++) {
  for (let j = i + 1; j < archetypes.length; j++) {
    for (let g = 0; g < N; g++) {
      const rng = new Rng(seed * 2654435761);
      const [A, B] = g % 2 === 0 ? [archetypes[i], archetypes[j]] : [archetypes[j], archetypes[i]];
      let s = createMatch([A.build(rng), B.build(rng)], [A.name, B.name], seed);
      while (!s.finished) s = playQuarter(s, [chooseAction(s, 0, 'normal', seed), chooseAction(s, 1, 'normal', seed + 1)]);
      seed++;
      totalGames++;
      const winner = s.winner === 0 ? A : B;
      wins.set(winner.name, (wins.get(winner.name) ?? 0) + 1);
      for (const a of [A, B]) games.set(a.name, (games.get(a.name) ?? 0) + 1);
      const final = scoresOf(s, 4)[s.winner!];
      for (const c of final.chemistry) {
        const key = c.label.split(':')[0];
        chemistryWins.set(key, (chemistryWins.get(key) ?? 0) + 1);
      }
    }
  }
}

console.log(`\n${totalGames} matches (${N} per pairing)\n`);
console.log('Win rate by archetype:');
const rows = archetypes
  .map((a) => ({ name: a.name, rate: (wins.get(a.name) ?? 0) / (games.get(a.name) ?? 1) }))
  .sort((x, y) => y.rate - x.rate);
for (const r of rows) console.log(`  ${(r.rate * 100).toFixed(1).padStart(5)}%  ${'█'.repeat(Math.round(r.rate * 40))} ${r.name}`);

console.log('\nHow often each chemistry bonus appeared on the WINNING board:');
for (const [k, v] of [...chemistryWins].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${((v / totalGames) * 100).toFixed(1).padStart(5)}%  ${k}`);
}

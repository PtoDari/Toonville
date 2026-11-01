import { CARDS } from '../data/cards';
import { FACTION_NAMES } from './score';
import { CardDef, Condition, Effect, Faction, Filter } from './types';

const FACTION_SINGULAR: Record<Faction, string> = {
  labrats: 'Lab Rat',
  heroes: 'Hero',
  villains: 'Villain',
  animals: 'Animal',
  friends: 'Friend',
};

const signed = (n: number) => (n >= 0 ? `+${n}` : `${n}`);

function filterText(f?: Filter, plural = true): string {
  if (!f || (!f.tags && !f.faction && !f.show)) return plural ? 'allies' : 'ally';
  const parts: string[] = [];
  if (f.tags) parts.push(f.tags.map((t) => (plural ? pluralize(t) : t)).join(' or '));
  if (f.faction) parts.push(plural ? FACTION_NAMES[f.faction] : FACTION_SINGULAR[f.faction]);
  if (f.show) parts.push(`${f.show} cards`);
  return parts.join(' or ');
}

const PLURALS: Record<string, string> = {
  Genius: 'Geniuses',
  'Foot Clan': 'Foot Clan',
  Fire: 'Fire cards',
  'Kung Fu': 'Kung Fu fighters',
  'Bikini Bottom': 'Bikini Bottom cards',
  'O-Town': 'O-Town cards',
  Hillwood: 'Hillwood kids',
  Rugrats: 'Rugrats',
  Family: 'Family members',
  Marvel: 'Marvel cards',
  Armor: 'Armored cards',
};

function pluralize(tag: string): string {
  if (PLURALS[tag]) return PLURALS[tag];
  if (/(s|sh|ch)$/i.test(tag)) return tag;
  if (/y$/i.test(tag) && !/[aeiou]y$/i.test(tag)) return tag.slice(0, -1) + 'ies';
  return tag + 's';
}

const nameOf = (id: string) => CARDS[id]?.name ?? id;

function conditionText(w?: Condition): { prefix: string; suffix: string } {
  if (!w) return { prefix: '', suffix: '' };
  const pre: string[] = [];
  const suf: string[] = [];
  if (w.clutch) pre.push('Clutch');
  if (w.combo) pre.push(`Combo (${nameOf(w.combo)})`);
  if (w.playedInQuarter) suf.push(`if played in Q${w.playedInQuarter}`);
  if (w.comboEither) suf.push(`if ${nameOf(w.comboEither)} is on either board`);
  if (w.notAdjacent) suf.push(`if ${nameOf(w.notAdjacent)} is not adjacent`);
  if (w.laneIs) suf.push(`vs ${article(filterText(w.laneIs, false))} in lane`);
  return { prefix: pre.length ? pre.join(', ') + ': ' : '', suffix: suf.length ? ' ' + suf.join(', ') : '' };
}

function article(s: string) {
  return /^[aeiou]/i.test(s) ? `an ${s}` : `a ${s}`;
}

export function effectText(e: Effect): string {
  switch (e.kind) {
    case 'self': {
      const c = conditionText(e.when);
      return `${c.prefix}${signed(e.amount)}${c.suffix}`;
    }
    case 'per':
      return `${signed(e.amount)} for each other ${filterText(e.filter, false)} on your board`;
    case 'aura':
      return `Aura: adjacent ${filterText(e.filter)} ${signed(e.amount)}`;
    case 'team': {
      const c = conditionText(e.when);
      return `${c.prefix}${e.filter ? `your other ${filterText(e.filter)}` : 'all your allies'} ${signed(e.amount)}`;
    }
    case 'lane':
      return e.filter ? `Lane: opposing ${filterText(e.filter, false)} ${signed(e.amount)}` : `Lane: opposing card ${signed(e.amount)}`;
    case 'enemies':
      return `All opposing ${filterText(e.filter)} ${signed(e.amount)}`;
    case 'steal':
      return `Lane: steal ${e.amount} point${e.amount > 1 ? 's' : ''}`;
    case 'cleanse':
      return 'Aura: adjacent allies ignore debuffs';
    case 'silence':
      return e.filter
        ? `On Reveal: opposing ${filterText(e.filter, false)} loses its ability`
        : 'On Reveal: opposing card loses its ability';
    case 'random':
      return `On Reveal: gain a random +${e.min} to +${e.max}`;
    case 'randomAlly':
      return `On Reveal: a random ally ${signed(e.amount)}`;
  }
}

/** Lines of rules text for a card. */
export function cardText(c: CardDef): string[] {
  const lines: string[] = [];
  if (c.keywords.includes('steadfast')) lines.push('Steadfast: ignores debuffs');
  if (c.keywords.includes('intangible')) lines.push('Intangible: immune to Lane effects');
  if (c.countsAsFactions?.length) lines.push(`Also counts as ${c.countsAsFactions.map((f) => FACTION_NAMES[f]).join(', ')} for Faction Surge`);
  for (const e of c.abilities) lines.push(effectText(e));
  for (const e of c.leader) lines.push(`Leader: ${effectText(e)}`);
  if (c.holiday) lines.push(`Holiday: +1 during ${c.holiday.event}`);
  return lines;
}

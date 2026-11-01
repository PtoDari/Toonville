import { getCard } from '../data/cards';
import {
  BoardCard,
  CardDef,
  CardScore,
  Condition,
  ModKind,
  Faction,
  Filter,
  Mod,
  RIVALRY_BEATS,
  SideScore,
  SLOT_ROLES,
} from './types';

export function matches(card: CardDef, filter?: Filter): boolean {
  if (!filter) return true;
  const { tags, faction, show } = filter;
  if (!tags && !faction && !show) return true;
  if (tags && tags.some((t) => card.tags.includes(t))) return true;
  if (faction && (card.faction === faction || card.countsAsFactions?.includes(faction))) return true;
  if (show && card.show === show) return true;
  return false;
}

interface Ctx {
  boards: [(BoardCard | null)[], (BoardCard | null)[]];
  quarter: number;
  month?: number;
}

type Board = (BoardCard | null)[];

function defAt(board: Board, slot: number): CardDef | null {
  const bc = board[slot];
  return bc ? getCard(bc.cardId) : null;
}

function hasBase(board: Board, baseId: string): boolean {
  return board.some((bc) => bc !== null && getCard(bc.cardId).baseId === baseId);
}

function conditionMet(when: Condition | undefined, side: 0 | 1, slot: number, ctx: Ctx): boolean {
  if (!when) return true;
  const mine = ctx.boards[side];
  const theirs = ctx.boards[side === 0 ? 1 : 0];
  const bc = mine[slot]!;
  if (when.clutch && ctx.quarter < 4) return false;
  if (when.playedInQuarter !== undefined && bc.playedQuarter !== when.playedInQuarter) return false;
  if (when.combo && !hasBase(mine, when.combo)) return false;
  if (when.comboEither && !hasBase(mine, when.comboEither) && !hasBase(theirs, when.comboEither)) return false;
  if (when.notAdjacent) {
    for (const n of [slot - 1, slot + 1]) {
      const d = n >= 0 && n < 5 ? defAt(mine, n) : null;
      if (d && d.baseId === when.notAdjacent) return false;
    }
  }
  if (when.laneIs) {
    const opp = defAt(theirs, slot);
    if (!opp || !matches(opp, when.laneIs)) return false;
  }
  return true;
}

/** Slots whose cards ignore debuffs from other cards. */
function protectedSlots(board: Board): Set<number> {
  const out = new Set<number>();
  board.forEach((bc, slot) => {
    if (!bc) return;
    const d = getCard(bc.cardId);
    if (d.keywords.includes('steadfast')) out.add(slot);
    if (!bc.silenced && d.abilities.some((e) => e.kind === 'cleanse')) {
      for (const n of [slot - 1, slot + 1]) if (n >= 0 && n < 5 && board[n]) out.add(n);
    }
  });
  return out;
}


/**
 * Compute the full score for both sides at a given quarter.
 * Scores are recomputed from the board each time, so moving or silencing cards is always consistent.
 */
export function computeScores(
  boards: [Board, Board],
  quarter: number,
  month?: number,
): [SideScore, SideScore] {
  const ctx: Ctx = { boards, quarter, month };
  const mods: [Mod[][], Mod[][]] = [
    [[], [], [], [], []],
    [[], [], [], [], []],
  ];
  const protectedBy: [Set<number>, Set<number>] = [protectedSlots(boards[0]), protectedSlots(boards[1])];

  const push = (side: 0 | 1, slot: number, mod: Mod, viaLane = false) => {
    const bc = boards[side][slot];
    if (!bc) return;
    if (mod.amount < 0 && mod.source !== 'self') {
      if (protectedBy[side].has(slot)) return;
      if (viaLane && getCard(bc.cardId).keywords.includes('intangible')) return;
    }
    mods[side][slot].push(mod);
  };

  for (const side of [0, 1] as const) {
    const other = (side === 0 ? 1 : 0) as 0 | 1;
    const mine = boards[side];
    const theirs = boards[other];
    mine.forEach((bc, slot) => {
      if (!bc) return;
      const def = getCard(bc.cardId);
      for (const m of bc.fixedMods) mods[side][slot].push(m);
      if (def.holiday && month === def.holiday.month) {
        mods[side][slot].push({ amount: 1, label: def.holiday.event, source: 'self', kind: 'holiday' });
      }
      if (bc.silenced) return;
      const label = def.abilityName ?? def.name;
      const isCaptain = SLOT_ROLES[slot] === 'CAP';
      const effects = [...def.abilities.map((e) => ({ e, leader: false })), ...(isCaptain ? def.leader.map((e) => ({ e, leader: true })) : [])];
      for (const { e: eff, leader } of effects) {
        if ('when' in eff && !conditionMet(eff.when, side, slot, ctx)) continue;
        switch (eff.kind) {
          case 'self': {
            const w = eff.when;
            const kind: ModKind = w?.combo || w?.comboEither ? 'combo' : w?.clutch ? 'clutch' : w?.laneIs ? 'matchup' : 'bonus';
            const comboLabel = w?.combo || w?.comboEither ? getCard(w.combo ?? w.comboEither!).name : label;
            push(side, slot, { amount: eff.amount, label: comboLabel, source: 'self', kind });
            break;
          }
          case 'per': {
            const count = mine.filter((o, i) => o && i !== slot && matches(getCard(o.cardId), eff.filter)).length;
            if (count > 0) push(side, slot, { amount: eff.amount * count, label, source: 'self', kind: 'synergy' });
            break;
          }
          case 'aura':
            for (const n of [slot - 1, slot + 1]) {
              const d = n >= 0 && n < 5 ? defAt(mine, n) : null;
              if (d && matches(d, eff.filter)) push(side, n, { amount: eff.amount, label: def.name, source: 'ally', kind: 'aura' });
            }
            break;
          case 'team':
            mine.forEach((o, i) => {
              if (o && i !== slot && matches(getCard(o.cardId), eff.filter)) {
                const kind: ModKind = leader ? 'leader' : eff.when?.clutch ? 'clutch' : 'team';
                push(side, i, { amount: eff.amount, label: def.name, source: 'ally', kind });
              }
            });
            break;
          case 'lane': {
            const d = defAt(theirs, slot);
            if (d && matches(d, eff.filter)) push(other, slot, { amount: eff.amount, label: def.name, source: 'enemy', kind: 'debuff' }, true);
            break;
          }
          case 'enemies':
            theirs.forEach((o, i) => {
              if (o && matches(getCard(o.cardId), eff.filter)) push(other, i, { amount: eff.amount, label: def.name, source: 'enemy', kind: 'debuff' });
            });
            break;
          case 'steal': {
            const target = theirs[slot];
            if (!target) break;
            const immune = protectedBy[other].has(slot) || getCard(target.cardId).keywords.includes('intangible');
            if (immune) break;
            push(other, slot, { amount: -eff.amount, label: def.name, source: 'enemy', kind: 'debuff' }, true);
            push(side, slot, { amount: eff.amount, label, source: 'self', kind: 'steal' });
            break;
          }
          // cleanse/silence/random/randomAlly are handled at reveal time or via protectedSlots
          default:
            break;
        }
      }
    });
  }

  const result = ([0, 1] as const).map((side): SideScore => {
    const other = side === 0 ? 1 : 0;
    const board = boards[side];
    const chemistry: Mod[] = [];
    const cards: (CardScore | null)[] = board.map((bc, slot) => {
      if (!bc) return null;
      const def = getCard(bc.cardId);
      const m = mods[side][slot];
      const roleFit = def.role === SLOT_ROLES[slot];
      m.push({ amount: roleFit ? 1 : -1, label: roleFit ? 'Role fit' : 'Off-role', source: 'chemistry', kind: 'role' });
      const opp = defAt(boards[other], slot);
      if (opp && RIVALRY_BEATS[def.faction] === opp.faction) {
        m.push({ amount: 1, label: 'Rivalry', source: 'chemistry', kind: 'rivalry' });
      }
      const points = Math.max(0, def.points + m.reduce((s, x) => s + x.amount, 0));
      return { base: def.points, mods: m, points, silenced: bc.silenced };
    });
    chemistry.push(...teamChemistry(board));
    const total = cards.reduce((s, c) => s + (c?.points ?? 0), 0) + chemistry.reduce((s, c) => s + c.amount, 0);
    return { cards, chemistry, total };
  });
  return [result[0], result[1]];
}

const SURGE: Record<number, number> = { 3: 3, 4: 4, 5: 6 };
const SHOW_SQUAD: Record<number, number> = { 3: 2, 4: 3, 5: 5 };
const ERA_BLOCK: Record<number, number> = { 3: 1, 4: 2, 5: 3 };

export const FACTION_NAMES: Record<Faction, string> = {
  labrats: 'Lab Rats',
  heroes: 'Heroes',
  villains: 'Villains',
  animals: 'Animals',
  friends: 'Friends',
};

export function factionCounts(board: Board): Map<Faction, number> {
  const counts = new Map<Faction, number>();
  for (const bc of board) {
    if (!bc) continue;
    const d = getCard(bc.cardId);
    for (const f of new Set([d.faction, ...(d.countsAsFactions ?? [])])) counts.set(f, (counts.get(f) ?? 0) + 1);
  }
  return counts;
}

function best<K>(counts: Map<K, number>): [K, number] | null {
  let top: [K, number] | null = null;
  for (const [k, v] of counts) if (!top || v > top[1]) top = [k, v];
  return top;
}

/** Team-wide chemistry bonuses: Full Crew, Faction Surge, Rainbow Crew, Show Squad, Era Block, Time Warp. */
export function teamChemistry(board: Board): Mod[] {
  const defs = board.flatMap((bc, slot) => (bc ? [{ def: getCard(bc.cardId), slot }] : []));
  const out: Mod[] = [];
  const chem = (amount: number, label: string) => out.push({ amount, label, source: 'chemistry', kind: 'chemistry' });

  if (defs.length === 5 && defs.every(({ def, slot }) => def.role === SLOT_ROLES[slot])) chem(4, 'Full Crew');

  // Faction Surge and Show Squad don't stack: only the bigger one counts.
  const surge = best(factionCounts(board));
  const surgeBonus = surge ? SURGE[surge[1]] ?? 0 : 0;
  const shows = new Map<string, number>();
  for (const { def } of defs) shows.set(def.show, (shows.get(def.show) ?? 0) + 1);
  const show = best(shows);
  const showBonus = show ? SHOW_SQUAD[show[1]] ?? 0 : 0;
  if (showBonus > surgeBonus) chem(showBonus, `Show Squad: ${show![0]}`);
  else if (surgeBonus > 0) chem(surgeBonus, `Faction Surge: ${FACTION_NAMES[surge![0]]}`);

  if (new Set(defs.map(({ def }) => def.faction)).size === 5) chem(8, 'Rainbow Crew');


  const eras = new Map<string, number>();
  for (const { def } of defs) eras.set(def.era, (eras.get(def.era) ?? 0) + 1);
  const era = best(eras);
  if (era && ERA_BLOCK[era[1]]) chem(ERA_BLOCK[era[1]], `Era Block: ${ERA_LABEL[era[0] as CardDef['era']]}`);
  if (eras.size === 3) chem(4, 'Time Warp');

  return out;
}

export const ERA_LABEL: Record<CardDef['era'], string> = { retro: 'Retro', y2k: 'Y2K', modern: 'Modern' };

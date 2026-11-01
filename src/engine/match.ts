import { getCard } from '../data/cards';
import { Rng } from './rng';
import { computeScores, factionCounts, matches } from './score';
import {
  BoardCard,
  HAND_SIZE,
  MatchOptions,
  MatchState,
  PLACEMENTS_PER_QUARTER,
  PlayerState,
  REVEAL_PRIORITY,
  ROSTER_SIZE,
  SideScore,
  SLOT_ROLES,
  TurnAction,
} from './types';

export function validateRoster(roster: string[]): string | null {
  if (roster.length !== ROSTER_SIZE) return `Roster must have ${ROSTER_SIZE} cards (has ${roster.length})`;
  const bases = new Set<string>();
  for (const id of roster) {
    const base = getCard(id).baseId;
    if (bases.has(base)) return `Only one version of ${getCard(id).name} allowed`;
    bases.add(base);
  }
  return null;
}

export function createMatch(
  rosters: [string[], string[]],
  names: [string, string],
  seed: number,
  options: MatchOptions = {},
): MatchState {
  for (const r of rosters) {
    const err = validateRoster(r);
    if (err) throw new Error(err);
  }
  const rng = new Rng(seed);
  const players = rosters.map((roster, i): PlayerState => {
    const deck = rng.shuffle(roster);
    return { name: names[i], hand: deck.splice(0, HAND_SIZE), deck, board: [null, null, null, null, null], discard: [] };
  }) as [PlayerState, PlayerState];
  return {
    quarter: 1,
    finished: false,
    winner: null,
    players,
    rngState: rng.state,
    nextUid: 1,
    log: ['Tip-off! Quarter 1: place 2 cards.'],
    history: [],
    options,
  };
}

export function scoresOf(state: MatchState, quarter = state.quarter): [SideScore, SideScore] {
  return computeScores([state.players[0].board, state.players[1].board], quarter, state.options.month);
}

/** Returns an error message, or null if the action is legal. */
export function validateAction(state: MatchState, player: 0 | 1, action: TurnAction): string | null {
  if (state.finished) return 'Match is over';
  const p = state.players[player];
  const need = PLACEMENTS_PER_QUARTER[state.quarter];
  if (action.placements.length !== need) return `Place exactly ${need} card(s) this quarter`;
  const hand = [...p.hand];
  const slots = new Set<number>();
  for (const pl of action.placements) {
    const idx = hand.indexOf(pl.cardId);
    if (idx < 0) return `${pl.cardId} is not in hand`;
    hand.splice(idx, 1);
    if (pl.slot < 0 || pl.slot > 4) return 'Invalid slot';
    if (p.board[pl.slot] || slots.has(pl.slot)) return 'Slot already taken';
    slots.add(pl.slot);
  }
  if (action.swap) {
    if (state.quarter !== 3) return 'Bench swaps are only allowed in Q3';
    if (!hand.includes(action.swap.cardId)) return 'Swap card is not in hand';
    if (!p.board[action.swap.slot] && !slots.has(action.swap.slot)) return 'Nothing to swap in that slot';
    if (slots.has(action.swap.slot)) return 'Cannot swap a card placed this quarter';
  }
  return null;
}

function cloneState(s: MatchState): MatchState {
  return {
    ...s,
    players: s.players.map((p) => ({
      ...p,
      deck: [...p.deck],
      hand: [...p.hand],
      discard: [...p.discard],
      board: p.board.map((bc) => (bc ? { ...bc, fixedMods: [...bc.fixedMods] } : null)),
    })) as [PlayerState, PlayerState],
    log: [...s.log],
    history: [...s.history],
  };
}

/** Both players submit their (secret) placements; cards are revealed and resolved. Returns a new state. */
export function playQuarter(state: MatchState, actions: [TurnAction, TurnAction]): MatchState {
  for (const pl of [0, 1] as const) {
    const err = validateAction(state, pl, actions[pl]);
    if (err) throw new Error(`${state.players[pl].name}: ${err}`);
  }
  const s = cloneState(state);
  const rng = new Rng(s.rngState);
  const q = s.quarter;
  const revealed: { side: 0 | 1; slot: number }[] = [];

  for (const side of [0, 1] as const) {
    const p = s.players[side];
    const take = (cardId: string) => p.hand.splice(p.hand.indexOf(cardId), 1);
    for (const pl of actions[side].placements) {
      take(pl.cardId);
      p.board[pl.slot] = newBoardCard(s, pl.cardId, q);
      revealed.push({ side, slot: pl.slot });
    }
    const sw = actions[side].swap;
    if (sw) {
      take(sw.cardId);
      const old = p.board[sw.slot]!;
      p.discard.push(old.cardId);
      p.board[sw.slot] = newBoardCard(s, sw.cardId, q);
      revealed.push({ side, slot: sw.slot });
      s.log.push(`${p.name} benches ${getCard(old.cardId).name} for ${getCard(sw.cardId).name}.`);
    }
  }

  // Reveal order: by slot role priority, then the player with initiative (alternates each quarter).
  const initiative = q % 2 === 1 ? 0 : 1;
  revealed.sort(
    (a, b) =>
      REVEAL_PRIORITY[SLOT_ROLES[a.slot]] - REVEAL_PRIORITY[SLOT_ROLES[b.slot]] ||
      (a.side === initiative ? -1 : 1) - (b.side === initiative ? -1 : 1),
  );
  for (const { side, slot } of revealed) resolveReveal(s, side, slot, rng);

  const scores = computeScores([s.players[0].board, s.players[1].board], q, s.options.month);
  s.history.push({ quarter: q, totals: [scores[0].total, scores[1].total] });
  s.log.push(`End of Q${q}: ${s.players[0].name} ${scores[0].total} – ${scores[1].total} ${s.players[1].name}`);

  if (q === 3) {
    finish(s, rng);
  } else {
    s.quarter = q + 1;
    for (const p of s.players) if (p.deck.length) p.hand.push(p.deck.shift()!);
    s.log.push(`Quarter ${s.quarter}: place ${PLACEMENTS_PER_QUARTER[s.quarter]} card(s).`);
  }
  s.rngState = rng.state;
  return s;
}

function newBoardCard(s: MatchState, cardId: string, quarter: number): BoardCard {
  return { uid: s.nextUid++, cardId, playedQuarter: quarter, silenced: false, fixedMods: [] };
}

function resolveReveal(s: MatchState, side: 0 | 1, slot: number, rng: Rng) {
  const me = s.players[side];
  const them = s.players[side === 0 ? 1 : 0];
  const bc = me.board[slot]!;
  if (bc.silenced) return;
  const def = getCard(bc.cardId);
  const label = def.abilityName ?? def.name;
  for (const eff of def.abilities) {
    if (eff.kind === 'silence') {
      const target = them.board[slot];
      if (!target) continue;
      const tdef = getCard(target.cardId);
      if (tdef.keywords.includes('intangible') || !matches(tdef, eff.filter)) continue;
      target.silenced = true;
      s.log.push(`${def.name} silences ${tdef.name}!`);
    } else if (eff.kind === 'random') {
      const amount = rng.int(eff.min, eff.max);
      bc.fixedMods.push({ amount, label, source: 'self', kind: 'chaos' });
      s.log.push(`${def.name} rolls +${amount}!`);
    } else if (eff.kind === 'randomAlly') {
      const allies = me.board.map((o, i) => (o && i !== slot ? i : -1)).filter((i) => i >= 0);
      if (!allies.length) continue;
      const target = me.board[rng.pick(allies)]!;
      target.fixedMods.push({ amount: eff.amount, label: def.name, source: 'ally', kind: 'aura' });
      s.log.push(`${def.name} draws a boost for ${getCard(target.cardId).name}.`);
    }
  }
}

function finish(s: MatchState, rng: Rng) {
  s.quarter = 4;
  s.finished = true;
  const [a, b] = scoresOf(s, 4);
  s.history.push({ quarter: 4, totals: [a.total, b.total] });
  s.log.push(`CLUTCH! Final: ${s.players[0].name} ${a.total} – ${b.total} ${s.players[1].name}`);
  if (a.total !== b.total) {
    s.winner = a.total > b.total ? 0 : 1;
    s.winReason = 'Final score';
    return;
  }
  const top = (side: 0 | 1) => Math.max(0, ...factionCounts(s.players[side].board).values());
  if (top(0) !== top(1)) {
    s.winner = top(0) > top(1) ? 0 : 1;
    s.winReason = 'Tiebreak: biggest faction';
    return;
  }
  // Sudden death: next card in each deck (or a coin flip if decks are empty).
  const sd = (side: 0 | 1) => {
    const id = s.players[side].deck[0];
    return id ? getCard(id).points : 0;
  };
  const [x, y] = [sd(0), sd(1)];
  s.winner = x !== y ? (x > y ? 0 : 1) : rng.next() < 0.5 ? 0 : 1;
  s.winReason = 'Sudden death';
}

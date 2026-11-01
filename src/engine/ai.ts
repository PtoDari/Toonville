import { getCard } from '../data/cards';
import { Rng } from './rng';
import { computeScores } from './score';
import { BoardCard, MatchState, PLACEMENTS_PER_QUARTER, Placement, TurnAction } from './types';

export type Difficulty = 'easy' | 'normal' | 'hard';

function* combinations<T>(items: T[], k: number, start = 0, acc: T[] = []): Generator<T[]> {
  if (acc.length === k) {
    yield acc;
    return;
  }
  for (let i = start; i < items.length; i++) yield* combinations(items, k, i + 1, [...acc, items[i]]);
}

function* permutations<T>(items: T[], k: number, acc: T[] = []): Generator<T[]> {
  if (acc.length === k) {
    yield acc;
    return;
  }
  for (const it of items) if (!acc.includes(it)) yield* permutations(items, k, [...acc, it]);
}

/**
 * Greedy AI: tries every legal placement and picks the one that maximizes the projected
 * final (Clutch) score margin against the opponent's currently visible board.
 */
export function chooseAction(state: MatchState, player: 0 | 1, difficulty: Difficulty = 'normal', seed = 1): TurnAction {
  const rng = new Rng(seed ^ (state.quarter * 7919) ^ (player * 104729));
  const me = state.players[player];
  const them = state.players[player === 0 ? 1 : 0];
  const need = PLACEMENTS_PER_QUARTER[state.quarter];
  const empty = me.board.map((bc, i) => (bc ? -1 : i)).filter((i) => i >= 0);
  const noise = difficulty === 'easy' ? 6 : difficulty === 'normal' ? 1.5 : 0;

  const evaluate = (board: (BoardCard | null)[]) => {
    const boards: [(BoardCard | null)[], (BoardCard | null)[]] = player === 0 ? [board, them.board] : [them.board, board];
    const [a, b] = computeScores(boards, 4, state.options.month);
    const margin = player === 0 ? a.total - b.total : b.total - a.total;
    return margin + (noise ? (rng.next() - 0.5) * noise : 0);
  };

  const fake = (cardId: string): BoardCard => ({ uid: -1, cardId, playedQuarter: state.quarter, silenced: false, fixedMods: [] });

  let best: { action: TurnAction; value: number } | null = null;
  const handIdx = me.hand.map((_, i) => i);
  for (const cardSet of combinations(handIdx, need)) {
    for (const slots of permutations(empty, need)) {
      const board = [...me.board];
      const placements: Placement[] = cardSet.map((hi, k) => ({ cardId: me.hand[hi], slot: slots[k] }));
      for (const pl of placements) board[pl.slot] = fake(pl.cardId);
      const consider = (action: TurnAction, b: (BoardCard | null)[]) => {
        const value = evaluate(b);
        if (!best || value > best.value) best = { action, value };
      };
      consider({ placements }, board);
      if (state.quarter === 3) {
        const rest = handIdx.filter((i) => !cardSet.includes(i));
        for (const hi of rest) {
          for (let slot = 0; slot < 5; slot++) {
            if (!me.board[slot]) continue; // can only swap a card already on the board
            const b2 = [...board];
            b2[slot] = fake(me.hand[hi]);
            consider({ placements, swap: { cardId: me.hand[hi], slot } }, b2);
          }
        }
      }
    }
  }
  return best!.action;
}

/** Short human-readable summary of an AI action, for logs. */
export function describeAction(action: TurnAction): string {
  const parts = action.placements.map((p) => `${getCard(p.cardId).name} → slot ${p.slot + 1}`);
  if (action.swap) parts.push(`swap in ${getCard(action.swap.cardId).name} at slot ${action.swap.slot + 1}`);
  return parts.join(', ');
}

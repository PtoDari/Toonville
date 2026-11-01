import { describe, expect, it } from 'vitest';
import { ALL_CARDS, BASE_CARDS, CARDS, SKINS } from '../src/data/cards';
import { PRESET_DECKS } from '../src/data/decks';
import { chooseAction } from '../src/engine/ai';
import { cardText } from '../src/engine/describe';
import { createMatch, playQuarter, validateRoster } from '../src/engine/match';
import { computeScores, teamChemistry } from '../src/engine/score';
import { BoardCard, SLOT_ROLES } from '../src/engine/types';

let uid = 1;
const bc = (cardId: string, extra: Partial<BoardCard> = {}): BoardCard => ({
  uid: uid++, cardId, playedQuarter: 1, silenced: false, fixedMods: [], ...extra,
});
type B = (BoardCard | null)[];
const board = (...ids: (string | null)[]): B => {
  const b: B = [null, null, null, null, null];
  ids.forEach((id, i) => (b[i] = id ? bc(id) : null));
  return b;
};
const empty = (): B => [null, null, null, null, null];
const modsOf = (b: [B, B], side: 0 | 1, slot: number, quarter = 1) =>
  computeScores(b, quarter)[side].cards[slot]!;

describe('card data', () => {
  it('has 101 base characters and 22 skins with unique ids', () => {
    expect(BASE_CARDS).toHaveLength(101);
    expect(SKINS).toHaveLength(22);
    expect(new Set(ALL_CARDS.map((c) => c.id)).size).toBe(123);
  });

  it('every combo/condition references a real character', () => {
    for (const c of ALL_CARDS) {
      for (const e of [...c.abilities, ...c.leader]) {
        const w = 'when' in e ? e.when : undefined;
        for (const ref of [w?.combo, w?.comboEither, w?.notAdjacent]) if (ref) expect(CARDS[ref], `${c.id} → ${ref}`).toBeDefined();
      }
    }
  });

  it('generates rules text for every card', () => {
    for (const c of ALL_CARDS) for (const line of cardText(c)) expect(line).not.toMatch(/undefined/);
    expect(cardText(CARDS['jimmy-neutron'])).toContain('+1 for each other Genius or Robot on your board');
  });

  it('all preset decks are legal', () => {
    for (const d of PRESET_DECKS) expect(validateRoster(d.cards), d.id).toBeNull();
  });
});

describe('scoring', () => {
  it('applies role fit and off-role penalties', () => {
    // Raphael is a Striker: slot 0 is STR (fit), slot 1 is TRK (off-role)
    expect(modsOf([board('raphael'), empty()], 0, 0).points).toBe(8);
    expect(modsOf([board(null, 'raphael'), empty()], 0, 1).points).toBe(6);
  });

  it('combo needs the partner on your board', () => {
    const alone = modsOf([board(null, 'barnacle-boy'), empty()], 0, 1).points;
    const together = modsOf([board(null, 'barnacle-boy', 'mermaid-man'), empty()], 0, 1).points;
    expect(together - alone).toBe(3);
  });

  it('tags modifiers with their cause for UI popups', () => {
    const s = modsOf([board(null, 'barnacle-boy', 'mermaid-man'), empty()], 0, 1);
    expect(s.mods).toContainEqual(expect.objectContaining({ kind: 'combo', amount: 3, label: 'Mermaid Man' }));
    const leo = modsOf([board('raphael', null, 'leonardo'), empty()], 0, 0);
    expect(leo.mods).toContainEqual(expect.objectContaining({ kind: 'leader', label: 'Leonardo' }));
  });

  it('leader effects only work in the Captain slot', () => {
    // Leonardo leader: Ninjas and Mutants +2. Raphael in STR.
    const asCaptain = modsOf([board('raphael', null, 'leonardo'), empty()], 0, 0).points;
    const offCaptain = modsOf([board('raphael', 'leonardo'), empty()], 0, 0).points;
    expect(asCaptain - offCaptain).toBe(2);
  });

  it('clutch only fires in Q4', () => {
    expect(modsOf([board('jenny-wakeman'), empty()], 0, 0, 3).points).toBe(12);
    expect(modsOf([board('jenny-wakeman'), empty()], 0, 0, 4).points).toBe(15);
  });

  it('lane debuffs hit the opposing card; steadfast and intangible protect', () => {
    // Azula (STR slot 0) has Lane -2; the Flying Dutchman is a Villain Striker with no effect on Heroes.
    const vs = (attacker: string, defender: string) => modsOf([board(attacker), board(defender)], 1, 0).points;
    expect(vs('flying-dutchman', 'raphael') - vs('azula', 'raphael')).toBe(2);
    expect(vs('flying-dutchman', 'wolverine') - vs('azula', 'wolverine')).toBe(0); // steadfast
    const danny = (opp: string | null) => modsOf([board(null, opp), board(null, 'danny-phantom')], 1, 1).points;
    expect(danny('storm')).toBe(danny(null)); // intangible
  });

  it('cleanse protects adjacent allies', () => {
    const without = modsOf([board('azula'), board('raphael')], 1, 0).points;
    const withKatara = modsOf([board('azula'), board('raphael', 'katara')], 1, 0).points;
    expect(withKatara - without).toBe(2);
  });

  it('awards rivalry when your faction beats the lane opponent', () => {
    // Heroes beat Villains
    const s = modsOf([board('raphael'), board('rocksteady')], 0, 0);
    expect(s.mods.some((m) => m.label === 'Rivalry')).toBe(true);
  });

  it('team chemistry: show squad, faction surge, era block, time warp, full crew, rainbow', () => {
    const tmnt = teamChemistry(board('raphael', 'michelangelo', 'leonardo', 'donatello', 'metalhead'));
    const labels = tmnt.map((m) => m.label);
    expect(labels).toContain('Show Squad: TMNT');
    expect(labels).toContain('Full Crew');
    expect(labels).toContain('Era Block: Retro');
    // Faction Surge (Heroes x3 = +3) doesn't stack with the bigger Show Squad (TMNT x5 = +5)
    expect(labels).not.toContain('Faction Surge: Heroes');
    const surge = teamChemistry(board('raphael', 'danny-phantom', 'aang'));
    expect(surge.map((m) => m.label)).toContain('Faction Surge: Heroes');

    const rainbow = teamChemistry(board('raphael', 'gir', 'spongebob', 'jimmy-neutron', 'chuckie'));
    expect(rainbow.map((m) => m.label)).toContain('Rainbow Crew');

    const warp = teamChemistry(board('korra', 'gir', 'spongebob'));
    expect(warp.map((m) => m.label)).toContain('Time Warp');
  });

  it('El Tigre counts toward Villain surge', () => {
    const chem = teamChemistry(board('el-tigre', 'vicky', null, 'zim'));
    expect(chem.map((m) => m.label)).toContain('Faction Surge: Villains');
  });

  it('skins use their own era and count as the base character for combos', () => {
    const chem = teamChemistry(board('leo-rise', 'korra', 'lincoln-loud'));
    expect(chem.map((m) => m.label)).toContain('Era Block: Modern');
    // Gerald strawberry suit combos with Arnold
    const g = modsOf([board('gerald-strawberry', null, 'arnold'), empty()], 0, 0).points;
    expect(g).toBeGreaterThan(CARDS['gerald-strawberry'].points + 3);
  });

  it('holiday skins get +1 in their month', () => {
    const b: [B, B] = [board(null, 'mikey-pizza'), empty()];
    const oct = computeScores(b, 1, 10)[0].cards[1]!.points;
    const jan = computeScores(b, 1, 1)[0].cards[1]!.points;
    expect(oct - jan).toBe(1);
  });
});

describe('match flow', () => {
  const [a, b] = [PRESET_DECKS[0].cards, PRESET_DECKS[1].cards];

  it('rejects rosters with two versions of one character', () => {
    expect(validateRoster([...a.slice(0, 11), 'leo-rise'])).toMatch(/Only one version/);
  });

  it('plays a full AI vs AI match to a winner', () => {
    let s = createMatch([a, b], ['P1', 'P2'], 42);
    expect(s.players[0].hand).toHaveLength(6);
    while (!s.finished) s = playQuarter(s, [chooseAction(s, 0), chooseAction(s, 1)]);
    expect(s.quarter).toBe(4);
    expect(s.winner === 0 || s.winner === 1).toBe(true);
    expect(s.players[0].board.every(Boolean)).toBe(true);
    expect(s.history.map((h) => h.quarter)).toEqual([1, 2, 3, 4]);
  });

  it('is deterministic for the same seed', () => {
    const run = () => {
      let s = createMatch([a, b], ['P1', 'P2'], 7);
      while (!s.finished) s = playQuarter(s, [chooseAction(s, 0), chooseAction(s, 1)]);
      return s.history;
    };
    expect(run()).toEqual(run());
  });

  it('silence turns off the target ability', () => {
    // Ty Lee (TRK slot) silences opposing Michelangelo, so his Turtle aura stops
    let s = createMatch([a, PRESET_DECKS[2].cards], ['P1', 'P2'], 1);
    s.players[0].hand = ['michelangelo', 'raphael', ...s.players[0].hand.slice(2)];
    s.players[1].hand = ['ty-lee', 'katara', ...s.players[1].hand.slice(2)];
    s = playQuarter(s, [
      { placements: [{ cardId: 'michelangelo', slot: 1 }, { cardId: 'raphael', slot: 0 }] },
      { placements: [{ cardId: 'ty-lee', slot: 1 }, { cardId: 'katara', slot: 3 }] },
    ]);
    expect(s.players[0].board[1]!.silenced).toBe(true);
  });

  it('validates placement counts and slots', () => {
    const s = createMatch([a, b], ['P1', 'P2'], 3);
    const h = s.players[0].hand;
    expect(() => playQuarter(s, [{ placements: [{ cardId: h[0], slot: 0 }] }, chooseAction(s, 1)])).toThrow(/exactly 2/);
    expect(SLOT_ROLES).toHaveLength(5);
  });
});

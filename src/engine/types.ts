export type Faction = 'labrats' | 'heroes' | 'villains' | 'animals' | 'friends';
export type Role = 'CAP' | 'STR' | 'STG' | 'GRD' | 'TRK';
export type Era = 'retro' | 'y2k' | 'modern';
export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';
export type Keyword = 'steadfast' | 'intangible';

/** Matches a card if ANY listed criterion matches (tags are any-of). Empty filter matches everything. */
export interface Filter {
  tags?: string[];
  faction?: Faction;
  show?: string;
}

export interface Condition {
  /** Only active in Q4 (Clutch). */
  clutch?: boolean;
  /** Only if this card was played in the given quarter. */
  playedInQuarter?: number;
  /** Character (base id) must be on your board. */
  combo?: string;
  /** Character (base id) must be on either board. */
  comboEither?: string;
  /** Character (base id) must NOT be adjacent. */
  notAdjacent?: string;
  /** Opposing lane card must match. */
  laneIs?: Filter;
}

export type Effect =
  /** +N to this card. */
  | { kind: 'self'; amount: number; when?: Condition }
  /** +N for each OTHER card on your board matching the filter. */
  | { kind: 'per'; amount: number; filter: Filter; when?: Condition }
  /** +N to adjacent allies matching the filter. */
  | { kind: 'aura'; amount: number; filter?: Filter; when?: Condition }
  /** +N to every OTHER ally matching the filter. */
  | { kind: 'team'; amount: number; filter?: Filter; when?: Condition }
  /** Modify the opposing lane card if it matches the filter. */
  | { kind: 'lane'; amount: number; filter?: Filter; when?: Condition }
  /** Modify every opposing card matching the filter. */
  | { kind: 'enemies'; amount: number; filter?: Filter; when?: Condition }
  /** Take N points from the opposing lane card. */
  | { kind: 'steal'; amount: number; when?: Condition }
  /** Adjacent allies ignore debuffs. */
  | { kind: 'cleanse' }
  /** On Reveal: opposing lane card (if it matches) loses its abilities. */
  | { kind: 'silence'; filter?: Filter }
  /** On Reveal: gain a random amount between min and max. */
  | { kind: 'random'; min: number; max: number }
  /** On Reveal: a random other ally gains N. */
  | { kind: 'randomAlly'; amount: number };

export interface Holiday {
  event: string;
  /** 1-12 */
  month: number;
}

export interface CardDef {
  id: string;
  /** For skins: the base character id. For base cards: same as id. */
  baseId: string;
  name: string;
  /** Skin name shown on the card, if this is a skin. */
  skin?: string;
  skinType?: 'era' | 'movie' | 'holiday' | 'form' | 'alter-ego' | 'costume';
  show: string;
  era: Era;
  faction: Faction;
  role: Role;
  rarity: Rarity;
  points: number;
  tags: string[];
  abilityName?: string;
  abilities: Effect[];
  leader: Effect[];
  keywords: Keyword[];
  /** Extra factions this card counts as for Faction Surge. */
  countsAsFactions?: Faction[];
  holiday?: Holiday;
  /** Unlock requirement; undefined = available in packs. */
  unlock?: string;
}

/** Board slot order, left to right. Each index faces the same index on the other side. */
export const SLOT_ROLES: readonly Role[] = ['STR', 'TRK', 'CAP', 'STG', 'GRD'];

/** Lower = revealed earlier. */
export const REVEAL_PRIORITY: Record<Role, number> = { TRK: 0, STG: 1, GRD: 2, STR: 3, CAP: 4 };

/** Each faction beats the next one: Heroes > Villains > Friends > Animals > Lab Rats > Heroes. */
export const RIVALRY_BEATS: Record<Faction, Faction> = {
  heroes: 'villains',
  villains: 'friends',
  friends: 'animals',
  animals: 'labrats',
  labrats: 'heroes',
};

/** What produced a modifier; used for UI popups ("Combo +3!"). */
export type ModKind =
  | 'combo'
  | 'synergy'
  | 'aura'
  | 'leader'
  | 'team'
  | 'clutch'
  | 'matchup'
  | 'bonus'
  | 'steal'
  | 'debuff'
  | 'holiday'
  | 'chaos'
  | 'role'
  | 'rivalry'
  | 'chemistry';

export interface Mod {
  amount: number;
  label: string;
  source: 'self' | 'ally' | 'enemy' | 'chemistry';
  kind?: ModKind;
}

export interface BoardCard {
  uid: number;
  cardId: string;
  playedQuarter: number;
  silenced: boolean;
  /** Modifiers fixed at reveal time (random effects). */
  fixedMods: Mod[];
}

export interface PlayerState {
  name: string;
  deck: string[];
  hand: string[];
  board: (BoardCard | null)[];
  discard: string[];
}

export interface QuarterScore {
  quarter: number;
  totals: [number, number];
}

export interface MatchState {
  /** Quarter currently awaiting placements (1-3), or 4 once the match is finished. */
  quarter: number;
  finished: boolean;
  winner: 0 | 1 | null;
  winReason?: string;
  players: [PlayerState, PlayerState];
  rngState: number;
  nextUid: number;
  log: string[];
  history: QuarterScore[];
  options: MatchOptions;
}

export interface MatchOptions {
  /** Current month (1-12); holiday skins get +1 in their month. */
  month?: number;
}

export interface Placement {
  cardId: string;
  slot: number;
}

export interface TurnAction {
  placements: Placement[];
  /** Q3 only: replace the card in `slot` with `cardId` from hand. */
  swap?: Placement;
}

export interface CardScore {
  base: number;
  mods: Mod[];
  points: number;
  silenced: boolean;
}

export interface SideScore {
  cards: (CardScore | null)[];
  chemistry: Mod[];
  total: number;
}

export const PLACEMENTS_PER_QUARTER: Record<number, number> = { 1: 2, 2: 2, 3: 1 };
export const HAND_SIZE = 6;
export const ROSTER_SIZE = 12;

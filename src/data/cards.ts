import type { CardDef, Condition, Effect, Era, Faction, Filter, Keyword, Rarity, Role } from '../engine/types';

// ---------- Small DSL for writing abilities ----------
const T = (...tags: string[]): Filter => ({ tags });
const F = (faction: Faction): Filter => ({ faction });
const SHOW = (show: string): Filter => ({ show });

const self = (amount: number, when?: Condition): Effect => ({ kind: 'self', amount, when });
const per = (amount: number, filter: Filter): Effect => ({ kind: 'per', amount, filter });
const aura = (amount: number, filter?: Filter): Effect => ({ kind: 'aura', amount, filter });
const team = (amount: number, filter?: Filter, when?: Condition): Effect => ({ kind: 'team', amount, filter, when });
const lane = (amount: number, filter?: Filter): Effect => ({ kind: 'lane', amount, filter });
const enemies = (amount: number, filter?: Filter): Effect => ({ kind: 'enemies', amount, filter });
const steal = (amount: number): Effect => ({ kind: 'steal', amount });
const cleanse = (): Effect => ({ kind: 'cleanse' });
const silence = (filter?: Filter): Effect => ({ kind: 'silence', filter });
const random = (min: number, max: number): Effect => ({ kind: 'random', min, max });
const randomAlly = (amount: number): Effect => ({ kind: 'randomAlly', amount });
const combo = (amount: number, id: string): Effect => self(amount, { combo: id });
const clutch = (amount: number): Effect => self(amount, { clutch: true });
const vsLane = (amount: number, filter: Filter): Effect => self(amount, { laneIs: filter });

interface Extra {
  abilityName?: string;
  abilities?: Effect[];
  leader?: Effect[];
  keywords?: Keyword[];
  countsAsFactions?: Faction[];
  unlock?: string;
}

const ERA: Record<string, Era> = { R: 'retro', Y: 'y2k', M: 'modern' };
const RARITY: Record<string, Rarity> = { C: 'common', R: 'rare', E: 'epic', L: 'legendary' };

function make(faction: Faction) {
  return (
    id: string,
    name: string,
    show: string,
    era: 'R' | 'Y' | 'M',
    role: Role,
    rarity: 'C' | 'R' | 'E' | 'L',
    points: number,
    tags: string[],
    extra: Extra = {},
  ): CardDef => ({
    id,
    baseId: id,
    name,
    show,
    era: ERA[era],
    faction,
    role,
    rarity: RARITY[rarity],
    points,
    tags,
    abilityName: extra.abilityName,
    abilities: extra.abilities ?? [],
    leader: extra.leader ?? [],
    keywords: extra.keywords ?? [],
    countsAsFactions: extra.countsAsFactions,
    unlock: extra.unlock,
  });
}

// ---------- Show names ----------
const JN = 'Jimmy Neutron';
const TR = 'My Life as a Teenage Robot';
const TMNT = 'TMNT';
const SB = 'SpongeBob SquarePants';
const IZ = 'Invader Zim';
const DP = 'Danny Phantom';
const FF = 'Fantastic Four';
const XM = 'Wolverine and the X-Men';
const ATLA = 'Avatar: The Last Airbender';
const LOK = 'The Legend of Korra';
const LH = 'The Loud House';
const POM = 'The Penguins of Madagascar';
const FOP = 'The Fairly OddParents';
const KFP = 'Kung Fu Panda';
const RUG = 'Rugrats';
const HA = 'Hey Arnold!';

// ---------- Lab Rats ----------
const L = make('labrats');
const labRats: CardDef[] = [
  L('jimmy-neutron', 'Jimmy Neutron', JN, 'Y', 'STG', 'L', 10, ['Kid', 'Genius'], {
    abilityName: 'Brain Blast',
    abilities: [per(1, T('Genius', 'Robot'))],
    leader: [team(2, T('Genius'))],
    unlock: 'Legendary Trial: Brain Blast!',
  }),
  L('jenny-wakeman', 'Jenny Wakeman (XJ-9)', TR, 'Y', 'STR', 'L', 11, ['Robot', 'Kid'], {
    keywords: ['steadfast'],
    abilities: [clutch(3)],
    unlock: 'Season 1 reward: Tremorton Cup',
  }),
  L('donatello', 'Donatello', TMNT, 'R', 'STG', 'E', 8, ['Turtle', 'Mutant', 'Ninja', 'Genius'], {
    abilities: [aura(1, T('Robot', 'Mutant'))],
  }),
  L('goddard', 'Goddard', JN, 'Y', 'GRD', 'E', 8, ['Robot', 'Pet'], {
    keywords: ['steadfast'],
    abilities: [combo(3, 'jimmy-neutron')],
  }),
  L('tony-stark', 'Tony Stark', 'Iron Man: Armored Adventures', 'Y', 'CAP', 'E', 8, ['Genius', 'Armor', 'Marvel'], {
    leader: [team(2, T('Armor', 'Robot'))],
    unlock: 'Achievement: win 25 matches with Lab Rats',
  }),
  L('sandy-cheeks', 'Sandy Cheeks', SB, 'R', 'STR', 'E', 8, ['Squirrel', 'Genius', 'Bikini Bottom'], {
    abilityName: 'Karate Chop',
    abilities: [lane(-2)],
  }),
  L('cindy-vortex', 'Cindy Vortex', JN, 'Y', 'STR', 'R', 6, ['Kid', 'Genius'], {
    abilityName: 'Rivals',
    abilities: [self(2, { comboEither: 'jimmy-neutron' })],
  }),
  L('carl-wheezer', 'Carl Wheezer', JN, 'Y', 'GRD', 'R', 5, ['Kid'], {
    abilities: [combo(2, 'sheen-estevez'), aura(1, T('Pet'))],
  }),
  L('sheen-estevez', 'Sheen Estevez', JN, 'Y', 'TRK', 'R', 5, ['Kid'], {
    abilityName: 'Ultra Lord!',
    abilities: [clutch(3)],
  }),
  L('reed-richards', 'Reed Richards', FF, 'Y', 'STG', 'R', 6, ['Genius', 'Family', 'Marvel'], {
    abilities: [aura(2, T('Marvel')), combo(2, 'invisible-woman')],
  }),
  L('dib-membrane', 'Dib Membrane', IZ, 'Y', 'TRK', 'R', 6, ['Kid', 'Paranormal'], {
    abilities: [vsLane(3, T('Alien'))],
  }),
  L('professor-membrane', 'Professor Membrane', IZ, 'Y', 'CAP', 'R', 6, ['Genius', 'Parent'], {
    leader: [team(1, T('Genius')), team(1, T('Kid'))],
  }),
  L('metalhead', 'Metalhead', TMNT, 'M', 'GRD', 'C', 4, ['Robot', 'Turtle'], {
    abilities: [per(1, T('Turtle'))],
  }),
  L('sheldon-lee', 'Sheldon Lee', TR, 'Y', 'GRD', 'C', 4, ['Kid', 'Genius'], {
    abilities: [combo(2, 'jenny-wakeman')],
  }),
  L('nora-wakeman', 'Dr. Nora Wakeman', TR, 'Y', 'STG', 'C', 4, ['Genius', 'Parent'], {
    abilities: [aura(1, T('Robot'))],
  }),
  L('tucker-foley', 'Tucker Foley', DP, 'Y', 'TRK', 'C', 4, ['Kid', 'Tech'], {
    abilities: [aura(2, T('Ghost'))],
  }),
  L('jack-fenton', 'Jack Fenton', DP, 'Y', 'GRD', 'C', 5, ['Parent', 'Ghost Hunter'], {
    abilities: [vsLane(2, T('Ghost')), combo(2, 'danny-phantom')],
  }),
  L('lisa-loud', 'Lisa Loud', LH, 'M', 'STG', 'C', 4, ['Kid', 'Genius', 'Loud', 'Sibling'], {
    abilities: [per(1, T('Loud'))],
  }),
  L('kowalski', 'Kowalski', POM, 'Y', 'STG', 'C', 4, ['Penguin', 'Genius'], {
    abilities: [combo(2, 'skipper')],
  }),
  L('beast', 'Beast', XM, 'Y', 'GRD', 'C', 5, ['Mutant', 'Genius', 'Marvel'], { abilities: [combo(2, 'wolverine')] }),
];

// ---------- Heroes ----------
const H = make('heroes');
const heroes: CardDef[] = [
  H('aang', 'Aang', ATLA, 'Y', 'CAP', 'L', 11, ['Kid', 'Bender', 'Avatar'], {
    abilityName: 'Avatar State',
    abilities: [clutch(4)],
    leader: [team(2, T('Bender'))],
    unlock: 'Legendary Trial: Master the Four Elements',
  }),
  H('korra', 'Korra', LOK, 'M', 'STR', 'L', 10, ['Bender', 'Avatar'], {
    abilities: [lane(-2), combo(2, 'aang')],
    unlock: 'Story: complete Chapter 2',
  }),
  H('leonardo', 'Leonardo', TMNT, 'R', 'CAP', 'E', 8, ['Turtle', 'Mutant', 'Ninja'], {
    leader: [team(2, T('Ninja', 'Mutant'))],
  }),
  H('danny-phantom', 'Danny Phantom', DP, 'Y', 'TRK', 'E', 8, ['Kid', 'Ghost'], {
    keywords: ['intangible'],
    abilities: [clutch(2)],
  }),
  H('wolverine', 'Wolverine', XM, 'Y', 'STR', 'E', 9, ['Mutant', 'Marvel'], {
    abilityName: 'Healing Factor',
    keywords: ['steadfast'],
  }),
  H('zuko', 'Zuko', ATLA, 'Y', 'STR', 'E', 8, ['Bender', 'Fire', 'Royal'], {
    abilityName: 'Redemption',
    abilities: [combo(3, 'aang')],
    unlock: 'Achievement: win 10 Clutch comebacks',
  }),
  H('katara', 'Katara', ATLA, 'Y', 'STG', 'R', 6, ['Bender', 'Water', 'Healer'], {
    abilities: [aura(1, T('Bender')), cleanse()],
  }),
  H('sokka', 'Sokka', ATLA, 'Y', 'TRK', 'R', 5, ['Warrior', 'Tactician'], {
    abilities: [per(1, SHOW(ATLA))],
  }),
  H('toph', 'Toph Beifong', ATLA, 'Y', 'GRD', 'R', 7, ['Kid', 'Bender', 'Earth'], { keywords: ['steadfast'] }),
  H('raphael', 'Raphael', TMNT, 'R', 'STR', 'R', 7, ['Turtle', 'Mutant', 'Ninja'], {
    abilities: [vsLane(2, F('villains'))],
  }),
  H('michelangelo', 'Michelangelo', TMNT, 'R', 'TRK', 'R', 5, ['Turtle', 'Mutant', 'Ninja'], {
    abilityName: 'Cowabunga!',
    abilities: [aura(1, T('Turtle')), clutch(1)],
  }),
  H('el-tigre', 'El Tigre (Manny Rivera)', 'El Tigre', 'Y', 'STR', 'R', 6, ['Kid', 'Masked'], {
    abilityName: 'Hero or Villain?',
    countsAsFactions: ['villains'],
  }),
  H('human-torch', 'Human Torch', FF, 'Y', 'STR', 'C', 5, ['Fire', 'Family', 'Marvel']),
  H('the-thing', 'The Thing', FF, 'Y', 'GRD', 'C', 5, ['Family', 'Marvel'], {
    abilityName: "Clobberin' Time!",
    abilities: [clutch(1)],
  }),
  H('invisible-woman', 'Invisible Woman', FF, 'Y', 'STG', 'C', 4, ['Family', 'Marvel'], {
    abilities: [aura(1, T('Family'))],
  }),
  H('cyclops', 'Cyclops', XM, 'Y', 'CAP', 'C', 4, ['Mutant', 'Marvel'], { leader: [team(2, T('Mutant'))] }),
  H('storm', 'Storm', XM, 'Y', 'STG', 'C', 4, ['Mutant', 'Weather', 'Marvel'], { abilities: [lane(-1), per(1, T('Marvel'))] }),
  H('mermaid-man', 'Mermaid Man', SB, 'R', 'CAP', 'C', 3, ['Veteran', 'Bikini Bottom'], {
    abilities: [combo(3, 'barnacle-boy')],
    leader: [team(1, T('Veteran'))],
  }),
  H('barnacle-boy', 'Barnacle Boy', SB, 'R', 'TRK', 'C', 3, ['Sidekick', 'Bikini Bottom'], {
    abilities: [combo(3, 'mermaid-man')],
  }),
  H('bolin', 'Bolin', LOK, 'M', 'GRD', 'C', 4, ['Bender', 'Earth'], { abilities: [aura(1, T('Bender'))] }),
];

// ---------- Villains ----------
const V = make('villains');
const villains: CardDef[] = [
  V('shredder', 'Shredder', TMNT, 'R', 'CAP', 'L', 11, ['Ninja', 'Foot Clan', 'Overlord'], {
    abilities: [enemies(-2, T('Turtle'))],
    leader: [team(2, { tags: ['Foot Clan'], faction: 'villains' })],
    unlock: 'Story: Chapter 3 finale',
  }),
  V('ozai', 'Fire Lord Ozai', ATLA, 'Y', 'STR', 'L', 10, ['Bender', 'Fire', 'Royal', 'Overlord'], {
    abilityName: "Sozin's Comet",
    abilities: [clutch(4), team(1, T('Fire'), { clutch: true })],
    unlock: "Legendary Trial: Sozin's Comet",
  }),
  V('zim', 'Invader Zim', IZ, 'Y', 'STG', 'E', 8, ['Alien', 'Genius'], { abilities: [enemies(-1, T('Kid'))] }),
  V('plankton', 'Plankton', SB, 'R', 'STG', 'E', 7, ['Genius', 'Bikini Bottom'], {
    abilities: [combo(3, 'karen'), steal(1)],
  }),
  V('azula', 'Azula', ATLA, 'Y', 'STR', 'E', 9, ['Bender', 'Fire', 'Royal'], {
    abilityName: 'Lightning',
    abilities: [lane(-2)],
  }),
  V('vlad-plasmius', 'Vlad Plasmius', DP, 'Y', 'CAP', 'E', 8, ['Ghost', 'Genius'], {
    leader: [team(3, T('Ghost'))],
    unlock: 'Achievement: win 25 matches with Villains',
  }),
  V('krang', 'Krang', TMNT, 'R', 'STG', 'R', 6, ['Alien', 'Genius'], { abilities: [combo(3, 'shredder')] }),
  V('bebop', 'Bebop', TMNT, 'R', 'GRD', 'R', 6, ['Mutant', 'Foot Clan'], { abilities: [combo(3, 'rocksteady')] }),
  V('rocksteady', 'Rocksteady', TMNT, 'R', 'STR', 'R', 6, ['Mutant', 'Foot Clan'], { abilities: [combo(3, 'bebop')] }),
  V('vicky', 'Vicky', FOP, 'Y', 'TRK', 'R', 6, ['Teen', 'Babysitter'], { abilities: [vsLane(2, T('Kid'))] }),
  V('magneto', 'Magneto', XM, 'Y', 'CAP', 'R', 7, ['Mutant', 'Marvel'], {
    abilities: [lane(-2, T('Robot', 'Armor'))],
    leader: [team(2, T('Mutant'))],
  }),
  V('amon', 'Amon', LOK, 'M', 'TRK', 'R', 7, ['Equalist', 'Masked'], {
    abilityName: 'Bloodbending',
    abilities: [silence(T('Bender'))],
  }),
  V('gir', 'GIR', IZ, 'Y', 'TRK', 'C', 3, ['Robot', 'Alien'], { abilityName: 'Chaos', abilities: [random(0, 4)] }),
  V('karen', 'Karen', SB, 'R', 'GRD', 'C', 4, ['Robot', 'Bikini Bottom'], { abilities: [combo(2, 'plankton')] }),
  V('crocker', 'Denzel Crocker', FOP, 'Y', 'STG', 'C', 4, ['Teacher', 'Paranormal'], {
    abilities: [vsLane(3, T('Fairy'))],
  }),
  V('skulker', 'Skulker', DP, 'Y', 'STR', 'C', 5, ['Ghost', 'Armor', 'Hunter'], { abilities: [vsLane(2, T('Ghost'))] }),
  V('foot-soldier', 'Foot Soldier', TMNT, 'R', 'GRD', 'C', 3, ['Foot Clan', 'Ninja'], {
    abilities: [per(1, T('Foot Clan'))],
  }),
  V('ty-lee', 'Ty Lee', ATLA, 'Y', 'TRK', 'C', 4, ['Acrobat'], { abilityName: 'Chi-Block', abilities: [silence()] }),
  V('baxter-stockman', 'Baxter Stockman', TMNT, 'M', 'STG', 'C', 4, ['Genius', 'Mutant'], {
    abilities: [aura(1, T('Mutant'))],
  }),
  V('flying-dutchman', 'The Flying Dutchman', SB, 'R', 'STR', 'C', 5, ['Ghost', 'Bikini Bottom'], {
    abilities: [vsLane(1, T('Bikini Bottom'))],
  }),
];

// ---------- Animals ----------
const A = make('animals');
const animals: CardDef[] = [
  A('spongebob', 'SpongeBob SquarePants', SB, 'R', 'CAP', 'L', 10, ['Sponge', 'Bikini Bottom'], {
    abilityName: "I'm Ready!",
    abilities: [per(1, F('friends'))],
    leader: [team(2, T('Bikini Bottom'))],
    unlock: 'Story: complete Chapter 1',
  }),
  A('po', 'Po', KFP, 'M', 'STR', 'L', 11, ['Panda', 'Kung Fu'], {
    abilityName: 'Dragon Warrior',
    abilities: [aura(1, T('Kung Fu')), clutch(3)],
    unlock: 'Legendary Trial: The Dragon Scroll',
  }),
  A('appa', 'Appa', ATLA, 'Y', 'GRD', 'E', 9, ['Bison', 'Pet', 'Avatar'], { abilities: [combo(3, 'aang')] }),
  A('skipper', 'Skipper', POM, 'Y', 'CAP', 'E', 8, ['Penguin'], {
    abilityName: 'Smile and Wave',
    abilities: [per(1, T('Penguin'))],
    leader: [team(2, T('Penguin'))],
  }),
  A('patrick', 'Patrick Star', SB, 'R', 'GRD', 'E', 8, ['Starfish', 'Bikini Bottom'], {
    abilities: [combo(3, 'spongebob')],
  }),
  A('splinter', 'Master Splinter', TMNT, 'R', 'STG', 'E', 8, ['Rat', 'Ninja', 'Mentor'], {
    abilities: [aura(2, T('Turtle'))],
    unlock: 'Achievement: win 25 matches with a Turtle Captain',
  }),
  A('rocko', 'Rocko', "Rocko's Modern Life", 'R', 'CAP', 'R', 6, ['Wallaby', 'O-Town'], {
    leader: [team(2, T('O-Town'))],
  }),
  A('ren-hoek', 'Ren Höek', 'The Ren & Stimpy Show', 'R', 'TRK', 'R', 6, ['Dog'], {
    abilities: [combo(3, 'stimpy'), lane(-1)],
  }),
  A('stimpy', 'Stimpy', 'The Ren & Stimpy Show', 'R', 'GRD', 'R', 6, ['Cat'], { abilities: [combo(3, 'ren-hoek')] }),
  A('catdog', 'CatDog', 'CatDog', 'R', 'STR', 'R', 7, ['Cat', 'Dog'], { abilityName: 'Two Heads', abilities: [per(1, T('Cat', 'Dog'))] }),
  A('tigress', 'Tigress', KFP, 'M', 'STR', 'R', 7, ['Tiger', 'Kung Fu'], { abilities: [combo(2, 'po')] }),
  A('mr-krabs', 'Mr. Krabs', SB, 'R', 'STG', 'R', 5, ['Crab', 'Bikini Bottom'], {
    abilityName: 'Money! Money!',
    abilities: [per(1, T('Bikini Bottom'))],
  }),
  A('squidward', 'Squidward Tentacles', SB, 'R', 'STG', 'C', 4, ['Squid', 'Bikini Bottom'], {
    abilityName: 'Grumpy',
    abilities: [self(2, { notAdjacent: 'spongebob' })],
  }),
  A('gary', 'Gary the Snail', SB, 'R', 'TRK', 'C', 3, ['Snail', 'Pet', 'Bikini Bottom'], {
    abilities: [combo(3, 'spongebob')],
  }),
  A('norbert-beaver', 'Norbert Beaver', 'The Angry Beavers', 'R', 'TRK', 'C', 4, ['Beaver', 'Sibling'], {
    abilities: [combo(3, 'daggett-beaver')],
  }),
  A('daggett-beaver', 'Daggett Beaver', 'The Angry Beavers', 'R', 'STR', 'C', 4, ['Beaver', 'Sibling'], {
    abilities: [combo(3, 'norbert-beaver')],
  }),
  A('momo', 'Momo', ATLA, 'Y', 'TRK', 'C', 3, ['Lemur', 'Pet', 'Avatar'], { abilities: [aura(1, SHOW(ATLA))] }),
  A('heffer', 'Heffer Wolfe', "Rocko's Modern Life", 'R', 'GRD', 'C', 5, ['Steer', 'O-Town'], { abilities: [combo(2, 'rocko')] }),
  A('darwin', 'Darwin', 'The Wild Thornberrys', 'R', 'STG', 'C', 3, ['Chimp', 'Pet'], {
    abilities: [combo(2, 'eliza-thornberry')],
  }),
  A('otis', 'Otis', 'Back at the Barnyard', 'Y', 'STR', 'C', 4, ['Cow']),
  A('reptar', 'Reptar', RUG, 'R', 'GRD', 'E', 9, ['Dinosaur', 'Monster', 'Rugrats'], {
    abilityName: 'Reptar Roar',
    abilities: [aura(2, T('Baby')), lane(-1)],
    unlock: 'Event: Reptar on Ice',
  }),
];

// ---------- Friends ----------
const Fr = make('friends');
const friends: CardDef[] = [
  Fr('tommy-pickles', 'Tommy Pickles', RUG, 'R', 'CAP', 'L', 10, ['Baby', 'Rugrats'], {
    abilityName: "A Baby's Gotta Do",
    abilities: [clutch(2)],
    leader: [team(2, T('Baby')), team(1, T('Kid'))],
    unlock: 'Achievement: win 50 matches with Friends',
  }),
  Fr('timmy-turner', 'Timmy Turner', FOP, 'Y', 'TRK', 'L', 10, ['Kid', 'Wish'], {
    abilityName: 'I Wish...',
    abilities: [team(1), team(2, T('Fairy'))],
    unlock: 'Legendary Trial: Da Rules',
  }),
  Fr('arnold', 'Arnold', HA, 'R', 'CAP', 'E', 8, ['Kid', 'Hillwood'], {
    abilities: [cleanse()],
    leader: [team(2, T('Hillwood'))],
  }),
  Fr('helga', 'Helga Pataki', HA, 'R', 'STR', 'E', 8, ['Kid', 'Hillwood'], {
    abilityName: 'Secret Crush',
    abilities: [combo(3, 'arnold')],
  }),
  Fr('lincoln-loud', 'Lincoln Loud', LH, 'M', 'STG', 'E', 8, ['Kid', 'Loud', 'Sibling'], {
    abilityName: 'Man with a Plan',
    abilities: [per(1, T('Sibling'))],
  }),
  Fr('angelica', 'Angelica Pickles', RUG, 'R', 'TRK', 'E', 8, ['Kid', 'Rugrats'], {
    abilities: [lane(-2, T('Baby')), per(1, T('Rugrats'))],
    unlock: 'Achievement: win 25 matches with Rugrats',
  }),
  Fr('chuckie', 'Chuckie Finster', RUG, 'R', 'GRD', 'R', 5, ['Baby', 'Rugrats'], {
    abilityName: 'Finally Brave',
    abilities: [clutch(3)],
  }),
  Fr('gerald', 'Gerald Johanssen', HA, 'R', 'STR', 'R', 6, ['Kid', 'Hillwood'], { abilities: [combo(2, 'arnold')] }),
  Fr('doug-funnie', 'Doug Funnie', 'Doug', 'R', 'CAP', 'R', 5, ['Kid', 'Bluffington'], {
    abilityName: 'Quailman',
    abilities: [clutch(2)],
    leader: [team(1, T('Kid'))],
  }),
  Fr('eliza-thornberry', 'Eliza Thornberry', 'The Wild Thornberrys', 'R', 'STG', 'R', 6, ['Kid', 'Animal Talker'], {
    abilities: [aura(2, F('animals'))],
  }),
  Fr('cosmo-wanda', 'Cosmo & Wanda', FOP, 'Y', 'STG', 'R', 6, ['Fairy'], { abilities: [combo(3, 'timmy-turner')] }),
  Fr('otto-rocket', 'Otto Rocket', 'Rocket Power', 'R', 'STR', 'R', 6, ['Kid', 'Ocean Shores', 'Sibling'], {
    abilityName: 'Fast Start',
    abilities: [self(2, { playedInQuarter: 1 })],
  }),
  Fr('phil-lil', 'Phil & Lil', RUG, 'R', 'TRK', 'C', 4, ['Baby', 'Twins', 'Rugrats'], {
    abilities: [per(1, T('Rugrats'))],
  }),
  Fr('susie', 'Susie Carmichael', RUG, 'R', 'STG', 'C', 4, ['Kid', 'Rugrats'], { abilities: [aura(1, T('Baby'))] }),
  Fr('skeeter', 'Skeeter Valentine', 'Doug', 'R', 'TRK', 'C', 4, ['Kid', 'Bluffington'], {
    abilities: [combo(2, 'doug-funnie')],
  }),
  Fr('reggie-rocket', 'Reggie Rocket', 'Rocket Power', 'R', 'STR', 'C', 4, ['Kid', 'Ocean Shores', 'Sibling'], {
    abilities: [combo(3, 'otto-rocket')],
  }),
  Fr('aj', 'A.J.', FOP, 'Y', 'STG', 'C', 4, ['Kid', 'Genius']),
  Fr('ginger', 'Ginger Foutley', 'As Told by Ginger', 'Y', 'GRD', 'C', 4, ['Kid']),
  Fr('rudy', 'Rudy Tabootie', 'ChalkZone', 'Y', 'TRK', 'C', 4, ['Kid', 'Artist'], {
    abilityName: 'Magic Chalk',
    abilities: [randomAlly(1)],
  }),
  Fr('lori-loud', 'Lori Loud', LH, 'M', 'GRD', 'C', 5, ['Teen', 'Loud', 'Sibling'], { abilities: [aura(1, T('Loud'))] }),
];

export const BASE_CARDS: CardDef[] = [...labRats, ...heroes, ...villains, ...animals, ...friends];

const baseById = new Map(BASE_CARDS.map((c) => [c.id, c]));

// ---------- Skins ----------
type SkinSpec = Partial<Omit<CardDef, 'id' | 'baseId' | 'skin'>> & {
  id: string;
  base: string;
  skin: string;
  skinType: NonNullable<CardDef['skinType']>;
  unlock: string;
};

const HALLOWEEN = { event: 'Halloween Night Market', month: 10 };
const WINTER = { event: 'Winter Festival', month: 12 };

const SKIN_SPECS: SkinSpec[] = [
  { id: 'leo-rise', base: 'leonardo', skin: 'Rise of the TMNT', skinType: 'era', era: 'modern', unlock: 'Event: Turtle Power Week' },
  {
    id: 'leo-mayhem', base: 'leonardo', skin: 'Mutant Mayhem', skinType: 'movie', era: 'modern',
    leader: [team(3, T('Turtle'))], unlock: 'Achievement: win 50 matches with Turtles',
  },
  { id: 'raph-2012', base: 'raphael', skin: 'TMNT 2012', skinType: 'era', era: 'modern', unlock: 'Event: Turtle Power Week' },
  { id: 'donnie-rise', base: 'donatello', skin: 'Rise of the TMNT', skinType: 'era', era: 'modern', unlock: 'Event: Turtle Power Week' },
  { id: 'mikey-pizza', base: 'michelangelo', skin: 'Pizza Monster', skinType: 'holiday', holiday: HALLOWEEN, unlock: 'Event: Halloween Night Market' },
  { id: 'spongebob-goofy', base: 'spongebob', skin: 'Goofy Goober', skinType: 'movie', era: 'y2k', unlock: 'Event: The SpongeBob Movie' },
  { id: 'spongebob-xmas', base: 'spongebob', skin: 'Christmas Who?', skinType: 'holiday', holiday: WINTER, unlock: 'Event: Winter Festival' },
  { id: 'patrick-kamp', base: 'patrick', skin: 'Kamp Koral', skinType: 'era', era: 'modern', unlock: 'Event: Kamp Koral Summer' },
  { id: 'tommy-paris', base: 'tommy-pickles', skin: 'Rugrats in Paris', skinType: 'movie', era: 'y2k', unlock: 'Event: Rugrats Movie Marathon' },
  { id: 'angelica-witch', base: 'angelica', skin: 'Witch', skinType: 'holiday', holiday: HALLOWEEN, unlock: 'Event: Halloween Night Market' },
  { id: 'aang-avatar-state', base: 'aang', skin: 'Avatar State', skinType: 'form', abilities: [clutch(6)], unlock: 'Achievement: Aang to 7 stars' },
  {
    id: 'korra-avatar-state', base: 'korra', skin: 'Avatar State', skinType: 'form',
    abilities: [lane(-4), combo(2, 'aang')], unlock: 'Achievement: Korra to 7 stars',
  },
  {
    id: 'jimmy-boy-genius', base: 'jimmy-neutron', skin: 'Boy Genius', skinType: 'movie',
    abilities: [per(1, T('Genius', 'Robot', 'Kid'))], unlock: 'Event: Jimmy Neutron: Boy Genius',
  },
  { id: 'arnold-jungle', base: 'arnold', skin: 'The Jungle Movie', skinType: 'movie', era: 'modern', unlock: 'Event: Hey Arnold! The Jungle Movie' },
  { id: 'danny-ghost-zone', base: 'danny-phantom', skin: 'Ghost Zone', skinType: 'holiday', holiday: HALLOWEEN, unlock: 'Event: Halloween Night Market' },
  { id: 'zim-xmas', base: 'zim', skin: 'Most Horrible X-Mas', skinType: 'holiday', holiday: WINTER, unlock: 'Event: Winter Festival' },
  { id: 'po-lunar', base: 'po', skin: 'Lunar New Year', skinType: 'holiday', holiday: { event: 'Lunar New Year Festival', month: 2 }, unlock: 'Event: Lunar New Year Festival' },
  { id: 'helga-valentine', base: 'helga', skin: 'Valentine', skinType: 'holiday', holiday: { event: "Valentine's Day", month: 2 }, unlock: "Event: Valentine's Day" },
  {
    id: 'super-shredder', base: 'shredder', skin: 'Super Shredder', skinType: 'movie',
    abilities: [enemies(-2, T('Turtle')), lane(-3)], unlock: 'Legendary Trial: Secret of the Ooze',
  },
  { id: 'lincoln-movie', base: 'lincoln-loud', skin: 'The Loud House Movie', skinType: 'holiday', holiday: { event: 'Thanksgiving Family Feast', month: 11 }, unlock: 'Event: Thanksgiving Family Feast' },
  {
    id: 'quailman', base: 'doug-funnie', skin: 'Quailman', skinType: 'alter-ego', faction: 'heroes',
    tags: ['Kid', 'Bluffington', 'Masked'], abilities: [clutch(4)], unlock: 'Achievement: win 3 Clutch comebacks with Doug',
  },
  {
    id: 'gerald-strawberry', base: 'gerald', skin: 'Strawberry Suit', skinType: 'costume',
    abilities: [combo(3, 'arnold'), aura(1, T('Hillwood'))], unlock: 'Event: Hillwood Harvest Fair',
  },
];

export const SKINS: CardDef[] = SKIN_SPECS.map(({ base, ...spec }) => {
  const b = baseById.get(base);
  if (!b) throw new Error(`Unknown skin base: ${base}`);
  return { ...b, ...spec, baseId: b.id };
});

export const ALL_CARDS: CardDef[] = [...BASE_CARDS, ...SKINS];

export const CARDS: Record<string, CardDef> = Object.fromEntries(ALL_CARDS.map((c) => [c.id, c]));

export function getCard(id: string): CardDef {
  const c = CARDS[id];
  if (!c) throw new Error(`Unknown card: ${id}`);
  return c;
}

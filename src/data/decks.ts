export interface PresetDeck {
  id: string;
  name: string;
  strategy: string;
  cards: string[];
}

export const PRESET_DECKS: PresetDeck[] = [
  {
    id: 'turtle-power',
    name: 'Turtle Power',
    strategy: 'TMNT Show Squad. Turtles buff each other; Shredder and his crew come along for the show bonus.',
    cards: ['leonardo', 'raphael', 'michelangelo', 'donatello', 'splinter', 'metalhead', 'shredder', 'krang', 'bebop', 'rocksteady', 'foot-soldier', 'baxter-stockman'],
  },
  {
    id: 'bikini-bottom',
    name: 'Bikini Bottom',
    strategy: 'SpongeBob leads; Patrick, Gary and Mr. Krabs all scale with Bikini Bottom allies.',
    cards: ['spongebob', 'patrick', 'mr-krabs', 'squidward', 'gary', 'sandy-cheeks', 'plankton', 'karen', 'mermaid-man', 'barnacle-boy', 'flying-dutchman', 'catdog'],
  },
  {
    id: 'team-avatar',
    name: 'Team Avatar',
    strategy: 'Aang leads the Benders, then explodes in the Avatar State. Azula, Ty Lee and Amon add lane control.',
    cards: ['aang', 'zuko', 'appa', 'azula', 'katara', 'sokka', 'toph', 'amon', 'momo', 'bolin', 'ty-lee', 'storm'],
  },
  {
    id: 'playground',
    name: 'Playground Crew',
    strategy: 'Friends Faction Surge. Tommy buffs Babies and Kids, Reptar guards the babies, Arnold & Helga stack combos.',
    cards: ['tommy-pickles', 'reptar', 'arnold', 'helga', 'chuckie', 'gerald', 'doug-funnie', 'eliza-thornberry', 'phil-lil', 'susie', 'skeeter', 'rudy'],
  },
  {
    id: 'mad-science',
    name: 'Mad Science',
    strategy: 'Lab Rats Geniuses and Robots. Jimmy Neutron grows with every Genius on the board.',
    cards: ['jimmy-neutron', 'goddard', 'tony-stark', 'donatello', 'cindy-vortex', 'carl-wheezer', 'sheen-estevez', 'professor-membrane', 'beast', 'nora-wakeman', 'lisa-loud', 'kowalski'],
  },
  {
    id: 'marvel',
    name: 'Mutants & Marvels',
    strategy: 'Mutant tribe: Leonardo or Magneto lead Turtles and X-Men; Reed and Sue add Marvel auras.',
    cards: ['wolverine', 'tony-stark', 'leonardo', 'donatello', 'magneto', 'reed-richards', 'raphael', 'cyclops', 'storm', 'beast', 'invisible-woman', 'baxter-stockman'],
  },
  {
    id: 'ghost-zone',
    name: 'Spooky Squad',
    strategy: 'Ghosts, monsters and hunters. Vlad leads Ghosts; Zim and Vicky punish Kid-heavy decks.',
    cards: ['danny-phantom', 'vlad-plasmius', 'zim', 'reptar', 'dib-membrane', 'vicky', 'el-tigre', 'skulker', 'tucker-foley', 'jack-fenton', 'flying-dutchman', 'crocker'],
  },
  {
    id: 'retro-90s',
    name: '90s Saturday Morning',
    strategy: 'All-Retro Era Block packed with duos: Ren & Stimpy, the Angry Beavers, Otto & Reggie, Arnold & Helga.',
    cards: ['spongebob', 'patrick', 'arnold', 'helga', 'ren-hoek', 'stimpy', 'catdog', 'otto-rocket', 'reggie-rocket', 'norbert-beaver', 'daggett-beaver', 'heffer'],
  },
  {
    id: 'all-stars',
    name: 'Toonville All-Stars',
    strategy: 'Rainbow Crew: one of each faction, played into lanes your faction beats on the Rivalry Wheel.',
    cards: ['po', 'wolverine', 'azula', 'goddard', 'toph', 'cindy-vortex', 'magneto', 'chuckie', 'eliza-thornberry', 'storm', 'heffer', 'lori-loud'],
  },
  {
    id: 'time-warp',
    name: 'Time Warp',
    strategy: 'One card from every era for Time Warp, with Era skins to fine-tune the mix.',
    cards: ['korra', 'leo-rise', 'zuko', 'wolverine', 'raphael', 'katara', 'tigress', 'toph', 'bolin', 'mermaid-man', 'barnacle-boy', 'metalhead'],
  },
];

/** Portrait designs for every card. Keys are card ids. Skins extend their base design with `base`. */

const SKIN = { light: '#F8D9BD', fair: '#F6D3B0', tan: '#E8B48A', brown: '#C68B59', dark: '#8D5A3B', deep: '#6B4226' };
const TURTLE = '#65A30D';
const turtle = (mask, extra = {}) => ({
  skin: TURTLE, noEars: true, mask, eyes: { color: '#78350F' }, body: { color: TURTLE, collar: 'shell' }, blush: false, ...extra,
});

const BASE = {
  // ---------------- Lab Rats ----------------
  'jimmy-neutron': { hair: ['swirl', '#6B3E1E'], eyes: { color: '#2563EB' }, mouth: 'grin', body: { color: '#DC2626', collar: 'shirt', emblem: ['atom', '#fff'] } },
  'jenny-wakeman': { skin: '#F1F5F9', hair: ['pigtails', '#60A5FA'], eyes: { color: '#2563EB', lashes: true }, noEars: true, body: { color: '#3B82F6', collar: 'round', emblem: ['circle', '#F1F5F9'] }, markings: '<circle cx="320" cy="540" r="34" fill="#60A5FA" stroke="#1a1020" stroke-width="7"/><circle cx="680" cy="540" r="34" fill="#60A5FA" stroke="#1a1020" stroke-width="7"/>', bgExtra: 'sparkles' },
  donatello: turtle('#7C3AED', { mouth: 'grin', fg: 'staff' }),
  goddard: { special: 'goddard' },
  'tony-stark': { skin: SKIN.tan, hair: ['sidepart', '#1F2937'], goatee: '#1F2937', eyes: { color: '#78350F', style: 'fierce' }, mouth: 'smirk', body: { color: '#B91C1C', collar: 'armor', collarColor: '#FBBF24', emblem: ['circle', '#7DD3FC'] } },
  'sandy-cheeks': { kind: 'creature', color: '#B45309', ears: 'small', muzzle: 'bear', muzzleColor: '#FDE68A', eyes: { color: '#111', lashes: true }, mouth: 'grin', mouthY: 680, body: { color: '#F5F5F4', collar: 'round' }, top: '<circle cx="500" cy="500" r="300" fill="#BFDBFE" fill-opacity="0.22" stroke="#fff" stroke-width="14"/><path d="M640 230 Q700 170 760 230" stroke="#fff" stroke-width="10" fill="none"/><circle cx="500" cy="205" r="28" fill="#F472B6" stroke="#1a1020" stroke-width="6"/>' },
  'cindy-vortex': { hair: ['ponytail', '#FDE047'], eyes: { color: '#16A34A', lashes: true, style: 'fierce' }, mouth: 'smirk', body: { color: '#22C55E', collar: 'round' } },
  'carl-wheezer': { hair: ['curly', '#FB923C'], glasses: true, eyes: { color: '#2563EB', style: 'dot' }, brows: 'worried', mouth: 'open', body: { color: '#60A5FA', collar: 'shirt' } },
  'sheen-estevez': { skin: SKIN.tan, hair: ['spiky', '#111'], eyes: { color: '#111', style: 'big' }, mouth: 'grin', body: { color: '#F59E0B', collar: 'round', emblem: ['letter', '#1D4ED8', 'U'] } },
  'reed-richards': { hair: ['sidepart', '#3F2A1D'], eyes: { color: '#2563EB' }, face: 'long', body: { color: '#1D4ED8', collar: 'high', emblem: ['four', '#1D4ED8'] } },
  'dib-membrane': { hair: ['mohawk', '#111'], glasses: true, eyes: { color: '#78350F' }, brows: 'angry', mouth: 'frown', face: 'long', body: { color: '#111', collar: 'high', emblem: ['circle', '#9CA3AF'] } },
  'professor-membrane': { hair: ['spiky', '#111'], goggles: '#38BDF8', mouth: 'flat', face: 'long', body: { color: '#F5F5F4', collar: 'high' } },
  metalhead: { special: 'metalhead' },
  'sheldon-lee': { hair: ['bob', '#111'], glasses: true, eyes: { color: '#3F2A1D' }, mouth: 'grin', body: { color: '#DC2626', collar: 'shirt' } },
  'nora-wakeman': { hair: ['bun', '#D1D5DB'], glasses: true, eyes: { color: '#2563EB', lashes: true }, mouth: 'smirk', face: 'long', body: { color: '#F5F5F4', collar: 'high' } },
  'tucker-foley': { skin: SKIN.dark, hat: ['beanie', '#DC2626'], glasses: true, eyes: { color: '#3F2A1D' }, mouth: 'grin', body: { color: '#F59E0B', collar: 'round' } },
  'jack-fenton': { hair: ['buzz', '#1F2937'], face: 'square', goggles: '#22D3EE', brows: 'thick', mouth: 'grin', body: { color: '#F97316', collar: 'high', emblem: ['circle', '#111'] } },
  'lisa-loud': { hair: ['bob', '#78350F'], glasses: true, eyes: { color: '#3F2A1D', style: 'sleepy' }, mouth: 'flat', body: { color: '#4ADE80', collar: 'round' } },
  kowalski: { special: 'penguin', iris: '#111', extra: '<rect x="680" y="980" width="200" height="260" rx="10" fill="#FDE68A" stroke="#1a1020" stroke-width="7"/><path d="M710 1040 L850 1040 M710 1090 L850 1090 M710 1140 L800 1140" stroke="#1a1020" stroke-width="6"/>' },
  beast: { skin: '#3B82F6', hair: ['wolverine', '#1E40AF'], face: 'square', glasses: true, pointyEars: true, mouth: 'fang', blush: false, body: { color: '#1E3A8A', collar: 'high', emblem: ['x', '#FBBF24'] } },

  // ---------------- Heroes ----------------
  aang: { skin: '#F2C9A0', hair: 'arrow', eyes: { color: '#6B7280' }, mouth: 'grin', body: { color: '#F59E0B', collar: 'v', collarColor: '#B45309' }, fg: 'staff' },
  korra: { skin: SKIN.brown, hair: ['ponytail', '#3F2A1D'], eyes: { color: '#0EA5E9', lashes: true }, brows: 'angry', mouth: 'smirk', body: { color: '#1E40AF', collar: 'gi', collarColor: '#0F766E' }, fg: 'waterOrb' },
  leonardo: turtle('#2563EB', { brows: 'normal', mouth: 'smile', fg: 'katana' }),
  'danny-phantom': { hair: ['spiky', '#F8FAFC'], eyes: { color: '#22C55E', style: 'fierce' }, mouth: 'smirk', body: { color: '#111', collar: 'high', collarColor: '#F5F5F4', emblem: ['ghost', '#fff'] } },
  wolverine: { hair: ['wolverine', '#111'], sideburns: '#111', face: 'square', brows: 'angry', eyes: { color: '#78350F', style: 'fierce' }, mouth: 'fang', body: { color: '#FBBF24', collar: 'armor', collarColor: '#1E3A8A', emblem: ['x', '#DC2626'] }, fg: 'claws' },
  zuko: { skin: SKIN.light, hair: ['topknot', '#111'], scar: true, eyes: { color: '#D97706', style: 'fierce' }, brows: 'angry', mouth: 'frown', body: { color: '#991B1B', collar: 'armor', collarColor: '#7F1D1D' }, fg: 'fireHand' },
  katara: { skin: SKIN.brown, hair: ['long', '#3F2A1D'], eyes: { color: '#2563EB', lashes: true }, body: { color: '#1D4ED8', collar: 'v', collarColor: '#60A5FA' }, fg: 'waterOrb' },
  sokka: { skin: SKIN.brown, hair: ['topknot', '#3F2A1D'], eyes: { color: '#2563EB' }, mouth: 'grin', body: { color: '#1E40AF', collar: 'gi', collarColor: '#E5E7EB' }, fg: 'boomerang' },
  toph: { skin: SKIN.light, hair: ['bun', '#111'], eyes: { color: '#D1D5DB', style: 'sleepy' }, mouth: 'smirk', body: { color: '#15803D', collar: 'v', collarColor: '#FCD34D' }, fg: 'rockFist' },
  raphael: turtle('#DC2626', { brows: 'angry', mouth: 'fang', eyes: { color: '#78350F', style: 'fierce' }, fg: 'katana' }),
  michelangelo: turtle('#F97316', { mouth: 'tongue', eyes: { color: '#2563EB', style: 'big' }, fg: 'pizza' }),
  'el-tigre': { skin: SKIN.brown, hat: ['cowl', '#F97316'], eyes: { color: '#16A34A', style: 'fierce' }, mouth: 'grin', body: { color: '#F97316', collar: 'high', emblem: ['bolt', '#111'] }, fg: 'claws' },
  'human-torch': { skin: '#FDBA74', hair: 'flame', eyes: { color: '#2563EB' }, mouth: 'grin', body: { color: '#1D4ED8', collar: 'high', emblem: ['four', '#1D4ED8'] }, fg: 'fireHand' },
  'the-thing': { skin: '#EA580C', face: 'square', noEars: true, blush: false, brows: 'thick', eyes: { color: '#2563EB' }, mouth: 'flat', markings: '<path d="M360 380 L440 420 L420 480 M560 360 L620 430 M380 600 L450 640 L430 700 M560 620 L640 600 L620 680" stroke="#7C2D12" stroke-width="8" fill="none"/>', body: { color: '#1D4ED8', collar: 'none', emblem: ['four', '#1D4ED8'] } },
  'invisible-woman': { hair: ['wavy', '#FDE047'], eyes: { color: '#2563EB', lashes: true }, body: { color: '#1D4ED8', collar: 'high', emblem: ['four', '#1D4ED8'] }, bgExtra: 'sparkles' },
  cyclops: { hair: ['sidepart', '#78350F'], visor: '#EF4444', mouth: 'flat', face: 'square', body: { color: '#1E3A8A', collar: 'high', emblem: ['x', '#FBBF24'] } },
  storm: { skin: SKIN.dark, hair: ['longwhite', '#F8FAFC'], eyes: { color: '#E5E7EB', lashes: true }, earrings: '#FBBF24', body: { color: '#111', collar: 'high', cape: '#111' }, fg: 'lightning' },
  'mermaid-man': { skin: SKIN.light, hair: ['buzz', '#E5E7EB'], domino: '#1D4ED8', mustache: '#E5E7EB', brows: 'thick', browColor: '#E5E7EB', face: 'long', body: { color: '#F97316', collar: 'high', emblem: ['star', '#FDE047'] } },
  'barnacle-boy': { skin: SKIN.light, hat: 'sailor', domino: '#111', mouth: 'frown', body: { color: '#F5F5F4', collar: 'v', collarColor: '#1D4ED8' } },
  bolin: { skin: SKIN.tan, hair: ['sidepart', '#111'], eyes: { color: '#16A34A', style: 'happy' }, mouth: 'grin', body: { color: '#15803D', collar: 'gi', collarColor: '#FCD34D' }, fg: 'rockFist' },

  // ---------------- Villains ----------------
  shredder: { skin: SKIN.tan, hat: 'shredder', eyes: { color: '#DC2626', style: 'fierce' }, brows: 'angry', body: { color: '#4B5563', collar: 'armor', collarColor: '#9CA3AF', cape: '#7F1D1D' }, fg: 'claws' },
  ozai: { skin: SKIN.light, hair: ['topknot', '#111'], beard: '#111', face: 'long', eyes: { color: '#D97706', style: 'fierce' }, brows: 'angry', mouth: 'flat', body: { color: '#7F1D1D', collar: 'armor', collarColor: '#FBBF24' }, fg: 'fireHand' },
  zim: { skin: '#4ADE80', antennae: '#111', noEars: true, blush: false, eyes: { color: '#DB2777', style: 'fierce' }, brows: 'angry', mouth: 'fang', body: { color: '#DB2777', collar: 'high', collarColor: '#9CA3AF' } },
  plankton: { special: 'plankton' },
  azula: { skin: SKIN.light, hair: ['bob', '#111'], hat: 'tiara', eyes: { color: '#D97706', style: 'fierce', lashes: true }, mouth: 'smirk', body: { color: '#991B1B', collar: 'armor', collarColor: '#111' }, fg: 'lightning' },
  'vlad-plasmius': { skin: '#93C5FD', hair: ['slick', '#E5E7EB'], pointyEars: true, goatee: '#111', eyes: { color: '#DC2626', style: 'fierce' }, brows: 'angry', mouth: 'fang', blush: false, body: { color: '#111', collar: 'high', collarColor: '#F5F5F4', cape: '#7F1D1D' } },
  krang: { special: 'krang' },
  bebop: { kind: 'creature', color: '#A16207', ears: 'pointy', muzzle: 'pig', hair: ['mohawk', '#A855F7'], shades: true, body: { color: '#111', collar: 'high', collarColor: '#374151' } },
  rocksteady: { kind: 'creature', color: '#9CA3AF', ears: 'small', muzzle: 'rhino', eyes: { color: '#111', style: 'fierce' }, brows: 'angry', hat: ['beanie', '#DC2626'], body: { color: '#166534', collar: 'armor' } },
  vicky: { hair: ['ponytail', '#EF4444'], eyes: { color: '#DC2626', style: 'fierce', lashes: true }, brows: 'angry', mouth: 'grin', body: { color: '#22C55E', collar: 'round' } },
  magneto: { hat: 'magneto', face: 'long', eyes: { color: '#2563EB', style: 'fierce' }, brows: 'angry', mouth: 'frown', body: { color: '#7F1D1D', collar: 'armor', collarColor: '#991B1B', cape: '#6B21A8' } },
  amon: { skin: '#F5F5F4', hair: ['hood', '#1F2937'], noEars: true, blush: false, eyes: { style: 'dot' }, brows: 'none', mouth: 'flat', markings: '<circle cx="500" cy="400" r="40" fill="#DC2626"/><path d="M460 400 L540 400" stroke="#F5F5F4" stroke-width="8"/>', body: { color: '#111', collar: 'high' } },
  gir: { special: 'gir' },
  karen: { special: 'karen' },
  crocker: { skin: SKIN.light, hair: ['buzz', '#9CA3AF'], face: 'long', eyes: { color: '#111', style: 'fierce' }, brows: 'angry', mouth: 'grin', body: { color: '#64748B', collar: 'suit', emblem: ['tie', '#DC2626'] }, bgExtra: 'sparkles' },
  skulker: { skin: '#86EFAC', hair: ['mohawk', '#22C55E'], face: 'square', noEars: true, blush: false, eyes: { color: '#DC2626', style: 'fierce' }, brows: 'angry', mouth: 'fang', body: { color: '#4B5563', collar: 'armor' } },
  'foot-soldier': { hat: ['cowl', '#111'], eyes: { color: '#DC2626', style: 'fierce' }, brows: 'none', blush: false, markings: '<path d="M330 580 Q500 560 670 580 Q660 700 500 715 Q340 700 330 580Z" fill="#111"/>', mouth: 'none', body: { color: '#111', collar: 'gi', collarColor: '#374151', emblem: ['flame', '#DC2626'] } },
  'ty-lee': { hair: ['ponytail', '#78350F'], eyes: { color: '#78350F', lashes: true, style: 'happy' }, mouth: 'grin', body: { color: '#F472B6', collar: 'v' }, bgExtra: 'sparkles' },
  'baxter-stockman': { skin: SKIN.dark, hair: ['buzz', '#111'], glasses: true, mouth: 'smirk', body: { color: '#F5F5F4', collar: 'high' } },
  'flying-dutchman': { skin: '#86EFAC', hat: 'captain', beard: '#4ADE80', eyes: { color: '#FDE047', style: 'fierce' }, brows: 'angry', mouth: 'fang', blush: false, body: { color: '#1F2937', collar: 'suit' }, bgExtra: 'ghostTail' },

  // ---------------- Animals ----------------
  spongebob: { special: 'sponge', bgExtra: 'bubbles' },
  po: { kind: 'creature', color: '#F5F5F4', earColor: '#111', ears: 'round', inner: '#374151', pattern: 'panda', muzzle: 'bear', muzzleColor: '#fff', eyes: { color: '#16A34A', style: 'big' }, mouth: 'grin', mouthY: 690, body: { color: '#F5F5F4', collar: 'none' } },
  appa: { special: 'appa' },
  skipper: { special: 'penguin', eyeStyle: 'fierce', iris: '#111', brows: 'angry' },
  patrick: { special: 'starfish', bgExtra: 'bubbles' },
  splinter: { kind: 'creature', color: '#92400E', ears: 'round', muzzle: 'rat', muzzleColor: '#D6A77A', eyes: { color: '#111', style: 'sleepy' }, brows: 'normal', body: { color: '#B45309', collar: 'gi', collarColor: '#78350F' }, fg: 'staff' },
  rocko: { kind: 'creature', color: '#D6A77A', ears: 'tall', muzzle: 'dog', muzzleColor: '#F5DEB3', eyes: { color: '#111' }, brows: 'worried', body: { color: '#60A5FA', collar: 'shirt', extra: '<g fill="#F472B6">' + [[330, 950], [640, 1000], [420, 1150], [700, 1200], [300, 1250]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="26"/>`).join('') + '</g>' } },
  'ren-hoek': { kind: 'creature', color: '#E7B98E', ears: 'big', muzzle: 'dog', muzzleColor: '#F5DEB3', eyes: { color: '#DC2626', style: 'fierce' }, brows: 'angry', body: { color: '#E7B98E', collar: 'none' } },
  stimpy: { kind: 'creature', color: '#EF4444', ears: 'pointy', eyes: { color: '#111', style: 'sleepy' }, markings: '<ellipse cx="500" cy="640" rx="120" ry="80" fill="#FEF3C7" stroke="#1a1020" stroke-width="7"/><ellipse cx="500" cy="600" rx="60" ry="42" fill="#3B82F6" stroke="#1a1020" stroke-width="7"/>', mouth: 'tongue', mouthY: 680, body: { color: '#EF4444', collar: 'none' } },
  catdog: {
    duo: [
      { kind: 'creature', color: '#F97316', ears: 'pointy', muzzle: 'cat', eyes: { color: '#16A34A', style: 'fierce' }, mouth: 'smirk', mouthY: 670, body: { color: '#F97316', collar: 'none' } },
      { kind: 'creature', color: '#FDE68A', ears: 'floppy', muzzle: 'dog', muzzleColor: '#FEF3C7', eyes: { color: '#111', style: 'happy' }, mouth: 'tongue', mouthY: 680, body: { color: '#FDE68A', collar: 'none' } },
    ],
  },
  tigress: { kind: 'creature', color: '#F97316', ears: 'pointy', pattern: 'stripes', muzzle: 'cat', eyes: { color: '#DC2626', style: 'fierce' }, brows: 'angry', body: { color: '#B91C1C', collar: 'gi', collarColor: '#FCD34D' } },
  'mr-krabs': { special: 'crab' },
  squidward: { special: 'squid' },
  gary: { special: 'snail', bgExtra: 'bubbles' },
  'norbert-beaver': { kind: 'creature', color: '#92400E', ears: 'small', muzzle: 'beaver', muzzleColor: '#D6A77A', eyes: { color: '#111', style: 'sleepy' }, brows: 'normal', body: { color: '#92400E', collar: 'none' } },
  'daggett-beaver': { kind: 'creature', color: '#78350F', ears: 'small', muzzle: 'beaver', muzzleColor: '#C08457', eyes: { color: '#111', style: 'big' }, brows: 'angry', body: { color: '#78350F', collar: 'none' } },
  momo: { kind: 'creature', color: '#F5F5F4', ears: 'big', inner: '#A8A29E', muzzle: 'cat', eyes: { color: '#16A34A', style: 'big' }, markings: '<path d="M440 300 L470 360 M560 300 L530 360" stroke="#78716C" stroke-width="16"/>', body: { color: '#F5F5F4', collar: 'none' } },
  heffer: { kind: 'creature', color: '#B45309', ears: 'horns', muzzle: 'cow', eyes: { style: 'happy' }, mouth: 'grin', mouthY: 700, body: { color: '#F5F5F4', collar: 'shirt' } },
  darwin: { kind: 'creature', color: '#92400E', ears: 'round', inner: '#FDE68A', muzzle: 'monkey', muzzleColor: '#FDE68A', eyes: { color: '#111' }, brows: 'worried', body: { color: '#F5F5F4', collar: 'shirt' } },
  otis: { kind: 'creature', color: '#F5F5F4', ears: 'horns', muzzle: 'cow', pattern: 'spots', eyes: { style: 'happy' }, mouth: 'grin', mouthY: 700, body: { color: '#F5F5F4', collar: 'none' } },
  reptar: { special: 'reptar' },

  // ---------------- Friends ----------------
  'tommy-pickles': { face: 'baby', hair: ['tuft', '#7C2D12'], eyes: { color: '#111', style: 'big' }, mouth: 'grin', body: { color: '#38BDF8', collar: 'round' }, bgExtra: 'sparkles' },
  'timmy-turner': { hair: ['sidepart', '#78350F'], hat: ['cap', '#EC4899'], eyes: { color: '#2563EB' }, mouth: 'teeth', body: { color: '#EC4899', collar: 'round' }, fg: 'wand' },
  arnold: { hair: ['tuft', '#FDE047'], hat: ['backcap', '#3B82F6'], face: 'square', eyes: { color: '#2563EB' }, body: { color: '#16A34A', collar: 'shirt', collarColor: '#B91C1C' } },
  helga: { hair: ['pigtails', '#FACC15'], bow: '#EC4899', brows: 'uni', eyes: { color: '#3B82F6', lashes: true }, mouth: 'smirk', body: { color: '#F472B6', collar: 'round' }, bgExtra: 'hearts' },
  'lincoln-loud': { hair: ['spiky', '#F8FAFC'], freckles: true, eyes: { color: '#111' }, mouth: 'grin', body: { color: '#F97316', collar: 'shirt' } },
  angelica: { hair: ['pigtails', '#FDE047'], bow: '#A855F7', eyes: { color: '#2563EB', lashes: true, style: 'fierce' }, mouth: 'smirk', body: { color: '#A855F7', collar: 'round' } },
  chuckie: { face: 'baby', hair: ['messy', '#F97316'], glasses: '#7C3AED', freckles: true, brows: 'worried', eyes: { color: '#16A34A' }, mouth: 'open', body: { color: '#60A5FA', collar: 'round', emblem: ['circle', '#16A34A'] } },
  gerald: { skin: SKIN.deep, hair: ['afro', '#111'], face: 'long', eyes: { color: '#3F2A1D' }, mouth: 'smirk', body: { color: '#DC2626', collar: 'round', emblem: ['letter', '#fff', '33'] } },
  'doug-funnie': { hair: ['sidepart', '#1F2937'], eyes: { color: '#3F2A1D' }, body: { color: '#16A34A', collar: 'shirt' } },
  'eliza-thornberry': { hair: ['pigtails', '#B45309'], glasses: true, freckles: true, eyes: { color: '#2563EB', lashes: true }, mouth: 'grin', body: { color: '#D6A77A', collar: 'shirt' } },
  'cosmo-wanda': {
    duo: [
      { hair: ['sidepart', '#22C55E'], hat: 'crown', eyes: { color: '#16A34A', style: 'happy' }, mouth: 'tongue', body: { color: '#F5F5F4', collar: 'shirt', emblem: ['tie', '#111'] } },
      { hair: ['swirl', '#EC4899'], hat: 'crown', eyes: { color: '#EC4899', lashes: true }, mouth: 'smirk', body: { color: '#FDE047', collar: 'round' } },
    ],
    fg: 'wand',
    bgExtra: 'sparkles',
  },
  'otto-rocket': { skin: SKIN.brown, hair: ['long', '#78350F'], eyes: { color: '#3F2A1D', style: 'fierce' }, mouth: 'grin', body: { color: '#F97316', collar: 'round' }, fg: 'skateboard' },
  'phil-lil': {
    duo: [
      { face: 'baby', hair: ['tuft', '#78350F'], eyes: { color: '#3F2A1D', style: 'big' }, mouth: 'grin', body: { color: '#22C55E', collar: 'round' } },
      { face: 'baby', hair: ['tuft', '#78350F'], bow: '#EC4899', eyes: { color: '#3F2A1D', style: 'big', lashes: true }, mouth: 'grin', body: { color: '#22C55E', collar: 'round' } },
    ],
  },
  susie: { skin: SKIN.deep, hair: ['pigtails', '#111'], bow: '#F97316', eyes: { color: '#3F2A1D', lashes: true }, body: { color: '#F97316', collar: 'round' } },
  skeeter: { skin: '#60A5FA', hair: ['buzz', '#78350F'], eyes: { color: '#111' }, mouth: 'grin', blush: false, body: { color: '#F97316', collar: 'v' } },
  'reggie-rocket': { skin: SKIN.brown, hair: ['bob', '#7C2D12'], hat: ['backcap', '#7C3AED'], eyes: { color: '#3F2A1D', lashes: true }, body: { color: '#A855F7', collar: 'round' } },
  aj: { skin: SKIN.deep, hair: 'bald', face: 'long', glasses: true, eyes: { color: '#3F2A1D' }, mouth: 'smirk', body: { color: '#F97316', collar: 'shirt' } },
  ginger: { hair: ['wavy', '#F97316'], freckles: true, eyes: { color: '#16A34A', lashes: true }, body: { color: '#14B8A6', collar: 'round' } },
  rudy: { hair: ['spiky', '#111'], eyes: { color: '#3F2A1D' }, mouth: 'grin', body: { color: '#16A34A', collar: 'round' }, fg: 'chalk' },
  'lori-loud': { hair: ['bob', '#FDE047'], earrings: '#F472B6', eyes: { color: '#2563EB', lashes: true, style: 'sleepy' }, mouth: 'smirk', body: { color: '#60A5FA', collar: 'v' } },
};

const top = (name, color, dy = -175) => ({ topHat: [name, color, dy] });

const SKINS = {
  'leo-rise': { base: 'leonardo', mouth: 'grin', eyes: { color: '#78350F', style: 'big' }, bgExtra: 'sparkles' },
  'leo-mayhem': { base: 'leonardo', body: { color: '#1F2937', collar: 'hood' }, mouth: 'open', bgExtra: 'fireworks' },
  'raph-2012': { base: 'raphael', scar: true, eyes: { color: '#16A34A', style: 'fierce' } },
  'donnie-rise': { base: 'donatello', glasses: '#7C3AED', goggles: undefined, bgExtra: 'sparkles' },
  'mikey-pizza': { base: 'michelangelo', mouth: 'fang', eyes: { color: '#F97316', style: 'fierce' }, bgExtra: 'bats' },
  'spongebob-goofy': { base: 'spongebob', top: '<path d="M300 280 Q300 110 500 100 Q700 110 700 280Z" fill="#FCD34D" stroke="#1a1020" stroke-width="8"/><ellipse cx="500" cy="170" rx="80" ry="40" fill="#92400E" stroke="#1a1020" stroke-width="6"/><text x="500" y="250" font-family="Arial Black" font-size="64" fill="#16A34A" text-anchor="middle">GG</text>' },
  'spongebob-xmas': { base: 'spongebob', ...top('santa', '#DC2626', -200), bgExtra: 'snow' },
  'patrick-kamp': { base: 'patrick', top: '<path d="M380 250 Q380 160 500 150 Q620 160 620 250Z" fill="#F97316" stroke="#1a1020" stroke-width="8"/><path d="M370 250 Q500 220 680 260" stroke="#C2410C" stroke-width="22" fill="none"/>', bgExtra: 'palms' },
  'tommy-paris': { base: 'tommy-pickles', hat: ['beanie', '#1D4ED8'], bgExtra: 'sparkles' },
  'angelica-witch': { base: 'angelica', hat: 'witch', bgExtra: 'bats' },
  'aang-avatar-state': { base: 'aang', eyes: { color: '#E0F2FE', style: 'big', sclera: '#BAE6FD' }, mouth: 'open', bgExtra: 'lightning' },
  'korra-avatar-state': { base: 'korra', eyes: { color: '#E0F2FE', style: 'big', sclera: '#BAE6FD' }, mouth: 'open', bgExtra: 'sparkles' },
  'jimmy-boy-genius': { base: 'jimmy-neutron', goggles: '#38BDF8', bgExtra: 'sparkles' },
  'arnold-jungle': { base: 'arnold', body: { color: '#A3A635', collar: 'shirt', collarColor: '#78350F' }, bgExtra: 'palms' },
  'danny-ghost-zone': { base: 'danny-phantom', eyes: { color: '#4ADE80', style: 'big' }, bgExtra: ['bats', 'ghostTail'] },
  'zim-xmas': { base: 'zim', hat: 'santa', bgExtra: 'snow' },
  'po-lunar': { base: 'po', body: { color: '#DC2626', collar: 'gi', collarColor: '#FBBF24' }, bgExtra: 'lanterns' },
  'helga-valentine': { base: 'helga', body: { color: '#DB2777', collar: 'round', emblem: ['heart', '#F9A8D4'] }, mouth: 'smile', bgExtra: 'hearts' },
  'super-shredder': { base: 'shredder', body: { color: '#1F2937', collar: 'armor', collarColor: '#6B7280', cape: '#450A0A' }, eyes: { color: '#F59E0B', style: 'fierce' }, bgExtra: 'lightning' },
  'lincoln-movie': { base: 'lincoln-loud', bgExtra: 'leaves' },
  quailman: { base: 'doug-funnie', hat: ['bandana', '#92400E'], body: { color: '#F5F5F4', collar: 'round', cape: '#DC2626', emblem: ['letter', '#DC2626', 'Q'] }, eyes: { color: '#3F2A1D', style: 'fierce' }, mouth: 'grin' },
  'gerald-strawberry': { base: 'gerald', body: { color: '#DC2626', collar: 'round', emblem: null, extra: '<g fill="#FDE68A">' + [[320, 950], [450, 1000], [580, 960], [700, 1040], [380, 1120], [520, 1160], [660, 1220], [300, 1280]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="10" ry="16"/>`).join('') + '</g>' }, top: '<path d="M300 300 L360 170 L420 260 L500 140 L580 260 L640 170 L700 300 Q500 260 300 300Z" fill="#16A34A" stroke="#1a1020" stroke-width="7"/>' },
};

function merge(a, b) {
  const out = { ...a };
  for (const [k, v] of Object.entries(b)) {
    if (k === 'base') continue;
    out[k] = v && typeof v === 'object' && !Array.isArray(v) && a[k] && typeof a[k] === 'object' && !Array.isArray(a[k]) ? { ...a[k], ...v } : v;
  }
  return out;
}

const ALL = { ...BASE };
for (const [id, s] of Object.entries(SKINS)) ALL[id] = merge(BASE[s.base], s);

module.exports = { SPECS: ALL };

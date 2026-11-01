/**
 * Procedural anime-style portrait drawing (SVG strings).
 * Canvas is 1000x1400; the head sits around (500, 500) and the body fills the bottom.
 */

const INK = '#1a1020';
const AURA = {
  labrats: ['#7DD3FC', '#1D4ED8'],
  heroes: ['#FDA4AF', '#B91C1C'],
  villains: ['#D8B4FE', '#4C1D95'],
  animals: ['#86EFAC', '#166534'],
  friends: ['#FEF08A', '#C2410C'],
};

function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const ch = (v) => Math.max(0, Math.min(255, Math.round(v + amt * (amt < 0 ? v : 255 - v))));
  const r = ch(n >> 16), g = ch((n >> 8) & 255), b = ch(n & 255);
  return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
const stroke = (w = 8) => `stroke="${INK}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;

// ---------------- Background ----------------
function background(faction, id) {
  const [a1, a2] = AURA[faction];
  let lines = '';
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2 + (i % 2) * 0.04;
    const r1 = 300 + ((i * 37) % 5) * 25;
    const p = (r, d) => `${500 + Math.cos(a + d) * r},${520 + Math.sin(a + d) * r}`;
    lines += `<polygon points="${p(r1, 0)} ${p(900, 0.028)} ${p(900, -0.028)}" fill="#fff" opacity="${0.18 + (i % 3) * 0.08}"/>`;
  }
  return `<defs><radialGradient id="bg-${id}" cx="50%" cy="36%" r="78%"><stop offset="0" stop-color="#fff"/><stop offset="0.22" stop-color="${a1}"/><stop offset="1" stop-color="${a2}"/></radialGradient></defs>
  <rect width="1000" height="1400" fill="url(#bg-${id})"/>${lines}`;
}

// ---------------- Body ----------------
const EMBLEMS = {
  atom: (c) => `<g transform="translate(500 960)" stroke="${c}" stroke-width="10" fill="none"><ellipse rx="70" ry="26"/><ellipse rx="70" ry="26" transform="rotate(60)"/><ellipse rx="70" ry="26" transform="rotate(-60)"/><circle r="12" fill="${c}"/></g>`,
  star: (c) => `<polygon transform="translate(500 960)" points="0,-70 20,-22 70,-22 30,10 45,62 0,32 -45,62 -30,10 -70,-22 -20,-22" fill="${c}" ${stroke(6)}/>`,
  bolt: (c) => `<polygon transform="translate(500 950)" points="15,-80 -45,10 0,10 -20,85 50,-15 5,-15 30,-80" fill="${c}" ${stroke(6)}/>`,
  circle: (c) => `<circle cx="500" cy="960" r="60" fill="${c}" ${stroke(6)}/>`,
  four: (c) => `<circle cx="500" cy="960" r="62" fill="#fff" ${stroke(6)}/><text x="500" y="990" font-family="Arial Black,Arial" font-size="86" font-weight="900" fill="${c}" text-anchor="middle">4</text>`,
  x: (c) => `<circle cx="500" cy="960" r="62" fill="#111" ${stroke(6)}/><path d="M465 925 L535 995 M535 925 L465 995" stroke="${c}" stroke-width="18"/>`,
  ghost: (c) => `<path d="M455 1010 L455 950 Q455 905 500 905 Q545 905 545 950 L545 1010 L530 995 L515 1010 L500 995 L485 1010 L470 995Z" fill="${c}" ${stroke(6)}/>`,
  flame: (c) => `<path d="M500 880 Q560 940 540 990 Q530 1030 500 1035 Q455 1030 455 985 Q455 950 480 930 Q480 965 500 970 Q495 920 500 880Z" fill="${c}" ${stroke(6)}/>`,
  heart: (c) => `<path d="M500 1010 L445 950 Q420 915 455 895 Q485 885 500 915 Q515 885 545 895 Q580 915 555 950Z" fill="${c}" ${stroke(6)}/>`,
  skull: (c) => `<g transform="translate(500 955)"><path d="M-48 10 Q-55 -55 0 -58 Q55 -55 48 10 L30 20 L30 45 L-30 45 L-30 20Z" fill="${c}" ${stroke(6)}/><circle cx="-20" cy="-8" r="13" fill="${INK}"/><circle cx="20" cy="-8" r="13" fill="${INK}"/></g>`,
  wave: (c) => `<path d="M420 980 Q450 930 480 980 Q510 1030 540 980 Q570 930 600 980" stroke="${c}" stroke-width="18" fill="none"/>`,
  leaf: (c) => `<path d="M450 1010 Q450 900 560 900 Q560 1010 450 1010Z M455 1005 L540 920" fill="${c}" ${stroke(6)}/>`,
  shell: () => '',
  letter: (c, t) => `<text x="500" y="1000" font-family="Arial Black,Arial" font-size="120" font-weight="900" fill="${c}" stroke="${INK}" stroke-width="6" text-anchor="middle">${t}</text>`,
  stripe: (c) => `<rect x="190" y="930" width="620" height="55" fill="${c}"/>`,
  tie: (c) => `<polygon points="485,800 515,800 530,830 515,960 500,985 485,960 470,830" fill="${c}" ${stroke(5)}/>`,
  medal: (c) => `<path d="M480 830 L470 900 L530 900 L520 830" fill="#1D4ED8"/><circle cx="500" cy="925" r="34" fill="${c}" ${stroke(6)}/>`,
};

function body(b, skin) {
  const c = b.color ?? '#6B7280';
  const dark = shade(c, -0.25);
  let s = '';
  if (b.cape) s += `<path d="M150 1400 Q160 900 330 760 L670 760 Q840 900 850 1400Z" fill="${b.cape}" ${stroke()}/>`;
  if (b.wings) s += `<path d="M330 820 Q120 640 90 820 Q140 800 160 880 Q200 830 240 900 Q270 850 330 900Z M670 820 Q880 640 910 820 Q860 800 840 880 Q800 830 760 900 Q730 850 670 900Z" fill="${b.wings}" ${stroke(6)}/>`;
  const shoulders = b.slim
    ? 'M230 1400 Q240 860 420 770 L580 770 Q760 860 770 1400Z'
    : 'M170 1400 Q180 860 400 760 L600 760 Q820 860 830 1400Z';
  // neck
  s += `<path d="M445 690 L445 790 Q500 820 555 790 L555 690Z" fill="${skin}" ${stroke(7)}/>`;
  s += `<path d="${shoulders}" fill="${c}" ${stroke()}/>`;
  s += `<path d="M640 800 Q790 880 800 1400 L700 1400 Q700 950 610 830Z" fill="${dark}" opacity="0.55"/>`;
  const col = b.collar ?? 'v';
  if (col === 'v') s += `<path d="M405 765 L500 880 L595 765 Q500 800 405 765Z" fill="${b.collarColor ?? skin}" ${stroke(6)}/>`;
  if (col === 'round') s += `<path d="M420 768 Q500 840 580 768" fill="none" ${stroke(10)}/>`;
  if (col === 'high') s += `<path d="M420 700 L420 790 Q500 830 580 790 L580 700" fill="${b.collarColor ?? c}" ${stroke(7)}/>`;
  if (col === 'shirt') s += `<path d="M410 765 L470 850 L500 790 L530 850 L590 765 Q500 800 410 765Z" fill="${b.collarColor ?? '#fff'}" ${stroke(6)}/>`;
  if (col === 'suit') s += `<path d="M405 765 L500 1000 L595 765 Q500 800 405 765Z" fill="${b.collarColor ?? '#fff'}" ${stroke(6)}/><path d="M405 765 L470 900 L500 1000 M595 765 L530 900 L500 1000" fill="none" ${stroke(6)}/>`;
  if (col === 'gi') s += `<path d="M410 765 L600 1100 M590 765 L470 960" fill="none" stroke="${b.collarColor ?? shade(c, -0.35)}" stroke-width="34"/>`;
  if (col === 'hood') s += `<path d="M300 800 Q500 920 700 800 Q680 760 600 755 Q500 800 400 755 Q320 760 300 800Z" fill="${shade(c, -0.15)}" ${stroke(6)}/>`;
  if (col === 'armor')
    s += `<path d="M190 900 Q230 780 400 760 L420 860 Q300 870 190 900Z M810 900 Q770 780 600 760 L580 860 Q700 870 810 900Z" fill="${b.collarColor ?? shade(c, 0.25)}" ${stroke(6)}/><path d="M420 860 L580 860 L560 1050 L440 1050Z" fill="${shade(c, 0.15)}" ${stroke(6)}/>`;
  if (col === 'shell')
    s += `<path d="M380 790 Q500 830 620 790 L640 1400 L360 1400Z" fill="#FDE68A" ${stroke(6)}/><path d="M380 900 L620 900 M370 1010 L630 1010 M365 1120 L635 1120" ${stroke(5)}/><path d="M300 800 L700 1250" stroke="#7C2D12" stroke-width="30"/>`;
  if (col === 'overalls')
    s += `<path d="M360 960 L640 960 L660 1400 L340 1400Z" fill="${b.collarColor ?? '#2563EB'}" ${stroke(6)}/><path d="M380 960 L360 790 M620 960 L640 790" stroke="${b.collarColor ?? '#2563EB'}" stroke-width="30"/><circle cx="380" cy="980" r="10" fill="#FCD34D"/><circle cx="620" cy="980" r="10" fill="#FCD34D"/>`;
  if (b.emblem) {
    const [kind, ec, text] = b.emblem;
    s += EMBLEMS[kind](ec, text);
  }
  if (b.extra) s += b.extra;
  return s;
}

// ---------------- Faces ----------------
const FACE = {
  round: 'M320 470 Q320 655 500 700 Q680 655 680 470 Q680 300 500 290 Q320 300 320 470Z',
  long: 'M338 460 Q338 690 500 735 Q662 690 662 460 Q662 285 500 278 Q338 285 338 460Z',
  square: 'M318 460 L322 615 Q360 700 500 715 Q640 700 678 615 L682 460 Q682 300 500 290 Q318 300 318 460Z',
  baby: 'M300 505 Q300 690 500 712 Q700 690 700 505 Q700 318 500 308 Q300 318 300 505Z',
  pointy: 'M325 460 Q330 620 500 735 Q670 620 675 460 Q675 295 500 288 Q325 295 325 460Z',
};

function eyePair(e, id) {
  const y = e.y ?? 525;
  const style = e.style ?? 'anime';
  const iris = e.color ?? '#6B4423';
  const sp = e.spacing ?? 82;
  let s = `<defs><linearGradient id="iris-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(iris, -0.45)}"/><stop offset="1" stop-color="${shade(iris, 0.35)}"/></linearGradient></defs>`;
  for (const side of [-1, 1]) {
    const x = 500 + side * sp;
    if (style === 'happy') {
      s += `<path d="M${x - 40} ${y + 10} Q${x} ${y - 38} ${x + 40} ${y + 10}" fill="none" ${stroke(11)}/>`;
      continue;
    }
    if (style === 'dot') {
      s += `<ellipse cx="${x}" cy="${y}" rx="14" ry="20" fill="${INK}"/><circle cx="${x - 4}" cy="${y - 7}" r="5" fill="#fff"/>`;
      continue;
    }
    const ry = style === 'fierce' ? 44 : style === 'big' ? 64 : 56;
    const rx = style === 'big' ? 52 : 45;
    s += `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${e.sclera ?? '#fff'}" ${stroke(6)}/>`;
    s += `<ellipse cx="${x + side * -4}" cy="${y + 6}" rx="${rx * 0.7}" ry="${ry * 0.78}" fill="url(#iris-${id})"/>`;
    s += e.slit
      ? `<ellipse cx="${x + side * -4}" cy="${y + 6}" rx="7" ry="${ry * 0.6}" fill="${INK}"/>`
      : `<ellipse cx="${x + side * -4}" cy="${y + 10}" rx="${rx * 0.34}" ry="${ry * 0.4}" fill="${INK}"/>`;
    s += `<ellipse cx="${x - 14}" cy="${y - 16}" rx="13" ry="16" fill="#fff"/><circle cx="${x + 14}" cy="${y + 26}" r="6" fill="#fff"/>`;
    // upper lid
    if (style === 'fierce') {
      const inner = x - side * 50, outer = x + side * 50;
      s += `<path d="M${outer} ${y - 52} L${inner} ${y - 22} L${inner} ${y - 90} L${outer} ${y - 90}Z" fill="${e.skin}"/>`;
      s += `<path d="M${outer + side * 6} ${y - 50} L${inner} ${y - 22}" ${stroke(12)}/>`;
    } else if (style === 'sleepy') {
      s += `<path d="M${x - 50} ${y - 4} Q${x} ${y - 90} ${x + 50} ${y - 4} L${x + 50} ${y - 80} L${x - 50} ${y - 80}Z" fill="${e.skin}"/>`;
      s += `<path d="M${x - 50} ${y - 4} Q${x} ${y - 14} ${x + 50} ${y - 4}" fill="none" ${stroke(10)}/>`;
    } else {
      s += `<path d="M${x - 50} ${y - ry * 0.45} Q${x} ${y - ry - 14} ${x + 50} ${y - ry * 0.45}" fill="none" ${stroke(e.lashes ? 13 : 10)}/>`;
    }
    if (e.lashes) {
      const ox = x + side * 48;
      s += `<path d="M${ox} ${y - 30} l${side * 24} -16 M${ox - side * 4} ${y - 14} l${side * 26} -4" ${stroke(7)}/>`;
    }
  }
  return s;
}

function brows(kind, color, y = 445, sp = 82) {
  const c = color ?? INK;
  const w = kind === 'thick' ? 16 : 10;
  if (!kind || kind === 'none') return '';
  if (kind === 'uni') return `<path d="M${500 - sp - 50} ${y + 8} Q500 ${y - 22} ${500 + sp + 50} ${y + 8}" stroke="${c}" stroke-width="16" fill="none" stroke-linecap="round"/>`;
  let s = '';
  for (const side of [-1, 1]) {
    const x = 500 + side * sp;
    const inner = x - side * 45, outer = x + side * 45;
    if (kind === 'angry') s += `<path d="M${outer} ${y - 18} L${inner} ${y + 14}" stroke="${c}" stroke-width="${w + 2}" stroke-linecap="round"/>`;
    else if (kind === 'worried') s += `<path d="M${outer} ${y + 10} L${inner} ${y - 16}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
    else s += `<path d="M${x - 45} ${y + 4} Q${x} ${y - 18} ${x + 45} ${y + 4}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
  }
  return s;
}

function mouth(kind, y = 640) {
  switch (kind) {
    case 'none':
      return '';
    case 'grin':
      return `<path d="M440 ${y - 10} Q500 ${y + 50} 560 ${y - 10}Z" fill="#7F1D1D" ${stroke(7)}/><path d="M450 ${y - 6} L550 ${y - 6} L545 ${y + 6} L455 ${y + 6}Z" fill="#fff"/>`;
    case 'open':
      return `<ellipse cx="500" cy="${y + 6}" rx="26" ry="30" fill="#7F1D1D" ${stroke(7)}/><ellipse cx="500" cy="${y + 22}" rx="14" ry="9" fill="#F87171"/>`;
    case 'smirk':
      return `<path d="M455 ${y + 6} Q505 ${y + 20} 550 ${y - 14}" fill="none" ${stroke(8)}/>`;
    case 'frown':
      return `<path d="M458 ${y + 16} Q500 ${y - 12} 542 ${y + 16}" fill="none" ${stroke(8)}/>`;
    case 'flat':
      return `<path d="M465 ${y + 4} L535 ${y + 4}" ${stroke(8)}/>`;
    case 'fang':
      return `<path d="M445 ${y - 6} Q500 ${y + 38} 555 ${y - 6}" fill="#7F1D1D" ${stroke(7)}/><path d="M462 ${y} l10 22 l10 -20Z M520 ${y} l10 22 l10 -20Z" fill="#fff"/>`;
    case 'teeth':
      return `<path d="M450 ${y - 4} Q500 ${y + 30} 550 ${y - 4}" fill="none" ${stroke(8)}/><rect x="478" y="${y + 6}" width="44" height="40" rx="5" fill="#fff" ${stroke(5)}/><path d="M500 ${y + 8} L500 ${y + 44}" ${stroke(4)}/>`;
    case 'tongue':
      return `<path d="M445 ${y - 8} Q500 ${y + 44} 555 ${y - 8}Z" fill="#7F1D1D" ${stroke(7)}/><path d="M480 ${y + 14} Q500 ${y + 60} 520 ${y + 14}" fill="#F87171" ${stroke(5)}/>`;
    default:
      return `<path d="M455 ${y} Q500 ${y + 30} 545 ${y}" fill="none" ${stroke(8)}/>`;
  }
}

// ---------------- Hair & hats (return [back, front]) ----------------
function hair(h) {
  if (!h) return ['', ''];
  const [style, color = '#3F2A1D'] = Array.isArray(h) ? h : [h];
  const c = color, d = shade(c, -0.3);
  const fill = `fill="${c}" ${stroke()}`;
  const sh = (p) => `<path d="${p}" fill="${d}" opacity="0.6"/>`;
  switch (style) {
    case 'spiky':
      return ['', `<path d="M300 500 L292 400 L248 360 L322 336 L300 248 L392 290 L410 186 L472 262 L522 158 L562 256 L632 196 L632 290 L724 258 L692 350 L752 384 L700 420 L702 500 L662 420 L612 452 L582 398 L532 442 L492 394 L442 446 L410 398 L362 452 L332 410Z" ${fill}/>${sh('M330 410 L362 452 L410 398 L442 446 L492 394 L532 442 L582 398 L612 452 L662 420 L640 380 L360 380Z')}`];
    case 'swirl':
      return ['', `<path d="M292 480 Q280 300 420 250 Q520 110 650 210 Q560 190 545 262 Q705 232 722 362 Q732 420 712 486 Q690 384 600 352 Q500 332 420 362 Q330 392 292 480Z" ${fill}/><path d="M470 250 Q520 150 600 190 Q540 202 522 262" fill="none" ${stroke(6)}/>`];
    case 'arrow':
      return ['', `<path d="M500 240 L462 330 L488 330 L488 430 L512 430 L512 330 L538 330 Z" fill="#38BDF8" stroke="#0b3a66" stroke-width="6"/>`];
    case 'bald':
      return ['', `<ellipse cx="430" cy="350" rx="40" ry="20" fill="#fff" opacity="0.35"/>`];
    case 'pigtails':
      return [
        `<path d="M300 430 Q190 480 200 640 Q262 576 305 528Z" ${fill}/><path d="M700 430 Q810 480 800 640 Q738 576 695 528Z" ${fill}/>`,
        `<path d="M302 480 Q292 300 500 262 Q708 300 698 480 Q660 360 500 345 Q340 360 302 480Z" ${fill}/>`,
      ];
    case 'long':
      return [
        `<path d="M285 450 Q270 280 500 250 Q730 280 715 450 L760 900 Q620 960 500 900 Q380 960 240 900Z" ${fill}/>`,
        `<path d="M300 500 Q295 300 500 268 Q705 300 700 500 Q690 410 610 380 Q560 440 500 420 Q430 450 390 390 Q320 420 300 500Z" ${fill}/>`,
      ];
    case 'bob':
      return [
        `<path d="M285 450 Q270 280 500 250 Q730 280 715 450 L730 690 Q680 720 640 690 L360 690 Q320 720 270 690Z" ${fill}/>`,
        `<path d="M300 490 Q295 300 500 268 Q705 300 700 490 L690 420 Q600 420 520 360 Q440 420 310 420Z" ${fill}/>`,
      ];
    case 'ponytail':
      return [
        `<path d="M640 300 Q820 280 800 560 Q760 700 720 760 Q740 600 690 420Z" ${fill}/>`,
        `<path d="M302 480 Q292 300 500 262 Q708 300 698 480 Q640 380 520 380 Q400 370 302 480Z" ${fill}/>`,
      ];
    case 'bun':
      return ['', `<circle cx="500" cy="248" r="62" ${fill}/><path d="M302 470 Q292 300 500 270 Q708 300 698 470 Q640 380 500 375 Q360 380 302 470Z" ${fill}/>`];
    case 'buzz':
      return ['', `<path d="M318 450 Q318 300 500 285 Q682 300 682 450 Q640 360 500 352 Q360 360 318 450Z" ${fill}/>`];
    case 'sidepart':
      return ['', `<path d="M305 490 Q290 290 500 262 Q720 280 702 470 Q690 400 640 370 Q520 340 400 420 Q350 450 305 490Z" ${fill}/>${sh('M400 420 Q520 340 640 370 L630 340 Q520 320 410 380Z')}`];
    case 'slick':
      return ['', `<path d="M318 430 Q312 280 500 262 Q688 280 682 430 Q660 330 500 320 Q340 330 318 430Z" ${fill}/><path d="M380 300 Q500 270 620 300 M360 330 Q500 300 640 330" fill="none" stroke="${d}" stroke-width="6"/>`];
    case 'curly': {
      let s = '';
      [[340, 380], [390, 310], [460, 280], [540, 280], [610, 310], [660, 380], [330, 460], [670, 460]].forEach(([x, y]) => (s += `<circle cx="${x}" cy="${y}" r="58" ${fill}/>`));
      return ['', s];
    }
    case 'afro':
      return [`<circle cx="500" cy="400" r="270" ${fill}/>`, `<path d="M320 470 Q320 340 500 330 Q680 340 680 470 Q640 400 500 395 Q360 400 320 470Z" ${fill}/>`];
    case 'mohawk':
      return ['', `<path d="M470 400 L440 180 L500 220 L520 150 L560 230 L600 200 L540 400Z" ${fill}/>`];
    case 'tuft':
      return ['', `<path d="M480 320 Q470 250 440 230 M500 318 Q505 240 520 215 M520 322 Q540 260 575 245" fill="none" stroke="${c}" stroke-width="14" stroke-linecap="round"/>`];
    case 'messy':
      return ['', `<path d="M310 470 L300 380 L260 350 L330 330 L330 270 L400 300 L430 230 L480 290 L520 220 L560 290 L620 240 L630 310 L700 300 L680 370 L730 400 L690 470 Q600 380 500 390 Q400 380 310 470Z" ${fill}/>`];
    case 'wolverine':
      return ['', `<path d="M310 470 Q300 350 380 320 L330 180 L450 300 Q500 290 550 300 L670 180 L620 320 Q700 350 690 470 Q640 380 500 380 Q360 380 310 470Z" ${fill}/><path d="M318 470 L322 580 L350 590 L345 470Z M682 470 L678 580 L650 590 L655 470Z" fill="${c}"/>`];
    case 'flame':
      return ['', `<path d="M300 480 Q260 340 330 300 Q320 220 390 230 Q400 140 470 180 Q520 90 560 180 Q630 140 640 230 Q720 230 690 320 Q750 360 700 480 Q640 380 500 380 Q360 380 300 480Z" fill="#F97316" ${stroke()}/><path d="M360 380 Q380 290 440 300 Q470 230 520 290 Q570 250 600 320 Q640 330 640 380Z" fill="#FDE047"/>`];
    case 'longwhite':
      return [`<path d="M280 420 Q270 260 500 240 Q730 260 720 420 L780 1000 Q500 1060 220 1000Z" ${fill}/>`, `<path d="M300 480 Q300 300 500 270 Q700 300 700 480 Q600 370 500 360 Q400 370 300 480Z" ${fill}/>`];
    case 'wavy':
      return [
        `<path d="M285 440 Q260 280 500 250 Q740 280 715 440 Q760 560 720 640 Q770 720 700 780 L300 780 Q230 720 280 640 Q240 560 285 440Z" ${fill}/>`,
        `<path d="M300 490 Q300 300 500 268 Q700 300 700 490 Q660 380 560 380 Q520 420 470 400 Q380 390 300 490Z" ${fill}/>`,
      ];
    // ----- hats -----
    case 'cap':
      return ['', `<path d="M310 450 Q300 300 500 290 Q700 300 690 450Z" ${fill}/><path d="M300 450 Q500 400 760 470 Q700 500 300 470Z" fill="${d}" ${stroke(7)}/>`];
    case 'backcap':
      return ['', `<path d="M310 440 Q300 300 500 290 Q700 300 690 440 Q500 410 310 440Z" ${fill}/><path d="M500 290 Q600 250 640 300" fill="none" stroke="${d}" stroke-width="20"/>`];
    case 'beanie':
      return ['', `<path d="M305 450 Q300 270 500 255 Q700 270 695 450Z" ${fill}/><rect x="295" y="420" width="410" height="60" rx="25" fill="${d}" ${stroke(7)}/>`];
    case 'helmet':
      return ['', `<path d="M290 600 Q270 270 500 245 Q730 270 710 600 L640 600 L640 430 Q500 400 360 430 L360 600Z" ${fill}/>${sh('M600 280 Q700 320 705 560 L650 560 L645 420Z')}`];
    case 'shredder':
      return ['', `<path d="M290 470 Q280 260 500 240 Q720 260 710 470 L640 470 L640 430 Q500 410 360 430 L360 470Z" fill="#9CA3AF" ${stroke()}/><path d="M500 240 L500 140 M440 250 L410 150 M560 250 L590 150" stroke="#9CA3AF" stroke-width="22"/><path d="M360 560 L640 560 L620 700 Q500 740 380 700Z" fill="#9CA3AF" ${stroke()}/><path d="M400 600 L600 600 M410 640 L590 640 M420 680 L580 680" ${stroke(6)}/>`];
    case 'magneto':
      return ['', `<path d="M280 620 Q260 250 500 230 Q740 250 720 620 L650 620 L650 440 Q500 420 350 440 L350 620Z" fill="#B91C1C" ${stroke()}/><path d="M440 240 L470 330 L530 330 L560 240Z" fill="#7F1D1D" ${stroke(6)}/>`];
    case 'hood':
      return [`<path d="M250 700 Q220 260 500 230 Q780 260 750 700 Z" ${fill}/>`, `<path d="M300 520 Q300 320 500 300 Q700 320 700 520 Q640 400 500 395 Q360 400 300 520Z" fill="${d}"/>`];
    case 'bandana':
      return ['', `<path d="M305 440 Q300 290 500 275 Q700 290 695 440Z" ${fill}/><path d="M690 400 L780 380 L760 450Z" ${fill}/>`];
    case 'sailor':
      return ['', `<path d="M330 400 Q340 310 500 305 Q660 310 670 400Z" fill="#fff" ${stroke()}/><rect x="320" y="385" width="360" height="40" rx="15" fill="#1D4ED8" ${stroke(6)}/>`];
    case 'captain':
      return ['', `<path d="M260 420 Q300 250 500 240 Q700 250 740 420Z" fill="#1f2937" ${stroke()}/><path d="M230 430 Q500 380 770 430 L760 460 Q500 420 240 460Z" fill="#111" ${stroke(6)}/><circle cx="500" cy="330" r="34" fill="#FCD34D" ${stroke(5)}/>`];
    case 'chef':
      return ['', `<path d="M340 420 L340 300 Q300 220 380 200 Q420 130 500 170 Q580 130 620 200 Q700 220 660 300 L660 420Z" fill="#fff" ${stroke()}/>`];
    case 'santa':
      return ['', `<path d="M320 420 Q330 260 520 230 Q690 220 760 420 Q720 330 640 300 Q690 380 690 420Z" fill="#DC2626" ${stroke()}/><rect x="300" y="400" width="410" height="60" rx="30" fill="#fff" ${stroke(6)}/><circle cx="770" cy="430" r="36" fill="#fff" ${stroke(6)}/>`];
    case 'witch':
      return ['', `<path d="M220 440 Q500 380 780 440 Q500 480 220 440Z" fill="#312E81" ${stroke()}/><path d="M340 430 L500 120 Q540 80 600 140 L560 160 L660 430Z" fill="#312E81" ${stroke()}/><rect x="345" y="390" width="310" height="34" fill="#F97316"/>`];
    case 'crown':
      return ['', `<path d="M360 330 L380 220 L440 290 L500 200 L560 290 L620 220 L640 330Z" fill="#FBBF24" ${stroke(7)}/>`];
    case 'tiara':
      return ['', `<path d="M380 340 Q500 300 620 340 L590 300 L560 320 L500 270 L440 320 L410 300Z" fill="#FBBF24" ${stroke(6)}/>`];
    case 'topknot':
      return ['', `<path d="M318 440 Q318 300 500 285 Q682 300 682 440 Q640 360 500 352 Q360 360 318 440Z" fill="${c}" ${stroke()}/><path d="M470 300 L470 220 Q500 190 530 220 L530 300Z" fill="${c}" ${stroke(6)}/><path d="M455 255 L545 255" stroke="#FCD34D" stroke-width="16"/>`];
    case 'cowl':
      return ['', `<path d="M290 600 Q270 250 500 230 Q730 250 710 600 L640 600 Q660 460 600 420 Q500 450 400 420 Q340 460 360 600Z" ${fill}/>`];
    default:
      return ['', ''];
  }
}

// ---------------- Extras ----------------
const EXTRAS = {
  glasses: (y = 525, c = INK) => `<circle cx="418" cy="${y}" r="64" fill="none" stroke="${c}" stroke-width="10"/><circle cx="582" cy="${y}" r="64" fill="none" stroke="${c}" stroke-width="10"/><path d="M482 ${y} L518 ${y}" stroke="${c}" stroke-width="10"/>`,
  shades: (y = 525) => `<path d="M330 ${y - 40} L670 ${y - 40} L660 ${y + 20} Q600 ${y + 50} 520 ${y + 10} L480 ${y + 10} Q400 ${y + 50} 340 ${y + 20}Z" fill="#111" ${stroke(6)}/><path d="M360 ${y - 25} L420 ${y - 25}" stroke="#fff" stroke-width="8" opacity="0.6"/>`,
  goggles: (y = 525, c = '#F59E0B') => `<path d="M300 ${y - 10} L700 ${y - 10}" stroke="#374151" stroke-width="30"/><circle cx="418" cy="${y}" r="66" fill="${c}" fill-opacity="0.45" stroke="#374151" stroke-width="16"/><circle cx="582" cy="${y}" r="66" fill="${c}" fill-opacity="0.45" stroke="#374151" stroke-width="16"/>`,
  visor: (y = 520, c = '#EF4444') => `<rect x="310" y="${y - 45}" width="380" height="90" rx="40" fill="#111" ${stroke(6)}/><rect x="330" y="${y - 25}" width="340" height="50" rx="25" fill="${c}"/><rect x="350" y="${y - 18}" width="120" height="12" rx="6" fill="#fff" opacity="0.7"/>`,
  mask: (y = 525, c = '#2563EB') => `<path d="M300 ${y - 50} L700 ${y - 50} L700 ${y + 45} L300 ${y + 45}Z" fill="${c}" ${stroke(6)}/><path d="M690 ${y - 20} Q790 ${y - 40} 820 ${y + 40} M690 ${y + 10} Q770 ${y + 30} 780 ${y + 110}" stroke="${c}" stroke-width="26" fill="none" stroke-linecap="round"/>`,
  domino: (y = 525, c = '#111') => `<path d="M330 ${y - 30} Q420 ${y - 80} 490 ${y - 30} L510 ${y - 30} Q580 ${y - 80} 670 ${y - 30} Q680 ${y + 50} 590 ${y + 55} Q520 ${y + 40} 500 ${y + 10} Q480 ${y + 40} 410 ${y + 55} Q320 ${y + 50} 330 ${y - 30}Z" fill="${c}" ${stroke(6)}/>`,
  freckles: () => `<g fill="#B45309" opacity="0.7">${[[390, 600], [410, 615], [380, 625], [610, 600], [590, 615], [620, 625]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5"/>`).join('')}</g>`,
  mustache: (c = '#3F2A1D') => `<path d="M440 615 Q470 590 500 610 Q530 590 560 615 Q540 640 500 625 Q460 640 440 615Z" fill="${c}" ${stroke(5)}/>`,
  goatee: (c = '#3F2A1D') => `<path d="M455 612 Q500 595 545 612 L540 630 Q500 615 460 630Z M470 680 Q500 720 530 680 L520 665 Q500 680 480 665Z" fill="${c}"/>`,
  beard: (c = '#E5E7EB') => `<path d="M330 540 Q330 760 500 800 Q670 760 670 540 Q640 650 560 640 Q500 610 440 640 Q360 650 330 540Z" fill="${c}" ${stroke(6)}/>`,
  sideburns: (c = '#111') => `<path d="M322 470 L330 640 L380 610 L370 470Z M678 470 L670 640 L620 610 L630 470Z" fill="${c}"/>`,
  scar: () => `<path d="M600 430 Q650 520 640 640" stroke="#B91C1C" stroke-width="40" opacity="0.55" fill="none" stroke-linecap="round"/>`,
  earrings: (c = '#FBBF24') => `<circle cx="318" cy="590" r="14" fill="${c}" ${stroke(4)}/><circle cx="682" cy="590" r="14" fill="${c}" ${stroke(4)}/>`,
  antennae: (c = '#16A34A') => `<path d="M420 320 Q380 200 330 180 M580 320 Q620 200 670 180" stroke="${c}" stroke-width="14" fill="none" stroke-linecap="round"/><circle cx="330" cy="180" r="16" fill="${c}"/><circle cx="670" cy="180" r="16" fill="${c}"/>`,
  headphones: (c = '#16A34A') => `<path d="M310 470 Q300 260 500 250 Q700 260 690 470" stroke="#111" stroke-width="20" fill="none"/><rect x="280" y="440" width="50" height="110" rx="20" fill="${c}" ${stroke(6)}/><rect x="670" y="440" width="50" height="110" rx="20" fill="${c}" ${stroke(6)}/>`,
  bow: (c = '#EC4899') => `<path d="M430 300 Q500 330 570 300 Q590 255 560 245 Q520 275 500 280 Q480 275 440 245 Q410 255 430 300Z" fill="${c}" ${stroke(6)}/>`,
  wand: () => `<path d="M760 1300 L860 860" stroke="#111" stroke-width="16"/><polygon points="860,790 878,840 930,842 888,872 904,922 860,892 816,922 832,872 790,842 842,840" fill="#FDE047" ${stroke(6)}/>`,
  katana: () => `<path d="M200 1400 L320 720" stroke="#E5E7EB" stroke-width="22"/><path d="M190 1360 L240 1370" stroke="#7C2D12" stroke-width="30"/>`,
  claws: () => `<path d="M720 1400 L800 900 M760 1400 L840 920 M800 1400 L880 940" stroke="#D1D5DB" stroke-width="14"/>`,
  fireHand: () => `<path d="M800 1100 Q760 980 820 940 Q810 880 870 900 Q880 830 930 900 Q960 980 900 1100Z" fill="#F97316" ${stroke(6)}/><path d="M830 1060 Q820 990 860 970 Q880 930 900 980 Q910 1030 880 1060Z" fill="#FDE047"/>`,
  waterOrb: () => `<circle cx="830" cy="1000" r="80" fill="#38BDF8" fill-opacity="0.7" ${stroke(6)}/><path d="M790 980 Q830 940 870 980" stroke="#fff" stroke-width="10" fill="none"/>`,
  rockFist: () => `<polygon points="760,1100 800,960 900,930 960,1020 930,1120 830,1150" fill="#78716C" ${stroke(6)}/>`,
  boomerang: () => `<path d="M780 1100 Q840 900 960 880 Q860 930 840 1100Z" fill="#B45309" ${stroke(6)}/>`,
  staff: () => `<path d="M860 1400 L860 700" stroke="#92400E" stroke-width="26"/><circle cx="860" cy="690" r="30" fill="#FBBF24" ${stroke(6)}/>`,
  lightning: () => `<polygon points="880,760 800,960 860,960 790,1160 930,900 870,900 930,760" fill="#FDE047" ${stroke(6)}/>`,
  ghostTail: () => `<path d="M170 1400 Q180 1100 300 1050 Q260 1250 380 1400Z M830 1400 Q820 1100 700 1050 Q740 1250 620 1400Z" fill="#fff" opacity="0.5"/>`,
  pizza: () => `<path d="M780 1150 L940 1000 Q960 1090 900 1170Z" fill="#FBBF24" ${stroke(6)}/><circle cx="880" cy="1100" r="14" fill="#DC2626"/><circle cx="910" cy="1060" r="10" fill="#DC2626"/>`,
  chalk: () => `<rect x="800" y="900" width="40" height="160" rx="10" transform="rotate(25 820 980)" fill="#fff" ${stroke(6)}/>`,
  skateboard: () => `<rect x="720" y="1180" width="260" height="40" rx="20" fill="#16A34A" ${stroke(6)}/><circle cx="770" cy="1240" r="18" fill="#111"/><circle cx="930" cy="1240" r="18" fill="#111"/>`,
  microphone: () => `<path d="M850 1300 L850 1000" stroke="#111" stroke-width="18"/><ellipse cx="850" cy="960" rx="40" ry="50" fill="#9CA3AF" ${stroke(6)}/>`,
  notes: () => `<text x="800" y="900" font-size="120" fill="#fff" stroke="${INK}" stroke-width="5">♪</text><text x="860" y="1020" font-size="90" fill="#fff" stroke="${INK}" stroke-width="5">♫</text>`,
  bat: () => `<path d="M760 1300 L900 860" stroke="#B45309" stroke-width="34" stroke-linecap="round"/>`,
  sparkles: () => `<g fill="#fff">${[[160, 300], [840, 260], [200, 900], [850, 1000]].map(([x, y]) => `<polygon transform="translate(${x} ${y})" points="0,-40 10,-10 40,0 10,10 0,40 -10,10 -40,0 -10,-10"/>`).join('')}</g>`,
  hearts: () => `<g fill="#F472B6" ${stroke(5)}>${[[170, 330], [830, 300], [200, 980]].map(([x, y]) => `<path transform="translate(${x} ${y})" d="M0 30 L-35 -5 Q-50 -30 -25 -40 Q-5 -45 0 -20 Q5 -45 25 -40 Q50 -30 35 -5Z"/>`).join('')}</g>`,
  snow: () => `<g fill="#fff">${[[150, 200], [300, 120], [700, 150], [860, 260], [120, 700], [880, 760], [180, 1100], [840, 1150]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="14"/>`).join('')}</g>`,
  bats: () => `<g fill="#111">${[[170, 250], [830, 220], [880, 600]].map(([x, y]) => `<path transform="translate(${x} ${y})" d="M0 0 Q-20 -20 -50 -10 Q-35 0 -40 15 Q-20 5 0 15 Q20 5 40 15 Q35 0 50 -10 Q20 -20 0 0Z"/>`).join('')}</g>`,
  lanterns: () => `<g>${[[170, 260], [830, 240]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="55" ry="70" fill="#DC2626" ${stroke(6)}/><rect x="${x - 30}" y="${y - 82}" width="60" height="16" fill="#FBBF24"/><rect x="${x - 30}" y="${y + 66}" width="60" height="16" fill="#FBBF24"/>`).join('')}</g>`,
  leaves: () => `<g>${[[170, 300, '#EA580C'], [840, 260, '#CA8A04'], [190, 950, '#B91C1C'], [850, 1000, '#EA580C']].map(([x, y, c]) => `<path transform="translate(${x} ${y}) rotate(30)" d="M0 -50 Q40 0 0 50 Q-40 0 0 -50Z" fill="${c}" ${stroke(5)}/>`).join('')}</g>`,
  blossoms: () => `<g>${[[170, 300], [840, 250], [200, 950], [860, 1020], [130, 620]].map(([x, y]) => `<g transform="translate(${x} ${y})" fill="#F9A8D4" ${stroke(4)}>${[0, 72, 144, 216, 288].map((r) => `<ellipse rx="16" ry="28" transform="rotate(${r}) translate(0 -24)"/>`).join('')}<circle r="10" fill="#FDE047"/></g>`).join('')}</g>`,
  fireworks: () => `<g stroke-width="8" stroke-linecap="round">${[[180, 260, '#F472B6'], [830, 230, '#FDE047'], [860, 700, '#38BDF8']].map(([x, y, c]) => [0, 45, 90, 135, 180, 225, 270, 315].map((r) => `<path transform="translate(${x} ${y}) rotate(${r})" d="M0 -20 L0 -70" stroke="${c}"/>`).join('')).join('')}</g>`,
  bubbles: () => `<g fill="none" stroke="#fff" stroke-width="7" opacity="0.8">${[[170, 300, 40], [220, 200, 22], [840, 280, 34], [860, 900, 46], [150, 950, 28]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>`,
  palms: () => `<g fill="#16A34A" ${stroke(5)}><path d="M60 1000 Q120 880 230 900 Q130 930 100 1030Z"/><path d="M70 1100 Q150 1020 240 1060 Q140 1070 110 1130Z"/><path d="M940 1000 Q880 880 770 900 Q870 930 900 1030Z"/><path d="M930 1100 Q850 1020 760 1060 Q860 1070 890 1130Z"/></g>`,
};

// ---------------- Human portrait ----------------
function human(sp, id) {
  const skin = sp.skin ?? '#F6D3B0';
  const faceShape = FACE[sp.face ?? 'round'];
  const eyeY = sp.face === 'baby' ? 545 : 525;
  const [hairBack, hairFront] = hair(sp.hair);
  let s = hairBack;
  s += body(sp.body ?? {}, skin);
  // ears
  if (!sp.noEars) s += `<ellipse cx="320" cy="540" rx="26" ry="40" fill="${skin}" ${stroke(7)}/><ellipse cx="680" cy="540" rx="26" ry="40" fill="${skin}" ${stroke(7)}/>`;
  if (sp.pointyEars) s += `<path d="M330 520 L250 430 L340 470Z M670 520 L750 430 L660 470Z" fill="${skin}" ${stroke(7)}/>`;
  s += `<path d="${faceShape}" fill="${skin}" ${stroke()}/>`;
  s += `<path d="M640 360 Q690 470 660 600 Q620 680 560 705 Q650 600 640 360Z" fill="${shade(skin, -0.18)}" opacity="0.5"/>`;
  if (sp.beard) s += EXTRAS.beard(sp.beard);
  if (sp.markings) s += sp.markings;
  if (sp.mask) s += EXTRAS.mask(eyeY, sp.mask);
  if (sp.domino) s += EXTRAS.domino(eyeY, sp.domino);
  if (sp.visor) s += EXTRAS.visor(eyeY - 5, sp.visor);
  else s += eyePair({ ...(sp.eyes ?? {}), skin: sp.mask ? sp.mask : sp.domino ? sp.domino : skin, y: eyeY }, id);
  s += brows(sp.brows ?? 'normal', sp.browColor ?? (Array.isArray(sp.hair) ? shade(sp.hair[1] ?? INK, -0.3) : INK), eyeY - 80);
  s += `<path d="M495 ${eyeY + 50} L505 ${eyeY + 72}" ${stroke(5)}/>`;
  if (sp.blush !== false) s += `<ellipse cx="380" cy="${eyeY + 75}" rx="28" ry="12" fill="#F472B6" opacity="0.45"/><ellipse cx="620" cy="${eyeY + 75}" rx="28" ry="12" fill="#F472B6" opacity="0.45"/>`;
  if (sp.freckles) s += EXTRAS.freckles();
  if (sp.mustache) s += EXTRAS.mustache(sp.mustache);
  if (sp.goatee) s += EXTRAS.goatee(sp.goatee);
  if (sp.sideburns) s += EXTRAS.sideburns(sp.sideburns);
  if (sp.scar) s += EXTRAS.scar();
  s += mouth(sp.mouth, sp.face === 'baby' ? 650 : 640);
  s += hairFront;
  if (sp.glasses) s += EXTRAS.glasses(eyeY, sp.glasses === true ? INK : sp.glasses);
  if (sp.shades) s += EXTRAS.shades(eyeY);
  if (sp.goggles) s += EXTRAS.goggles(eyeY, sp.goggles);
  if (sp.earrings) s += EXTRAS.earrings(sp.earrings);
  if (sp.antennae) s += EXTRAS.antennae(sp.antennae);
  if (sp.headphones) s += EXTRAS.headphones(sp.headphones);
  if (sp.bow) s += EXTRAS.bow(sp.bow);
  if (sp.hat) s += hair(sp.hat)[1];
  return s;
}

// ---------------- Creatures ----------------
function earsFor(kind, c, inner) {
  switch (kind) {
    case 'round':
      return `<circle cx="330" cy="330" r="70" fill="${c}" ${stroke()}/><circle cx="670" cy="330" r="70" fill="${c}" ${stroke()}/><circle cx="330" cy="330" r="36" fill="${inner}"/><circle cx="670" cy="330" r="36" fill="${inner}"/>`;
    case 'pointy':
      return `<path d="M320 400 L300 210 L440 320Z M680 400 L700 210 L560 320Z" fill="${c}" ${stroke()}/><path d="M335 370 L322 260 L405 325Z M665 370 L678 260 L595 325Z" fill="${inner}"/>`;
    case 'tall':
      return `<path d="M370 360 Q300 120 380 90 Q450 140 440 330Z M630 360 Q700 120 620 90 Q550 140 560 330Z" fill="${c}" ${stroke()}/><path d="M385 330 Q340 160 385 130 Q425 170 420 320Z M615 330 Q660 160 615 130 Q575 170 580 320Z" fill="${inner}"/>`;
    case 'floppy':
      return `<path d="M330 360 Q220 380 230 600 Q300 580 340 470Z M670 360 Q780 380 770 600 Q700 580 660 470Z" fill="${shade(c, -0.25)}" ${stroke()}/>`;
    case 'big':
      return `<path d="M340 400 Q160 250 220 160 Q340 180 420 330Z M660 400 Q840 250 780 160 Q660 180 580 330Z" fill="${c}" ${stroke()}/><path d="M345 370 Q220 260 250 200 Q330 220 395 330Z M655 370 Q780 260 750 200 Q670 220 605 330Z" fill="${inner}"/>`;
    case 'horns':
      return `<path d="M340 360 Q250 300 260 220 Q300 290 370 320Z M660 360 Q750 300 740 220 Q700 290 630 320Z" fill="#FEF3C7" ${stroke(7)}/><ellipse cx="300" cy="420" rx="50" ry="26" fill="${c}" ${stroke(7)}/><ellipse cx="700" cy="420" rx="50" ry="26" fill="${c}" ${stroke(7)}/>`;
    case 'small':
      return `<circle cx="350" cy="320" r="40" fill="${c}" ${stroke(7)}/><circle cx="650" cy="320" r="40" fill="${c}" ${stroke(7)}/>`;
    default:
      return '';
  }
}

function muzzleFor(kind, c, skin) {
  const light = skin ?? shade(c, 0.55);
  switch (kind) {
    case 'dog':
      return `<ellipse cx="500" cy="630" rx="110" ry="80" fill="${light}" ${stroke(7)}/><ellipse cx="500" cy="590" rx="36" ry="24" fill="${INK}"/><path d="M500 615 L500 650 M460 655 Q500 680 540 655" fill="none" ${stroke(6)}/>`;
    case 'cat':
      return `<polygon points="485,590 515,590 500,610" fill="#F472B6" ${stroke(5)}/><path d="M500 610 L500 630 M470 640 Q500 655 500 630 Q500 655 530 640" fill="none" ${stroke(6)}/><path d="M400 610 L300 590 M400 630 L300 640 M600 610 L700 590 M600 630 L700 640" ${stroke(4)}/>`;
    case 'bear':
      return `<ellipse cx="500" cy="625" rx="90" ry="65" fill="${light}" ${stroke(7)}/><ellipse cx="500" cy="595" rx="30" ry="20" fill="${INK}"/><path d="M465 650 Q500 675 535 650" fill="none" ${stroke(6)}/>`;
    case 'beak':
      return `<path d="M440 590 Q500 560 560 590 L500 660Z" fill="#F59E0B" ${stroke(7)}/>`;
    case 'cow':
      return `<ellipse cx="500" cy="650" rx="140" ry="85" fill="#F9A8D4" ${stroke(7)}/><ellipse cx="455" cy="650" rx="16" ry="22" fill="${INK}"/><ellipse cx="545" cy="650" rx="16" ry="22" fill="${INK}"/>`;
    case 'rat':
      return `<path d="M410 580 Q500 560 590 580 L520 700 Q500 720 480 700Z" fill="${light}" ${stroke(7)}/><circle cx="500" cy="700" r="18" fill="#F472B6" ${stroke(5)}/><path d="M440 650 L330 630 M440 670 L330 690 M560 650 L670 630 M560 670 L670 690" ${stroke(4)}/>`;
    case 'beaver':
      return `<ellipse cx="500" cy="620" rx="100" ry="65" fill="${light}" ${stroke(7)}/><ellipse cx="500" cy="585" rx="30" ry="20" fill="${INK}"/><rect x="475" y="640" width="50" height="55" rx="6" fill="#fff" ${stroke(5)}/><path d="M500 642 L500 692" ${stroke(4)}/>`;
    case 'monkey':
      return `<ellipse cx="500" cy="620" rx="120" ry="90" fill="${light}" ${stroke(7)}/><circle cx="480" cy="590" r="8" fill="${INK}"/><circle cx="520" cy="590" r="8" fill="${INK}"/><path d="M450 650 Q500 690 550 650" fill="none" ${stroke(7)}/>`;
    case 'pig':
      return `<ellipse cx="500" cy="630" rx="80" ry="55" fill="#F9A8D4" ${stroke(7)}/><ellipse cx="475" cy="630" rx="12" ry="20" fill="${INK}"/><ellipse cx="525" cy="630" rx="12" ry="20" fill="${INK}"/><path d="M420 660 Q400 600 380 560 M580 660 Q600 600 620 560" stroke="#FEF3C7" stroke-width="18" fill="none" stroke-linecap="round"/>`;
    case 'rhino':
      return `<ellipse cx="500" cy="640" rx="120" ry="80" fill="${shade(c, 0.15)}" ${stroke(7)}/><path d="M460 570 L500 420 L540 570Z" fill="#E5E7EB" ${stroke(7)}/><circle cx="470" cy="650" r="10" fill="${INK}"/><circle cx="530" cy="650" r="10" fill="${INK}"/>`;
    default:
      return '';
  }
}

function creature(sp, id) {
  const c = sp.color ?? '#9CA3AF';
  const inner = sp.inner ?? '#F9A8D4';
  let s = body(sp.body ?? { color: c, collar: 'none' }, c);
  s += earsFor(sp.ears, sp.earColor ?? c, inner);
  s += `<path d="${FACE[sp.face ?? 'round']}" fill="${c}" ${stroke()}/>`;
  s += `<path d="M640 360 Q690 470 660 600 Q620 680 560 705 Q650 600 640 360Z" fill="${shade(c, -0.2)}" opacity="0.45"/>`;
  if (sp.pattern === 'panda') s += `<ellipse cx="418" cy="525" rx="70" ry="60" fill="#111" transform="rotate(-20 418 525)"/><ellipse cx="582" cy="525" rx="70" ry="60" fill="#111" transform="rotate(20 582 525)"/>`;
  if (sp.pattern === 'stripes') s += `<path d="M500 300 L480 380 L520 380Z M380 330 L420 400 M620 330 L580 400 M330 470 L380 480 M670 470 L620 480" ${stroke(14)}/>`;
  if (sp.pattern === 'faceMask') s += `<path d="M360 470 Q500 420 640 470 Q660 600 500 690 Q340 600 360 470Z" fill="${sp.maskColor ?? '#fff'}"/>`;
  if (sp.pattern === 'spots') s += `<ellipse cx="380" cy="390" rx="50" ry="35" fill="#111"/><ellipse cx="620" cy="620" rx="40" ry="30" fill="#111"/>`;
  if (sp.markings) s += sp.markings;
  s += eyePair({ ...(sp.eyes ?? {}), skin: c, y: sp.eyeY ?? 520 }, id);
  if (sp.brows) s += brows(sp.brows, INK, (sp.eyeY ?? 520) - 80);
  s += muzzleFor(sp.muzzle, c, sp.muzzleColor);
  if (sp.mouth) s += mouth(sp.mouth, sp.mouthY ?? 670);
  if (sp.hair) s += hair(sp.hair)[1];
  if (sp.hat) s += hair(sp.hat)[1];
  if (sp.glasses) s += EXTRAS.glasses(sp.eyeY ?? 520);
  if (sp.shades) s += EXTRAS.shades(sp.eyeY ?? 520);
  return s;
}

// ---------------- One-off designs ----------------
const SPECIAL = {
  sponge: (sp, id) => {
    let s = `<rect x="160" y="1000" width="680" height="400" fill="#fff" ${stroke()}/><rect x="160" y="1120" width="680" height="280" fill="#92400E" ${stroke()}/><polygon points="470,1000 530,1000 520,1080 500,1110 480,1080" fill="#DC2626" ${stroke(6)}/>`;
    s += `<path d="M190 260 Q200 230 230 240 L770 240 Q800 230 810 260 L800 1010 L200 1010Z" fill="#FDE047" ${stroke()}/>`;
    [[280, 320, 30], [720, 340, 24], [260, 820, 34], [740, 860, 28], [300, 950, 20], [700, 960, 22]].forEach(([x, y, r]) => (s += `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.8}" fill="#A3A635"/>`));
    s += eyePair({ style: 'big', color: '#38BDF8', spacing: 110, skin: '#FDE047', y: 480 }, id);
    s += `<path d="M500 560 Q560 590 520 630" fill="#FDE047" ${stroke(7)}/>`;
    s += `<path d="M330 700 Q500 860 670 700 Q500 760 330 700Z" fill="#7F1D1D" ${stroke(7)}/><rect x="455" y="728" width="38" height="40" fill="#fff" ${stroke(5)}/><rect x="507" y="728" width="38" height="40" fill="#fff" ${stroke(5)}/>`;
    s += `<ellipse cx="320" cy="650" rx="40" ry="24" fill="#F87171" opacity="0.6"/><ellipse cx="680" cy="650" rx="40" ry="24" fill="#F87171" opacity="0.6"/>`;
    return s;
  },
  starfish: (sp, id) => {
    let s = `<path d="M500 160 Q560 160 590 420 Q860 420 860 480 Q850 540 640 640 Q760 1000 700 1040 Q640 1060 500 840 Q360 1060 300 1040 Q240 1000 360 640 Q150 540 140 480 Q140 420 410 420 Q440 160 500 160Z" fill="#F9A8D4" ${stroke()}/>`;
    s += `<path d="M300 1400 L330 1040 Q500 1100 670 1040 L700 1400Z" fill="#84CC16" ${stroke()}/><g fill="#7C3AED">${[[380, 1150], [600, 1200], [460, 1300], [560, 1100]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="26"/>`).join('')}</g>`;
    s += eyePair({ style: 'sleepy', color: '#111', spacing: 60, skin: '#F9A8D4', y: 470 }, id);
    s += brows('worried', INK, 400, 60);
    s += mouth('open', 600);
    return s;
  },
  squid: (sp, id) => {
    let s = `<path d="M200 1400 Q210 950 400 900 L600 900 Q790 950 800 1400Z" fill="#92400E" ${stroke()}/>`;
    s += `<path d="M360 900 Q300 600 330 330 Q360 160 500 150 Q640 160 670 330 Q700 600 640 900Z" fill="#A7C4BC" ${stroke()}/>`;
    s += eyePair({ style: 'sleepy', color: '#DC2626', spacing: 80, skin: '#A7C4BC', y: 480 }, id);
    s += `<path d="M470 540 Q440 700 500 780 Q560 700 530 540Z" fill="#A7C4BC" ${stroke(7)}/>`;
    s += brows('angry', INK, 400, 80);
    s += mouth('frown', 820);
    return s;
  },
  crab: (sp, id) => {
    let s = `<path d="M200 1400 Q210 1000 380 950 L620 950 Q790 1000 800 1400Z" fill="#60A5FA" ${stroke()}/><rect x="460" y="950" width="80" height="450" fill="#fff"/>`;
    s += `<path d="M120 900 Q60 700 200 640 Q160 760 230 800 Q260 700 320 760 Q260 900 120 900Z M880 900 Q940 700 800 640 Q840 760 770 800 Q740 700 680 760 Q740 900 880 900Z" fill="#DC2626" ${stroke()}/>`;
    s += `<ellipse cx="500" cy="760" rx="260" ry="220" fill="#DC2626" ${stroke()}/>`;
    s += `<path d="M420 560 L400 320 M580 560 L600 320" stroke="#DC2626" stroke-width="40"/><path d="M420 560 L400 320 M580 560 L600 320" stroke="${INK}" stroke-width="8" stroke-dasharray="0" opacity="0"/>`;
    s += eyePair({ color: '#111', spacing: 100, skin: '#DC2626', y: 290 }, id);
    s += `<path d="M360 860 Q500 960 640 860 Q500 900 360 860Z" fill="#7F1D1D" ${stroke(6)}/>`;
    s += `<text x="500" y="1200" font-size="160" font-family="Arial Black" fill="#16A34A" stroke="${INK}" stroke-width="6" text-anchor="middle">$</text>`;
    return s;
  },
  snail: (sp, id) => {
    let s = `<path d="M150 1300 Q140 1100 300 1100 L850 1100 Q900 1200 850 1300Z" fill="#7DD3FC" ${stroke()}/>`;
    s += `<circle cx="560" cy="900" r="290" fill="#F9A8D4" ${stroke()}/><path d="M560 900 m-200 0 a200 200 0 1 1 200 200 a140 140 0 1 1 -140 -140 a80 80 0 1 1 80 80" fill="none" stroke="#BE185D" stroke-width="20"/>`;
    s += `<path d="M300 1110 Q260 900 300 700 L360 700 Q380 900 380 1110Z" fill="#7DD3FC" ${stroke()}/>`;
    s += `<path d="M310 720 L250 380 M350 720 L390 380" stroke="#7DD3FC" stroke-width="30"/>`;
    s += `<circle cx="250" cy="360" r="62" fill="#fff" ${stroke(6)}/><circle cx="390" cy="360" r="62" fill="#fff" ${stroke(6)}/><circle cx="255" cy="370" r="30" fill="#EAB308"/><circle cx="385" cy="370" r="30" fill="#EAB308"/><circle cx="255" cy="374" r="14" fill="${INK}"/><circle cx="385" cy="374" r="14" fill="${INK}"/><circle cx="244" cy="356" r="9" fill="#fff"/><circle cx="374" cy="356" r="9" fill="#fff"/>`;
    s += `<path d="M300 860 Q330 880 350 860" fill="none" ${stroke(6)}/>`;
    return s;
  },
  plankton: (sp, id) => {
    let s = `<rect x="330" y="1050" width="340" height="350" fill="#CA8A04" opacity="0.5"/>`;
    s += `<path d="M380 1400 Q380 700 420 520 Q500 380 580 520 Q620 700 620 1400Z" fill="#16A34A" ${stroke()}/>`;
    s += `<path d="M470 470 L430 300 M530 470 L570 300" stroke="#16A34A" stroke-width="18" stroke-linecap="round"/>`;
    s += `<ellipse cx="500" cy="640" rx="110" ry="90" fill="#FEF9C3" ${stroke(7)}/><ellipse cx="500" cy="650" rx="60" ry="64" fill="#DC2626"/><ellipse cx="500" cy="656" rx="28" ry="32" fill="${INK}"/><circle cx="478" cy="620" r="16" fill="#fff"/>`;
    s += `<path d="M380 545 L620 575" ${stroke(22)}/>`;
    s += `<path d="M440 800 Q500 840 560 790" fill="none" ${stroke(10)}/>`;
    return s;
  },
  karen: (sp, id) => {
    let s = `<rect x="260" y="1050" width="480" height="350" fill="#9CA3AF" ${stroke()}/><rect x="300" y="1100" width="400" height="60" fill="#4B5563"/>`;
    s += `<rect x="200" y="300" width="600" height="560" rx="40" fill="#D1D5DB" ${stroke()}/><rect x="250" y="350" width="500" height="460" rx="20" fill="#065F46"/>`;
    s += `<path d="M330 540 L460 600 L330 600Z M670 540 L540 600 L670 600Z" fill="#4ADE80"/><path d="M400 700 Q500 760 600 700" stroke="#4ADE80" stroke-width="14" fill="none"/>`;
    s += `<path d="M400 860 L360 1050 M600 860 L640 1050" stroke="#6B7280" stroke-width="40"/><path d="M500 300 L500 180" stroke="#6B7280" stroke-width="16"/><circle cx="500" cy="170" r="22" fill="#4ADE80"/>`;
    return s;
  },
  krang: (sp, id) => {
    let s = `<path d="M180 1400 Q190 900 360 840 L640 840 Q810 900 820 1400Z" fill="#9CA3AF" ${stroke()}/><rect x="320" y="900" width="360" height="300" rx="30" fill="#6B7280" ${stroke()}/>`;
    s += `<path d="M260 640 Q240 400 380 320 Q440 240 560 280 Q700 300 740 460 Q780 620 680 720 Q540 780 380 760 Q260 740 260 640Z" fill="#F9A8D4" ${stroke()}/>`;
    s += `<path d="M330 500 Q400 440 440 520 M480 380 Q540 330 600 400 M560 560 Q640 500 690 580 M380 660 Q450 610 510 680" fill="none" stroke="#DB2777" stroke-width="10"/>`;
    s += eyePair({ style: 'fierce', color: '#111', spacing: 70, skin: '#F9A8D4', y: 600 }, id);
    s += mouth('fang', 700);
    s += `<path d="M300 760 Q260 860 320 900 M700 760 Q740 860 680 900" stroke="#F9A8D4" stroke-width="30" fill="none" stroke-linecap="round"/>`;
    return s;
  },
  gir: (sp, id) => {
    let s = `<path d="M260 1400 Q270 1000 400 940 L600 940 Q730 1000 740 1400Z" fill="#94A3B8" ${stroke()}/><circle cx="500" cy="1100" r="60" fill="#22D3EE" ${stroke(6)}/>`;
    s += `<rect x="310" y="380" width="380" height="520" rx="150" fill="#94A3B8" ${stroke()}/><path d="M500 380 L500 260" stroke="#94A3B8" stroke-width="20"/><circle cx="500" cy="250" r="22" fill="#94A3B8" ${stroke(6)}/>`;
    s += `<circle cx="420" cy="560" r="70" fill="#22D3EE" ${stroke(6)}/><circle cx="580" cy="560" r="70" fill="#22D3EE" ${stroke(6)}/><circle cx="400" cy="540" r="18" fill="#fff"/><circle cx="560" cy="540" r="18" fill="#fff"/>`;
    s += mouth('tongue', 730);
    return s;
  },
  reptar: (sp, id) => {
    let s = `<path d="M170 1400 Q180 920 380 860 L620 860 Q820 920 830 1400Z" fill="#22C55E" ${stroke()}/><path d="M380 900 Q500 960 620 900 L640 1400 L360 1400Z" fill="#FDE68A" ${stroke(6)}/>`;
    s += `<path d="M300 300 L330 230 L370 300 L420 200 L460 290 L520 190 L560 290 L620 210 L650 300 L700 240 L710 320Z" fill="#A855F7" ${stroke(7)}/>`;
    s += `<path d="M280 560 Q250 330 500 300 Q760 330 720 560 Q760 640 720 760 Q500 840 280 760 Q240 640 280 560Z" fill="#22C55E" ${stroke()}/>`;
    s += eyePair({ style: 'fierce', color: '#F59E0B', slit: true, spacing: 110, skin: '#22C55E', y: 470 }, id);
    s += `<path d="M300 650 Q500 740 700 650 Q680 760 500 780 Q320 760 300 650Z" fill="#7F1D1D" ${stroke(7)}/><path d="M330 660 L350 700 L370 668 M630 668 L650 700 L670 660" fill="#fff" ${stroke(4)}/>`;
    s += `<path d="M720 520 Q860 460 920 560 Q860 520 820 580 Q880 600 900 680 Q820 600 740 640" fill="#F97316" ${stroke(6)}/>`;
    return s;
  },
  penguin: (sp, id) => {
    let s = `<path d="M200 1400 Q200 900 360 840 L640 840 Q800 900 800 1400Z" fill="#111" ${stroke()}/><path d="M360 880 Q500 960 640 880 Q660 1150 640 1400 L360 1400 Q340 1150 360 880Z" fill="#fff"/>`;
    s += `<path d="${FACE.round}" fill="#111" ${stroke()}/><path d="M360 470 Q500 420 640 470 Q660 620 500 690 Q340 620 360 470Z" fill="#fff"/>`;
    s += eyePair({ style: sp.eyeStyle ?? 'anime', color: sp.iris ?? '#111', spacing: 75, skin: '#fff', y: 520 }, id);
    if (sp.brows) s += brows(sp.brows, '#111', 440, 75);
    s += `<path d="M450 590 Q500 560 550 590 L500 650Z" fill="#F59E0B" ${stroke(7)}/>`;
    if (sp.extra) s += sp.extra;
    return s;
  },
  appa: (sp, id) => {
    let s = `<path d="M100 1400 Q120 860 400 800 L600 800 Q880 860 900 1400Z" fill="#F5F5F4" ${stroke()}/><path d="M300 1000 Q500 900 700 1000 L720 1400 L280 1400Z" fill="#D6D3D1"/>`;
    s += `<path d="M300 380 Q250 260 330 230 Q350 300 380 330Z M700 380 Q750 260 670 230 Q650 300 620 330Z" fill="#FEF3C7" ${stroke(7)}/>`;
    s += `<path d="M230 560 Q220 320 500 290 Q780 320 770 560 Q780 760 500 800 Q220 760 230 560Z" fill="#F5F5F4" ${stroke()}/>`;
    s += `<path d="M500 280 L450 370 L480 370 L480 470 L520 470 L520 370 L550 370Z" fill="#7C2D12" ${stroke(6)}/>`;
    s += eyePair({ style: 'happy', spacing: 130, skin: '#F5F5F4', y: 520 }, id);
    s += `<ellipse cx="500" cy="660" rx="150" ry="90" fill="#E7E5E4" ${stroke(7)}/><ellipse cx="450" cy="640" rx="14" ry="20" fill="${INK}"/><ellipse cx="550" cy="640" rx="14" ry="20" fill="${INK}"/><path d="M420 700 Q500 740 580 700" fill="none" ${stroke(7)}/>`;
    return s;
  },
  metalhead: (sp, id) => {
    let s = body({ color: '#9CA3AF', collar: 'shell' }, '#9CA3AF');
    s += `<path d="${FACE.square}" fill="#9CA3AF" ${stroke()}/><path d="M330 470 L670 470" ${stroke(6)}/><circle cx="340" cy="620" r="10" fill="${INK}"/><circle cx="660" cy="620" r="10" fill="${INK}"/>`;
    s += EXTRAS.mask(525, '#A855F7');
    s += `<circle cx="420" cy="525" r="40" fill="#22D3EE" ${stroke(6)}/><circle cx="580" cy="525" r="40" fill="#22D3EE" ${stroke(6)}/><circle cx="410" cy="515" r="12" fill="#fff"/><circle cx="570" cy="515" r="12" fill="#fff"/>`;
    s += `<rect x="440" y="620" width="120" height="40" rx="8" fill="#374151" ${stroke(6)}/><path d="M470 620 L470 660 M500 620 L500 660 M530 620 L530 660" stroke="#9CA3AF" stroke-width="5"/><path d="M500 290 L500 200" stroke="#6B7280" stroke-width="14"/><circle cx="500" cy="190" r="18" fill="#EF4444"/>`;
    return s;
  },
  goddard: (sp, id) => {
    let s = `<rect x="280" y="900" width="440" height="500" rx="60" fill="#D1D5DB" ${stroke()}/><rect x="380" y="980" width="240" height="160" rx="16" fill="#1E3A8A" ${stroke(6)}/><text x="500" y="1085" font-size="80" font-family="Arial Black" fill="#4ADE80" text-anchor="middle">:)</text>`;
    s += `<path d="M330 420 L260 300 L300 520Z M670 420 L740 300 L700 520Z" fill="#9CA3AF" ${stroke()}/>`;
    s += `<rect x="290" y="330" width="420" height="440" rx="120" fill="#D1D5DB" ${stroke()}/>`;
    s += `<rect x="340" y="450" width="320" height="140" rx="60" fill="#1f2937" ${stroke(6)}/><circle cx="420" cy="520" r="40" fill="#22D3EE"/><circle cx="580" cy="520" r="40" fill="#22D3EE"/><circle cx="405" cy="505" r="12" fill="#fff"/><circle cx="565" cy="505" r="12" fill="#fff"/>`;
    s += `<ellipse cx="500" cy="660" rx="40" ry="26" fill="${INK}"/><path d="M500 690 L500 720 M460 730 Q500 750 540 730" fill="none" ${stroke(6)}/>`;
    return s;
  },
};

// ---------------- Composition ----------------
function portrait(sp) {
  const id = sp.id.replace(/[^a-z0-9]/gi, '');
  let s = background(sp.faction, id);
  if (sp.bgExtra) for (const e of [].concat(sp.bgExtra)) s += EXTRAS[e]();
  if (sp.duo) {
    s += `<g transform="translate(-150 364) scale(0.74)">${draw({ ...sp.duo[0], id: id + 'a' })}</g>`;
    s += `<g transform="translate(410 364) scale(0.74)">${draw({ ...sp.duo[1], id: id + 'b' })}</g>`;
  } else {
    s += draw({ ...sp, id });
  }
  if (sp.topHat) s += `<g transform="translate(0 ${sp.topHat[2]})">${hair([sp.topHat[0], sp.topHat[1]])[1]}</g>`;
  if (sp.top) s += sp.top;
  if (sp.fg) for (const e of [].concat(sp.fg)) s += EXTRAS[e]();
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="840" viewBox="0 0 1000 1400">${s}</svg>`;
}

function draw(sp) {
  if (sp.special) return SPECIAL[sp.special](sp, sp.id);
  if (sp.kind === 'creature') return creature(sp, sp.id);
  return human(sp, sp.id);
}

module.exports = { portrait, shade };

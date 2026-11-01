/**
 * Renders a stand-in anime-style portrait for every card into art/<card-id>.jpg.
 * Needs Playwright with Chromium installed (not a project dependency).
 * Usage: npx tsx scripts/portraits/render.ts [outDir] [--sheet]
 */
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { ALL_CARDS } from '../../src/data/cards';

const require = createRequire(import.meta.url);
const { portrait } = require('./draw.cjs');
const { SPECS } = require('./specs.cjs');
const { chromium } = require('playwright');

const outDir = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : 'art';
const sheet = process.argv.includes('--sheet');

async function main() {
  mkdirSync(outDir, { recursive: true });
  const missing = ALL_CARDS.filter((c) => !SPECS[c.id]).map((c) => c.id);
  if (missing.length) throw new Error(`No portrait design for: ${missing.join(', ')}`);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 600, height: 840 } });
  const svgs: { id: string; svg: string }[] = [];
  for (const card of ALL_CARDS) {
    const svg = portrait({ ...SPECS[card.id], id: card.id, faction: card.faction });
    svgs.push({ id: card.id, svg });
    await page.setContent(`<body style="margin:0">${svg}</body>`);
    await page.screenshot({ path: `${outDir}/${card.id}.jpg`, type: 'jpeg', quality: 86 });
  }
  if (sheet) {
    // Contact sheets of 24 for review
    await page.setViewportSize({ width: 1200, height: 1140 });
    for (let i = 0; i < svgs.length; i += 24) {
      const cells = svgs
        .slice(i, i + 24)
        .map(({ id, svg }) => `<div style="width:194px;text-align:center;color:#fff;font:11px sans-serif"><div style="width:194px;height:272px">${svg.replace('width="600" height="840"', 'width="194" height="272"')}</div>${id}</div>`)
        .join('');
      await page.setContent(`<body style="margin:0;background:#140B2E;display:flex;flex-wrap:wrap;gap:4px;padding:4px">${cells}</body>`);
      await page.screenshot({ path: `${outDir}/_sheet-${i / 24 + 1}.png`, fullPage: true });
    }
  }
  await browser.close();
  console.log(`Rendered ${svgs.length} portraits to ${outDir}/`);
}

main();

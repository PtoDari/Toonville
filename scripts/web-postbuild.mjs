// Makes the web export behave like an app when added to a phone's home screen.
// Usage: node scripts/web-postbuild.mjs dist /Toonville
import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';

const [dir = 'dist', base = '/Toonville'] = process.argv.slice(2);

copyFileSync('assets/icon.png', `${dir}/apple-touch-icon.png`);
writeFileSync(
  `${dir}/manifest.json`,
  JSON.stringify(
    {
      name: 'Toonville',
      short_name: 'Toonville',
      start_url: `${base}/`,
      scope: `${base}/`,
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#140B2E',
      theme_color: '#140B2E',
      icons: [{ src: `${base}/apple-touch-icon.png`, sizes: '1024x1024', type: 'image/png' }],
    },
    null,
    2,
  ),
);

const tags = [
  `<link rel="apple-touch-icon" href="${base}/apple-touch-icon.png" />`,
  `<link rel="manifest" href="${base}/manifest.json" />`,
  '<meta name="apple-mobile-web-app-capable" content="yes" />',
  '<meta name="mobile-web-app-capable" content="yes" />',
  '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />',
  '<meta name="apple-mobile-web-app-title" content="Toonville" />',
].join('\n    ');

const indexPath = `${dir}/index.html`;
const html = readFileSync(indexPath, 'utf8')
  .replace('</head>', `    ${tags}\n  </head>`)
  .replace('shrink-to-fit=no', 'shrink-to-fit=no, viewport-fit=cover');
writeFileSync(indexPath, html);
writeFileSync(`${dir}/404.html`, html);
console.log('Web post-build: icon, manifest and home-screen tags added');

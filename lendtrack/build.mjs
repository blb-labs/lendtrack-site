// Builds the static site into dist/. No dependencies: `node build.mjs`.
import { rmSync, mkdirSync, writeFileSync, cpSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { site } from './src/config.mjs';
import { page } from './src/layout.mjs';
import home from './src/pages/home.mjs';
import demo from './src/pages/demo.mjs';
import howItWorks from './src/pages/how-it-works.mjs';
import earnings from './src/pages/earnings.mjs';
import partners from './src/pages/partners.mjs';
import funding from './src/pages/funding.mjs';
import legal from './src/pages/legal.mjs';

const out = 'dist';
const pages = [...home, ...demo, ...howItWorks, ...earnings, ...partners, ...funding, ...legal];

rmSync(out, { recursive: true, force: true });
cpSync('public', out, { recursive: true });

for (const p of pages) {
  const file = join(out, p.path, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(p));
}

const urls = pages.filter((p) => !p.noindex).map((p) => `  <url><loc>${site.url}/${p.path}</loc></url>`).join('\n');
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);

console.log(`Built ${pages.length} pages into ${out}/`);

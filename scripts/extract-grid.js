const fs = require('fs');
const html = fs.readFileSync('playbook_raw.html', 'utf8');

const gridStart = html.indexOf('<div class="grid gap-4 sm:grid-cols-2">');
const footerStart = html.indexOf('<footer', gridStart);
const gridHtml = html.slice(gridStart, footerStart);

console.log('Grid HTML length:', gridHtml.length);

// Extract each <a> in the grid
const linkRegex = /<a href="(\/playbook\/[^"]+)"\s+aria-label="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g;
let m;
const items = [];
while ((m = linkRegex.exec(gridHtml)) !== null) {
  const href = m[1];
  const ariaLabel = m[2];
  const inner = m[3];

  // extract title
  const titleM = inner.match(/<div class="type-body-md font-\[450\] text-content-primary">([\s\S]*?)<\/div>/);
  const title = titleM ? titleM[1].replace(/<[^>]+>/g, '').trim() : ariaLabel;

  // extract description
  const descM = inner.match(/<p class="type-body-sm text-content-secondary line-clamp-2">([\s\S]*?)<\/p>/);
  const desc = descM ? descM[1].replace(/<[^>]+>/g, '').trim() : '';

  // extract code or formula if present
  const codeM = inner.match(/<code>([\s\S]*?)<\/code>/g);
  const codes = codeM ? codeM.map(c => c.replace(/<[^>]+>/g, '').trim()) : [];

  items.push({
    href,
    slug: href.replace('/playbook/', ''),
    ariaLabel,
    title,
    desc,
    codes
  });
}

console.log('Total items in grid:', items.length);
fs.writeFileSync('grid_items.json', JSON.stringify(items, null, 2));

items.forEach((it, i) => {
  console.log(`${i+1}. [${it.slug}] ${it.title} | ${it.desc}`);
});

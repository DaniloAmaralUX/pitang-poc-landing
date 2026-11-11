const fs = require('fs');

const html = fs.readFileSync('playbook_raw.html', 'utf8');

// Find all <a> tags pointing to /playbook/
const regex = /<a\s+[^>]*href="(\/playbook\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
let m;
const cards = [];
while ((m = regex.exec(html)) !== null) {
  const url = m[1];
  const inner = m[2];
  // extract text content
  const clean = inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  cards.push({ url, text: clean, raw: inner.slice(0, 300) });
}

console.log('Cards found:', cards.length);
fs.writeFileSync('cards.json', JSON.stringify(cards, null, 2));

// Let's also check for category headings or filters on the playbook page
const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map(x => x[1].replace(/<[^>]+>/g, ' ').trim());
const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map(x => x[1].replace(/<[^>]+>/g, ' ').trim());
console.log('h2s:', h2s);
console.log('h3s:', h3s);

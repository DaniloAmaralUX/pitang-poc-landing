const fs = require('fs');

const html = fs.readFileSync('playbook_raw.html', 'utf8');

// Let's find how sections or categories are structured in the HTML
// Let's inspect some occurrences of /playbook/ links in the HTML
const lines = html.split('\n');
const sampleMatches = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('/playbook/')) {
    sampleMatches.push(lines.slice(Math.max(0, i - 5), Math.min(lines.length, i + 10)).join('\n'));
    if (sampleMatches.length >= 3) break;
  }
}
fs.writeFileSync('sample_snippets.txt', sampleMatches.join('\n\n--- CUT ---\n\n'));

// Let's also search for section headings or text
// Let's extract all text around links to /playbook/
const linkRegex = /href="(\/playbook\/([a-z0-9\-]+))"[^>]*>([\s\S]*?)<\/a>/g;
const items = [];
let match;
while ((match = linkRegex.exec(html)) !== null) {
  items.push({
    url: match[1],
    slug: match[2],
    rawInner: match[3].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  });
}

console.log('Extracted items count:', items.length);
fs.writeFileSync('extracted_items.json', JSON.stringify(items, null, 2));

// Let's check sections in the page
const sectionMatches = [...html.matchAll(/<h[234][^>]*>([\s\S]*?)<\/h[234]>/g)].map(m => m[1].replace(/<[^>]+>/g, ' ').trim());
console.log('Headings:', sectionMatches);

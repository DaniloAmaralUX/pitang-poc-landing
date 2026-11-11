const fs = require('fs');

const html = fs.readFileSync('playbook_raw.html', 'utf8');

// Extract the json-ld
const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (match) {
  const data = JSON.parse(match[1]);
  const items = data.hasPart?.itemListElement || [];
  console.log(`Found ${items.length} items in JSON-LD!`);
  fs.writeFileSync('playbook_rules.json', JSON.stringify(items, null, 2));
} else {
  console.log('No JSON-LD found');
}

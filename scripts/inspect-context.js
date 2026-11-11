const fs = require('fs');
const html = fs.readFileSync('playbook_raw.html', 'utf8');

const idx = html.indexOf('/playbook/reserve-space-with-aspect-ratio');
if (idx !== -1) {
  console.log('Context before the first card:');
  console.log(html.slice(Math.max(0, idx - 1500), idx));
}

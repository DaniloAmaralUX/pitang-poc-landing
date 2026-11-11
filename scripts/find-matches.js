const fs = require('fs');
const html = fs.readFileSync('playbook_raw.html', 'utf8');

let pos = 0;
while ((pos = html.indexOf('/playbook/reserve-space-with-aspect-ratio', pos)) !== -1) {
  console.log('Match at pos:', pos);
  console.log(html.slice(Math.max(0, pos - 400), pos + 300));
  console.log('\n--------------------\n');
  pos += 40;
}

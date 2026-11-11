const fs = require('fs');
const html = fs.readFileSync('playbook_raw.html', 'utf8');

const gridStart = html.indexOf('<div class="grid gap-4 sm:grid-cols-2">');
const footerStart = html.indexOf('<footer', gridStart);
const gridHtml = html.slice(gridStart, footerStart);

const firstTwo = gridHtml.split('</a>').slice(0, 3).join('</a>');
fs.writeFileSync('first_two_cards.html', firstTwo);
console.log('Saved first_two_cards.html');

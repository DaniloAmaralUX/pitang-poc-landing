const fs = require('fs');

const rules = JSON.parse(fs.readFileSync('playbook_rules.json', 'utf8'));
const cards = JSON.parse(fs.readFileSync('cards.json', 'utf8'));

console.log('Rules count:', rules.length);
console.log('Cards count:', cards.length);

// Build map of url -> card
const cardMap = {};
for (const card of cards) {
  if (!cardMap[card.url]) {
    cardMap[card.url] = card;
  }
}

const compiled = rules.map((r, idx) => {
  const slug = r.url.replace('https://www.ui-skills.com/playbook/', '').replace('/playbook/', '');
  const path = `/playbook/${slug}`;
  const card = cardMap[path] || cardMap[`https://www.ui-skills.com/playbook/${slug}`] || {};
  return {
    position: r.position || idx + 1,
    name: r.name,
    slug: slug,
    url: path,
    text: card.text || ''
  };
});

fs.writeFileSync('compiled_47_rules.json', JSON.stringify(compiled, null, 2));
console.log('Compiled 47 rules saved.');
for (let i = 0; i < 10; i++) {
  console.log(`${compiled[i].position}. [${compiled[i].slug}] ${compiled[i].name} -> ${compiled[i].text.slice(0, 80)}...`);
}

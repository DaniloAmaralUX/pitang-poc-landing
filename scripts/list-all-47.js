const fs = require('fs');

const rules = JSON.parse(fs.readFileSync('clean_47_rules.json', 'utf8'));

console.log('Total rules:', rules.length);
rules.forEach((r, idx) => {
  console.log(`${idx + 1}. [${r.slug}]`);
  console.log(`   EN: ${r.name}`);
  console.log(`   Desc: ${r.description}`);
});

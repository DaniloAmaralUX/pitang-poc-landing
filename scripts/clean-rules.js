const fs = require('fs');

const compiled = JSON.parse(fs.readFileSync('compiled_47_rules.json', 'utf8'));

compiled.forEach(r => {
  // unescape HTML entities
  let clean = r.text
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

  // The text usually starts with the name, then description
  if (clean.startsWith(r.name)) {
    clean = clean.slice(r.name.length).trim();
  }
  r.description = clean;
});

fs.writeFileSync('clean_47_rules.json', JSON.stringify(compiled, null, 2));

console.log('Sample clean rules:');
compiled.slice(0, 15).forEach(r => {
  console.log(`${r.position}. ${r.name}`);
  console.log(`   Desc: ${r.description}`);
  console.log(`   Slug: ${r.slug}`);
});

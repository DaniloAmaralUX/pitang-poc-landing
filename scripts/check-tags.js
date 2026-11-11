const fs = require('fs');
const html = fs.readFileSync('playbook_raw.html', 'utf8');

// Search for any button or link with filter or category
const pills = [...html.matchAll(/class="[^"]*(?:pill|tag|badge|filter|tab)[^"]*"[^>]*>([\s\S]*?)<\/(?:button|a|span|div)>/gi)]
  .map(m => m[1].replace(/<[^>]+>/g, '').trim())
  .filter(Boolean);

console.log('Pills/Tags found:', [...new Set(pills)].slice(0, 30));

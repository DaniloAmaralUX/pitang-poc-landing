const fs = require('fs');

const html = fs.readFileSync('sample_use-concentric-border-radius.html', 'utf8');

// Let's find all text inside main or article
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
if (mainMatch) {
  const main = mainMatch[1];
  console.log('Main length:', main.length);
  // strip tags and print clean lines
  const text = main.replace(/<script[\s\S]*?<\/script>/gi, '')
                   .replace(/<style[\s\S]*?<\/style>/gi, '')
                   .replace(/<[^>]+>/g, '\n')
                   .split('\n')
                   .map(l => l.trim())
                   .filter(Boolean);
  console.log('Sample text lines:', text.slice(0, 40));
} else {
  console.log('No <main> found, searching <body>');
}

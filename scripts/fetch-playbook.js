const fs = require('fs');

async function main() {
  try {
    const res = await fetch('https://www.ui-skills.com/playbook', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const html = await res.text();
    fs.writeFileSync('playbook_raw.html', html);
    console.log('Saved playbook_raw.html, length:', html.length);

    // Extract links
    const linkMatches = [...html.matchAll(/href="(\/playbook\/[^"]+)"/g)].map(m => m[1]);
    const unique = [...new Set(linkMatches)];
    console.log('Unique playbook links:', unique);

    // Let's also check if Next.js hydration data (__NEXT_DATA__ or RSC payload) is present
    const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">([^<]+)<\/script>/);
    if (nextDataMatch) {
      console.log('Found __NEXT_DATA__!');
      fs.writeFileSync('next_data.json', nextDataMatch[1]);
    } else {
      console.log('No __NEXT_DATA__, might be Next App Router (RSC). Checking for self.__next_f...');
      const rscMatches = [...html.matchAll(/self\.__next_f\.push\(\[1,"([^"]+)"\]\)/g)];
      console.log('RSC chunks count:', rscMatches.length);
    }
  } catch (err) {
    console.error('Error fetching playbook:', err);
  }
}

main();

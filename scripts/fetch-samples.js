const fs = require('fs');

async function testFetchPages() {
  const slugs = [
    'use-text-balance',
    'use-tabular-nums-for-data',
    'use-large-touch-targets',
    'use-concentric-border-radius'
  ];

  for (const slug of slugs) {
    try {
      const res = await fetch(`https://www.ui-skills.com/playbook/${slug}`, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      const html = await res.text();
      fs.writeFileSync(`sample_${slug}.html`, html);
      console.log(`Saved sample_${slug}.html, length: ${html.length}`);

      // Extract title and text
      const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';

      // Extract main text or instructions
      const metaDesc = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
      console.log(`[${slug}] Title: ${title}`);
      console.log(`[${slug}] Meta desc: ${metaDesc ? metaDesc[1] : ''}`);
    } catch (e) {
      console.error(slug, e.message);
    }
  }
}

testFetchPages();

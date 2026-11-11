const fs = require('fs');
const html = fs.readFileSync('playbook_raw.html', 'utf8');

// Find all items with kind: playbook in the props
const playbookRegex = /\{\&quot;kind\&quot;:\[0,\&quot;playbook\&quot;\],\&quot;slug\&quot;:\[0,\&quot;([^&]+)\&quot;\],\&quot;pathSlug\&quot;:\[0,\&quot;([^&]+)\&quot;\],\&quot;href\&quot;:\[0,\&quot;([^&]+)\&quot;\],\&quot;label\&quot;:\[0,\&quot;([^&]+)\&quot;\],\&quot;sourceLabel\&quot;:\[0,\&quot;Playbook\&quot;\],\&quot;description\&quot;:\[0,\&quot;([^&]+)\&quot;\]\}/g;

let m;
const items = [];
while ((m = playbookRegex.exec(html)) !== null) {
  items.push({
    slug: m[1],
    pathSlug: m[2],
    href: m[3],
    label: m[4].replace(/\\"/g, '"'),
    description: m[5].replace(/\\"/g, '"')
  });
}

console.log('Found playbook items in command dialog:', items.length);
fs.writeFileSync('command_dialog_playbook.json', JSON.stringify(items, null, 2));

for (let i = 0; i < Math.min(items.length, 10); i++) {
  console.log(`${i+1}. [${items[i].slug}] ${items[i].label} => ${items[i].description}`);
}

const fs = require('fs');
const t = fs.readFileSync('C:/Users/dar/.gemini/antigravity/brain/6683f957-03fc-49b5-999e-3a4142e45bff/.system_generated/logs/transcript.jsonl', 'utf8');
const m = t.match(/https?:[^\s"']+\.(?:jpg|jpeg|png|webp|svg)/gi);
console.log(m ? Array.from(new Set(m)) : 'none');

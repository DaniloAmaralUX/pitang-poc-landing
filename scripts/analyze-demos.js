const fs = require('fs');
const js = fs.readFileSync('C:/Users/dar/.gemini/antigravity/scratch/pitang-poc-landing/demo_router.js', 'utf8');

const imports = [...js.matchAll(/import\s*\{[^}]*\}\s*from\s*['"][^'"]+['"]/g)].map(m => m[0]);
console.log('All imports:', imports);

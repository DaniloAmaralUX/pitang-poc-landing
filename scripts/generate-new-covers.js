const fs = require('fs');
const path = require('path');

const covers = [
  {
    name: 'cover-skills.svg',
    title: 'Skills',
    desc: 'Habilidades &amp; Ferramentas',
    from: '#064e3b',
    to: '#059669',
    c1: '#10b981',
    c2: '#047857',
    c3: '#34d399',
    c4: '#065f46'
  },
  {
    name: 'cover-agentes.svg',
    title: 'Agentes',
    desc: 'Agentes Autônomos de UI',
    from: '#1e1b4b',
    to: '#3b82f6',
    c1: '#4f46e5',
    c2: '#2563eb',
    c3: '#60a5fa',
    c4: '#1d4ed8'
  },
  {
    name: 'cover-themes.svg',
    title: 'Themes',
    desc: 'Design Tokens &amp; Paletas',
    from: '#451a03',
    to: '#d97706',
    c1: '#f59e0b',
    c2: '#b45309',
    c3: '#fbbf24',
    c4: '#78350f'
  },
  {
    name: 'cover-presets.svg',
    title: 'Presets',
    desc: 'Configurações Prontas de UI',
    from: '#4c0519',
    to: '#e11d48',
    c1: '#f43f5e',
    c2: '#be123c',
    c3: '#fb7185',
    c4: '#881337'
  },
  {
    name: 'cover-templates.svg',
    title: 'Templates',
    desc: 'Layouts e Telas Completas',
    from: '#083344',
    to: '#0284c7',
    c1: '#06b6d4',
    c2: '#0369a1',
    c3: '#38bdf8',
    c4: '#164e63'
  }
];

const coversDir = path.join(__dirname, '..', 'public', 'covers');

for (const c of covers) {
  const filterId = `blur-${c.title.toLowerCase()}`;
  const gradId = `grad-${c.title.toLowerCase()}`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <defs>
    <filter id="${filterId}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="60"/>
    </filter>
    <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${c.from};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${c.to};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="800" fill="url(#${gradId})"/>
  
  <!-- Subtle Gradient Circles (Mesh-like) -->
  <g filter="url(#${filterId})" opacity="0.75">
    <circle cx="200" cy="200" r="300" fill="${c.c1}" opacity="0.6"/>
    <circle cx="600" cy="600" r="350" fill="${c.c2}" opacity="0.6"/>
    <circle cx="600" cy="100" r="250" fill="${c.c3}" opacity="0.5"/>
    <circle cx="100" cy="700" r="300" fill="${c.c4}" opacity="0.4"/>
  </g>

  <!-- Glassy Overlay/Texture effect -->
  <rect width="800" height="800" fill="rgba(255,255,255,0.03)"/>
  <rect x="20" y="20" width="760" height="760" rx="40" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>

  <!-- Typography -->
  <g fill="white" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
    <text x="60" y="100" font-size="24" opacity="0.7" font-weight="600" letter-spacing="1">Pitang Labs</text>
    <text x="60" y="200" font-size="84" font-weight="700" letter-spacing="-2">${c.title}</text>
    <text x="60" y="260" font-size="26" opacity="0.8" font-weight="500">${c.desc}</text>
    
    <!-- Decorative element -->
    <circle cx="700" cy="700" r="60" fill="rgba(255,255,255,0.1)"/>
    <circle cx="700" cy="700" r="30" fill="rgba(255,255,255,0.2)"/>
  </g>
</svg>`;

  fs.writeFileSync(path.join(coversDir, c.name), svg, 'utf8');
  console.log(`Generated ${c.name}`);
}

const fs = require('fs');
const path = require('path');

const coversDir = path.join(__dirname, '..', 'public', 'covers');

const covers = [
  {
    file: 'cover-01.svg',
    stop1: '#2e1065',
    stop2: '#4c1d95',
    c1: '#4c1d95',
    c2: '#8b5cf6',
    c3: '#c026d3',
    c4: '#c026d3',
    line1: 'Acesso',
    line2: 'Cidadão',
  },
  {
    file: 'cover-02.svg',
    stop1: '#082f49',
    stop2: '#0ea5e9',
    c1: '#0ea5e9',
    c2: '#06b6d4',
    c3: '#3b82f6',
    c4: '#3b82f6',
    line1: 'Nova',
    line2: 'Manifestação',
  },
  {
    file: 'cover-03.svg',
    stop1: '#4a044e',
    stop2: '#db2777',
    c1: '#db2777',
    c2: '#7c3aed',
    c3: '#2563eb',
    c4: '#2563eb',
    line1: 'Mesa de',
    line2: 'Triagem',
  },
  {
    file: 'cover-04.svg',
    stop1: '#064e3b',
    stop2: '#059669',
    c1: '#059669',
    c2: '#65a30d',
    c3: '#10b981',
    c4: '#10b981',
    line1: 'Linha do',
    line2: 'Tempo',
  },
  {
    file: 'cover-05.svg',
    stop1: '#0f172a',
    stop2: '#475569',
    c1: '#475569',
    c2: '#94a3b8',
    c3: '#fb923c',
    c4: '#fb923c',
    line1: 'Dashboard',
    line2: 'Executivo',
  },
  {
    file: 'cover-06.svg',
    stop1: '#451a03',
    stop2: '#78350f',
    c1: '#78350f',
    c2: '#b45309',
    c3: '#d97706',
    c4: '#d97706',
    line1: 'Emulador',
    line2: 'iOS',
  },
  {
    file: 'cover-07.svg',
    stop1: '#111827',
    stop2: '#dc2626',
    c1: '#dc2626',
    c2: '#991b1b',
    c3: '#1f2937',
    c4: '#1f2937',
    line1: 'Emulador',
    line2: 'Android',
  },
  {
    file: 'cover-08.svg',
    stop1: '#7c2d12',
    stop2: '#ea580c',
    c1: '#ea580c',
    c2: '#f59e0b',
    c3: '#fcd34d',
    c4: '#fcd34d',
    line1: 'Desktop',
    line2: 'Web',
  },
  {
    file: 'cover-09.svg',
    stop1: '#1e1b4b',
    stop2: '#312e81',
    c1: '#312e81',
    c2: '#4338ca',
    c3: '#e0e7ff',
    c4: '#e0e7ff',
    line1: 'Padrões',
    line2: 'Jakub',
  },
  {
    file: 'cover-10.svg',
    stop1: '#831843',
    stop2: '#f472b6',
    c1: '#f472b6',
    c2: '#22d3ee',
    c3: '#facc15',
    c4: '#facc15',
    line1: 'Claude',
    line2: 'Code',
  },
];

function buildSvg(c) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <defs>
    <filter id="blur${c.file}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="60"/>
    </filter>
    <linearGradient id="grad${c.file}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${c.stop1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${c.stop2};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="800" fill="url(#grad${c.file})"/>
  
  <!-- Subtle Gradient Circles (Mesh-like) -->
  <g filter="url(#blur${c.file})" opacity="0.7">
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
    <text x="60" y="180" font-size="72" font-weight="700" letter-spacing="-2">${c.line1}</text>
    <text x="60" y="250" font-size="72" font-weight="700" letter-spacing="-2">${c.line2}</text>
    
    <!-- Decorative element -->
    <circle cx="700" cy="700" r="60" fill="rgba(255,255,255,0.1)"/>
    <circle cx="700" cy="700" r="30" fill="rgba(255,255,255,0.2)"/>
  </g>
</svg>`;
}

covers.forEach(c => {
  fs.writeFileSync(path.join(coversDir, c.file), buildSvg(c), 'utf-8');
});

console.log('10 original-style covers generated with 1:1 visual perfection!');

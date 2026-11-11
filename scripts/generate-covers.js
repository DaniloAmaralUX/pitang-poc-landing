const fs = require('fs');
const path = require('path');

const coversDir = path.join(__dirname, '..', 'public', 'covers');
if (!fs.existsSync(coversDir)) fs.mkdirSync(coversDir, { recursive: true });

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const covers = [
  {
    filename: 'cover-01.svg',
    tag: 'FLUXO 01 • AUTENTICAÇÃO',
    titleLine1: 'Acesso Cidadão',
    titleLine2: 'Gov.br e Biometria',
    subtitle: 'Validação em 2 etapas • Nível Prata e Ouro',
    bgStart: '#0B132B',
    bgEnd: '#1C2541',
    mesh1: '#3A506B',
    mesh2: '#5BC0BE',
    accent: '#6FFFE9',
    badge: 'GOV.BR VERIFIED',
  },
  {
    filename: 'cover-02.svg',
    tag: 'FLUXO 02 • FORMULÁRIO',
    titleLine1: 'Manifestação',
    titleLine2: 'Preditiva e Anexos',
    subtitle: 'Upload drag e drop • Sugestões preditivas com IA',
    bgStart: '#022C22',
    bgEnd: '#064E3B',
    mesh1: '#047857',
    mesh2: '#10B981',
    accent: '#34D399',
    badge: 'SMART FORM',
  },
  {
    filename: 'cover-03.svg',
    tag: 'FLUXO 03 • OPERAÇÃO',
    titleLine1: 'Mesa de Triagem',
    titleLine2: 'Kanban e SLAs',
    subtitle: '3 colunas operacionais • SLA com contagem regressiva',
    bgStart: '#1E1B4B',
    bgEnd: '#312E81',
    mesh1: '#4338CA',
    mesh2: '#6366F1',
    accent: '#818CF8',
    badge: 'KANBAN ENGINE',
  },
  {
    filename: 'cover-04.svg',
    tag: 'FLUXO 04 • AUDITORIA',
    titleLine1: 'Linha do Tempo',
    titleLine2: 'Protocolo Oficial',
    subtitle: 'Rastreabilidade ponta a ponta • QR Code de autenticidade',
    bgStart: '#451A03',
    bgEnd: '#78350F',
    mesh1: '#B45309',
    mesh2: '#F59E0B',
    accent: '#FBBF24',
    badge: 'AUDIT TRAIL',
  },
  {
    filename: 'cover-05.svg',
    tag: 'FLUXO 05 • TELEMETRIA',
    titleLine1: 'Dashboard Executivo',
    titleLine2: 'Métricas CSAT',
    subtitle: 'Tempo médio 4.2h • 98.4% resolutividade • Pitang Labs',
    bgStart: '#4C0519',
    bgEnd: '#881337',
    mesh1: '#BE123C',
    mesh2: '#E11D48',
    accent: '#FB7185',
    badge: 'LIVE METRICS',
  },
  {
    filename: 'cover-06.svg',
    tag: 'BREAKPOINT 01 • MOBILE',
    titleLine1: 'Emulador iOS',
    titleLine2: 'Dynamic Island',
    subtitle: '390x844px • Status bar 09:41 • Glass Tab Bar',
    bgStart: '#0F172A',
    bgEnd: '#1E293B',
    mesh1: '#334155',
    mesh2: '#64748B',
    accent: '#94A3B8',
    badge: 'iOS 18 VIEWPORT',
  },
  {
    filename: 'cover-07.svg',
    tag: 'BREAKPOINT 02 • MOBILE',
    titleLine1: 'Emulador Android',
    titleLine2: 'Material 3 e FAB',
    subtitle: '412x915px • Câmera punch-hole • Floating Action Button',
    bgStart: '#082F49',
    bgEnd: '#0C4A6E',
    mesh1: '#0284C7',
    mesh2: '#38BDF8',
    accent: '#7DD3FC',
    badge: 'M3 ANDROID',
  },
  {
    filename: 'cover-08.svg',
    tag: 'BREAKPOINT 03 • DESKTOP',
    titleLine1: 'Desktop Web',
    titleLine2: '1280px Workspace',
    subtitle: 'Moldura macOS traffic lights • Omnibar • 3 Colunas Kanban',
    bgStart: '#18181B',
    bgEnd: '#27272A',
    mesh1: '#3F3F46',
    mesh2: '#52525B',
    accent: '#A1A1AA',
    badge: 'DESKTOP 1280px',
  },
  {
    filename: 'cover-09.svg',
    tag: 'DESIGN ENGINEERING',
    titleLine1: 'Padrões de Usabilidade',
    titleLine2: 'Jakub Krehel e Emil',
    subtitle: 'Raios concêntricos • 44px touch • Glass pill picker',
    bgStart: '#3B0764',
    bgEnd: '#581C87',
    mesh1: '#7E22CE',
    mesh2: '#A855F7',
    accent: '#C084FC',
    badge: 'WCAG AA + 100% QUALITY',
  },
  {
    filename: 'cover-10.svg',
    tag: 'IDE INTEGRATION',
    titleLine1: 'Claude Code e Codex',
    titleLine2: 'npx pitang-poc',
    subtitle: 'Abre no navegador interno da IDE com hot-reload',
    bgStart: '#172554',
    bgEnd: '#1E3A8A',
    mesh1: '#2563EB',
    mesh2: '#3B82F6',
    accent: '#60A5FA',
    badge: 'IDE BROWSER EMBEDDED',
  }
];

function generateSvg(item) {
  const tagEscaped = escapeXml(item.tag);
  const title1Escaped = escapeXml(item.titleLine1);
  const title2Escaped = escapeXml(item.titleLine2);
  const subtitleEscaped = escapeXml(item.subtitle);
  const badgeEscaped = escapeXml(item.badge);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <defs>
    <linearGradient id="bg-${item.filename}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${item.bgStart}" />
      <stop offset="100%" stop-color="${item.bgEnd}" />
    </linearGradient>
    <filter id="blur-${item.filename}" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="80" />
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="800" height="800" fill="url(#bg-${item.filename})" />

  <!-- Ambient Light Orbs -->
  <g filter="url(#blur-${item.filename})" opacity="0.65">
    <circle cx="220" cy="220" r="260" fill="${item.mesh1}" />
    <circle cx="620" cy="580" r="300" fill="${item.mesh2}" />
    <circle cx="640" cy="180" r="200" fill="${item.accent}" opacity="0.4" />
  </g>

  <!-- Fine Architectural Grid Lines -->
  <path d="M 0 160 L 800 160 M 0 640 L 800 640 M 160 0 L 160 800 M 640 0 L 640 800" stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="4 4" />

  <!-- Outer Concentric Glass Border -->
  <rect x="24" y="24" width="752" height="752" rx="40" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" />
  <rect x="36" y="36" width="728" height="728" rx="28" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1" />

  <!-- Top Badge and Pitang Labs Branding -->
  <g transform="translate(64, 68)">
    <!-- Pitang Labs Pill -->
    <rect width="180" height="34" rx="17" fill="rgba(227,6,19,0.25)" stroke="#E30613" stroke-width="1.2" />
    <circle cx="18" cy="17" r="5" fill="#E30613" />
    <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" letter-spacing="1">PITANG LABS</text>

    <!-- Category Tag -->
    <text x="210" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="${item.accent}" letter-spacing="1.5">${tagEscaped}</text>
  </g>

  <!-- Feature Badge Right -->
  <g transform="translate(540, 68)">
    <rect width="196" height="34" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
    <text x="98" y="21" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" letter-spacing="1.2">${badgeEscaped}</text>
  </g>

  <!-- Main Headline Typography -->
  <g transform="translate(64, 260)" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">
    <text x="0" y="0" font-size="56" font-weight="800" letter-spacing="-1.5">${title1Escaped}</text>
    <text x="0" y="68" font-size="56" font-weight="800" letter-spacing="-1.5" fill="${item.accent}">${title2Escaped}</text>
    <text x="0" y="130" font-size="20" font-weight="400" fill="rgba(255,255,255,0.72)" letter-spacing="-0.2">${subtitleEscaped}</text>
  </g>

  <!-- Card Center Visual Graphic Card -->
  <g transform="translate(64, 450)">
    <rect width="672" height="250" rx="20" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
    
    <!-- Header of card -->
    <rect x="0" y="0" width="672" height="42" rx="20" fill="rgba(255,255,255,0.04)" />
    <circle cx="28" cy="21" r="5" fill="#EF4444" />
    <circle cx="46" cy="21" r="5" fill="#F59E0B" />
    <circle cx="64" cy="21" r="5" fill="#10B981" />
    <text x="90" y="25" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.5)">poc-simulator // ${tagEscaped.toLowerCase()}</text>

    <!-- Simulated UI Bars / Content -->
    <rect x="28" y="70" width="280" height="24" rx="6" fill="${item.accent}" opacity="0.8" />
    <rect x="28" y="106" width="440" height="12" rx="4" fill="rgba(255,255,255,0.2)" />
    <rect x="28" y="128" width="380" height="12" rx="4" fill="rgba(255,255,255,0.15)" />
    <rect x="28" y="150" width="220" height="12" rx="4" fill="rgba(255,255,255,0.1)" />

    <!-- Action Pill Button -->
    <rect x="28" y="184" width="160" height="38" rx="19" fill="#FFFFFF" />
    <text x="108" y="208" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#000000">Testar Fluxo &gt;</text>

    <!-- Interactive Metric Box on Right -->
    <g transform="translate(480, 68)">
      <rect width="164" height="154" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
      <text x="20" y="36" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600" fill="rgba(255,255,255,0.5)">CONFORMIDADE</text>
      <text x="20" y="80" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" fill="#FFFFFF" style="font-variant-numeric: tabular-nums">100%</text>
      <text x="20" y="112" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="500" fill="${item.accent}">Jakub Krehel Rule</text>
      <text x="20" y="132" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="400" fill="rgba(255,255,255,0.4)">44px touch • Concentric</text>
    </g>
  </g>
</svg>`;
}

covers.forEach(c => {
  const filePath = path.join(coversDir, c.filename);
  fs.writeFileSync(filePath, generateSvg(c), 'utf-8');
});

console.log('All 10 covers regenerated with XML-safe entities!');

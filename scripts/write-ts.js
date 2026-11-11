const fs = require('fs');

const enriched = JSON.parse(fs.readFileSync('enriched_47_rules.json', 'utf8'));

const tsCode = `export interface PlaybookRule {
  position: number;
  slug: string;
  title: string;
  originalTitle: string;
  category: 'Layout' | 'Tipografia' | 'Acessibilidade' | 'Movimento' | 'Interação' | 'Cores';
  categoryLabel: string;
  tag: string;
  badge: string;
  summary: string;
  rationale: string;
  badCode: string;
  goodCode: string;
  doTip: string;
  dontTip: string;
  markdown: string;
}

export const PLAYBOOK_RULES: PlaybookRule[] = ${JSON.stringify(enriched, null, 2)};

export function getAllRules(): PlaybookRule[] {
  return PLAYBOOK_RULES;
}

export function getRuleBySlug(slug: string): PlaybookRule | undefined {
  return PLAYBOOK_RULES.find((r) => r.slug === slug);
}

export function getCategories() {
  return [
    { id: 'all', label: 'Todas as Regras', count: PLAYBOOK_RULES.length },
    { id: 'Layout', label: 'Layout & Espaçamento', count: PLAYBOOK_RULES.filter(r => r.category === 'Layout').length },
    { id: 'Tipografia', label: 'Tipografia', count: PLAYBOOK_RULES.filter(r => r.category === 'Tipografia').length },
    { id: 'Acessibilidade', label: 'Acessibilidade & Formulários', count: PLAYBOOK_RULES.filter(r => r.category === 'Acessibilidade').length },
    { id: 'Movimento', label: 'Animação & Movimento', count: PLAYBOOK_RULES.filter(r => r.category === 'Movimento').length },
    { id: 'Interação', label: 'Interação & Feedback', count: PLAYBOOK_RULES.filter(r => r.category === 'Interação').length },
    { id: 'Cores', label: 'Cores & Superfícies', count: PLAYBOOK_RULES.filter(r => r.category === 'Cores').length },
  ];
}

export function getFullPlaybookMarkdown(): string {
  const header = \`# Playbook de Usabilidade & Engenharia de Design (UI Skills)
> Traduzido e adaptado por Pitang Labs • 47 Regras Práticas para Design Systems e Interfaces Modernas.
> Origem: https://www.ui-skills.com/playbook

---\\n\\n\`;

  const body = PLAYBOOK_RULES.map(r => r.markdown).join('\\n---\\n\\n');
  return header + body;
}
`;

fs.writeFileSync('lib/playbook-data.ts', tsCode, 'utf8');
console.log('lib/playbook-data.ts written successfully!');

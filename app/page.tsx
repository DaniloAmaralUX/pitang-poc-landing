import type { Metadata } from 'next'
import { Plus } from 'lucide-react'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: 'Pitang Labs — POC Simulator | Transforme Requisitos em Protótipos',
  description:
    'Simulador de POC em alta fidelidade para Claude Code, Codex e Cursor. Baseado em física Motion, padrões Jakub Krehel e múltiplos breakpoints.',
  alternates: {
    canonical: '/',
  },
}

const faqs = [
  {
    question: 'O que é o Pitang Labs POC Simulator?',
    answer:
      'É uma ferramenta de Design Engineering criada pela Pitang Labs para transformar regras de negócio e requisitos em protótipos de alta fidelidade navegáveis diretamente no browser da sua IDE (Claude Code, Codex, Cursor, VS Code).',
  },
  {
    question: 'Como funciona o comando no Claude Code e Codex?',
    answer:
      'Ao digitar "npx pitang-poc" no terminal ou chat da sua IDE, o comando inicializa o servidor local e aciona o Simple Browser embutido do VS Code / Cursor / Codex, abrindo o simulador de forma imediata dentro da própria IDE.',
  },
  {
    question: 'Como os requisitos de negócio viram telas e fluxos?',
    answer:
      'A ferramenta analisa especificações em Markdown ou texto livre (regras de negócio, personas, campos obrigatórios, SLAs) e mapeia automaticamente os archetypes de interface: Autenticação Gov.br, Formulário Inteligente, Mesa de Triagem Kanban, Linha do Tempo e Dashboards.',
  },
  {
    question: 'Quais breakpoints e dispositivos são suportados?',
    answer:
      'A ferramenta inclui emuladores fiéis de iOS (390×844px com Dynamic Island e Glass Tab Bar), Android (412×915px com Material 3 e Floating Action Button) e Web Desktop (1280px com moldura macOS, omnibar e visualização paralela de 3 colunas).',
  },
  {
    question: 'Quais regras de design e usabilidade são aplicadas?',
    answer:
      'Todas as interfaces seguem os padrões de Jakub Krehel (geometria concêntrica Router = Rinner + P, alvos de toque mínimos de 44px, feedback tátil scale-on-press 0.96 e números tabulares) e componentes de Motion de Emil Kowalski (glass pill picker com timing 250ms cubic-bezier e atalhos de teclado).',
  },
  {
    question: 'A ferramenta é open source?',
    answer:
      'Sim. O Pitang Labs POC Simulator é 100% open source sob licença MIT, disponível para toda a comunidade no GitHub.',
  },
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

function FaqSection() {
  return (
    <section
      id="faq"
      className="py-16 relative border-t border-dashed border-border/70 scroll-mt-32"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-center">
          Perguntas Frequentes
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-10 text-center text-balance">
          Tudo sobre como executar o simulador de POCs na sua IDE e acelerar o desenvolvimento de produtos digitais.
        </p>
        <div className="border-y border-dashed border-border/70 divide-y divide-dashed divide-border/70">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item group">
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none text-base font-semibold tracking-tight transition-colors hover:text-foreground/80 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-open:rotate-45" />
              </summary>
              <p className="pb-5 pr-8 text-[15px] leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <HomeClient faq={<FaqSection />} />
    </>
  )
}

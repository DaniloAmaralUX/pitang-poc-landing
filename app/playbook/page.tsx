import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChevronRight, ArrowRight, Sparkles, Layers, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Playbook — Regras & Padrões de Usabilidade | Pitang Labs',
  description:
    'Guia prático de engenharia de design e usabilidade com regras interativas para criar interfaces fluidas, sem layout shifts e 100% acessíveis.',
}

const learnCards = [
  {
    slug: 'reserve-space-with-aspect-ratio',
    title: 'Evite saltos de layout com aspect-ratio',
    originalTitle: 'Prevent layout shifts with aspect ratio',
    description:
      'Defina aspect-ratio para que o conteúdo ao redor não salte enquanto uma imagem é carregada na tela.',
    codeProperty: 'aspect-ratio',
    badge: 'Interativo ⚡',
    available: true,
  },
  {
    slug: 'reserve-space-with-aspect-ratio',
    title: 'Equilibre títulos para facilitar a leitura',
    originalTitle: 'Balance heading text for easier reading',
    description:
      'Use text-balance para títulos e text-pretty para o corpo do texto, evitando palavras órfãs e quebras feias.',
    codeProperty: 'text-balance',
    badge: 'Regra de Tipografia',
    available: true,
  },
  {
    slug: 'reserve-space-with-aspect-ratio',
    title: 'Alinhe números com tabular-nums',
    originalTitle: 'Align numbers with tabular-nums',
    description:
      'Use tabular-nums para alinhar dígitos e valores numéricos em tabelas, dashboards e interfaces densas em dados.',
    codeProperty: 'tabular-nums',
    badge: 'Regra de Dados',
    available: true,
  },
  {
    slug: 'reserve-space-with-aspect-ratio',
    title: 'Use alvos de toque de 44px para acessibilidade',
    originalTitle: 'Use 44px touch targets for accessibility',
    description:
      'Garanta que botões e elementos interativos tenham uma área mínima de clique de 44 por 44px no mobile.',
    codeProperty: 'min-h-[44px]',
    badge: 'WCAG AA',
    available: true,
  },
]

export default function PlaybookPage() {
  return (
    <div className="m-shell">
      <Navbar />

      <main className="min-h-screen">
        <div className="m-wrap border-x border-dashed border-t-0 min-h-screen relative px-4 sm:px-8 py-12">
          {/* Top Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-semibold">Playbook</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-medium text-muted-foreground mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E30613]" />
              Pitang Labs Design Engineering
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
              Playbook de Usabilidade & UI
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Padrões práticos de design e engenharia de interface adaptados do catálogo oficial da UI Skills. Regras que eliminam atrito, estabilizam o layout e garantem fidelidade em qualquer breakpoint.
            </p>
          </header>

          {/* Section: Aprenda (Learn) */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground tracking-tight">
                Aprenda <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </span>
              <span className="text-xs font-mono text-muted-foreground">4 Guias Selecionados</span>
            </div>

            {/* 2x2 Grid matching ui-skills.com/playbook */}
            <div className="grid gap-3.5 sm:grid-cols-2">
              {learnCards.map((card) => (
                <Link
                  key={card.title}
                  href={`/playbook/${card.slug}`}
                  className="group block h-full focus:outline-none"
                >
                  <div className="relative isolate flex flex-col justify-between gap-3 rounded-xl border border-dashed border-border/70 bg-secondary/20 p-5 transition-all duration-200 h-full hover:border-foreground/50 hover:bg-secondary/40 hover:-translate-y-0.5">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-base font-semibold text-foreground tracking-tight group-hover:text-white transition-colors">
                          {card.title}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider bg-secondary px-2 py-0.5 rounded-full border border-border text-muted-foreground shrink-0">
                          {card.badge}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border/30 text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      <code>{card.codeProperty}</code>
                      <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Ver Demonstração <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Info Banner */}
          <div className="rounded-xl border border-dashed border-border/70 bg-secondary/15 p-6 mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="h-9 w-9 rounded-lg bg-[#E30613]/10 border border-[#E30613]/30 flex items-center justify-center text-[#E30613] shrink-0 font-bold">
                PL
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Simulação em Tempo Real no Cursor & IDE
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Execute <code>npx pitang-poc</code> no chat do Claude Code ou Codex para testar todas estas regras na prática com múltiplos breakpoints.
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity shrink-0"
            >
              Voltar ao Simulador
            </Link>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  )
}

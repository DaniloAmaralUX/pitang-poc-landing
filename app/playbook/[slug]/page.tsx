import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { getAllRules, getRuleBySlug } from '@/lib/playbook-data'
import { RuleDetailClient } from './detail-client'
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles, BookOpen } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const rules = getAllRules()
  return rules.map((rule) => ({
    slug: rule.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const rule = getRuleBySlug(slug)

  if (!rule) {
    return {
      title: 'Regra não encontrada | Playbook Pitang Labs',
    }
  }

  return {
    title: `${rule.title} • Playbook de Usabilidade | Pitang Labs`,
    description: `${rule.summary} — Diretriz técnica e boas práticas com exemplos de código e exportação em Markdown.`,
  }
}

export default async function PlaybookDetailPage({ params }: PageProps) {
  const { slug } = await params
  const rule = getRuleBySlug(slug)

  if (!rule) {
    notFound()
  }

  const allRules = getAllRules()
  const currentIndex = allRules.findIndex((r) => r.slug === slug)
  const prevRule = currentIndex > 0 ? allRules[currentIndex - 1] : allRules[allRules.length - 1]
  const nextRule = currentIndex < allRules.length - 1 ? allRules[currentIndex + 1] : allRules[0]

  return (
    <div className="m-shell">
      <Navbar />

      <main className="min-h-screen">
        <div className="m-wrap border-x border-dashed border-t-0 min-h-screen relative px-4 sm:px-8 py-10 max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground flex-wrap">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/playbook" className="hover:text-foreground transition-colors">
                  Playbook
                </Link>
              </li>
              <li>/</li>
              <li>
                <span className="text-muted-foreground">{rule.categoryLabel}</span>
              </li>
              <li>/</li>
              <li className="text-foreground font-semibold truncate max-w-[200px] sm:max-w-none">
                {rule.title}
              </li>
            </ol>
          </nav>

          {/* Header Section with Navigation Arrows */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                  {rule.categoryLabel}
                </span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-medium">
                  {rule.tag}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  #{rule.position} de {allRules.length}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {rule.title}
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {rule.summary}
              </p>

              <div className="text-xs text-muted-foreground/70 font-mono mt-0.5">
                Regra original em inglês:{' '}
                <a
                  href={`https://www.ui-skills.com/playbook/${rule.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-muted-foreground inline-flex items-center gap-1"
                >
                  <span>{rule.originalTitle}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Previous & Next Navigation Buttons */}
            <div className="flex items-center gap-2 self-start pt-1">
              <Link
                href={`/playbook/${prevRule.slug}`}
                aria-label={`Regra anterior: ${prevRule.title}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary/30 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                title={`Anterior: ${prevRule.title}`}
              >
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                href={`/playbook/${nextRule.slug}`}
                aria-label={`Próxima regra: ${nextRule.title}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary/30 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                title={`Próxima: ${nextRule.title}`}
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Interactive Client Component (Copy Markdown, Visual Stage if Monet, Rationale, Code) */}
          <RuleDetailClient rule={rule} />

          {/* Related Skills Section (1:1 UI-Skills Ecosystem) */}
          <div className="mt-14 pt-8 border-t border-border space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              Habilidades e Princípios Relacionados (UI Skills Ecosystem)
            </h3>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-3.5 rounded-lg border border-border bg-card">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xs">
                  UI
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-foreground">Improve UI</span>
                    <span className="text-[11px] text-muted-foreground">Design Skill</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Audita a superfície do produto contra evidências visuais de design, identifica problemas de layout e gera planos de implementação para agentes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg border border-border bg-card">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0 font-bold text-xs">
                  DS
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-foreground">Make Interfaces Feel Better</span>
                    <span className="text-[11px] text-muted-foreground">Design System</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Princípios de engenharia de design para polimento de micro-interações, tipografia, ritmo óptico e consistência de acabamento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Rule Quick Navigation Bar */}
          <div className="mt-8 flex items-center justify-between p-4 rounded-xl border border-border bg-secondary/20">
            <Link
              href="/playbook"
              className="text-xs font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Ver todas as 47 regras</span>
            </Link>

            <Link
              href={`/playbook/${nextRule.slug}`}
              className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
            >
              <span>Próxima: {nextRule.title}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

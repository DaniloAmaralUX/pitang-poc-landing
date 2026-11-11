import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PlaybookClient } from './playbook-client'
import { getAllRules, getCategories } from '@/lib/playbook-data'
import { Sparkles, ArrowRight, ShieldCheck, Terminal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Playbook de Usabilidade & Engenharia de Design | Pitang Labs',
  description:
    '47 regras essenciais de usabilidade, layout, tipografia, acessibilidade e micro-interações do UI Skills Playbook, adaptadas para engenharia de software com exportação em Markdown.',
}

export default function PlaybookPage() {
  const rules = getAllRules()
  const categories = getCategories()

  return (
    <div className="m-shell">
      <Navbar />

      <main className="min-h-screen">
        <div className="m-wrap border-x border-dashed border-t-0 min-h-screen relative px-4 sm:px-8 py-10 max-w-5xl mx-auto">
          {/* Breadcrumb Navigation */}
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

          {/* Header Section (1:1 UI Skills Playbook Layout) */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-3 h-3" /> Pitang Labs Design Engineering
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                • 47 Regras Práticas
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Playbook de Usabilidade & UI
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
              Catálogo completo de boas práticas, micro-interações e padrões de engenharia de design do ecossistema UI Skills. Copie diretrizes prontas em Markdown para suas IDEs (Cursor, Codex, Claude Code) com um clique.
            </p>
          </div>

          {/* IDE Simulation Quick Instruction Banner */}
          <div className="rounded-xl border border-dashed border-border bg-card/60 p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-primary shrink-0" />
              <span>
                <strong>Como usar no Cursor / Claude Code:</strong> Clique no botão <em>"Copiar Markdown"</em> de qualquer regra e cole nas regras da sua IDE ou no prompt para garantir interfaces consistentes e sem desvios.
              </span>
            </div>
            <Link
              href="/"
              className="font-medium text-primary hover:underline shrink-0 inline-flex items-center gap-1"
            >
              Abrir POC Simulator →
            </Link>
          </div>

          {/* Interactive Client Component with Filters & Grid */}
          <PlaybookClient initialRules={rules} categories={categories} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

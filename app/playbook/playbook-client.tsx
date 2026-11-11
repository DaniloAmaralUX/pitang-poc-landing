'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Copy, Check, FileText, Sparkles, Filter, X } from 'lucide-react'
import { PlaybookRule, getFullPlaybookMarkdown } from '@/lib/playbook-data'

interface PlaybookClientProps {
  initialRules: PlaybookRule[]
  categories: { id: string; label: string; count: number }[]
}

export function PlaybookClient({ initialRules, categories }: PlaybookClientProps) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)
  const [copiedAll, setCopiedAll] = useState(false)

  // Filter rules by search term and category
  const filteredRules = useMemo(() => {
    return initialRules.filter((rule) => {
      const matchesCategory =
        activeCategory === 'all' || rule.category === activeCategory

      if (!matchesCategory) return false

      if (!search.trim()) return true

      const query = search.toLowerCase()
      return (
        rule.title.toLowerCase().includes(query) ||
        rule.originalTitle.toLowerCase().includes(query) ||
        rule.summary.toLowerCase().includes(query) ||
        rule.tag.toLowerCase().includes(query) ||
        rule.categoryLabel.toLowerCase().includes(query) ||
        rule.rationale.toLowerCase().includes(query)
      )
    })
  }, [initialRules, activeCategory, search])

  // Copy single rule markdown
  const handleCopyRule = async (rule: PlaybookRule, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(rule.markdown)
      setCopiedSlug(rule.slug)
      setTimeout(() => setCopiedSlug(null), 2000)
    } catch {
      // fallback
      const textArea = document.createElement('textarea')
      textArea.value = rule.markdown
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopiedSlug(rule.slug)
      setTimeout(() => setCopiedSlug(null), 2000)
    }
  }

  // Copy entire playbook in markdown
  const handleCopyAll = async () => {
    try {
      const fullMd = getFullPlaybookMarkdown()
      await navigator.clipboard.writeText(fullMd)
      setCopiedAll(true)
      setTimeout(() => setCopiedAll(false), 2500)
    } catch {
      const fullMd = getFullPlaybookMarkdown()
      const textArea = document.createElement('textarea')
      textArea.value = fullMd
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopiedAll(true)
      setTimeout(() => setCopiedAll(false), 2500)
    }
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Top Controls: Search Bar, Category Filters & Copy All Action */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por regra, tag, propriedade ou palavra-chave..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-9 pr-9 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                title="Limpar busca"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Quick Action: Copy Full Playbook Markdown */}
          <button
            onClick={handleCopyAll}
            className={`inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg text-sm font-medium border transition-all ${
              copiedAll
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                : 'bg-foreground text-background hover:bg-foreground/90 border-transparent shadow-sm'
            }`}
            title="Copiar todas as 47 regras formatadas em Markdown para Cursor / Claude Code"
          >
            {copiedAll ? (
              <>
                <Check className="h-4 w-4 text-emerald-500" />
                <span>Playbook Completo Copiado! ✓</span>
              </>
            ) : (
              <>
                <FileText className="h-4 w-4" />
                <span>Copiar Playbook Completo (.md)</span>
              </>
            )}
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-foreground text-background shadow-xs'
                    : 'bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/60'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive
                      ? 'bg-background/20 text-background font-semibold'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Filter Summary */}
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
          <span>
            Mostrando <strong>{filteredRules.length}</strong> de <strong>{initialRules.length}</strong> regras
            {activeCategory !== 'all' && ` em "${categories.find(c => c.id === activeCategory)?.label}"`}
            {search && ` para "${search}"`}
          </span>

          {(activeCategory !== 'all' || search) && (
            <button
              onClick={() => {
                setActiveCategory('all')
                setSearch('')
              }}
              className="text-primary hover:underline font-medium"
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Rules Grid (1:1 UI-Skills Card Design) */}
      {filteredRules.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredRules.map((rule) => {
            const isCopied = copiedSlug === rule.slug

            return (
              <div
                key={rule.slug}
                className="group relative isolate flex flex-col justify-between gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/30 shadow-xs"
              >
                <div className="flex flex-col gap-2">
                  {/* Category & Tag badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                      {rule.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-medium">
                      {rule.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <Link
                    href={`/playbook/${rule.slug}`}
                    className="text-base font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between gap-2"
                  >
                    <span>{rule.title}</span>
                  </Link>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {rule.summary}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-border/50 flex items-center justify-between gap-2 mt-auto">
                  <button
                    type="button"
                    onClick={(e) => handleCopyRule(rule, e)}
                    className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md border transition-all ${
                      isCopied
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'bg-secondary/40 hover:bg-secondary text-muted-foreground hover:text-foreground border-border'
                    }`}
                    title="Copiar regra em Markdown para o clipboard"
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                        <span>Copiado! ✓</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copiar Markdown</span>
                      </>
                    )}
                  </button>

                  <Link
                    href={`/playbook/${rule.slug}`}
                    className="text-xs font-medium text-foreground hover:text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Ver Detalhes →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-border rounded-lg p-8">
          <p className="text-muted-foreground text-sm mb-3">
            Nenhuma regra encontrada com os termos selecionados.
          </p>
          <button
            onClick={() => {
              setActiveCategory('all')
              setSearch('')
            }}
            className="text-xs font-medium text-primary hover:underline"
          >
            Limpar busca e ver todas as 47 regras
          </button>
        </div>
      )}
    </div>
  )
}

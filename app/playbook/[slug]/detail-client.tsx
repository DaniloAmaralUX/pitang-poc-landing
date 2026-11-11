'use client'

import { useState } from 'react'
import { Copy, Check, Terminal, Code2 } from 'lucide-react'
import { PlaybookRule } from '@/lib/playbook-data'
import { PlaybookDemoRouter } from '@/components/playbook-demo-router'

interface DetailClientProps {
  rule: PlaybookRule
}

export function RuleDetailClient({ rule }: DetailClientProps) {
  const [copiedMd, setCopiedMd] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)

  const handleCopyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(rule.markdown)
      setCopiedMd(true)
      setTimeout(() => setCopiedMd(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = rule.markdown
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopiedMd(true)
      setTimeout(() => setCopiedMd(false), 2000)
    }
  }

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(rule.goodCode)
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = rule.goodCode
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    }
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Primary Action: Copy Rule Markdown Banner */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Terminal className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Diretriz Pronta para IDEs & Agentes
            </h3>
            <p className="text-xs text-muted-foreground">
              Copie o texto completo em Markdown para usar no Cursor, Claude Code ou no seu Design System.
            </p>
          </div>
        </div>

        <button
          onClick={handleCopyMarkdown}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border shadow-xs transition-all shrink-0 ${
            copiedMd
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold'
              : 'bg-foreground text-background hover:bg-foreground/90 border-transparent'
          }`}
          title="Copiar regra em Markdown"
        >
          {copiedMd ? (
            <>
              <Check className="h-4 w-4 text-emerald-500" />
              <span>Markdown Copiado! ✓</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copiar Regra em Markdown</span>
            </>
          )}
        </button>
      </div>

      {/* Interactive Visual Simulator (1:1 UI Skills Playbook Demo) */}
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Simulador Visual Interativo (Demo ao Vivo)
          </span>
          <span className="text-[11px] font-mono text-muted-foreground/70 hidden sm:inline">
            Alterne o switch para comparar antes e depois
          </span>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden rounded-xl border border-border bg-card shadow-xs min-h-[340px]">
          <PlaybookDemoRouter slug={rule.slug} />
        </div>
      </div>

      {/* Rationale & Detailed Technical Explanation */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
          <span>Por que aplicar essa regra (Rationale)</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {rule.rationale}
        </p>
      </div>

      {/* Comparison Grid: O que evitar vs O que fazer */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Bad Practice */}
        <div className="rounded-lg border border-red-500/20 bg-red-500/[0.03] p-4 flex flex-col justify-between gap-3">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-red-600 dark:text-red-400 uppercase tracking-wider">
              <span>❌ Evite</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/80">
              {rule.dontTip}
            </p>
          </div>
          <div className="rounded bg-black/5 dark:bg-black/30 border border-black/10 dark:border-white/10 p-2.5 font-mono text-xs text-red-700 dark:text-red-300 overflow-x-auto">
            <code>{rule.badCode}</code>
          </div>
        </div>

        {/* Good Practice */}
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03] p-4 flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <span>✅ Recomendado</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/80">
              {rule.doTip}
            </p>
          </div>
          <div className="rounded bg-black/5 dark:bg-black/30 border border-black/10 dark:border-white/10 p-2.5 font-mono text-xs text-emerald-700 dark:text-emerald-300 overflow-x-auto">
            <code>{rule.goodCode.split('\n')[0]}</code>
          </div>
        </div>
      </div>

      {/* Ready-to-use Implementation Code Block */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40 text-xs">
          <div className="flex items-center gap-2 text-foreground font-mono font-medium">
            <Code2 className="h-4 w-4 text-primary" />
            <span>Código de Implementação (Tailwind CSS)</span>
          </div>

          <button
            onClick={handleCopyCode}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground font-medium transition-colors"
            title="Copiar código"
          >
            {copiedCode ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copiado! ✓</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copiar Código</span>
              </>
            )}
          </button>
        </div>

        <pre className="p-4 bg-muted/20 font-mono text-xs sm:text-sm text-foreground overflow-x-auto leading-relaxed">
          <code>{rule.goodCode}</code>
        </pre>
      </div>

      {/* Cursor & Claude Prompt Snippet */}
      <div className="rounded-lg border border-dashed border-border bg-secondary/30 p-4 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-foreground">
          <Terminal className="h-3.5 w-3.5 text-primary" />
          <span>Atalho de Prompt para colar na sua IDE:</span>
        </div>
        <div className="rounded bg-background border border-border p-3 font-mono text-xs text-muted-foreground leading-relaxed select-all">
          Aplique a regra do Playbook "{rule.title}": {rule.summary} {rule.doTip}
        </div>
      </div>
    </div>
  )
}

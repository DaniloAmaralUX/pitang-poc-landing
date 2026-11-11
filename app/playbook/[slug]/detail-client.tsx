'use client'

import { useState } from 'react'
import { Copy, Check, Terminal, Code2, AlertTriangle, CheckCircle2, RotateCw } from 'lucide-react'
import { PlaybookRule } from '@/lib/playbook-data'

interface DetailClientProps {
  rule: PlaybookRule
}

export function RuleDetailClient({ rule }: DetailClientProps) {
  const [copiedMd, setCopiedMd] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)

  // Demo state for aspect ratio if applicable
  const [isAspect, setIsAspect] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [clsDetected, setClsDetected] = useState(false)

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

  const handleReplayMonet = () => {
    setIsLoading(true)
    setClsDetected(false)
    setTimeout(() => {
      setIsLoading(false)
      if (!isAspect) {
        setClsDetected(true)
      }
    }, 650)
  }

  const toggleMonetRatio = () => {
    const next = !isAspect
    setIsAspect(next)
    setIsLoading(true)
    setClsDetected(false)
    setTimeout(() => {
      setIsLoading(false)
      if (!next) {
        setClsDetected(true)
      }
    }, 650)
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

      {/* If this is the aspect ratio rule, include the interactive visual playground as a bonus */}
      {rule.slug === 'reserve-space-with-aspect-ratio' && (
        <div className="rounded-xl border border-border bg-card p-4 sm:p-8 flex flex-col items-center justify-center gap-6 shadow-xs">
          <div className="w-full flex items-center justify-between border-b border-border/50 pb-4">
            <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
              Simulador Visual Interativo (Monet)
            </span>

            {/* Toggle Controls */}
            <div className="flex items-center gap-3">
              <span className={`text-xs font-medium ${!isAspect ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                Sem ratio
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={isAspect}
                onClick={toggleMonetRatio}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isAspect ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                    isAspect ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-xs font-medium ${isAspect ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                Aspect ratio
              </span>

              {/* Replay Button */}
              <button
                type="button"
                onClick={handleReplayMonet}
                className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-secondary/50 text-foreground hover:bg-secondary transition-colors ml-1"
                title="Recarregar imagem e simular layout shift"
              >
                <RotateCw className={`h-3.5 w-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Visual Stage */}
          <div className="flex flex-col items-center">
            <div
              className={`relative transition-all duration-300 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 ${
                isAspect
                  ? 'aspect-3/4 w-[180px] sm:w-[220px] bg-muted/60'
                  : isLoading
                    ? 'h-[75px] w-[180px] sm:w-[220px] bg-muted/60'
                    : 'h-[275px] w-[180px] sm:w-[220px] bg-muted/60'
              }`}
            >
              {isLoading ? (
                <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground animate-pulse">
                  Carregando imagem...
                </div>
              ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/960px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg"
                  alt="Claude Monet - Impression, Sunrise"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <p className="mt-2.5 text-xs text-muted-foreground font-medium text-center">
              Impression, Sunrise <span className="text-[10px] text-muted-foreground/70">• Claude Monet (1872)</span>
            </p>
          </div>

          {/* Live CLS Badge */}
          {clsDetected ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 animate-in fade-in duration-300">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>⚠ CLS detectado! O conteúdo saltou ao carregar a imagem.</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>✔ CLS = 0.00 • Espaço 3:4 reservado (Zero Layout Shift)</span>
            </div>
          )}
        </div>
      )}

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

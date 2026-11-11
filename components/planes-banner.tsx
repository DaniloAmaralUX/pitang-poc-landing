import { ArrowRight } from 'lucide-react'

export function PlanesBanner() {
  return (
    <a
      href="https://github.com/DaniloAmaralUX/pitang-poc-simulator"
      target="_blank"
      rel="noopener noreferrer"
      className="m-wrap sticky top-0 z-[101] flex h-9 items-center justify-center gap-2 border-x border-b border-dashed border-border bg-background px-4 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      <span>
        ⚡ Pitang Labs Design Engineering — Novo:{' '}
        <span className="font-semibold text-foreground">Suporte a Claude Code & Codex</span> via{' '}
        <span className="font-mono text-[11px] bg-secondary/80 px-1.5 py-0.5 rounded border border-border">
          npx pitang-poc
        </span>
      </span>
      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
    </a>
  )
}

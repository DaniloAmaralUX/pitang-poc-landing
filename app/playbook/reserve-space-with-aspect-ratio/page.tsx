'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { RotateCw, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react'

export default function ReserveSpaceWithAspectRatioPage() {
  const [isAspect, setIsAspect] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [loadKey, setLoadKey] = useState(0)
  const [clsDetected, setClsDetected] = useState(false)

  const handleReplay = () => {
    setIsLoading(true)
    setClsDetected(false)
    setLoadKey((prev) => prev + 1)

    // Simulate network load latency
    setTimeout(() => {
      setIsLoading(false)
      if (!isAspect) {
        setClsDetected(true)
      }
    }, 650)
  }

  const toggleRatio = () => {
    const next = !isAspect
    setIsAspect(next)
    setIsLoading(true)
    setClsDetected(false)
    setLoadKey((prev) => prev + 1)
    setTimeout(() => {
      setIsLoading(false)
      if (!next) {
        setClsDetected(true)
      }
    }, 650)
  }

  const monetImgSrc =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/960px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg'

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
              <li>
                <Link href="/playbook" className="hover:text-foreground transition-colors">
                  Playbook
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-semibold truncate max-w-[240px] sm:max-w-none">
                Evite saltos de layout com aspect-ratio
              </li>
            </ol>
          </nav>

          {/* Title and Controls Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
            <div className="flex flex-col gap-2 max-w-2xl">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Evite saltos de layout com aspect-ratio
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Defina <code className="rounded bg-secondary/80 border border-border px-1.5 py-0.5 font-mono text-xs text-foreground">aspect-ratio</code> para que o conteúdo ao redor não salte enquanto uma imagem é carregada na tela.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2 self-start pt-1">
              <Link
                href="/playbook"
                aria-label="Voltar para a lista do playbook"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary/30 text-muted-foreground hover:bg-secondary/80 hover:text-foreground transition-colors"
                title="Voltar ao Playbook"
              >
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                href="/playbook"
                aria-label="Próxima regra de usabilidade"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary/30 text-muted-foreground hover:bg-secondary/80 hover:text-foreground transition-colors"
                title="Próxima Regra"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Interactive Playground Box */}
          <div className="relative w-full rounded-2xl border border-dashed border-border/80 bg-secondary/20 shadow-sm overflow-hidden p-6 sm:p-10 flex flex-col items-center justify-center min-h-[460px]">
            {/* Top-Right Control Bar */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-3 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/60">
              {/* Segmented Switch */}
              <div className="flex items-center gap-2 text-xs" role="group" aria-label="Controle de aspect ratio">
                <button
                  type="button"
                  onClick={() => isAspect && toggleRatio()}
                  className={`transition-colors whitespace-nowrap cursor-pointer ${
                    !isAspect ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Sem ratio
                </button>

                <button
                  type="button"
                  role="switch"
                  aria-checked={isAspect}
                  onClick={toggleRatio}
                  className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                    isAspect ? 'bg-foreground' : 'bg-secondary border border-border'
                  }`}
                  title="Alternar entre No ratio e Aspect ratio"
                >
                  <span
                    className={`block h-4 w-4 rounded-full bg-background shadow-xs transition-transform duration-200 ease-out ${
                      isAspect ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => !isAspect && toggleRatio()}
                  className={`transition-colors whitespace-nowrap cursor-pointer ${
                    isAspect ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Aspect ratio
                </button>
              </div>

              {/* Reload / Replay Button */}
              <button
                type="button"
                onClick={handleReplay}
                aria-label="Recarregar imagem para testar salto de layout"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground hover:bg-secondary transition-all active:scale-90 cursor-pointer"
                title="Recarregar para ver o efeito de carregamento"
              >
                <RotateCw className={`h-3.5 w-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>

            {/* Stage: Interactive Comparison */}
            <div className="w-full flex flex-col items-center justify-center transition-all duration-300">
              {/* Image Frame */}
              <div
                key={loadKey}
                className={`overflow-hidden rounded-xl border border-border/60 bg-muted/30 shadow-md transition-all duration-300 w-[180px] sm:w-[220px] ${
                  isAspect ? 'aspect-3/4' : isLoading ? 'h-[75px]' : 'h-[275px]'
                }`}
              >
                {isLoading ? (
                  <div className="w-full h-full bg-muted/60 animate-pulse flex items-center justify-center text-xs font-mono text-muted-foreground">
                    Carregando...
                  </div>
                ) : (
                  <img
                    src={monetImgSrc}
                    alt="Impression, Sunrise"
                    className="w-full h-full object-cover select-none"
                    loading="eager"
                  />
                )}
              </div>

              {/* Caption beneath image (Watch this move when no ratio is set!) */}
              <div className="mt-3 text-center transition-all duration-300">
                <p className="text-sm font-medium text-foreground tracking-tight">
                  Impression, Sunrise
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  Claude Monet, 1872
                </p>
              </div>

              {/* Visual CLS Feedback Pill */}
              <div className="mt-6 flex items-center justify-center">
                {isAspect ? (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>CLS = 0.00 • Espaço 3:4 reservado (Zero Layout Shift)</span>
                  </div>
                ) : clsDetected ? (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono animate-bounce">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    <span>CLS detectado! O conteúdo saltou ao carregar a imagem</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-border text-muted-foreground text-xs font-mono">
                    <span>Clique em ↻ para observar o salto de layout sem aspect-ratio</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Technical Implementation Code Card */}
          <div className="mt-12 rounded-xl border border-dashed border-border/80 bg-secondary/10 p-6">
            <h2 className="text-base font-semibold text-foreground mb-2">
              Como aplicar no seu código (Tailwind CSS)
            </h2>
            <p className="text-xs text-muted-foreground mb-4">
              Ao adicionar a classe <code>aspect-3/4</code> ou <code>aspect-square</code> juntamente com uma cor de fundo ou skeleton, o navegador aloca o espaço vertical exato antes mesmo dos primeiros bytes da imagem chegarem.
            </p>

            <pre className="p-4 rounded-lg bg-black/60 border border-border font-mono text-xs text-muted-foreground overflow-x-auto leading-relaxed">
{`<!-- ✅ Forma Correta: Espaço reservado, zero layout shift -->
<div class="aspect-3/4 w-[220px] overflow-hidden rounded-xl bg-muted">
  <img 
    src="monet.jpg" 
    alt="Impression, Sunrise" 
    class="w-full h-full object-cover" 
  />
</div>`}
            </pre>
          </div>

          {/* Related Skills Section */}
          <div className="mt-14 max-w-3xl">
            <h2 className="text-base font-semibold text-foreground mb-4">
              Habilidades Relacionadas (Related Skills)
            </h2>

            {/* ibelick skill card */}
            <a
              href="https://www.ui-skills.com/skills/ibelick/improve-ui"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 p-4 rounded-xl border border-dashed border-border/80 bg-secondary/20 hover:border-foreground/50 hover:bg-secondary/40 transition-all"
            >
              <img
                src="https://github.com/ibelick.png?size=160"
                alt="Avatar ibelick"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl border border-border object-cover shrink-0"
              />
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground group-hover:text-white transition-colors">
                    Improve UI
                  </span>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    @ibelick
                  </span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                  Audite a superfície do produto contra evidências de design, identifique problemas visuais verificados e resolva com precisão técnica.
                </p>
              </div>
            </a>

            {/* Tag pills row */}
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-2">
              {['Sistemas', 'Visual', 'Frontend', 'Arquitetura', 'Ferramentas', 'Artesanato', 'shadcn/ui', 'Cores'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full border border-border/60 bg-secondary/40 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  )
}

'use client'

import { CoverFlow, CoverFlowItem } from '@/components/coverflow'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import {
  Copy,
  Layers,
  Command,
  Zap,
  Smartphone,
  Moon,
  Plus,
  Star,
  CircleCheck,
  FlipVertical2,
  Volume2,
  Scaling,
  Monitor,
  Sparkles,
  Terminal,
  ExternalLink,
} from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState, useEffect } from 'react'
import { motion, type Variants } from 'motion/react'
import { HighlightWords } from '@/components/highlight-words'

const MotionLink = motion.create(Link)

const pocFlows: CoverFlowItem[] = [
  {
    id: 1,
    image: '/covers/cover-01.svg',
    title: '01 • Acesso Institucional Gov.br',
    subtitle: 'Autenticação em 2 Etapas • Biometria Facial • Nível Prata & Ouro',
  },
  {
    id: 2,
    image: '/covers/cover-02.svg',
    title: '02 • Nova Manifestação Preditiva',
    subtitle: 'Formulário Inteligente • Upload Drag & Drop • Sugestões com IA',
  },
  {
    id: 3,
    image: '/covers/cover-03.svg',
    title: '03 • Mesa de Triagem Kanban',
    subtitle: '3 Colunas Operacionais • SLA com Contagem Regressiva • Drag & Drop',
  },
  {
    id: 4,
    image: '/covers/cover-04.svg',
    title: '04 • Linha do Tempo & Protocolo',
    subtitle: 'Rastreabilidade Ponta a Ponta • QR Code Oficial de Autenticidade',
  },
  {
    id: 5,
    image: '/covers/cover-05.svg',
    title: '05 • Dashboard Executivo & KPIs',
    subtitle: 'Métricas em Tempo Real • Telemetria • Satisfação CSAT 94%',
  },
  {
    id: 6,
    image: '/covers/cover-06.svg',
    title: '06 • Emulador iOS Dynamic Island',
    subtitle: 'Viewport 390×844px • Status Bar 09:41 • Glass Tab Bar',
  },
  {
    id: 7,
    image: '/covers/cover-07.svg',
    title: '07 • Emulador Android Material 3',
    subtitle: 'Viewport 412×915px • Punch-Hole Central • Floating Action Button',
  },
  {
    id: 8,
    image: '/covers/cover-08.svg',
    title: '08 • Emulador Web Desktop 1280px',
    subtitle: 'Moldura macOS Traffic Lights • Omnibar • 3 Colunas Kanban Paralelas',
  },
  {
    id: 9,
    image: '/covers/cover-09.svg',
    title: '09 • Padrões Jakub Krehel & Emil',
    subtitle: 'Raios Concêntricos • Touch Targets 44px • Seletor Flutuante de Vidro',
  },
  {
    id: 10,
    image: '/covers/cover-10.svg',
    title: '10 • Claude Code & Codex CLI',
    subtitle: 'npx pitang-poc • Auto-Open Browser da IDE • Hot-Reload Instantâneo',
  },
]

export default function HomeClient({ faq }: { faq?: React.ReactNode }) {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'claude' | 'codex' | 'terminal'>('claude')
  const [itemSize, setItemSize] = useState({ width: 400, height: 400 })
  const [initialIndex, setInitialIndex] = useState(0)

  const installCommand = useMemo(() => {
    if (activeTab === 'claude') return 'npx pitang-poc'
    if (activeTab === 'codex') return 'npx pitang-poc'
    return 'npx pitang-poc'
  }, [activeTab])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (window.innerWidth < 768) {
          setItemSize({ width: 240, height: 240 })
        } else {
          setItemSize({ width: 400, height: 400 })
        }
      }, 100)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  const copyCommand = () => {
    navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      filter: 'blur(20px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <div className="m-shell">
      <Navbar />

      <main>
        <div className="m-wrap border-x border-dashed border-t-0 min-h-screen relative">
          <section className="relative pt-20 border-dashed border-border">
            <motion.div
              className="relative z-10 flex flex-col items-center text-center px-4"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Badge */}
              <motion.div variants={fadeUp} className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/40 backdrop-blur-sm transition-colors hover:bg-secondary/80 hover:border-border/80 cursor-default">
                  <span className="flex h-2 w-2 rounded-full bg-[#E30613]" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Pitang Labs • Design Engineering & IA
                  </span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1 variants={fadeUp} className="m-h1 mb-4 max-w-[22ch]">
                POC Simulator.
              </motion.h1>

              {/* Subtitle */}
              <motion.div variants={fadeUp} className="m-sub mb-8 max-w-[65ch]">
                Transforme requisitos em protótipos de alta fidelidade na sua IDE.
                <HighlightWords
                  text="Construído com física Motion, regras Jakub Krehel e suporte oficial a Claude Code e Codex."
                  highlights={['Motion', 'Jakub Krehel', 'Claude Code', 'Codex']}
                />
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col mb-8 items-center gap-8"
              >
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <MotionLink
                    className="m-btn m-btnPrimary"
                    href="https://github.com/DaniloAmaralUX/pitang-poc-simulator"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02, opacity: 0.9 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver no GitHub
                  </MotionLink>
                  <MotionLink
                    className="m-btn m-btnSecondary border border-border bg-background/50 hover:bg-secondary/50"
                    href="#demo"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explorar Fluxos ↓
                  </MotionLink>
                </div>
              </motion.div>

              {/* IDE Command Bar with Tabs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center border-y w-full border-dashed gap-3 py-4"
              >
                {/* Environment Tabs */}
                <div className="flex items-center gap-2 mb-1">
                  <button
                    onClick={() => setActiveTab('claude')}
                    className={`text-xs px-3 py-1 rounded-full border transition-all ${
                      activeTab === 'claude'
                        ? 'bg-foreground text-background font-semibold border-foreground'
                        : 'text-muted-foreground border-border/50 hover:border-border'
                    }`}
                  >
                    Claude Code
                  </button>
                  <button
                    onClick={() => setActiveTab('codex')}
                    className={`text-xs px-3 py-1 rounded-full border transition-all ${
                      activeTab === 'codex'
                        ? 'bg-foreground text-background font-semibold border-foreground'
                        : 'text-muted-foreground border-border/50 hover:border-border'
                    }`}
                  >
                    Codex
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`text-xs px-3 py-1 rounded-full border transition-all ${
                      activeTab === 'terminal'
                        ? 'bg-foreground text-background font-semibold border-foreground'
                        : 'text-muted-foreground border-border/50 hover:border-border'
                    }`}
                  >
                    Terminal / VS Code
                  </button>
                </div>

                {/* Command Snippet Button */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={copyCommand}
                  className="flex items-center gap-2.5 font-mono text-xs sm:text-sm px-4 py-2 rounded-lg bg-secondary/40 border border-border/60 hover:bg-secondary/70 transition-colors cursor-copy"
                  title="Clique para copiar o comando"
                >
                  {copied ? (
                    <CircleCheck className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="font-semibold text-foreground">{installCommand}</span>
                </motion.button>

                <p className="text-[11px] text-muted-foreground">
                  {copied ? '✓ Copiado para a área de transferência!' : 'Execute no chat da sua IDE para abrir o simulador automaticamente no navegador embutido.'}
                </p>
              </motion.div>
            </motion.div>
          </section>

          {/* 3D Cover Flow Carousel Showcase */}
          <div className="w-full border-dashed border-border/70 relative">
            <div
              className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 scroll-mt-28"
              id="demo"
            >
              <div className="text-center pt-10 pb-4">
                <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground">
                  Simulação Interativa de Fluxos
                </span>
                <h2 className="text-xl md:text-2xl font-bold mt-1 tracking-tight">
                  10 Telas & Archetypes Mapeados
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 54 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                onViewportEnter={() => {
                  setTimeout(() => {
                    setInitialIndex(4)
                  }, 1200)
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-[500px] sm:h-[620px] aspect-[16/9] md:aspect-[2/1] flex flex-col items-center justify-center"
              >
                <CoverFlow
                  items={pocFlows}
                  itemWidth={itemSize.width}
                  itemHeight={itemSize.height}
                  initialIndex={initialIndex}
                  enableClickToSnap={true}
                  className="w-full h-full z-10"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.2,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="hidden sm:block text-center mt-8 text-sm font-semibold text-foreground tracking-wide"
              >
                Arraste • Scroll Horizontal • Teclas ← → • Clique para Focar
              </motion.div>
            </div>
          </div>

          {/* Bento Grid Features */}
          <div className="py-20 relative m-sectionBorder border-top">
            <Plus className="m-plusIcon m-plusIcon-bl" />
            <Plus className="m-plusIcon m-plusIcon-br" />

            <div className="text-center mb-12 px-6">
              <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground">
                Arquitetura de Engenharia de Design
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mt-2 tracking-tight">
                Padrões Rigorosos em Cada Detalhe
              </h2>
            </div>

            <motion.div
              className="m-bentoGrid px-6 scroll-mt-32"
              id="features"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
            >
              {/* Feature 1 */}
              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardSmall flex flex-col justify-between overflow-hidden min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Layers className="h-24 w-24 md:h-32 md:w-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    Zero Layout Shift
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground font-medium tracking-wide opacity-90">
                    Transições fluidas com interpolação física em 60fps, sem saltos de layout durante navegação entre fluxos.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardSmall flex flex-col justify-between overflow-hidden min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Smartphone className="h-24 w-24 md:h-32 md:w-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    Multi-Breakpoints Nativos
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground font-medium tracking-wide opacity-90">
                    Emuladores fiéis de iOS (Dynamic Island), Android (Material 3 + FAB) e Desktop Web (1280px).
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardSmall flex flex-col justify-between overflow-hidden min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Terminal className="h-24 w-24 md:h-32 md:w-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    Claude Code & Codex First
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground font-medium tracking-wide opacity-90">
                    Um único comando abre a ferramenta direto no Simple Browser ou Webview da IDE da pessoa desenvolvedora.
                  </p>
                </div>
              </motion.div>

              {/* Feature 4 (Wide) */}
              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardWide flex flex-col justify-between overflow-hidden min-h-[280px] md:min-h-[320px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Zap className="h-[200px] w-[200px] md:h-[400px] md:w-[400px]" />
                </div>
                <div className="relative z-10">
                  <h3 className="m-bentoTitle">Regras de Usabilidade Jakub Krehel</h3>
                  <p className="m-bentoBody max-w-[45ch]">
                    Geometria concêntrica com compensação matemática de raio (R_outer = R_inner + padding), scale-on-press tátil de 0.96, alvos de toque de 44px e números tabulares para alinhamento perfeito.
                  </p>
                </div>
              </motion.div>

              {/* Feature 5 (Tall) */}
              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardTall flex flex-col justify-between overflow-hidden min-h-[280px] md:min-h-[320px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Command className="h-40 w-40" />
                </div>
                <div className="relative z-10">
                  <h3 className="m-bentoTitle">Emil Kowalski Prototype Picker</h3>
                  <p className="m-bentoBody">
                    Barra flutuante de vidro fosco com timing 250ms cubic-bezier(0.23, 1, 0.32, 1), atalhos de teclado 1-N, ← / → e R para recarregar.
                  </p>
                </div>
                <div className="flex justify-center gap-3 mt-6 opacity-80">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl border border-border bg-background/50 font-mono text-base shadow-sm">
                    1
                  </div>
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl border border-border bg-background/50 font-mono text-base shadow-sm">
                    ←
                  </div>
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl border border-border bg-background/50 font-mono text-base shadow-sm">
                    →
                  </div>
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl border border-border bg-background/50 font-mono text-base shadow-sm">
                    R
                  </div>
                </div>
              </motion.div>

              {/* Feature 6 */}
              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardSmall flex flex-col justify-between overflow-hidden min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Sparkles className="h-24 w-24 md:h-32 md:w-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    Hot-Reload de Requisitos
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground font-medium tracking-wide opacity-90">
                    Altere as regras de negócio em Markdown ou pelo chat da IDE e veja a POC atualizar instantaneamente.
                  </p>
                </div>
              </motion.div>

              {/* Feature 7 */}
              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardSmall flex flex-col justify-between overflow-hidden min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Volume2 className="h-24 w-24 md:h-32 md:w-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    Spatial Audio & Ticks
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground font-medium tracking-wide opacity-90">
                    Feedback tátil e sonoro sintetizado em tempo real via Web Audio API, sem carregar arquivos de áudio pesados.
                  </p>
                </div>
              </motion.div>

              {/* Feature 8 */}
              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardSmall flex flex-col justify-between overflow-hidden min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Monitor className="h-24 w-24 md:h-32 md:w-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    Kanban & Dashboard
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground font-medium tracking-wide opacity-90">
                    Mesa de triagem com 3 colunas paralelas no desktop e gráficos de telemetria integrados na mesma interface.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Pitang Labs Sponsoring & Open Source section */}
          <motion.div
            className="py-16 relative border-dashed border-border/70 scroll-mt-32"
            id="support"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="max-w-xl mx-auto px-6 text-center">
              <motion.div variants={fadeUp} className="flex justify-center mb-4">
                <div className="h-12 w-12 rounded-2xl bg-[#E30613]/15 border border-[#E30613]/30 flex items-center justify-center text-[#E30613] font-black text-xl">
                  P
                </div>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-2xl md:text-3xl font-semibold tracking-tight mb-4"
              >
                Pitang Labs Design Engineering
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-base text-muted-foreground leading-relaxed mb-8 text-balance"
              >
                Iniciativa aberta para conectar requisitos de negócio, inteligência artificial e excelência de interface no fluxo de desenvolvimento.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex items-center justify-center gap-3"
              >
                <Link
                  href="https://github.com/DaniloAmaralUX/pitang-poc-simulator"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform active:scale-[0.98] hover:opacity-90"
                >
                  <Star className="h-4 w-4 fill-current" />
                  Repositório GitHub
                </Link>
              </motion.div>
            </div>

            <Plus className="m-plusIcon m-plusIcon-bl" />
            <Plus className="m-plusIcon m-plusIcon-br" />
          </motion.div>

          {faq}

          <Footer />
        </div>
      </main>
    </div>
  )
}

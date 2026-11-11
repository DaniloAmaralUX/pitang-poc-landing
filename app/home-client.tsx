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
  Laptop,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState, useEffect } from 'react'
import { motion, type Variants } from 'motion/react'
import { HighlightWords } from '@/components/highlight-words'

const MotionLink = motion.create(Link)

const albums: CoverFlowItem[] = [
  {
    id: 'playbook',
    image: '/covers/cover-playbook.svg',
    title: 'Playbook',
    subtitle: 'Playbook de UI • Padrões e Regras de Usabilidade',
    href: '/playbook',
    badge: 'Disponível',
  },
  {
    id: 'skills',
    image: '/covers/cover-skills.svg',
    title: 'Skills',
    subtitle: 'Em breve',
    badge: 'Em breve',
  },
  {
    id: 'agentes',
    image: '/covers/cover-agentes.svg',
    title: 'Agentes',
    subtitle: 'Em breve',
    badge: 'Em breve',
  },
  {
    id: 'themes',
    image: '/covers/cover-themes.svg',
    title: 'Themes',
    subtitle: 'Em breve',
    badge: 'Em breve',
  },
  {
    id: 'presets',
    image: '/covers/cover-presets.svg',
    title: 'Presets',
    subtitle: 'Em breve',
    badge: 'Em breve',
  },
  {
    id: 'templates',
    image: '/covers/cover-templates.svg',
    title: 'Templates',
    subtitle: 'Em breve',
    badge: 'Em breve',
  },
]

export default function HomeClient({ faq }: { faq?: React.ReactNode }) {
  const [copied, setCopied] = useState(false)
  const [itemSize, setItemSize] = useState({ width: 400, height: 400 })
  const [initialIndex] = useState(0)
  const installCommand = useMemo(
    () => 'npx pitang-poc',
    [],
  )

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
              className="relative z-10 flex flex-col items-center text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/40 backdrop-blur-sm transition-colors hover:bg-secondary/80 hover:border-border/80 cursor-default">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-[#E30613]" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Pitang Labs • Design Engineering
                  </span>
                </div>
              </motion.div>
              <motion.h1 variants={fadeUp} className="m-h1 mb-4 max-w-[20ch]">
                Design.
              </motion.h1>

              <motion.div variants={fadeUp} className="m-sub mb-8 max-w-[60ch]">
                Fluid, physical motion with zero layout shifts.
                <HighlightWords
                  text="Built for Claude Code and Codex with Motion and Tailwind."
                  highlights={['Claude Code', 'Codex', 'Motion', 'Tailwind']}
                />
              </motion.div>

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
                    Get Started
                  </MotionLink>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center border-y w-full border-dashed gap-2 py-4"
              >
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={copyCommand}
                  className=" flex gap-2 flex-row font-mono text-xs cursor-copy"
                >
                  {copied ? (
                    <CircleCheck className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {installCommand}
                </motion.button>
              </motion.div>
            </motion.div>
          </section>

          <div className="w-full border-dashed border-border/70 relative">
            <div
              className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 scroll-mt-28"
              id="demo"
            >
              <motion.div
                initial={{ opacity: 0, y: 54 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-[500px] sm:h-[620px] aspect-[16/9] md:aspect-[2/1] flex flex-col items-center justify-center"
              >
                <CoverFlow
                  items={albums}
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
                Horizontal Scroll • Drag • Keyboard
              </motion.div>
            </div>
          </div>

          {/* Section Ferramentas */}
          <div
            className="py-20 relative m-sectionBorder border-top scroll-mt-28"
            id="ferramentas"
          >
            <Plus className="m-plusIcon m-plusIcon-bl" />
            <Plus className="m-plusIcon m-plusIcon-br" />

            <div className="max-w-[1200px] mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
                className="flex flex-col items-center text-center mb-14"
              >
                <motion.div variants={fadeUp} className="mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/60 border border-border/60 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Ecossistema Pitang Labs
                  </div>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                >
                  Ferramentas & Plataformas
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="text-base text-muted-foreground max-w-[55ch] leading-relaxed"
                >
                  Soluções integradas de design engineering para prototipagem rápida, catálogo de regras e validação na IDE.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Prototype Viewer Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-2xl border border-border/80 bg-gradient-to-b from-card/90 via-card/50 to-background/80 p-7 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          <Laptop className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                          Ferramenta Oficial
                        </span>
                      </div>
                      <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                        Disponível
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight mb-2 flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                      Prototype Viewer
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
                      Apresentador de protótipos funcionais HTML gerados diretamente pelo chat da IDE. Visualize fluxos completos com molduras de dispositivos (iOS, Android, Web), alternância de temas, notas de design e validação interativa.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs font-mono text-muted-foreground">
                        Single-file HTML
                      </span>
                      <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs font-mono text-muted-foreground">
                        Multi-Device Shells
                      </span>
                      <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs font-mono text-muted-foreground">
                        Sem Dependências
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50">
                    <Link
                      href="/prototype-viewer"
                      target="_blank"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 text-sm font-semibold transition-all shadow-md shadow-emerald-900/20 active:scale-[0.98]"
                    >
                      <span>Abrir Prototype Viewer</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="https://github.com/DaniloAmaralUX/pitang-prototype-viewer"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border/80 bg-secondary/50 hover:bg-secondary px-4 text-sm font-medium transition-colors"
                    >
                      <span>GitHub</span>
                    </Link>
                  </div>
                </motion.div>

                {/* Playbook Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative rounded-2xl border border-border/80 bg-gradient-to-b from-card/90 via-card/50 to-background/80 p-7 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                          Catálogo Interativo
                        </span>
                      </div>
                      <span className="rounded-full bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 text-xs font-medium text-purple-300">
                        47 Regras Ativas
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight mb-2 flex items-center gap-2 group-hover:text-purple-300 transition-colors">
                      Playbook de Usabilidade
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
                      Diretrizes práticas de interface divididas em 6 categorias (Layout, Tipografia, Acessibilidade, Movimento, Interação e Cores). Acompanha simuladores visuais ao vivo e cópia com um clique para seu agente de IA.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs font-mono text-muted-foreground">
                        Simuladores Ao Vivo
                      </span>
                      <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs font-mono text-muted-foreground">
                        Prompts em Markdown
                      </span>
                      <span className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs font-mono text-muted-foreground">
                        Física Spring
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50">
                    <Link
                      href="/playbook"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white px-5 text-sm font-semibold transition-all shadow-md shadow-purple-900/20 active:scale-[0.98]"
                    >
                      <span>Acessar Playbook</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/#demo"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border/80 bg-secondary/50 hover:bg-secondary px-4 text-sm font-medium transition-colors"
                    >
                      <span>Ver no Carrossel</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="py-20 relative m-sectionBorder border-top">
            <Plus className="m-plusIcon m-plusIcon-bl" />
            <Plus className="m-plusIcon m-plusIcon-br" />

            <motion.div
              className="m-bentoGrid px-6 scroll-mt-32"
              id="features"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
            >
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
                    Isolated transforms ensure the surrounding layout never jumps.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardSmall flex flex-col justify-between overflow-hidden min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Smartphone className="h-24 w-24 md:h-32 md:w-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    Multi-Breakpoints
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground font-medium tracking-wide opacity-90">
                    iOS (Dynamic Island), Android (Material 3) and Desktop Web.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardSmall flex flex-col justify-between overflow-hidden min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Moon className="h-24 w-24 md:h-32 md:w-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    Dark Mode Native
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground font-medium tracking-wide opacity-90">
                    Optimized for deep blacks and vibrant highlights.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardWide flex flex-col justify-between overflow-hidden min-h-[280px] md:min-h-[320px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Zap className="h-[200px] w-[200px] md:h-[400px] md:w-[400px]" />
                </div>
                <div className="relative z-10">
                  <h3 className="m-bentoTitle">Fluid Physics Engine</h3>
                  <p className="m-bentoBody max-w-[40ch]">
                    Driven by real-time spring physics, not linear timelines.
                    The motion feels weighty, responsive, and interruptible at
                    any frame.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardTall flex flex-col justify-between overflow-hidden min-h-[280px] md:min-h-[320px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Command className="h-40 w-40" />
                </div>
                <div className="relative z-10">
                  <h3 className="m-bentoTitle">Keyboard First</h3>
                  <p className="m-bentoBody">
                    Fully accessible with arrow key navigation and focus
                    management.
                  </p>
                </div>
                <div className="flex justify-center gap-3 mt-6 opacity-80">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl border border-border bg-background/50 font-mono text-base shadow-sm">
                    ←
                  </div>
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl border border-border bg-background/50 font-mono text-base shadow-sm">
                    →
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardSmall flex flex-col justify-between overflow-hidden min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <FlipVertical2 className="h-24 w-24 md:h-32 md:w-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    Signature Reflections
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground font-medium tracking-wide opacity-90">
                    The iconic mirrored-floor effect, one prop away. Tuned per
                    browser for smooth performance.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardSmall flex flex-col justify-between overflow-hidden min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Volume2 className="h-24 w-24 md:h-32 md:w-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    Spatial Audio
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground font-medium tracking-wide opacity-90">
                    Velocity-aware ticks pan across the stereo field as covers
                    pass. Synthesized live — no sound files.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="m-bentoCard m-bentoCardSmall flex flex-col justify-between overflow-hidden min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                  <Scaling className="h-24 w-24 md:h-32 md:w-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">
                    Usability Standards
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground font-medium tracking-wide opacity-90">
                    Concentric border radii, 44px touch targets and tabular numbers.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="py-16 relative border-dashed border-border/70 scroll-mt-32"
            id="support"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="max-w-xl mx-auto px-6 text-center">
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
                Open source initiative to transform business rules into interactive prototypes in your IDE.
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
                  GitHub Repository
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

'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { Plus, Star } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://api.github.com/repos/DaniloAmaralUX/pitang-poc-simulator')
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <motion.header
      className="m-nav m-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="m-navSurface">
        <div className="m-navInner px-4">
          <Link href="/" className="m-navBrand flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E30613] text-white font-black text-sm shadow-sm">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight leading-none">Pitang Labs</span>
              <span className="text-[10px] text-muted-foreground font-mono leading-tight">POC Simulator</span>
            </div>
          </Link>

          <nav className="m-navLinks" aria-label="Primary">
            <Link className="m-navLink" href="/#demo">
              Fluxos
            </Link>
            <Link className="m-navLink" href="/#features">
              Recursos
            </Link>
            <Link
              className="m-navLink"
              href="https://github.com/DaniloAmaralUX/pitang-poc-simulator#readme"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </Link>
          </nav>

          <div className="m-navRight">
            <div className="rounded-full border border-border/60 bg-secondary/50 px-2.5 py-1 text-xs font-medium tabular-nums">
              <Link
                className="m-navLink flex items-center gap-1.5"
                href="https://github.com/DaniloAmaralUX/pitang-poc-simulator"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repository"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2z" />
                </svg>
                <span className="hidden sm:inline font-semibold">GitHub</span>
                {stars !== null ? (
                  <motion.span
                    key={stars}
                    initial={{ opacity: 0, y: -4, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex items-center gap-1 ps-1 text-xs font-medium tabular-nums"
                  >
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {stars.toLocaleString()}
                  </motion.span>
                ) : (
                  <span className="inline-flex items-center gap-1 ps-1 text-xs font-medium">
                    <Star className="w-3.5 h-3.5" />
                  </span>
                )}
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  )
}

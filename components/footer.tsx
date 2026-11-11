'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

export function Footer() {
  return (
    <motion.footer
      className="m-foot border-t border-b border-dashed border-border/70 relative mb-4"
      aria-label="Footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="m-footInner px-6 flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
        <div className="text-sm font-medium flex flex-wrap gap-1.5 items-center justify-center sm:justify-start">
          <span>Criado por</span>
          <span className="text-[#E30613] font-bold">Pitang Labs</span>
          <span>· Hospedado na</span>
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 font-semibold hover:underline"
          >
            Vercel
          </a>
          <span>· Padrões</span>
          <span className="text-foreground font-semibold">Jakub Krehel & Emil Kowalski</span>
          <span>· Código aberto no</span>
          <a
            href="https://github.com/DaniloAmaralUX/pitang-poc-simulator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 font-semibold hover:underline"
          >
            GitHub
          </a>
        </div>
        <div className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Pitang Labs
        </div>
      </div>
    </motion.footer>
  )
}

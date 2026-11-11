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
      <div className="m-footInner px-6 flex items-center justify-between">
        <div className="text-sm font-medium flex flex-wrap gap-1">
          <span>Built by</span>
          <span className="text-foreground font-semibold">
            Pitang Labs
          </span>
          <span>· Hosted on</span>
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 font-semibold hover:underline"
          >
            Vercel
          </a>
          <span>· Open Source on</span>
          <a
            href="https://github.com/DaniloAmaralUX/pitang-poc-simulator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 font-semibold hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

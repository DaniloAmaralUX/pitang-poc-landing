import { PlanesBanner } from '@/components/planes-banner'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const SITE_URL = 'https://pitang-poc-landing.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Pitang Labs — Design Engineering & Usabilidade',
    template: '%s · Pitang Labs',
  },
  description:
    'Iniciativa de engenharia de design e usabilidade da Pitang Labs. Padrões de interface, componentes com Motion e catálogo com 47 regras práticas de usabilidade.',
  keywords: [
    'pitang-labs',
    'design engineering',
    'usabilidade',
    'playbook',
    'claude code',
    'codex',
    'design standards',
    'react coverflow',
    'motion',
    'tailwind',
  ],
  authors: [{ name: 'Pitang Labs', url: 'https://github.com/DaniloAmaralUX/pitang-poc-simulator' }],
  creator: 'Pitang Labs',
  publisher: 'Pitang Labs',
  category: 'technology',
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Pitang Labs — Design Engineering & Usabilidade',
    description:
      'Engenharia de design e padrões de usabilidade em alta fidelidade diretamente na sua IDE com Claude Code e Codex.',
    url: SITE_URL,
    siteName: 'Pitang Labs',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pitang Labs — Design Engineering',
    description:
      'Engenharia de design e padrões de usabilidade em alta fidelidade diretamente na sua IDE com Claude Code e Codex.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PlanesBanner />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

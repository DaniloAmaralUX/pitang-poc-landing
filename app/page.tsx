import type { Metadata } from 'next'
import { Plus } from 'lucide-react'
import HomeClient from './home-client'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

const faqs = [
  {
    question: 'What is Pitang Labs Design Engineering?',
    answer:
      'Pitang Labs Design Engineering is an open-source initiative that turns usability standards into interactive high-fidelity components directly in your IDE browser (Claude Code, Codex, Cursor, VS Code). Built with real spring physics instead of scripted timelines.',
  },
  {
    question: 'How do I run the tools in my IDE?',
    answer:
      'Run the CLI command — npx pitang-poc — in your terminal or inside Claude Code / Codex chat. It starts the local server and automatically launches the IDE simple browser tab.',
  },
  {
    question: 'Does it support multiple breakpoints?',
    answer:
      'Yes. The interface provides 1:1 viewports for iOS (390×844px with Dynamic Island and Glass Tab Bar), Android (412×915px with Material 3 and FAB), and Desktop Web (1280px with macOS traffic lights and Kanban parallel view).',
  },
  {
    question: 'What design standards are enforced?',
    answer:
      'The output strictly adheres to Jakub Krehel usability rules (concentric border-radius Router = Rinner + P, minimum 44px touch targets, scale-on-press feedback 0.96 and tabular numbers) and Emil Kowalski prototype picker motions.',
  },
  {
    question: 'How do I update requirements in real-time?',
    answer:
      'You can describe requirements in Markdown or prompt in chat. The tool ingests requirements and rebuilds the design live via hot-reload without reloading your IDE window.',
  },
  {
    question: 'Is it free and open source?',
    answer:
      'Yes. Pitang Labs is MIT-licensed and open source on GitHub, free for personal and commercial projects.',
  },
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

function FaqSection() {
  return (
    <section
      id="faq"
      className="py-16 relative border-t border-dashed border-border/70 scroll-mt-32"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-center">
          Frequently asked questions
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-10 text-center text-balance">
          Everything about Pitang Labs design engineering standards and usability rules.
        </p>
        <div className="border-y border-dashed border-border/70 divide-y divide-dashed divide-border/70">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item group">
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none text-base font-semibold tracking-tight transition-colors hover:text-foreground/80 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-open:rotate-45" />
              </summary>
              <p className="pb-5 pr-8 text-[15px] leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <HomeClient faq={<FaqSection />} />
    </>
  )
}

"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { cn } from "@/lib/utils"

const faqData = {
  en: [
    {
      question: "What makes Spooned different from other dating apps?",
      answer: "Spooned focuses on quality over quantity. Every member is verified, and we combine app-based matching with curated real-life events to foster genuine connections in Switzerland.",
    },
    {
      question: "How does the verification process work?",
      answer: "Our verification process includes ID verification and a review of your profile to ensure authenticity. This creates a safe, trusted community of genuine singles.",
    },
    {
      question: "What types of events does Spooned organize?",
      answer: "We organize a variety of events including dinner gatherings, outdoor adventures, wine tastings, cultural experiences, and more. All events are designed to create comfortable settings for meaningful conversations.",
    },
    {
      question: "Is Spooned available outside of Switzerland?",
      answer: "Currently, Spooned is focused on the Swiss market to ensure a high-quality local experience. We plan to expand to other regions in the future.",
    },
    {
      question: "How much does Spooned cost?",
      answer: "Spooned offers both free and premium membership options. Basic features are free, while premium members get access to all events and advanced matching features.",
    },
    {
      question: "How can I become an event partner?",
      answer: "If you're interested in hosting events for Spooned members, visit our partner page to apply. We're always looking for quality venues and experiences.",
    },
  ],
  de: [
    {
      question: "Was unterscheidet Spooned von anderen Dating-Apps?",
      answer: "Spooned setzt auf Qualität statt Quantität. Jedes Mitglied wird verifiziert, und wir kombinieren App-basiertes Matching mit kuratierten Events, um echte Verbindungen in der Schweiz zu fördern.",
    },
    {
      question: "Wie funktioniert der Verifizierungsprozess?",
      answer: "Unser Verifizierungsprozess umfasst eine ID-Überprüfung und eine Prüfung Ihres Profils, um Authentizität zu gewährleisten. So entsteht eine sichere Community echter Singles.",
    },
    {
      question: "Welche Arten von Events organisiert Spooned?",
      answer: "Wir organisieren verschiedene Events wie Dinner, Outdoor-Abenteuer, Weinverkostungen, kulturelle Erlebnisse und mehr. Alle Events sind darauf ausgelegt, angenehme Settings für bedeutungsvolle Gespräche zu schaffen.",
    },
    {
      question: "Ist Spooned auch ausserhalb der Schweiz verfügbar?",
      answer: "Derzeit konzentriert sich Spooned auf den Schweizer Markt, um ein hochwertiges lokales Erlebnis zu gewährleisten. Eine Expansion in andere Regionen ist für die Zukunft geplant.",
    },
    {
      question: "Wie viel kostet Spooned?",
      answer: "Spooned bietet sowohl kostenlose als auch Premium-Mitgliedschaften an. Basisfunktionen sind kostenlos, Premium-Mitglieder erhalten Zugang zu allen Events und erweiterten Matching-Funktionen.",
    },
    {
      question: "Wie kann ich Event-Partner werden?",
      answer: "Wenn Sie Events für Spooned-Mitglieder veranstalten möchten, besuchen Sie unsere Partner-Seite, um sich zu bewerben. Wir sind immer auf der Suche nach hochwertigen Locations und Erlebnissen.",
    },
  ],
}

export function FAQSection() {
  const { locale } = useLocale()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = faqData[locale]

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {locale === "en" ? "Frequently Asked Questions" : "Häufig gestellte Fragen"}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {locale === "en" 
              ? "Everything you need to know about Spooned" 
              : "Alles, was Sie über Spooned wissen müssen"}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )} 
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

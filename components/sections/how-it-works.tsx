"use client"

import { useLocale } from "@/lib/locale-context"

export function HowItWorksSection() {
  const { t } = useLocale()

  const steps = [
    {
      number: "01",
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
    },
    {
      number: "02",
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
    },
    {
      number: "03",
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
    },
    {
      number: "04",
      title: t.howItWorks.step4Title,
      description: t.howItWorks.step4Desc,
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
            STEP BY STEP
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-5xl md:text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute right-0 top-1/2 w-6 h-px bg-border translate-x-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

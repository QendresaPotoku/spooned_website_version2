"use client"

import { Sparkles, Map, MessageCircle, ShieldCheck, Lock, Users } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

export function FeaturesSection() {
  const { t } = useLocale()

  const features = [
    {
      icon: Sparkles,
      title: t.features.feature1Title,
      description: t.features.feature1Desc,
    },
    {
      icon: Map,
      title: t.features.feature2Title,
      description: t.features.feature2Desc,
    },
    {
      icon: MessageCircle,
      title: t.features.feature3Title,
      description: t.features.feature3Desc,
    },
    {
      icon: ShieldCheck,
      title: t.features.feature4Title,
      description: t.features.feature4Desc,
    },
    {
      icon: Lock,
      title: t.features.feature5Title,
      description: t.features.feature5Desc,
    },
    {
      icon: Users,
      title: t.features.feature6Title,
      description: t.features.feature6Desc,
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
            FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.features.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

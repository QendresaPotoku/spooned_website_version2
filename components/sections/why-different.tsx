"use client"

import { useLocale } from "@/lib/locale-context"
import { useEffect, useRef, useState } from "react"
import { Frown, Brain, ShieldCheck, Heart } from "lucide-react"

export function WhyDifferentSection() {
  const { t } = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Frown,
      title: t.whyDifferent.tiredTitle,
      description: t.whyDifferent.tiredDesc,
      color: "bg-amber-500/10 text-amber-500",
    },
    {
      icon: Brain,
      title: t.whyDifferent.patternsTitle,
      description: t.whyDifferent.patternsDesc,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: ShieldCheck,
      title: t.whyDifferent.noFakeTitle,
      description: t.whyDifferent.noFakeDesc,
      color: "bg-emerald-500/10 text-emerald-500",
    },
    {
      icon: Heart,
      title: t.whyDifferent.accompanyTitle,
      description: t.whyDifferent.accompanyDesc,
      color: "bg-primary/10 text-primary",
    },
  ]

  return (
    <section ref={sectionRef} id="why-different" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group bg-card rounded-3xl border border-border p-8 md:p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

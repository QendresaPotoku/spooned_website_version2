"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { useEffect, useRef, useState } from "react"
import { Apple, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EventsCtaSection() {
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

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-primary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <div 
            className={`mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
              {t.eventsCta.title}
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              {t.eventsCta.titleHighlight}
            </h2>
          </div>

          <p 
            className={`text-xl md:text-2xl text-muted-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t.eventsCta.subtitle}
          </p>

          <p 
            className={`text-lg text-muted-foreground mb-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t.eventsCta.description}
          </p>

          {/* CTA Section */}
          <div 
            className={`bg-card rounded-3xl border border-border p-8 md:p-12 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">{t.eventsCta.cta}</span>
            </div>
            <p className="text-muted-foreground mb-8">
              {t.eventsCta.ctaSubtitle}
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 px-8 rounded-xl bg-foreground hover:bg-foreground/90 text-background"
              >
                <Link href="#" className="flex items-center gap-3">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-70">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 px-8 rounded-xl bg-foreground hover:bg-foreground/90 text-background"
              >
                <Link href="#" className="flex items-center gap-3">
                  <Play className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-70">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Download spooned now and start your first intentional match.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

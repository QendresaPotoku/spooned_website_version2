"use client"

import { useLocale } from "@/lib/locale-context"
import { useEffect, useRef, useState } from "react"
import { Target, Smartphone, Heart } from "lucide-react"

export function AboutSection() {
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
    <section ref={sectionRef} id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Our Goal Section */}
        <div 
          className={`max-w-4xl mx-auto text-center mb-24 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            {t.ourGoal.subtitle}
          </span>
          <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-medium leading-relaxed">
            {t.ourGoal.description}
          </p>
        </div>

        {/* Not in the mood Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div 
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                {t.about.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
            </div>

            {/* Right - Visual */}
            <div 
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 md:p-12 border border-primary/10">
                  <div className="space-y-6">
                    {/* Feature Items */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Real Encounters</h4>
                        <p className="text-sm text-muted-foreground">No endless swiping, just genuine connections</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Conscious Singles</h4>
                        <p className="text-sm text-muted-foreground">Meet people who share your values</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Time Well Spent</h4>
                        <p className="text-sm text-muted-foreground">Every event is designed to be meaningful</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

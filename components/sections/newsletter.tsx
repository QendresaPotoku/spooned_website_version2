"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLocale } from "@/lib/locale-context"
import { Send, Check } from "lucide-react"

export function NewsletterSection() {
  const { t } = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section ref={sectionRef} id="newsletter" className="relative overflow-hidden py-20 md:py-32 bg-secondary/60">
      <div
        className="absolute inset-0 bg-no-repeat opacity-25 pointer-events-none"
        style={{
          backgroundImage: "url('/04.svg')",
          backgroundPosition: "left bottom",
          backgroundSize: "120% auto",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div 
            className={`text-center mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.newsletter.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.newsletter.subtitle}
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className={`relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 backdrop-blur-sm p-6 md:p-8 space-y-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-4">
              <Input
                type="text"
                placeholder={t.newsletter.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-14 rounded-xl border-border bg-background/70 px-5 text-base"
                required
              />
              <Input
                type="email"
                placeholder={t.newsletter.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-14 rounded-xl border-border bg-background/70 px-5 text-base"
                required
              />
              <Input
                type="date"
                placeholder={t.newsletter.dateOfBirth}
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                className="h-14 rounded-xl border-border bg-background/70 px-5 text-base"
              />
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitted}
                className="h-14 w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-base font-medium"
              >
                {isSubmitted ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    {t.newsletter.submit}
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

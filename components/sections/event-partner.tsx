"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLocale } from "@/lib/locale-context"
import { Send, Check, Handshake } from "lucide-react"

export function EventPartnerSection() {
  const { t } = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    telephone: "",
    email: "",
    message: "",
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
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section ref={sectionRef} id="event-partner" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t.eventPartner.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.eventPartner.subtitle}
              </p>
            </div>

            {/* Right Column - Form */}
            <form 
              onSubmit={handleSubmit}
              className={`space-y-4 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Input
                type="text"
                placeholder={t.eventPartner.companyName}
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="h-14 rounded-xl border-border bg-card px-5 text-base"
              />
              <Input
                type="text"
                placeholder={t.eventPartner.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-14 rounded-xl border-border bg-card px-5 text-base"
                required
              />
              <Input
                type="tel"
                placeholder={t.eventPartner.telephone}
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                className="h-14 rounded-xl border-border bg-card px-5 text-base"
              />
              <Input
                type="email"
                placeholder={t.eventPartner.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-14 rounded-xl border-border bg-card px-5 text-base"
                required
              />
              <Textarea
                placeholder={t.eventPartner.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-32 rounded-xl border-border bg-card px-5 py-4 text-base resize-none"
              />
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitted}
                className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-base font-medium"
              >
                {isSubmitted ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Sent!
                  </>
                ) : (
                  <>
                    {t.eventPartner.submit}
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

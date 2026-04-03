"use client"

import { useLocale } from "@/lib/locale-context"
import { useEffect, useRef, useState } from "react"

const teamMembers = [
  {
    name: "Alban Nevzati",
    role: { en: "Banker, Entrepreneur, Numbers man", de: "Banker, Unternehmer, Zahlenspezialist" },
    bio: { 
      en: "Visions need substance and Alban delivers it. He ensures that spooned is not only a good concept, but also grows sustainably.", 
      de: "Visionen brauchen Substanz und Alban liefert sie. Er stellt sicher, dass spooned nicht nur ein gutes Konzept ist, sondern auch nachhaltig wächst." 
    },
    initials: "AN",
  },
  {
    name: "Larissa Cano",
    role: { en: "Couples & Psychotherapist, Relationship Professional, People Lover", de: "Paar- & Psychotherapeutin, Beziehungsexpertin, Menschenfreundin" },
    bio: { 
      en: "Relationships are no coincidence, they are the result of dynamics, patterns and decisions. Larissa decodes these and helps people to build real connections that last.", 
      de: "Beziehungen sind kein Zufall, sie sind das Ergebnis von Dynamiken, Mustern und Entscheidungen. Larissa entschlüsselt diese und hilft Menschen, echte Verbindungen aufzubauen, die halten." 
    },
    initials: "LC",
  },
  {
    name: "Adrian Cano",
    role: { en: "Dentist, Entrepreneur, Solution Finder", de: "Zahnarzt, Unternehmer, Lösungsfinder" },
    bio: { 
      en: "Thinking in terms of possibilities rather than boundaries. Adrian loves developing smart solutions and bringing people together. A creative mind with entrepreneurial drive and an eye for the essentials.", 
      de: "Denken in Möglichkeiten statt in Grenzen. Adrian liebt es, clevere Lösungen zu entwickeln und Menschen zusammenzubringen. Ein kreativer Kopf mit unternehmerischem Antrieb und Blick fürs Wesentliche." 
    },
    initials: "AC",
  },
]

export function TeamSection() {
  const { locale, t } = useLocale()
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
    <section ref={sectionRef} id="team" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
            OUR TEAM
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.team.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t.team.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Avatar */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl font-bold text-primary">
                    {member.initials}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4 leading-relaxed">
                  {member.role[locale]}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

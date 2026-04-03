"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export default function ContactPage() {
  const { locale, t } = useLocale()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
              CONTACT
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t.contact.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t.contact.description}
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {locale === "en" ? "Get in Touch" : "Kontaktieren Sie uns"}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {locale === "en" 
                    ? "Have questions about Spooned? Want to become an event partner? Or just want to say hello? We'd love to hear from you."
                    : "Haben Sie Fragen zu Spooned? Möchten Sie Event-Partner werden? Oder einfach Hallo sagen? Wir freuen uns von Ihnen zu hören."}
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:hello@spooned.ch" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@spooned.ch
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        {locale === "en" ? "Phone" : "Telefon"}
                      </h3>
                      <a 
                        href="tel:+41441234567" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +41 44 123 45 67
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        {locale === "en" ? "Address" : "Adresse"}
                      </h3>
                      <p className="text-muted-foreground">
                        Spooned AG<br />
                        Bahnhofstrasse 42<br />
                        8001 Zürich, Switzerland
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mt-10 p-6 bg-secondary/50 rounded-xl border border-border">
                  <h3 className="font-medium text-foreground mb-3">
                    {locale === "en" ? "Office Hours" : "Öffnungszeiten"}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>{locale === "en" ? "Monday - Friday" : "Montag - Freitag"}</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{locale === "en" ? "Saturday" : "Samstag"}</span>
                      <span>10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{locale === "en" ? "Sunday" : "Sonntag"}</span>
                      <span>{locale === "en" ? "Closed" : "Geschlossen"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl border border-border p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {locale === "en" ? "Message Sent!" : "Nachricht gesendet!"}
                    </h3>
                    <p className="text-muted-foreground">
                      {t.contact.form.success}
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-6 rounded-full"
                      onClick={() => setIsSubmitted(false)}
                    >
                      {locale === "en" ? "Send Another Message" : "Weitere Nachricht senden"}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-xl font-semibold text-foreground mb-6">
                      {locale === "en" ? "Send us a Message" : "Senden Sie uns eine Nachricht"}
                    </h2>
                    
                    <FieldGroup>
                      <Field>
                        <FieldLabel>{t.contact.form.name}</FieldLabel>
                        <Input 
                          type="text" 
                          placeholder={locale === "en" ? "John Doe" : "Max Mustermann"}
                          required 
                          className="rounded-lg"
                        />
                      </Field>

                      <Field>
                        <FieldLabel>{t.contact.form.email}</FieldLabel>
                        <Input 
                          type="email" 
                          placeholder="you@example.com"
                          required 
                          className="rounded-lg"
                        />
                      </Field>

                      <Field>
                        <FieldLabel>{t.contact.form.subject}</FieldLabel>
                        <Input 
                          type="text" 
                          placeholder={locale === "en" ? "How can we help?" : "Wie können wir helfen?"}
                          required 
                          className="rounded-lg"
                        />
                      </Field>

                      <Field>
                        <FieldLabel>{t.contact.form.message}</FieldLabel>
                        <Textarea 
                          placeholder={locale === "en" ? "Your message..." : "Ihre Nachricht..."}
                          required 
                          rows={5}
                          className="rounded-lg resize-none"
                        />
                      </Field>

                      <Button type="submit" className="w-full rounded-full">
                        <Send className="w-4 h-4 mr-2" />
                        {t.contact.form.submit}
                      </Button>
                    </FieldGroup>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

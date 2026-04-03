"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/lib/locale-context"

const imprintContent = {
  en: {
    sections: [
      {
        title: "Company Information",
        content: `**Spooned AG**
Bahnhofstrasse 42
8001 Zürich
Switzerland

Commercial Register: CHE-123.456.789
VAT Number: CHE-123.456.789 MWST`,
      },
      {
        title: "Contact",
        content: `**General Inquiries**
Email: hello@spooned.ch
Phone: +41 44 123 45 67

**Press & Media**
Email: press@spooned.ch

**Partnership Inquiries**
Email: partners@spooned.ch`,
      },
      {
        title: "Management",
        content: `**Board of Directors**
Anna Müller (Chairwoman)
Marc Weber

**Executive Management**
Anna Müller (CEO)
Marc Weber (CTO)`,
      },
      {
        title: "Legal Notice",
        content: `The content of this website has been compiled with meticulous care and to the best of our knowledge. However, we cannot assume any liability for the up-to-dateness, completeness, or accuracy of any of the pages.

Pursuant to Section 7, para. 1 of TMG (German Telemedia Act), we as service providers are liable for our own content on these pages in accordance with general laws. However, pursuant to Sections 8 to 10 of TMG, we as service providers are not under obligation to monitor external information provided or stored on our website.

Once we have become aware of a specific infringement of the law, we will immediately remove the content in question. Any liability concerning this matter can only be assumed from the point in time at which the infringement becomes known to us.`,
      },
      {
        title: "Copyright",
        content: `The content and works published on this website are governed by the copyright laws of Switzerland. Any duplication, processing, distribution, or any form of utilization beyond the scope of copyright law shall require the prior written consent of the author or authors in question.

Downloads and copies of this website are only permitted for private, non-commercial use.

The operators of this website make every effort to always respect the copyrights of others or to use their own or license-free works.`,
      },
      {
        title: "Liability for Links",
        content: `Our website contains links to external websites of third parties, the content of which we have no influence over. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.

The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent content control of the linked pages is not reasonable without concrete evidence of an infringement. If we become aware of any legal violations, we will remove such links immediately.`,
      },
      {
        title: "Data Protection Officer",
        content: `**Contact for Data Protection**
Email: privacy@spooned.ch

For detailed information about how we handle your personal data, please refer to our Privacy Policy.`,
      },
      {
        title: "Online Dispute Resolution",
        content: `The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr

Our email address can be found above in the imprint.

We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.`,
      },
    ],
  },
  de: {
    sections: [
      {
        title: "Firmeninformationen",
        content: `**Spooned AG**
Bahnhofstrasse 42
8001 Zürich
Schweiz

Handelsregister: CHE-123.456.789
UID-Nummer: CHE-123.456.789 MWST`,
      },
      {
        title: "Kontakt",
        content: `**Allgemeine Anfragen**
E-Mail: hello@spooned.ch
Telefon: +41 44 123 45 67

**Presse & Medien**
E-Mail: press@spooned.ch

**Partnerschaftsanfragen**
E-Mail: partners@spooned.ch`,
      },
      {
        title: "Geschäftsführung",
        content: `**Verwaltungsrat**
Anna Müller (Vorsitzende)
Marc Weber

**Geschäftsleitung**
Anna Müller (CEO)
Marc Weber (CTO)`,
      },
      {
        title: "Rechtliche Hinweise",
        content: `Der Inhalt dieser Website wurde mit grösster Sorgfalt und nach bestem Wissen erstellt. Wir können jedoch keine Haftung für die Aktualität, Vollständigkeit oder Richtigkeit der Seiten übernehmen.

Gemäss § 7 Abs. 1 TMG sind wir als Diensteanbieter für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.

Sobald wir von einer konkreten Rechtsverletzung Kenntnis erlangen, werden wir die betreffenden Inhalte umgehend entfernen. Eine diesbezügliche Haftung kann erst ab dem Zeitpunkt der Kenntnisnahme übernommen werden.`,
      },
      {
        title: "Urheberrecht",
        content: `Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem schweizerischen Urheberrecht. Jede Vervielfältigung, Bearbeitung, Verbreitung oder jede Form der Verwertung ausserhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Autors.

Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.

Die Betreiber dieser Website sind stets bemüht, die Urheberrechte anderer zu beachten oder auf eigene und lizenzfreie Werke zurückzugreifen.`,
      },
      {
        title: "Haftung für Links",
        content: `Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Daher können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.

Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstösse überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.`,
      },
      {
        title: "Datenschutzbeauftragter",
        content: `**Kontakt für Datenschutz**
E-Mail: privacy@spooned.ch

Für detaillierte Informationen darüber, wie wir mit Ihren persönlichen Daten umgehen, lesen Sie bitte unsere Datenschutzerklärung.`,
      },
      {
        title: "Online-Streitbeilegung",
        content: `Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr

Unsere E-Mail-Adresse finden Sie oben im Impressum.

Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`,
      },
    ],
  },
}

export default function ImpressumPage() {
  const { locale, t } = useLocale()
  const content = imprintContent[locale]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t.imprint.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-10">
                {content.sections.map((section) => (
                  <div key={section.title} className="bg-card rounded-xl border border-border p-6 md:p-8">
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-strong:text-foreground">
                      {section.content.split('\n\n').map((paragraph, i) => {
                        if (paragraph.startsWith('**') && paragraph.includes('**\n')) {
                          const lines = paragraph.split('\n')
                          return (
                            <div key={i} className="mb-4">
                              {lines.map((line, j) => {
                                if (line.startsWith('**')) {
                                  return <p key={j}><strong>{line.replace(/\*\*/g, '')}</strong></p>
                                }
                                return <p key={j} className="text-muted-foreground">{line}</p>
                              })}
                            </div>
                          )
                        }
                        return (
                          <p key={i} className="text-muted-foreground whitespace-pre-line">
                            {paragraph}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

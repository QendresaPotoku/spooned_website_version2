"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/lib/locale-context"

const privacyContent = {
  en: {
    lastUpdated: "January 1, 2024",
    sections: [
      {
        title: "1. Introduction",
        content: `Welcome to Spooned. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our app and tell you about your privacy rights and how the law protects you.

This privacy policy applies to information we collect when you use our website, mobile application, and services (collectively, the "Services").`,
      },
      {
        title: "2. Data We Collect",
        content: `We collect several types of information for various purposes to provide and improve our Services to you:

**Personal Data**
While using our Services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include:
- Email address
- First name and last name
- Phone number
- Profile photos
- Date of birth
- Location data
- Relationship preferences

**Usage Data**
We may also collect information about how the Services are accessed and used. This may include:
- Your device's IP address
- Browser type and version
- The pages you visit
- Time and date of your visit
- Time spent on pages
- Device identifiers`,
      },
      {
        title: "3. How We Use Your Data",
        content: `Spooned uses the collected data for various purposes:
- To provide and maintain our Services
- To notify you about changes to our Services
- To allow you to participate in interactive features
- To provide customer support
- To gather analysis to improve our Services
- To monitor the usage of our Services
- To detect, prevent, and address technical issues
- To match you with other users based on compatibility
- To verify user identities and prevent fraud`,
      },
      {
        title: "4. Data Retention",
        content: `We will retain your personal data only for as long as is necessary for the purposes set out in this privacy policy. We will retain and use your personal data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.

When you delete your account, we will delete your personal data within 30 days, except for data we are required to retain by law.`,
      },
      {
        title: "5. Data Security",
        content: `The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.

However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.`,
      },
      {
        title: "6. Your Rights",
        content: `Under Swiss data protection law and GDPR (where applicable), you have certain rights regarding your personal data:

- **Right to Access**: You can request copies of your personal data.
- **Right to Rectification**: You can request correction of inaccurate data.
- **Right to Erasure**: You can request deletion of your personal data.
- **Right to Restrict Processing**: You can request restriction of processing.
- **Right to Data Portability**: You can request transfer of your data.
- **Right to Object**: You can object to certain processing activities.

To exercise any of these rights, please contact us at privacy@spooned.ch.`,
      },
      {
        title: "7. Cookies",
        content: `We use cookies and similar tracking technologies to track activity on our Services and hold certain information.

Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.`,
      },
      {
        title: "8. Third-Party Services",
        content: `We may employ third-party companies and individuals to facilitate our Services, provide the Services on our behalf, perform service-related services, or assist us in analyzing how our Services are used.

These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.`,
      },
      {
        title: "9. Contact Us",
        content: `If you have any questions about this Privacy Policy, please contact us:

**Spooned AG**
Bahnhofstrasse 42
8001 Zürich, Switzerland

Email: privacy@spooned.ch
Phone: +41 44 123 45 67`,
      },
    ],
  },
  de: {
    lastUpdated: "1. Januar 2024",
    sections: [
      {
        title: "1. Einleitung",
        content: `Willkommen bei Spooned. Wir respektieren Ihre Privatsphäre und verpflichten uns, Ihre persönlichen Daten zu schützen. Diese Datenschutzerklärung informiert Sie darüber, wie wir mit Ihren persönlichen Daten umgehen, wenn Sie unsere Website besuchen oder unsere App nutzen.

Diese Datenschutzerklärung gilt für Informationen, die wir sammeln, wenn Sie unsere Website, mobile Anwendung und Dienste (zusammen die "Dienste") nutzen.`,
      },
      {
        title: "2. Daten, die wir erfassen",
        content: `Wir erfassen verschiedene Arten von Informationen für verschiedene Zwecke, um unsere Dienste für Sie bereitzustellen und zu verbessern:

**Personenbezogene Daten**
Bei der Nutzung unserer Dienste können wir Sie bitten, uns bestimmte personenbezogene Daten zur Verfügung zu stellen:
- E-Mail-Adresse
- Vor- und Nachname
- Telefonnummer
- Profilfotos
- Geburtsdatum
- Standortdaten
- Beziehungspräferenzen

**Nutzungsdaten**
Wir können auch Informationen darüber sammeln, wie auf die Dienste zugegriffen wird und wie sie genutzt werden:
- IP-Adresse Ihres Geräts
- Browsertyp und -version
- Die von Ihnen besuchten Seiten
- Datum und Uhrzeit Ihres Besuchs
- Auf Seiten verbrachte Zeit
- Gerätekennungen`,
      },
      {
        title: "3. Wie wir Ihre Daten verwenden",
        content: `Spooned verwendet die gesammelten Daten für verschiedene Zwecke:
- Um unsere Dienste bereitzustellen und zu pflegen
- Um Sie über Änderungen an unseren Diensten zu informieren
- Um Ihnen die Teilnahme an interaktiven Funktionen zu ermöglichen
- Um Kundensupport zu bieten
- Um Analysen zur Verbesserung unserer Dienste zu sammeln
- Um die Nutzung unserer Dienste zu überwachen
- Um technische Probleme zu erkennen, zu verhindern und zu beheben
- Um Sie mit anderen Nutzern basierend auf Kompatibilität zu verbinden
- Um Benutzeridentitäten zu verifizieren und Betrug zu verhindern`,
      },
      {
        title: "4. Datenspeicherung",
        content: `Wir bewahren Ihre personenbezogenen Daten nur so lange auf, wie es für die in dieser Datenschutzerklärung genannten Zwecke erforderlich ist. Wir bewahren Ihre personenbezogenen Daten auf und verwenden sie, soweit dies zur Erfüllung unserer rechtlichen Verpflichtungen, zur Beilegung von Streitigkeiten und zur Durchsetzung unserer rechtlichen Vereinbarungen erforderlich ist.

Wenn Sie Ihr Konto löschen, werden wir Ihre personenbezogenen Daten innerhalb von 30 Tagen löschen, mit Ausnahme von Daten, die wir gesetzlich aufbewahren müssen.`,
      },
      {
        title: "5. Datensicherheit",
        content: `Die Sicherheit Ihrer Daten ist uns wichtig. Wir setzen geeignete technische und organisatorische Massnahmen ein, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen.

Allerdings ist keine Methode der Übertragung über das Internet oder der elektronischen Speicherung zu 100% sicher. Obwohl wir uns bemühen, kommerziell akzeptable Mittel zum Schutz Ihrer personenbezogenen Daten zu verwenden, können wir deren absolute Sicherheit nicht garantieren.`,
      },
      {
        title: "6. Ihre Rechte",
        content: `Nach dem schweizerischen Datenschutzgesetz und der DSGVO (wo anwendbar) haben Sie bestimmte Rechte bezüglich Ihrer personenbezogenen Daten:

- **Auskunftsrecht**: Sie können Kopien Ihrer personenbezogenen Daten anfordern.
- **Recht auf Berichtigung**: Sie können die Korrektur ungenauer Daten verlangen.
- **Recht auf Löschung**: Sie können die Löschung Ihrer personenbezogenen Daten verlangen.
- **Recht auf Einschränkung der Verarbeitung**: Sie können die Einschränkung der Verarbeitung verlangen.
- **Recht auf Datenübertragbarkeit**: Sie können die Übertragung Ihrer Daten verlangen.
- **Widerspruchsrecht**: Sie können bestimmten Verarbeitungstätigkeiten widersprechen.

Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter privacy@spooned.ch.`,
      },
      {
        title: "7. Cookies",
        content: `Wir verwenden Cookies und ähnliche Tracking-Technologien, um die Aktivität auf unseren Diensten zu verfolgen und bestimmte Informationen zu speichern.

Cookies sind Dateien mit einer kleinen Datenmenge, die eine anonyme eindeutige Kennung enthalten können. Sie können Ihren Browser anweisen, alle Cookies abzulehnen oder anzuzeigen, wenn ein Cookie gesendet wird. Wenn Sie jedoch keine Cookies akzeptieren, können Sie möglicherweise einige Teile unserer Dienste nicht nutzen.`,
      },
      {
        title: "8. Drittanbieter-Dienste",
        content: `Wir können Drittunternehmen und Einzelpersonen einsetzen, um unsere Dienste zu erleichtern, die Dienste in unserem Namen bereitzustellen, dienstbezogene Dienste zu erbringen oder uns bei der Analyse der Nutzung unserer Dienste zu unterstützen.

Diese Dritten haben nur Zugang zu Ihren personenbezogenen Daten, um diese Aufgaben in unserem Auftrag auszuführen, und sind verpflichtet, sie nicht für andere Zwecke offenzulegen oder zu verwenden.`,
      },
      {
        title: "9. Kontakt",
        content: `Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte:

**Spooned AG**
Bahnhofstrasse 42
8001 Zürich, Schweiz

E-Mail: privacy@spooned.ch
Telefon: +41 44 123 45 67`,
      },
    ],
  },
}

export default function DatenschutzPage() {
  const { locale, t } = useLocale()
  const content = privacyContent[locale]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t.privacy.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.privacy.lastUpdated}: {content.lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-10">
                {content.sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
                      {section.content.split('\n\n').map((paragraph, i) => {
                        if (paragraph.startsWith('**') && paragraph.includes('**\n')) {
                          const [title, ...rest] = paragraph.split('\n')
                          return (
                            <div key={i}>
                              <p><strong>{title.replace(/\*\*/g, '')}</strong></p>
                              {rest.map((line, j) => (
                                <p key={j}>{line.replace(/^- /, '• ')}</p>
                              ))}
                            </div>
                          )
                        }
                        if (paragraph.startsWith('- ')) {
                          const items = paragraph.split('\n')
                          return (
                            <ul key={i} className="list-disc pl-6 space-y-2">
                              {items.map((item, j) => (
                                <li key={j}>{item.replace(/^- /, '').replace(/\*\*/g, '')}</li>
                              ))}
                            </ul>
                          )
                        }
                        return <p key={i}>{paragraph}</p>
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

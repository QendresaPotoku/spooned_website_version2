export type Locale = "en" | "de"

export const defaultLocale: Locale = "en"

export const locales: Locale[] = ["en", "de"]

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About spooned",
      howItWorks: "How It Works",
      features: "Features",
      team: "Team",
      blog: "Blog",
      contact: "Contact",
      getApp: "Install the app",
      privacy: "Data protection",
      imprint: "Imprint",
      eventPartner: "Be an EventPartner",
    },
    // Hero Section
    hero: {
      tagline: "spoon your way to love!",
      title: "Fall in love.",
      titleHighlight: "Safe. Conscious. Real.",
      subtitle: "You're not looking for more matches, you're looking for real connection. spooned brings you together offline, in curated events designed for real encounters. Verified people, meaningful moments, and a conscious approach to love.",
      cta: "Install the app",
      ctaSecondary: "Learn More",
    },
    // Our Goal Section
    ourGoal: {
      subtitle: "Our goal",
      description: "To create and hold offline events exclusively for singles to bring back socializing and real feelings, rather than superficial swiping.",
    },
    // About Section
    about: {
      title: "Not in the mood for dating apps?",
      subtitle: "spooned is different",
      description: "Real encounters instead of endless swiping. Meet conscious singles at our exclusive offline events in a relaxed, authentic atmosphere, without pressure or pretence. Choose an event that suits you, spend time doing what you love, and meet others who value the same. However the day unfolds, your time is always well spent.",
      feature1Title: "Verified Profiles",
      feature1Desc: "Every member is verified to ensure authenticity and trust within our community.",
      feature2Title: "Curated Events",
      feature2Desc: "Attend exclusive events designed to foster genuine connections in a comfortable setting.",
      feature3Title: "Meaningful Matches",
      feature3Desc: "Our algorithm focuses on compatibility and shared values, not just appearances.",
    },
    // Why Different Section
    whyDifferent: {
      tiredTitle: "Tired of dating?",
      tiredDesc: "We believe that getting to know people should be efficient, uncomplicated, and inspiring. That's why, at spooned, we don't focus on superficial similarities but on shared values, life visions, and authentic connection.",
      patternsTitle: "Discover your relationship patterns.",
      patternsDesc: "Before you meet someone new, take time to understand yourself. In our guided psychotherapeutic interview, you'll explore your attachment style and uncover the patterns that shape your relationships. Recognize what went wrong and what can go right next time. Open yourself to love again, consciously.",
      noFakeTitle: "No fake profiles!",
      noFakeDesc: "Real people. Verified connections. Every spooner is personally verified, so you can meet with confidence and peace of mind, unpleasant surprises don't happen in the first place.",
      accompanyTitle: "We accompany you beyond the first date.",
      accompanyDesc: "From butterflies to real connection. At spooned, we believe that relationships don't just happen they grow. From your first date to a long-term partnership, we accompany you with psychological expertise and care. Because real love deserves a real chance.",
    },
    // How It Works
    howItWorks: {
      title: "How It Works",
      subtitle: "Four simple steps to meaningful connections",
      step1Title: "Create Your Profile",
      step1Desc: "Sign up and set clear relationship intentions with photos and information about yourself.",
      step2Title: "Get Verified",
      step2Desc: "Complete our verification process to join a community of genuine, like-minded singles.",
      step3Title: "Discover Events",
      step3Desc: "Browse and join curated events that match your lifestyle and values.",
      step4Title: "Make Connections",
      step4Desc: "Meet verified singles at events. Build healthier, more conscious connections over time.",
    },
    // Features
    features: {
      title: "With spooned, you can:",
      subtitle: "Everything you need for conscious dating",
      feature1Title: "Set Clear Intentions",
      feature1Desc: "Create your profile and set clear relationship intentions from the start.",
      feature2Title: "Verified Singles",
      feature2Desc: "Connect with verified singles who value meaningful conversations.",
      feature3Title: "Curated Events",
      feature3Desc: "Discover curated events that match your lifestyle and values.",
      feature4Title: "Learn Your Patterns",
      feature4Desc: "Learn your relationship patterns before your next date through guided reflection.",
      feature5Title: "Conscious Connections",
      feature5Desc: "Build healthier, more conscious connections over time.",
      feature6Title: "Quality Focus",
      feature6Desc: "Better conversations, better dates, and better outcomes. No quick matches or random chats.",
    },
    // Team
    team: {
      title: "Meet Our Team",
      subtitle: "The people behind Spooned",
    },
    // App Download
    download: {
      title: "Download spooned",
      subtitle: "Start your journey with intentional dating",
      description: "spooned is live and ready for you. Install the app and discover curated offline events designed for people who value depth, clarity, and real connection.",
      isLive: "spooned is live",
      liveDescription: "Download the app, create your profile, and start meeting verified singles at curated offline events.",
      feature1: "Create your profile and set clear relationship intentions",
      feature2: "Connect with verified singles who value meaningful conversations",
      feature3: "Discover curated events that match your lifestyle and values",
      appStore: "App Store",
      playStore: "Google Play",
      cta: "Install the app now",
    },
    // Newsletter
    newsletter: {
      title: "Stay in the loop",
      subtitle: "Register for our spooned newsletter",
      name: "Name",
      email: "E-mail",
      dateOfBirth: "Date of birth",
      submit: "Sign Up",
      getUpdates: "Get updates",
    },
    // Event Partner
    eventPartner: {
      title: "Become an Event Partner",
      subtitle: "As we are constantly expanding our offer, we are always on the lookout for event partners. Do you have an idea or a specific offer? Then get in touch with us!",
      companyName: "Company name",
      name: "Name",
      telephone: "Telephone",
      email: "E-mail",
      message: "Message",
      submit: "Send",
    },
    // Feedback
    feedback: {
      title: "Help develop your dating experience!",
      subtitle: "Click on the field and give us Feedback, so we can start working on things that matter to you!",
      question1: "Have you already taken part in a dating event? If so, what did you like or what did you dislike?",
      question2: "What are your expectations of a dating event? What elements must be included?",
      question3: "What do you need to feel comfortable on a group date? Are there certain formats that help you to open up and make contact?",
      question4: "What do you think of the idea of taking part in a group date?",
      question5: "What kind of atmosphere would you like at a dating event?",
      question6: "What would motivate you to take part in a dating event?",
      question7: "What would you like to see at a dating event to make it more successful and enjoyable?",
      question8: "Would you rather take part in an event that focuses on a shared hobby or interest (e.g. a cooking class, hiking) or a classic get-to-know-you event?",
      placeholder: "Your answer...",
      submit: "Send",
    },
    // Events CTA
    eventsCta: {
      title: "Our Events,",
      titleHighlight: "Your Love Stories",
      subtitle: "Ready to start now?",
      description: "Install spooned and join meaningful offline dating events in your city.",
      cta: "Get the app",
      ctaSubtitle: "Choose your platform and install spooned in seconds.",
    },
    // Contact
    contact: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you",
      description: "Have questions about Spooned? Want to become a partner? Reach out to us.",
      form: {
        name: "Your Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
        success: "Thank you! We'll get back to you soon.",
      },
    },
    // Blog
    blog: {
      title: "Blog",
      subtitle: "Dating tips, success stories, and community updates",
      readMore: "Read More",
      backToBlog: "Back to Blog",
    },
    // Footer
    footer: {
      description: "Switzerland's premier conscious dating platform. Connecting verified singles through meaningful events and authentic connections.",
      quickLinks: "Quick Links",
      legal: "Legal",
      followUs: "Follow Us",
      copyright: "All rights reserved.",
      newsletter: "Newsletter",
      newsletterDesc: "Subscribe to our newsletter for dating tips and event updates.",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      email: "Email",
    },
    // Privacy Policy
    privacy: {
      title: "Data protection",
      lastUpdated: "Last Updated",
    },
    // Imprint
    imprint: {
      title: "Imprint",
    },
    // Common
    common: {
      learnMore: "Learn More",
      getStarted: "Get Started",
      viewAll: "View All",
    },
  },
  de: {
    // Navigation
    nav: {
      home: "Startseite",
      about: "Über spooned",
      howItWorks: "So funktioniert's",
      features: "Funktionen",
      team: "Team",
      blog: "Blog",
      contact: "Kontakt",
      getApp: "App installieren",
      privacy: "Datenschutz",
      imprint: "Impressum",
      eventPartner: "EventPartner werden",
    },
    // Hero Section
    hero: {
      tagline: "Löffle dich zur Liebe!",
      title: "Verliebe dich.",
      titleHighlight: "Sicher. Bewusst. Echt.",
      subtitle: "Du suchst nicht nach mehr Matches, du suchst nach echter Verbindung. spooned bringt euch offline zusammen, bei kuratierten Events für echte Begegnungen. Verifizierte Menschen, bedeutungsvolle Momente und ein bewusster Ansatz zur Liebe.",
      cta: "App installieren",
      ctaSecondary: "Mehr erfahren",
    },
    // Our Goal Section
    ourGoal: {
      subtitle: "Unser Ziel",
      description: "Offline-Events exklusiv für Singles zu veranstalten, um echtes Kennenlernen und wahre Gefühle zurückzubringen - statt oberflächlichem Swipen.",
    },
    // About Section
    about: {
      title: "Keine Lust auf Dating-Apps?",
      subtitle: "spooned ist anders",
      description: "Echte Begegnungen statt endlosem Swipen. Triff bewusste Singles bei unseren exklusiven Offline-Events in entspannter, authentischer Atmosphäre - ohne Druck oder Verstellung. Wähle ein Event, das zu dir passt, verbringe Zeit mit dem, was du liebst, und triff andere, die das Gleiche schätzen. Wie auch immer der Tag verläuft, deine Zeit ist immer gut investiert.",
      feature1Title: "Verifizierte Profile",
      feature1Desc: "Jedes Mitglied wird verifiziert, um Authentizität und Vertrauen in unserer Community zu gewährleisten.",
      feature2Title: "Kuratierte Events",
      feature2Desc: "Besuche exklusive Events, die echte Verbindungen in angenehmer Atmosphäre fördern.",
      feature3Title: "Bedeutungsvolle Matches",
      feature3Desc: "Unser Algorithmus konzentriert sich auf Kompatibilität und gemeinsame Werte, nicht nur auf Äußerlichkeiten.",
    },
    // Why Different Section
    whyDifferent: {
      tiredTitle: "Müde vom Daten?",
      tiredDesc: "Wir glauben, dass das Kennenlernen von Menschen effizient, unkompliziert und inspirierend sein sollte. Deshalb konzentrieren wir uns bei spooned nicht auf oberflächliche Ähnlichkeiten, sondern auf gemeinsame Werte, Lebensvisionen und authentische Verbindung.",
      patternsTitle: "Entdecke deine Beziehungsmuster.",
      patternsDesc: "Bevor du jemand Neues triffst, nimm dir Zeit, dich selbst zu verstehen. In unserem geführten psychotherapeutischen Interview erforschst du deinen Bindungsstil und deckst die Muster auf, die deine Beziehungen prägen. Erkenne, was schief gelaufen ist und was beim nächsten Mal richtig laufen kann. Öffne dich bewusst wieder für die Liebe.",
      noFakeTitle: "Keine Fake-Profile!",
      noFakeDesc: "Echte Menschen. Verifizierte Verbindungen. Jeder Spooner wird persönlich verifiziert, damit du mit Vertrauen und Seelenfrieden daten kannst - unangenehme Überraschungen passieren gar nicht erst.",
      accompanyTitle: "Wir begleiten dich über das erste Date hinaus.",
      accompanyDesc: "Von Schmetterlingen zu echter Verbindung. Bei spooned glauben wir, dass Beziehungen nicht einfach passieren - sie wachsen. Vom ersten Date bis zur langfristigen Partnerschaft begleiten wir dich mit psychologischer Expertise und Fürsorge. Denn echte Liebe verdient eine echte Chance.",
    },
    // How It Works
    howItWorks: {
      title: "So funktioniert's",
      subtitle: "Vier einfache Schritte zu bedeutungsvollen Verbindungen",
      step1Title: "Profil erstellen",
      step1Desc: "Registriere dich und setze klare Beziehungsabsichten mit Fotos und Informationen über dich.",
      step2Title: "Verifizierung",
      step2Desc: "Schließe unseren Verifizierungsprozess ab und tritt einer Community von echten Singles bei.",
      step3Title: "Events entdecken",
      step3Desc: "Durchstöbere kuratierte Events, die zu deinem Lebensstil und deinen Werten passen.",
      step4Title: "Verbindungen knüpfen",
      step4Desc: "Triff verifizierte Singles bei Events. Baue gesündere, bewusstere Verbindungen auf.",
    },
    // Features
    features: {
      title: "Mit spooned kannst du:",
      subtitle: "Alles, was du für bewusstes Dating brauchst",
      feature1Title: "Klare Absichten setzen",
      feature1Desc: "Erstelle dein Profil und setze von Anfang an klare Beziehungsabsichten.",
      feature2Title: "Verifizierte Singles",
      feature2Desc: "Verbinde dich mit verifizierten Singles, die bedeutungsvolle Gespräche schätzen.",
      feature3Title: "Kuratierte Events",
      feature3Desc: "Entdecke Events, die zu deinem Lebensstil und deinen Werten passen.",
      feature4Title: "Lerne deine Muster",
      feature4Desc: "Lerne deine Beziehungsmuster vor deinem nächsten Date durch geführte Reflexion kennen.",
      feature5Title: "Bewusste Verbindungen",
      feature5Desc: "Baue mit der Zeit gesündere, bewusstere Verbindungen auf.",
      feature6Title: "Qualitätsfokus",
      feature6Desc: "Bessere Gespräche, bessere Dates, bessere Ergebnisse. Keine schnellen Matches oder zufälligen Chats.",
    },
    // Team
    team: {
      title: "Unser Team",
      subtitle: "Die Menschen hinter Spooned",
    },
    // App Download
    download: {
      title: "spooned herunterladen",
      subtitle: "Starte deine Reise mit absichtsvollem Dating",
      description: "spooned ist live und bereit für dich. Installiere die App und entdecke kuratierte Offline-Events für Menschen, die Tiefe, Klarheit und echte Verbindung schätzen.",
      isLive: "spooned ist live",
      liveDescription: "Lade die App herunter, erstelle dein Profil und beginne, verifizierte Singles bei kuratierten Offline-Events zu treffen.",
      feature1: "Erstelle dein Profil und setze klare Beziehungsabsichten",
      feature2: "Verbinde dich mit verifizierten Singles, die bedeutungsvolle Gespräche schätzen",
      feature3: "Entdecke kuratierte Events, die zu deinem Lebensstil und deinen Werten passen",
      appStore: "App Store",
      playStore: "Google Play",
      cta: "Jetzt App installieren",
    },
    // Newsletter
    newsletter: {
      title: "Bleib auf dem Laufenden",
      subtitle: "Registriere dich für unseren spooned Newsletter",
      name: "Name",
      email: "E-Mail",
      dateOfBirth: "Geburtsdatum",
      submit: "Anmelden",
      getUpdates: "Updates erhalten",
    },
    // Event Partner
    eventPartner: {
      title: "EventPartner werden",
      subtitle: "Da wir unser Angebot ständig erweitern, sind wir immer auf der Suche nach Event-Partnern. Hast du eine Idee oder ein konkretes Angebot? Dann melde dich bei uns!",
      companyName: "Firmenname",
      name: "Name",
      telephone: "Telefon",
      email: "E-Mail",
      message: "Nachricht",
      submit: "Senden",
    },
    // Feedback
    feedback: {
      title: "Hilf mit, dein Dating-Erlebnis zu entwickeln!",
      subtitle: "Klicke auf das Feld und gib uns Feedback, damit wir an Dingen arbeiten können, die dir wichtig sind!",
      question1: "Hast du schon an einem Dating-Event teilgenommen? Wenn ja, was hat dir gefallen oder was nicht?",
      question2: "Was sind deine Erwartungen an ein Dating-Event? Welche Elemente müssen enthalten sein?",
      question3: "Was brauchst du, um dich bei einem Gruppen-Date wohl zu fühlen? Gibt es bestimmte Formate, die dir helfen, dich zu öffnen?",
      question4: "Was hältst du von der Idee, an einem Gruppen-Date teilzunehmen?",
      question5: "Welche Art von Atmosphäre wünschst du dir bei einem Dating-Event?",
      question6: "Was würde dich motivieren, an einem Dating-Event teilzunehmen?",
      question7: "Was würdest du dir bei einem Dating-Event wünschen, damit es erfolgreicher und angenehmer wird?",
      question8: "Würdest du lieber an einem Event teilnehmen, das sich auf ein gemeinsames Hobby konzentriert (z.B. Kochkurs, Wandern) oder an einem klassischen Kennenlern-Event?",
      placeholder: "Deine Antwort...",
      submit: "Senden",
    },
    // Events CTA
    eventsCta: {
      title: "Unsere Events,",
      titleHighlight: "Deine Liebesgeschichten",
      subtitle: "Bereit zu starten?",
      description: "Installiere spooned und nimm an bedeutungsvollen Offline-Dating-Events in deiner Stadt teil.",
      cta: "App holen",
      ctaSubtitle: "Wähle deine Plattform und installiere spooned in Sekunden.",
    },
    // Contact
    contact: {
      title: "Kontakt",
      subtitle: "Wir freuen uns von dir zu hören",
      description: "Hast du Fragen zu Spooned? Möchtest du Partner werden? Kontaktiere uns.",
      form: {
        name: "Dein Name",
        email: "E-Mail-Adresse",
        subject: "Betreff",
        message: "Nachricht",
        submit: "Nachricht senden",
        success: "Vielen Dank! Wir melden uns bald bei dir.",
      },
    },
    // Blog
    blog: {
      title: "Blog",
      subtitle: "Dating-Tipps, Erfolgsgeschichten und Community-Updates",
      readMore: "Weiterlesen",
      backToBlog: "Zurück zum Blog",
    },
    // Footer
    footer: {
      description: "Die führende Plattform für bewusstes Dating in der Schweiz. Wir verbinden verifizierte Singles durch bedeutungsvolle Events und authentische Verbindungen.",
      quickLinks: "Schnellzugriff",
      legal: "Rechtliches",
      followUs: "Folge uns",
      copyright: "Alle Rechte vorbehalten.",
      newsletter: "Newsletter",
      newsletterDesc: "Abonniere unseren Newsletter für Dating-Tipps und Event-Updates.",
      emailPlaceholder: "E-Mail eingeben",
      subscribe: "Abonnieren",
      email: "E-Mail",
    },
    // Privacy Policy
    privacy: {
      title: "Datenschutz",
      lastUpdated: "Zuletzt aktualisiert",
    },
    // Imprint
    imprint: {
      title: "Impressum",
    },
    // Common
    common: {
      learnMore: "Mehr erfahren",
      getStarted: "Loslegen",
      viewAll: "Alle anzeigen",
    },
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}

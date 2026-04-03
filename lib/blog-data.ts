export type BlogPost = {
  id: string
  slug: string
  title: { en: string; de: string }
  excerpt: { en: string; de: string }
  content: { en: string; de: string }
  category: { en: string; de: string }
  author: string
  date: string
  readTime: { en: string; de: string }
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "the-art-of-conscious-dating",
    title: {
      en: "The Art of Conscious Dating: Finding Meaningful Connections",
      de: "Die Kunst des bewussten Datings: Bedeutungsvolle Verbindungen finden",
    },
    excerpt: {
      en: "In a world of endless swiping, learn how conscious dating can help you find genuine, lasting relationships.",
      de: "In einer Welt des endlosen Swipens: Erfahren Sie, wie bewusstes Dating Ihnen helfen kann, echte, dauerhafte Beziehungen zu finden.",
    },
    content: {
      en: `
## What is Conscious Dating?

Conscious dating is about being present, intentional, and authentic in your search for a partner. It's about quality over quantity, meaningful conversations over superficial swipes, and genuine connections over fleeting encounters.

### The Principles of Conscious Dating

**1. Know Yourself First**

Before you can truly connect with someone else, you need to understand yourself. What are your values? What are you looking for in a partner? What are your deal-breakers?

**2. Be Present**

When you're on a date, be fully present. Put away your phone, make eye contact, and really listen to what your date is saying.

**3. Quality Over Quantity**

Instead of going on multiple dates a week, focus on fewer, more meaningful connections. Take time to get to know people before moving on.

**4. Embrace Vulnerability**

Authentic connections require vulnerability. Be honest about who you are and what you're looking for.

### How Spooned Supports Conscious Dating

At Spooned, we believe in the power of conscious dating. That's why we verify every member, curate meaningful events, and focus on creating genuine connections rather than endless matches.

Our approach is different because we understand that real relationships aren't built on algorithms alone—they're built on shared experiences, authentic conversations, and genuine chemistry.

### Tips for Your Conscious Dating Journey

1. Take breaks from dating apps when you need them
2. Reflect on your dates and what you learned
3. Don't rush the process
4. Trust your intuition
5. Be open to unexpected connections

Remember, finding the right person is not about the number of dates you go on, but about the quality of connections you make.
      `,
      de: `
## Was ist bewusstes Dating?

Bewusstes Dating bedeutet, präsent, absichtsvoll und authentisch bei der Suche nach einem Partner zu sein. Es geht um Qualität statt Quantität, bedeutungsvolle Gespräche statt oberflächlicher Swipes und echte Verbindungen statt flüchtiger Begegnungen.

### Die Prinzipien des bewussten Datings

**1. Erkenne dich selbst zuerst**

Bevor du dich wirklich mit jemand anderem verbinden kannst, musst du dich selbst verstehen. Was sind deine Werte? Was suchst du in einem Partner?

**2. Sei präsent**

Wenn du auf einem Date bist, sei voll präsent. Leg dein Handy weg, halte Augenkontakt und höre wirklich zu.

**3. Qualität statt Quantität**

Anstatt mehrere Dates pro Woche zu haben, konzentriere dich auf weniger, aber bedeutungsvollere Verbindungen.

**4. Umarme Verletzlichkeit**

Authentische Verbindungen erfordern Verletzlichkeit. Sei ehrlich darüber, wer du bist und was du suchst.

### Wie Spooned bewusstes Dating unterstützt

Bei Spooned glauben wir an die Kraft des bewussten Datings. Deshalb verifizieren wir jedes Mitglied und kuratieren bedeutungsvolle Events.

### Tipps für deine bewusste Dating-Reise

1. Mach Pausen von Dating-Apps, wenn du sie brauchst
2. Reflektiere über deine Dates und was du gelernt hast
3. Überstürze den Prozess nicht
4. Vertraue deiner Intuition
5. Sei offen für unerwartete Verbindungen
      `,
    },
    category: { en: "Dating Tips", de: "Dating-Tipps" },
    author: "Anna Müller",
    date: "2024-01-15",
    readTime: { en: "5 min read", de: "5 Min. Lesezeit" },
  },
  {
    id: "2",
    slug: "success-story-sarah-and-thomas",
    title: {
      en: "Success Story: How Sarah and Thomas Found Love at a Spooned Event",
      de: "Erfolgsgeschichte: Wie Sarah und Thomas bei einem Spooned Event die Liebe fanden",
    },
    excerpt: {
      en: "Read how two of our members met at a wine tasting event and found their perfect match.",
      de: "Lesen Sie, wie zwei unserer Mitglieder sich bei einer Weinverkostung kennenlernten und ihr perfektes Match fanden.",
    },
    content: {
      en: `
## A Chance Encounter

Sarah had been a Spooned member for three months when she decided to attend a wine tasting event in Zurich. Thomas, a software engineer, was attending his first Spooned event that same evening.

### The First Meeting

"I was nervous," Sarah admits. "I hadn't been to many singles events before. But the atmosphere was so relaxed and welcoming that I quickly felt at ease."

Thomas noticed Sarah from across the room. "She was laughing with a group of people, and her energy was infectious. I knew I had to talk to her."

### Getting to Know Each Other

Over glasses of Swiss Pinot Noir, Sarah and Thomas discovered they had more in common than they expected—a love for hiking, a passion for travel, and similar values about family and relationships.

### The Follow-Up

After the event, they connected through the Spooned app and arranged to meet for coffee. That coffee date turned into dinner, which turned into a hike the following weekend.

### Today

Six months later, Sarah and Thomas are still going strong. "Spooned gave us the perfect environment to meet," Thomas says. "The verification process meant I knew everyone there was genuine, and the event itself was designed to facilitate real conversations."

### Their Advice for Other Singles

- **Be open-minded**: Your perfect match might not look like what you expected
- **Attend events**: The in-person experience is irreplaceable
- **Be yourself**: Authenticity attracts authenticity
- **Take your time**: Good relationships are built, not rushed
      `,
      de: `
## Eine zufällige Begegnung

Sarah war seit drei Monaten Spooned-Mitglied, als sie sich entschied, an einer Weinverkostung in Zürich teilzunehmen. Thomas, ein Software-Ingenieur, besuchte an diesem Abend sein erstes Spooned-Event.

### Das erste Treffen

"Ich war nervös", gibt Sarah zu. "Ich war noch nicht auf vielen Singles-Events gewesen. Aber die Atmosphäre war so entspannt und einladend, dass ich mich schnell wohlfühlte."

Thomas bemerkte Sarah von der anderen Seite des Raumes. "Sie lachte mit einer Gruppe von Leuten, und ihre Energie war ansteckend. Ich wusste, dass ich mit ihr sprechen musste."

### Sich kennenlernen

Bei Gläsern Schweizer Pinot Noir entdeckten Sarah und Thomas, dass sie mehr gemeinsam hatten als erwartet—eine Liebe zum Wandern, eine Leidenschaft fürs Reisen und ähnliche Werte bezüglich Familie und Beziehungen.

### Das Folgetreffen

Nach dem Event verbanden sie sich über die Spooned-App und verabredeten sich zum Kaffee. Aus dem Kaffee wurde ein Abendessen, und daraus eine Wanderung am folgenden Wochenende.

### Heute

Sechs Monate später sind Sarah und Thomas immer noch ein Paar. "Spooned hat uns das perfekte Umfeld geboten, um uns zu treffen", sagt Thomas.

### Ihr Rat für andere Singles

- **Sei offen**: Dein perfektes Match sieht vielleicht nicht so aus, wie du es erwartet hast
- **Besuche Events**: Die persönliche Erfahrung ist unersetzlich
- **Sei du selbst**: Authentizität zieht Authentizität an
- **Nimm dir Zeit**: Gute Beziehungen werden aufgebaut, nicht überstürzt
      `,
    },
    category: { en: "Success Stories", de: "Erfolgsgeschichten" },
    author: "Sophie Keller",
    date: "2024-02-10",
    readTime: { en: "4 min read", de: "4 Min. Lesezeit" },
  },
  {
    id: "3",
    slug: "upcoming-spring-events",
    title: {
      en: "Upcoming Spring Events: What to Expect This Season",
      de: "Kommende Frühlingsevents: Was Sie diese Saison erwartet",
    },
    excerpt: {
      en: "Discover our exciting lineup of spring dating events across Switzerland.",
      de: "Entdecken Sie unser aufregendes Programm an Frühlingsevents in der ganzen Schweiz.",
    },
    content: {
      en: `
## Spring into Love

As the weather warms up, so does our event calendar! We're excited to announce our spring lineup of dating events designed to help you make meaningful connections.

### Zurich Events

**Wine & Conversation Evenings**
Every Thursday in April at selected venues in Zurich. Meet fellow wine enthusiasts in an intimate setting.

**Outdoor Hiking & Coffee**
Weekend mornings on Uetliberg. Start your day with a scenic hike followed by coffee and conversation.

### Basel Events

**Art Gallery Tours**
Guided tours of Basel's finest galleries, followed by drinks and discussion. Perfect for culture lovers.

**Sunset Rooftop Mixers**
As the days get longer, join us for rooftop gatherings with stunning views.

### Geneva Events

**Lakeside Picnics**
Casual, relaxed gatherings by Lake Geneva. Bring your curiosity and openness to new connections.

**French Cooking Classes**
Learn to cook classic French dishes while meeting fellow foodies.

### How to Join

All events are exclusive to verified Spooned members. Check the app for dates, times, and registration.

### What Makes Our Events Special

- Small group sizes (8-20 people)
- Carefully curated venues
- Icebreaker activities included
- Follow-up support through the app

We can't wait to see you this spring!
      `,
      de: `
## Verliebe dich im Frühling

Mit dem wärmer werdenden Wetter wird auch unser Eventkalender lebendiger! Wir freuen uns, unser Frühlingsprogramm an Dating-Events vorzustellen.

### Zürich Events

**Wein & Gespräche Abende**
Jeden Donnerstag im April in ausgewählten Locations in Zürich. Treffen Sie Weinliebhaber in intimer Atmosphäre.

**Wandern & Kaffee im Freien**
Wochenendvormittage auf dem Üetliberg. Starten Sie Ihren Tag mit einer malerischen Wanderung, gefolgt von Kaffee und Gesprächen.

### Basel Events

**Kunstgalerie-Touren**
Geführte Touren durch Basels beste Galerien, gefolgt von Drinks und Diskussion. Perfekt für Kulturliebhaber.

**Sonnenuntergang Rooftop-Mixers**
Mit den längeren Tagen laden wir Sie zu Dachterrassen-Treffen mit atemberaubender Aussicht ein.

### Genf Events

**Picknicks am See**
Ungezwungene, entspannte Treffen am Genfer See. Bringen Sie Ihre Neugier und Offenheit für neue Verbindungen mit.

**Französische Kochkurse**
Lernen Sie klassische französische Gerichte zu kochen und treffen Sie dabei Gleichgesinnte.

### Wie man teilnimmt

Alle Events sind exklusiv für verifizierte Spooned-Mitglieder. Prüfen Sie die App für Termine und Anmeldung.

### Was unsere Events besonders macht

- Kleine Gruppengrößen (8-20 Personen)
- Sorgfältig kuratierte Locations
- Icebreaker-Aktivitäten inklusive
- Follow-up-Unterstützung über die App

Wir freuen uns darauf, Sie diesen Frühling zu sehen!
      `,
    },
    category: { en: "Events", de: "Events" },
    author: "David Schneider",
    date: "2024-03-01",
    readTime: { en: "3 min read", de: "3 Min. Lesezeit" },
  },
  {
    id: "4",
    slug: "first-date-tips",
    title: {
      en: "10 First Date Tips That Actually Work",
      de: "10 First-Date-Tipps, die wirklich funktionieren",
    },
    excerpt: {
      en: "Nervous about your first date? These tried-and-tested tips will help you make a great impression.",
      de: "Nervös vor Ihrem ersten Date? Diese bewährten Tipps helfen Ihnen, einen großartigen Eindruck zu machen.",
    },
    content: {
      en: `
## Making Your First Date Count

First dates can be nerve-wracking, but they're also exciting opportunities to connect with someone new. Here are our top tips for making a great impression.

### Before the Date

**1. Choose the Right Venue**
Pick somewhere you feel comfortable. A quiet café or a walk in a nice area works better than a loud bar.

**2. Arrive On Time**
Punctuality shows respect. Aim to arrive 5 minutes early.

**3. Dress Appropriately**
Dress for the occasion, but also be yourself. Wear something that makes you feel confident.

### During the Date

**4. Be Present**
Put your phone away and give your date your full attention.

**5. Ask Open-Ended Questions**
Instead of "Do you like your job?", try "What's the most interesting part of your work?"

**6. Listen Actively**
Show genuine interest in what they're saying. Follow up on things they mention.

**7. Share About Yourself**
A date is a two-way conversation. Be open about your own life and interests.

**8. Be Positive**
Avoid complaining or talking negatively about exes. Focus on positive topics.

### After the Date

**9. Send a Follow-Up Message**
If you enjoyed the date, let them know! A simple "I had a great time" goes a long way.

**10. Trust Your Gut**
If it felt right, pursue it. If not, that's okay too. Not every date leads to love.

### Remember

The goal of a first date isn't to impress someone—it's to see if there's genuine connection. Be yourself, be kind, and enjoy the experience!
      `,
      de: `
## Mach dein erstes Date zählen

Erste Dates können nervenaufreibend sein, aber sie sind auch aufregende Möglichkeiten, jemanden Neues kennenzulernen.

### Vor dem Date

**1. Wähle den richtigen Ort**
Such dir einen Ort, an dem du dich wohlfühlst. Ein ruhiges Café oder ein Spaziergang funktioniert besser als eine laute Bar.

**2. Sei pünktlich**
Pünktlichkeit zeigt Respekt. Komm am besten 5 Minuten früher.

**3. Kleide dich angemessen**
Kleide dich dem Anlass entsprechend, aber sei auch du selbst.

### Während des Dates

**4. Sei präsent**
Leg dein Handy weg und schenke deinem Date deine volle Aufmerksamkeit.

**5. Stell offene Fragen**
Statt "Magst du deinen Job?", versuch "Was ist der interessanteste Teil deiner Arbeit?"

**6. Höre aktiv zu**
Zeige echtes Interesse an dem, was sie sagen.

**7. Teile etwas über dich**
Ein Date ist ein Gespräch in beide Richtungen. Sei offen über dein eigenes Leben.

**8. Sei positiv**
Vermeide Beschwerden oder negatives Reden über Exes. Konzentriere dich auf positive Themen.

### Nach dem Date

**9. Sende eine Nachricht**
Wenn dir das Date gefallen hat, lass es sie wissen!

**10. Vertraue deinem Bauchgefühl**
Wenn es sich richtig anfühlte, verfolge es. Wenn nicht, ist das auch okay.

### Denk daran

Das Ziel eines ersten Dates ist nicht, jemanden zu beeindrucken—es geht darum zu sehen, ob es eine echte Verbindung gibt. Sei du selbst!
      `,
    },
    category: { en: "Dating Tips", de: "Dating-Tipps" },
    author: "Anna Müller",
    date: "2024-03-15",
    readTime: { en: "6 min read", de: "6 Min. Lesezeit" },
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

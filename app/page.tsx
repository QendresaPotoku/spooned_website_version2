"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { WhyDifferentSection } from "@/components/sections/why-different"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { FeaturesSection } from "@/components/sections/features"
import { TeamSection } from "@/components/sections/team"
import { DownloadSection } from "@/components/sections/download"
import { NewsletterSection } from "@/components/sections/newsletter"
import { EventsCtaSection } from "@/components/sections/events-cta"
import { EventPartnerSection } from "@/components/sections/event-partner"
import { FeedbackSection } from "@/components/sections/feedback"
import { FAQSection } from "@/components/sections/faq"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyDifferentSection />
        <HowItWorksSection />
        <FeaturesSection />
        <DownloadSection />
        <NewsletterSection />
        <TeamSection />
        <EventsCtaSection />
        <EventPartnerSection />
        <FeedbackSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

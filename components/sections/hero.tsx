"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const { t } = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover blur-[2px] scale-105"
        style={{ backgroundImage: "url('/hero-art-gallery.png')" }}
      />

      {/* Dark readability overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-white/70 via-white/50 to-white/70 dark:from-black/70 dark:via-black/50 dark:to-black/70" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white/35 dark:bg-black/30 backdrop-blur-md rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl px-5 py-8 md:px-10 md:py-12">
          {/* Tagline Badge */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t.hero.tagline}
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-6xl lg:text-8xl font-bold text-black dark:text-white leading-none mb-4 transition-all duration-700 delay-100 dark:[text-shadow:0_2px_10px_rgba(0,0,0,0.6)] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t.hero.title}
          </h1>

          {/* Highlighted Subtitle */}
          <h2
            className={`text-4xl md:text-5xl lg:text-7xl font-bold text-primary leading-none mb-8 transition-all duration-700 delay-200 dark:[text-shadow:0_2px_10px_rgba(0,0,0,0.6)] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t.hero.titleHighlight}
          </h2>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-black/70 dark:text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-300 dark:[text-shadow:0_2px_10px_rgba(0,0,0,0.6)] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
            >
              <Link href="/#download">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-10 py-6 text-lg border-black/40 text-black hover:bg-black/10 dark:border-white/30 dark:text-white dark:hover:bg-white/10"
            >
              <Link href="/#about">{t.hero.ctaSecondary}</Link>
            </Button>
          </div>

          {/* Stats Row */}
          <div
            className={`mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                5k+
              </div>
              <div className="text-sm text-black/70 dark:text-white/70">Verified Singles</div>
            </div>
            <div className="w-px h-12 bg-black/20 dark:bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                100+
              </div>
              <div className="text-sm text-black/70 dark:text-white/70">Curated Events</div>
            </div>
            <div className="w-px h-12 bg-black/20 dark:bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                98%
              </div>
              <div className="text-sm text-black/70 dark:text-white/70">
                Satisfaction Rate
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-black/30 dark:border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-black/50 dark:bg-white/50" />
        </div>
      </div>
    </section>
  );
}

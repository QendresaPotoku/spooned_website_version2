"use client"

import { useLocale } from "@/lib/locale-context"
import { useEffect, useRef, useState } from "react"

export function DownloadSection() {
  const { t } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="download" 
      className="py-24 md:py-32 bg-foreground text-background overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Get Started Today
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready for{" "}
              <span className="text-primary">real connections</span>?
            </h2>
            
            <p className="text-lg md:text-xl opacity-80 mb-8 max-w-lg leading-relaxed">
              Join thousands of verified singles in Switzerland. Download Spooned and start your journey to meaningful relationships today.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="opacity-90">Verified profiles only</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="opacity-90">Exclusive events in Switzerland</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="opacity-90">Quality over quantity matching</span>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store Button */}
              <a
                href="#"
                className="group flex items-center gap-3 bg-background text-foreground rounded-2xl px-6 py-4 hover:scale-105 transition-transform duration-300"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs opacity-60">Download on the</p>
                  <p className="text-base font-semibold">App Store</p>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="group flex items-center gap-3 bg-background text-foreground rounded-2xl px-6 py-4 hover:scale-105 transition-transform duration-300"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs opacity-60">Get it on</p>
                  <p className="text-base font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div 
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Glowing Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Phone Frame */}
            <div className="relative z-10">
              {/* Main Phone */}
              <div 
                className={`relative w-72 h-[580px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[3rem] p-2 shadow-2xl transition-transform duration-1000 ${
                  isVisible ? "translate-y-0 rotate-0" : "translate-y-8 rotate-3"
                }`}
              >
                {/* Inner Screen */}
                <div className="w-full h-full bg-gradient-to-b from-primary/30 via-primary/10 to-background/5 rounded-[2.5rem] relative overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />
                  
                  {/* Screen Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    {/* Logo */}
                    <div 
                      className={`w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mb-6 shadow-lg transition-all duration-700 delay-500 ${
                        isVisible ? "scale-100 rotate-0" : "scale-75 -rotate-12"
                      }`}
                    >
                      <span className="text-background text-4xl font-bold">S</span>
                    </div>
                    
                    <p className="text-background/90 text-xl font-semibold mb-2">Spooned</p>
                    <p className="text-background/60 text-sm text-center">Conscious Dating</p>
                    
                    {/* Animated Dots */}
                    <div className="flex gap-2 mt-8">
                      <div 
                        className={`w-2 h-2 bg-primary rounded-full transition-all duration-500 ${
                          isVisible ? "scale-100" : "scale-0"
                        }`} 
                        style={{ transitionDelay: "700ms" }}
                      />
                      <div 
                        className={`w-2 h-2 bg-primary/60 rounded-full transition-all duration-500 ${
                          isVisible ? "scale-100" : "scale-0"
                        }`}
                        style={{ transitionDelay: "800ms" }}
                      />
                      <div 
                        className={`w-2 h-2 bg-primary/30 rounded-full transition-all duration-500 ${
                          isVisible ? "scale-100" : "scale-0"
                        }`}
                        style={{ transitionDelay: "900ms" }}
                      />
                    </div>
                  </div>

                  {/* Decorative Cards */}
                  <div 
                    className={`absolute bottom-20 left-4 right-4 h-32 bg-background/10 backdrop-blur-sm rounded-2xl p-4 transition-all duration-700 delay-600 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/40" />
                      <div className="flex-1">
                        <div className="h-2.5 w-20 bg-background/30 rounded-full mb-2" />
                        <div className="h-2 w-14 bg-background/20 rounded-full" />
                      </div>
                    </div>
                    <div className="h-2 w-full bg-background/15 rounded-full mb-2" />
                    <div className="h-2 w-3/4 bg-background/15 rounded-full" />
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-background/30 rounded-full" />
              </div>

              {/* Floating Elements */}
              <div 
                className={`absolute -left-8 top-20 w-16 h-16 bg-primary/30 rounded-2xl backdrop-blur-sm transition-all duration-1000 delay-700 ${
                  isVisible ? "opacity-100 rotate-12" : "opacity-0 rotate-0"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>

              <div 
                className={`absolute -right-6 top-40 w-14 h-14 bg-primary/20 rounded-full backdrop-blur-sm transition-all duration-1000 delay-800 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>

              <div 
                className={`absolute -right-4 bottom-32 w-12 h-12 bg-primary/25 rounded-xl backdrop-blur-sm transition-all duration-1000 delay-900 ${
                  isVisible ? "opacity-100 -rotate-12" : "opacity-0 rotate-0"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

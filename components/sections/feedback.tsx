"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useLocale } from "@/lib/locale-context"
import { ChevronLeft, ChevronRight, Send, MessageSquare } from "lucide-react"

export function FeedbackSection() {
  const { t } = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({})
  const sectionRef = useRef<HTMLElement>(null)

  const questions = [
    t.feedback.question1,
    t.feedback.question2,
    t.feedback.question3,
    t.feedback.question4,
    t.feedback.question5,
    t.feedback.question6,
    t.feedback.question7,
    t.feedback.question8,
  ]

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? questions.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === questions.length - 1 ? 0 : prev + 1))
  }

  const handleSubmit = (index: number) => {
    if (answers[index]?.trim()) {
      setSubmitted({ ...submitted, [index]: true })
      setTimeout(() => {
        handleNext()
      }, 1000)
    }
  }

  return (
    <section ref={sectionRef} id="feedback" className="py-20 md:py-32 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">
              {t.feedback.title}
            </h2>
            <p className="text-lg text-background/70">
              {t.feedback.subtitle}
            </p>
          </div>

          {/* Carousel */}
          <div 
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background transition-colors"
                aria-label="Previous question"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'w-8 bg-primary' 
                        : submitted[index] 
                          ? 'bg-primary/50' 
                          : 'bg-background/30'
                    }`}
                    aria-label={`Go to question ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background transition-colors"
                aria-label="Next question"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Question Card */}
            <div className="bg-background/5 backdrop-blur-sm rounded-3xl border border-background/10 p-8 md:p-12">
              <p className="text-xl md:text-2xl text-background font-medium mb-8 min-h-24">
                {questions[currentIndex]}
              </p>
              
              <div className="space-y-4">
                <Textarea
                  placeholder={t.feedback.placeholder}
                  value={answers[currentIndex] || ""}
                  onChange={(e) => setAnswers({ ...answers, [currentIndex]: e.target.value })}
                  disabled={submitted[currentIndex]}
                  className="min-h-32 rounded-xl border-background/20 bg-background/10 text-background placeholder:text-background/50 px-5 py-4 text-base resize-none focus:border-primary"
                />
                <Button
                  onClick={() => handleSubmit(currentIndex)}
                  disabled={submitted[currentIndex] || !answers[currentIndex]?.trim()}
                  className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-base font-medium"
                >
                  {submitted[currentIndex] ? (
                    "Thank you for your feedback!"
                  ) : (
                    <>
                      {t.feedback.submit}
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

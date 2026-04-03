"use client"

import Link from "next/link"
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  const { t } = useLocale()

  const quickLinks = [
    { href: "/#about", label: t.nav.about },
    { href: "/#how-it-works", label: t.nav.howItWorks },
    { href: "/#features", label: t.nav.features },
    { href: "/#team", label: t.nav.team },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ]

  const legalLinks = [
    { href: "/datenschutz", label: t.nav.privacy },
    { href: "/impressum", label: t.nav.imprint },
  ]

  const socialLinks = [
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  ]

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <img
                src="/spooned-logo.svg"
                alt="Spooned logo"
                className="w-36 h-auto"
                width="316"
                height="60"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[15px] font-semibold text-foreground mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-[15px] font-semibold text-foreground mb-4">{t.footer.legal}</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[15px] font-semibold text-foreground mb-4">{t.footer.newsletter}</h3>
            <p className="text-muted-foreground text-sm mb-4">{t.footer.newsletterDesc}</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 rounded-full border-black/40"
              />
              <Button type="submit" className="rounded-full px-4">
                {t.footer.subscribe}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Spooned. {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

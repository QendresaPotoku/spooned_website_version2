import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LocaleProvider } from '@/lib/locale-context'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'Spooned - Conscious Dating in Switzerland | Real Connections Beyond Apps',
  description: 'Spooned brings together verified singles seeking meaningful relationships through curated events and a trusted community in Switzerland.',
  keywords: ['dating', 'Switzerland', 'conscious dating', 'singles', 'events', 'relationships'],
  authors: [{ name: 'Spooned' }],
  creator: 'Spooned',
  openGraph: {
    title: 'Spooned - Conscious Dating in Switzerland',
    description: 'Real Connections Beyond Apps. Join verified singles seeking meaningful relationships.',
    type: 'website',
    locale: 'en_CH',
    alternateLocale: 'de_CH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spooned - Conscious Dating in Switzerland',
    description: 'Real Connections Beyond Apps. Join verified singles seeking meaningful relationships.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f7f5' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1816' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

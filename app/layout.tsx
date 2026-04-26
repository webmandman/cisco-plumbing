import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Cisco Plumbing — Honest Plumbing, Done Right | Orange County, CA',
  description:
    "Family-owned, licensed & insured. 24/7 emergency plumbing in Orange County. Master plumber, flat-rate quotes, no pushy sales. Call (714) 555-2476.",
  keywords: [
    'Cisco Plumbing',
    'plumber Orange County',
    'emergency plumber Anaheim',
    'water heater installation',
    'leak detection',
    'drain cleaning',
    'repipe',
    '24/7 plumber',
    'licensed plumber',
  ],
  metadataBase: new URL('https://ciscoplumbing.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Cisco Plumbing — Plumbing Done Right',
    description:
      'Family-owned, licensed & insured plumbing in Orange County. 24/7 emergency service.',
    url: 'https://ciscoplumbing.com',
    siteName: 'Cisco Plumbing',
    images: [{ url: '/logo.png', width: 600, height: 600, alt: 'Cisco Plumbing' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cisco Plumbing — Plumbing Done Right',
    description: '24/7 emergency plumbing in Orange County. Licensed & insured.',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/logo.png', apple: '/logo.png' },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

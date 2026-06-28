import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ToastProvider } from '@/components/ToastProvider'
import { cn } from "@/lib/utils";

// Display / headings
const regalia = localFont({
  src: '../public/fonts/regaliamonarch.ttf',
  variable: '--font-regalia',
  display: 'swap',
})

// Body / normal text
const candara = localFont({
  src: '../public/fonts/Candara.ttf',
  variable: '--font-candara',
  display: 'swap',
})

// Subtitles / small details
const jedira = localFont({
  src: '../public/fonts/jedira-regular.otf',
  variable: '--font-jedira',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Atlas Ousia — Essências do Mundo',
    template: '%s | Atlas Ousia',
  },
  description:
    'Difusores de Ambiente Sazonais e Multiculturais. Uma viagem olfativa pelo mundo — Portugal, Brasil, Marrocos e Japão.',
  openGraph: {
    siteName: 'Atlas Ousia',
    locale: 'pt_PT',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt"
      className={cn(
        regalia.variable,
        candara.variable,
        jedira.variable,
        'font-body bg-ink',
      )}
    >
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ToastProvider />
      </body>
    </html>
  )
}

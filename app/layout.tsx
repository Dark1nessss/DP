import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato, Geist } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ToastProvider } from '@/components/ToastProvider'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
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
    <html lang="pt" className={cn(cormorant.variable, lato.variable, "font-sans", geist.variable)}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ToastProvider />
      </body>
    </html>
  )
}

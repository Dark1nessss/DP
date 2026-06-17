import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Entre em contacto com a Atlas Ousia.',
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6 border-b border-rim/30">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">Contacto</p>
          <h1 className="font-display text-6xl md:text-7xl font-light text-cream mb-8 leading-tight">
            Fale Connosco
          </h1>
          <p className="font-body text-sm text-stone max-w-md leading-relaxed">
            Tem alguma questão sobre as nossas coleções, encomendas ou parcerias? Entre em contacto
            e responderemos brevemente.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

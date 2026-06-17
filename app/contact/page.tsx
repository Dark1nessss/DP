import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Entre em contacto com a Atlas Ousia.',
}

export default function ContactPage() {
  return (
    <div className="pt-16 pb-24">
      {/* Hero */}
      <section className="py-32 px-6 border-b border-rim/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 animate-slide-up">
          <div className="h-1 w-12 bg-gold mb-8" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">Contacto</p>
          <h1 className="font-display text-7xl md:text-8xl font-light text-cream mb-8 leading-tight">
            Fale
            <br />
            <span className="relative inline-block">
              Connosco
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-transparent" />
            </span>
          </h1>
          <p className="font-body text-sm text-stone leading-relaxed max-w-2xl">
            Tem alguma questão sobre as nossas coleções, parcerias, ou simplesmente quer compartilhar feedback? Estamos aqui para ouvir.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Contact info */}
          <div className="lg:col-span-1 animate-slide-up">
            <div className="sticky top-32">
              <h2 className="font-display text-3xl font-light text-cream mb-8 leading-tight">
                Informações
              </h2>

              <div className="space-y-8">
                {[
                  {
                    label: 'Email',
                    value: 'hello@atlasousia.pt',
                    desc: 'Responderemos o mais rápido possível',
                  },
                  {
                    label: 'Localização',
                    value: 'Origens, Portugal',
                    desc: 'Agrupamento de Escolas Dona Maria II',
                  },
                  {
                    label: 'Sobre',
                    value: 'Projeto Conceptual',
                    desc: 'Design & Digital Project',
                  },
                ].map(({ label, value, desc }) => (
                  <div key={label}>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/60 mb-2">
                      {label}
                    </p>
                    <p className="font-display text-lg text-cream mb-1">{value}</p>
                    <p className="font-body text-xs text-stone/50">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Social/Links */}
              <div className="mt-12 pt-8 border-t border-rim/30">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/60 mb-6">
                  Explore Mais
                </p>
                <div className="space-y-3">
                  {[
                    { href: '/stories', label: 'Histórias' },
                    { href: '/sustainability', label: 'Sustentabilidade' },
                    { href: '/faq', label: 'FAQ' },
                  ].map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      className="flex items-center justify-between text-sm text-stone hover:text-gold transition-colors group"
                    >
                      <span className="font-body">{label}</span>
                      <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="p-10 border border-rim/30 rounded-lg bg-gradient-to-br from-card/50 to-card/20">
              <ContactForm />
            </div>

            {/* Form info */}
            <div className="mt-8 p-6 bg-card/30 border border-rim/20 rounded">
              <p className="font-body text-xs text-stone/60 leading-relaxed">
                <span className="text-gold font-medium">Privacidade: </span>
                Os seus dados serão usados apenas para responder à sua mensagem. Não partilhamos informações com terceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 px-6 bg-gradient-to-b from-card/30 to-card/60 border-t border-rim/30 text-center">
        <div className="max-w-7xl mx-auto text-center animate-slide-up">
          <p className="font-body text-sm text-stone mb-6">
            Quer saber mais sobre as nossas coleções?
          </p>
          <Link
            href="/collections"
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300 inline-block"
          >
            Explorar Coleções
          </Link>
        </div>
      </section>
    </div>
  )
}

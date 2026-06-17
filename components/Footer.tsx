import Link from 'next/link'
import { collections } from '@/lib/data'

const nav = [
  { href: '/collections', label: 'Coleções' },
  { href: '/about', label: 'Sobre a Marca' },
  { href: '/stories', label: 'Histórias' },
  { href: '/faq', label: 'FAQ' },
  { href: '/sustainability', label: 'Sustentabilidade' },
  { href: '/team', label: 'Equipa' },
  { href: '/contact', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="border-t border-rim/30 bg-card">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-b from-card/50 to-card border-b border-rim/30">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-light text-cream mb-2">
              Acompanhe Novas Histórias
            </h3>
            <p className="font-body text-xs text-stone/70 mb-6">
              Inscreva-se para receber atualizações sobre coleções, histórias de design, e novidades de Atlas Ousia.
            </p>
            <form className="flex items-center gap-3">
              <input
                type="email"
                placeholder="O seu email"
                className="flex-1 bg-card/60 border border-rim/30 rounded px-3 py-2.5 font-body text-xs text-cream placeholder-stone/60 focus:outline-none focus:border-gold/60 transition-colors"
                required
              />
              <button
                type="submit"
                className="font-body text-xs tracking-[0.25em] uppercase px-6 py-2.5 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300 shrink-0"
              >
                Subscrever
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold font-display select-none">✦</span>
              <span className="font-display text-xl tracking-[0.12em] text-cream">Atlas Ousia</span>
            </div>
            <p className="font-body text-xs text-stone leading-relaxed">
              Essências do Mundo
              <br />
              Difusores de Ambiente Sazonais e Multiculturais
            </p>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone/50 mb-5">
              Navegar
            </p>
            <ul className="space-y-3">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-xs text-stone hover:text-cream transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone/50 mb-5">
              Coleções
            </p>
            <ul className="space-y-3">
              {collections.map(({ slug, season, country }) => (
                <li key={slug}>
                  <Link
                    href={`/collections/${slug}`}
                    className="font-body text-xs text-stone hover:text-cream transition-colors"
                  >
                    {season} — {country}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-rim/30 pt-8 flex flex-col md:flex-row justify-between gap-3">
          <p className="font-body text-xs text-stone/40">
            © {new Date().getFullYear()} Atlas Ousia. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-stone/40">
            Carolina Ferreira — PAP Técnico Design e Comunicação Gráfica
          </p>
        </div>
      </div>
    </footer>
  )
}

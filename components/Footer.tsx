import Link from 'next/link'
import { collections } from '@/lib/data'

const nav = [
  { href: '/collections', label: 'Coleções' },
  { href: '/about', label: 'Sobre a Marca' },
  { href: '/contact', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="border-t border-rim/30 bg-card">
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

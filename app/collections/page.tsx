import Link from 'next/link'
import { collections } from '@/lib/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coleções',
  description:
    'Explore as quatro coleções sazonais da Atlas Ousia — Portugal, Brasil, Marrocos e Japão.',
}

export default function CollectionsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 px-6 border-b border-rim/30">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">Coleções</p>
          <h1 className="font-display text-6xl md:text-7xl font-light text-cream mb-8 leading-tight">
            O Mapa Olfativo
          </h1>
          <p className="font-body text-sm text-stone max-w-lg leading-relaxed">
            Cada estação do ano é representada por uma nação e uma cor dominante. Lançamentos
            faseados e edições limitadas que coincidem com a entrada de cada estação.
          </p>
        </div>
      </section>

      {/* Collections list */}
      <section>
        <div className="max-w-6xl mx-auto">
          {collections.map((col, i) => (
            <Link
              key={col.slug}
              href={`/collections/${col.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between px-6 py-10 border-b border-rim/30 hover:bg-card transition-colors duration-200 gap-6"
            >
              <div className="flex items-start gap-8">
                <span className="font-body text-xs text-stone/30 mt-0.5 w-5 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: col.color }}
                    />
                    <p className="font-body text-xs tracking-[0.25em] uppercase text-stone">
                      {col.season}
                    </p>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-light text-cream mb-1">
                    {col.country}
                  </h2>
                  <p className="font-display text-base italic text-stone">{col.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 pl-13 md:pl-0 shrink-0">
                <div className="flex flex-wrap gap-2">
                  {col.notes.slice(0, 3).map((note) => (
                    <span
                      key={note}
                      className="font-body text-xs text-stone/50 border border-rim/50 px-3 py-1"
                    >
                      {note}
                    </span>
                  ))}
                </div>
                <span className="text-stone group-hover:text-gold transition-colors duration-200 shrink-0">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

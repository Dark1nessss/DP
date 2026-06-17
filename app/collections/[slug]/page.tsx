import { collections, getCollection } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BottleShowcase } from '@/components/BottleShowcase'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const col = getCollection(slug)
  if (!col) return {}
  return {
    title: `${col.season} — ${col.country}`,
    description: col.description.slice(0, 160),
  }
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const col = getCollection(slug)
  if (!col) notFound()

  const idx = collections.findIndex((c) => c.slug === slug)
  const prev = collections[(idx - 1 + collections.length) % collections.length]
  const next = collections[(idx + 1) % collections.length]

  // For the season accent color: winter is very dark, use a lighter variant for text
  const accentColor = col.color === '#0b2e22' ? '#4db394' : col.color

  return (
    <div className="pt-16">
      {/* Season hero */}
      <section
        className="relative py-36 px-6 overflow-hidden"
        style={{
          background: `linear-gradient(170deg, ${col.color}22 0%, transparent 60%)`,
          borderTop: `2px solid ${col.color}`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: accentColor }}
          >
            {col.season}
          </p>
          <h1 className="font-display text-7xl md:text-8xl font-light text-cream mb-4 leading-none">
            {col.country}
          </h1>
          <p className="font-display text-2xl font-light italic text-stone">{col.subtitle}</p>
        </div>

        {/* Decorative watermark letter */}
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-light leading-none pointer-events-none select-none"
          style={{
            fontSize: 'clamp(10rem, 28vw, 20rem)',
            color: `${col.color}10`,
            lineHeight: 1,
          }}
        >
          {col.country.charAt(0)}
        </span>
      </section>

      {/* Content */}
      <section className="py-24 px-6 border-t border-rim/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">
              A Essência
            </p>
            <p className="font-body text-sm text-stone leading-relaxed">{col.description}</p>
          </div>

          <div className="space-y-10">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">
                Notas Olfativas
              </p>
              <div className="flex flex-wrap gap-3">
                {col.notes.map((note) => (
                  <span
                    key={note}
                    className="font-body text-sm px-4 py-2 border"
                    style={{ borderColor: `${accentColor}50`, color: accentColor }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-rim/30" />

            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-4">
                Conceito de Embalagem
              </p>
              <p className="font-body text-sm text-stone leading-relaxed">{col.packaging}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottle showcase */}
      <section
        className="py-24 px-6 border-t border-rim/30 relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${col.color}15 0%, transparent 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">
                O Frasco
              </p>
              <h3 className="font-display text-4xl font-light text-cream mb-6">
                Materialidade e Design
              </h3>
              <p className="font-body text-sm text-stone leading-relaxed mb-6">
                Cada frasco é manufaturado em barro tradicional ou cerâmica, conferindo ao produto
                um caráter artesanal, orgânico e texturizado. A porosidade natural deste material
                garante o isolamento térmico ideal para a preservação das fragrâncias.
              </p>
              <ul className="space-y-4">
                {[
                  'Barro ou cerâmica de alta qualidade',
                  'Design artesanal e orgânico',
                  'Isolamento térmico natural',
                  'Durabilidade e peça decorativa de longa durabilidade',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="text-lg mt-0.5 shrink-0"
                      style={{ color: accentColor }}
                    >
                      ✦
                    </span>
                    <span className="font-body text-sm text-stone">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center md:justify-end animate-slide-up" style={{ animationDelay: '100ms' }}>
              <BottleShowcase color={col.color} season={col.season} />
            </div>
          </div>
        </div>
      </section>

      {/* Collection navigation */}
      <section className="border-t border-rim/30">
        <div className="max-w-6xl mx-auto grid grid-cols-2 divide-x divide-rim/30">
          <Link
            href={`/collections/${prev.slug}`}
            className="group p-10 hover:bg-card transition-colors duration-200"
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-stone mb-3">
              ← Anterior
            </p>
            <p className="font-display text-2xl font-light text-cream group-hover:text-gold transition-colors duration-200">
              {prev.country}
            </p>
            <p className="font-body text-xs text-stone">{prev.season}</p>
          </Link>
          <Link
            href={`/collections/${next.slug}`}
            className="group p-10 text-right hover:bg-card transition-colors duration-200"
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-stone mb-3">
              Próxima →
            </p>
            <p className="font-display text-2xl font-light text-cream group-hover:text-gold transition-colors duration-200">
              {next.country}
            </p>
            <p className="font-body text-xs text-stone">{next.season}</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

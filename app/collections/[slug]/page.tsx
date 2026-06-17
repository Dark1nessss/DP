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

  // For the season accent color: winter uses a brighter green variant for better contrast
  const accentColor = col.slug === 'winter' ? '#4db394' : col.color

  return (
    <div className="pt-16">
      {/* Season hero - with rich background gradient */}
      <section
        className="relative py-36 px-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${col.color}50 0%, ${col.color}25 50%, #060e09 100%)`,
          borderTop: `3px solid ${col.color}`,
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
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
            color: `${col.color}08`,
            lineHeight: 1,
          }}
        >
          {col.country.charAt(0)}
        </span>

        {/* Accent glow */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 100% 0%, ${col.color}30 0%, transparent 70%)`,
          }}
        />
      </section>

      {/* Content */}
      <section className="py-24 px-6 border-b border-rim/30 bg-gradient-to-b from-card/50 to-ink">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-slide-up">
            <div
              className="h-1 mb-6 w-12"
              style={{ backgroundColor: col.color }}
            />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">
              A Essência
            </p>
            <p className="font-body text-sm text-stone leading-relaxed">{col.description}</p>
          </div>

          <div className="space-y-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">
                Notas Olfativas
              </p>
              <div className="flex flex-wrap gap-3">
                {col.notes.map((note) => (
                  <span
                    key={note}
                    className="font-body text-sm px-4 py-2 border backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    style={{ borderColor: `${accentColor}60`, color: accentColor }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="h-px"
              style={{ backgroundColor: `${col.color}30` }}
            />

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
        className="py-32 px-6 border-b border-rim/30 relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${col.color}30 0%, ${col.color}12 50%, #060e09 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="mb-12 pb-8 border-b"
            style={{ borderColor: `${col.color}30` }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-3">
              O Frasco
            </p>
            <h3 className="font-display text-5xl font-light text-cream">
              Materialidade e Design
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <p className="font-body text-sm text-stone leading-relaxed mb-8">
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
                      className="text-lg mt-0.5 shrink-0 animate-glow-pulse"
                      style={{ color: accentColor }}
                    >
                      ✦
                    </span>
                    <span className="font-body text-sm text-stone mt-1.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center md:justify-end animate-slide-up" style={{ animationDelay: '100ms' }}>
              <BottleShowcase color={col.color} season={col.season} />
            </div>
          </div>
        </div>

        {/* Decorative accent */}
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 opacity-10 pointer-events-none select-none"
          style={{
            background: `radial-gradient(circle, ${col.color} 0%, transparent 70%)`,
          }}
        />
      </section>

      {/* Collection navigation */}
      <section className="border-t border-rim/30 bg-gradient-to-b from-card/30 to-card/60">
        <div className="max-w-7xl mx-auto grid grid-cols-2 divide-x divide-rim/30">
          <Link
            href={`/collections/${prev.slug}`}
            className="group p-10 hover:bg-card/40 transition-all duration-300"
            style={{
              borderColor: `${prev.color}30`,
            }}
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-stone/60 mb-3 group-hover:text-stone transition-colors">
              ← Anterior
            </p>
            <p
              className="font-display text-2xl font-light text-cream group-hover:scale-105 transition-transform duration-200 origin-left"
              style={{
                color: prev.color,
              }}
            >
              {prev.country}
            </p>
            <p className="font-body text-xs text-stone/50 mt-1">{prev.season}</p>
          </Link>
          <Link
            href={`/collections/${next.slug}`}
            className="group p-10 text-right hover:bg-card/40 transition-all duration-300"
            style={{
              borderColor: `${next.color}30`,
            }}
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-stone/60 mb-3 group-hover:text-stone transition-colors">
              Próxima →
            </p>
            <p
              className="font-display text-2xl font-light text-cream group-hover:scale-105 transition-transform duration-200 origin-right"
              style={{
                color: next.color,
              }}
            >
              {next.country}
            </p>
            <p className="font-body text-xs text-stone/50 mt-1">{next.season}</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

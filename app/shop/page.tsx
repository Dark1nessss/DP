import { collections } from '@/lib/data'
import { BottleShowcase } from '@/components/BottleShowcase'
import { ShopCard } from '@/components/ShopCard'
import { SeasonalLaunch } from '@/components/SeasonalLaunch'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Explore e adquira as coleções de difusores de ambiente Atlas Ousia.',
}

export default function ShopPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative py-28 px-6 overflow-hidden bg-ink bg-cartography">
        <div className="pointer-events-none absolute inset-0 bg-polyhedron opacity-50" />
        <div className="pointer-events-none absolute top-10 right-[8%] w-40 h-40 border border-gold/25 rotate-12 hidden md:block" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-cream/20" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="animate-reveal-rise max-w-3xl">
            <p className="font-body text-xs tracking-imperial uppercase text-gold mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-gold" /> Shop
            </p>
            <h1 className="font-display text-7xl md:text-9xl font-light text-cream mb-6 leading-none">
              A Coleção
            </h1>
            <div className="rule-ornate max-w-xs mb-6" />
            <p className="font-body text-sm text-stone max-w-2xl leading-relaxed">
              Cada frasco é uma peça de coleção — uma viagem sensorial pelos quatro continentes.
              Lançamentos sazonais e edições limitadas que coincidem com a entrada de cada estação.
            </p>
          </div>
        </div>

        {/* Decorative accent */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.06] pointer-events-none select-none overflow-hidden">
          <span className="font-subtitle text-[40rem] font-light text-cream">✦</span>
        </div>
      </section>

      {/* Bottles showcase — textured seasonal panels */}
      <section className="relative py-28 px-6 overflow-hidden bg-card">
        <div className="pointer-events-none absolute inset-0 bg-cartography opacity-60" />
        <div className="pointer-events-none absolute top-0 left-0 w-1/3 h-96 bg-summer/10 -skew-y-3" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-1/3 h-96 bg-autumn/10 skew-y-3" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-cream/20" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((col, i) => (
              <div
                key={col.slug}
                className="animate-reveal-rise corner-ornaments group relative overflow-hidden transition-all duration-500 hover:shadow-jewel"
                style={{
                  border: `1px solid ${col.color}`,
                  background: `linear-gradient(160deg, ${col.color}12 0%, #ffffff 70%)`,
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <span className="glint-overlay opacity-0 group-hover:opacity-100" />
                <BottleShowcase color={col.color} season={col.season} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection details grid */}
      <section className="relative py-28 px-6 overflow-hidden bg-ink bg-cartography">
        <div className="absolute inset-x-0 bottom-0 h-px bg-cream/20" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-imperial uppercase text-gold mb-16 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-gold" /> As Coleções
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collections.map((col) => (
              <ShopCard
                key={col.slug}
                season={col.season}
                color={col.color}
                country={col.country}
                subtitle={col.subtitle}
                description={col.description}
                notes={col.notes}
                slug={col.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Packaging info */}
      <section className="relative py-32 px-6 overflow-hidden bg-card bg-polyhedron">
        <div className="absolute inset-x-0 bottom-0 h-px bg-cream/20" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="corner-ornaments frame-double bg-ink/60 backdrop-blur-sm px-8 py-16 md:px-16 text-center">
            <span className="text-gold font-subtitle text-3xl block mb-8 animate-sparkle select-none">
              ✦
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-8 leading-tight">
              Sistema Modular de Embalagem
            </h2>
            <p className="font-body text-sm text-stone leading-relaxed max-w-2xl mx-auto mb-10">
              Cada embalagem é dotada de total independência estética. A estrutura modular permite
              que as caixas se encaixem entre si, criando um puzzle volumétrico interativo — um
              sistema de upcycling decorativo com premissa de resíduo zero.
            </p>

            <div className="rule-ornate max-w-xs mx-auto mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
              <div className="border border-cream/40 bg-ink/40 p-8 hover:border-gold/60 transition-colors duration-300">
                <p className="font-display text-xl text-cream mb-3">Modelo Maximalista</p>
                <p className="font-body text-xs text-stone leading-relaxed">
                  Grande impacto visual onde o mosaico cultural e as abas em formato de montanha
                  preenchem o espaço decorativo com sofisticação.
                </p>
              </div>
              <div className="border border-cream/40 bg-ink/40 p-8 hover:border-gold/60 transition-colors duration-300">
                <p className="font-display text-xl text-cream mb-3">Modelo Minimalista</p>
                <p className="font-body text-xs text-stone leading-relaxed">
                  Sobriedade e versatilidade para espaços reduzidos. Pode utilizar a própria caixa
                  como plataforma de elevação para o frasco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal launches */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-12">
            Estratégia Sazonal
          </p>
          <h2 className="font-display text-5xl font-light text-cream mb-16 leading-tight">
            Edições Limitadas
          </h2>

          <div className="space-y-6">
            <SeasonalLaunch
              month="Dezembro — Fevereiro"
              season="Inverno"
              desc="Lançamento da coleção Portugal com Verde Floresta Radiante."
              color="#2f7f5b"
              slug="winter"
            />
            <SeasonalLaunch
              month="Março — Maio"
              season="Primavera"
              desc="Edição limitada Japão com Amarelo Prímula e inspiração Sakura."
              color="#ebeca0"
              slug="spring"
            />
            <SeasonalLaunch
              month="Junho — Agosto"
              season="Verão"
              desc="Vibração tropical Brasil com Verde Menta e frescura de Ciano."
              color="#4db394"
              slug="summer"
            />
            <SeasonalLaunch
              month="Setembro — Novembro"
              season="Outono"
              desc="Calor do Âmbar — Marrocos com Rosa Quartzo e especiarias."
              color="#f9aeb7"
              slug="autumn"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

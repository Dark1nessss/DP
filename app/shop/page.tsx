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
    <div className="pt-16">
      {/* Hero */}
      <section
        className="relative py-32 px-6 border-b border-rim/30 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0c1a12 0%, #060e09 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="animate-slide-up">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">Shop</p>
            <h1 className="font-display text-7xl md:text-8xl font-light text-cream mb-6 leading-none">
              A Coleção
            </h1>
            <p className="font-body text-sm text-stone max-w-2xl leading-relaxed">
              Cada frasco é uma peça de coleção — uma viagem sensorial pelos quatro continentes.
              Lançamentos sazonais e edições limitadas que coincidem com a entrada de cada estação.
            </p>
          </div>
        </div>

        {/* Decorative accent */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none select-none">
          <span className="font-display text-[40rem] font-light text-gold">✦</span>
        </div>
      </section>

      {/* Bottles showcase */}
      <section className="py-32 px-6 border-b border-rim/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {collections.map((col, i) => (
              <div
                key={col.slug}
                className="animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <BottleShowcase color={col.color} season={col.season} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection details grid */}
      <section className="py-32 px-6 border-b border-rim/30">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-16">
            As Coleções
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rim/30">
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
      <section className="py-32 px-6 border-b border-rim/30 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-display text-2xl block mb-8 opacity-40 select-none">
            ✦
          </span>
          <h2 className="font-display text-5xl font-light text-cream mb-8 leading-tight">
            Sistema Modular de Embalagem
          </h2>
          <p className="font-body text-sm text-stone leading-relaxed max-w-2xl mx-auto mb-10">
            Cada embalagem é dotada de total independência estética. A estrutura modular permite
            que as caixas se encaixem entre si, criando um puzzle volumétrico interativo — um
            sistema de upcycling decorativo com premissa de resíduo zero.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="border border-rim/50 p-8">
              <p className="font-display text-lg text-cream mb-3">Modelo Maximalista</p>
              <p className="font-body text-xs text-stone leading-relaxed">
                Grande impacto visual onde o mosaico cultural e as abas em formato de montanha
                preenchem o espaço decorativo com sofisticação.
              </p>
            </div>
            <div className="border border-rim/50 p-8">
              <p className="font-display text-lg text-cream mb-3">Modelo Minimalista</p>
              <p className="font-body text-xs text-stone leading-relaxed">
                Sobriedade e versatilidade para espaços reduzidos. Pode utilizar a própria caixa
                como plataforma de elevação para o frasco.
              </p>
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
              desc="Lançamento da coleção Portugal com Verde Floresta Profunda."
              color="#0b2e22"
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

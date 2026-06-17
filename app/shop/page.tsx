import { collections } from '@/lib/data'
import { BottleShowcase } from '@/components/BottleShowcase'
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
              <div key={col.slug} className="bg-card p-8 hover:bg-rim/20 transition-colors duration-300">
                <div
                  className="h-1 mb-6"
                  style={{ backgroundColor: col.color, width: '40px' }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/60 mb-2">
                      {col.season}
                    </p>
                    <h3 className="font-display text-3xl font-light text-cream">{col.country}</h3>
                  </div>
                  <span
                    className="text-3xl font-light opacity-10 select-none"
                    style={{ color: col.color }}
                  >
                    ✦
                  </span>
                </div>

                <p className="font-display text-base italic text-stone mb-6">{col.subtitle}</p>

                <p className="font-body text-sm text-stone/70 leading-relaxed mb-6">
                  {col.description.substring(0, 200)}...
                </p>

                <div className="flex flex-wrap gap-2">
                  {col.notes.map((note) => (
                    <span
                      key={note}
                      className="font-body text-xs px-3 py-1 border"
                      style={{
                        borderColor: `${col.color}40`,
                        color: col.color,
                      }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
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
            {[
              {
                month: 'Dezembro — Fevereiro',
                season: 'Inverno',
                desc: 'Lançamento da coleção Portugal com Verde Floresta Profunda.',
              },
              {
                month: 'Março — Maio',
                season: 'Primavera',
                desc: 'Edição limitada Japão com Amarelo Prímula e inspiração Sakura.',
              },
              {
                month: 'Junho — Agosto',
                season: 'Verão',
                desc: 'Vibração tropical Brasil com Verde Menta e frescura de Ciano.',
              },
              {
                month: 'Setembro — Novembro',
                season: 'Outono',
                desc: 'Calor do Âmbar — Marrocos com Rosa Quartzo e especiarias.',
              },
            ].map(({ month, season, desc }) => (
              <div
                key={season}
                className="flex flex-col md:flex-row md:items-center justify-between p-8 border-b border-rim/30 hover:bg-card transition-colors duration-300 group"
              >
                <div className="flex-1 mb-4 md:mb-0">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/50 mb-2">
                    {month}
                  </p>
                  <p className="font-display text-2xl font-light text-cream group-hover:text-gold transition-colors duration-200">
                    {season}
                  </p>
                  <p className="font-body text-sm text-stone mt-2">{desc}</p>
                </div>
                <span className="text-stone group-hover:text-gold transition-colors duration-200 text-lg shrink-0">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

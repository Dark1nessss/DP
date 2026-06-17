import Link from 'next/link'
import { collections } from '@/lib/data'
import { BottleShowcase } from '@/components/BottleShowcase'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atlas Ousia — Essências do Mundo',
  description:
    'Difusores de Ambiente Sazonais e Multiculturais. Uma viagem olfativa pelo mundo.',
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at 50% 45%, #102818 0%, #060e09 65%)',
        }}
      >
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-gold font-display text-3xl mb-10 opacity-50 select-none">✦</span>

          <h1
            className="font-display font-light text-cream tracking-[0.08em] mb-6 leading-none"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 8.5rem)' }}
          >
            Atlas Ousia
          </h1>

          <div className="w-20 h-px bg-gold/40 mb-6" />

          <p className="font-display text-2xl md:text-3xl font-light text-stone tracking-[0.04em] mb-3">
            Essências do Mundo
          </p>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-stone/50 mb-14">
            Difusores de Ambiente Sazonais e Multiculturais
          </p>

          <Link
            href="/collections"
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Explorar Coleções
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone/25">
          <span className="font-body text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-stone/20" />
        </div>
      </section>

      {/* ── Collections ── */}
      <section className="py-24 px-6 border-t border-rim/30 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section header with accent bar */}
          <div className="mb-20 flex items-end gap-6">
            <div className="flex-1">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6 block">
                A Coleção
              </p>
              <h2 className="font-display text-6xl md:text-7xl font-light text-cream leading-tight">
                Uma Viagem
                <br />
                <span className="relative inline-block">
                  Olfativa
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-transparent" />
                </span>
              </h2>
            </div>
            <div className="hidden md:block w-20 h-20 border-2 border-gold/20 rotate-45 flex items-center justify-center">
              <span className="font-display text-gold/30 text-lg -rotate-45">✦</span>
            </div>
          </div>

          {/* Collections Grid - Masonry-like layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((col, idx) => (
              <Link
                key={col.slug}
                href={`/collections/${col.slug}`}
                className={`group relative overflow-hidden rounded-lg transition-all duration-500 hover:shadow-2xl animate-slide-up ${
                  idx === 0 ? 'md:col-span-2 md:row-span-2' : 'md:row-span-1'
                }`}
                style={{
                  background: `linear-gradient(135deg, ${col.color}25 0%, ${col.color}08 100%)`,
                  border: `1px solid ${col.color}20`,
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                {/* Animated background accent */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${col.color}30 0%, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div
                  className={`relative z-10 p-8 flex flex-col h-full ${idx === 0 ? 'justify-between' : ''}`}
                >
                  {/* Top accent */}
                  <div>
                    <div
                      className="h-1 mb-6 w-12 group-hover:w-16 transition-all duration-300"
                      style={{ backgroundColor: col.color }}
                    />

                    <div className="mb-8">
                      <p
                        className="font-body text-xs tracking-[0.3em] uppercase mb-2 group-hover:text-gold transition-colors"
                        style={{ color: col.color }}
                      >
                        {col.season}
                      </p>
                      <h3 className="font-display text-4xl md:text-5xl font-light text-cream group-hover:text-gold transition-colors duration-300">
                        {col.country}
                      </h3>
                    </div>

                    <p className="font-display text-lg italic text-stone/70 mb-6">{col.subtitle}</p>
                  </div>

                  {/* Bottom section */}
                  <div className="flex items-end justify-between">
                    <div className="flex flex-wrap gap-2">
                      {col.notes.slice(0, 2).map((note) => (
                        <span
                          key={note}
                          className="font-body text-xs px-3 py-1.5 rounded transition-all duration-300 group-hover:bg-gold/20"
                          style={{
                            color: col.color,
                            border: `1px solid ${col.color}40`,
                          }}
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                    <span
                      className="text-lg font-light group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300"
                      style={{ color: col.color }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto ── */}
      <section className="py-24 px-6 border-t border-rim/30 bg-gradient-to-br from-card/50 to-card/20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-gold font-display text-3xl block mb-8 opacity-60 select-none animate-glow-pulse">
            ✦
          </span>
          <blockquote className="font-display text-5xl md:text-6xl font-light text-cream leading-tight mb-10 text-balance">
            &quot;Cada frasco é pensado para ser uma peça de coleção, despertando curiosidade sobre a
            cultura representada.&quot;
          </blockquote>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-10">
            Carolina Ferreira — Atlas Ousia
          </p>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10" />
          <Link
            href="/about"
            className="font-body text-xs tracking-[0.25em] uppercase text-gold hover:text-cream transition-colors duration-200 inline-block"
          >
            Sobre a Marca →
          </Link>
        </div>
      </section>

      {/* ── Bottle Showcase ── */}
      <section className="py-24 px-6 border-t border-rim/30 bg-gradient-to-b from-card/30 to-ink relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex items-end justify-between">
            <div className="animate-slide-up">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                As Essências
              </p>
              <h2 className="font-display text-6xl md:text-7xl font-light text-cream leading-tight">
                Conheça
                <br />
                Cada Frasco
              </h2>
            </div>
            <div className="hidden md:block w-12 h-12 border border-gold/20 rounded-full flex items-center justify-center opacity-50">
              <span className="font-display text-gold/50 text-xs">✦</span>
            </div>
          </div>

          {/* Asymmetrical grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
            {collections.map((col, i) => (
              <div
                key={col.slug}
                className={`animate-slide-up ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ animationDelay: `${i * 75}ms` }}
              >
                <div
                  className="h-full rounded-lg p-6 flex flex-col items-center justify-center border transition-all duration-500 hover:border-gold/40 group"
                  style={{
                    background: `linear-gradient(135deg, ${col.color}15 0%, ${col.color}05 100%)`,
                    border: `1px solid ${col.color}25`,
                  }}
                >
                  <BottleShowcase color={col.color} season={col.season} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center animate-slide-up">
            <Link
              href="/shop"
              className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300 inline-block"
            >
              Ver Shop Completo →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Concept ── */}
      <section className="py-24 px-6 border-t border-rim/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text with accent */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <div className="h-1 w-12 bg-gold mb-6" />
              <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-4">
                Embalagem
              </p>
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-8 leading-tight">
              O Sistema
              <br />
              <span className="relative inline-block">
                Modular
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gold via-gold to-transparent" />
              </span>
            </h2>

            <p className="font-body text-sm text-stone leading-relaxed mb-12">
              Através do estudo de planificações de poliedros, a caixa ao abrir-se revela uma
              estrutura de abas triangulares que simulam a silhueta de uma cordilheira de montanhas.
              As embalagens encaixam entre si, criando um puzzle volumétrico interativo.
            </p>

            {/* Feature list with icons */}
            <div className="space-y-4">
              {[
                { title: 'Maximalista', desc: 'Grande impacto visual e decorativo' },
                { title: 'Minimalista', desc: 'Sobriedade para espaços reduzidos' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start group">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/40 transition-colors">
                    <span className="font-display text-gold text-xs">✦</span>
                  </div>
                  <div>
                    <p className="font-display text-lg font-light text-cream mb-1">{item.title}</p>
                    <p className="font-body text-xs text-stone leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Decorative visual */}
          <div className="flex items-center justify-center py-16 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="relative w-72 h-72">
              {/* Rotating decorative frame */}
              <div className="absolute inset-0 border-2 border-gold/20 rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              <div className="absolute inset-4 border border-gold/10 rounded-lg -rotate-12 group-hover:rotate-0 transition-transform duration-500" />

              {/* Center glyph */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-display text-8xl text-gold/20 block leading-none mb-4">✦</span>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/50">
                    Puzzle Volumétrico
                  </p>
                </div>
              </div>

              {/* Floating accents */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-gold/40 rounded-full animate-float" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-gold/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

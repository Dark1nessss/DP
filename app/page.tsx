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
      <section className="py-28 px-6 border-t border-rim/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-5">
              A Coleção
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-cream leading-tight">
              Uma Viagem Olfativa
              <br />
              Pelo Mundo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rim/30">
            {collections.map((col) => (
              <Link
                key={col.slug}
                href={`/collections/${col.slug}`}
                className="group bg-ink hover:bg-card px-10 py-10 transition-colors duration-300 flex flex-col"
              >
                <div className="h-0.5 mb-8" style={{ backgroundColor: col.color }} />

                <div className="flex justify-between items-start mb-5">
                  <div>
                    <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-2">
                      {col.season}
                    </p>
                    <h3 className="font-display text-3xl font-light text-cream">{col.country}</h3>
                  </div>
                  <span className="text-stone group-hover:text-gold transition-colors duration-200 text-lg mt-1">
                    →
                  </span>
                </div>

                <p className="font-display text-base italic text-stone mb-8">{col.subtitle}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {col.notes.map((note) => (
                    <span
                      key={note}
                      className="font-body text-xs text-stone/50 border border-rim/60 px-3 py-1"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto ── */}
      <section className="py-28 px-6 border-t border-rim/30 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-display text-xl block mb-8 opacity-50 select-none">
            ✦
          </span>
          <blockquote className="font-display text-4xl md:text-5xl font-light text-cream leading-tight mb-8 text-balance">
            &quot;Cada frasco é pensado para ser uma peça de coleção, despertando curiosidade sobre a
            cultura representada.&quot;
          </blockquote>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-10">
            Carolina Ferreira — Atlas Ousia
          </p>
          <Link
            href="/about"
            className="font-body text-xs tracking-[0.25em] uppercase text-gold hover:text-cream transition-colors duration-200"
          >
            Sobre a Marca →
          </Link>
        </div>
      </section>

      {/* ── Bottle Showcase ── */}
      <section className="py-28 px-6 border-t border-rim/30 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-slide-up">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-5">
              As Essências
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-cream leading-tight">
              Conheça Cada Frasco
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {collections.map((col, i) => (
              <div key={col.slug} className="animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <BottleShowcase color={col.color} season={col.season} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-slide-up">
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
      <section className="py-28 px-6 border-t border-rim/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">
              Embalagem
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-6">
              O Sistema Modular
            </h2>
            <p className="font-body text-sm text-stone leading-relaxed mb-10">
              Através do estudo de planificações de poliedros, a caixa ao abrir-se revela uma
              estrutura de abas triangulares que simulam a silhueta de uma cordilheira de montanhas.
              As embalagens encaixam entre si, criando um puzzle volumétrico interativo.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-gold/30 pl-5">
                <p className="font-display text-lg text-cream mb-1">Maximalista</p>
                <p className="font-body text-xs text-stone leading-relaxed">
                  Grande impacto visual e decorativo
                </p>
              </div>
              <div className="border-l-2 border-gold/30 pl-5">
                <p className="font-display text-lg text-cream mb-1">Minimalista</p>
                <p className="font-body text-xs text-stone leading-relaxed">
                  Sobriedade para espaços reduzidos
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-16">
            <div className="relative flex flex-col items-center">
              <div className="w-44 h-44 border border-rim rotate-45 flex items-center justify-center">
                <div className="w-20 h-20 border border-gold/25 flex items-center justify-center">
                  <div className="w-8 h-8 border border-gold/15 flex items-center justify-center">
                    <span className="text-gold/30 font-display -rotate-45 text-xs select-none">
                      ✦
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-body text-xs text-stone/30 tracking-[0.3em] uppercase mt-8">
                Conceito Modular
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'
import Image from 'next/image'
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
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-ink bg-cartography">
        {/* Layered watermark textures */}
        <div className="pointer-events-none absolute inset-0 bg-polyhedron opacity-50" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[820px] h-[820px] bg-topo opacity-40 rounded-full" />

        {/* Floating geometric accents */}
        <div className="pointer-events-none absolute top-32 left-[8%] w-28 h-28 border border-cream/15 rotate-45 hidden md:block" />
        <div className="pointer-events-none absolute bottom-40 right-[10%] w-40 h-40 border border-gold/25 rotate-12 hidden md:block" />
        <div className="pointer-events-none absolute top-1/3 right-[18%] text-gold/40 text-xl animate-sparkle hidden md:block">
          ✦
        </div>
        <div
          className="pointer-events-none absolute bottom-1/3 left-[16%] text-gold/30 text-sm animate-sparkle hidden md:block"
          style={{ animationDelay: '1s' }}
        >
          ✦
        </div>

        {/* Central ornate composition */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto py-32">
          {/* Logo inside a double ornamental frame */}
          <div className="relative animate-reveal-frame mb-10">
            <div className="corner-ornaments frame-double bg-ink/70 backdrop-blur-sm px-12 py-10 md:px-20 md:py-12">
              <Image
                src="/images/logo-atlas-ousia.png"
                alt="Atlas Ousia"
                width={360}
                height={250}
                priority
                className="w-auto h-36 md:h-52 object-contain select-none mx-auto"
              />
            </div>
            {/* overlapping accent tags */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink px-4 font-subtitle italic text-gold text-sm">
              est. MMXXIV
            </span>
          </div>

          <h1
            className="font-display font-light text-cream tracking-imperial leading-none mb-8 animate-reveal-rise"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 8.5rem)', animationDelay: '0.2s' }}
          >
            Atlas Ousia
          </h1>

          <div className="w-full max-w-xs rule-ornate mb-8 animate-reveal-rise" style={{ animationDelay: '0.35s' }} />

          <p
            className="font-subtitle text-3xl md:text-4xl text-stone tracking-[0.04em] mb-4 animate-reveal-rise"
            style={{ animationDelay: '0.45s' }}
          >
            Essências do Mundo
          </p>
          <p
            className="font-body text-xs tracking-imperial uppercase text-stone/70 mb-12 animate-reveal-rise"
            style={{ animationDelay: '0.55s' }}
          >
            Difusores de Ambiente Sazonais e Multiculturais
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-4 animate-reveal-rise"
            style={{ animationDelay: '0.65s' }}
          >
            <Link
              href="/collections"
              className="group relative font-body text-xs tracking-imperial uppercase px-10 py-4 bg-cream text-ink overflow-hidden transition-colors duration-300 hover:bg-gold"
            >
              <span className="relative z-10">Explorar Coleções</span>
              <span className="glint-overlay" />
            </Link>
            <Link
              href="/shop"
              className="font-body text-xs tracking-imperial uppercase px-10 py-4 border border-cream/50 text-cream hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Ver Shop
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone/40">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-stone/40 to-transparent" />
        </div>
      </section>

      {/* ════════ COLLECTIONS ════════ */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* textured seasonal background blocks */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-72 bg-spring/10 -skew-y-3" />
          <div className="absolute bottom-20 left-0 w-2/5 h-80 bg-autumn/10 skew-y-3" />
          <div className="absolute inset-0 bg-cartography opacity-60" />
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-cream/20" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* asymmetric ornate header */}
          <div className="mb-20 flex flex-col md:flex-row md:items-end gap-8">
            <div className="flex-1">
              <p className="font-body text-xs tracking-imperial uppercase text-gold mb-5 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-gold" /> A Coleção
              </p>
              <h2 className="font-display text-6xl md:text-8xl font-light text-cream leading-[0.95]">
                Uma Viagem
                <br />
                <span className="relative inline-block italic">
                  Olfativa
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-transparent" />
                </span>
              </h2>
            </div>
            <div className="hidden md:flex w-24 h-24 border-2 border-gold/30 rotate-45 items-center justify-center shrink-0">
              <span className="font-subtitle text-gold/50 text-2xl -rotate-45">✦</span>
            </div>
          </div>

          {/* Collections grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((col, idx) => (
              <Link
                key={col.slug}
                href={`/collections/${col.slug}`}
                className={`group corner-ornaments relative overflow-hidden transition-all duration-500 hover:shadow-jewel animate-reveal-rise ${
                  idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{
                  background: `linear-gradient(135deg, ${col.color}16 0%, #ffffff 60%)`,
                  border: `1px solid ${col.color}`,
                  animationDelay: `${idx * 120}ms`,
                }}
              >
                {/* hover wash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${col.color}26 0%, transparent 65%)`,
                  }}
                />
                <span className="glint-overlay opacity-0 group-hover:opacity-100" />

                <div className={`relative z-10 p-8 flex flex-col h-full ${idx === 0 ? 'justify-between min-h-[26rem]' : ''}`}>
                  <div>
                    <div
                      className="h-1 mb-6 w-12 group-hover:w-20 transition-all duration-300"
                      style={{ backgroundColor: col.color }}
                    />
                    <div className="mb-6">
                      <p
                        className="font-body text-xs tracking-imperial uppercase mb-3"
                        style={{ color: col.color }}
                      >
                        {col.season} · {col.country}
                      </p>
                      <h3
                        className={`font-display font-light text-cream leading-none ${idx === 0 ? 'text-5xl md:text-6xl' : 'text-4xl'}`}
                      >
                        {col.country}
                      </h3>
                    </div>
                    <p className="font-subtitle text-xl italic text-stone mb-6">{col.subtitle}</p>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {col.notes.slice(0, idx === 0 ? 4 : 2).map((note) => (
                        <span
                          key={note}
                          className="font-body text-[10px] tracking-wide uppercase px-3 py-1.5 transition-all duration-300"
                          style={{ color: col.color, border: `1px solid ${col.color}55` }}
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                    <span
                      className="text-2xl font-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
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

      {/* ════════ MANIFESTO ════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-card bg-polyhedron">
        <div className="absolute inset-x-0 top-0 h-px bg-cream/20" />
        {/* ornate framed quote */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="corner-ornaments frame-double bg-ink/60 backdrop-blur-sm px-8 py-16 md:px-16 md:py-20 text-center">
            <span className="text-gold font-subtitle text-4xl block mb-8 animate-sparkle select-none">✦</span>
            <blockquote className="font-display text-4xl md:text-6xl font-light text-cream leading-tight mb-10 text-balance">
              &quot;Cada frasco é pensado para ser uma peça de coleção, despertando curiosidade
              sobre a cultura representada.&quot;
            </blockquote>
            <div className="rule-ornate max-w-xs mx-auto mb-8" />
            <p className="font-body text-xs tracking-imperial uppercase text-stone mb-10">
              Carolina Ferreira — Atlas Ousia
            </p>
            <Link
              href="/about"
              className="font-subtitle italic text-lg text-gold hover:text-cream transition-colors duration-200 inline-block"
            >
              Sobre a Marca →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ BOTTLE SHOWCASE ════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-cartography opacity-70" />
        <div className="pointer-events-none absolute top-1/4 -left-20 w-96 h-96 bg-summer/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 -right-20 w-96 h-96 bg-autumn/10 rounded-full blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-cream/20" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="font-body text-xs tracking-imperial uppercase text-gold mb-5 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-gold" /> As Essências
              </p>
              <h2 className="font-display text-6xl md:text-8xl font-light text-cream leading-[0.95]">
                Conheça
                <br />
                <span className="italic">Cada Frasco</span>
              </h2>
            </div>
            <p className="font-subtitle italic text-xl text-stone max-w-sm md:text-right">
              Joias olfativas moldadas para celebrar quatro culturas, quatro estações.
            </p>
          </div>

          {/* Asymmetric jewel grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
            {collections.map((col, i) => (
              <div
                key={col.slug}
                className={`animate-reveal-rise ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="corner-ornaments group relative h-full overflow-hidden transition-all duration-500 hover:shadow-jewel"
                  style={{
                    background: `linear-gradient(160deg, ${col.color}14 0%, #ffffff 70%)`,
                    border: `1px solid ${col.color}`,
                  }}
                >
                  <span className="glint-overlay opacity-0 group-hover:opacity-100" />
                  <BottleShowcase color={col.color} season={col.season} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center animate-reveal-rise">
            <Link
              href="/shop"
              className="group relative font-body text-xs tracking-imperial uppercase px-12 py-4 bg-cream text-ink overflow-hidden transition-colors duration-300 hover:bg-gold inline-block"
            >
              <span className="relative z-10">Ver Shop Completo →</span>
              <span className="glint-overlay" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ CONCEPT ════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-card bg-cartography">
        <div className="absolute inset-x-0 top-0 h-px bg-cream/20" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div className="animate-reveal-rise">
            <p className="font-body text-xs tracking-imperial uppercase text-gold mb-5 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-gold" /> Embalagem
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-cream mb-8 leading-tight">
              O Sistema
              <br />
              <span className="italic relative inline-block">
                Modular
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-transparent" />
              </span>
            </h2>
            <p className="font-body text-sm text-stone leading-relaxed mb-12 max-w-md">
              Através do estudo de planificações de poliedros, a caixa ao abrir-se revela uma
              estrutura de abas triangulares que simulam a silhueta de uma cordilheira de montanhas.
              As embalagens encaixam entre si, criando um puzzle volumétrico interativo.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Maximalista', desc: 'Grande impacto visual e decorativo' },
                { title: 'Minimalista', desc: 'Sobriedade para espaços reduzidos' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-4 items-start border border-rim hover:border-gold/60 bg-ink/50 p-5 transition-colors duration-300"
                >
                  <div className="w-9 h-9 border border-gold/40 rotate-45 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors">
                    <span className="font-subtitle text-gold text-sm -rotate-45">✦</span>
                  </div>
                  <div>
                    <p className="font-display text-xl font-light text-cream mb-1">{item.title}</p>
                    <p className="font-body text-xs text-stone leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative layered visual */}
          <div className="flex items-center justify-center py-10 animate-reveal-rise" style={{ animationDelay: '120ms' }}>
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 border-2 border-gold/25 rotate-12" />
              <div className="absolute inset-6 border border-cream/20 -rotate-6" />
              <div className="absolute inset-12 frame-double bg-ink/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-subtitle text-8xl text-gold/30 block leading-none mb-4 animate-sparkle">✦</span>
                  <p className="font-body text-[10px] tracking-imperial uppercase text-stone/60">
                    Puzzle Volumétrico
                  </p>
                </div>
              </div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-gold/50 rotate-45" />
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-autumn/60 rotate-45" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

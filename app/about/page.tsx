import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre a Marca',
  description:
    'A história, filosofia e identidade por trás da Atlas Ousia — uma marca de difusores de ambiente premium.',
}

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-32 px-6 border-b border-rim/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto animate-slide-up relative z-10">
          <div className="h-1 w-12 bg-gold mb-8" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">
            Sobre a Marca
          </p>
          <h1 className="font-display text-7xl md:text-8xl font-light text-cream leading-tight mb-8">
            Uma Marca
            <br />
            <span className="relative inline-block">
              da Essência
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-transparent" />
            </span>
          </h1>
          <p className="font-body text-sm text-stone leading-relaxed max-w-3xl">
            O projeto Atlas Ousia nasce da ambição de criar uma marca de design de fragrâncias e
            difusores de ambiente premium que funde a exploração geográfica com o conceito de
            bem-estar — um mapeamento olfativo e sensorial do mundo.
          </p>
        </div>
      </section>

      {/* Naming - Enhanced layout */}
      <section className="py-24 px-6 border-b border-rim/30 bg-gradient-to-br from-card/30 to-card/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-slide-up">
            <div className="h-1 w-12 bg-gold mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-4">
              O Naming
            </p>
            <h2 className="font-display text-6xl md:text-7xl font-light text-cream leading-tight">
              Duas Palavras
              <br />
              Uma Filosofia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            {[
              {
                word: 'Atlas',
                desc: 'Remete para a cartografia e para as coleções de mapas que descrevem o mundo, simbolizando o caráter multicultural e a viagem geográfica que a marca propõe através dos aromas.',
                bgColor: '#c9a86c',
              },
              {
                word: 'Ousia',
                greek: '(οὐσία)',
                desc: 'Termo filosófico grego que significa "Essência" ou "Substância". A busca pela essência mais pura de cada cultura e a alma do produto — as essências aromáticas.',
                bgColor: '#4db394',
              },
            ].map(({ word, greek, desc, bgColor }, idx) => (
              <div
                key={word}
                className={`p-8 border border-rim/30 rounded-lg hover:border-rim/60 transition-all duration-300 group backdrop-blur-sm animate-slide-in-${idx === 0 ? 'left' : 'right'}`}
                style={{
                  background: `linear-gradient(135deg, ${bgColor}10 0%, ${bgColor}05 100%)`,
                  borderColor: `${bgColor}40`,
                }}
              >
                <div className="h-1 w-8 mb-4" style={{ backgroundColor: bgColor }} />
                <h3 className={`font-display text-5xl font-light text-cream mb-3 group-hover:text-gold transition-colors`}>
                  {word}
                </h3>
                {greek && <p className="font-body text-xs text-stone/50 mb-4 font-light">{greek}</p>}
                <p className="font-body text-sm text-stone leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slogan */}
      <section className="py-28 px-6 border-b border-rim/30 bg-gradient-to-b from-card/50 to-card/20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 animate-slide-up">
          <span className="text-gold font-display text-3xl block mb-8 opacity-60 select-none animate-glow-pulse">
            ✦
          </span>
          <p className="font-display text-5xl md:text-6xl font-light text-cream leading-tight text-balance mb-8">
            &quot;Essências do Mundo — Difusores de Ambiente Sazonais e Multiculturais&quot;
          </p>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>
      </section>

      {/* Inclusive Design */}
      <section className="py-24 px-6 border-b border-rim/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left column - text */}
            <div className="lg:col-span-2 animate-slide-up">
              <div className="h-1 w-12 bg-gold mb-8" />
              <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-4">
                Design Inclusivo
              </p>
              <h2 className="font-display text-5xl font-light text-cream mb-8 leading-tight">
                Acessibilidade
                <br />
                como Princípio
              </h2>
              <p className="font-body text-sm text-stone leading-relaxed">
                A tipografia de apoio foi selecionada deliberadamente para utilizadores com dislexia —
                uma fonte humanista com formas abertas e glifos claramente identificáveis, minimizando
                a confusão entre caracteres e reduzindo a carga cognitiva nas embalagens.
              </p>
            </div>

            {/* Right column - features */}
            <div className="lg:col-span-3 flex flex-col justify-center gap-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
              {[
                {
                  title: 'Tipografia Legível',
                  desc: 'Fontes humanistas Sans-serif com formas abertas.',
                },
                {
                  title: 'Contraste Cromático',
                  desc: 'Rácios de contraste elevados em todas as superfícies.',
                },
                {
                  title: 'Hierarquia Clara',
                  desc: 'Estrutura informativa acessível a todos os utilizadores.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-5 p-5 border border-rim/30 rounded hover:border-gold/40 transition-all group bg-card/20">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/40 transition-colors">
                    <span className="font-display text-gold text-sm">✦</span>
                  </div>
                  <div>
                    <p className="font-display text-lg font-light text-cream mb-1 group-hover:text-gold transition-colors">
                      {title}
                    </p>
                    <p className="font-body text-xs text-stone leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAP context */}
      <section className="py-24 px-6 border-b border-rim/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left - Info */}
            <div className="animate-slide-up">
              <div className="h-1 w-12 bg-gold mb-8" />
              <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-4">
                Prova de Aptidão Profissional
              </p>
              <p className="font-display text-4xl font-light text-cream mb-6 leading-tight">
                Projeto Académico
              </p>
              <p className="font-body text-sm text-stone leading-relaxed mb-8">
                Atlas Ousia foi desenvolvida como Prova de Aptidão Profissional (PAP) no curso
                Técnico de Design e Comunicação Gráfica, no Agrupamento de Escolas Dona Maria II.
              </p>
            </div>

            {/* Right - Credits */}
            <div
              className="animate-slide-up p-8 border border-rim/30 rounded-lg bg-gradient-to-br from-card/50 to-card/20"
              style={{ animationDelay: '100ms' }}
            >
              <div className="space-y-6">
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/60 mb-2">
                    Designer
                  </p>
                  <p className="font-display text-lg text-cream">Carolina Ferreira</p>
                  <p className="font-body text-xs text-stone/50 mt-1">nº 3, 3º4TDCG</p>
                </div>
                <div className="h-px bg-rim/30" />
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/60 mb-2">
                    Professora Orientadora
                  </p>
                  <p className="font-display text-lg text-cream">Marta Silva</p>
                </div>
                <div className="h-px bg-rim/30" />
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/60 mb-2">
                    Instituição
                  </p>
                  <p className="font-display text-lg text-cream">Agrupamento de Escolas</p>
                  <p className="font-display text-lg text-cream">Dona Maria II</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/collections"
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Explorar Coleções →
          </Link>
          <Link
            href="/shop"
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Visitar Shop
          </Link>
          <Link
            href="/contact"
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-stone/40 text-stone hover:border-stone hover:text-cream transition-all duration-300"
          >
            Entre em Contacto
          </Link>
        </div>
      </section>
    </div>
  )
}

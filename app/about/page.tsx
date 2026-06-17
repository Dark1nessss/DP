import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre a Marca',
  description:
    'A história, filosofia e identidade por trás da Atlas Ousia — uma marca de difusores de ambiente premium.',
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-32 px-6 border-b border-rim/30">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">
            Sobre a Marca
          </p>
          <h1 className="font-display text-6xl md:text-7xl font-light text-cream leading-tight mb-8">
            Uma Marca Nascida
            <br />
            da Essência
          </h1>
          <p className="font-body text-sm text-stone leading-relaxed max-w-2xl">
            O projeto Atlas Ousia nasce da ambição de criar uma marca de design de fragrâncias e
            difusores de ambiente premium que funde a exploração geográfica com o conceito de
            bem-estar — um mapeamento olfativo e sensorial do mundo.
          </p>
        </div>
      </section>

      {/* Naming */}
      <section className="py-24 px-6 border-b border-rim/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="animate-slide-up">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">
              O Naming
            </p>
            <h2 className="font-display text-4xl font-light text-cream leading-tight">
              Duas Palavras,
              <br />
              Uma Filosofia
            </h2>
          </div>
          <div className="space-y-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div>
              <h3 className="font-display text-2xl text-gold mb-3">Atlas</h3>
              <p className="font-body text-sm text-stone leading-relaxed">
                Remete para a cartografia e para as coleções de mapas que descrevem o mundo,
                simbolizando o caráter multicultural e a viagem geográfica que a marca propõe
                através dos aromas.
              </p>
            </div>
            <div className="h-px bg-rim/30" />
            <div>
              <h3 className="font-display text-2xl text-gold mb-3">
                Ousia{' '}
                <span className="font-body text-sm text-stone/50 font-light">(οὐσία)</span>
              </h3>
              <p className="font-body text-sm text-stone leading-relaxed">
                Termo filosófico grego que significa &quot;Essência&quot; ou &quot;Substância&quot;. A busca pela
                essência mais pura de cada cultura e a alma do produto — as essências aromáticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan */}
      <section className="py-24 px-6 border-b border-rim/30 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-display text-xl block mb-8 opacity-50 select-none">
            ✦
          </span>
          <p className="font-display text-4xl md:text-5xl font-light text-cream leading-tight text-balance">
            &quot;Essências do Mundo — Difusores de Ambiente Sazonais e Multiculturais&quot;
          </p>
        </div>
      </section>

      {/* Inclusive Design */}
      <section className="py-24 px-6 border-b border-rim/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">
              Design Inclusivo
            </p>
            <h2 className="font-display text-4xl font-light text-cream mb-6">
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
          <div className="flex flex-col justify-center gap-7">
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
              <div key={title} className="flex gap-4">
                <span className="text-gold font-display mt-0.5 shrink-0 select-none">✦</span>
                <div>
                  <p className="font-display text-base text-cream mb-1">{title}</p>
                  <p className="font-body text-xs text-stone">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAP context */}
      <section className="py-24 px-6 border-b border-rim/30">
        <div className="max-w-4xl mx-auto">
          <div className="border border-rim/50 bg-card p-10">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mb-6">
              Prova de Aptidão Profissional
            </p>
            <p className="font-body text-sm text-stone leading-relaxed mb-6">
              Atlas Ousia foi desenvolvida como Prova de Aptidão Profissional (PAP) no curso
              Técnico de Design e Comunicação Gráfica, no Agrupamento de Escolas Dona Maria II.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="font-body text-sm text-stone">
                <span className="text-cream">Designer: </span>Carolina Ferreira, nº 3, 3º4TDCG
              </p>
              <p className="font-body text-sm text-stone">
                <span className="text-cream">Professora Orientadora: </span>Marta Silva
              </p>
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

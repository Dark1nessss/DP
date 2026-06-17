import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Equipa',
  description: 'Conheça a equipa por trás de Atlas Ousia.',
}

export default function TeamPage() {
  return (
    <div className="pt-16 pb-24">
      {/* Hero */}
      <section className="py-36 px-6 border-b border-rim/30 bg-gradient-to-b from-card/50 to-ink">
        <div className="max-w-6xl mx-auto animate-slide-up">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Créditos
          </p>
          <h1 className="font-display text-7xl md:text-8xl font-light text-cream mb-6">
            Equipa
          </h1>
          <p className="font-body text-sm text-stone leading-relaxed max-w-3xl">
            Atlas Ousia é o resultado da dedicação, criatividade, e paixão de uma equipa multidisciplinar. Conheça os rostos e histórias por trás do projeto.
          </p>
        </div>
      </section>

      {/* Designer Section */}
      <section className="py-24 px-6 border-b border-rim/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="animate-slide-up">
              <div className="aspect-square rounded overflow-hidden border border-rim/30 bg-gradient-to-b from-card/50 to-ink flex items-center justify-center">
                <span className="font-display text-[8rem] font-light text-gold/30">✦</span>
              </div>
            </div>

            {/* Content */}
            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="h-1 mb-6 w-12 bg-gold" />

              <h2 className="font-display text-5xl font-light text-cream mb-6">
                Carolina Ferreira
              </h2>

              <p className="font-body text-sm text-stone/80 font-medium mb-4">
                Designer & Idealizadora
              </p>

              <p className="font-body text-sm text-stone leading-relaxed mb-6">
                Carolina é uma designer multidisciplinar com paixão por sustentabilidade, experiência sensorial, e design conceptual. O seu trabalho explora a interseção entre arte, função, e responsabilidade ambiental.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/60 mb-2">
                    Formação
                  </p>
                  <p className="font-body text-sm text-cream">
                    Design de Produto, Agrupamento de Escolas Dona Maria II
                  </p>
                </div>

                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/60 mb-2">
                    Especialidades
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Design Sensorial', 'Sustentabilidade', 'Cerâmica', 'Branding', 'UX/UI'].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 border border-gold/40 rounded text-xs font-body text-gold"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-rim/30">
                  <p className="font-body text-xs text-stone/60">
                    💌 Contactar: carolina@atlasousia.pt (em desenvolvimento)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School & Institution */}
      <section className="py-24 px-6 border-b border-rim/30 bg-gradient-to-b from-card/30 to-ink">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-light text-cream mb-4">
              Instituição Educativa
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* School Info */}
            <div className="animate-slide-up">
              <div className="p-8 border border-rim/30 rounded h-full">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
                  Escola
                </p>
                <h3 className="font-display text-3xl font-light text-cream mb-6">
                  Agrupamento de Escolas Dona Maria II
                </h3>
                <p className="font-body text-sm text-stone leading-relaxed mb-8">
                  Instituição que proporcionou o contexto académico e recursos para o desenvolvimento de Atlas Ousia como Prova de Aptidão Profissional (PAP).
                </p>

                <div className="space-y-3 pt-6 border-t border-rim/20">
                  <p className="font-body text-xs">
                    <span className="text-stone/60">Localização:</span>
                    <span className="text-cream ml-2">Origens, Portugal</span>
                  </p>
                  <p className="font-body text-xs">
                    <span className="text-stone/60">Curso:</span>
                    <span className="text-cream ml-2">Design de Produto</span>
                  </p>
                </div>
              </div>
            </div>

            {/* PAP Info */}
            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="p-8 border border-rim/30 rounded h-full bg-gradient-to-br from-card/50 to-card/20">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
                  Projeto
                </p>
                <h3 className="font-display text-3xl font-light text-cream mb-6">
                  Prova de Aptidão Profissional (PAP)
                </h3>
                <p className="font-body text-sm text-stone leading-relaxed mb-8">
                  Uma prova que integra conhecimentos técnicos, criatividade e responsabilidade profissional. Atlas Ousia demonstra aplicação de competências em design, desenvolvimento web, estratégia de marca, e sustentabilidade.
                </p>

                <div className="space-y-3 pt-6 border-t border-rim/20">
                  <p className="font-body text-xs">
                    <span className="text-stone/60">Ano Letivo:</span>
                    <span className="text-cream ml-2">2023/2024</span>
                  </p>
                  <p className="font-body text-xs">
                    <span className="text-stone/60">Tipo:</span>
                    <span className="text-cream ml-2">Projeto Conceptual & Digital</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators & Acknowledgments */}
      <section className="py-24 px-6 border-b border-rim/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-light text-cream mb-12">
            Colaboradores e Parceiros
          </h2>

          <div className="space-y-12">
            {[
              {
                role: 'Orientador Académico',
                names: ['Docente da Instituição'],
                desc: 'Acompanhamento contínuo no desenvolvimento do projeto, orientação estratégica e feedback crítico.',
              },
              {
                role: 'Consultoria Técnica',
                names: ['Desenvolvimento Web', 'Design de Interação'],
                desc: 'Suporte no desenvolvimento da plataforma digital, arquitetura de design systems, e otimização de UX.',
              },
              {
                role: 'Pesquisa e Sourcing',
                names: ['Artesãos Locais', 'Fornecedores de Materiais'],
                desc: 'Colaboração com profissionais que garantem qualidade artesanal e sourcing responsável dos materiais.',
              },
              {
                role: 'Inspiração Cultural',
                names: ['Comunidades Portugal, Brasil, Marrocos, Japão'],
                desc: 'Pesquisa e imersão cultural que informou o desenvolvimento autêntico de cada coleção sazonal.',
              },
            ].map((group, idx) => (
              <div
                key={group.role}
                className="flex items-start gap-8 pb-8 border-b border-rim/30 last:border-0 animate-slide-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="w-32 shrink-0">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-gold">
                    {group.role}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    {group.names.map((name) => (
                      <p key={name} className="font-body text-sm text-cream mb-1">
                        {name}
                      </p>
                    ))}
                  </div>
                  <p className="font-body text-sm text-stone leading-relaxed">{group.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Filosofia da Equipa
          </p>
          <h2 className="font-display text-5xl font-light text-cream mb-8">
            Design com Propósito
          </h2>
          <p className="font-body text-sm text-stone leading-relaxed mb-8">
            Acreditamos que o design tem responsabilidade social. Cada decisão em Atlas Ousia é pensada considerando impacto ambiental, inclusão cultural, e experiência sensorial significativa.
          </p>
          <p className="font-body text-sm text-stone/80 italic">
            &quot;Essências do Mundo — Difusores de Ambiente Sazonais e Multiculturais&quot;
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-6 bg-gradient-to-b from-card/30 to-card/60 border-t border-rim/30 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-sm text-stone mb-6">
            Quer colaborar ou propor uma parceria?
          </p>
          <a
            href="/contact"
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300 inline-block"
          >
            Entre em Contacto
          </a>
        </div>
      </section>
    </div>
  )
}

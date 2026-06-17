import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sustentabilidade',
  description: 'Compromisso ambiental e práticas sustentáveis de Atlas Ousia.',
}

export default function SustainabilityPage() {
  return (
    <div className="pt-16 pb-24">
      {/* Hero */}
      <section className="py-36 px-6 border-b border-rim/30 bg-gradient-to-b from-card/50 to-ink">
        <div className="max-w-6xl mx-auto animate-slide-up">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Responsabilidade
          </p>
          <h1 className="font-display text-7xl md:text-8xl font-light text-cream mb-6">
            Sustentabilidade
          </h1>
          <p className="font-body text-sm text-stone leading-relaxed max-w-3xl">
            Atlas Ousia compromete-se com práticas ambientais rigorosas. Cada aspecto do projeto — desde a sourcing de materiais até ao design final — é pensado com responsabilidade ambiental em mente.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 px-6 border-b border-rim/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {[
              {
                title: 'Materiais Naturais',
                desc: 'Utilizamos barro e cerâmica tradicionais — 100% naturais, biodegradáveis e sem processamento químico agressivo. Cada frasco é uma extensão da natureza.',
                icon: '🌱',
              },
              {
                title: 'Fabrico Responsável',
                desc: 'Parceria com artesãos que respeitam normas ambientais rigorosas. Reduzimos desperdício e priorizamos técnicas de produção de baixa pegada carbónica.',
                icon: '♻️',
              },
              {
                title: 'Fim de Vida',
                desc: 'Frascos completamente reciclados como cerâmica ou reintegrados em compostagem. Encorajamos reutilização criativa como peças decorativas permanentes.',
                icon: '🌍',
              },
            ].map((item) => (
              <div key={item.title} className="animate-slide-up">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-display text-2xl font-light text-cream mb-3">{item.title}</h3>
                <p className="font-body text-sm text-stone leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections & Regional Impact */}
      <section className="py-24 px-6 border-b border-rim/30 bg-gradient-to-b from-card/30 to-ink">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-5xl font-light text-cream mb-6">
              Coleções Globais, Impacto Local
            </h2>
            <p className="font-body text-sm text-stone leading-relaxed max-w-2xl">
              Cada coleção celebra uma região e contribui para a preservação ambiental dessa área:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                season: 'Inverno — Portugal',
                color: '#0b2e22',
                desc: 'Homenageando a floresta portuguesa. Elementos de lenha e musgo refletem o compromisso com a conservação das florestas nacionais.',
                impact: 'Suporta iniciativas de reflorestação em Portugal.',
              },
              {
                season: 'Verão — Brasil',
                color: '#4db394',
                desc: 'Inspirado na biodiversidade amazónica. Notas cítricas e de brisa marinha celebram a riqueza natural brasileira.',
                impact: 'Promove práticas sustentáveis de sourcing na Amazónia.',
              },
              {
                season: 'Outono — Marrocos',
                color: '#f9aeb7',
                desc: 'Explorando os desertos e oásis marroquinos. Âmbar e especiarias tradicionais respeitam o patrimônio aromático local.',
                impact: 'Apoia cooperativas de produtores locais sustentáveis.',
              },
              {
                season: 'Primavera — Japão',
                color: '#ebeca0',
                desc: 'Celebrando a filosofia zen japonesa. Sakura, chá verde e bambu refletem harmonia com a natureza.',
                impact: 'Contribui para projetos de proteção de florestas japonesas.',
              },
            ].map((region) => (
              <div
                key={region.season}
                className="p-8 border border-rim/30 rounded hover:border-rim/60 transition-all duration-300 animate-slide-up"
                style={{
                  borderLeftColor: region.color,
                  borderLeftWidth: '4px',
                }}
              >
                <h3 className="font-display text-xl font-light mb-3" style={{ color: region.color }}>
                  {region.season}
                </h3>
                <p className="font-body text-sm text-stone leading-relaxed mb-4">{region.desc}</p>
                <div className="pt-4 border-t border-rim/20">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/60 mb-1">
                    Impacto
                  </p>
                  <p className="font-body text-sm text-gold">{region.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Deep Dive */}
      <section className="py-24 px-6 border-b border-rim/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl font-light text-cream mb-16">
            Escolhas de Materiais
          </h2>

          <div className="space-y-12">
            {[
              {
                title: 'Barro e Cerâmica',
                content: 'Material escolhido por razões ambientais e estéticas. O barro é 100% natural, recolhido de forma responsável. Durante a queima em forno tradicional, o processamento usa energia eficiente e não produz resíduos tóxicos.',
              },
              {
                title: 'Essências Naturais',
                content: 'Todas as fragrâncias utilizam oils e extractos naturais. Sem componentes sintéticos agressivos ou testes em animais. Cada nota aromática é sourced de fornecedores com práticas sustentáveis certificadas.',
              },
              {
                title: 'Embalagem Mínimalista',
                content: 'Packaging utiliza papel reciclado e tintas à base de soja. Reduzimos ao máximo o volume e o peso para diminuir impacto de transporte. Caixas são totalmente recicláveis e biodegradáveis.',
              },
              {
                title: 'Transporte Eficiente',
                content: 'Prioritizamos envios consolidados e rotas otimizadas para reduzir pegada carbónica. Futuros investimentos em offsetting de carbono estão a ser considerados.',
              },
            ].map((item, idx) => (
              <div key={item.title} className="animate-slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                  <div>
                    <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                      <span className="text-gold font-display text-lg">✦</span>
                    </div>
                    <h3 className="font-display text-xl font-light text-cream">{item.title}</h3>
                  </div>
                  <p className="lg:col-span-3 font-body text-sm text-stone leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biodegradability */}
      <section className="py-24 px-6 border-b border-rim/30 bg-gradient-to-b from-card/50 to-ink">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-light text-cream mb-6">
            100% Biodegradável
          </h2>
          <p className="font-body text-sm text-stone leading-relaxed mb-12">
            Todos os componentes de Atlas Ousia são naturais e biodegradáveis. Quando o ciclo de vida termina, os materiais regressam à natureza sem deixar traço tóxico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { label: 'Frasco', time: '5-10 anos' },
              { label: 'Embalagem', time: '6 meses' },
              { label: 'Óleo Aromático', time: 'Evaporação natural' },
            ].map((item) => (
              <div key={item.label} className="p-6 border border-rim/30 rounded">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/60 mb-2">
                  {item.label}
                </p>
                <p className="font-display text-2xl font-light text-gold">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-light text-cream mb-12">
            Compromissos Futuros
          </h2>

          <ul className="space-y-6">
            {[
              'Obter certificação B Corp ou equivalente de sustentabilidade',
              'Implementar programa de reciclagem de frascos com devolução',
              'Expandir parcerias com organizações de conservação ambiental',
              'Reduzir pegada carbónica através de offsetting e energias renováveis',
              'Criar transparência total na cadeia de abastecimento',
              'Desarrollar programa de refis sustentáveis para reutilização',
            ].map((goal, idx) => (
              <li
                key={goal}
                className="flex items-start gap-4 pb-6 border-b border-rim/30 last:border-0 animate-slide-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span className="text-gold shrink-0 mt-1">✦</span>
                <p className="font-body text-sm text-stone">{goal}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-gradient-to-b from-card/30 to-card/60 border-t border-rim/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-sm text-stone mb-6">
            Quer saber mais sobre sustentabilidade em Atlas Ousia?
          </p>
          <a
            href="/contact"
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300 inline-block"
          >
            Contacte-nos
          </a>
        </div>
      </section>
    </div>
  )
}

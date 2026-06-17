import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Histórias',
  description: 'Narrativas, inspirações e histórias por trás de Atlas Ousia.',
}

const stories = [
  {
    id: 'genesis',
    title: 'O Nascimento de Atlas Ousia',
    excerpt: 'Como tudo começou — a inspiração por trás do conceito de uma marca de difusores multiculturais.',
    date: 'Janeiro 2024',
    readTime: '5 min',
    color: '#c9a86c',
    content: 'A ideia surgiu da necessidade de criar algo que transcendesse fronteiras. Cada país, cada estação, tem uma essência própria — um aroma que conta a sua história. Atlas Ousia nasce da vontade de explorar cartografia através das fragrâncias.',
  },
  {
    id: 'portugal-winter',
    title: 'Inverno Português: Raízes Florestais',
    excerpt: 'Explorando as florestas de Portugal e a inspiração por trás da coleção Inverno.',
    date: 'Fevereiro 2024',
    readTime: '4 min',
    color: '#2f7f5b',
    content: 'Portugal tem um patrimônio florestal único. As fragrâncias de lenha, pinheiro e musgo transportam-nos para os bosques centenários. Cada nota escolhida reflete um respeito profundo pela natureza portuguesa e pelo seu ecossistema delicado.',
  },
  {
    id: 'brazil-summer',
    title: 'Verão Brasileiro: Energia Tropical',
    excerpt: 'A vibrância do Brasil e como capturámos essa energia numa fragrância.',
    date: 'Março 2024',
    readTime: '6 min',
    color: '#4db394',
    content: 'O Brasil pulse com vida. Cítricos vividos, brisa marinha fresca, e uma sensação de movimento constante. A coleção Verão é um tributo à biodiversidade amazónica e à alegria que o Brasil personifica.',
  },
  {
    id: 'morocco-autumn',
    title: 'Outono Marroquino: Especiarias Ancestrais',
    excerpt: 'Os mercados de Marrocos e as essências que definem o Outono.',
    date: 'Abril 2024',
    readTime: '5 min',
    color: '#f9aeb7',
    content: 'Passeando pelos medinas de Marrocos, inspiramo-nos pela riqueza de especiarias tradicionais. Âmbar, oud, e notas orientais criam uma narrativa sensorial de história e mistério.',
  },
  {
    id: 'japan-spring',
    title: 'Primavera Japonesa: Harmonia e Minimalismo',
    excerpt: 'A filosofia zen do Japão refletida em design e fragrância.',
    date: 'Maio 2024',
    readTime: '7 min',
    color: '#ebeca0',
    content: 'O Japão ensina equilíbrio. Sakura, chá verde, bambu — cada elemento cuidadosamente escolhido para criar harmonia. A Primavera é uma expressão de minimalismo, beleza efémera, e conexão com a natureza.',
  },
  {
    id: 'design-process',
    title: 'O Processo de Design: Do Conceito ao Produto',
    excerpt: 'Behind-the-scenes — como transformámos uma ideia em realidade tangível.',
    date: 'Junho 2024',
    readTime: '8 min',
    color: '#c9a86c',
    content: 'Cada frasco é resultado de investigação profunda, testes iterativos, e refinamento artesanal. Colaborámos com ceramistas tradicionais, aromaterologistas, e designers para criar uma experiência integrada de design e olfato.',
  },
]

export default function StoriesPage() {
  return (
    <div className="pt-16 pb-24">
      {/* Hero */}
      <section className="py-36 px-6 border-b border-rim/30 bg-gradient-to-b from-card/50 to-ink relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5" style={{ background: '#c9a86c' }} />
        
        <div className="max-w-7xl mx-auto animate-slide-up relative z-10">
          <div className="h-1 w-12 bg-gold mb-6" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Narrativas
          </p>
          <h1 className="font-display text-7xl md:text-8xl font-light text-cream mb-6 text-balance">
            Histórias
          </h1>
          <p className="font-body text-sm text-stone leading-relaxed max-w-3xl">
            Explore as narrativas por trás de Atlas Ousia — desde a inspiração original até aos processos de design, passando pelas histórias das regiões que celebramos.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20 px-6 border-b border-rim/30 bg-gradient-to-br from-card/20 to-ink">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div
                className="h-1 mb-6 w-12 transition-all duration-300"
                style={{ backgroundColor: stories[0].color }}
              />
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Mais Recente
              </p>
              <h2 className="font-display text-5xl font-light text-cream mb-6">
                {stories[0].title}
              </h2>
              <p className="font-body text-sm text-stone leading-relaxed mb-8">
                {stories[0].content}
              </p>
              <div className="flex items-center gap-6 text-xs text-stone/60 font-body">
                <span>{stories[0].date}</span>
                <span>·</span>
                <span>{stories[0].readTime}</span>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div
                className="aspect-square rounded-lg overflow-hidden border border-rim/30 hover:border-rim/60 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${stories[0].color}25 0%, ${stories[0].color}08 100%)`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center relative group">
                  <span
                    className="font-display text-[10rem] font-light opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ color: stories[0].color }}
                  >
                    ✦
                  </span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at 100% 100%, ${stories[0].color}30 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-ink to-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 pb-8 border-b border-gold/20">
            <div className="h-1 w-12 bg-gold mb-4" />
            <h3 className="font-display text-5xl font-light text-cream">Todas as Histórias</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.slice(1).map((story, idx) => (
              <article
                key={story.id}
                className="group border border-rim/30 rounded-lg hover:border-rim/60 transition-all duration-300 overflow-hidden animate-scale-in backdrop-blur-sm"
                style={{ 
                  animationDelay: `${idx * 50}ms`,
                  background: `linear-gradient(135deg, ${story.color}08 0%, ${story.color}03 100%)`,
                }}
              >
                {/* Story card visual */}
                <div
                  className="h-48 relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${story.color}30 0%, ${story.color}10 100%)`,
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center relative">
                    <span
                      className="font-display text-8xl font-light opacity-25 group-hover:opacity-40 transition-opacity duration-300"
                      style={{ color: story.color }}
                    >
                      ✦
                    </span>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${story.color}40 0%, transparent 70%)`,
                      }}
                    />
                  </div>
                </div>

                {/* Story content */}
                <div className="p-6">
                  <div
                    className="h-1 mb-4 w-8 transition-all duration-300 group-hover:w-12"
                    style={{ backgroundColor: story.color }}
                  />

                  <h3 className="font-display text-2xl font-light text-cream mb-3 group-hover:text-gold transition-colors duration-200">
                    {story.title}
                  </h3>

                  <p className="font-body text-sm text-stone leading-relaxed mb-6">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-rim/20">
                    <div className="flex items-center gap-4 text-xs text-stone/60 font-body">
                      <span>{story.date}</span>
                      <span>·</span>
                      <span>{story.readTime}</span>
                    </div>
                    <span
                      className="group-hover:translate-x-2 transition-transform duration-200"
                      style={{ color: story.color }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-card/30 to-card/60 border-t border-rim/30">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="font-display text-4xl font-light text-cream mb-6">
            Acompanhe Novas Histórias
          </h2>
          <p className="font-body text-sm text-stone leading-relaxed mb-8 max-w-2xl mx-auto">
            Inscreva-se na nossa newsletter para receber novas narrativas, insights sobre design, e atualizações sobre o mundo de Atlas Ousia.
          </p>
          <form className="flex items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="O seu email"
              className="flex-1 bg-card/60 border border-rim/30 rounded px-4 py-3 font-body text-sm text-cream placeholder-stone/60 focus:outline-none focus:border-gold/60 transition-colors duration-200"
              required
            />
            <button
              type="submit"
              className="font-body text-xs tracking-[0.25em] uppercase px-6 py-3 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300"
            >
              Subscrever
            </button>
          </form>
          <p className="font-body text-xs text-stone/50 mt-4">
            Sem spam. Apenas histórias que importam.
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-20 px-6 border-t border-rim/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-3xl font-light text-cream mb-12">
            Explore Mais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Coleções',
                desc: 'Descubra os detalhes de cada coleção sazonal.',
                href: '/collections',
              },
              {
                title: 'Sobre',
                desc: 'A história e filosofia por trás de Atlas Ousia.',
                href: '/about',
              },
              {
                title: 'Sustentabilidade',
                desc: 'Nosso compromisso com o ambiente.',
                href: '/sustainability',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group p-6 border border-rim/30 rounded hover:border-gold/40 transition-all duration-300"
              >
                <h4 className="font-display text-xl font-light text-cream group-hover:text-gold transition-colors duration-200 mb-2">
                  {link.title}
                </h4>
                <p className="font-body text-sm text-stone">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

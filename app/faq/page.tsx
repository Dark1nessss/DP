import type { Metadata } from 'next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes',
  description: 'Respostas às perguntas mais comuns sobre Atlas Ousia.',
}

const faqs = [
  {
    category: 'Sobre o Produto',
    questions: [
      {
        q: 'Como funciona um difusor de ambiente?',
        a: 'Os difusores Atlas Ousia funcionam através de evaporação natural. O frasco de barro poroso permite que a fragrância se liberte gradualmente para o ambiente. Pode aproveitar as propriedades naturais de difusão ou, opcionalmente, adicionar um palito difusor para acelerar o processo.',
      },
      {
        q: 'Quanto tempo dura um difusor?',
        a: 'Cada difusor tem uma duração aproximada de 3-6 meses, dependendo do tamanho do espaço, ventilação e intensidade aromática desejada. Os difusores podem ser "recarregados" com essências para estender a sua vida útil.',
      },
      {
        q: 'Qual é a diferença entre as quatro coleções?',
        a: 'Cada coleção representa uma estação e um país: Inverno (Portugal - notas de lenha e musgo), Verão (Brasil - cítricos e brisa marinha), Outono (Marrocos - âmbar e especiarias) e Primavera (Japão - sakura e chá verde). Cada uma oferece uma experiência aromática única.',
      },
      {
        q: 'Posso usar os difusores em qualquer divisão?',
        a: 'Sim! Os difusores funcionam em qualquer espaço — quartos, salas, escritórios, corredores. Recomenda-se ajustar a quantidade de fragrância dependendo do tamanho do espaço.',
      },
    ],
  },
  {
    category: 'Cuidados e Manutenção',
    questions: [
      {
        q: 'Como mantenho o meu difusor?',
        a: 'Mantenha o frasco longe de luz solar direta e calor excessivo. O barro é poroso e natural — pode desenvolver ligeiras variações de cor com o tempo, o que é completamente normal e faz parte do seu carácter artesanal.',
      },
      {
        q: 'Posso limpar o frasco?',
        a: 'Sim, pode limpar o exterior com um pano macio e seco. Não recomendamos mergulhar o frasco em água, pois o material é poroso e absorve humidade.',
      },
      {
        q: 'O que faço quando a fragrância se esgotar?',
        a: 'Quando a essência se esgotar, pode: (1) comprar um refil para reutilizar o frasco, ou (2) decorar o espaço com o frasco vazio como peça de design. Devido ao carácter conceptual do projecto, os refis estão a ser considerados para futuras expansões.',
      },
      {
        q: 'Posso reutilizar o frasco?',
        a: 'Absolutamente! Os frascos são peças decorativas de longa durabilidade. Pode enchê-los com areia, flores secas, velas, ou qualquer outra criação decorativa.',
      },
    ],
  },
  {
    category: 'Sustentabilidade',
    questions: [
      {
        q: 'Os difusores são ecológicos?',
        a: 'Sim. Utilizamos barro e cerâmica tradicionais — materiais 100% naturais e biodegradáveis. O processo de fabrico prioriza baixa pegada de carbono e práticas sustentáveis.',
      },
      {
        q: 'Como posso descartar um difusor quando terminar?',
        a: 'Os frascos de barro podem ser reciclados como cerâmica ou colocados em compostagem, pois são totalmente biodegradáveis. Encorajamos a reutilização como peça decorativa sempre que possível.',
      },
      {
        q: 'De onde vêm os materiais?',
        a: 'Os materiais são sourced de fornecedores que respeitam práticas ambientais rigorosas. Cada coleção celebra uma região: Portugal, Brasil, Marrocos e Japão — regiões escolhidas não apenas pela riqueza aromática, mas também pela importância ambiental.',
      },
    ],
  },
  {
    category: 'Sobre Atlas Ousia',
    questions: [
      {
        q: 'O que significa "Atlas Ousia"?',
        a: '"Atlas" refere-se à cartografia — um mapa do mundo através das fragrâncias. "Ousia" é uma palavra grega que significa "essência". Juntas, transmitem a ideia de explorar o mundo através das suas essências aromáticas naturais.',
      },
      {
        q: 'Atlas Ousia é um negócio ou projeto conceptual?',
        a: 'Atlas Ousia é um projeto conceptual criado como Prova de Aptidão Profissional (PAP) por Carolina Ferreira. O objetivo é explorar design de produto, sustentabilidade e experiência sensorial. Atualmente, não está disponível para compra, mas a visão é inspirar futuros produtos aromáticos.',
      },
      {
        q: 'Posso encomendar um difusor?',
        a: 'Neste momento, Atlas Ousia é um projeto de conceito e design. Os difusores não estão disponíveis para compra. Contudo, pode contactar-nos para manifestar interesse em futuras produções ou colaborações.',
      },
      {
        q: 'Qual é o objetivo de Atlas Ousia?',
        a: 'Criar uma experiência sensorial que celebra a diversidade cultural e a natureza. Cada coleção é uma viagem — uma fusão entre design moderno e tradição artesanal, promovendo valores de sustentabilidade e inclusão.',
      },
    ],
  },
  {
    category: 'Contacto e Suporte',
    questions: [
      {
        q: 'Como contacto o suporte?',
        a: 'Pode contactar-nos através da página de Contacto. Responderemos aos seus emails o mais rapidamente possível.',
      },
      {
        q: 'Posso colaborar com Atlas Ousia?',
        a: 'Sim! Se tem interesse em colaborações, parcerias ou simplesmente quer saber mais sobre o projeto, entre em contacto connosco. Adoraríamos ouvir ideias e sugestões.',
      },
      {
        q: 'Onde posso seguir Atlas Ousia?',
        a: 'Pode acompanhar o projeto através da nossa newsletter ou contactar-nos diretamente para se manter atualizado sobre desenvolvimentos futuros.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="pt-16 pb-24">
      {/* Hero */}
      <section className="py-36 px-6 border-b border-rim/30 relative overflow-hidden bg-gradient-to-br from-card/40 to-ink">
        {/* Decorative background elements */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full blur-3xl opacity-10" style={{ background: '#c9a86c' }} />
        <div className="absolute bottom-0 left-1/4 w-60 h-60 rounded-full blur-3xl opacity-5" style={{ background: '#e8e0d4' }} />
        
        <div className="max-w-7xl mx-auto animate-slide-up relative z-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Dúvidas Comuns
          </p>
          <h1 className="font-display text-7xl md:text-8xl font-light text-cream mb-6 text-balance">
            Perguntas Frequentes
          </h1>
          <p className="font-body text-sm text-stone leading-relaxed max-w-3xl">
            Temos aqui as respostas às perguntas mais comuns sobre Atlas Ousia. Se tem outras dúvidas, não hesite em{' '}
            <a href="/contact" className="text-gold hover:underline transition-all duration-200 font-medium">
              contactar-nos
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 px-6 bg-gradient-to-b from-ink to-card/20">
        <div className="max-w-7xl mx-auto space-y-24">
          {faqs.map((section, idx) => (
            <div key={section.category} className="animate-slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
              {/* Category heading */}
              <div className="mb-12 pb-6 border-b-2 border-gold/20 relative">
                <div className="h-1 w-8 bg-gold mb-4" />
                <h2 className="font-display text-5xl md:text-6xl font-light text-cream">{section.category}</h2>
              </div>

              {/* Questions */}
              <Accordion type="single" collapsible className="space-y-3">
                {section.questions.map((item, qIdx) => (
                  <AccordionItem
                    key={item.q}
                    value={`${section.category}-${qIdx}`}
                    className="border border-rim/30 rounded-lg px-6 hover:border-rim/60 hover:bg-card/40 transition-all duration-300 data-[state=open]:bg-card/30 data-[state=open]:border-gold/40"
                  >
                    <AccordionTrigger className="font-body text-sm font-medium text-cream hover:text-gold transition-colors duration-200 py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-stone leading-relaxed pb-4 pt-2 border-t border-rim/20">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-rim/30 text-center">
          <p className="font-body text-sm text-stone mb-6">
            Não encontrou a resposta que procurava?
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

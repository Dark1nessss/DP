export type Collection = {
  slug: string
  season: string
  country: string
  subtitle: string
  color: string
  description: string
  notes: string[]
  packaging: string
}

export const collections: Collection[] = [
  {
    slug: 'winter',
    season: 'Inverno',
    country: 'Portugal',
    subtitle: 'A Essência do Lar',
    color: '#0b2e22',
    description:
      'A escolha de Portugal para representar o inverno parte de uma perspetiva de identidade nacional e memórias afetivas. Embora o inverno português seja caracterizado pela chuva e pelo frio, ele evoca um forte sentimento de acolhimento e conforto de casa. O Verde Floresta Profunda traduz graficamente a densidade das paisagens de pinhais e a sobriedade elegante desta época sazonal.',
    notes: ['Lenha', 'Pinheiro', 'Terra Húmida', 'Musgo'],
    packaging:
      'O design visual do mosaico incorpora referências à arquitetura tradicional e à azulejaria portuguesa. A fragrância é desenvolvida com notas que remetem à lenha e ao ambiente acolhedor do lar, transformando a nostalgia em Branding Sensorial.',
  },
  {
    slug: 'summer',
    season: 'Verão',
    country: 'Brasil',
    subtitle: 'A Vivacidade Tropical',
    color: '#4db394',
    description:
      'O Brasil foi o território selecionado para o verão devido à sua inerente sinergia com a alegria, o dinamismo e o clima tropical. Esta escolha presta uma homenagem à comunidade brasileira e aos laços de amizade que partilham esta energia contagiante. O tom Verde Menta / Ciano Tropical reflete a frescura das águas tropicais e a beleza do mar.',
    notes: ['Cítrico', 'Frutos Tropicais', 'Coco', 'Brisa Marítima'],
    packaging:
      'O packaging maximalista explora a riqueza das paisagens e da envolvência tropical brasileira, através de formas orgânicas e texturas vibrantes. O aroma assenta em notas cítricas e frutadas, de base exótica, capturando a essência vibrante do verão.',
  },
  {
    slug: 'autumn',
    season: 'Outono',
    country: 'Marrocos',
    subtitle: 'O Calor do Âmbar',
    color: '#f9aeb7',
    description:
      'Afastando-se dos clichés cromáticos dos tons acastanhados, no outono o cliente viaja até Marrocos através do Âmbar — uma substância resinosa preciosa proveniente da madeira, amplamente valorizada na alta perfumaria pelas suas propriedades quentes, densas e fixadoras. O rosa traz uma sensação térmica de calor humano e delicadeza romântica.',
    notes: ['Âmbar', 'Especiarias', 'Oud', 'Sândalo'],
    packaging:
      'O design gráfico baseia-se nos complexos padrões geométricos dos mosaicos árabes (zellige). A fragrância será marcada pelo exotismo, calor e densidade do âmbar e das especiarias de Marrocos.',
  },
  {
    slug: 'spring',
    season: 'Primavera',
    country: 'Japão',
    subtitle: 'O Renascimento e a Sabedoria',
    color: '#ebeca0',
    description:
      'A primavera celebra-se no Japão na época do desabrochar das árvores de Sakura, as cerejeiras. Este momento simboliza a delicadeza, a elegância e uma história rica assente na sabedoria e contemplação. O tom Amarelo Prímula / Esverdeado Claro representa a ideia de renascimento, frescura e os primeiros raios de sol que fazem brotar a nova vegetação após o inverno.',
    notes: ['Sakura', 'Chá Verde', 'Bambu', 'Íris'],
    packaging:
      'O visual das caixas fundirá o minimalismo japonês com ilustrações fluidas das paisagens em flor. O aroma será floral e subtil, transmitindo paz, pureza e novos começos.',
  },
]

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug)
}

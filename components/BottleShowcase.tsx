'use client'

import { toast } from 'sonner'

export function BottleShowcase({
  color,
  season,
}: {
  color: string
  season: string
}) {
  const getSeasonAnimation = (s: string) => {
    const l = s.toLowerCase()
    if (l.includes('inverno')) return 'animate-float-winter'
    if (l.includes('verão')) return 'animate-float-summer'
    if (l.includes('outono')) return 'animate-float-autumn'
    if (l.includes('primavera')) return 'animate-float-spring'
    return 'animate-float'
  }

  const seasonAnimation = getSeasonAnimation(season)
  // Lighter highlight tone for facets / reflections
  const highlight = '#ffffff'

  const handleBuyClick = () => {
    toast.error('Este produto é conceptual e não está disponível para compra.', {
      description:
        'Atlas Ousia é um projeto de design que celebra a ideia de difusores sazonais.',
      duration: 4000,
      style: { borderColor: color },
    })
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center py-14 px-4 perspective-1000">
      {/* Ambient seasonal glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-x-1/4 top-1/4 h-1/2 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${color}33 0%, transparent 70%)` }}
        />
      </div>

      {/* Bottle stage */}
      <div className="relative flex items-center justify-center w-44 h-72 group preserve-3d">
        {/* Reactive sparkles */}
        {[
          { top: '4%', left: '12%', d: '0s', s: 'text-base' },
          { top: '14%', right: '8%', d: '0.4s', s: 'text-xs' },
          { bottom: '20%', left: '4%', d: '0.8s', s: 'text-sm' },
          { top: '46%', right: '2%', d: '1.2s', s: 'text-[10px]' },
        ].map((p, i) => (
          <span
            key={i}
            className={`pointer-events-none absolute ${p.s} opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-sparkle`}
            style={{
              top: p.top,
              left: p.left,
              right: p.right,
              bottom: p.bottom,
              color,
              animationDelay: p.d,
              textShadow: `0 0 8px ${color}`,
            }}
          >
            ✦
          </span>
        ))}

        {/* Deep cast shadow */}
        <div
          className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-6 rounded-[100%] blur-xl opacity-50 group-hover:opacity-70 group-hover:w-32 transition-all duration-500"
          style={{ backgroundColor: color }}
        />

        {/* The jewel bottle — pops out & tilts on hover */}
        <div
          className={`relative w-28 h-56 transition-all duration-500 ease-out preserve-3d ${seasonAnimation} group-hover:scale-[1.13] group-hover:-translate-y-3 group-hover:[transform:rotateY(-14deg)_rotateX(6deg)_scale(1.13)]`}
        >
          {/* Faceted body */}
          <div
            className="absolute inset-0 rounded-b-[2.5rem] rounded-t-xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${color} 0%, ${color}cc 30%, ${color}88 55%, ${color}dd 100%)`,
              border: `1px solid ${color}`,
              boxShadow: `0 26px 50px -12px ${color}99, inset -10px -12px 30px ${color}aa, inset 10px 12px 26px ${highlight}55`,
            }}
          >
            {/* internal depth gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 30% 22%, ${highlight}55 0%, transparent 45%), radial-gradient(ellipse at 70% 80%, ${color} 0%, transparent 60%)`,
              }}
            />
            {/* primary specular streak */}
            <div
              className="absolute top-3 left-4 w-3 h-40 rounded-full opacity-70 group-hover:opacity-90 transition-opacity duration-500"
              style={{ background: `linear-gradient(180deg, ${highlight} 0%, transparent 90%)` }}
            />
            {/* secondary thin reflection */}
            <div
              className="absolute top-6 right-5 w-1 h-28 rounded-full opacity-30"
              style={{ background: `linear-gradient(180deg, ${highlight} 0%, transparent 100%)` }}
            />
            {/* moving glint */}
            <span className="glint-overlay opacity-0 group-hover:opacity-100" />
            {/* engraved emblem */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-subtitle text-2xl opacity-40"
                style={{ color: highlight }}
              >
                ✦
              </span>
            </div>
          </div>

          {/* Stopper / cap */}
          <div
            className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-7 rounded-t-lg rounded-b-sm"
            style={{
              background: `linear-gradient(135deg, ${color} 0%, ${color}99 50%, ${color} 100%)`,
              border: `1px solid ${color}`,
              boxShadow: `0 -2px 8px ${color}66 inset, 0 6px 12px -4px ${color}88`,
            }}
          />
          <div
            className="absolute -top-7 left-1/2 -translate-x-1/2 w-6 h-3 rounded-t-md"
            style={{ backgroundColor: color, boxShadow: `inset 2px 2px 4px ${highlight}55` }}
          />

          {/* Neck collar */}
          <div
            className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full opacity-60"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>

      {/* Season label */}
      <div className="mt-12 text-center">
        <div
          className="h-px w-10 mx-auto mb-4"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />
        <p className="font-body text-xs tracking-imperial uppercase text-stone group-hover:text-gold transition-colors">
          {season}
        </p>
      </div>

      {/* Buy button */}
      <div className="mt-8">
        <button
          onClick={handleBuyClick}
          className="group/btn relative font-body text-xs tracking-imperial uppercase px-9 py-3 overflow-hidden transition-all duration-300"
          style={{ border: `1px solid ${color}`, color }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = color
            e.currentTarget.style.color = '#ffffff'
            e.currentTarget.style.boxShadow = `0 10px 24px -8px ${color}aa`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = color
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <span className="relative z-10">Adquirir Agora</span>
        </button>
      </div>
    </div>
  )
}

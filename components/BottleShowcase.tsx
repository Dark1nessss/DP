import BuyModal from './BuyModal'

export function BottleShowcase({
  color,
  season,
}: {
  color: string
  season: string
}) {

  return (
    <div className="relative h-80 flex flex-col items-center justify-center">
      {/* Floating shimmer accent */}
      <div
        className={`absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500`}
        style={{
          background: `radial-gradient(circle at 30% 40%, ${color}40 0%, transparent 70%)`,
        }}
      />

      {/* Bottle representation */}
      <div className="relative flex flex-col items-center justify-center w-32 h-56 group">
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundColor: color }}
        />

        {/* Main bottle shape */}
        <div
          className="relative w-20 h-40 rounded-b-3xl rounded-t-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500 animate-float"
          style={{
            background: `linear-gradient(135deg, ${color}80 0%, ${color}40 50%, ${color}20 100%)`,
            border: `2px solid ${color}60`,
          }}
        >
          {/* Bottle highlight */}
          <div
            className="absolute top-0 left-2 w-1 h-20 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            style={{ backgroundColor: color }}
          />

          {/* Bottle stopper */}
          <div
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 rounded-t-full"
            style={{ backgroundColor: color, opacity: 0.6 }}
          />
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float"
              style={{
                backgroundColor: color,
                left: `${20 + i * 15}%`,
                top: `${30 + i * 20}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Season label */}
      <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mt-8">{season}</p>

      {/* Buy button - positioned below */}
      <div className="mt-8">
        <BuyModal />
      </div>
    </div>
  )
}

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="text-gold font-display text-2xl mb-8 opacity-40 select-none">✦</span>
      <h1 className="font-display text-8xl font-light text-cream mb-4 leading-none">404</h1>
      <p className="font-display text-2xl font-light text-stone mb-3">Página não encontrada</p>
      <p className="font-body text-sm text-stone/60 mb-10">
        A página que procura não existe ou foi removida.
      </p>
      <Link
        href="/"
        className="font-body text-xs tracking-[0.25em] uppercase px-8 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300"
      >
        Voltar ao Início
      </Link>
    </div>
  )
}

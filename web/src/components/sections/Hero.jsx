import { heroImageSrc } from '../../data/site.js'
import { Button } from '../ui/Button.jsx'

export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[88svh] overflow-hidden hero-pattern bg-cream-100"
    >
      <div className="absolute inset-0">
        <img
          src={heroImageSrc}
          alt=""
          className="h-full w-full object-cover object-[center_35%] opacity-[0.42] saturate-[1.06] md:opacity-50 md:object-[center_30%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/93 to-cream/70 md:from-cream/95 md:via-cream/70 md:to-cream/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(122,15,20,0.12),transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:justify-center lg:pb-28 lg:pt-44">
        <div className="max-w-xl">
          <p className="animate-fade-up mb-4 font-display text-xs font-semibold uppercase tracking-[0.28em] text-olive sm:text-[13px]">
            Embourg · Boncelles · Liège
          </p>
          <h1
            id="hero-heading"
            className="animate-fade-up-delay font-display text-4xl font-semibold leading-[1.06] tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.55rem]"
          >
            Le goût de l’Italie, à deux pas de chez vous
          </h1>
          <p className="animate-fade-up-delay mt-5 max-w-md text-pretty font-body text-lg leading-relaxed text-ink-muted sm:text-xl">
            Une épicerie fine où l’on choisit les produits comme en Italie : avec
            exigence, générosité et le plaisir de partager une table.
          </p>
          <div className="animate-fade-up-delay mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#produits" variant="primary">
              Découvrir nos produits
            </Button>
            <Button href="#magasins" variant="outline">
              Nous rendre visite
            </Button>
          </div>
          <dl className="animate-fade-up-delay mt-10 grid gap-6 border-t border-cream-200/80 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Authenticité
              </dt>
              <dd className="mt-1 text-[15px] text-ink">
                Importateurs et petits artisans triés sur le volet.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Proximité
              </dt>
              <dd className="mt-1 text-[15px] text-ink">
                Deux adresses dans l’aire liégeoise, accueil chaleureux.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Conseil
              </dt>
              <dd className="mt-1 text-[15px] text-ink">
                On vous aide à composer paniers, plateaux et accords simples.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

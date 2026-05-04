import { Button } from '../ui/Button.jsx'
import { phoneToTelHref, stores } from '../../data/site.js'

export function VisitCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="border-t border-cream-200 bg-gradient-to-br from-wine-deep via-wine to-wine-deep py-20 text-cream sm:py-[5.25rem]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-cream/80">
            Rendez-vous en boutique
          </p>
          <h2
            id="cta-heading"
            className="font-display text-3xl font-semibold tracking-tight text-balance text-cream sm:text-4xl md:text-[2.75rem]"
          >
            Passez boire un café quasi napolitain avant votre panier du week-end
          </h2>
          <p className="mt-6 text-pretty text-[17px] leading-relaxed text-cream/90 sm:text-lg">
            Nous préparons des plateaux apéritif, conseillons sur les alliances
            fromage–vin et aimons surprendre avec des petites trouvailles de
            saison. Venez avec le temps de flâner : c’est souvent là que naissent
            les meilleures idées de dîner.
          </p>
          <div className="mx-auto mt-10 flex max-w-lg flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Button href="#magasins" variant="onDarkOutline">
              Voir horaires &amp; adresses
            </Button>
            {stores.map((store) => (
              <Button
                key={store.id}
                href={phoneToTelHref(store.phone)}
                variant="onDarkSolid"
                className="min-w-[10.5rem] justify-center px-5 text-sm sm:text-[15px]"
              >
                Appeler · {store.area}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { productCategories } from '../../data/site.js'
import { SectionHeading } from '../ui/SectionHeading.jsx'

export function Products() {
  return (
    <section
      id="produits"
      aria-labelledby="products-heading"
      className="border-t border-cream-200 bg-cream-100 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Au comptoir"
          title="Quatre familles de goûts, une même exigence"
          headingId="products-heading"
          description="Pas de grille e-commerce ni de prix affichés ici — juste une promesse : des produits choisis comme pour nos propres réceptions."
        />

        <ul className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {productCategories.map((cat) => (
            <li key={cat.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cream-200 bg-cream shadow-soft transition-[box-shadow,border-color] duration-300 ease-out hover:border-wine/20 hover:shadow-[0_20px_48px_rgba(31,26,23,0.1)] focus-within:border-wine/25">
                <div className="relative overflow-hidden">
                  <img
                    src={cat.image.src}
                    alt={cat.image.alt}
                    className="aspect-[16/11] w-full cursor-default object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                  <p className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-wine backdrop-blur-sm">
                    {cat.title}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {cat.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[16px] leading-relaxed text-ink-muted">
                    {cat.blurb}
                  </p>
                  <a
                    href="#magasins"
                    className="group/cta mt-5 inline-flex cursor-pointer items-center gap-2 text-[15px] font-semibold text-wine transition-colors duration-200 hover:text-wine-deep focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                  >
                    Demandez conseil au comptoir
                    <svg
                      className="h-4 w-4 transition-transform duration-200 ease-out group-hover/cta:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

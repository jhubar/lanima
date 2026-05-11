import { useEffect, useState } from 'react'
import { galleryImages, phoneToTelHref, stores } from '../../data/site.js'
import { Button } from '../ui/Button.jsx'

const SLIDE_INTERVAL_MS = 3000

const contentPanelClasses =
  'rounded-3xl bg-cream/58 px-4 py-5 shadow-soft ring-1 ring-cream-200/45 backdrop-blur-sm supports-[backdrop-filter]:bg-cream/40 sm:px-5 sm:py-6'

function PhonePairs() {
  return (
    <>
      {stores.map((store) => (
        <li key={store.id}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted sm:text-xs">
            {store.area}
          </p>
          <a
            href={phoneToTelHref(store.phone)}
            className="mt-0.5 block cursor-pointer font-display text-lg font-semibold tracking-tight text-wine transition-colors duration-200 hover:text-wine-deep focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine sm:mt-1 sm:text-2xl"
          >
            {store.phone}
          </a>
        </li>
      ))}
    </>
  )
}

export function Hero() {
  const [index, setIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    function sync() {
      setReduceMotion(mq.matches)
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (reduceMotion || galleryImages.length <= 1) return
    const tick = window.setInterval(() => {
      setIndex((i) => (i + 1) % galleryImages.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(tick)
  }, [reduceMotion])

  return (
    <section
      id="accueil"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[100svh] overflow-hidden hero-pattern bg-cream-100 lg:min-h-[88svh]"
    >
      <div className="absolute inset-0" aria-hidden>
        {galleryImages.map((item, idx) => (
          <img
            key={item.src}
            src={item.src}
            alt=""
            decoding={idx === 0 ? 'sync' : 'async'}
            fetchPriority={idx === 0 ? 'high' : 'low'}
            loading={idx === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 h-full w-full object-cover object-[center_35%] saturate-[1.06] brightness-[1.02] transition-opacity duration-1000 ease-out motion-reduce:transition-none md:object-[center_30%] ${
              idx === index ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          />
        ))}
      </div>
      {/* Très léger voile pied de page uniquement pour ne pas désaturer tout l’écran */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/22 via-transparent to-transparent lg:from-ink/[0.17]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[inherit] max-w-6xl flex-col justify-end px-4 pb-6 pt-[5.5rem] max-lg:flex-1 sm:justify-end sm:px-8 sm:pb-8 sm:pt-36 lg:flex-none lg:justify-center lg:pb-28 lg:pt-44">
        <div className="flex w-full flex-col gap-5 max-lg:flex-1 max-lg:justify-end lg:flex-row lg:items-end lg:justify-between lg:gap-12 xl:gap-16">
          <div className={`max-w-xl lg:shrink ${contentPanelClasses}`}>
            {/* Localisation : pertinente sur grand écran ; sur mobile elle doublonne les villes sous les téléphones */}
            <p className="animate-fade-up mb-3 hidden font-display text-[13px] font-semibold uppercase tracking-[0.26em] text-olive lg:block">
              Embourg · Boncelles · Liège
            </p>
            <h1
              id="hero-heading"
              className="animate-fade-up-delay font-display text-[1.65rem] font-semibold leading-[1.06] tracking-tight text-balance text-ink lg:mt-0 sm:text-5xl lg:text-[3.55rem]"
            >
              Le goût de l’Italie, à deux pas de chez vous
            </h1>

            {/* Mobile&nbsp;: téléphones sous le titre, grille 2 colonnes pour gagner de la place */}
            <ul
              className={`animate-fade-up-delay mt-5 grid grid-cols-2 gap-x-4 gap-y-5 text-center lg:hidden`}
              aria-label="Téléphones des boutiques"
            >
              <PhonePairs />
            </ul>

            {/* Paragraphe d’accroche : utile après un premier clic sur desktop ; évite la redondance sur mobile avec le titre + les téléphones */}
            <p className="animate-fade-up-delay mt-6 hidden max-w-md text-pretty font-body text-base leading-relaxed text-ink-muted lg:block lg:text-lg xl:text-xl">
              Une épicerie fine où l’on choisit les produits comme en Italie : avec
              exigence, générosité et le plaisir de partager une table.
            </p>
            <div className="animate-fade-up-delay mt-5 flex flex-col gap-2.5 min-[390px]:flex-row min-[390px]:flex-wrap min-[390px]:items-center lg:mt-8 sm:gap-3">
              <Button href="#produits" variant="primary" className="justify-center px-5 py-2.5 text-sm sm:min-w-[8.5rem] sm:py-3 sm:text-[15px]">
                Nos produits
              </Button>
              <Button
                href="#magasins"
                variant="outline"
                className="justify-center px-5 py-2.5 text-sm sm:min-w-[8.5rem] sm:py-3 sm:text-[15px]"
              >
                Nous rendre visite
              </Button>
            </div>
          </div>

          <ul
            className={`animate-fade-up-delay hidden w-full shrink-0 text-right lg:max-w-[17rem] lg:block ${contentPanelClasses}`}
            aria-label="Téléphones des boutiques"
          >
            <PhonePairs />
          </ul>
        </div>
      </div>
    </section>
  )
}

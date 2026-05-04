import {
  contact,
  phoneToTelHref,
  storeGoogleMapsIframeSrc,
  storeGoogleMapsOpenHref,
  stores,
} from '../../data/site.js'
import {
  IconClock,
  IconMapPin,
  IconInstagram,
  IconFacebook,
  IconPhone,
} from '../icons.jsx'
import { SectionHeading } from '../ui/SectionHeading.jsx'

/**
 * Carte interactive + lien ouverture Google Maps.
 */
function StoreMapEmbed({ store, area }) {
  const iframeSrc = storeGoogleMapsIframeSrc(store)
  const openHref = storeGoogleMapsOpenHref(store)

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="relative aspect-[16/11] min-h-[200px] w-full overflow-hidden rounded-2xl border border-cream-200 bg-cream-200 shadow-inner sm:min-h-[220px]">
        <iframe
          title={`Localisation du magasin L’Anima — ${area}`}
          src={iframeSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[14px] text-ink-muted">
        <span className="inline-flex items-center gap-2">
          <IconMapPin className="h-4 w-4 shrink-0 text-olive" aria-hidden />
          Carte interactive
        </span>
        <a
          href={openHref}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer font-semibold text-wine underline decoration-wine/30 underline-offset-2 transition-colors duration-200 hover:text-wine-deep hover:decoration-wine-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
        >
          Ouvrir dans Google Maps →
        </a>
      </div>
      {!store.googleMapsEmbedSrc?.trim() ? (
        <p className="text-[12px] leading-relaxed text-ink-muted/90">
          Repère approximatif d’après l’adresse ci-contre. Pour la position exacte
          du commerce, utilisez un lien « Intégrer une carte » Google dans{' '}
          <code className="rounded bg-cream-200 px-1 py-px font-mono text-[11px] text-ink-muted">
            googleMapsEmbedSrc
          </code>{' '}
          (<code className="font-mono text-[11px]">src</code>
          {' '}de l’iframe).
        </p>
      ) : null}
    </div>
  )
}

export function Stores() {
  return (
    <section
      id="magasins"
      aria-labelledby="stores-heading"
      className="border-t border-cream-200 bg-cream py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nos boutiques"
          title="Embourg & Boncelles — deux maisons pour le même voyage"
          headingId="stores-heading"
          description="Même carte, même équipe bienveillante : choisissez l’adresse la plus pratique ou alternez selon vos courses."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          {stores.map((store) => (
            <article
              key={store.id}
              className="flex flex-col gap-8 rounded-[1.85rem] border border-cream-200 bg-cream-100 p-7 shadow-soft sm:p-9"
            >
              <header>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.125rem]">
                    {store.area}
                  </h3>
                  <span className="rounded-full border border-wine/15 bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-wine">
                    L’Anima
                  </span>
                </div>
              </header>

              <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:gap-8 sm:items-start">
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <span className="mt-0.5 inline-flex shrink-0 text-wine">
                      <IconMapPin className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                        Adresse
                      </p>
                      <address className="mt-1 not-italic text-[17px] leading-relaxed text-ink">
                        {store.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-0.5 inline-flex shrink-0 text-wine">
                      <IconPhone className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                        Téléphone
                      </p>
                      <a
                        href={phoneToTelHref(store.phone)}
                        className="mt-1 block cursor-pointer text-[17px] font-medium text-wine transition-colors duration-200 hover:text-wine-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                      >
                        {store.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-0.5 inline-flex shrink-0 text-olive">
                      <IconClock className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                        Horaires
                      </p>
                      <ul className="mt-1 space-y-1 text-[17px] text-ink">
                        {store.hours.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="flex flex-wrap gap-3 pt-1">
                    <a
                      href={store.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-cream-200 bg-cream px-4 py-2 text-sm font-semibold text-ink-muted transition-colors duration-200 hover:border-wine/25 hover:text-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                    >
                      <IconInstagram className="h-5 w-5" aria-hidden /> Instagram
                    </a>
                    <a
                      href={contact.social.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-cream-200 bg-cream px-4 py-2 text-sm font-semibold text-ink-muted transition-colors duration-200 hover:border-wine/25 hover:text-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                    >
                      <IconFacebook className="h-5 w-5" aria-hidden /> Facebook
                    </a>
                  </p>
                </div>

                <StoreMapEmbed store={store} area={store.area} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

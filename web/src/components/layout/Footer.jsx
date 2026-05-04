import { contact, phoneToTelHref, stores } from '../../data/site.js'
import { IconFacebook, IconInstagram, IconPhone } from '../icons.jsx'

export function Footer() {
  return (
    <footer
      className="border-t border-cream-200 bg-ink text-cream-200"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight text-cream">
              L’Anima
            </p>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-cream/75">
              Épicerie fine italienne à Embourg et Boncelles — produits choisis
              avec cœur pour les tables de la région de Liège.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {stores.map((store) => (
                <a
                  key={`ig-${store.id}`}
                  href={store.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-2 text-sm font-semibold text-cream/90 transition-colors duration-200 hover:border-cream/40 hover:bg-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                >
                  <IconInstagram className="h-5 w-5" aria-hidden /> Instagram ·{' '}
                  {store.area}
                </a>
              ))}
              <a
                href={contact.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-2 text-sm font-semibold text-cream/90 transition-colors duration-200 hover:border-cream/40 hover:bg-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
              >
                <IconFacebook className="h-5 w-5" aria-hidden /> Facebook
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/55">
              Contact
            </h2>
            <ul className="mt-5 space-y-5 text-[15px]">
              {stores.map((store) => (
                <li key={store.id}>
                  <a
                    href={phoneToTelHref(store.phone)}
                    className="group inline-flex cursor-pointer items-start gap-3 text-cream/90 transition-colors duration-200 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                  >
                    <span className="mt-0.5 inline-flex shrink-0 text-cream/60 transition-colors duration-200 group-hover:text-olive-soft">
                      <IconPhone className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="block min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-cream/50">
                        Magasin {store.area}
                      </span>
                      <span className="mt-0.5 block font-medium text-cream/95">
                        {store.phone}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/55">
              Horaires indicatifs
            </h2>
            <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-cream/80">
              <li>Mar–Ven : 11h00 – 18h00</li>
              <li>Samedi : 10h00 – 18h00</li>
              <li>Fermé le lundi</li>
              <li>Fermé le dimanche</li>
            </ul>
            <p className="mt-6 text-[13px] leading-relaxed text-cream/55">
              Adresses détaillées dans la section Magasins :{' '}
              {stores.map((s) => s.area).join(' · ')}.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/15 pt-8 text-[13px] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} L’Anima. Tous droits réservés.</p>
          <p className="text-cream/45">
            Site vitrine — achats uniquement en magasin.
          </p>
        </div>
      </div>
    </footer>
  )
}

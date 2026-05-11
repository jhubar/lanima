import { aboutImageSrc } from '../../data/site.js'
import { SectionHeading } from '../ui/SectionHeading.jsx'

export function About() {
  return (
    <section
      id="a-propos"
      aria-labelledby="about-heading"
      className="border-t border-cream-200 bg-cream-100 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Notre histoire"
          title="L’Italie, racontée dans chaque produit"
          headingId="about-heading"
          description="L’Anima naît d’une idée simple : rapprocher la Wallonie des saveurs qui font vibrer les marchés du Piémont aux Pouilles. Pas de passe-partout industriels : nous travaillons avec des familles et des coopératives qui défendent une cuisine sincère."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:items-center">
          <div className="space-y-5 text-[17px] leading-relaxed text-ink-muted lg:text-[1.0625rem]">
            <p>
              Dans nos boutiques d’Embourg et Boncelles, nous aimons prendre le
              temps : parler provenance, goûter une huile nouveau millésime,
              associer une charcuterie de montagne avec un vin discret mais
              profond.
            </p>
            <p className="text-ink">
              Chaque visite devrait sentir bon le romarin, les épices douces du
              sud et la confiance entre commerçants et voisins du quartier —
              parce que l’épicerie fine, c’est aussi un lieu de vie.
            </p>
          </div>
          <figure className="group relative overflow-hidden rounded-3xl border border-cream-200 bg-cream shadow-soft">
            <img
              src={aboutImageSrc}
              alt="Intérieur de la boutique L’Anima — épicerie fine italienne"
              className="aspect-[5/4] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] md:aspect-[16/11]"
              loading="lazy"
            />
            <figcaption className="border-t border-cream-200 bg-cream/95 px-5 py-4 text-[15px] text-ink-muted backdrop-blur-sm">
              Sélection mise en scène comme chez nous : textures, tons chauds,
              parfums qui donnent déjà envie d’être à table.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

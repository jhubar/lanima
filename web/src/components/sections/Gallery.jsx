import { galleryImages } from '../../data/site.js'
import { SectionHeading } from '../ui/SectionHeading.jsx'

export function Gallery() {
  return (
    <section
      id="galerie"
      aria-labelledby="gallery-heading"
      className="border-t border-cream-200 bg-cream-100 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Ambiance"
          title="Sur les étals et derrière la vitrine"
          headingId="gallery-heading"
          description="Une part de soleil méditerranéen posée avec soin dans le pays de Liège : couleurs profondes, matières naturelles, produits vivants qui racontent un terroir."
        />

        <ul className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((item, idx) => (
            <li
              key={item.src}
              className={`group break-inside-avoid ${idx % 3 === 1 ? 'lg:translate-y-4' : ''}`}
            >
              <figure className="overflow-hidden rounded-2xl border border-cream-200 bg-cream shadow-soft ring-1 ring-black/[0.02] transition-[box-shadow,transform,border-color] duration-300 ease-out hover:border-wine/15 hover:shadow-[0_18px_40px_rgba(31,26,23,0.12)] hover:-translate-y-0.5">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={idx % 3 === 0 ? 760 : idx % 3 === 1 ? 700 : 640}
                  className={`w-full cursor-pointer object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
                    idx % 4 === 0 ? 'aspect-[4/5]' : 'aspect-[3/4]'
                  }`}
                  loading="lazy"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

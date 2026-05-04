/** @param {string} filename Nom de fichier dans public/image/ */
export function publicImage(filename) {
  return `/image/${encodeURIComponent(filename)}`
}

const _ = (f) => publicImage(f)

/** Photo pleine largeur du hero */
export const heroImageSrc = _(
  'WhatsApp Image 2026-04-22 at 19.31.37 (7).jpeg',
)

/** Section à propos */
export const aboutImageSrc = _(
  'WhatsApp Image 2026-04-22 at 19.31.39 (1).jpeg',
)

/** @type {{ src: string; alt: string }[]} */
export const galleryImages = [
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.37 (5).jpeg'),
    alt: 'Produits et présentation en boutique L’Anima',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.37 (6).jpeg'),
    alt: 'Étal d’épicerie fine avec spécialités italiennes',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.37 (7).jpeg'),
    alt: 'Rayon et ambiance chaleureuse du magasin',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.37 (8).jpeg'),
    alt: 'Sélection de produits artisanaux',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.37 (9).jpeg'),
    alt: 'Vitrine et produits L’Anima',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.37.jpeg'),
    alt: 'Vue d’ensemble de l’offre en magasin',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.38 (1).jpeg'),
    alt: 'Détail des produits au comptoir',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.38 (2).jpeg'),
    alt: 'Assortiment présenté en boutique',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.38 (3).jpeg'),
    alt: 'Épicerie fine — produits italiens',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.38 (4).jpeg'),
    alt: 'Intérieur de la boutique',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.38 (5).jpeg'),
    alt: 'Produits et mise en avant en magasin',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.38 (6).jpeg'),
    alt: 'Sélection gourmande L’Anima',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.38 (7).jpeg'),
    alt: 'Ambiance et étalage',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.38 (8).jpeg'),
    alt: 'Produits d’épicerie fine',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.39 (2).jpeg'),
    alt: 'L’Anima — produits et décoration',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.39 (3).jpeg'),
    alt: 'Détail présentation boutique',
  },
  {
    src: _('WhatsApp Image 2026-04-22 at 19.31.39.jpeg'),
    alt: 'L’Anima — vitrine et identité',
  },
]

/** @type {{ id: string; title: string; blurb: string; image: { src: string; alt: string } }[]} */
export const productCategories = [
  {
    id: 'charcuterie',
    title: 'Charcuterie',
    blurb:
      'Sélection courte des meilleures salumerie : jambon de Parme, mortadelle, saucissons et spécialités du terroir.',
    image: {
      src: _('WhatsApp Image 2026-04-22 at 19.31.37.jpeg'),
      alt: 'Charcuterie et salumi présentés en boutique',
    },
  },
  {
    id: 'fromages',
    title: 'Fromages',
    blurb:
      'Parmigiano Reggiano, pecorino, mozzarella di bufala et fromages affinés choisis chez de petits producteurs.',
    image: {
      src: _('WhatsApp Image 2026-04-22 at 19.31.37 (2).jpeg'),
      alt: 'Fromages et produits laitiers italiens',
    },
  },
  {
    id: 'pates',
    title: 'Pâtes artisanales',
    blurb:
      'Pâtes de semoule de blé dur, formats régionaux et sauces qui honorent les recettes de famille.',
    image: {
      src: _('WhatsApp Image 2026-04-22 at 19.31.39 (3).jpeg'),
      alt: 'Pâtes, farines et épicerie sèche',
    },
  },
  {
    id: 'vins',
    title: 'Vins italiens',
    blurb:
      'Petites caves, grands classiques et découvertes : pour accompagner un repas ou offrir une belle bouteille.',
    image: {
      src: _('WhatsApp Image 2026-04-22 at 19.31.39.jpeg'),
      alt: 'Vins et bouteilles présentées en magasin',
    },
  },
]

/**
 * Pour une carte officielle précise au bon repère :
 * 1) Ouvrir Google Maps sur le lieu exact (fiche établissement ou épingle).
 * 2) Menu Partager → onglet « Intégrer une carte ».
 * 3) Copier uniquement la valeur du `src="..."` de l’iframe (commence souvent par https://www.google.com/maps/embed?pb=...).
 *
 * Coller cette URL dans `googleMapsEmbedSrc` pour ce magasin. Si vide / null,
 * on construit automatiquement une carte à partir des lignes d’adresse (moins
 * précis si Google ne géocode pas encore le bon numéro de rue).
 *
 * Alternative utile : lien « Grand plan » (ouvre Maps dans un nouvel onglet).
 */
/** @type {{ id: string; area: string; phone: string; lines: string[]; hours: string[]; instagram: string; googleMapsEmbedSrc?: string | null | undefined }[]} */
export const stores = [
  {
    id: 'embourg',
    area: 'Embourg',
    phone: '+32 494 04 52 95',
    lines: ["Voie de l'Ardenne 51", '4053 Chaudfontaine', 'Belgique'],
    hours: [
      'Mar–Ven : 11h00 – 18h00',
      'Samedi : 10h00 – 18h00',
      'Fermé le lundi',
      'Fermé le dimanche',
    ],
    instagram: 'https://www.instagram.com/lanima.embourg/',
    googleMapsEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.335421229972!2d5.6076166!3d50.5952553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f777efb62f8b%3A0x157294d32bf0c693!2sL%27anima!5e1!3m2!1sfr!2sbe!4v1777894701662!5m2!1sfr!2sbe',
  },
  {
    id: 'boncelles',
    area: 'Boncelles',
    phone: '+32 470 01 75 51',
    lines: ['Rue de Tilff 102', '4100 Seraing', 'Belgique'],
    hours: [
      'Mar–Ven : 11h00 – 18h00',
      'Samedi : 10h00 – 18h00',
      'Fermé le lundi',
      'Fermé le dimanche',
    ],
    instagram: 'https://www.instagram.com/lanima.boncelles/',
    googleMapsEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.4306847369885!2d5.545050777304525!3d50.56626987161445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f900001c45ad%3A0x5cce83565f7c0585!2sL%E2%80%99Anima%20Boncelles!5e1!3m2!1sfr!2sbe!4v1777894773122!5m2!1sfr!2sbe',
  },
]

/** Une seule chaîne pour la recherche / géocodage. */
export function storeAddressInline(store) {
  return store.lines.filter(Boolean).join(', ')
}

/**
 * iframe Google : soit l'embed officiel, soit recherche approximative par adresse.
 * @param {{ googleMapsEmbedSrc?: string | null | undefined; lines: string[] }} store
 */
export function storeGoogleMapsIframeSrc(store) {
  const direct = store.googleMapsEmbedSrc?.trim()
  if (direct) return direct
  const addr = storeAddressInline(store)
  const q = encodeURIComponent(addr)
  return `https://maps.google.com/maps?q=${q}&hl=fr&z=16&output=embed&iwloc=near`
}

/** Lien utilisateur dans un nouvel onglet (téléphone/tablette). */
export function storeGoogleMapsOpenHref(store) {
  const q = encodeURIComponent(storeAddressInline(store))
  return `https://www.google.com/maps/search/?api=1&query=${q}`
}

/** @param {string} phone */
export function phoneToTelHref(phone) {
  return `tel:${phone.replace(/\s/g, '')}`
}

export const contact = {
  social: {
    facebook: 'https://www.facebook.com/lanima.embourg',
  },
}

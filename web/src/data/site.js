/** @param {string} filename Nom de fichier dans public/image/ */
export function publicImage(filename) {
  const base = import.meta.env.BASE_URL
  return `${base}image/${encodeURIComponent(filename)}`
}

const _ = (f) => publicImage(f)

/** Fichier placé à la racine de `public/` (ex. logo.svg). Respecte le base path GitHub Pages. */
export function publicRootAsset(filename) {
  const base = import.meta.env.BASE_URL
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}${filename.replace(/^\//, '')}`
}

/** Logo navbar + favicon : remplacer `public/logo.svg` par l’export Illustrator. */
export const brandLogoSrc = publicRootAsset('logo.svg')

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

/**
 * Familles d’activité / d’accueil (section Produits du site — pas uniquement familles « produits »).
 * @type {{ id: string; title: string; blurb: string; image: { src: string; alt: string; objectPosition?: string } }[]}
 */
export const productCategories = [
  {
    id: 'comptoir',
    title: 'Le comptoir',
    blurb:
      'À la coupe, charcuterie et fromages façonnés pour vos occasions : conseils au fil des saisonnalités et des arrivages, même exigence qu’à votre table.',
    image: {
      src: _('comptoir.jpeg'),
      alt: 'Comptoir charcuterie et fromages dans la boutique',
    },
  },
  {
    id: 'epicerie',
    title: 'L’épicerie',
    blurb:
      'Pour parcourir les rayons : vins italiens et belges de caractère, pâtes, sauces, épicerie fine et petite cave — les indispensables avant de passer au comptoir.',
    image: {
      src: _('epicerie.jpeg'),
      alt: 'Rayonnages épicerie fine — produits secs, conserves et petite cave',
      objectPosition: 'center 10%',
    },
  },
  {
    id: 'traiteur',
    title: 'Service traiteur',
    blurb:
      'Préparations sur mesure pour vos réceptions : nous regardons ensemble menu, volumes et mise en bouche avec la précision dont vous nous connaissez déjà.',
    image: {
      src: _('WhatsApp Image 2026-04-22 at 19.31.39 (3).jpeg'),
      alt: 'Présentations gourmandes type traiteur',
    },
  },
  {
    id: 'plateaux',
    title: 'Nos plateaux',
    blurb:
      'Plateaux à emporter montés pour vous — assortiments charcuterie, fromages, antipasti, légumes confits et autres belles touches pour un apéro sans improvisation.',
    image: {
      src: _('plateau.jpeg'),
      alt: 'Plateau apéritif à composer — assortiments sur mesure',
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

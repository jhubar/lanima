import { useEffect, useId, useState } from 'react'
import { brandLogoSrc } from '../../data/site.js'
import { Button } from '../ui/Button.jsx'

const NAV_LINKS = [
  { href: '#produits', label: 'Produits' },
  { href: '#a-propos', label: 'Notre histoire' },
  { href: '#magasins', label: 'Magasins' },
  { href: '#galerie', label: 'Galerie' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)')
    function closeIfDesktop() {
      if (mq.matches) setOpen(false)
    }
    mq.addEventListener('change', closeIfDesktop)
    return () => mq.removeEventListener('change', closeIfDesktop)
  }, [])

  return (
    <header className="pointer-events-none fixed left-3 right-3 top-3 z-50 sm:left-6 sm:right-6 sm:top-5 lg:left-10 lg:right-10">
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-cream-200/90 bg-cream/90 px-4 py-3 shadow-soft backdrop-blur-md sm:px-6">
        <a
          href="#accueil"
          className="group inline-flex cursor-pointer shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
        >
          <img
            src={brandLogoSrc}
            alt="L’Anima — accueil"
            width={200}
            height={48}
            className="h-10 w-auto max-w-[min(15rem,calc(100vw-8.5rem))] object-contain object-left transition-opacity duration-200 group-hover:opacity-[0.88] sm:h-11 xl:h-12"
            decoding="async"
          />
        </a>

        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="cursor-pointer rounded-full px-3 py-2 text-[15px] font-medium text-ink-muted transition-colors duration-200 hover:bg-wine-muted hover:text-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Button href="#magasins" variant="outline" className="px-4 py-2 text-sm">
            Nous rendre visite
          </Button>
          <Button href="#produits" variant="primary" className="px-4 py-2 text-sm">
            Découvrir nos produits
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-cream-200 bg-cream-100 px-3 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-wine/30 hover:bg-cream xl:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      <div
        id={menuId}
        className={`pointer-events-auto mt-3 rounded-2xl border border-cream-200 bg-cream px-4 py-4 shadow-soft backdrop-blur xl:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav aria-label="Navigation mobile">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block cursor-pointer rounded-xl px-3 py-3 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-wine-muted hover:text-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 flex flex-col gap-2">
          <Button
            href="#magasins"
            variant="outline"
            className="w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Nous rendre visite
          </Button>
          <Button
            href="#produits"
            variant="primary"
            className="w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Découvrir nos produits
          </Button>
        </div>
      </div>
    </header>
  )
}

import { Navbar } from './components/layout/Navbar.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Hero } from './components/sections/Hero.jsx'
import { About } from './components/sections/About.jsx'
import { Products } from './components/sections/Products.jsx'
import { Stores } from './components/sections/Stores.jsx'
import { Gallery } from './components/sections/Gallery.jsx'
import { VisitCTA } from './components/sections/VisitCTA.jsx'

export default function App() {
  return (
    <>
      <a
        href="#accueil"
        className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-full bg-wine px-4 py-2.5 text-sm font-semibold text-cream opacity-0 shadow-soft transition-[transform,opacity] duration-200 ease-out focus:translate-y-0 focus:opacity-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-wine-deep"
      >
        Aller au contenu principal
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Stores />
        <Gallery />
        <VisitCTA />
      </main>
      <Footer />
    </>
  )
}

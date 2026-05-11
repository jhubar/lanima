/**
 * Copie web/dist vers <racine-du-dépôt>/docs/
 * Pour GitHub Pages : Settings → Deploy from branch → main → /docs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const webDir = path.join(__dirname, '..')
const repoRoot = path.join(webDir, '..')
const distDir = path.join(webDir, 'dist')
const docsDir = path.join(repoRoot, 'docs')

if (!fs.existsSync(path.join(repoRoot, '.git'))) {
  console.error(
    '[lanima-web] Pas de .git trouvé au-dessus de web/. Lance ce script depuis le projet où web/ est à la racine du dépôt.',
  )
  process.exit(1)
}

if (!fs.existsSync(distDir)) {
  console.error('[lanima-web] Dossier dist/ absent. Lance d’abord : npm run build:github')
  process.exit(1)
}

fs.rmSync(docsDir, { recursive: true, force: true })
fs.mkdirSync(docsDir, { recursive: true })
fs.cpSync(distDir, docsDir, { recursive: true })

console.log('\n[lanima-web] OK — contenu déployable copié vers :')
console.log(' ', docsDir)
console.log(`
─── GitHub Pages (recommandé si tu ne vois pas le site avec gh-pages)

1. Pousser le dossier docs sur main :
     git add docs && git commit -m "Publish site (docs)" && git push origin main

2. Sur GitHub : Settings → Pages
   • Source : Deploy from a branch
   • Branch : main
   • Folder : /docs  ← important (pas "/" à la racine du dépôt)

3. URL après DNS + domaine personnalisé :
   https://lanimaepicerie.be/

   Prévue sans domaine GitHub : npm run build:github-subpath + URL type
   https://<compte>.github.io/lanima/

─── Sinon (branche gh-pages uniquement) :
   npm run pages:deploy
   Puis Pages : Branch = gh-pages , Folder = / (root)
`)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import fs from 'node:fs'

/**
 * Déploiement GitHub Pages depuis un sous-chemin (/repo/)
 * utilise une base RELATIVE `./` pour éviter erreurs selon majuscules
 * dans l’URL (/LANIMA vs /lanima).
 */
const githubRelative = process.env.VITE_GH_RELATIVE === '1'

const rawPath = process.env.VITE_BASE_PATH
const baseFromPath =
  rawPath != null && rawPath !== ''
    ? rawPath.endsWith('/')
      ? rawPath
      : `${rawPath}/`
    : null

const base = githubRelative ? './' : baseFromPath ?? '/'

/** Copie index.html vers 404.html : GitHub Pages sert ce fichier aux 404, utile ensuite si routing côté client. */
function githubPages404Fallback() {
  return {
    name: 'lanima-github-pages-404',
    closeBundle() {
      if (!githubRelative) return
      const outDir = path.resolve('dist')
      const indexHtml = path.join(outDir, 'index.html')
      const notFoundHtml = path.join(outDir, '404.html')
      try {
        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, notFoundHtml)
        }
      } catch (_) {
        // ignore copy errors in unusual envs
      }
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), githubPages404Fallback()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import fs from 'node:fs'

/**
 * GitHub Pages (dépôt projet) : au build passer
 *   VITE_BASE_PATH=/lanima/
 * URL canonique du site : https://<user>.github.io/lanima/
 */
const rawPath = process.env.VITE_BASE_PATH
const base =
  rawPath != null && rawPath !== ''
    ? rawPath.endsWith('/')
      ? rawPath
      : `${rawPath}/`
    : '/'

/** Copie index → 404.html (utile sur GitHub Pages). */
function githubPages404Fallback() {
  return {
    name: 'lanima-github-pages-404',
    closeBundle() {
      if (base === '/') return
      const outDir = path.resolve('dist')
      const indexHtml = path.join(outDir, 'index.html')
      const notFoundHtml = path.join(outDir, '404.html')
      try {
        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, notFoundHtml)
        }
      } catch (_) {
        // ignore
      }
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), githubPages404Fallback()],
})

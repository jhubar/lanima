import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const base =
  process.env.VITE_BASE_PATH != null && process.env.VITE_BASE_PATH !== ''
    ? `${process.env.VITE_BASE_PATH.replace(/\/?$/, '/')}`
    : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})

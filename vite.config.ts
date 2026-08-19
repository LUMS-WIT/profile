import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this repo at /<repo-name>/, so the base path must
// match the repo slug. Adjust if the repo is renamed.
export default defineConfig({
  base: '/profile/',
  plugins: [react(), tailwindcss()],
})

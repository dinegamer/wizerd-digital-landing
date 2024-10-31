import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ajoutez ceci
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000
  },
  // Ajout de la configuration pour gérer les assets publics
  publicDir: 'public'
})

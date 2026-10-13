import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Nombre del repositorio en GitHub Pages (sitio de proyecto: /<repo>/).
const REPO_NAME = 'portafolios'

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  // En el build de producción (y al probar con `preview`) el sitio se sirve
  // bajo /portafolios/; en `dev` se mantiene en la raíz.
  base: command === 'build' || isPreview ? `/${REPO_NAME}/` : '/',
  plugins: [react()],
}))

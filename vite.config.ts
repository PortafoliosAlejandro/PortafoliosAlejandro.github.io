import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// El sitio se publica como <org>.github.io, por lo que se sirve desde la raíz.
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
})

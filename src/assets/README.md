# Assets

Carpeta para recursos que se **importan desde el código** (imágenes, etc.). Vite
les añade hash en el build.

## CV

El CV está actualmente en `public/hoja_de_vida.pdf` y se referencia con una ruta
raíz (`/hoja_de_vida.pdf`) desde `src/data/profile.ts`.

Si prefieres tenerlo aquí y que Vite lo procese, colócalo en esta carpeta y en
`src/data/profile.ts` cambia el `export const cvUrl` por un `import`, tal como se
indica en el comentario de ese archivo.

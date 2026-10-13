# Portafolio Web Personal — Alejandro

Portafolio de una sola página para **Alejandro**, desarrollador web fullstack de
Villavicencio, Colombia. Construido con React 19 + Vite + TypeScript, con una
paleta en blanco y negro, animaciones suaves y enfoque en accesibilidad y
rendimiento.

> La especificación completa del proyecto vive en [`spec.md`](./spec.md).

## Stack

| Área               | Tecnología                              |
| ------------------ | --------------------------------------- |
| Framework          | React 19                                |
| Build tool         | Vite                                    |
| Lenguaje           | TypeScript                              |
| Enrutamiento       | React Router                            |
| Estilos            | CSS Modules                             |
| Animaciones        | Framer Motion (`motion/react`)          |
| Animación al scroll| `react-intersection-observer`           |
| Iconos             | `lucide-react`                          |
| Tipografía         | Google Fonts: Inter + Fira Code         |

## Requisitos

- Node.js 20 o superior
- npm

## Instalación y uso

```bash
npm install     # instala dependencias
npm run dev     # servidor de desarrollo (http://localhost:5173)
npm run build   # compila TypeScript y genera /dist de producción
npm run preview # sirve el build de producción
npm run lint    # analiza el código (oxlint)
```

## Estructura

```
src/
├── assets/                 # Recursos importables (ver src/assets/README.md)
├── data/                   # Contenido editable
│   ├── profile.ts          # Datos personales, enlaces, sobre mí, terminal
│   ├── skills.ts           # Tecnologías agrupadas
│   ├── projects.ts         # Proyectos destacados
│   └── experience.ts       # Experiencia y formación (línea de tiempo)
├── components/
│   ├── atoms/              # Button, Tag, Title, Text, Icon, GithubIcon
│   ├── molecules/          # ProjectCard, SkillBar, NavLink, TypingText, ...
│   ├── organisms/          # Navbar, Hero, About, Skills, Projects, ...
│   └── templates/          # MainLayout
├── hooks/                  # useScrollPosition, useReducedMotion, useTyping, useActiveSection
├── pages/                  # Home, NotFound
├── styles/
│   ├── variables.css       # Tokens de color y tipografía
│   └── global.css
├── App.tsx
└── main.tsx
```

## Cómo editar el contenido

Todo el contenido está separado de los componentes, en `src/data/`:

- **Datos personales y enlaces** → `src/data/profile.ts`
  (nombre, rol, ubicación, correo, GitHub, textos de "Sobre mí", cualidades,
  líneas de la terminal del Hero y enlace del CV).
- **Tecnologías** → `src/data/skills.ts`
  (agrega o edita grupos y habilidades; el nivel es `Básico`, `Intermedio` o
  `Avanzado`).
- **Proyectos** → `src/data/projects.ts`
  (título, descripción, etiquetas, `repo` y `demo` opcional).
- **Experiencia y formación** → `src/data/experience.ts`
  (busca `// TODO: reemplazar con experiencia real` y sustituye los ejemplos).

## Descargar CV

El archivo vive en `public/hoja_de_vida.pdf` y se sirve desde la raíz del sitio.
Para reemplazarlo, sobrescribe ese archivo (o cambia la ruta en `cvUrl` dentro de
`src/data/profile.ts` si usas otro nombre).

Desde `src/data/profile.ts` también puedes ajustar `cvFileName`, que es el nombre
con el que se descarga (por defecto `CV-Alejandro.pdf`).

Si algún día `cvUrl` queda como `null`, el botón "Descargar CV" se muestra
deshabilitado automáticamente.

## Accesibilidad y movimiento

- HTML semántico, foco visible y navegación por teclado en todo el sitio.
- `prefers-reduced-motion`: si el usuario reduce el movimiento, se desactivan el
  efecto typing del Hero y las animaciones de entrada (se muestra el texto
  completo de inmediato).

## Despliegue en GitHub Pages

El sitio se publica automáticamente en:

**https://pulposky.github.io/portafolios/**

Cada `push` a `main` dispara el workflow `.github/workflows/deploy.yml`, que
construye el proyecto y lo publica en GitHub Pages. El build usa `base` igual a
`/portafolios/` (ver `vite.config.ts`), que debe coincidir con el nombre del
repositorio.

Para probar localmente el resultado de producción:

```bash
npm run build
npm run preview   # http://localhost:4173/portafolios/
```

`npm run build` también genera `dist/404.html` (copia de `index.html`) como
respaldo para las rutas de React Router en Pages.

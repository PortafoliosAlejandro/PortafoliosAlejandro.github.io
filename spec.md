# SPEC: Portafolio Web Personal — Alejandro

> Documento de especificación para OpenCode. Describe qué construir, con qué tecnologías y cómo debe verse y comportarse. Sigue las secciones en orden y respeta los criterios de aceptación al final.

---

## 1. Resumen del proyecto

Construir un **portafolio web personal de una sola página** para **Alejandro**, desarrollador web fullstack de Villavicencio, Colombia. El portafolio funcionará como complemento de la hoja de vida (CV) y debe transmitir profesionalismo, claridad y dominio técnico a reclutadores y empresas.

**Objetivos principales:**
- Presentar de forma clara quién es Alejandro, sus tecnologías y su experiencia.
- Mostrar los proyectos destacados con enlaces a su código.
- Facilitar el contacto (correo, GitHub, descarga de CV).
- Verse moderno, animado y reactivo en cualquier dispositivo.

**Idioma del sitio:** Español.

---

## 2. Stack tecnológico

| Área | Tecnología | Motivo |
|---|---|---|
| Framework | React 19 | Stack principal de Alejandro |
| Build tool | Vite | Stack principal de Alejandro |
| Enrutamiento | React Router | Preferido en su proyecto `fullstack-learning` |
| Estilos | CSS Modules | Preferido en su proyecto `fullstack-learning` |
| Animaciones | Framer Motion (`motion/react`) | Animaciones de entrada, hover, transiciones y gestos |
| Animaciones al hacer scroll | `react-intersection-observer` | Activar animaciones cuando una sección entra en pantalla |
| Iconos | `lucide-react` | Iconos ligeros y consistentes en blanco y negro |
| Tipografía | Google Fonts: **Inter** (texto) y **Fira Code** (acentos tipo terminal) | Coherente con el estilo de su README |

**Restricciones:**
- No usar librerías de UI completas (Material UI, Bootstrap, Chakra). El diseño debe ser propio.
- No usar Redux ni gestores de estado globales; el sitio es estático y no los necesita.
- El proyecto debe ser TypeScript (`.tsx`), ya que Alejandro está migrando de JavaScript a TypeScript.

---

## 3. Diseño visual

### 3.1 Paleta de colores (solo blanco y negro)

| Token | Valor | Uso |
|---|---|---|
| `--color-black` | `#000000` | Fondo principal |
| `--color-surface` | `#111111` | Tarjetas y bloques secundarios |
| `--color-border` | `#333333` | Bordes y separadores |
| `--color-muted` | `#9a9a9a` | Texto secundario |
| `--color-text` | `#cccccc` | Texto de cuerpo |
| `--color-white` | `#ffffff` | Títulos, botones principales, acentos |

**Reglas:**
- Solo escala de grises. No usar colores de marca ni de acento.
- El contraste de texto debe cumplir WCAG AA como mínimo.
- Los efectos visuales se logran con opacidad, bordes y sombras en gris.

### 3.2 Tipografía
- Títulos: Inter, peso 700, con tamaños responsivos (`clamp()`).
- Cuerpo: Inter, peso 400, tamaño base 16–18px, interlineado 1.6.
- Acentos tipo terminal (ej. `$ whoami`, `$ cat stack.txt`): Fira Code.

### 3.3 Estilo general
- Minimalista, con mucho espacio en blanco (negro en este caso).
- Bordes redondeados moderados (12px en tarjetas).
- Efecto de "terminal" sutil en el Hero, inspirado en su README.
- Sin imágenes de stock. Usar iconos, tipografía y formas geométricas.

---

## 4. Animaciones y reactividad

**Obligatorio:**
- **Hero:** efecto de escritura (typing) que recorra las líneas: `$ whoami`, `Alejandro, desarrollador web fullstack`, `$ cat stack.txt`, `React, Node.js, MySQL, Flet`, `$ status`, `Construyendo proyectos de punta a punta`.
- **Entrada de secciones:** fade-in y desplazamiento vertical suave cuando cada sección entra en el viewport (usar `react-intersection-observer` + Framer Motion). Ejecutar una sola vez por sección.
- **Tarjetas de proyectos:** elevación y cambio de borde al pasar el cursor (hover). En móvil, efecto de toque.
- **Barras de tecnologías:** animación de llenado al entrar en pantalla.
- **Navegación:** la barra superior cambia de fondo al hacer scroll y resalta la sección activa.
- **Botón "volver arriba":** aparece al hacer scroll hacia abajo.
- **Transiciones:** suaves, entre 200 y 600 ms. Sin animaciones bruscas.

**Accesibilidad de movimiento:**
- Respetar `prefers-reduced-motion`. Si el usuario lo tiene activado, desactivar animaciones de desplazamiento y typing (mostrar el texto completo).

---

## 5. Estructura de secciones

El sitio es una sola página con las siguientes secciones, en este orden:

### 5.1 Navbar (fija)
- Logo o inicial "A" a la izquierda.
- Enlaces: Sobre mí · Tecnologías · Proyectos · Contacto.
- En móvil: menú hamburguesa con animación.
- Botón "Descargar CV" (ver sección 7).

### 5.2 Hero
- Nombre: **Alejandro**.
- Subtítulo: **Desarrollador Web Fullstack**.
- Ubicación: Villavicencio, Colombia.
- Texto con efecto typing (ver sección 4).
- Botones: "Ver proyectos" (scroll a proyectos) y "Contáctame" (scroll a contacto).
- Indicador animado de scroll hacia abajo.

### 5.3 Sobre mí
Texto base (en español, puede ajustarse en tono profesional):

> Soy desarrollador web de Villavicencio, Colombia, con experiencia construyendo proyectos fullstack con el ecosistema Node.js. Mi camino me ha llevado desde HTML, CSS y JavaScript hasta Node.js + MySQL. Hoy me enfoco en consolidarme como desarrollador fullstack con React + Vite en el frontend y Express 5 + Knex en el backend, y en explorar aplicaciones de escritorio con Flet (Python).
>
> Me defino como una persona colaborativa, responsable y honesta, que disfruta trabajar en equipo y aportar soluciones concretas a los problemas.

**Elementos visuales:** tres tarjetas pequeñas con íconos: *Colaborativo*, *Responsable*, *Honesto*, y una cuarta: *Aprendizaje rápido*.

### 5.4 Tecnologías
Agrupadas por categoría, con iconos y barra de nivel animada:

- **Frontend:** HTML5, CSS3, JavaScript, React, Vite
- **Backend:** Node.js, Express, MySQL, Knex
- **Herramientas y otros:** Python, Flet, Git
- **Aprendiendo ahora:** React 19, Express 5, TypeScript, JWT, Bcrypt, Atomic Design

Las barras de nivel son orientativas; si no hay datos exactos, usar etiquetas (*Básico / Intermedio / Avanzado*) en lugar de porcentajes.

### 5.5 Proyectos destacados
Tres tarjetas, una por proyecto. Cada tarjeta muestra: título, descripción corta, etiquetas de tecnología, y dos botones (código en GitHub, y demo si existe).

**Proyecto 1 — fullstack-learning**
- Enlace: https://github.com/pulposky/fullstack-learning
- Descripción: Proyecto personal de práctica fullstack. React en el cliente y Node.js/Express + Knex en el servidor. Evoluciona de JavaScript a TypeScript. Incluye React Router, CSS Modules, API REST, acceso a MySQL con Knex, migraciones y arquitectura Atomic Design.
- Etiquetas: React 19, Vite, React Router, Express 5, Knex, MySQL, TypeScript

**Proyecto 2 — Sistema POS**
- Enlace: https://github.com/pulposky/Sistema_POS
- Descripción: Sistema de punto de venta en Python con Flet para gestión de ventas, remisiones, clientes y productos. Incluye inventario en tiempo real, control de caja y generación de facturas PDF. Instalador con PyInstaller. Se conecta con el Marketplace Web compartiendo la base de datos `senapdv`.
- Etiquetas: Python, Flet, MySQL, PyInstaller, PDF

**Proyecto 3 — Marketplace**
- Enlace: https://github.com/pulposky/Marketplace
- Descripción: Plataforma de comercio web con catálogo público, búsqueda y filtros, sistema de apartados con notificaciones, dashboard de estadísticas y registro de visitas. Se integra con el Sistema POS mediante base de datos compartida.
- Etiquetas: JavaScript, Node.js, Express, EJS, MySQL

**Importante:** los datos de proyectos deben estar en un archivo separado (`src/data/projects.ts`) para que Alejandro pueda agregar o editar proyectos sin tocar componentes.

### 5.6 Experiencia y formación
Sección con línea de tiempo vertical. Si Alejandro no ha proporcionado datos, dejar un bloque plantilla con datos de ejemplo claramente marcados en el código con un comentario `// TODO: reemplazar con experiencia real`.

### 5.7 Contacto
- Texto breve: invitación a contactar para oportunidades laborales o proyectos.
- Botones: correo (`mailto:alejogarcia0324@gmail.com`) y GitHub (`https://github.com/pulposky`).
- Botón "Descargar CV".
- Formulario de contacto: **no incluir en esta versión**. Solo enlaces directos.

### 5.8 Footer
- Nombre, año actual (generado dinámicamente), y frase: *"El mejor código que puedo escribir hoy es mejor que el que escribí ayer."*

---

## 6. Estructura de carpetas

Usar Atomic Design, igual que en su proyecto `fullstack-learning`:

```
src/
├── assets/                 # Imágenes, favicon, CV en PDF
├── data/
│   ├── projects.ts         # Lista de proyectos (editable)
│   ├── skills.ts           # Tecnologías agrupadas
│   └── profile.ts          # Datos personales y enlaces
├── components/
│   ├── atoms/              # Button, Tag, Icon, Title, Text
│   ├── molecules/          # ProjectCard, SkillBar, NavLink, TypingText
│   ├── organisms/          # Navbar, Hero, About, Skills, Projects, Contact, Footer
│   └── templates/          # MainLayout
├── hooks/                  # useScrollPosition, useReducedMotion, useTyping
├── styles/
│   ├── variables.css       # Tokens de color y tipografía
│   └── global.css
├── App.tsx
└── main.tsx
```

---

## 7. Descarga de CV

- Colocar el archivo `cv-alejandro.pdf` en `src/assets/`.
- El botón "Descargar CV" debe usar el atributo `download`.
- Si el archivo no existe aún, el botón debe mostrarse deshabilitado con un comentario en el código.

---

## 8. SEO y metadatos

Incluir en `index.html`:
- `<title>Alejandro — Desarrollador Web Fullstack</title>`
- `<meta name="description" content="Portafolio de Alejandro, desarrollador web fullstack de Villavicencio, Colombia. React, Node.js, MySQL y Python.">`
- Etiquetas Open Graph (`og:title`, `og:description`, `og:type`).
- `lang="es"` en la etiqueta `<html>`.
- Favicon con emoji o icono simple en blanco y negro.

---

## 9. Requisitos técnicos

- **Responsive:** móvil (320px), tablet (768px) y escritorio (1280px+). Diseño mobile-first.
- **Rendimiento:** Lighthouse mayor a 90 en Performance, Accessibility, Best Practices y SEO.
- **Accesibilidad:** HTML semántico (`header`, `nav`, `main`, `section`, `footer`), `alt` en imágenes, foco visible en elementos interactivos, navegación por teclado.
- **Navegadores:** últimas dos versiones de Chrome, Firefox, Edge y Safari.
- **Sin errores ni advertencias** en consola en modo producción.
- **Scripts de npm:** `dev`, `build`, `preview`, `lint`.

---

## 10. Fuera de alcance (esta versión)

- Backend propio o base de datos.
- Formulario de contacto con envío de correos.
- Panel de administración.
- Modo oscuro/claro (el sitio es siempre blanco y negro sobre negro).
- Internacionalización (solo español).
- Blog.

---

## 11. Criterios de aceptación

El proyecto se considera completo cuando:

- [ ] El sitio carga sin errores en `npm run build` y `npm run preview`.
- [ ] Todas las secciones de la sección 5 están presentes y en el orden indicado.
- [ ] La paleta usa únicamente tonos de blanco y negro.
- [ ] El efecto typing del Hero funciona y se desactiva con `prefers-reduced-motion`.
- [ ] Las secciones aparecen con animación al entrar en pantalla.
- [ ] Los tres proyectos enlazan correctamente a GitHub.
- [ ] Los datos de proyectos, tecnologías y perfil están separados en `src/data/`.
- [ ] El sitio se ve correctamente en 320px, 768px y 1280px.
- [ ] La navegación por teclado funciona en todo el sitio.
- [ ] El menú móvil abre y cierra con animación.
- [ ] Los enlaces de contacto (correo, GitHub) funcionan.
- [ ] Lighthouse supera 90 en las cuatro categorías.

---

## 12. Entregables

1. Proyecto React + Vite + TypeScript funcional.
2. `README.md` con instrucciones para instalar, ejecutar y editar contenido.
3. Este archivo `spec.md` en la raíz del proyecto.
4. Código organizado según la sección 6.

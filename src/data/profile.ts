import { Handshake, ShieldCheck, Users, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/** Datos personales y enlaces del perfil. */
export const profile = {
  name: 'Alejandro',
  role: 'Desarrollador Web Fullstack',
  location: 'Villavicencio, Colombia',
  email: 'alejogarcia0324@gmail.com',
  github: 'https://github.com/pulposky',
} as const

/** Enlaces de la barra de navegación (orden de las secciones). */
export type NavItem = { id: string; label: string }

export const navItems: NavItem[] = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]

/** Párrafos de la sección "Sobre mí". */
export const aboutParagraphs: string[] = [
  'Soy desarrollador web de Villavicencio, Colombia, con experiencia construyendo proyectos fullstack con el ecosistema Node.js. Mi camino me ha llevado desde HTML, CSS y JavaScript hasta Node.js + MySQL. Hoy me enfoco en consolidarme como desarrollador fullstack con React + Vite en el frontend y Express 5 + Knex en el backend, y en explorar aplicaciones de escritorio con Flet (Python).',
  'Me defino como una persona colaborativa, responsable y honesta, que disfruta trabajar en equipo y aportar soluciones concretas a los problemas.',
]

/** Tarjetas de cualidades de la sección "Sobre mí". */
export type Attribute = { label: string; description: string; icon: LucideIcon }

export const attributes: Attribute[] = [
  {
    label: 'Colaborativo',
    description: 'Disfruto trabajar en equipo y compartir lo que aprendo.',
    icon: Users,
  },
  {
    label: 'Responsable',
    description: 'Cumplo con lo que asumo y cuido la calidad del detalle.',
    icon: ShieldCheck,
  },
  {
    label: 'Honesto',
    description: 'Comunico con claridad y asumo mis errores a tiempo.',
    icon: Handshake,
  },
  {
    label: 'Aprendizaje rápido',
    description: 'Asimilo nuevas herramientas y las pongo en práctica.',
    icon: Zap,
  },
]

/** Líneas del efecto typing del Hero (estilo terminal). */
export const terminalLines: string[] = [
  '$ whoami',
  'Alejandro, desarrollador web fullstack',
  '$ cat stack.txt',
  'React, Node.js, MySQL, Flet',
  '$ status',
  'Construyendo proyectos de punta a punta',
]

/**
 * URL del CV.
 *
 * El archivo vive en `public/`, así que se sirve desde la raíz del sitio
 * (`/hoja_de_vida.pdf`). Al reemplazar el archivo, conserva el mismo nombre
 * o actualiza esta ruta.
 *
 * Si prefieres importarlo desde `src/assets/` (para que Vite le ponga hash y
 * lo optimice), usa:
 *
 *   import cvFile from '../assets/hoja_de_vida.pdf'
 *   export const cvUrl: string | null = cvFile
 *
 * Mientras `cvUrl` sea `null`, el botón "Descargar CV" se muestra deshabilitado.
 */
export const cvUrl: string | null = `${import.meta.env.BASE_URL}hoja_de_vida.pdf`

/** Nombre con el que se descarga el CV (atributo `download`). */
export const cvFileName = 'CV-Alejandro.pdf'

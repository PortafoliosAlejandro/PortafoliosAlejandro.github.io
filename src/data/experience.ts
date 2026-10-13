export type TimelineEntry = {
  id: string
  period: string
  title: string
  place: string
  description: string
  /** Distingue formación de experiencia laboral. */
  kind: 'experiencia' | 'formacion'
}

// TODO: reemplazar con experiencia real
// Los datos de abajo son un ejemplo para maquetar la línea de tiempo.
export const timeline: TimelineEntry[] = [
  {
    id: 'ejemplo-1',
    period: '2024 — Presente',
    title: 'Desarrollador Fullstack (proyectos propios)',
    place: 'Proyectos personales',
    description:
      'Desarrollo de aplicaciones fullstack con React, Node.js/Express y MySQL. Práctica continua de buenas prácticas, arquitectura y APIs REST.',
    kind: 'experiencia',
  },
  {
    id: 'ejemplo-2',
    period: '2023 — 2024',
    title: 'Formación en desarrollo web',
    place: 'Estudio autodidacta y cursos',
    description:
      'De HTML, CSS y JavaScript hasta Node.js + MySQL. Bases de programación, bases de datos y control de versiones con Git.',
    kind: 'formacion',
  },
]

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  /** URL del repositorio en GitHub. */
  repo: string
  /** URL de la demo en vivo (opcional). */
  demo?: string
}

/** Proyectos destacados. Agrega o edita libremente: los componentes se adaptan. */
export const projects: Project[] = [
  {
    id: 'fullstack-learning',
    title: 'fullstack-learning',
    description:
      'Proyecto personal de práctica fullstack. React en el cliente y Node.js/Express + Knex en el servidor. Evoluciona de JavaScript a TypeScript. Incluye React Router, CSS Modules, API REST, acceso a MySQL con Knex, migraciones y arquitectura Atomic Design.',
    tags: [
      'React 19',
      'Vite',
      'React Router',
      'Express 5',
      'Knex',
      'MySQL',
      'TypeScript',
    ],
    repo: 'https://github.com/pulposky/fullstack-learning',
  },
  {
    id: 'sistema-pos',
    title: 'Sistema POS',
    description:
      'Sistema de punto de venta en Python con Flet para gestión de ventas, remisiones, clientes y productos. Incluye inventario en tiempo real, control de caja y generación de facturas PDF. Instalador con PyInstaller. Se conecta con el Marketplace Web compartiendo la base de datos `senapdv`.',
    tags: ['Python', 'Flet', 'MySQL', 'PyInstaller', 'PDF'],
    repo: 'https://github.com/pulposky/Sistema_POS',
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    description:
      'Plataforma de comercio web con catálogo público, búsqueda y filtros, sistema de apartados con notificaciones, dashboard de estadísticas y registro de visitas. Se integra con el Sistema POS mediante base de datos compartida.',
    tags: ['JavaScript', 'Node.js', 'Express', 'EJS', 'MySQL'],
    repo: 'https://github.com/pulposky/Marketplace',
  },
]

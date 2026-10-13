/** Niveles orientativos de dominio de una tecnología. */
export type SkillLevel = 'Básico' | 'Intermedio' | 'Avanzado'

export type Skill = { name: string; level: SkillLevel }

export type SkillGroup = { id: string; title: string; skills: Skill[] }

/** Tecnologías agrupadas por categoría. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 'Avanzado' },
      { name: 'CSS3', level: 'Avanzado' },
      { name: 'JavaScript', level: 'Intermedio' },
      { name: 'React', level: 'Intermedio' },
      { name: 'Vite', level: 'Intermedio' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Intermedio' },
      { name: 'Express', level: 'Intermedio' },
      { name: 'MySQL', level: 'Intermedio' },
      { name: 'Knex', level: 'Intermedio' },
    ],
  },
  {
    id: 'herramientas',
    title: 'Herramientas y otros',
    skills: [
      { name: 'Python', level: 'Intermedio' },
      { name: 'Flet', level: 'Intermedio' },
      { name: 'Git', level: 'Intermedio' },
    ],
  },
  {
    id: 'aprendiendo',
    title: 'Aprendiendo ahora',
    skills: [
      { name: 'React 19', level: 'Básico' },
      { name: 'Express 5', level: 'Básico' },
      { name: 'TypeScript', level: 'Básico' },
      { name: 'JWT', level: 'Básico' },
      { name: 'Bcrypt', level: 'Básico' },
      { name: 'Atomic Design', level: 'Básico' },
    ],
  },
]

/** Peso (0–100) usado para el ancho de las barras de nivel. */
export const levelWeights: Record<SkillLevel, number> = {
  Básico: 42,
  Intermedio: 70,
  Avanzado: 92,
}

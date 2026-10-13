import { ProjectCard } from '../molecules/ProjectCard'
import { Reveal } from '../molecules/Reveal'
import { SectionHeading } from '../molecules/SectionHeading'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section id="proyectos" className="section" aria-labelledby="proyectos-title">
      <div className="container">
        <SectionHeading
          eyebrow="$ ls proyectos"
          title="Proyectos destacados"
          description="Una selección de proyectos fullstack y de escritorio. El código está público en GitHub."
          titleId="proyectos-title"
        />

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1} className={styles.item}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

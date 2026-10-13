import { Code2, GraduationCap, Server, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Icon } from '../atoms/Icon'
import { Reveal } from '../molecules/Reveal'
import { SectionHeading } from '../molecules/SectionHeading'
import { SkillBar } from '../molecules/SkillBar'
import { skillGroups } from '../../data/skills'
import styles from './Skills.module.css'

const groupIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  herramientas: Wrench,
  aprendiendo: GraduationCap,
}

export function Skills() {
  return (
    <section id="tecnologias" className="section" aria-labelledby="tecnologias-title">
      <div className="container">
        <SectionHeading
          eyebrow="$ cat stack.txt"
          title="Tecnologías"
          description="Herramientas con las que construyo, organizadas por área. Los niveles son orientativos (Básico, Intermedio, Avanzado)."
          titleId="tecnologias-title"
        />

        <div className={styles.groups}>
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.06} className={styles.group}>
              <div className={styles.groupHead}>
                <span className={styles.groupIcon}>
                  <Icon icon={groupIcons[group.id] ?? Code2} size={20} />
                </span>
                <h3 className={styles.groupTitle}>{group.title}</h3>
                <span className={styles.groupCount} aria-hidden="true">
                  {String(group.skills.length).padStart(2, '0')}
                </span>
              </div>

              <ul className={styles.list}>
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

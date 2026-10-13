import { Reveal } from '../molecules/Reveal'
import { SectionHeading } from '../molecules/SectionHeading'
import { TimelineItem } from '../molecules/TimelineItem'
import { timeline } from '../../data/experience'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section id="experiencia" className="section" aria-labelledby="experiencia-title">
      <div className="container">
        <SectionHeading
          eyebrow="$ git log --oneline"
          title="Experiencia y formación"
          titleId="experiencia-title"
        />

        <Reveal>
          <ol className={styles.timeline}>
            {timeline.map((entry) => (
              <TimelineItem key={entry.id} entry={entry} />
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

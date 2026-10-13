import { Icon } from '../atoms/Icon'
import { Text } from '../atoms/Text'
import { Briefcase, GraduationCap } from 'lucide-react'
import type { TimelineEntry } from '../../data/experience'
import styles from './TimelineItem.module.css'

type TimelineItemProps = {
  entry: TimelineEntry
}

export function TimelineItem({ entry }: TimelineItemProps) {
  const isFormacion = entry.kind === 'formacion'

  return (
    <li className={styles.item}>
      <span className={styles.marker} aria-hidden="true" />
      <div className={styles.content}>
        <span className={styles.period}>
          <Icon icon={isFormacion ? GraduationCap : Briefcase} size={15} />
          {entry.period}
        </span>
        <h3 className={styles.title}>{entry.title}</h3>
        <span className={styles.place}>{entry.place}</span>
        <Text size="sm" muted className={styles.description}>
          {entry.description}
        </Text>
      </div>
    </li>
  )
}

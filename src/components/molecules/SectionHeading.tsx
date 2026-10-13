import { Text } from '../atoms/Text'
import { Title } from '../atoms/Title'
import styles from './SectionHeading.module.css'

type SectionHeadingProps = {
  /** Acento tipo terminal, por ejemplo `$ cat stack.txt`. */
  eyebrow: string
  title: string
  description?: string
  /** `id` del título, para enlazarlo con `aria-labelledby` de la sección. */
  titleId?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
}: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <Title as="h2" size="xl" id={titleId}>
        {title}
      </Title>
      {description ? (
        <Text muted size="lg" className={styles.description}>
          {description}
        </Text>
      ) : null}
    </div>
  )
}

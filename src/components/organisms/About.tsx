import { Text } from '../atoms/Text'
import { AttributeCard } from '../molecules/AttributeCard'
import { Reveal } from '../molecules/Reveal'
import { SectionHeading } from '../molecules/SectionHeading'
import { aboutParagraphs, attributes } from '../../data/profile'
import styles from './About.module.css'

export function About() {
  return (
    <section id="sobre-mi" className="section" aria-labelledby="sobre-mi-title">
      <div className="container">
        <SectionHeading
          eyebrow="$ whoami"
          title="Sobre mí"
          titleId="sobre-mi-title"
        />

        <div className={styles.grid}>
          <Reveal className={styles.text}>
            {aboutParagraphs.map((paragraph) => (
              <Text key={paragraph} size="lg">
                {paragraph}
              </Text>
            ))}
          </Reveal>

          <div className={styles.cards}>
            {attributes.map((attribute, index) => (
              <Reveal key={attribute.label} delay={index * 0.08}>
                <AttributeCard attribute={attribute} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

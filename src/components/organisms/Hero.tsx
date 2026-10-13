import { motion } from 'motion/react'
import { ArrowDown, ArrowRight, Mail, MapPin } from 'lucide-react'
import { Button } from '../atoms/Button'
import { Title } from '../atoms/Title'
import { Reveal } from '../molecules/Reveal'
import { TypingText } from '../molecules/TypingText'
import { profile, terminalLines } from '../../data/profile'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './Hero.module.css'

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Reveal>
            <span className={styles.location}>
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <Title as="h1" size="display" id="hero-title" className={styles.name}>
              {profile.name}
            </Title>
          </Reveal>

          <Reveal delay={0.1}>
            <p className={styles.role}>{profile.role}</p>
          </Reveal>

          <Reveal delay={0.15} className={styles.buttons}>
            <Button href="#proyectos" icon={ArrowRight}>
              Ver proyectos
            </Button>
            <Button href="#contacto" variant="outline" icon={Mail}>
              Contáctame
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.2} className={styles.terminalWrap}>
          <TypingText lines={terminalLines} />
        </Reveal>
      </div>

      <a className={styles.scroll} href="#sobre-mi" aria-label="Ir a la sección Sobre mí">
        <motion.span
          className={styles.scrollIcon}
          animate={reduced ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} aria-hidden="true" />
        </motion.span>
      </a>
    </section>
  )
}

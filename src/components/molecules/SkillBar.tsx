import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import type { Skill } from '../../data/skills'
import { levelWeights } from '../../data/skills'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './SkillBar.module.css'

type SkillBarProps = {
  skill: Skill
}

/** Fila de tecnología con barra de nivel que se llena al entrar en pantalla. */
export function SkillBar({ skill }: SkillBarProps) {
  const reduced = useReducedMotion()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })
  const width = `${levelWeights[skill.level]}%`

  return (
    <li className={styles.item} ref={ref}>
      <div className={styles.top}>
        <span className={styles.name}>{skill.name}</span>
        <span className={styles.level}>{skill.level}</span>
      </div>
      <div
        className={styles.track}
        role="meter"
        aria-valuenow={levelWeights[skill.level]}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name}: ${skill.level}`}
      >
        {reduced ? (
          <span className={styles.fill} style={{ width }} />
        ) : (
          <motion.span
            className={styles.fill}
            initial={{ width: 0 }}
            animate={inView ? { width } : undefined}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </div>
    </li>
  )
}

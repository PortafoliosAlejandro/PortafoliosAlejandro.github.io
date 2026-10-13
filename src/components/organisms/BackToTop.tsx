import { AnimatePresence, motion } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import styles from './BackToTop.module.css'

/** Botón flotante que aparece al bajar y vuelve al inicio. */
export function BackToTop() {
  const { scrolled } = useScrollPosition(480)
  const reduced = useReducedMotion()

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {scrolled ? (
        <motion.button
          type="button"
          className={styles.button}
          onClick={handleClick}
          aria-label="Volver arriba"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: reduced ? 0 : 0.25, ease: 'easeOut' }}
        >
          <ArrowUp size={20} aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}

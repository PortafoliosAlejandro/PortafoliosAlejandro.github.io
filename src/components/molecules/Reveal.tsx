import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type RevealProps = {
  children: ReactNode
  /** Retardo de la animación en segundos. */
  delay?: number
  className?: string
}

/**
 * Envuelve contenido y lo anima (fade-in + desplazamiento) la primera vez que
 * entra en el viewport. Con `prefers-reduced-motion` no anima.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px',
  })

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

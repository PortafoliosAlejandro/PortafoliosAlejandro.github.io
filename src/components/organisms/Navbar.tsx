import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Download, Menu, X } from 'lucide-react'
import { Button } from '../atoms/Button'
import { NavLink } from '../molecules/NavLink'
import { cvFileName, cvUrl, navItems } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import styles from './Navbar.module.css'

const sectionIds = navItems.map((item) => item.id)

function CvButton({ block = false }: { block?: boolean }) {
  return (
    <Button
      href={cvUrl ?? undefined}
      download={cvUrl ? cvFileName : undefined}
      disabled={!cvUrl}
      icon={Download}
      size="sm"
      className={block ? styles.cvBlock : undefined}
    >
      Descargar CV
    </Button>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { scrolled } = useScrollPosition(24)
  const activeId = useActiveSection(sectionIds)
  const reduced = useReducedMotion()

  // Bloquea el scroll del body mientras el menú móvil está abierto.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={[styles.header, scrolled && styles.scrolled].filter(Boolean).join(' ')}>
      <nav className={`container ${styles.nav}`} aria-label="Navegación principal">
        <a href="#inicio" className={styles.logo} onClick={close} aria-label="Ir al inicio">
          A<span aria-hidden="true">.</span>
        </a>

        <ul className={styles.links}>
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                href={`#${item.id}`}
                label={item.label}
                active={activeId === item.id}
              />
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <CvButton />
        </div>

        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className={styles.mobile}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: reduced ? 0 : 0.25, ease: 'easeOut' }}
          >
            <ul className={styles.mobileLinks}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    href={`#${item.id}`}
                    label={item.label}
                    active={activeId === item.id}
                    onClick={close}
                    className={styles.mobileLink}
                  />
                </li>
              ))}
            </ul>
            <CvButton block />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

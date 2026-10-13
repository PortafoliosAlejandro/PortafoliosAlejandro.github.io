import { profile } from '../../data/profile'
import styles from './Footer.module.css'

// El año se calcula al cargar el módulo (no durante el render).
const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.meta}>
          <span className={styles.name}>{profile.name}</span>
          <span aria-hidden="true"> · </span>
          <span className="mono">© {year}</span>
        </p>
      </div>
    </footer>
  )
}

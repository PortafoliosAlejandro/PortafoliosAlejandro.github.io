import { Outlet } from 'react-router-dom'
import { BackToTop } from '../organisms/BackToTop'
import { Footer } from '../organisms/Footer'
import { Navbar } from '../organisms/Navbar'
import styles from './MainLayout.module.css'

/** Estructura común: enlace de salto, navbar, contenido y footer. */
export function MainLayout() {
  return (
    <>
      <a className={styles.skip} href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

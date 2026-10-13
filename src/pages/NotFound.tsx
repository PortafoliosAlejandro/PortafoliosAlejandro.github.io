import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/atoms/Button'
import { Text } from '../components/atoms/Text'
import { Title } from '../components/atoms/Title'
import styles from './NotFound.module.css'

export function NotFound() {
  return (
    <section className={styles.wrapper} aria-labelledby="notfound-title">
      <div className="container">
        <span className={styles.code} aria-hidden="true">
          404
        </span>
        <Title as="h1" size="xl" id="notfound-title">
          Página no encontrada
        </Title>
        <Text muted className={styles.text}>
          La ruta que buscas no existe. Vuelve al inicio para seguir explorando
          el portafolio.
        </Text>
        <Button href="/" icon={ArrowLeft} className={styles.action}>
          Volver al inicio
        </Button>
      </div>
    </section>
  )
}

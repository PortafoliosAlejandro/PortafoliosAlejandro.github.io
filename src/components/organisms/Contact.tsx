import { Download, Mail } from 'lucide-react'
import { Button } from '../atoms/Button'
import { GithubIcon } from '../atoms/GithubIcon'
import { Text } from '../atoms/Text'
import { Reveal } from '../molecules/Reveal'
import { SectionHeading } from '../molecules/SectionHeading'
import { cvFileName, cvUrl, profile } from '../../data/profile'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section id="contacto" className="section" aria-labelledby="contacto-title">
      <div className="container">
        <Reveal className={styles.card}>
          <SectionHeading
            eyebrow="$ contact --now"
            title="Contacto"
            description="¿Tienes una oportunidad laboral o un proyecto en mente? Escríbeme y conversemos."
            titleId="contacto-title"
          />

          <div className={styles.actions}>
            <Button href={`mailto:${profile.email}`} icon={Mail}>
              Enviar correo
            </Button>
            <Button href={profile.github} external icon={GithubIcon} variant="outline">
              GitHub
            </Button>
            <Button
              href={cvUrl ?? undefined}
              download={cvUrl ? cvFileName : undefined}
              disabled={!cvUrl}
              variant="outline"
              icon={Download}
            >
              Descargar CV
            </Button>
          </div>

          <Text size="sm" muted className={styles.mail}>
            {profile.email}
          </Text>
        </Reveal>
      </div>
    </section>
  )
}

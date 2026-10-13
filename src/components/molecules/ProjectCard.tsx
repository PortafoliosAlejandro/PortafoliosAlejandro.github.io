import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../atoms/GithubIcon'
import { Tag } from '../atoms/Tag'
import { Text } from '../atoms/Text'
import { Title } from '../atoms/Title'
import type { Project } from '../../data/projects'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span className={styles.index} aria-hidden="true">
          {project.title.charAt(0).toUpperCase()}
        </span>
        <Title as="h3" size="md" className={styles.title}>
          {project.title}
        </Title>
      </div>

      <Text muted className={styles.description}>
        {project.description}
      </Text>

      <ul className={styles.tags} aria-label="Tecnologías del proyecto">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ul>

      <div className={styles.actions}>
        <a
          className={styles.action}
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={17} />
          Ver código
        </a>

        {project.demo ? (
          <a
            className={styles.action}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={17} aria-hidden="true" />
            Demo
          </a>
        ) : null}
      </div>
    </article>
  )
}

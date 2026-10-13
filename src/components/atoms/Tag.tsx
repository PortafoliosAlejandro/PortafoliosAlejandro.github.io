import type { ReactNode } from 'react'
import styles from './Tag.module.css'

type TagProps = {
  children: ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  const classes = [styles.tag, className].filter(Boolean).join(' ')
  return <li className={classes}>{children}</li>
}

import { createElement } from 'react'
import type { ReactNode } from 'react'
import styles from './Title.module.css'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'

type TitleProps = {
  children: ReactNode
  as?: HeadingTag
  size?: 'display' | 'xl' | 'lg' | 'md'
  className?: string
  id?: string
}

export function Title({
  children,
  as = 'h2',
  size = 'lg',
  className,
  id,
}: TitleProps) {
  const classes = [styles.title, styles[size], className].filter(Boolean).join(' ')
  return createElement(as, { className: classes, id }, children)
}

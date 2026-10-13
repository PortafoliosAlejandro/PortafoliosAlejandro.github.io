import { createElement } from 'react'
import type { ReactNode } from 'react'
import styles from './Text.module.css'

type TextProps = {
  children: ReactNode
  as?: 'p' | 'span' | 'div'
  size?: 'lg' | 'md' | 'sm'
  muted?: boolean
  className?: string
}

export function Text({
  children,
  as = 'p',
  size = 'md',
  muted = false,
  className,
}: TextProps) {
  const classes = [styles.text, styles[size], muted && styles.muted, className]
    .filter(Boolean)
    .join(' ')
  return createElement(as, { className: classes }, children)
}

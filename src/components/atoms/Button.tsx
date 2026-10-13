import type { ComponentType, MouseEventHandler, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  /** Si se indica, se renderiza como enlace `<a>`. */
  href?: string
  variant?: 'primary' | 'outline'
  size?: 'md' | 'sm'
  /** Fuerza el estado deshabilitado (por ejemplo, si falta el CV). */
  disabled?: boolean
  /** Fuerza el atributo `download` del enlace. */
  download?: string
  /** Abre el enlace en una pestaña nueva. */
  external?: boolean
  icon?: ComponentType<{ size?: number; className?: string }>
  className?: string
  ariaLabel?: string
  onClick?: MouseEventHandler<HTMLElement>
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  disabled = false,
  download,
  external = false,
  icon: IconComponent,
  className,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {IconComponent ? (
        <span className={styles.icon} aria-hidden="true">
          <IconComponent size={18} />
        </span>
      ) : null}
      <span>{children}</span>
    </>
  )

  if (href && !disabled) {
    return (
      <a
        className={classes}
        href={href}
        aria-label={ariaLabel}
        onClick={onClick}
        download={download}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      aria-disabled={disabled || undefined}
    >
      {content}
    </button>
  )
}

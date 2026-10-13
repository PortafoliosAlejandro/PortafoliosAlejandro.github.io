import styles from './NavLink.module.css'

type NavLinkProps = {
  href: string
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}

export function NavLink({ href, label, active, onClick, className }: NavLinkProps) {
  const classes = [styles.link, active && styles.active, className]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      href={href}
      className={classes}
      onClick={onClick}
      aria-current={active ? 'true' : undefined}
    >
      {label}
    </a>
  )
}

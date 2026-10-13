import type { LucideIcon } from 'lucide-react'

type IconProps = {
  icon: LucideIcon
  size?: number
  className?: string
  /** Si se indica, el icono se expone a lectores de pantalla con esta etiqueta. */
  label?: string
}

/** Envoltorio de los iconos de lucide-react con un grosor y tamaño consistentes. */
export function Icon({ icon: IconComponent, size = 20, className, label }: IconProps) {
  return (
    <IconComponent
      size={size}
      strokeWidth={1.75}
      className={className}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
    />
  )
}

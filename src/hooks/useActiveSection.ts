import { useEffect, useState } from 'react'

/**
 * Observa las secciones indicadas y devuelve el `id` de la que está activa.
 * Se usa para resaltar el enlace correspondiente en la navbar.
 */
export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState('')
  const key = ids.join('|')

  useEffect(() => {
    const sectionIds = key ? key.split('|') : []
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return activeId
}

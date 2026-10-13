import { useEffect, useState } from 'react'

/**
 * Devuelve la posición vertical del scroll y si se superó un umbral.
 * Se usa para cambiar el fondo de la navbar y mostrar el botón "volver arriba".
 */
export function useScrollPosition(threshold = 12) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, scrolled: scrollY > threshold }
}

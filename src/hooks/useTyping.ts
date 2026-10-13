import { useEffect, useState } from 'react'

type TypingOptions = {
  /** Milisegundos entre cada carácter. */
  typeSpeed?: number
  /** Pausa entre líneas terminadas. */
  lineDelay?: number
  /** Retardo antes de empezar a escribir. */
  startDelay?: number
  /** Si es `false`, muestra todas las líneas de inmediato (reduced motion). */
  enabled?: boolean
}

type TypingState = {
  /** Líneas ya escritas por completo. */
  completed: string[]
  /** Fragmento de la línea que se está escribiendo. */
  partial: string
  /** `true` cuando terminó de escribir todo. */
  done: boolean
}

/**
 * Efecto de máquina de escribir línea a línea.
 * Con movimiento reducido (`enabled: false`) devuelve el texto completo.
 */
export function useTyping(
  lines: string[],
  {
    typeSpeed = 38,
    lineDelay = 620,
    startDelay = 500,
    enabled = true,
  }: TypingOptions = {},
): TypingState {
  const [state, setState] = useState<{ completed: string[]; partial: string }>({
    completed: [],
    partial: '',
  })

  useEffect(() => {
    if (!enabled) return

    let timeoutId: number
    let cancelled = false
    let lineIndex = 0
    let charIndex = 0

    const tick = () => {
      if (cancelled || lineIndex >= lines.length) return

      const line = lines[lineIndex]

      if (charIndex < line.length) {
        charIndex += 1
        setState((prev) => ({ ...prev, partial: line.slice(0, charIndex) }))
        timeoutId = window.setTimeout(tick, typeSpeed)
        return
      }

      setState((prev) => ({ completed: [...prev.completed, line], partial: '' }))
      lineIndex += 1
      charIndex = 0

      if (lineIndex < lines.length) {
        timeoutId = window.setTimeout(tick, lineDelay)
      }
    }

    // El estado se reinicia dentro del primer timeout para no encadenar
    // renders síncronos desde el efecto.
    timeoutId = window.setTimeout(() => {
      setState({ completed: [], partial: '' })
      tick()
    }, startDelay)

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [enabled, lines, typeSpeed, lineDelay, startDelay])

  if (!enabled) {
    return { completed: lines, partial: '', done: true }
  }

  return {
    completed: state.completed,
    partial: state.partial,
    done: state.completed.length === lines.length,
  }
}

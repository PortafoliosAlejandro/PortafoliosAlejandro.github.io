import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useTyping } from '../../hooks/useTyping'
import styles from './TypingText.module.css'

type TypingTextProps = {
  lines: string[]
}

type TerminalLineProps = {
  text: string
  cursor?: boolean
}

function TerminalLine({ text, cursor }: TerminalLineProps) {
  const isPrompt = text.startsWith('$')

  return (
    <p className={styles.line}>
      <span className={isPrompt ? styles.prompt : styles.output}>{text}</span>
      {cursor ? <span className={styles.cursor} /> : null}
    </p>
  )
}

/**
 * Bloque de terminal que escribe las líneas una a una.
 * Con movimiento reducido muestra todas las líneas de golpe.
 */
export function TypingText({ lines }: TypingTextProps) {
  const reduced = useReducedMotion()
  const { completed, partial, done } = useTyping(lines, { enabled: !reduced })

  return (
    <div className={styles.terminal} role="img" aria-label={lines.join('. ')}>
      <div className={styles.header} aria-hidden="true">
        <span className={styles.dots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </span>
        <span className={styles.caption}>bash — alejandro</span>
      </div>

      <div className={styles.body} aria-hidden="true">
        {completed.map((line, index) => (
          <TerminalLine key={`${index}-${line}`} text={line} />
        ))}
        {partial ? <TerminalLine text={partial} cursor /> : null}
        {done && !partial ? (
          <p className={styles.line}>
            <span className={styles.cursor} />
          </p>
        ) : null}
      </div>
    </div>
  )
}

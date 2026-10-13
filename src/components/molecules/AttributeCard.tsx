import { Icon } from '../atoms/Icon'
import { Text } from '../atoms/Text'
import type { Attribute } from '../../data/profile'
import styles from './AttributeCard.module.css'

type AttributeCardProps = {
  attribute: Attribute
}

export function AttributeCard({ attribute }: AttributeCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.iconBox}>
        <Icon icon={attribute.icon} size={22} />
      </span>
      <h3 className={styles.label}>{attribute.label}</h3>
      <Text as="p" size="sm" muted>
        {attribute.description}
      </Text>
    </div>
  )
}

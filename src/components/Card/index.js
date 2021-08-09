import React from 'react'

// styles
import * as styles from './card.module.scss'

const Card = ({ children, color }) => {
  return (
    <div className={`bg-${color} ${styles.card_container}`}>{children}</div>
  )
}

export default Card

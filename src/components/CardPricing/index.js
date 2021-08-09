import React from 'react'

// styles
import * as styles from './cardPricing.module.scss'

const CardPricing = ({ title, content, price, theme }) => {
  return (
    <article className={`${styles[theme]} ${styles.card_pricing}`}>
      <h1>{title}</h1>

      {content.map((text, i) => (
        <p key={i}>&bull; {text}</p>
      ))}

      <div className={styles.card_pricingBox}>
        <h5>US$ {price}</h5>
      </div>

      <p>*El servicio no incluye el regalo a elegir</p>
    </article>
  )
}

export default CardPricing

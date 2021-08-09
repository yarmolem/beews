import React from 'react'

// Components
import CardPricing from '@/components/CardPricing'

// data
import { Premium, Xperience } from '@/data/pricing'

// styles
import styles from './pricing.module.scss'

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <h3>¿Y cómo deseas sorprender este día?</h3>
      <h4>Hay un Beews esperando por ti</h4>

      <div className={styles.pricing_grid}>
        <CardPricing {...Xperience} />
        <CardPricing {...Premium} />
      </div>
    </section>
  )
}

export default Pricing

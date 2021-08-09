import React from 'react'

// Components
import CardPricing from '@/components/CardPricing'

// data
import { Xperience, Premium } from '@/data/pricing'

// Styles
import styles from './plan.module.scss'

const Plan = ({ next }) => {
  return (
    <div className={styles.plan}>
      <div className={styles.plan_num}>
        <h1>1</h1>
      </div>

      <h2>Escoge tu plan Beews</h2>

      <div className={styles.plan_grid}>
        <CardPricing {...Xperience} />
        <CardPricing {...Premium} />
      </div>

      <button onClick={next} className="btn btn-primary text-white btn-lg">
        Siguiente
      </button>
    </div>
  )
}

export default Plan

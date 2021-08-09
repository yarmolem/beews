import React from 'react'

import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_overlay} />
      <div className={styles.hero_wrap}>
        <h1>El camino hacia tu sorpresa</h1>
        <h4>
          En 5 simples pasos te explicamos la forma de como puedes hacer tu
          pedido ¡Es fácil y sencillo!
        </h4>
      </div>
    </div>
  )
}

export default Hero

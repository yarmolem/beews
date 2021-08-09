import React from 'react'
import Carrito from './Carrito'
import FormPago from './FormPago'
import MetodosPago from './MetodosPago'

// Styles
import styles from './pagar.module.scss'

const Pagar = ({ next }) => {
  return (
    <div className={styles.pagar}>
      <div className={styles.pagar_num}>
        <h1>4</h1>
      </div>

      <h2>Ir a pagar</h2>
      <div className={styles.pagar_grid}>
        <div className={styles.pagar_grid1}>
          <Carrito />
        </div>
        <div className={styles.pagar_grid2}>
          <MetodosPago />
          <FormPago {...{ next }} />
        </div>
      </div>
    </div>
  )
}

export default Pagar

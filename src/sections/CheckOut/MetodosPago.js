import React from 'react'

// Styles
import styles from './pagar.module.scss'

const MetodosPago = () => {
  return (
    <div className={styles.metodos}>
      <button className={`btn btn-primary ${styles.metodos_item}`}>
        <p>Transferencia Bancaria</p>
      </button>
      <button className={`btn btn-primary ${styles.metodos_item}`}>
        <p>Paga con PayPal</p>
      </button>
      <button className={`btn btn-primary ${styles.metodos_item}`}>
        <p>Tarjeta de crédito o debito</p>
      </button>
      <button className={`btn btn-primary ${styles.metodos_item}`}>
        <p>Depósito en efectivo</p>
      </button>
    </div>
  )
}

export default MetodosPago

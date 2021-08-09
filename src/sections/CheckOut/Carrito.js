import React from 'react'

// Styles
import styles from './pagar.module.scss'

const Carrito = () => {
  return (
    <div className={styles.carrito}>
      <h3>Mi carrito</h3>
      <div>
        <div className={styles.carrito_item}>
          <div className={styles.carrito_itemNum}>1</div>

          <h4>
            Beews <br /> Premium
          </h4>

          <h5>Detalle</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt nec magna porta molestie. Aliquam quis euismod elit,
          </p>

          <h6>$ 30.00</h6>
        </div>
        <div className={styles.carrito_item}>
          <div className={styles.carrito_itemNum}>
            <span>2</span>
          </div>

          <h4>Ilustración Personalizada</h4>

          <h5>Detalle</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt nec magna porta molestie. Aliquam quis euismod elit,
          </p>

          <h6>$ 20.00</h6>
        </div>
      </div>
    </div>
  )
}

export default Carrito

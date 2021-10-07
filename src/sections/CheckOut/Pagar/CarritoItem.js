import { animationTap } from '@/animations/framer'
import useCheckout from '@/hooks/useCheckout'
import { motion } from 'framer-motion'
import React from 'react'
import { MinusSquareIcon, PlusSquareIcon, TrashIcon } from 'src/SVG/icons'

// Styles
import styles from './pagar.module.scss'

const CarritoItem = ({
  cod,
  image,
  price,
  count,
  detalle,
  subtotal,
  className = '',
  onDelete = () => {},
  isEdit = true,
  onEdit = {
    plus: () => {},
    minus: () => {},
    change: () => {}
  }
}) => {
  const renderInputCount = () => {
    return (
      <div className={styles.cantidad_input}>
        <motion.button
          whileTap="tap"
          disabled={count === 1}
          onClick={onEdit.minus}
          variants={animationTap}
        >
          <MinusSquareIcon />
        </motion.button>
        <input type="number" value={count} onChange={onEdit.change} />
        <motion.button
          whileTap="tap"
          disabled={count >= 99}
          variants={animationTap}
          onClick={onEdit.plus}
        >
          <PlusSquareIcon />
        </motion.button>
      </div>
    )
  }

  return (
    <div className={`${styles.producto} ${className}`}>
      <img src={image} alt="" className={styles.producto_image} />
      <div className={styles.producto_detail}>
        <p>Detalle</p>
        <h3>{detalle}</h3>
        {cod ? <small>Codigo: {cod}</small> : null}
        <button onClick={onDelete}>
          <TrashIcon /> Eliminar del carrito
        </button>
      </div>
      <div className={styles.separador} />
      <div className={styles.producto_price}>
        <p>Precio</p>
        <h3>US$ {price}</h3>
        {isEdit ? renderInputCount() : null}
      </div>
      <div className={styles.separador} />
      <div className={styles.producto_subtotal}>
        <p>Subtotal</p>
        <h3>US$ {subtotal}</h3>
      </div>
    </div>
  )
}

export default CarritoItem

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'

// utils
import { CUSTOM_PORTRAIT } from '@/data/regalos'
import { translate } from '@/i18n/translate'
import { animationTap } from '@/animations/framer'
import { MinusSquareIcon, PlusSquareIcon, TimesCircleIcon } from 'src/SVG/icons'

// styles
import styles from './regalomodal.module.scss'

const Slide = ({
  max = 99,
  onToggle = () => {},
  onSelect = () => {},
  gift = CUSTOM_PORTRAIT['es-ES']
}) => {
  const { locale } = useRouter()
  const [count, setCount] = useState(1)

  const handleCount = ({ target: { value } }) => {
    if (value <= 0) return setCount(0)
    if (value >= max) return setCount(max)
    setCount(value)
  }

  const handlePlus = () => {
    if (count === max) return
    setCount((c) => parseInt(c) + 1)
  }
  const handleMinus = () => {
    if (count === 0) return
    setCount((c) => parseInt(c) - 1)
  }

  const handleSelect = () => {
    const { desc, size, ...rest } = gift
    onSelect({ ...rest, count })
  }

  const {
    checkout: { giftItem }
  } = translate[locale]

  return (
    <div className={styles.slide}>
      <motion.button
        whileTap="tap"
        onClick={onToggle}
        variants={animationTap}
        className={styles.closeBtn}
      >
        <TimesCircleIcon />
      </motion.button>
      <div className={styles.image}>
        <img src={gift.img} alt="" />
      </div>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <h1>{gift.title}</h1>
          <h3>{gift.cod}</h3>
          <h2>US${gift.price}</h2>
        </div>

        <div className={styles.content}>
          <p>{gift.desc}</p>
        </div>

        <div className={styles.medidas}>
          <p>{gift.size}</p>
        </div>

        <div className={styles.cantidad}>
          <label>{giftItem.quantity}</label>
          <div className={styles.cantidad_input}>
            <input type="number" value={Number(count)} onChange={handleCount} />
            <div className={styles.cantidad_input_buttons}>
              <motion.button
                whileTap="tap"
                onClick={handlePlus}
                variants={animationTap}
                disabled={count >= max}
              >
                <PlusSquareIcon />
              </motion.button>
              <motion.button
                whileTap="tap"
                onClick={handleMinus}
                disabled={count === 0}
                variants={animationTap}
              >
                <MinusSquareIcon />
              </motion.button>
            </div>
          </div>
        </div>

        <div className={styles.entrega}>
          <p>{giftItem.deliveryTime}</p>
        </div>

        <button
          onClick={handleSelect}
          className={`btn btn-primary btn-lg text-white ${styles.button}`}
        >
          {giftItem.submit}
        </button>

        {/* <div className={styles.links}>
          <a href="#">Ver detalles de producto</a>
          <a href="#">Compartir</a>
        </div> */}
      </div>
    </div>
  )
}

export default Slide

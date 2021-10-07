import React from 'react'
import { translate } from '@/i18n/translate'
import useCheckout from '@/hooks/useCheckout'
import { animationTap } from '@/animations/framer'
import { motion } from 'framer-motion'
import { PaypalIcon } from 'src/SVG/icons'

// components
import CarritoItem from './CarritoItem'

// Styles
import styles from './pagar.module.scss'
import useToast from '@/hooks/useToast'

const Pagar = ({ next, locale }) => {
  const { car, plan, total, deletePlan, deleteCarItem, updateCarItem } =
    useCheckout()
  const { toast } = useToast()

  const handleCarItemDelete = ({ cod, title }) => {
    deleteCarItem(cod)
    toast({
      title: 'Éxito',
      msg: `${title} eliminado del carrito.`,
      hideProgressBar: true
    })
  }

  const handlePlanDelete = () => {
    deletePlan()
  }

  const handleChange = (item) => {
    if (item.count === 0) return
    if (item.count === 99) return
    updateCarItem(item)
  }

  const renderResumen = () => {
    return car.map((item, i) => (
      <CarritoItem
        key={`item-${item.cod}-${i}`}
        cod={item.cod}
        image={item.img}
        price={item.price}
        count={item.count}
        detalle={item.title}
        subtotal={item.price * item.count}
        onDelete={() => handleCarItemDelete(item)}
        onEdit={{
          plus: () => handleChange({ ...item, count: item.count + 1 }),
          minus: () => handleChange({ ...item, count: item.count - 1 }),
          change: () => handleChange(item)
        }}
      />
    ))
  }

  const {
    checkout: { pay }
  } = translate[locale]

  const iconPlan = () => {
    const premium = '/images/icono-premiun.svg'
    const xperience = '/images/icono-xperience.svg'
    return plan.id === 'Xperience' ? xperience : premium
  }

  return (
    <div className={styles.pagar}>
      <div className={styles.pagar_num}>
        <h1>4</h1>
      </div>

      <h2>{pay.title}</h2>
      <CarritoItem
        className="mb-4"
        isEdit={false}
        price={plan.price}
        subtotal={plan.price}
        detalle={`Paquete ${plan.title}`}
        image={iconPlan()}
        onDelete={handlePlanDelete}
      />
      {renderResumen()}
      <div className={styles.totalBar}>
        <h3>Total</h3>
        <h3>US$ {total}.00</h3>
      </div>
      <div className={styles.metodos}>
        <h3>{pay.payWith}:</h3>

        <div className={styles.metodos_flex}>
          <motion.button variants={animationTap} whileTap="tap">
            <PaypalIcon />
          </motion.button>
          {/* <motion.button variants={animationTap} whileTap="tap">
            <VisaIcon />
          </motion.button>
          <motion.button variants={animationTap} whileTap="tap">
            <MasterCardIcon />
          </motion.button> */}
        </div>
      </div>

      <button
        onClick={next}
        className={`btn btn-danger text-white btn-lg ${styles.nextButton}`}
      >
        {pay.submit}
      </button>
    </div>
  )
}

export default Pagar

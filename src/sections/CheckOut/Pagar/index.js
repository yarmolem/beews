import React, { useState } from 'react'
import { translate } from '@/i18n/translate'
import useCheckout from '@/hooks/useCheckout'
import PaypalButton from '@/components/PaypalButton'

// components
import CarritoItem from './CarritoItem'

// Styles
import styles from './pagar.module.scss'
import useToast from '@/hooks/useToast'

const Pagar = ({ next, locale }) => {
  const { toast } = useToast()
  const [paypalID, setPaypalID] = useState(null)
  const { car, plan, total, ...actions } = useCheckout()

  const handleCarItemDelete = ({ cod, title }) => {
    actions.deleteCarItem(cod)
    toast({
      title: 'Éxito',
      msg: `${title} eliminado del carrito.`,
      hideProgressBar: true
    })
  }

  const handlePlanDelete = () => {
    actions.deletePlan()
  }

  const handleChange = (item) => {
    if (item.count === 0) return
    if (item.count === 99) return
    actions.updateCarItem(item)
  }

  const handleCancelOperation = () => {
    toast({
      type: 'info',
      title: 'Info',
      msg: 'La operacion a sido cancelada',
      hideProgressBar: true
    })
  }

  const handleErrorOperation = (err) => {
    if (err === 'VALUE_ZERO') {
      toast({
        type: 'error',
        title: 'Error',
        msg: 'El valor de la compra no debe ser menor a cero',
        hideProgressBar: true
      })
    }
    if (err === 'ERROR_CNN_PAYPAL') {
      toast({
        type: 'error',
        title: 'Error',
        msg: 'El error al conectar con paypal',
        hideProgressBar: true
      })
    }
  }

  const handleApproveOperation = ({ id }) => {
    setPaypalID(id)
    toast({
      title: 'Éxito',
      msg: `Operacion exitosa con ID: ${id}`,
      hideProgressBar: true
    })
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

  const renderPagoExitoso = (params) => {
    return <h2>ID: {paypalID}</h2>
  }

  const {
    checkout: { pay }
  } = translate[locale]

  const iconPlan = () => {
    const premium = '/images/icono-premiun.svg'
    const xperience = '/images/icono-xperience.svg'
    return plan.id === 'Xperience' ? xperience : premium
  }

  const paypalProps = {
    value: total,
    onError: handleErrorOperation,
    onCancel: handleCancelOperation,
    onApprove: handleApproveOperation
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
          {!paypalID ? <PaypalButton {...paypalProps} /> : renderPagoExitoso()}
          {/* <motion.button variants={animationTap} whileTap="tap">
            <PaypalIcon />
          </motion.button> */}
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

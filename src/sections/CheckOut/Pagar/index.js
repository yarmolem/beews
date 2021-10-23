import React, { useState } from 'react'
import { translate } from '@/i18n/translate'
import useCheckout from '@/hooks/useCheckout'
import PaypalButton from '@/components/PaypalButton'

// components
import CarritoItem from './CarritoItem'

// Styles
import styles from './pagar.module.scss'
import useToast from '@/hooks/useToast'
import { useMutation } from '@apollo/client'
import { CREAR_PEDIDO_MUTATION } from 'src/graphql/mutation/crearPedido_mutation'
import { PLANES } from '@/data/planes'

const Pagar = ({ next, locale }) => {
  const { toast } = useToast()
  const { setPaypalIdAction, setDataPedidoCreadoAction } = useCheckout()
  const [paypalID, setPaypalID] = useState(null)
  const { car, plan, total, ...actions } = useCheckout()
  const checkoutState = useCheckout()
  const [crearPedidoMutation] = useMutation(CREAR_PEDIDO_MUTATION, {
    onError: (err) => {
      const error = err?.graphQLErrors[0].debugMessage
      if (error) {
        console.log('error ', error)
      } else {
        console.log('error desconocido', error)
      }
    },
    onCompleted: (values) => {
      toast({
        title: 'Exitoso',
        msg: 'Compra finalizada',
        hideProgressBar: true
      })
      console.log('*** data pedido creado ', values)
      setDataPedidoCreadoAction(values.CrearPedido)
      next()
    }
  })

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
  const handleCrearPedido = (idPaypal) => {
    // CREAR PEDIDO
    const payload = {
      variables: {
        input: {
          plan: PLANES.find(
            (plan) =>
              plan.title.toUpperCase() === checkoutState.plan.id.toUpperCase()
          )?.id,
          estado: 'REALIZADO',
          visto: 'visto',
          idPaypal: idPaypal,
          DetallePedidosInput: checkoutState.car.map((regalo) => ({
            precio: regalo.price,
            cantidad: regalo.count,
            productoId: regalo.id
          })),
          FichaDestinoInput: {
            nombres: checkoutState.destinationData.name,
            apellidos: checkoutState.destinationData.lastname,
            pais: checkoutState.destinationData.country,
            ciudad: checkoutState.destinationData.city,
            distrito: checkoutState.destinationData.district,
            direccion: checkoutState.destinationData.address,
            referencia: checkoutState.destinationData.reference,
            vinculo: checkoutState.destinationData.relationship,
            fechaSugerida: checkoutState.destinationData.deliveryDate,
            horarioSugerido: checkoutState.destinationData.deliveryTime
          }
        }
      }
    }
    console.log('payload ', payload)
    crearPedidoMutation(payload)
  }

  const handleApproveOperation = ({ id }) => {
    if (id === null || id === '') {
      toast({
        title: 'Error',
        msg: 'Operacion sin éxito',
        hideProgressBar: true
      })
      return
    }
    handleCrearPedido(id)
    setPaypalID(id)
    // subir paypal Id al checkout state
    setPaypalIdAction(id)
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

  const validarPago = () => {
    if (paypalID === '' || paypalID === null) {
      toast({
        type: 'info',
        title: 'Info',
        msg: 'Primero debe realizar el pago',
        hideProgressBar: true
      })
    }
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
        onClick={validarPago}
        className={`btn btn-danger text-white btn-lg ${styles.nextButton}`}
      >
        {pay.submit}
      </button>
    </div>
  )
}

export default Pagar

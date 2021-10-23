import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react'

const PayPalButton = ({
  value = 0,
  onError = () => {},
  onCancel = () => {},
  onApprove = () => {},
  LoadingComponent = () => <h2>Cargando ...</h2>
}) => {
  const paypalRef = useRef()
  const ButtonRef = useRef()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (window.paypal && window.paypal.Buttons) {
      const paypal = window.paypal
      paypalRef.current = paypal
      ButtonRef.current = paypal.Buttons.driver('react', {
        React,
        ReactDOM
      })
      setLoaded(true)
    } else {
      console.log('ERROR AL CARGAR CDN DE PAYPAL')
      onError('ERROR_CNN_PAYPAL')
    }
  }, [window.paypal])

  const handleCreate = (data, actions) => {
    if (value <= 0) return onError('VALUE_ZERO')
    return actions.order.create({
      purchase_units: [{ amount: { value } }]
    })
  }

  const handleApprove = (data, actions) => {
    return actions.order
      .capture()
      .then((data) => onApprove(data))
      .catch((err) => {
        console.log(err)
        onError('Su compra no ha sido procesada por favor intente nuevamente.')
      })
  }

  if (!loaded) return <LoadingComponent />

  return (
    <div style={{ width: '100%' }}>
      <ButtonRef.current
        id="paypal-button"
        style={{
          height: 55,
          shape: 'rect',
          color: 'white',
          tagline: false,
          label: 'paypal',
          layout: 'horizontal'
        }}
        onError={onError}
        onCancel={onCancel}
        onApprove={handleApprove}
        createOrder={handleCreate}
      />
    </div>
  )
}

export default PayPalButton

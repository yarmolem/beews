import React, { useEffect, useState } from 'react'
import DatosDestinatario from './DatosDestinatario'
import DatosPersonales from './DatosPersonales'

// Styles
import styles from './formulario.module.scss'

const Formulario = ({ next, prev }) => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    window.scroll({ top: 0 })
  }, [step])

  const nextStep = () => setStep(1)
  const prevStep = () => setStep(0)

  const props = {
    next,
    prev,
    nextStep,
    prevStep
  }

  const PASO1 = <DatosPersonales {...props} />
  const PASO2 = <DatosDestinatario {...props} />

  return (
    <div className={styles.formulario}>
      <div className={styles.formulario_num}>
        <h1>3</h1>
      </div>

      <h2>Llena el formulario</h2>
      <h3>
        {step === 0
          ? 'PRIMERO LLENA TUS DATOS PERSONALES'
          : 'AHORA LLENA LOS DATOS DE LA PERSONA LA QUE LE LLEGARÁ TU BEEWS'}
      </h3>

      {step === 0 ? PASO1 : PASO2}
    </div>
  )
}

export default Formulario

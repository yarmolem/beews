import React, { useEffect, useState } from 'react'

// components
import AuthBlock from '@/components/AuthBlock'
import DatosPersonales from './DatosPersonales'
import DatosDestinatario from './DatosDestinatario'

// utils
import useAuth from '@/hooks/useAuth'
// import { fakeLogin } from '@/data/fakeLogin'
import { translate } from '@/i18n/translate'

// Styles
import styles from './formulario.module.scss'
import RegistrarDatos from './RegistrarDatosPersonales'

const Formulario = ({ next, prev, locale }) => {
  const { isAuth } = useAuth()
  // States
  const [step, setStep] = useState(0)
  const [isRegister, setIsRegister] = useState(false)
  const [isPersonalData, setIsPersonalData] = useState(false)
  const [isDestinationData, setIsDestinationData] = useState(false)
  const [isLogin, setIsLogin] = useState(!isAuth)

  // Custom hooks
  // const { loadPersonalData } = useCheckout()

  useEffect(() => {
    window.scroll({ top: 0 })
  }, [step])

  const {
    checkout: { form }
  } = translate[locale]

  const nextStep = () => setStep(1)
  const prevStep = () => setStep(0)

  console.log(isRegister)

  const props = {
    next,
    prev,
    locale,
    nextStep,
    prevStep
  }

  const handleRegister = () => {
    setIsLogin(false)
    setIsRegister(true)
    setIsPersonalData(false)
    setIsDestinationData(false)
  }
  const handleLogin = () => {
    setIsLogin(true)
    setIsRegister(false)
    setIsPersonalData(false)
    setIsDestinationData(false)
  }
  const handleDestination = () => {
    setIsLogin(false)
    setIsRegister(false)
    setIsPersonalData(false)
    setIsDestinationData(true)
  }
  const handlePersonalData = () => {
    setIsLogin(false)
    setIsRegister(false)
    setIsPersonalData(true)
    setIsDestinationData(false)
  }

  return (
    <>
      <div className={styles.formulario}>
        <div className={styles.formulario_num}>
          <h1>2</h1>
        </div>

        <h2>{step === 0 ? form.title1 : form.title2}</h2>
        <h3>{step === 0 ? form.subtitle1 : form.subtitle2}</h3>
        {/* eslint-disable */}
        {isLogin ? (
          <AuthBlock
            onSuccess={handlePersonalData}
            onRegister={handleRegister}
          />
        ) : null}
        {isRegister ? (
          <RegistrarDatos onSuccess={handleDestination} goLogin={handleLogin} />
        ) : null}
        {isPersonalData ? (
          <DatosPersonales {...props} onSuccess={handleDestination} />
        ) : null}
        {isDestinationData ? <DatosDestinatario {...props} /> : null}
      </div>
    </>
  )
}

export default Formulario

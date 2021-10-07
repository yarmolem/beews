import React, { useEffect, useState } from 'react'

// components
import AuthBlock from '@/components/AuthBlock'
import DatosPersonales from './DatosPersonales'
import DatosDestinatario from './DatosDestinatario'

// utils
import useAuth from '@/hooks/useAuth'
import { fakeLogin } from '@/data/fakeLogin'
import { translate } from '@/i18n/translate'

// Styles
import styles from './formulario.module.scss'
import useCheckout from '@/hooks/useCheckout'

const Formulario = ({ next, prev, locale }) => {
  // States
  const [step, setStep] = useState(0)
  const [isRegister, setIsRegister] = useState(false)

  // Custom hooks
  const { isAuth, login } = useAuth()
  const { loadPersonalData } = useCheckout()

  useEffect(() => {
    window.scroll({ top: 0 })
  }, [step])

  const {
    checkout: { form }
  } = translate[locale]

  const nextStep = () => setStep(1)
  const prevStep = () => setStep(0)

  const handleLogin = () => {
    login({ ...fakeLogin })
    loadPersonalData({ ...fakeLogin })
  }

  console.log(isRegister)

  const handleRegister = () => setIsRegister(true)

  const props = {
    next,
    prev,
    locale,
    nextStep,
    prevStep
  }

  const renderPersonalData = () => <DatosPersonales {...props} />
  const renderDestinationData = () => <DatosDestinatario {...props} />
  const renderAuthBlock = () => (
    <AuthBlock onLogin={handleLogin} onRegister={handleRegister} />
  )

  return (
    <>
      {!isRegister && !isAuth ? renderAuthBlock() : null}
      <div className={styles.formulario}>
        <div className={styles.formulario_num}>
          <h1>2</h1>
        </div>

        <h2>{step === 0 ? form.title1 : form.title2}</h2>
        <h3>{step === 0 ? form.subtitle1 : form.subtitle2}</h3>

        {step === 0 ? renderPersonalData() : renderDestinationData()}
      </div>
    </>
  )
}

export default Formulario

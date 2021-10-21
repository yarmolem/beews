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

  const props = {
    next,
    prev,
    locale,
    nextStep,
    prevStep
  }

  // MANEJAR MOSTRAR FORMULARIOS - LOGIN, REGISTER, PERSONAL DATA, DESTINATION DATA
  const initialIsShowForm = {
    Register: false,
    Login: true,
    PersonalData: false,
    DestinationData: false
  }

  const [isShowForm, setIsShowForm] = useState(initialIsShowForm)

  const showRegisterForm = () => {
    setIsShowForm({
      ...initialIsShowForm,
      Register: true,
      Login: false
    })
  }

  const showLoginForm = () => {
    setIsShowForm({
      ...initialIsShowForm,
      Login: true
    })
  }
  const showPersonalDataForm = () => {
    console.log('mostrando personal data form')
    setIsShowForm({
      ...initialIsShowForm,
      PersonalData: true,
      Login: false
    })
  }
  const showDestinationDataForm = () => {
    setIsShowForm({
      ...initialIsShowForm,
      DestinationData: true,
      Login: false,
      PersonalData: false
    })
  }

  useEffect(() => {
    if (isAuth) {
      showPersonalDataForm()
    }
  }, [])

  return (
    <>
      <div className={styles.formulario}>
        <div className={styles.formulario_num}>
          <h1>2</h1>
        </div>

        <h2>{step === 0 ? form.title1 : form.title2}</h2>
        <h3>{step === 0 ? form.subtitle1 : form.subtitle2}</h3>
        {/* eslint-disable */}
        {isShowForm.Login && !isAuth ? (
          <AuthBlock
            onSuccess={showPersonalDataForm}
            onRegister={showRegisterForm}
          />
        ) : null}
        {isShowForm.Register ? (
          <RegistrarDatos
            onSuccess={showDestinationDataForm}
            goLogin={showLoginForm}
          />
        ) : null}
        {isShowForm.PersonalData ? (
          <DatosPersonales {...props} onSuccess={showDestinationDataForm} />
        ) : null}
        {isShowForm.DestinationData ? <DatosDestinatario {...props} /> : null}
      </div>
    </>
  )
}

export default Formulario

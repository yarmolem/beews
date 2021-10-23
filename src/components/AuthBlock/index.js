import React, { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import TextInput from '../TextInput'

// styles
import styles from './authblock.module.scss'
import { translate } from '@/i18n/translate'
import ErrorMessage from '../ErrorMessage'
import useToast from '@/hooks/useToast'
import { useFormik } from 'formik'
import { loginSchema } from 'src/validation/loginSchema'
import useAuth from '@/hooks/useAuth'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from 'src/graphql/mutation/login_mutation'
import useCheckout from '@/hooks/useCheckout'
import Loader from '../Loader/Loader'

const AuthBlock = ({ onSuccess = () => {}, onRegister = () => {} }) => {
  const { locale } = useRouter()
  const { toast } = useToast()
  const { login: loginAction } = useAuth()
  // const [mensajeError, setMensajeError] = useState(null)

  const { login } = translate[locale]
  const { loadPersonalData } = useCheckout()

  const initialValues = {
    email: '',
    password: ''
  }
  const [mensajeError, setMensajeError] = useState(null)

  const [loginUserMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onError: (err) => {
      const error = err?.graphQLErrors[0].debugMessage
      if (error === 'CUENTA_DESACTIVADA') {
        console.log('error ', error)
        setMensajeError('Cuenta desactivada o inexistente')
      } else if (error === 'CONTRASEÑA_INCORRECTA') {
        setMensajeError('Contraseña incorrecta')
      } else {
        console.log('Error desconocido ', error)
      }
    }
  })

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setMensajeError(null)
      const response = await loginUserMutation({
        variables: {
          input: {
            email: values.email,
            password: values.password
          }
        }
      })
      const data = response?.data?.login
      toast({
        title: 'Exitoso',
        msg: `Bienvenid@ ${data.nombre}`
      })

      loginAction(data)
      loadPersonalData(data)

      onSuccess()
    }
  })

  return (
    <div className={styles.authblock}>
      <div className={styles.authblock_content}>
        <h2>{login.title}</h2>
        <form onSubmit={formik.handleSubmit} className="mb-4">
          <ErrorMessage
            {...{
              errors: formik?.errors,
              touched: formik?.touched,
              name: 'email'
            }}
          />
          <TextInput
            type="email"
            placeholder={login.email}
            id="auth-input-name"
            classContainer="mb-3"
            name="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <ErrorMessage
            {...{
              errors: formik?.errors,
              touched: formik?.touched,
              name: 'password'
            }}
          />
          <TextInput
            type="password"
            classContainer="mb-4"
            id="auth-input-password"
            placeholder={login.password}
            name="password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          <div className="d-flex flex-column justify-content-center">
            {mensajeError && (
              <p className="alert alert-primary">{mensajeError}</p>
            )}
            {loading && <Loader />}
            {!loading && (
              <button className="btn btn-primary text-white btn-lg">
                {login.submit}
              </button>
            )}
          </div>
        </form>
        {/* {mensajeError && <p className="alert alert-primary">{mensajeError}</p>} */}

        <button
          onClick={onRegister}
          className={`btn btn-lg ${styles.registro}`}
        >
          {login.registro}
        </button>
      </div>
    </div>
  )
}

export default AuthBlock

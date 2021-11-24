import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'

import useAuth from '@/hooks/useAuth'
import useToast from '@/hooks/useToast'
import { translate } from '@/i18n/translate'
import TextInput from '@/components/TextInput'
import Loader from '@/components/Loader/Loader'
import ErrorMessage from '@/components/ErrorMessage'
import { loginSchema } from '@/validation/loginSchema'
import { LOGIN_MUTATION } from '@/graphql/mutation/login_mutation'

// Styles
import styles from './registro.module.scss'

const LoginForm = ({ onLogin = () => {}, onToggleAuth = () => {} }) => {
  const { toast } = useToast()
  const { login: loginAction } = useAuth()
  const { locale, ...router } = useRouter()

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

  const initialValues = {
    email: '',
    password: ''
  }

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log('login function ', loginAction)
      setMensajeError(null)
      const response = await loginUserMutation({
        variables: {
          input: {
            email: values.email,
            password: values.password
          }
        }
      })
      const token = response?.data?.login?.apiToken
      if (token) {
        loginAction(response.data.login)
        toast({
          title: 'Exitoso',
          msg: `Bienvenid@ ${response.data.login.nombre}`,
          hideProgressBar: true
        })
        router.push('/')
      }
    }
  })

  const { login } = translate[locale]

  return (
    <div className="d-flex flex-column items-center justify-content-center h-100">
      <h1>{login.title}</h1>
      <p>{login.subtitle}</p>
      <form onSubmit={formik.handleSubmit} className="mb-4">
        <div className="mb-4">
          <TextInput
            name="email"
            type="email"
            id="auth-input-name"
            placeholder={login.email}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            isInvalid={formik.errors.email && formik.touched.email}
          />
          <ErrorMessage
            {...{
              name: 'email',
              errors: formik?.errors,
              touched: formik?.touched
            }}
          />
        </div>

        <div className="mb-4">
          <TextInput
            type="password"
            name="password"
            id="auth-input-password"
            placeholder={login.password}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={formik.errors.password && formik.touched.password}
          />
          <ErrorMessage
            {...{
              name: 'password',
              errors: formik?.errors,
              touched: formik?.touched
            }}
          />
        </div>

        <div className="d-flex flex-column justify-content-center">
          {mensajeError && (
            <p className="alert alert-primary">{mensajeError}</p>
          )}
          {loading && <Loader />}
          {!loading && (
            <button
              // onClick={onLogin}
              type="submit"
              className={`btn btn-primary btn-lg text-white ${styles.login_btn}`}
            >
              {login.submit}
            </button>
          )}
        </div>
      </form>

      <div className="d-flex justify-content-center">
        <button
          onClick={onToggleAuth}
          className={`btn btn-lg text-white ${styles.goregistro_btn}`}
        >
          {login.registro}
        </button>
      </div>
    </div>
  )
}

export default LoginForm

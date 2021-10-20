import React, { useState } from 'react'
import TextInput from '@/components/TextInput'
import { useRouter } from 'next/dist/client/router'

// Styles
import styles from './registro.module.scss'
import { translate } from '@/i18n/translate'
import { useFormik } from 'formik'
import ErrorMessage from '@/components/ErrorMessage'
import Loader from '@/components/Loader/Loader'
import { loginSchema } from 'src/validation/loginSchema'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from 'src/graphql/mutation/login_mutation'
import useAuth from '@/hooks/useAuth'
import useToast from '@/hooks/useToast'

const LoginForm = ({ onLogin = () => {}, onToggleAuth = () => {} }) => {
  const { locale, ...router } = useRouter()
  const { login } = translate[locale]
  const { toast } = useToast()
  const { login: loginAction } = useAuth()
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
    enableReinitialize: true,
    initialValues,
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

  return (
    <div className="d-flex flex-column items-center justify-content-center h-100">
      <h1>{login.title}</h1>
      <p>{login.subtitle}</p>
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

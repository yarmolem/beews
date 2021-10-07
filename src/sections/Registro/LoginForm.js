import React from 'react'
import TextInput from '@/components/TextInput'
import { useRouter } from 'next/dist/client/router'

// Styles
import styles from './registro.module.scss'
import { translate } from '@/i18n/translate'

const LoginForm = ({ onLogin = () => {}, onToggleAuth = () => {} }) => {
  const { locale } = useRouter()
  const { login } = translate[locale]

  return (
    <div className="d-flex flex-column items-center justify-content-center h-100">
      <h1>{login.title}</h1>
      <p>{login.subtitle}</p>
      <form onSubmit={(e) => e.preventDefault()} className="mb-4">
        <TextInput
          placeholder={login.email}
          id="auth-input-name"
          classContainer="mb-3"
        />
        <TextInput
          classContainer="mb-4"
          id="auth-input-password"
          placeholder={login.password}
        />

        <div className="d-flex justify-content-center">
          <button
            onClick={onLogin}
            className={`btn btn-primary btn-lg text-white ${styles.login_btn}`}
          >
            {login.submit}
          </button>
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

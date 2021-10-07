import React from 'react'
import { useRouter } from 'next/dist/client/router'
import TextInput from '../TextInput'

// styles
import styles from './authblock.module.scss'
import { translate } from '@/i18n/translate'

const AuthBlock = ({ onLogin = () => {}, onRegister = () => {} }) => {
  const { locale } = useRouter()

  const { login } = translate[locale]

  return (
    <div className={styles.authblock}>
      <div className={styles.authblock_content}>
        <h2>{login.title}</h2>
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

          <button
            onClick={onLogin}
            className="btn btn-primary text-white btn-lg"
          >
            {login.submit}
          </button>
        </form>

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

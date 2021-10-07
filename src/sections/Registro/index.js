import React, { useState } from 'react'
import Image from '@/components/Image'
import { useRouter } from 'next/dist/client/router'

// Styles
import styles from './registro.module.scss'
import RegistroForm from './RegistroForm'
import LoginForm from './LoginForm'

const Registro = () => {
  const { locale } = useRouter()
  const [isLogin, setIsLogin] = useState(true)

  const toggleLogin = () => setIsLogin((l) => !l)

  const props = {
    onToggleAuth: toggleLogin
  }

  return (
    <div className={styles.registro}>
      <Image
        alt=""
        src={
          locale === 'es-ES'
            ? '/images/hero-registro.png'
            : '/images/hero-registro-en.png'
        }
        className={styles.registro_sideimage}
      />
      <div className={styles.registro_content}>
        {isLogin ? <LoginForm {...props} /> : <RegistroForm {...props} />}
      </div>
    </div>
  )
}

export default Registro

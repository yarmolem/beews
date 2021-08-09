import React from 'react'
import { useRouter } from 'next/dist/client/router'

// style
import styles from './pedir-beews.module.scss'

const PedirBeews = () => {
  const router = useRouter()

  const handleClick = () => router.push('/check-out')

  return (
    <div className={styles.pedirBeews}>
      <h1>
        Ya estamos listos <br /> para el viaje
      </h1>
      <p>
        Solo completa los últimos <br /> 5 pasos y comienza la experiencia
        Beews.
      </p>

      <button
        onClick={handleClick}
        className="btn btn-light text-primary btn-lg"
      >
        comenzar viaje
      </button>
    </div>
  )
}

export default PedirBeews

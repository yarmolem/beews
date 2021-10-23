import React from 'react'
import { useRouter } from 'next/dist/client/router'

// style
import styles from './pedir-beews.module.scss'
import { translate } from '@/i18n/translate'
import { ArrowCircleRight, CloudSmallIcon } from 'src/SVG/icons'

const PedirBeews = () => {
  const router = useRouter()
  const { pedirBeews } = translate[router.locale]

  const handleClick = () => router.push('/check-out')

  return (
    <div className={styles.pedirBeews}>
      <CloudSmallIcon className={styles.cloud_1} />
      <CloudSmallIcon className={styles.cloud_2} />

      <h1>{pedirBeews.title}</h1>
      <p>{pedirBeews.content}</p>

      <button
        onClick={handleClick}
        className="btn btn-light text-primary btn-lg d-flex items-center"
      >
        <span style={{ marginRight: '16px' }}>{pedirBeews.cta}</span>
        <ArrowCircleRight stroke="#BB7CE8" />
      </button>
    </div>
  )
}

export default PedirBeews

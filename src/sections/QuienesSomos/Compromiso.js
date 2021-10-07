import React from 'react'
import { translate } from '@/i18n/translate'
import { useRouter } from 'next/dist/client/router'

// Styles
import styles from './compromiso.module.scss'
import { GlobeHartIcon, GlobeLetterIcon } from 'src/SVG/icons'

const Compromiso = () => {
  const { locale } = useRouter()
  const {
    quienesSomos: { compromiso }
  } = translate[locale]

  return (
    <section className={styles.compromiso}>
      <div className={styles.compromiso_title}>
        <h2>{compromiso.title}</h2>
      </div>
      <div className={styles.compromiso_wrap}>
        <div className={styles.compromiso_content}>
          <img
            alt=""
            src="/images/frame-note.svg"
            className={styles.compromiso_content_frame}
          />
          <p>{compromiso.content}</p>
          <img src="/images/brown_wave.svg" alt="" className={styles.wave1} />
          <img src="/images/brown_wave.svg" alt="" className={styles.wave2} />
          <GlobeHartIcon className={styles.globe1} />
          <GlobeLetterIcon className={styles.globe2} />
        </div>
      </div>
    </section>
  )
}

export default Compromiso

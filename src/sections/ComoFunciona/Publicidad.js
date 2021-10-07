import React from 'react'
import { useRouter } from 'next/dist/client/router'

// Components
import Image from '@/components/Image'
import { translate } from '@/i18n/translate'

// styles
import styles from './publicidad.module.scss'

const Publicidad = () => {
  const { locale } = useRouter()
  const {
    comoFunciona: { publicidad }
  } = translate[locale]

  return (
    <div className={styles.publicidad}>
      <Image
        alt=""
        className={styles.persona_1}
        src="/images/person-yellow1.svg"
      />
      <Image
        alt=""
        className={styles.persona_2}
        src="/images/person-yellow2.svg"
      />
      <div className={styles.publicidad_wrap}>
        <h1>{publicidad.title}</h1>

        <h3>{publicidad.subtitle}</h3>

        <h4>
          <span className={styles.publicidad_icon}>
            <img src="/images/youtube.svg" alt="Logo Youtube" />
          </span>
          <a
            href="https://www.youtube.com/channel/UCY0sfAoKS7xWTfL2-GhEWFA"
            target="_blank"
            rel="noopener noreferrer"
          >
            {publicidad.social}
          </a>
        </h4>
      </div>
    </div>
  )
}

export default Publicidad

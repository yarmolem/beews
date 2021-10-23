import React from 'react'
import { useRouter } from 'next/dist/client/router'

import styles from './hero.module.scss'
import { translate } from '@/i18n/translate'
import { ArrowDownCircleIcon, BigCloudIcon } from 'src/SVG/icons'

const Hero = () => {
  const { locale } = useRouter()
  const {
    comoFunciona: { hero }
  } = translate[locale]

  return (
    <div className={styles.hero}>
      <BigCloudIcon className={styles.cloud_1} />
      <BigCloudIcon className={styles.cloud_2} />
      <div className={styles.hero_wrap}>
        <h1>{hero.title}</h1>
        <h4>{hero.subtitle}</h4>

        <button className="btn btn-primary text-white btn-lg d-flex items-center">
          <span style={{ marginRight: '16px' }}>{hero.cta}</span>
          <ArrowDownCircleIcon />
        </button>
      </div>
    </div>
  )
}

export default Hero

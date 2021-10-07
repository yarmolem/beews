import React from 'react'
import { useRouter } from 'next/dist/client/router'

// styles
import styles from './hero.module.scss'
import { translate } from '@/i18n/translate'

const Hero = () => {
  const { locale } = useRouter()
  const {
    quienesSomos: { hero }
  } = translate[locale]

  return (
    <main className={styles.hero}>
      <div className={styles.hero_wrap}>
        <img
          alt=""
          src="/images/hero_quieneSomos.svg"
          className={styles.hero_image}
        />
        <img alt="" src="/images/cloud.svg" className={styles.hero_cloud1} />
        <img alt="" src="/images/cloud.svg" className={styles.hero_cloud2} />
        <h1>{hero.title}</h1>
        {hero.Paragraph}
      </div>
    </main>
  )
}

export default Hero

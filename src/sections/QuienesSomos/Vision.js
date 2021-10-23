import { translate } from '@/i18n/translate'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

// styles
import styles from './vision.module.scss'

const Vision = () => {
  const { locale } = useRouter()
  const {
    quienesSomos: { cards }
  } = translate[locale]

  return (
    <section className={styles.vision}>
      <div className={styles.vision_container}>
        <article className={styles.vision_item}>
          <img src="/images/vision_1.svg" alt="" />

          {cards.Card1}
        </article>

        <article className={styles.vision_item}>
          <img src="/images/vision_2.svg" alt="" />

          {cards.Card2}
        </article>

        <article className={styles.vision_item}>
          <img src="/images/vision_3.svg" alt="" />

          {cards.Card3}
        </article>
      </div>
    </section>
  )
}

export default Vision

import React from 'react'
import { useRouter } from 'next/dist/client/router'

// terceros
import Slider from 'react-slidy'
import {
  choose,
  enjoy,
  gift,
  plan,
  register,
  travel
} from '@/data/comoFunciona'

// styles
import styles from './compraslider.module.scss'

const CompraSlider = ({ initialSlide = 0 }) => {
  const { locale } = useRouter()

  return (
    <div className={styles.compraslider}>
      <Slider {...{ initialSlide }}>
        <div className={`${styles.compraslider_item} ${styles.primary}`}>
          <img src="/images/waves.svg" alt="" />
          <img src="/images/elige.svg" alt="" />

          <h1 className="display-5">1. {choose.label[locale]}</h1>

          <h2>{choose.title1[locale]}</h2>
          <h4>{choose.content1[locale]}</h4>

          <hr />

          <h2>{choose.title2[locale]}</h2>
          <h4>{choose.content2[locale]}</h4>
        </div>
        <div className={`${styles.compraslider_item} ${styles.danger}`}>
          <img src="/images/waves.svg" alt="" />
          <img src="/images/registrate.svg" alt="" />

          <h1 className="display-5 mb-3">2. {register.label[locale]}</h1>

          <h2 className="h4 mb-5">{register.content1[locale]}</h2>
          <h4>{register.content2[locale]}</h4>
        </div>
        <div className={`${styles.compraslider_item} ${styles.warning}`}>
          <img src="/images/waves.svg" alt="" />
          <img src="/images/regala.svg" alt="" />

          <h1 className="display-5 mb-3">3. {gift.label[locale]}</h1>

          <h2 className="h4 mb-3">{gift.content1[locale]}</h2>

          <h4 className="mb-5">{gift.content2[locale]}</h4>
        </div>
        <div className={`${styles.compraslider_item} ${styles.orange}`}>
          <img src="/images/waves.svg" alt="" />
          <img src="/images/planifica.svg" alt="" />

          <h1 className="display-5 mb-3">4. {plan.label[locale]}</h1>

          <h2 className="h4 mb-3">{plan.content[locale]}</h2>
        </div>
        <div className={`${styles.compraslider_item} ${styles.cyan}`}>
          <img src="/images/waves.svg" alt="" />
          <img src="/images/viaja.svg" alt="" />

          <h1 className="display-5 mb-3">5. {travel.label[locale]}</h1>

          <h2 className="h4 mb-3">{travel.content[locale]}</h2>
        </div>
        <div className={`${styles.compraslider_item} ${styles.brown}`}>
          <img src="/images/waves.svg" alt="" />
          <img src="/images/disfruta.svg" alt="" />

          <h1 className="display-5 mb-3">{enjoy.label[locale]}</h1>

          <h2 className="h4 mb-3">{enjoy.content[locale]}</h2>
        </div>
      </Slider>
    </div>
  )
}

export default CompraSlider

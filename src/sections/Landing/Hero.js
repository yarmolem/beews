import React from 'react'
import { useRouter } from 'next/dist/client/router'

//  Terceros
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// components
import { IconButton } from '@/components/Buttons'

// utils
import { translate } from '@/i18n/translate'

// styles
import styles from './hero.module.scss'
import { PlayIcon, PlayMediumIcon } from 'src/SVG/icons'
import Modal from '@/components/Modal'
import useDisclosure from '@/hooks/useDisclosure'

SwiperCore.use([Pagination])

const Hero = () => {
  const { locale } = useRouter()
  const { isOpen, onToggle } = useDisclosure()

  const {
    index: { hero }
  } = translate[locale]

  return (
    <main id="landing_slider" className={styles.hero}>
      <Modal {...{ isOpen, onToggle }}>
        <div className={styles.modal}>
          <iframe
            title="¿Como Funciona Beews?"
            src="https://www.youtube.com/embed/oY6OAagLeuA?autoplay=1&mute=0&loop=1"
          />
          <button onClick={onToggle}>{'X'}</button>
        </div>
      </Modal>
      <Swiper pagination={{ clickable: true }}>
        <SwiperSlide>
          <div className={styles.hero_item}>
            <div className={styles.hero_itemWrap}>
              <h1>{hero.title}</h1>
              <h3 className="my-4 fw-bold d-none d-sm-block">
                {hero.subtitle}
              </h3>

              <IconButton color="light" textColor="dark">
                {hero.cta}
              </IconButton>
            </div>

            <img
              alt=""
              src="/images/hero1.png"
              className={styles.hero_itemImg1}
            />
            <img
              alt=""
              src={
                locale === 'es-ES'
                  ? '/images/hero2.png'
                  : '/images/hero2-en.png'
              }
              className={styles.hero_itemImg2}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.hero_item2}>
            <h1>{hero.title2}</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.hero_item3}>
            <div className={styles.hero_item3_content}>
              <h1>{hero.title3}</h1>
              <button>{hero.cta3}</button>
            </div>
            <div className={styles.hero_item3_overlay} />
            <img src="/images/banner-home-2.png" alt="" />
            <button onClick={onToggle} className={styles.hero_item3_play1}>
              <PlayIcon />
            </button>
            <button onClick={onToggle} className={styles.hero_item3_play2}>
              <PlayMediumIcon />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  )
}

export default Hero

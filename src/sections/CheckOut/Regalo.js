import React, { useState } from 'react'

// terceros
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// components
import Dropdown from '@/components/Dropdown'
import RegaloItem from '@/components/RegaloItem'
import RegaloModal from '@/components/RegaloModal'
import { GiftBox, SpeakerIcon } from '@/components/SVGS'

// utils
import { translate } from '@/i18n/translate'
import { colaboradores } from '@/data/regalos'
import useDisclosure from '@/hooks/useDisclosure'

// Styles
import styles from './regalo.module.scss'

SwiperCore.use([Navigation])

const Regalo = ({ next, prev, locale }) => {
  const [regalos, setRegalos] = useState([])
  const { isOpen, onToggle } = useDisclosure()

  const handleRegalos = (info) => {
    onToggle()
    setRegalos(info)
  }

  const {
    checkout: { gift }
  } = translate[locale]

  return (
    <div className={styles.regalo}>
      <RegaloModal {...{ isOpen, onToggle, regalos }} />
      <div className={styles.regalo_num}>
        <h1>3</h1>
      </div>
      <h2>{gift.title}</h2>
      <h3 className="mb-4">{gift.subtitle}</h3>

      <div id="regalo_slider" className={styles.regalo_swiper}>
        <Swiper spaceBetween={20} navigation>
          {colaboradores.map((colaborador, i) => (
            <SwiperSlide key={`colaborador-${i}`}>
              <RegaloItem
                {...{ onToggle, handleRegalos }}
                {...colaborador[locale]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Dropdown icon={GiftBox} label={gift.accordion1.label}>
        <h4 className="text-danger">{gift.accordion1.title}</h4>
        <p>{gift.accordion1.content}</p>
      </Dropdown>

      <Dropdown icon={SpeakerIcon} label={gift.accordion2.label}>
        <p>{gift.accordion2.paragraph1}</p>
        <p>{gift.accordion2.paragraph2}</p>
        <small>{gift.accordion2.paragraph3}</small>
      </Dropdown>

      <button
        onClick={next}
        className={`btn btn-danger text-white btn-lg mx-1 ${styles.regalo_button}`}
      >
        {gift.submit}
      </button>
    </div>
  )
}

export default Regalo

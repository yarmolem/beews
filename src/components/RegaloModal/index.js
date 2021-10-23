import React from 'react'
import { useRouter } from 'next/dist/client/router'

// terceros
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// components
import Slide from './Slide'
import Modal from '../Modal'

// utils
import useToast from '@/hooks/useToast'
// import { regalos } from '@/data/regalos'
import useCheckout from '@/hooks/useCheckout'

// styles
import styles from './regalomodal.module.scss'

SwiperCore.use([Navigation])

const RegaloModal = ({ isOpen = false, regalos = [], onToggle = () => {} }) => {
  const { toast } = useToast()
  const { locale } = useRouter()
  const { loadCarItem } = useCheckout()

  const handleLoadItem = (payload) => {
    loadCarItem(payload)
    toast({
      title: 'Éxito',
      msg: `${payload.title} agregado al carrito.`,
      hideProgressBar: true
    })
  }

  const propsSlides = {
    onToggle,
    onSelect: (item) => handleLoadItem(item)
  }

  return (
    <Modal {...{ isOpen, onToggle }}>
      <div id="regalo_modal" className={styles.modal}>
        <Swiper spaceBetween={50} navigation>
          {regalos.map((regalo) => {
            const item = regalo[locale]
            return (
              <SwiperSlide key={`regalo-${item.cod}`}>
                <Slide {...propsSlides} gift={item} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </Modal>
  )
}

export default RegaloModal

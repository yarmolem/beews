import React, { useState } from 'react'

// Components
import Modal from '@/components/Modal'
import CaminoCard from '@/components/CaminoCard'
import CompraSlider from '@/components/CompraSlider'

// Data
import {
  ELIGE,
  VIAJA,
  REGALA,
  DISFRUTA,
  PLANIFICA,
  REGISTRATE
} from '@/data/caminoCompra'

// hooks
import useDisclosure from '../../hooks/useDisclosure'

// Styles
import styles from './camino_compra.module.scss'

const CaminoCompra = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [initialSlide, setInitialSlide] = useState(0)

  const handleSlide = (pos) => {
    onToggle()
    setInitialSlide(pos)
  }

  return (
    <>
      <Modal {...{ isOpen, onToggle }}>
        <CompraSlider {...{ onToggle, initialSlide }} />
      </Modal>
      <div className={styles.camino}>
        <CaminoCard {...{ onClick: () => handleSlide(0) }} {...ELIGE} />
        <CaminoCard {...{ onClick: () => handleSlide(1) }} {...REGALA} />
        <CaminoCard {...{ onClick: () => handleSlide(2) }} {...REGISTRATE} />
        <CaminoCard {...{ onClick: () => handleSlide(3) }} {...PLANIFICA} />
        <CaminoCard {...{ onClick: () => handleSlide(4) }} {...VIAJA} />
        <CaminoCard {...{ onClick: () => handleSlide(5) }} {...DISFRUTA} />
      </div>
    </>
  )
}

export default CaminoCompra

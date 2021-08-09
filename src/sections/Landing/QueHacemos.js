import React, { useState } from 'react'

// components
import Card from '@/components/Card'
import Image from '@/components/Image'
import Modal from '@/components/Modal'
import CardSlider from '@/components/CardSlider'

// hooks
import useDisclosure from 'src/hooks/useDisclosure'

// Icons
import { PlusCircleIcon } from '@/components/SVGS'

// styles
import styles from './queHacemos.module.scss'

const QueHacemos = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [initialSlide, setInitialSlide] = useState(0)

  return (
    <>
      <Modal {...{ isOpen, onToggle }}>
        <CardSlider {...{ onToggle, initialSlide }} />
      </Modal>
      <section className={styles.queHacemos}>
        <h2>¿Qué hacemos en Beews?</h2>
        <h3>Déscubrelo en estos 4 pasos</h3>

        <Image
          alt=""
          src="/images/cloud.svg"
          className={`${styles.queHacemos_clouds} ${styles.queHacemos_clouds_1}`}
        />
        <Image
          alt=""
          src="/images/cloud.svg"
          className={`${styles.queHacemos_clouds} ${styles.queHacemos_clouds_2}`}
        />

        <div className={styles.queHacemos_grid}>
          <Card color="primary">
            <div className={styles.queHacemos_card}>
              <Image alt="" src="/images/beews-calendar.svg" />
              <h4>Planeamos</h4>
              <button
                onClick={() => {
                  onToggle()
                  setInitialSlide(0)
                }}
                className="btn"
              >
                <PlusCircleIcon />
              </button>
            </div>
          </Card>
          <Card color="warning">
            <div className={styles.queHacemos_card}>
              <Image alt="" src="/images/beews-letter.svg" />
              <h4>Entregamos</h4>
              <button
                onClick={() => {
                  onToggle()
                  setInitialSlide(1)
                }}
                className="btn"
              >
                <PlusCircleIcon />
              </button>
            </div>
          </Card>
          <Card color="danger">
            <div className={styles.queHacemos_card}>
              <Image alt="" src="/images/beews-hart.svg" />
              <h4>Conectamos</h4>
              <button
                onClick={() => {
                  onToggle()
                  setInitialSlide(2)
                }}
                className="btn"
              >
                <PlusCircleIcon />
              </button>
            </div>
          </Card>
          <Card color="info">
            <div className={styles.queHacemos_card}>
              <Image alt="" src="/images/beews-camera.svg" />
              <h4>Grabamos</h4>
              <button
                onClick={() => {
                  onToggle()
                  setInitialSlide(3)
                }}
                className="btn"
              >
                <PlusCircleIcon />
              </button>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

export default QueHacemos

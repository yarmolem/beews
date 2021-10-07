import React, { useState } from 'react'

// styles
import styles from './commonSection.module.scss'
import { ArrowRightIcon } from '@/components/SVGS'
import { useRouter } from 'next/dist/client/router'
import { PlayMediumIcon, PlaySmallIcon } from 'src/SVG/icons'
import VideoSlider from '@/components/VideoSlider'
import useDisclosure from '@/hooks/useDisclosure'
import Modal from '@/components/Modal'

const CommonSection = ({
  image,
  title,
  content,
  withVideo,
  buttonColor,
  buttonContent,
  theme
}) => {
  const { locale } = useRouter()
  const { isOpen, onToggle } = useDisclosure()
  const [initialSlide, setInitialSlide] = useState(0)

  const handleSlide = (pos = 0) => {
    setInitialSlide(pos)
    onToggle()
  }

  return (
    <section className={styles[theme]}>
      <Modal {...{ isOpen, onToggle }}>
        <VideoSlider {...{ initialSlide, onToggle }} />
      </Modal>
      <div className={styles.commonSection}>
        <div className={styles.commonSection_content}>
          {/* eslint-disable*/}
          {theme === 'dark' ? (
            <h3>{title[locale]}</h3>
          ) : (
            <h2>{title[locale]}</h2>
          )}
          <p>{content[locale]}</p>

          <button
            className={`btn btn-lg ${styles.commonSection_btn} ${styles[buttonColor]}`}
          >
            <span>{buttonContent[locale]}</span>
            <ArrowRightIcon />
          </button>
        </div>

        <div className={styles.commonSection_wrap}>
          <div className={styles.commonSection_img}>
            <img src={image} alt="" />
            {withVideo ? (
              <button onClick={() => handleSlide(0)}>
                <PlayMediumIcon />
              </button>
            ) : null}
          </div>
          {/* eslint-disable */}
          {withVideo ? (
            <div className={styles.commonSection_examples}>
              <div>
                <img src="/images/miniatura-1.png" alt="" />
                <button onClick={() => handleSlide(1)}>
                  <PlaySmallIcon />
                </button>
              </div>
              <div>
                <img src="/images/miniatura-2.png" alt="" />
                <button onClick={() => handleSlide(2)}>
                  <PlaySmallIcon />
                </button>
              </div>
              <div>
                <img src="/images/miniatura-3.png" alt="" />
                <button onClick={() => handleSlide(3)}>
                  <PlaySmallIcon />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default CommonSection

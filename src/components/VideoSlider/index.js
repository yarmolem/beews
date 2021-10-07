import React, { useEffect, useState } from 'react'

// terceros
import Slider from 'react-slidy'

// styles
import styles from './videoslider.module.scss'

const videos = ['oY6OAagLeuA', 'p02WMan_gdM', 'xRYmCdhkfZc', 'NQPHrPcnp1g']

const VideoSlider = ({ onToggle = () => {}, initialSlide = 0 }) => {
  const [actualSlide, setActualSlide] = useState(0)

  useEffect(() => {
    updateSlide({ currentSlide: initialSlide })
    setActualSlide(initialSlide)
  }, [initialSlide])

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  const renderVideo = (embed = videos[0]) => {
    return (
      <div>
        <iframe
          allowFullScreen
          title="¿Como Funciona Beews?"
          src={`https://www.youtube.com/embed/${embed}?autoplay=1`}
        />
        <button onClick={onToggle}>
          <h4>{'X'}</h4>
        </button>
      </div>
    )
  }

  return (
    <div id="video_slider" className={styles.videoslider}>
      <Slider
        slide={actualSlide}
        lazyLoadSlider={false}
        doAfterSlide={updateSlide}
      >
        <div className={styles.modal}>
          {actualSlide === 0 ? renderVideo(videos[0]) : null}
        </div>
        <div className={styles.modal}>
          {actualSlide === 1 ? renderVideo(videos[1]) : null}
        </div>
        <div className={styles.modal}>
          {actualSlide === 2 ? renderVideo(videos[2]) : null}
        </div>
        <div className={styles.modal}>
          {actualSlide === 3 ? renderVideo(videos[3]) : null}
        </div>
      </Slider>
    </div>
  )
}

export default VideoSlider

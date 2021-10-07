import React from 'react'

import styles from './regaloitem.module.scss'

const sellos = ['/images/sello-orange.svg', '/images/sello-purple.svg']

const RegaloItem = ({
  cta,
  sello,
  title,
  content,
  subtitle,
  images = [],
  regalos = [],
  onToggle = () => {},
  handleRegalos = () => {}
}) => {
  const renderSello = (sello = 0) => {
    return (
      <img alt="" src={sellos[sello]} className={styles.slider_gridSello} />
    )
  }

  return (
    <>
      <div className={styles.slider}>
        <div className={styles.slider_grid}>
          {images.map((src, i) => (
            <img
              alt=""
              src={src}
              key={`regalo-img-${src}-${i}`}
              className={styles.slider_gridImg}
            />
          ))}
          {sello === 1 ? renderSello(0) : renderSello(1)}
        </div>
        <div className={styles.slider_content}>
          <h3 className={styles.slider_content_title}>{title}</h3>
          <h4>{subtitle}</h4>
          <h5>{content}</h5>
          <button
            onClick={() => handleRegalos(regalos)}
            className="btn btn-primary text-white btn-lg"
          >
            {cta}
          </button>
        </div>
      </div>
    </>
  )
}

export default RegaloItem

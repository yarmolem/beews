import React from 'react'
import styles from './loader.module.scss'

const Loader = ({ size = 'md' }) => {
  const sizeStyle = () => {
    if (size === 'sm') {
      return styles.sm
    }
    if (size === 'md') {
      return styles.md
    }
    if (size === 'lg') {
      return styles.lg
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.loader} ${sizeStyle()}`}></div>
    </div>
  )
}

export default Loader

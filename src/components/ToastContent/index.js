import React from 'react'

import styles from './toast.module.scss'

const ToastContent = ({ msg = '', title = '' }) => {
  return (
    <div className={styles.toast}>
      <h4>{title}</h4>
      <p>{msg}</p>
    </div>
  )
}

export default ToastContent

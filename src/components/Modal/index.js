import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

import styles from './modal.module.scss'

/* eslint-disable*/

const Modal = ({ isOpen = false, onToggle, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {isOpen
        ? createPortal(
            <div className={styles.modal}>
              <div onClick={onToggle} className={styles.modal_overlay} />
              <div className={styles.modal_content}>{children}</div>
            </div>,
            document.body
          )
        : null}
    </>
  )
}

export default Modal

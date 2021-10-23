import React, { useState } from 'react'
import { ChevronCircleDown } from '../SVGS'

import styles from './dropdown.module.scss'

const Dropdown = ({ icon: Icon, label, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => setIsOpen(v => !v)

  const handleContentOpen = () => {
    const open = styles.open
    const close = styles.close
    const basic = styles.dropdown_content
    return isOpen ? `${basic} ${open}` : `${basic} ${close}`
  }

  const handleChevronOpen = () => {
    const open = styles.chevron_open
    const basic = styles.dropdown_chevron
    return isOpen ? `${basic} ${open}` : basic
  }

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_label}>
        <span className={styles.dropdown_icon}>
          <Icon />
        </span>
        <h4>{label}</h4>
        <button onClick={onToggle} className={handleChevronOpen()}>
          <ChevronCircleDown />
        </button>
      </div>
      <div className={handleContentOpen()}>
        <div className={styles.dropdown_wrap}>{children}</div>
      </div>
    </div>
  )
}

export default Dropdown

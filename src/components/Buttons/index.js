import React from 'react'

// Icons
import { ArrowDownIcon } from '../SVGS'

// Styles
import * as styles from './button.module.scss'

export const IconButton = ({ color, textColor, children }) => {
  return (
    <button
      className={`btn btn-${color} btn-lg text-${textColor} ${styles.iconButton}`}
    >
      <span>{children}</span>
      <ArrowDownIcon />
    </button>
  )
}

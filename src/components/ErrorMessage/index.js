import React from 'react'

import styles from './index.module.scss'

const ErrorMessage = ({ errors, touched, name = '' }) => {
  return (
    <>
      {/* eslint-disable */}
      {errors[name] && touched[name] ? (
        <span className={styles.error}>{errors[name]}</span>
      ) : null}
      {/* eslint-enable */}
    </>
  )
}

export default ErrorMessage

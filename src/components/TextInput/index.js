import React from 'react'

import styles from './textinput.module.scss'

const TextInput = ({
  id,
  type,
  isInvalid,
  name = '',
  value = '',
  placeholder,
  autoComplete,
  classInput = '',
  classContainer = '',
  onBlur = () => {},
  onChange = () => {},
  ...props
}) => {
  return (
    <div className={`form-floating ${classContainer}`}>
      <input
        {...props}
        id={id}
        type={type}
        placeholder=" "
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        autoComplete={autoComplete}
        className={`form-control ${
          isInvalid ? styles.error : ''
        } ${classInput}`}
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  )
}

export default TextInput

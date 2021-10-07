import React from 'react'

const TextInput = ({
  id,
  type,
  placeholder,
  autoComplete,
  classInput = '',
  classContainer = ''
}) => {
  return (
    <div className={`form-floating ${classContainer}`}>
      <input
        id={id}
        type={type}
        placeholder=" "
        autoComplete={autoComplete}
        className={`form-control ${classInput}`}
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  )
}

export default TextInput

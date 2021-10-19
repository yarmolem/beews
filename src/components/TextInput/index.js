import React from 'react'

const TextInput = ({
  id,
  type,
  placeholder,
  autoComplete,
  classInput = '',
  classContainer = '',
  name = '',
  onBlur = '',
  value = '',
  onChange = '',
  props
}) => {
  return (
    <div className={`form-floating ${classContainer}`}>
      <input
        id={id}
        type={type}
        placeholder=" "
        autoComplete={autoComplete}
        className={`form-control ${classInput}`}
        name={name}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  )
}

export default TextInput

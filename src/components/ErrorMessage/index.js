import React from 'react'

const ErrorMessage = ({ errors, touched, name = '' }) => {
  return (
    <>
      {/* eslint-disable */}
      {errors[name] && touched[name] ? (
        <span className="text-xs w-full text-red-600 text-left alert alert-danger">
          {errors[name]}
        </span>
      ) : null}
      {/* eslint-enable */}
    </>
  )
}

export default ErrorMessage

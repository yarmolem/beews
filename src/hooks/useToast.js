import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import useCheckout from './useCheckout'
import ToastContent from '@/components/ToastContent'

const useToast = () => {
  const renderToast = ({
    type = 'success',
    msg = 'Mensaje',
    title = 'Titulo',
    ...props
  }) => {
    toast[type](<ToastContent msg={msg} title={title} />, {
      ...props,
      hideProgress: true
    })
  }

  // toast('', {
  //   hideProgressBar
  // })

  return { toast: (options) => renderToast(options) }
}

export default useToast

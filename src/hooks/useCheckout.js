import { useContext } from 'react'
import { CheckoutContext } from '@/context/checkout/CheckoutState'

const useCheckout = () => useContext(CheckoutContext)

export default useCheckout

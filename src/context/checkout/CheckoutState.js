import React, { createContext, useEffect, useReducer } from 'react'
import CheckoutReducer from './CheckoutReducer'
import { checkoutActions } from './checkoutActions'
import { checkoutTypes as types } from './types'

export const initialState = {
  car: [],
  total: 0,
  plan: {
    id: '',
    title: '',
    price: ''
  },
  personalData: {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    country: '',
    city: ''
  },
  destinationData: {
    name: '',
    lastname: '',
    country: '',
    city: '',
    district: '',
    address: '',
    reference: '',
    relationship: '',
    deliveryDate: '',
    deliveryTime: ''
  }
}

export const CheckoutContext = createContext()

const CheckoutState = ({ children }) => {
  const [state, dispatch] = useReducer(CheckoutReducer, initialState)

  useEffect(() => {
    dispatch({ type: types.SET_TOTAL })
    const ShoppingCar = JSON.stringify(state.car)
    localStorage.setItem('ShoppingCar', ShoppingCar)
  }, [state.car, state.plan])

  const props = { ...state, ...checkoutActions(state, dispatch) }

  return (
    <CheckoutContext.Provider value={props}>
      {children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutState

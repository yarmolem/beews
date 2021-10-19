import React, { createContext, useEffect, useReducer } from 'react'
import AuthReducer from './AuthReducer'
import { authActions } from './AuthActions'
import { authTypes as types } from './types'

export const initialState = {
  user: {
    userId: '',
    tipoUsuario: '',
    nombre: '',
    apellidos: '',
    email: '',
    celular: '',
    pais: '',
    ciudad: '',
    apiToken: ''
  },
  isLoading: false,
  isAuth: false
}

export const AuthContext = createContext()

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  useEffect(() => {
    const valueInStorage = localStorage.getItem('state')
    if (valueInStorage) {
      dispatch({
        type: types.SET_STATE_FROM_STORAGE,
        payload: JSON.parse(valueInStorage)
      })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
    localStorage.setItem('token', JSON.stringify(state.user.apiToken))
  }, [state])

  const props = {
    ...state,
    ...authActions(state, dispatch)
  }

  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
}

export default AuthState

import React, { createContext, useEffect, useReducer } from 'react'
import AuthReducer from './AuthReducer'
import { authActions } from './AuthActions'

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
  const [state, dispatch] = useReducer(AuthReducer, initialState, () => {
    const valueInStorage = localStorage.getItem('state')
    if (valueInStorage) {
      return JSON.parse(valueInStorage)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  const props = {
    ...state,
    ...authActions(state, dispatch)
  }

  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
}

export default AuthState

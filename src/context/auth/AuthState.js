import React, { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer'
import { authActions } from './AuthActions'

export const initialState = {
  user: {},
  isLoading: false
}

export const AuthContext = createContext()

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const props = {
    ...state,
    ...authActions(state, dispatch)
  }

  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
}

export default AuthState

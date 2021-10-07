import { initialState } from './AuthState'
import { authTypes as types } from './types'

const AuthReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        user: { ...payload }
      }

    case types.LOGOUT:
      return { ...initialState }

    default:
      return state
  }
}

export default AuthReducer

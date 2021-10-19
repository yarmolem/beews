import { authTypes as types } from './types'

export const authActions = (state, dispatch) => ({
  login: (payload) => {
    console.log('payload ', payload)
    localStorage.setItem('state', JSON.stringify(payload))
    localStorage.setItem('token', payload.apiToken)
    dispatch({ type: types.LOGIN, payload })
  },
  logout: () => {
    dispatch({ type: types.LOGOUT })
  },
  getUser: () => state.user
})

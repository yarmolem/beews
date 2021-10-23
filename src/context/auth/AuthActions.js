import { authTypes as types } from './types'

export const authActions = (state, dispatch) => ({
  login: (payload) => {
    localStorage.setItem(
      'state',
      JSON.stringify({ state, user: payload, isAuth: true })
    )
    localStorage.setItem('token', payload.apiToken)
    dispatch({ type: types.LOGIN, payload })
  },
  logout: () => {
    localStorage.removeItem('state')
    localStorage.removeItem('token')
    dispatch({ type: types.LOGOUT })
  },
  getUser: () => state.user,

  updateUserAction: (objUser) => {
    localStorage.setItem(
      'state',
      JSON.stringify({ ...state, user: { ...objUser } })
    )
    dispatch({ type: types.UPDATE_USER, payload: objUser })
  }
})

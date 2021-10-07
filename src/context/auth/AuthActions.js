import { authTypes as types } from './types'

export const authActions = (state, dispatch) => ({
  login: (payload) => {
    dispatch({ type: types.LOGIN, payload })
  },
  logout: () => {
    dispatch({ type: types.LOGOUT })
  },
  getUser: () => state.user
})

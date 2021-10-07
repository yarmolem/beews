import { checkoutTypes as types } from './types'

export const checkoutActions = (state, dispatch) => ({
  resetState: () => {
    dispatch({ type: types.RESET_STATE })
  },
  loadPlan: (payload) => {
    dispatch({ type: types.LOAD_PLAN, payload })
  },
  deletePlan: () => {
    dispatch({ type: types.DELETE_PLAN })
  },
  loadCarItem: (payload) => {
    dispatch({ type: types.LOAD_CAR_ITEM, payload })
  },
  updateCarItem: (payload) => {
    dispatch({ type: types.UPDATE_CAR_ITEM, payload })
  },
  deleteCarItem: (payload) => {
    dispatch({ type: types.DELETE_CAR_ITEM, payload })
  },
  loadPersonalData: (payload) => {
    dispatch({ type: types.LOAD_PERSONAL_DATA, payload })
  },
  loadDestinationData: (payload) => {
    dispatch({ type: types.LOAD_DESTINATION_DATA, payload })
  },
  getPersonalData: () => state.personalData
})

import { checkoutTypes as types } from './types'
import { initialState } from './CheckoutState'

const CheckoutReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case types.LOAD_CAR_ITEM:
      return {
        ...state,
        car: [...state.car, payload]
      }

    case types.DELETE_CAR_ITEM: {
      return {
        ...state,
        car: state.car.filter((item) => item.cod !== payload)
      }
    }

    case types.UPDATE_CAR_ITEM: {
      return {
        ...state,
        car: state.car.map((item) => {
          const itemMod = { ...payload }
          return item.cod === payload.cod ? itemMod : item
        })
      }
    }

    case types.SET_TOTAL: {
      const carTotal = state.car.reduce((acc, { price, count }) => {
        return acc + price * count
      }, 0)
      return {
        ...state,
        total: carTotal + state.plan.price
      }
    }

    case types.LOAD_PLAN:
      return {
        ...state,
        plan: payload
      }

    case types.DELETE_PLAN: {
      return {
        ...state,
        plan: initialState.plan
      }
    }

    case types.LOAD_PERSONAL_DATA:
      return {
        ...state,
        personalData: payload
      }

    case types.LOAD_DESTINATION_DATA:
      return {
        ...state,
        destinationData: payload
      }

    case types.RESET_STATE:
      return { ...initialState }

    default:
      return state
  }
}

export default CheckoutReducer

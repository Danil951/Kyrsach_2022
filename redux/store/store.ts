import { createStore } from 'redux'
import { TypeState } from '../../types/globals'

const initialStateBeers: TypeState = {
  beers: [],
  beersAll: [],
}

const reduser = function (state: TypeState = initialStateBeers, action: any) {
  switch (action.type) {
    case 'ACTION_SET_BUY_BEER': {
      return { ...state, beers: action.payload, beersAll: Object.assign([], action.payload) }
    }
    default:
      return state
  }
}

const store = createStore(reduser)

export default store

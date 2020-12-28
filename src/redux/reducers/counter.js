import * as types from '../actions/types'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case types.INCREMENT:
      console.log(action)
      return state + 1

    case types.INCREMENT2:
      console.log(action)
      return state + action.inc

    case types.DECREMENT:
      return state - 1

    case types.DECREMENT2:
      console.log(action)
      return state - action.dec

    default:
      return state
  }
}

export default counterReducer

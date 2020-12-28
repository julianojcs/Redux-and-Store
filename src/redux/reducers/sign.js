import * as types from '../actions/types'

const signReducer = (state = false, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return true
    case types.SIGN_OUT:
      return false
    default:
      return state
  }
}

export default signReducer

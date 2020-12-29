import * as types from '../actions/types'

const signReducer = (state = { logged: false, count: 0 }, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      const count = state.count + 1
      return { logged: true, count }

    case types.SIGN_OUT:
      return {  ...state, logged: false  }

    default:
      return state
  }
}

export default signReducer

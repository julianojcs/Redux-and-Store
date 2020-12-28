import * as types from './types'

const increment = {
  type: types.INCREMENT,
  payload: 'whatever'
}

const decrement = {
  type: types.DECREMENT
}

const increment2 = (inc) => {
  return {
    type: types.INCREMENT2,
    inc
  }
}

const decrement2 = (dec) => {
  return {
    type: types.DECREMENT2,
    dec: dec
  }
}

const signIn = {
  type: types.SIGN_IN
}

const signOut = {
  type: types.SIGN_OUT
}

export { increment, increment2, decrement, decrement2, signIn, signOut }

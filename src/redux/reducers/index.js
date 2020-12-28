import counterReducer from './counter'
import signReducer from './sign'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  sign: signReducer
})

export default allReducers

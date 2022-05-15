import { combineReducers } from 'redux'
import walletReducer from './walletReducer'
import balanceReducer from './balanceReducer'

const reducers = combineReducers({
  wallet: walletReducer,
  balance: balanceReducer
})

export default reducers

export type State = ReturnType<typeof reducers>
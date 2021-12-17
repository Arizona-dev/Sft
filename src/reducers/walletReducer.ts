import { walletSlice } from '../actions/walletSlice';

export interface WalletState {
  pubKey: string;
}

const initialState = {
  pubKey: '',
}

export const walletReducer = (state:WalletState = initialState, action:walletSlice) => {
  switch (action.type) {
    case "CONNECT": {
      return {...state, pubKey: action.payload};
    }
    default:
      return state;
  }
}
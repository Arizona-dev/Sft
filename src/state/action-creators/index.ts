import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions/index"

export const setWalletAddress = (address: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_WALLET_ADDRESS,
      payload: address
    })
  }
}

export const setWalletBalance = (balance: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_WALLET_BALANCE,
      payload: balance
    })
  }
}
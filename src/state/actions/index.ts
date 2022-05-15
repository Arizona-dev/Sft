import { ActionType } from '../action-types/index'

interface SetWalletAddress {
  type: ActionType.SET_WALLET_ADDRESS,
  payload: string
}

interface SetWalletBalance {
  type: ActionType.SET_WALLET_BALANCE,
  payload: number
}

export type Action = SetWalletAddress | SetWalletBalance
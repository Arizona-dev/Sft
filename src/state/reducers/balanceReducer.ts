import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState = 0;


const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_WALLET_BALANCE: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default reducer;
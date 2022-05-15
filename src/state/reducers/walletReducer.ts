import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState = '';


const reducer = (state: string = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_WALLET_ADDRESS: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default reducer;
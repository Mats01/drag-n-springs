import { CounterState } from "../../types";
import { Action, ActionTypes } from "../actionTypes";



const counterReducer = (state: CounterState, action: Action): CounterState => {
  switch (action.type) {


    case ActionTypes.SetCount:
      return {
        ...state,
        count: action.payload
      }

    case ActionTypes.Add:
      return {
        ...state,
        count: state.count + 1
      }

    default:
      return state;
  }
}


export default counterReducer;
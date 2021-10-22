import React from "react";
import { initialState } from "../constants";
import { GlobalState } from "../types";
import { Action } from "./actionTypes";


export const AppContext = React.createContext<{
  rootState: GlobalState;
  globalDispatch: React.Dispatch<Action>;
}>({
  rootState: initialState,
  globalDispatch: () => null
});
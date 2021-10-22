export enum ActionTypes {
  Add,
  SetCount,
}

export interface Add {
  type: ActionTypes.Add;
}

export interface SetCount {
  type: ActionTypes.SetCount;
  payload: number;
}


export type Action =
  Add
  | SetCount;
import React, { FC, useContext } from 'react'
import { ActionTypes } from '../../context/actionTypes';
import { AppContext } from '../../context/AppContext';


const Screen: FC<{}> = () => {

  const { rootState, globalDispatch } = useContext(AppContext);
  const { count } = rootState.counterState;
  return (
    <div className="App">
      <h1>📺 Screen</h1>
      <div
      >
        Count: {count}
      </div>

      <button
        onClick={() => globalDispatch({ type: ActionTypes.Add })}
      >Add</button>
    </div>
  )
}
export default Screen;
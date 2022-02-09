import React, { useReducer } from 'react';
import './App.css';
import { GlobalState } from './types';
import { Action } from './context/actionTypes';
import counterReducer from './context/reducers/CounterReducer';
import { initialState } from './constants';
import { AppContext } from './context/AppContext';
import AppRouter from './router/Router';

const rootReducer = ({ counterState }: GlobalState, action: Action): GlobalState => ({
  counterState: counterReducer(counterState, action),
})

function App() {

  const [rootState, globalDispatch] = useReducer(rootReducer, initialState);




  return (
    <AppContext.Provider value={{ rootState, globalDispatch }}>
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;

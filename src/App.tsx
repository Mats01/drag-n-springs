import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Screen from './comonents/screen/Screen';
import Home from './comonents/home/Home';
import Route404 from './comonents/Route404';
import { styles } from './Style';
import { GlobalState } from './types';
import { Action } from './context/actionTypes';
import counterReducer from './context/reducers/CounterReducer';
import { initialState } from './constants';
import { AppContext } from './context/AppContext';

const rootReducer = ({ counterState }: GlobalState, action: Action): GlobalState => ({
  counterState: counterReducer(counterState, action),
})

function App() {

  const [rootState, globalDispatch] = useReducer(rootReducer, initialState);




  return (
    <AppContext.Provider value={{ rootState, globalDispatch }}>
      <Router>
        <div>
          <nav>
            <div
              style={styles.nav}
            >
              <NavLink
                style={styles.navLink}
                activeStyle={styles.activeNavLink}
                to="/">Home</NavLink>
              <NavLink
                activeStyle={styles.activeNavLink}
                style={styles.navLink}
                to="/Screen">Screen</NavLink>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/screen">
              <Screen />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="*">
              <Route404 />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

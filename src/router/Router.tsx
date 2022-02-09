import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import '../App.css';
import Screen from '../comonents/screen/Screen';
import Home from '../comonents/home/Home';
import Route404 from '../comonents/Route404';
import { styles } from '../Style';



export default function AppRouter() {

  return (
    <Router>
      <div>
        <nav>
          <div
            style={styles.nav}
          >
            <NavLink
              style={({ isActive }) => (!isActive ? styles.navLink : { ...styles.navLink, ...styles.activeNavLink })}
              to="/">Home</NavLink>
            <NavLink
              style={({ isActive }) => (!isActive ? styles.navLink : { ...styles.navLink, ...styles.activeNavLink })}
              to="/screen">Screen</NavLink>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/screen" element={<Screen />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Route404 />} />
        </Routes>
      </div >
    </Router >
  );
}

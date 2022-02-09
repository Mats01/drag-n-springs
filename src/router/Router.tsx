import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import '../App.css';
import Home from '../comonents/home/Home';
import Route404 from '../comonents/Route404';
import { styles } from '../Style';
import Drag from '../comonents/DragTests';
import Springs from '../comonents/AnimationTests';



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
              to="/drag">Drag</NavLink>
            <NavLink
              style={({ isActive }) => (!isActive ? styles.navLink : { ...styles.navLink, ...styles.activeNavLink })}
              to="/springs">Springs</NavLink>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/drag" element={<Drag />} />
          <Route path="/springs" element={<Springs />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Route404 />} />
        </Routes>
      </div >
    </Router >
  );
}

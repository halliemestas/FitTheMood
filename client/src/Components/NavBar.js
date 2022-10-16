/** @format */

import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { bubble as Menu } from "react-burger-menu";
import React from "react";

export default (props) => {
  return (
    <nav>
      <h1 className="headerFont">Fit The Mood</h1>
      <Menu {...props} right>
        <ul>
          <li>
            <NavLink exact="true" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/workout">Workouts</NavLink>
          </li>
          <li>
            <NavLink to="/mood">Mood</NavLink>
          </li>
          <li>
            <NavLink to="/">Log Out</NavLink>
          </li>
        </ul>
      </Menu>
    </nav>
  );
};

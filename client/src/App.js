/** @format */

import React, { Component } from "react";
import Login from "./Components/pages/Login";
import Mood from "./Components/pages/Mood";
import NavBar from "./Components/NavBar";
import Home from "./Components/pages/Home";
import SignupForm from "./Components/pages/Signup";
import Workout from "./Components/pages/Workout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";


class App extends Component {
  render() {
    return (
      <Router>
        <NavBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <Routes>
          {/* <Route exact path="/" element={<Login />}></Route> */}
          <Route exact path="/" element={[<SignupForm />, <Login />]}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/mood" element={<Mood />}></Route>
          <Route exact path="/workout" element={<Workout />}></Route>
        </Routes>
        <Footer/>
      </Router>
    );
  }
}

export default App;

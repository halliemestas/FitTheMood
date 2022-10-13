/** @format */

import React from "react";
import Login from "./Components/pages/login";
import Mood from "./Components/pages/mood";
import NavBar from "./Components/pages/navbar";
import Home from "./Components/pages/home"
import SignupForm from "./Components/pages/signup"


function App() {
  return (
    <>
    <NavBar />
    <SignupForm/>
    <Home/>
      <Mood />
      <Login />

    </>
  );
}

export default App;

/** @format */

import React from "react";
// import Login from "./Components/pages/login";
import Mood from "./Components/pages/mood";
import NavBar from "./Components/pages/navbar";
import Home from "./Components/pages/home"
// import SignupForm from "./Components/pages/signup"
import Workout from "./Components/pages/workout"


function App() {
  return (
    <>
    <NavBar />
    {/* <SignupForm/> */}
    <Home/>
      <Mood />
      <Workout/>
      {/* <Login /> */}

    </>
  );
}

export default App;

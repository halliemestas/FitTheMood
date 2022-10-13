/** @format */

import React, {Component} from "react";
// import Login from "./Components/pages/login";
import Mood from "./Components/pages/mood";
import NavBar from "./Components/pages/navbar";
import Home from "./Components/pages/home"
// import SignupForm from "./Components/pages/signup"
import Workout from "./Components/pages/workout"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

class App extends Component {
render() {
  return (
    <Router> 
    <NavBar/>
      <Routes>
    {/* <SignupForm/> */}
    {/* <Route exact path='/' element={<Login/>}></Route> */}
    <Route exact path='/Home' element={<Home/>}></Route>
    <Route exact path='/mood' element={<Mood/>}></Route>
    <Route exact path='/workout' element={<Workout/>}></Route>

      {/* <Login /> */}
      </Routes>
      </Router>
    
  );
}
}



export default App;

import React from "react";

import Login from "./Components/pages/login";
import SignupForm from "./Components/pages/signup";


const styles = {
    landing:{
        height: "100vh"
    }
}

function Landing() {
  
    return (
      <div style={styles.landing}>
        <Login />
        <SignupForm />
        </div>
    );
  };
  
  export default Landing;
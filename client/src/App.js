/** @format */

import React from "react";
import Login from "./Components/pages/login";
import Mood from "./Components/pages/mood";
import NavBar from "./Components/NavBar";
import Home from "./Components/pages/home";
import SignupForm from "./Components/pages/signup";
import Workout from "./Components/pages/workout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="background">
        <Router>
          <NavBar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <div>
            <Routes>
              {/* <Route exact path="/" element={<Login />}></Route> */}
              <Route
                exact
                path="/"
                element={[<SignupForm />, <Login />]}
              ></Route>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/mood" element={<Mood />}></Route>
              <Route exact path="/workout" element={<Workout />}></Route>
            </Routes>
          </div>
          <Footer />
        </Router>

      </div>
    </ApolloProvider>
  );
}

export default App;

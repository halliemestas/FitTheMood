/** @format */

import React, { Component } from "react";
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

class App extends Component {
  render() {
    return (
      <div className="background">
        <ApolloProvider client={client}>
          <Router>
            <NavBar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
            />
            <div className="background">
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
        </ApolloProvider>
      </div>
    );
  }
}

export default App;

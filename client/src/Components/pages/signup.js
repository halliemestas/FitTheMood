import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

// import { createUser } from "../utils/API";
import Auth from "../../utils/auth";

// import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import { ADD_USER } from "../../utils/mutations";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",

    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("button pressed");

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      // const response = await createUser(userFormData);
      // if (!response.ok) {
      //   throw new Error("something went wrong!");
      // }
      const { data } = await addUser({ variables: { ...userFormData } });
      console.log("1");

      if (error) {
        console.log("2");
        console.log(error.message);
      }

      // const { token, user } = await response.json();
      // console.log(user);
      // Auth.login(token);
      event.preventDefault();
      Auth.login(data.addUser.token);
      console.log("3");
      console.log("you have been logged in");
    } catch (err) {
      console.log("4");
      console.error(err);

      setShowAlert(true);
    }
    console.log("5");

    setUserFormData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="mainDiv signupDiv">
      <h2>Sign Up</h2>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup.
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username" className="padding1">
            Username
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
            className="padding1"
          />
          <Form.Control.Feedback type="invalid">
            Invalid Username
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password" className="padding1">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
            className="padding1"
          />
          <Form.Control.Feedback type="invalid">
            Password is required
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.username && userFormData.password)}
          type="submit"
          variant="success"
          className="buttonFormatter signupButton"
        >
          Signup
        </Button>
      </Form>
      <hr className="horizontalRule" />
    </div>
  );
};

export default SignupForm;

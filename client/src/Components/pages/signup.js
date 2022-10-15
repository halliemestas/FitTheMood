/** @format */

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "../../styles/universal.css";

// import { createUser } from "../../utils/API";
import Auth from "../../utils/auth";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({ variables: { ...userFormData } });

      if (error) {
        // throw new Error("Not Signed Up");
        console.log(error.message);
      }

      // const { token, user } = await data.json();
      // console.log(user);
      // Auth.addUser(token);
      Auth.login(data.addUser.token);
      console.log("Signed Up!");
    } catch (error) {
      console.log(error);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      password: "",
    });
  };

  return (
    <>
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
    </>
  );
};

export default SignupForm;

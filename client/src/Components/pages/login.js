import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "../../styles/universal.css";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../../utils/mutations";

const Login = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...userFormData },
      });
      Auth.login(data.login.token);
      console.log("logged IN");
    } catch (err) {
      console.log("At least you entered the try block");
      console.log(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="mainDiv loginDiv">
      <h2>Log In</h2>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Login failed
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="username" className="padding1">
            Username
          </Form.Label>
          <Form.Control
            type="input"
            placeholder="username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            requiered="true"
            className="padding1"
          />
          <Form.Control.Feedback type="invalid">
            Need Username
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
            requiered="true"
            className="padding1"
          />
          <Form.Control.Feedback type="invalid">
            Need Password
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          disabled={!(userFormData.username && userFormData.password)}
          type="submit"
          variant="success"
          className="buttonFormatter loginButton"
          onClick={handleFormSubmit}
        >
          Login
        </Button>
      </Form>
      <hr className="horizontalRule" />
    </div>
  );
};

export default Login;

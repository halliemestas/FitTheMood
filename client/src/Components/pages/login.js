
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "../../styles/universal.css"
import Auth from "../../utils/auth";



const Login = () => {

  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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

    // try {
    //   const response = await loginUser(userFormData);
    //   if (!response.ok) {
    //     throw new Error("login failed");
    //   }

    //   const { token, user } = await response.json();
    //   console.log(user);
    //   Auth.login(token);
    // } catch (error) {
    //   console.log(error);
    //   setShowAlert(true);
    // }

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
          <Form.Label htmlFor="username" className="padding1">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="Username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
            className="padding1"
          />
          <Form.Control.Feedback type="invalid">
            Username is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password" className="padding1">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            reqruired
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
        >Login</Button>
      </Form>
    </div>
  );
};

export default Login;


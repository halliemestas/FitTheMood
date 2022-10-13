import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

import { createUser } from "../../utils/API";
import Auth from "../../utils/auth";

const SignupForm = () => {
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

    try {
        const response = await createUser(userFormData);
        if (!response.ok) {
            throw new Error('Not Signed Up');
        }

        const { token, user } = await response.json();
        console.log(user);
        Auth.login(token);
    } catch (error) {
        console.log(error);
        setShowAlert(true)
    }

    setUserFormData({
        username: '',
        password: '',
    });
  };

  return (
    <>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Oops! Something went wrong with your singup!
            </Alert>
        
            <Form.Group>
                <Form.Label htmlFor='username'>Username</Form.Label> 
                <Form.Control
                    type='text'
                    placeholder='Username'
                    name='username'
                    onChange={handleInputChange}
                    value={userFormData.username}
                    required
                    />
                <Form.Control.Feedback type='invalid'>Invalid Username</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
                <Form.Control.Feedback type='invalid'>Password is required</Form.Control.Feedback>
            </Form.Group>
            <Button
                disabled={!(userFormData.username && userFormData.Password)}
                type='submit'
                variant='success'>
            </Button>
        </Form>
    </>
  );
};

export default SignupForm;

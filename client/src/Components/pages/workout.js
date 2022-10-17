/** @format */

import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import RangeSlider from "react-bootstrap-range-slider";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import paul from "../../images/Paul.png";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";

import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";

import { ADD_MOOD } from "../../utils/mutations";

const Mood = () => {
  const todaysDate = Date(Date.now());

  //triggering modal to pop up
  const [show, setShow] = useState(false);
  //Close button
  const handleClose = () => setShow(false);
  //Save button
  const handleShow = () => setShow(true);
  //Sets default value of range slider to 5
  // const [value, setValue] = React.useState(5);

  const [enteredText, setEnteredText] = useState("");
  const [formState, setFormState] = useState(null);
  // let [toggleCards, setToggleCards] = useState(false);

  const [addMood, { error, data }] = useMutation(ADD_MOOD);

  const textChangeHandler = (e) => {
    setEnteredText(e.target.value);
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  const submitHandler = async (event) => {
    event.preventDefault();
    setFormState(enteredText);
    // console.log(formState);
    // console.log(enteredText);

    // setEnteredText("");

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      console.log("test");
      const response = await addMood(enteredText);

      if (!response) {
        console.log("Something went wrong");
      }
    } catch {
      console.log("Catch block");
    }
  };

  return (
    <>
      <div className="mainDiv">
        <h1 className="headers">Log your workout!</h1>
        <Container>
          <div className="paul" style={{ textAlign: "center" }}>
            <Row>
              <Col>
                <img src={paul} alt="Paul" style={{ width: "15rem" }}></img>
              </Col>
              <Col>
                <div>
                  <h2 className="paulGreeting">Howdy!</h2>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Button className="m-3 buttonFormatter" onClick={handleShow}>
              Add Workout!
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Workout Questionaire</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Describe your workout</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={enteredText}
                      className="form-input w-100"
                      onChange={textChangeHandler}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="buttonFormatter"
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={submitHandler}
                  className="buttonFormatter"
                  type="submit"
                >
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <Col xs={1} md={3} lg={4}></Col>
          <CardGroup className="cardGroup">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Your Latest Workout:</Card.Title>
                  <Card.Text>{formState}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{todaysDate}</small>
                </Card.Footer>
              </Card>
            </Col>
          </CardGroup>
        </Container>
      </div>
    </>
  );
};

export default Mood;

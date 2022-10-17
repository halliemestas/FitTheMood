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
        <h1 className="headers">Log your moods!</h1>
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
              Add A Mood!
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Mood Questionaire</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Rate your mood</Form.Label>
                    <RangeSlider
                      min={1}
                      max={10}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      1 is "I feel horrible" and 10 is "I feel fantastic"
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Describe how you're feeling</Form.Label>
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="happy"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="excited"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          inline
                          label="anxious"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                        <Form.Check
                          inline
                          label="depressed"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                        <Form.Check
                          inline
                          label="frustrated"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                        <Form.Check
                          inline
                          label="stressed"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                        <Form.Check
                          inline
                          label="doing Heroku deployment"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                        <Form.Check
                          inline
                          label="working on project 3"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                      </div>
                    ))}*/}
                    <Form.Label>Describe your mood</Form.Label>
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
                  <Card.Title>Your latest mood:</Card.Title>
                  <Card.Text>{formState}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{todaysDate}</small>
                </Card.Footer>
              </Card>
            </Col>
          </CardGroup>
          {/* <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Tuesday</Card.Title>
                  <Card.Text>
                    User's answers to mood Questionaire go here and an image
                    based on which adjective they picked for their mood?
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Date here</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Wednesday</Card.Title>
                  <Card.Text>
                    User's answers to mood Questionaire go here and an image
                    based on which adjective they picked for their mood?
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Date here</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Thursday</Card.Title>
                  <Card.Text>
                    User's answers to mood Questionaire go here and an image
                    based on which adjective they picked for their mood?
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Date here</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Friday</Card.Title>
                  <Card.Text>
                    User's answers to mood Questionaire go here and an image
                    based on which adjective they picked for their mood?
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Date here</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Saturday</Card.Title>
                  <Card.Text>
                    User's answers to mood Questionaire go here and an image
                    based on which adjective they picked for their mood?
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Date here</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Sunday</Card.Title>
                  <Card.Text>
                    User's answers to mood Questionaire go here and an image
                    based on which adjective they picked for their mood?
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Date here</small>
                </Card.Footer>
              </Card>
            </Col>
          </CardGroup> */}
        </Container>
      </div>
    </>
  );
};

export default Mood;

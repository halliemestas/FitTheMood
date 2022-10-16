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
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_MOOD, ADD_SKILL } from "../../utils/mutations";

function Mood() {
  //triggering modal to pop up
  const [show, setShow] = useState(false);
  //Close button
  const handleClose = () => setShow(false);
  //Save button
  const handleShow = () => setShow(true);
  //Sets default value of range slider to 5
  const [value, setValue] = React.useState(5);

  const [mood, setMood] = useState("");

  const [addMood, { error }] = useMutation(ADD_MOOD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addMood({
        variables: { mood },
      });

      setMood("");
    } catch (err) {
      console.error(err);
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
              Add Moods!
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Mood Questionaire</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Rate your mood</Form.Label>
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
                          val
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
                      </div>
                    ))}
                    <Form.Label>
                      Is there anything you would like to note about today
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={mood}
                      className="form-input w-100"
                      onChange={(event) => setMood(event.target.value)}
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
                  onClick={handleClose}
                  className="buttonFormatter"
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
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Monday</Card.Title>
                  <Card.Text>
                    {mood}
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
          </CardGroup>
        </Container>
      </div>
    </>
  );
}

export default Mood;

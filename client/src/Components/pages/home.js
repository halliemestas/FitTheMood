/** @format */

import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import RangeSlider from "react-bootstrap-range-slider";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import paul from "../../images/Paul.png"
import Row from "react-bootstrap/esm/Row";

function Home() {
  //triggering modal to pop up
  const [show, setShow] = useState(false);
  //Close button
  const handleClose = () => setShow(false);
  //Save button
  const handleShow = () => setShow(true);
  //Sets default value of range slider to 5
  const [value, setValue] = React.useState(5);
  return (
    
    <div style={{ backgroundColor: "#FFF8EA" }}>
      <Container>
        <Row>
        <Col>
        <img src={paul} alt="Paul"></img>
        </Col>
      <Col>
      <Card style={{marginTop: "50px"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Today's Workout</Card.Title>
            <Card.Text>
              User's input from a workout.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Date here</small>
          </Card.Footer>
        </Card>
        <div>
        <Button
          style={{
            backgroundColor: "#99A799",
            border: "#99A799",
            backgroundColorHover: "#D3E4CD",
          }}
          className="m-3"
          onClick={handleShow}
        >
          Add Workout!
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Workout Questionaire</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                    <Form.Label>How long did you workout for?</Form.Label>
                    <Form.Check
                        type="radio"
                        label="0-30 Minutes"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="30-60 Minutes"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                      <Form.Check
                        type="radio"
                        label="60-90 Minutes"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                      <Form.Check
                        type="radio"
                        label="90+ Minutes"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>What type of workout did you do?</Form.Label>
                    <Form.Control type="email" placeholder="Enter workout type" as="textarea" rows={1} />
                    <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Summary of your workout.</Form.Label>
                    <Form.Control type="Summary" placeholder="Summary" as="textarea" rows={3} />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>


        <Card style={{marginTop: "50px"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Today's Feelings</Card.Title>
            <Card.Text>
              User's answers to mood Questionaire go here and an image based on
              which adjective they picked for their mood?
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Date here</small>
          </Card.Footer>
        </Card>
        <div>
        <Button
          style={{
            backgroundColor: "#99A799",
            border: "#99A799",
            backgroundColorHover: "#D3E4CD",
          }}
          className="m-3"
          onClick={handleShow}
        >
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
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      </Col>
      </Row>
      </Container>
      
    </div>
  );
}

export default Home;

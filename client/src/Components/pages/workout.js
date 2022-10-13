/** @format */
import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import paul from "../../images/Paul.png";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";

function WorkoutForm() {
  //triggering modal to pop up
  const [show, setShow] = useState(false);
  //Close button
  const handleClose = () => setShow(false);
  //Save button
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Container>
          <div className="paul" style={{ textAlign: "center" }}>
            <Row>
              <Col>
                <img src={paul} alt="Paul" style={{ width: "15rem" }}></img>
              </Col>
              <Col>
                <div>
                  <h2
                    style={{
                      position: "relative",
                      border: "black 2px solid",
                      borderRadius: "100px",
                      width: "200px",
                      marginTop: "50px",
                    }}
                  >
                    Howdy!
                  </h2>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Button 
            style={{backgroundColor: "#99A799", border: "#99A799", backgroundColorHover: "#D3E4CD"}} className="m-3" onClick={handleShow}>
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
          <Col xs={1} md={3} lg={4}></Col>
          <CardGroup style={{backgroundColor: "#E2C2B9", padding: "20px", borderRadius: "20px"}}>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Monday</Card.Title>
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

export default WorkoutForm;
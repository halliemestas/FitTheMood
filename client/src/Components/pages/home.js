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
import paul from "../../images/Paul.png";
import Row from "react-bootstrap/esm/Row";
import "../../styles/universal.css";

const styles = {
  button: {
    textDecoration: "none",
    padding: "2%",
    margin: "10%",
    background: "#c36a2d",
    borderRadius: "10px",
  },
  // card: {
  //   margin: "8%",
  //   padding: "8%",
  // },

  link: {
    background: "none",
    textDecoration: "none",
    color: "white",
  },
};

function Home() {
  //triggering modal to pop up
  const [show, setShow] = useState(false);
  //Close button
  const handleClose = () => setShow(false);
  //Save button
  const handleShow = () => setShow(true);
  const [showWorkout, setShowWorkout] = useState(false);
  //Close button
  const handleWorkoutClose = () => setShowWorkout(false);
  //Save button
  const handleWorkoutShow = () => setShowWorkout(true);

  //Sets default value of range slider to 5
  const [value, setValue] = React.useState(5);
  const todaysDate = Date(Date.now());

  return (
    <div className="mainDiv">
      <Container>
        <Row>
          <Col>
            <img src={paul} alt="Paul" id="paul"></img>
            <div className="skillbar-wrapper">
              <div className="skillbar clearfix html5" data-percent="100%">
                <h4 className="skillbar-title">
                  <span>Cardio</span>
                </h4>
                <div className="skillbar-bar"></div>
                <div className="skill-bar-percent">100%</div>
              </div>

              <div className="skillbar clearfix css" data-percent="100%">
                <h4 className="skillbar-title">
                  <span>Shoulders</span>
                </h4>
                <div className="skillbar-bar"></div>
                <div className="skill-bar-percent">100%</div>
              </div>

              <div className="skillbar clearfix javascript" data-percent="100%">
                <h4 className="skillbar-title">
                  <span>Legs</span>
                </h4>
                <div className="skillbar-bar"></div>
                <div className="skill-bar-percent">100%</div>
              </div>

              <div className="skillbar clearfix jquery" data-percent="100%">
                <h4 className="skillbar-title">
                  <span>Core</span>
                </h4>
                <div className="skillbar-bar"></div>
                <div className="skill-bar-percent">100%</div>
              </div>

              <div className="skillbar clearfix php" data-percent="100%">
                <h4 className="skillbar-title">
                  <span>Shoulders</span>
                </h4>
                <div className="skillbar-bar"></div>
                <div className="skill-bar-percent">100%</div>
              </div>

              <div className="skillbar clearfix wordpress" data-percent="100%">
                <h4 className="skillbar-title">
                  <span>Yoga</span>
                </h4>
                <div className="skillbar-bar"></div>
                <div className="skill-bar-percent">100%</div>
              </div>

              <div className="skillbar clearfix server" data-percent="90%">
                <h4 className="skillbar-title">
                  <span>Back</span>
                </h4>
                <div className="skillbar-bar"></div>
                <div className="skill-bar-percent">90%</div>
              </div>
            </div>
          </Col>

          <Col>
            <div id="workoutDiv" className="div">
              <Card className="cardFormatter">
                <Card.Body style={styles.card}>
                  <Card.Title>
                    "The only bad workout is the one that didn't happen."
                  </Card.Title>
                </Card.Body>
              </Card>
              <div style={styles.button}>
                <a className="m-3 " href="/workout" style={styles.link}>
                  Add Workout!
                </a>
              </div>
            </div>
            <div id="workoutDiv" className="div">
              <Card className="cardFormatter">
                <Card.Body style={styles.card}>
                  <Card.Title>
                    "Train your mind to see the good in every situation"
                  </Card.Title>
                </Card.Body>
              </Card>
              <div style={styles.button}>
                <a className="m-3 " href="/mood" style={styles.link}>
                  Add Mood!
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

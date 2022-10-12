/** @format */
import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import RangeSlider from 'react-bootstrap-range-slider';



function Mood() {
  const [ value, setValue ] = React.useState(1);
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate your mood</Form.Label>
        <RangeSlider
        min={1}
        max={10}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Form.Text className="text-muted">
          1 is "I feel horrible" and 10 is "I feel fantastic"
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Describe how you're feeling</Form.Label>
      {['checkbox'].map((type) => (
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
      <Form.Label>Is there anything you would like to note about today</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Form>
      </div>
  );
}

export default Mood;

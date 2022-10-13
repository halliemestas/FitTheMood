import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'

function workoutForm() {
  return (
    <Form>
      
      <Form.Group>
        <Form.Label>How long did you workout for?</Form.Label>
        <Form.Control></Form.Control>
        <Col sm={10}>
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
          </Col>
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default workoutForm;
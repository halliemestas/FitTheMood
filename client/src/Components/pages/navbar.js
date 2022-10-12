import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Fit The Mood</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#workouts">Workouts</Nav.Link>
            <Nav.Link href="#mood">Mood</Nav.Link>
            <Nav.Link href="#logout">Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
};

export default NavBar;
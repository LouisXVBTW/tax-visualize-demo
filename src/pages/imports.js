import { Container, Row, Col , Navbar, Nav, Button, Card, Alert} from 'react-bootstrap';
import { Fragment } from 'react';

function Navb() {
  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">My Taxes :cry:</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/calendar">Calendar</Nav.Link>
      <Nav.Link href="/charts">Charts</Nav.Link>
      <Nav.Link href="#pricing">To-Do</Nav.Link>
    </Nav>
    
  </Navbar>
  )
}

function testCal() {
  return(
<Fragment>
  
</Fragment>

)  
}

export {Navb};
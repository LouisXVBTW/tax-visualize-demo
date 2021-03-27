import './main.css';
import {Navb} from './imports';
import "materialize-css";
import { Fragment } from 'react';
import { Container, Row, Col , Navbar, Nav, Button, Card, Alert} from 'react-bootstrap';
function Main() {
  return(
    <Fragment>
      <Navb/>
      <Container fluid>
        <br/>
        <Row>
          <Col>
              <Card className="text-center">
                <Card.Header>Idk some placeholder</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="text-center">
                <Card.Header>Idk some placeholder</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </Col>
          <Col><h2>THISISISISSI</h2></Col>
        </Row>
        
      </Container>
    </Fragment>
    
  )
}

export default Main;
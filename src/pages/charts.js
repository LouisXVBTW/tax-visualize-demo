import './main.css'
import { Container, Row, Col , Navbar, Nav, Button, Card, Alert} from 'react-bootstrap';
import {Fragment} from 'react';
import {Navb} from './imports';
import "materialize-css";
function Charts() {
  return(
    <Fragment>
      <Navb/>
      <Container fluid>
      <br/>
      <input type="text" class="datepicker"/>

    
    </Container>
    </Fragment>
  )
};

export default Charts;
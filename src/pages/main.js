import './main.css';
import "animate.css";
import "../data/testdata.json"
import {Navb} from './imports';
import { Fragment } from 'react';
import { Container, Row, Col , Navbar, Nav, Button, Card, Alert, blockquote} from 'react-bootstrap';
import "chart.js";

function Main() {
  let month = (new Date().getUTCMonth() +1 ).toString();
  let day = new Date().getUTCDate().toString();
  return(
    <Fragment>
      <Navb/>
      <Container>
        <br/>
        
          <Col>
            <div class="jumbotron verticle-center">
              <h1 class="display-2 text-center">6th April<br/>-<br/>5th April</h1>
              <figcaption class="display-5 text-center">
                <cite title="Source Title">Uk tax year 2019-2020</cite>
              </figcaption>
            </div>
            <div class="jumbotron verticle-center">
              <h1 class="display-1 text-center">{day} + {month}</h1>
            </div>
            <div class="jumbotron verticle-center">
              <h1 class="display-1 text-center"> hi</h1>
              <BarChart
                data=[{"apple"= "boopy"},]
                title="My amazing data"
                color="#70CAD1"
              />
            </div>
          </Col>
        
        
      </Container>
    </Fragment>
    
  )
}

export default Main;
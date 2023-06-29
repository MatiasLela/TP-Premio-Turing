import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from '../node_modules/react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { BsFillCalendarMonthFill } from "react-icons/bs";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsTrophyFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Turing from "./images/alan-turing.jpg";

//Pages
import Historia from "./components/Historia";
import Premios from "./components/Premios";
import Logros from "./components/Logros";
import Actualidad from "./components/Actualidad";

function App() {

  return (
    <Router>
      <div className="contenido">
        <div>
          <div> 
            <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
              <Container fluid>
                <Navbar.Brand><Link to="/" className="navbar-link">Inicio</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="m-auto">
                    <Nav.Link><Link to="/historia" className="navbar-link">Historia</Link></Nav.Link>
                    <Nav.Link><Link to="/premios" className="navbar-link">Premios</Link></Nav.Link>
                    <Nav.Link><Link to="/logros" className="navbar-link">Logros</Link></Nav.Link>
                    <Nav.Link><Link to="/Actualidad" className="navbar-link">Actualidad</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div>
            <Container fluid>
              <Card className="card-contenido">
                <Card.Img variant="top" src={Turing} />
                <Card.Body>
                <section>
                  <div>
                    <h1><i>Premio Turing 2021: Aho - Ullman</i></h1>
                  </div>
                  <div>
                    <Routes>
                      <Route exact path="/historia" Component={Historia}/>
                      <Route exact path="/premios" Component={Premios}/>
                      <Route exact path="/logros" Component={Logros}/>
                      <Route exact path="/actualidad" Component={Actualidad}/>
                    </Routes>
                  </div>
                  <hr/>
                  <div>
                    <Container>
                      <Row>
                        <Col>
                          <Card className="text-white bg-redp text-center">
                            <Container className='container-iconos'>
                              <BsFillCalendarMonthFill className='iconos'/>
                            </Container>
                            <Card.Body>
                              <Card.Title>Historia</Card.Title>
                              <Card.Text>
                                Descubre la historia de los profesores
                                Alfred Aho y Jeffrey Ullman.
                              </Card.Text>
                              <Link to="/historia" className="button-link"><Button variant="primary">Ver mas</Button></Link>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col>
                          <Card className="text-white bg-yellowp text-center">
                            <Container className='container-iconos'>
                              <BsTrophyFill className='iconos'/>
                            </Container>
                            <Card.Body>
                              <Card.Title>Premios</Card.Title>
                              <Card.Text>
                                Descubre los premios que han ganado Alfred Aho y Jeffrey Ullman.
                              </Card.Text>
                              <Link to="/premios" className="button-link"><Button variant="primary">Ver mas</Button></Link>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col>
                          <Card className="text-white bg-greenp text-center">
                            <Container className='container-iconos'>
                              <BsCheckCircleFill className='iconos'/>
                            </Container>
                            <Card.Body>
                              <Card.Title>Logros</Card.Title>
                              <Card.Text>
                                Descubre los logros que han ganado Alfred Aho y Jeffrey Ullman.
                              </Card.Text>
                              <Link to="/logros" className="button-link"><Button variant="primary">Ver mas</Button></Link>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col>
                          <Card className="text-white bg-bluep text-center">
                            <Container className='container-iconos'>
                              <BsFillCalendarCheckFill className='iconos'/>
                            </Container>
                            <Card.Body>
                              <Card.Title>Actualidad</Card.Title>
                              <Card.Text>
                                Descubre como es la vida actual de los ganadores del premio Turing 2021.
                              </Card.Text>
                              <Link to="/actualidad" className="button-link"><Button variant="primary">Ver mas</Button></Link>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </section>
                </Card.Body>
              </Card>
            </Container>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../img/logo1.png';
import imagen from "../img/fondo55.jpg.webp";
// import  Formulario  from "../tramitesContent/Formulario.jsx";
import {useForm} from 'react-hook-form';


const NuevoExpediente = () => { 
  const {register, handleSubmit, errors} = useForm();
  const myStyle = { background: 'green', color: 'white' };
  return (
    <section>
      <div>
        <Navbar />
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src={logo}
                height="100"
                classname="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="align-items-center">
              <Nav className="me-auto my-5 my-lg-4" style={{ maxHeight: '200px' }}>
                <Nav.Link href="/home"><h6>Home</h6></Nav.Link>
                <Nav.Link href="/tramites"><h6>Trámites</h6></Nav.Link>
                <Nav.Link href="/nuevoexpediente"><h6>Nuevo Expediente</h6></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div style={myStyle}>
        <div id="contenedor1">
          <div>
            <img src={imagen} height="100%" alt="..." style={{ filter: 'brightness(0.3)' }} />
            
                </div>
                </div>
                {/* <Formulario/> */}
                </div>
               
                </section>
  );
  }
  export default NuevoExpediente;
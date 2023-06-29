
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../src/img/logo1.png';

function NavScrollExample() {
  return (
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
          <Nav
            className="me-auto my-5 my-lg-4"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="/home"><h6>Home</h6></Nav.Link>
            <Nav.Link href="/tramites"><h6>Trámites</h6></Nav.Link>
            <Nav.Link href="/nuevoexpediente"><h6>Nuevo Expediente</h6></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

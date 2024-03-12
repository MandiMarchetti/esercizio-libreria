import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const LibreriaNavbar = function (){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">Amy Libreria</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#browse">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default LibreriaNavbar 
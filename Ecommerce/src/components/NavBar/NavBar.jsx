import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Ecommerce :v</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Tecnologia</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Herramientas</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Vehiculos</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Gaming</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Libros</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Deportes</NavDropdown.Item>

              
            </NavDropdown>

            <Nav.Link href="#action1">Ofertas</Nav.Link>
            <Nav.Link href="#action2">Historial</Nav.Link>
            <Nav.Link href="#action9">Ayuda</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Busqueda</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
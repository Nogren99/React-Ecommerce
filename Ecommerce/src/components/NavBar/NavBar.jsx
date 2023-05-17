import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link ,NavLink} from 'react-router-dom';
import Cartwidget from '../Cartwidget/Cartwidget'


function NavScrollExample({children}) {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">Ecommerce</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item >  <NavLink to='/category/tecnologia'>Tecnologia</NavLink>  </NavDropdown.Item>
              <NavDropdown.Item ><NavLink to='/category/herramientas'>Herramientas</NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink to='/category/vehiculos'>Vehiculos</NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink to='/category/gaming'>Gaming</NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink to='/category/libros'>Libros</NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink to='/category/deportes'>Deportes</NavLink></NavDropdown.Item>

              
            </NavDropdown>

            <Nav.Link href="#action1">Ofertas</Nav.Link>
            <Nav.Link href="#action2">Historial</Nav.Link>
            <Nav.Link href="#action9">Ayuda</Nav.Link>


            <NavLink className='btn btn-outline-primary' to='/cart'>
                <Cartwidget/>
            </NavLink>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busca productos"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {children}
    </>
    
  );
}

export default NavScrollExample;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarLogo.css';

function NavbarLogo() {

  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="/"><img src="" alt="logo" /></Navbar.Brand>
        <Container>
          <Navbar.Brand href="/">kichengadgets</Navbar.Brand>
          <Nav className="links">
            <Nav.Link href="/login">Entrar</Nav.Link>
            <Nav.Link href="/products">Produtos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavbarLogo
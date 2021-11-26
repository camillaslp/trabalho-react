import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Menu() {
  return (
    <Navbar sticky="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/440/440692.png"
            width="34"
            height="34"
            className="d-inline-block align-top"
          />{' '}
          E-commerce Grupo 5
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="./features">Produtos</Nav.Link>
          <Nav.Link href="./carrinho">Carrinho</Nav.Link>
        </Nav>
      </Container>
      <Navbar fixed="bottom" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./sobre">
            Sobre
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Navbar>
  );
}

export default Menu;

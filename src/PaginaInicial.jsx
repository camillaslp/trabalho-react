import React from "react";
import axios from "axios";
import Produtos from "./Produtos";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default () => {
  const [produtos, setProdutos] = React.useState([]);

  const chamadaAPI = () => {
    const api = axios.create({
      baseURL: "http://localhost:3000/",
    });

    api.get("/produtos").then(listar);

    function listar(response) {
      setProdutos(response.data);
    }
  };

  React.useEffect(() => { chamadaAPI() }, [])

  return (
    <div className="App-header">
      <Container>
        <header>
          <p>E-commerce | Grupo5 | Serratec</p>
        </header>
        <p></p>
        <Row>
          <Col>Nome do produto</Col>
          <Col>Valor</Col>
        </Row>
      </Container>
      <Container>
        {produtos.map((produto) => (
          <Row key={produto.id}>
            <Produtos
              produto={produto}
              className="produto"
            />
          </Row>
        ))}
      </Container>
    </div>
  );
}

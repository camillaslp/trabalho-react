import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class GetProdutos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
    };

    this.api = axios.create({
      baseURL: "http://localhost:9090"
    });
  }

  componentDidMount() {
    const processar = (response) => {
      let novo = { produtos: response.data };
      this.setState(novo);
    };
    this.api.get("/produtos").then(processar);

    document.title = "E-commerce Grupo 5";
  }
  render() {
    return (
      <div className="App-header">
        <Container>
          <header>
            <p>E-commerce | Grupo5 | Serratec</p>
          </header>
          <p></p>
          <Row>
            <Col>Nome do Produto</Col>
            <Col>Valor</Col>
          </Row>
          {this.state.produtos.map((produto) => (
            <Row key={produto.id_produto}>
              <Col>{produto.nome}</Col>
              <Col>{produto.valorUnitario}</Col>
            </Row>
          ))}
        </Container>
      </div>
    );
  }
}

export default GetProdutos;

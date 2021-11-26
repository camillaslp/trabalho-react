import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Carrinho() {
    const [pedidos, setPedidos] = React.useState([]);
    const api = axios.create({
        baseURL: "http://localhost:9090"
    });

    const consultar = () => {
        const processar = (response) => {
            let novo = response.data;
            setPedidos(novo);
        };
        api.get("/pedidos").then(processar);
    };

    React.useEffect(consultar, []);

    return (
        <div className="App-header">
            <Container>
                <header>
                    <p>E-commerce | Grupo5 | Serratec</p>
                </header>
                <p></p>
                <Row>
                    <Col>Numero do Pedido</Col>
                    <Col>Produto</Col>
                    <Col>Valor Total</Col>
                </Row>
                {pedidos.map((pedido) => (
                    <Row key={pedido.id_pedido}>
                        <Col>{pedido.id_pedido}</Col>
                        <Col>{pedido.pedidosItem}</Col>
                        <Col>{pedido.totalGeral}</Col>
                    </Row>
                ))}
            </Container>
        </div >
    );
}

export default Carrinho;
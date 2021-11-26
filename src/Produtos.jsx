import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default (props) => {
    const { produto } = props;

    const handler = (event) => {
    }

    return (
        <div className="produto">
            <Row>
                <Col>
                    <h3>{produto.nome}</h3>
                </Col>
                <Col>
                    <p>{produto.valor}</p>
                </Col>
                <Col>
                    <Link to={`/produtos/${produto.id}`}><button onClick={handler()}>Ver detalhes</button></Link>
                </Col>
            </Row>
        </div>
    )
}
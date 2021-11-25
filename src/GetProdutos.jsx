import React from "react";
import axios from "axios";

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
            <div>
                <h3>Produtos</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.produtos.map((produto) => (
                            <tr key={produto.id_produto}>
                                <td>{produto.nome}</td>
                                <td>{"R$" + produto.valorUnitario}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GetProdutos;

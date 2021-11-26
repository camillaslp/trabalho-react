import React from "react";
import Api from "./Api";

export default (props) => {
    const [pedidosItem, setPedidosItem] = React.useState([]);

    React.useEffect(() => { chamadaAPI() }, [])

    const chamadaAPI = (props) => {

        Api.get(`/pedidos`).then((result) => {

            if (result.data?.length > 0) {
                const existe = result.data.find((pedido) => pedido.cliente?.id == 1);
                if (existe) {
                    setPedidosItem(existe.pedidosItem);
                }
            }
        })

    };

    return (
        <div className="App-header">
            {pedidosItem.length > 0 && <h3>Itens no carrinho: {pedidosItem.length}</h3>}
            {pedidosItem.length == 0 && <h3>Seu carrinho está vazio</h3>}
            <div className="carrinho">
                <p>Produtos: </p>
                <ul>
                    {pedidosItem.map((pedidoItem) => (
                        <li key={pedidoItem.id}>Nome do produto: {pedidoItem.produto.nome} - Preço R$ {pedidoItem.produto.valor}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
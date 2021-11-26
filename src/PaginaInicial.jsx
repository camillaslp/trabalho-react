import React from "react";
import GetProdutos from "./GetProdutos"

function PaginaInicial(props) {
  switch (props.menu) {
    case "/carrinho":
      return <Carrinho />;
      break;
    case "/sobre":
      return <Sobre />;
      break;
    case "/":
      return <PaginaInicial />;
      break;
    default:
      return <GetProdutos />;
  }
}

export default PaginaInicial;

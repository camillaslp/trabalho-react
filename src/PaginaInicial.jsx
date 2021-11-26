import React from "react";
import GetProdutos from "./GetProdutos"

function PaginaInicial(props) {
  switch (props.menu) {
    case "/":
      return <PaginaInicial />;
      break;
    case "cadastro":
      return <Formulario />;
      break;
    case "sobre":
      return <Sobre />;
    default:
      return <GetProdutos />;
  }
}

export default PaginaInicial;

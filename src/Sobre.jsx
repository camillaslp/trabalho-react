import React from "react";
import styled from "styled-components";

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    
    background-color: ${(props) => (props.tema == "escuro" ? "#282c34" : "#fff")};
    color: ${(props) => (props.tema == "escuro" ? "#fff" : "")};
`;

function Sobre() {
    const [tema, setTema] = React.useState("claro");

    const valor = (m) => (m == "escuro" ? "claro" : "escuro");
    const alterar = () => setTema(valor);

    return (
        <Main tema={tema}>
            <div>
                <h1>Sobre nós</h1>
                <div>
                    <button onClick={alterar}>Alterar para {valor(tema)} </button>
                </div>
                <div>
                    <p>Esta loja foi feita com S2 pelo Zepa</p>
                </div>
            </div>
        </Main>
    );
}

export default Sobre;
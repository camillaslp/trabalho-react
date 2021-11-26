import React from "react";
import styled from "styled-components";

const Main = styled.main`
    color: white;
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin)`;

function Sobre() {

    return (
        <Main>
            <div>
                <h1>Sobre nós</h1>
                <div>
                    <p>A Grupo5 é uma ampla loja que atua na área de comercialização de instrumentos
                        musicais. Está localizada no Serratec, Teresópolis-RJ. Nossa linha de produtos
                        é uma das mais completas do país. Aliada a grandes parcerias de fornecimento,
                        proporcionamos ótimos preços e condições de pagamento. O nosso principal objetivo desde sua
                        fundação, é a satisfação dos nossos clientes, através da prestação de serviços e produtos da
                        melhor qualidade.</p>
                </div>
            </div>
        </Main>
    );
}

export default Sobre;
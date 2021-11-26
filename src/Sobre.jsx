import React from "react";
import styled from "styled-components";
<<<<<<< Updated upstream

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
=======
import { useState } from "react";

const Main = styled.main`
  color: white;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;



function Sobre() {


        const [inputs, setInputs] = useState({});
      
        const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setInputs(values => ({...values, [name]: value}))
        }
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log(inputs);
        }
  return (
    <Main>
      <div>
        <h1>Sobre nós</h1>
        <div>
          <p>
            A Grupo5 é uma ampla loja que atua na área de comercialização de
            instrumentos musicais. Está localizada no Serratec, Teresópolis-RJ.
            Nossa linha de produtos é uma das mais completas do país. Aliada a
            grandes parcerias de fornecimento, proporcionamos ótimos preços e
            condições de pagamento. O nosso principal objetivo desde sua
            fundação, é a satisfação dos nossos clientes, através da prestação
            de serviços e produtos da melhor qualidade.
          </p>
          <form onSubmit={handleSubmit}>
            <label>
              Digite seu nome:
              <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Digite sua nota para o site:
              <input
                type="number"
                name="nota"
                value={inputs.nota || ""}
                onChange={handleChange}
              />
            </label>
            <input type="submit" />
          </form>
          )
        </div>
      </div>
    </Main>
  );
}

export default Sobre
>>>>>>> Stashed changes

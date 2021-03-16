import React from "react";

import "./styles.css";



// você deve abrir o arquivo src/App.js, e completar onde não possui código com o 
// código para atingir os objetivos de cada funcionalidade.

// Listar os repositórios da sua API: Deve ser capaz de criar uma lista com o 
// campo title de todos os repositórios que estão cadastrados na sua API.

// Adicionar um repositório a sua API: Deve ser capaz de adicionar um novo item 
// na sua API através de um botão com o texto Adicionar e, após a criação, deve ser 
// capaz de exibir o nome dele após o cadastro.

// Remover um repositório da sua API: Para cada item da sua lista, deve possuir 
// um botão com o texto Remover que, ao clicar, irá chamar uma função para remover 
// esse item da lista do seu frontend e da sua API.


function App() {

  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;

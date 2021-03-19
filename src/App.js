import React from "react";
import axios from "axios";
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


 const [lista,setLista] = React.useState([]);
 const [controle,setControle] = React.useState(0);

    
  React.useEffect(() =>
  {
     first();    
  }, []);

  React.useEffect(() =>
  {
    first();
  }, [controle]);


  const first = async () => {

    const aux = await axios.get('http://localhost:3333/repositories');
    setLista(aux.data);
    
  }

  async function handleAddRepository() {

    let a = Math.random().toString(16).substr(2, 8);
    let b = Math.random().toString(16).substr(2, 8);
    let c = Math.random().toString(16).substr(2, 8);

    axios.post(`http://localhost:3333/repositories`,{title: a, url: `http://${b}.com`, techs: [c]}).then(setControle(controle+1));
    
  }

  async function handleRemoveRepository(id) {
    axios.delete(`http://localhost:3333/repositories/${id}`).then(setControle(controle+1));
  }

  return (
    <div>
      <ul data-testid="repository-list">
        { 
          lista.map((l)=>(
             <li key={l.id}> {l.title}
                 <div>
                    <button onClick={() => handleRemoveRepository(l.id)}>
                    Remover
                    </button>  
                  </div>              
             </li>
          ))     
        }
      </ul>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;

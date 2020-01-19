import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Header from './Header';

// Os 3 conceitos principais do React:
// ----------------------------------
// Componente: Bloco isolado de HTML, CSS e JS, o qual não intergere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para um componente FILHO 
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCount() {
    //alert("Hello!");
    setCounter(counter + 1);
  }

  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
    //<h1>Olá mundo!</h1>
    <>
      <Header title="Meu painel"/>
      <Header title="Título 1"/>
      <Header title="Título 2"/>
      <Header title="Título 3"/>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCount}>Incrementar</button>
    </>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import {useForm} from "react-hook-form";

function Welcome(props) {
  return(
    <p>Meu nome é {props.nome}!</p>
  );
}

function Clock(props) {
  return(
    <div>
      <h2>São exatamente {props.input.toLocaleTimeString()}</h2>
    </div>
  );
}

function Count() {
  const [contador, Contagem] = useState(0);

  function lidarComClique() {
    Contagem(contador + 1);
  }

  return (
    <div>
      <h3>Contador!</h3>
      <p>Você já cliclou {contador} vezes</p>

      <button onClick={lidarComClique}>Contador++</button>
      <button onClick={() => {Contagem(0)}}>Zerar</button>
    </div>
  );
}

function Form() {
  function lidarEnvio(e) {
    e.preventDefaut();
    console.log('Você clicou em enviar!');
  }

  return(
    <div>
      <form onSubmit={lidarEnvio}>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function NumberList(props) {
  const numeros = props.numbers;
  const listaItens = numeros.map((numero) => 
    <li key={numero.toString()}>
      {numeros}
    </li>
  );

  return(
    <ul>{listaItens}</ul>
  );
}

const FormularioRegistro = () => {
  const {registro, lidarEnvio} = useForm();
  const lidarRegistro = (data) => console.log(data);

  return(
    <form onSubmit={lidarEnvio(lidarRegistro)}>
      <div>
        <label>Nome</label>
        <input name="nome" {...registro('nome')} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" {...registro('email')} />
      </div>
      <div>
        <label>Senha</label>
        <input type="senha" name="senha" {...registro('senha')} />
      </div>
      <button>Enviar</button>
    </form>
  );
}

function App() {
  return (
    <div>
        <h1>Hello Word!</h1>
        <Welcome nome="Lincoln Matheus"/>
        <br />
        {/* <Clock input type="datetime-local"/> */}
        <Count />
        <br />
        <Form />
        <br />
        {/* <NumberList /> */}
        <FormularioRegistro />
        <p>Meu primeiro app com React e Vite.</p>
    </div>
  );
}

export default App;
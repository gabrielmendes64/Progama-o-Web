import './App.css'
import { Arena, World } from './components/atividade1/03batalha';
import { Pai } from './components/atividade1/questao1/01Pai';
import * as PC from './components/atividade1/02MeuPc';

export function App() {
  return ( 
    <main>
      <h1 className='questionTitle'>Questao 1</h1>
      <Pai />

      <h1 className='questionTitle'>Questao 2</h1>
      <div>
      <h1>Meu PC</h1>
        <PC.PlacaMae name=" X99 Dual Socket Desktop" price={627} />
        <PC.Memoria name="Memória HyperX Fury 8GB DDR4" price={150} />
        <PC.PlacaDeVideo name="NVIDIA GeForce RTX 3050" price={1500} />
      </div>

      
      <h1 className='questionTitle'>Questao 3</h1>
      <World>
        <Arena name="Laboratório professor Carvalho"/>
        <Arena name="Ginásio de pedra"/>
      </World>
    </main>
    
  );
}


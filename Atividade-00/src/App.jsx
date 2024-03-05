//GABRIEL DE SOUZA MENDES 
//FELIPE OLVEIRA NOGUEIRA  

import './App.css'
import { MeusDados } from './components/01MeusDados';
import { MeusDadosProps } from './components/02MeusDados';
import { Temperatura } from './components/03Temperatura';

export function App() {

  return (
    <div className='main'>
      <MeusDados />
      <MeusDadosProps curso="ES" nome="Gabriel Mendes" universiade="UFC" />
      <MeusDadosProps curso="ES" nome="Felipe Oliveira" universiade="UFC" />
      <Temperatura />
    </div>
  );

}

import './App.css'
import FunctionContextA from './components/Questao1Atual/FunctionContextA'
import FunctionContextALegado from './components/Questao1Legado/FunctionContextA'
import { ComponenteAvo } from './components/Questao2/ComponenteAvo'
import { ComponenteAvoContador } from './components/Questao3/ComponenteAvoContador'

export function App() {


  return (
    <main>
      <h1>Questão 1 Atual</h1>
      <FunctionContextA />

      <h1>Questão 1 Legado</h1>
      <FunctionContextALegado />
      <h1>Questao 2</h1>
      <ComponenteAvo />
      <h1>Questao 3</h1>
      <ComponenteAvoContador />
    </main>
  )
}


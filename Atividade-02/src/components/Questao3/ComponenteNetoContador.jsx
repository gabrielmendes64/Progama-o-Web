import { useContext } from "react";
import { NumberPokemon } from "./NumberContext";


export function ComponenteNetoContador() {
  const { contador, setContador } = useContext(NumberPokemon);

  const aumentarContador = () => {
    setContador(contador + 1);
  };
  
  return (
    <>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador+2}.png`} alt="" />
      <button onClick={aumentarContador}>Aumentar</button>
    </>
  )
}
import { useContext } from "react";
import { ComponenteNeto } from "./ComponenteNeto";
import { NumberPokemon } from "./NumberContext";

export function ComponenteFilho() {
  const number = useContext(NumberPokemon);
  
  return (
    <>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number+1}.png`} alt="" />
      <ComponenteNeto />
    </>
  )
}
import { useContext } from "react";
import { NumberPokemon } from "./NumberContext";


export function ComponenteNeto() {
  const number = useContext(NumberPokemon);
  
  return (
    <>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number+2}.png`} alt="" />
    </>
  )
}
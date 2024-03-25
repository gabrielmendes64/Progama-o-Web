import { useContext } from "react";
import { NumberPokemon } from "./NumberContext";
import { ComponenteNetoContador } from "./ComponenteNetoContador";

export function ComponenteFilhoContador() {
  const { contador } = useContext(NumberPokemon);
  
  return (
    <>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador+1}.png`} alt="" />
      <ComponenteNetoContador />
    </>
  )
}
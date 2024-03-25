import { useState } from "react";
import { ComponenteFilhoContador } from "./ComponenteFilhoContador";
import { NumberPokemon } from "./NumberContext"

export function ComponenteAvoContador() {
  const [contador, setContador] = useState(1);

  return (
    <>
      <NumberPokemon.Provider value={{contador, setContador}}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`} alt="" />
        <ComponenteFilhoContador />
      </NumberPokemon.Provider>
    </>
  )
}
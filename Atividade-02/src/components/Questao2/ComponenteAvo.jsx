import { ComponenteFilho } from "./ComponenteFilho";
import { NumberPokemon } from "./NumberContext"

export function ComponenteAvo() {
  const number = 1;

  return (
    <>
      <NumberPokemon.Provider value={number}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`} alt="" />
        <ComponenteFilho />
      </NumberPokemon.Provider>

    </>
  )
}
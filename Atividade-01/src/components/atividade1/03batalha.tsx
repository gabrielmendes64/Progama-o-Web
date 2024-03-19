import { ReactNode } from "react";
import "./styles.css"

import bulbasaur from "./../../assets/bulbasaur.png";
import charmander from "./../../assets/charmander.png";
import squirtle from "./../../assets/squirtle.png";
import onix from "./../../assets/onix.png";
import geoudude from "./../../assets/geoudude.png";

interface CharacterProps {
  name: string;
  img: string;
}

interface WorldProps {
  children: ReactNode;
}

interface ArenaProps {
  name: string;
}

export function Hero({ name, img }: CharacterProps) {
  return (
    <div className="character">
      <h1>Hero: {name}</h1>
      <img src={img} alt="" />
    </div>
  );
}

export function Enemy({ name, img }: CharacterProps) {
  return (
    <div className="character">
      <h1>Enemy: {name}</h1>
      <img src={img} alt="" />
    </div>
  );
}

export function World({ children }: WorldProps) {
  return (
    <div>
      {children}
    </div>

  )
}

export function Arena({ name }: ArenaProps) {
  return (
    <div className="arena">
      <h1>Arena: {name}</h1>

      {name === 'Laboratório professor Carvalho' ? (
        <div className="charactersArena">
          <Hero name='bulbasaur' img={bulbasaur} />
          <Hero name='charmander' img={charmander} />
          <Hero name='charmander' img={squirtle} />
        </div>
      ): (
        <div className="charactersArena">
          <Enemy name='onix' img={onix} />
          <Enemy name='geoudude' img={geoudude} />
        </div>
      )}

    </div>
  );
}
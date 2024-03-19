interface PartProps {
  name: string;
  price: number;
}

export function PlacaMae({ name, price }: PartProps) {
  return(
    <div>
      <h2>Peça: {name}</h2>
      <h2>Preço: R$ {price}</h2>
    </div>
  );
}

export function PlacaDeVideo({ name, price }: PartProps) {
  return(
    <div>
      <h2>Peça: {name}</h2>
      <h2>Preço: R$ {price}</h2>
    </div>
  );
}

export function Memoria({ name, price }: PartProps) {
  return(
    <div>
      <h2>Peça: {name}</h2>
      <h2>Preço: R$ {price}</h2>
    </div>
  );
}
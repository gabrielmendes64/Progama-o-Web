interface HeroProps {
  name: string;
  img: string;
}

export function Hero({name, img}: HeroProps) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <img src={img} alt="" />
    </div>
  );
}
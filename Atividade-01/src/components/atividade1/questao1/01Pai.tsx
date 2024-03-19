import { Filho } from "./01Filho";

export function Pai() {
  return (
    <div>
      <Filho altura={1.8} peso={90}/>
      <Filho altura={1.7} peso={50}/>
      <Filho altura={1.8} peso={140}/>
    </div>
  );
}
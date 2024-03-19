interface FilhoProps {
  altura: number;
  peso: number;
}


export function Filho({ altura, peso }: FilhoProps) {
  
  function calcularImc(altura: number, peso: number) {
    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 35) {
        return "Obesidade Grau I";
    } else if (imc < 40) {
        return "Obesidade Grau II (severa)";
    } else {
        return "Obesidade Grau III (mórbida)";
    }
  }

  return (
    <h2>Sua classificação é: {calcularImc(altura, peso)}</h2>
  );
}

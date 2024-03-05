export const Temperatura = () => {
  const celsiusParaFahrenheit = (c) => {
      return (c * 9/5) + 32;
  }

  const fahrenheitParaCelsius = (f) => {
      return (f - 32) * 5/9;
  }

  const kelvin = (k) => {
      const celsius = k - 273;
      const fahrenheit = (celsius * 9/5) + 32;
      return { celsius, fahrenheit };
  }

  const temperaturaC = 20
  const temperaturaF = 40
  const temperaturaK = 60

  const valorCelsiusParaFahrenheit = celsiusParaFahrenheit(temperaturaC);
  const valorFahrenheitParaCelsius = fahrenheitParaCelsius(temperaturaF);
  const valorKelvin = kelvin(temperaturaK);

  return (
      <div>
          <h2>Conversão de Temperaturas:</h2>
          <p>{temperaturaC}°C em Fahrenheit é {valorCelsiusParaFahrenheit.toFixed(2)}°F</p>
          <p>{temperaturaF}°F em Celsius é {valorFahrenheitParaCelsius.toFixed(2)}°C</p>
          <p>{temperaturaK}K em Celsius é {valorKelvin.celsius}°C e em Fahrenheit é {valorKelvin.fahrenheit.toFixed(2)}°F</p>
      </div>
  );
}


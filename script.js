function convertTemperature(unit) {
      const celsiusInput = document.getElementById("celsius");
      const fahrenheitInput = document.getElementById("fahrenheit");
      const kelvinInput = document.getElementById("kelvin");
  

      if (unit === 'C') {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
          const fahrenheit = (celsius * 9 / 5) + 32;
          const kelvin = (celsius + 273.15);
          fahrenheitInput.value = fahrenheit.toFixed(2);
          kelvinInput.value = kelvin.toFixed(2);

        } else {
          fahrenheitInput.value = '';
          kelvinInput.value = '';
        }
      } else if (unit === 'F') {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
          const celsius = (fahrenheit - 32) * 5 / 9;
          const kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
          celsiusInput.value = celsius.toFixed(2);
          kelvinInput.value = kelvin.toFixed(2);
        } else {
          celsiusInput.value = '';
          kelvinInput.value = '';
        }
      }
        else if (unit === 'K') {
        const kelvin = parseFloat(kelvinInput.value);
        if (!isNaN(kelvin)) {
          const celsius = (kelvin - 273.15);
          celsiusInput.value = celsius.toFixed(2);
          const fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
          fahrenheitInput.value = fahrenheit.toFixed(2);
        } else {
          fahrenheitInput.value = '';
          celsiusInput.value = '';
        }
      }
    }
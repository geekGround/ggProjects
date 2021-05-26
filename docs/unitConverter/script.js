let myData = {
  mass: {
    mg: 1 / 1000, //1mg = 1/1000g,
    g: 1, //1g = 1g,
    kg: 1000, //1kg = 1000g,
    ton: 1000000, //1ton = 1000000g
  },
  temperature: {
    celsius: {
      fahrenheit: (valor) => valor * 1.8 + 32,
      kelvin: (valor) => valor + 273.15,
    },
    fahrenheit: {
      celsius: (valor) => (valor - 32) / 1.8,
      kelvin: (valor) => (valor - 32) / 1.8 + 273.15, // fahrenheit.celsius + 273.15
    },
    kelvin: {
      celsius: (valor) => valor - 273.15,
      fahrenheit: (valor) => (valor - 273.15) * 1.8 + 32, // kelvin.celsius * 1.8 + 32
    },
  },
  length: {
    mm: 1 / 1000,
    cm: 1 / 100,
    m: 1,
    km: 1000,
  },
  time: {
    s: 1,
    min: 60,
    h: 3600,
    day: 86400,
    week: 604800,
    month: 2629600,
  },
  volume: {
    m3: 1,
    l: 1000,
    dm3: 1000,
    cm3: 1000000,
  },
};
//Input: value
//Input:
//initialUnit-> Select[ton,kg,g,mg] to finalUnit-> Select[ton,kg,g,mg]
let initialUnit = myData.temperature.celsius; //From HTML input
let finalUnit = myData.temperature.kelvin.fahrenheit; //From HTML input
// function converter(value) {
//   console.log(value * (initialUnit / finalUnit));
// }

function converterTemperatura(value) {
  console.log(finalUnit(value));
}
converterTemperatura(283.15);
// 500g*(1g/1g)*(1kg/1000g) = 0.5kg

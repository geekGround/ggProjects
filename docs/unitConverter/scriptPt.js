// *** Unidades de medida - DATA *** //

const dadosUnidadesDeMedida = [
  {
    mg: 1 / 1000000,
    g: 1 / 1000,
    kg: 1,
    ton: 1000,
  },
  {
    mm: 1 / 1000,
    cm: 1 / 100,
    m: 1,
    km: 1000,
  },
  {
    ml: 1 / 1000000,
    cm3: 1 / 1000000,
    l: 1 / 1000,
    dm3: 1 / 1000,
    m3: 1,
  },
  {
    s: 1,
    min: 60,
    h: 3600,
    day: 86400,
    week: 604800,
    month: 2629600,
  },
  {
    celsius: {
      fahrenheit: (valor) => valor * 1.8 + 32,
      kelvin: (valor) => valor + 273.15,
    },
    fahrenheit: {
      celsius: (valor) => (valor - 32) / 1.8,
      kelvin: (valor) => (valor - 32) / 1.8 + 273.15,
    },
    kelvin: {
      celsius: (valor) => valor - 273.15,
      fahrenheit: (valor) => (valor - 273.15) * 1.8 + 32,
    },
  },
];

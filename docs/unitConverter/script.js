const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const dropdownContents = document.querySelectorAll('.dropdown-content');
const units = document.querySelectorAll('.dropdown-content p');
const unitInput = document.querySelector('.unit-input');

for (let unit of units) {
  unit.addEventListener('click', () => {
    unit.parentElement.previousElementSibling.innerText = unit.innerText;
    unit.parentElement.classList.remove('active');
    addMetrics(unit);
  });
}

for (let btn of dropdownBtns) {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('active');
  });
}

let myData = {
  mass: {
    units: ['mg', 'g', 'kg', 'ton'],
    mg: 1 / 1000, //1mg = 1/1000g,
    g: 1, //1g = 1g,
    kg: 1000, //1kg = 1000g,
    ton: 1000000, //1ton = 1000000g
  },
  temperature: {
    units: ['°C', '°F', 'K'],
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
    units: ['mm', 'cm', 'm', 'km'],
    mm: 1 / 1000,
    cm: 1 / 100,
    m: 1,
    km: 1000,
  },
  time: {
    units: ['s', 'min', 'h', 'day', 'week', 'month'],
    s: 1,
    min: 60,
    h: 3600,
    day: 86400,
    week: 604800,
    month: 2629600,
  },
  volume: {
    units: ['m3', 'ml', 'l', 'dm3', 'cm3'],
    m3: 1,
    ml: 1000000,
    l: 1000,
    dm3: 1000,
    cm3: 1000000,
  },
};

function addMetrics(unitValue) {
  const metrics = Array.from(document.querySelectorAll('.metrics'));
  let unitID = unitValue.id;
  let metricsData = myData[unitID].units;
  // 1. Remove everything inside the metricsContent
  metrics.forEach((metric) => {
    while (metric.firstChild) {
      metric.removeChild(metric.firstChild);
    }

    //Adding the first metric inside the metric btn
    metric.previousElementSibling.innerText = metricsData[0];

    // 2. Add the metrics related to the unit in the content
    metricsData.forEach((metricData) => {
      let newParagraph = document.createElement('p');
      newParagraph.innerText = metricData;
      metric.appendChild(newParagraph);
    });

    let paragraphs = Array.from(metric.querySelectorAll('p'));

    paragraphs.forEach((p) => {
      p.addEventListener('click', () => {
        metric.previousElementSibling.innerText = p.innerText;
        metric.classList.remove('active');
      });
    });
  });
}

//Input: value
//Input:
//initialUnit-> Select[ton,kg,g,mg] to finalUnit-> Select[ton,kg,g,mg]
let initialUnit = myData.temperature.celsius; //From HTML input
let finalUnit = myData.temperature.celsius.fahrenheit; //From HTML input
// function converter(value) {
//   console.log(value * (initialUnit / finalUnit));
// }

function converterTemperatura(value) {
  console.log(finalUnit(value));
}
converterTemperatura(parseInt(unitInput.value));

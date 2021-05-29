const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const dropdownContents = document.querySelectorAll('.dropdown-content');
const units = document.querySelectorAll('.dropdown-content p');
const unitInput = document.querySelector('.unit-input');
const conversorBtn = document.querySelector('.conversor-btn');
const unitIcon = document.querySelector('.unit-icon');
const unitBg = document.querySelector('.unit-bg');

function unitConversion(firstMetricText, secondMetricText, value) {
  firstMetricText = document.querySelector('#first-metric').innerText;
  secondMetricText = document.querySelector('#second-metric').innerText;
  value = parseInt(unitInput.value);
  const firstDropDownBtn = document.querySelector('.dropdown-btn');
  const result = document.querySelector('.result');
  const dropDownId = firstDropDownBtn.id;
  const metrics = Array.from(document.querySelectorAll('.metrics'));
  const firstMetricData = myData[dropDownId][firstMetricText];
  const secondMetricData = myData[dropDownId][secondMetricText];

  if (dropDownId !== 'temperature') {
    result.innerText = `${value * (firstMetricData / secondMetricData)} ${secondMetricText}`;
  } else {
    const convertTemperature =
      myData[dropDownId][firstMetricText.toLowerCase()][secondMetricText.toLowerCase()];
    result.innerText = `${convertTemperature(value)} ${secondMetricText}`;
  }
}

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

let myData = {
  mass: {
    units: ['mg', 'g', 'kg', 'ton'],
    mg: 1 / 1000, //1mg = 1/1000g,
    g: 1, //1g = 1g,
    kg: 1000, //1kg = 1000g,
    ton: 1000000, //1ton = 1000000g
  },
  temperature: {
    units: ['Celsius', 'Fahrenheit', 'Kelvin'],
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
    m3: 1000,
    ml: 0.001,
    l: 1,
    dm3: 1,
    cm3: 0.001,
  },
};

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

//Event Listeners

for (let unit of units) {
  unit.addEventListener('click', () => {
    unit.parentElement.previousElementSibling.innerText = unit.innerText;
    unit.parentElement.classList.remove('active');
    unit.parentElement.previousElementSibling.id = unit.id;

    unitIcon.src = `./img/icon_${unit.id}.png`;
    unitBg.src = `./img/bg_${unit.id}.png`;
    unitIcon.alt = `${unit.id}-icon`;
    unitBg.alt = `${unit.id}-background`;

    addMetrics(unit);
  });
}

for (let btn of dropdownBtns) {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('active');
  });
}

conversorBtn.addEventListener('click', unitConversion);

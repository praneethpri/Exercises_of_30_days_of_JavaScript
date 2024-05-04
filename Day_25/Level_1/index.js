const countriesAPI = "https://restcountries.com/v2/all";

const fetchingData = async () => {
  try {
    const fetchingCountries = await fetch(countriesAPI);
    const response = await fetchingCountries.json();
    let populationArray = [];
    response.forEach((elem) =>
      populationArray.push({ name: elem.name, population: elem.population }),
    );
    let sortedPopulationArray = populationArray.sort((a, b) => {
      return b.population - a.population;
    });
    let array = [];
    array.push(sortedPopulationArray);

    let languagesArray = [];
    let languagesNameArray = [];
    response.forEach((elem) => {
      languagesArray.push(elem.languages)
    })
    languagesArray.forEach((item) => {
      item.forEach(t => languagesNameArray.push(t.name))
    })
    array.push(languagesNameArray)

    return array;
  } catch (error) {
    console.warn(error);
  }
};

let populationButton = document.querySelector(".population");
let languageButton = document.querySelector(".languages");

let dataBoxText = document.querySelector('.data-box-text')

let dataChartBox = document.querySelector(".data-charts");

populationButton.addEventListener("click", populationDisplay);
languageButton.addEventListener("click", languagesDisplay);

async function populationDisplay() {
  let arrayNew = await fetchingData();
  let populationDataSet = arrayNew[0];
  let newPopulationArray = [];
  let countPopulation = [];
  populationDataSet.forEach((x) => countPopulation.push(x.population));
  let countedPopulation = countPopulation.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  newPopulationArray.push({ name: "World", population: countedPopulation });
  populationDataSet.forEach((a) => newPopulationArray.push(a));

dataBoxText.textContent = '10 Most populated countries in the world'

  dataChartBox.innerHTML = ""

  for (let i = 0; i < 10; i++) {
    let divNew = document.createElement("div");
    divNew.setAttribute("class", `div-box-${i}`);
    let countryNameDiv = document.createElement("div");
    countryNameDiv.textContent = `${newPopulationArray[i].name}`;
    countryNameDiv.style.margin = "8px 35px 8px 35px";
    countryNameDiv.style.fontFamily = "Montserrat, monospace";
    countryNameDiv.style.fontSize = "14pt";
    countryNameDiv.style.textAlign = "right";
    countryNameDiv.style.width = "120pt";
    divNew.appendChild(countryNameDiv);

    let mainVal = newPopulationArray[0].population;
    let percentage = Math.floor(
      (newPopulationArray[i].population / mainVal) * 500,
    );

    let boxDiv = document.createElement("div");
    boxDiv.setAttribute("class", `box-div-${i}`);
    boxDiv.style.width = "500pt";
    boxDiv.style.height = "50pt";
    boxDiv.style.marginLeft = "20pt";

    let chartDiv = document.createElement("div");
    chartDiv.setAttribute("class", `chart-div-${i}`);
    chartDiv.style.border = "none";
    chartDiv.style.height = "inherit";
    chartDiv.style.border = "none";
    chartDiv.style.backgroundColor = "#fb8004";
    chartDiv.style.width = `${percentage}pt`;

    boxDiv.appendChild(chartDiv);
    divNew.appendChild(boxDiv);

    let countryPopulation = document.createElement("div");
    countryPopulation.textContent = `${newPopulationArray[i].population.toLocaleString()}`;
    countryPopulation.style.margin = "8px 35px 8px 35px";
    countryPopulation.style.fontFamily = "Montserrat, monospace";
    countryPopulation.style.fontSize = "14pt";
    countryPopulation.style.width = "120pt";
    countryPopulation.style.textAlign = "left";
    divNew.appendChild(countryPopulation);

    divNew.style.display = "flex";
    divNew.style.justifyContent = "center";
    divNew.style.alignItems = "center";
    divNew.style.marginBottom = "10pt";

    dataChartBox.appendChild(divNew);
  }
}

async function languagesDisplay() {
  let fetchedData = await fetchingData()
  let languagesDataSet = fetchedData[1]
  let LanguageDataSet = new Set(languagesDataSet)
  let languageCountedArray = [];
  for (let i of LanguageDataSet) {
    let filtered = languagesDataSet.filter((e) => e === i)
    languageCountedArray.push({name: i, count: filtered.length})
  }
let languageCountedArraySorted = languageCountedArray.sort((a, b) => {
    return b.count - a.count
  })

dataBoxText.textContent = '10 Most Spoken languages in the world'

  dataChartBox.innerHTML = ""

  for (let j = 0; j < 10; j++) {
    let divNew = document.createElement('div')
    divNew.setAttribute('class', `lang-div-${j}`)

    let langParagraph = document.createElement('div')
    langParagraph.textContent = languageCountedArraySorted[j].name
    langParagraph.style.margin = "8px 35px 8px 35px";
    langParagraph.style.fontFamily = "Montserrat, monospace";
    langParagraph.style.fontSize = "14pt";
    langParagraph.style.textAlign = "right";
    langParagraph.style.width = "90pt";
    divNew.appendChild(langParagraph)

    let langBox = document.createElement('div')
    langBox.setAttribute('class', `lang-box-div-${j}`)
    langBox.style.height = '50pt'
    langBox.style.width = '500pt'

    let langChartDiv = document.createElement("div");
    langChartDiv.setAttribute("class", `chart-div-${j}`);
    langChartDiv.style.border = "none";
    langChartDiv.style.height = "inherit";
    langChartDiv.style.border = "none";
    langChartDiv.style.backgroundColor = "#fb8004";
    langChartDiv.style.width = `${languageCountedArraySorted[j].count * 5}pt`;

    langBox.appendChild(langChartDiv)
    divNew.appendChild(langBox)

    let languageNumber = document.createElement("div");
    languageNumber.textContent = `${languageCountedArraySorted[j].count}`;
    languageNumber.style.margin = "8px 35px 8px 35px";
    languageNumber.style.fontFamily = "Montserrat, monospace";
    languageNumber.style.fontSize = "14pt";
    languageNumber.style.width = "20pt";
    languageNumber.style.textAlign = "left";
    divNew.appendChild(languageNumber);

    divNew.style.display = "flex";
    divNew.style.justifyContent = "center";
    divNew.style.alignItems = "center";
    divNew.style.marginBottom = "10pt";

    dataChartBox.appendChild(divNew);
  }
}

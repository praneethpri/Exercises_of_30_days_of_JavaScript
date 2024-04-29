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
    return array;
  } catch (error) {
    console.warn(error);
  }
};

let populationButton = document.querySelector(".population");
let languageButton = document.querySelector(".languages");

let dataChartBox = document.querySelector(".data-charts");

populationButton.addEventListener("click", populationDisplay);

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
  for (let i = 0; i < 10; i++) {
    let divNew = document.createElement("div");
    divNew.setAttribute("class", `div-box-${i}`);
    let countryName = document.createElement("p");
    countryName.textContent = `${newPopulationArray[i].name}`;
    countryName.style.margin = "8px 35px 8px 35px";
    countryName.style.fontFamily = "Montserrat, monospace";
    countryName.style.fontSize = "14pt";
    countryName.style.textAlign = "right";
    countryName.style.width = "90px";
    divNew.appendChild(countryName);

    let mainVal = newPopulationArray[0].population;
    let percentage = Math.floor(
      (newPopulationArray[i].population / mainVal) * 500,
    );

    let boxDiv = document.createElement("div");
    boxDiv.setAttribute("class", `box-div-${i}`);
    boxDiv.style.width = "500pt";
    boxDiv.style.height = "50pt";

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
    countryPopulation.textContent = `${newPopulationArray[i].population}`;
    countryPopulation.style.margin = "8px 35px 8px 35px";
    countryPopulation.style.fontFamily = "Montserrat, monospace";
    countryPopulation.style.fontSize = "14pt";
    divNew.appendChild(countryPopulation);

    divNew.style.display = "flex";
    divNew.style.justifyContent = "center";
    divNew.style.alignItems = "center";
    divNew.style.marginBottom = "30pt";

    dataChartBox.appendChild(divNew);
  }
}

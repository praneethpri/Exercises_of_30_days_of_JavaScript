const countriesAPI = 'https://restcountries.com/v2/all'

const languageCount = async () => {
  try {
    const fetchingCountries = await fetch(countriesAPI)
    const response = await fetchingCountries.json()
    let populationArray = [];
    response.forEach((elem) => populationArray.push({name: elem.name, population: elem.population}))
    let sortedPopulationArray = populationArray.sort((a, b) => {return b.population - a.population})

    let languagesArray = [];
    response.forEach((elem) => languagesArray.push(elem.languages))
    let languagesNamesArray = [];
    languagesArray.forEach((element) => {element.forEach(e => {languagesNamesArray.push(e.name)})})
  }
  catch (error) {
    console.log(error)
  }
}

let populationButton = document.querySelector('.population')
let languageButton = document.querySelector('.languages')

populationButton.addEventListener('click', function() {

})

let dataChartBox = document.querySelector('.data-charts')

function populationDisplay(arr) {
    let newPopulationArray = [];
    let countPopulation = [];
    arr.forEach(x => countPopulation.push(x.population))
    let countedPopulation = countPopulation.reduce((acc, cur) => {return acc + cur}, 0)
    newPopulationArray.push({name: 'World', population: countedPopulation})
    arr.forEach(a => newPopulationArray.push(a))
  for (let i = 0; i < 10; i++) {
    let divNew = document.createElement('div')
    divNew.setAttribute('class', `div-box-${i}`)
    let countryName = document.createElement('p')
    countryName.textContent = `${newPopulationArray[i].name}`
    countryName.style.margin = '8px 35px 8px 35px'
    countryName.style.fontFamily = 'Montserrat, monospace'
    countryName.style.fontSize = '14pt'
    countryName.style.textAlign = 'right'
    countryName.style.width = '250px'
    divNew.appendChild(countryName)

    let boxDiv = document.createElement('div')
    boxDiv.setAttribute('class', `box-div-${i}`)
    boxDiv.style.width = '500pt'
    boxDiv.style.height = '50pt'

    let mainVal = newPopulationArray[0].population
    let num = Math.floor((newPopulationArray[i].population / mainVal) * 500)

    let chartDiv = document.createElement('div')
    chartDiv.setAttribute('class', `chart-div-${i}`)
    chartDiv.style.border = 'none'
    chartDiv.style.height = 'inherit'
    chartDiv.style.border = 'none'
    chartDiv.style.width = `${num}pt`
    chartDiv.style.backgroundColor = 'orange'

    boxDiv.appendChild(chartDiv)
    divNew.appendChild(boxDiv)

    let countryPopulation = document.createElement('div')
    countryPopulation.textContent = `${newPopulationArray[i].population}`
    countryPopulation.style.margin = '8px 35px 8px 35px'
    countryPopulation.style.fontFamily = 'Montserrat, monospace'
    countryPopulation.style.fontSize = '14pt'
    countryPopulation.style.width = '175px'
    divNew.appendChild(countryPopulation)

    divNew.style.display = 'flex'
    divNew.style.justifyContent = 'center'
    divNew.style.alignItems = 'center'
    divNew.style.marginBottom = '30pt'
    divNew.style.flexWrap = 'wrap'
    
    dataChartBox.appendChild(divNew)
  }
}

## Day 18

#### Exercise : Level 1

```js
const countriesAPI = 'https://restcountries.com/v2/all'
```

1) Read the countries API using fetch and print the name of country, capital, languages, population and area.
```js
fetch(countriesAPI).then(response => response.json()).then(data => data.forEach((elem) => console.log(elem.name, elem.capital, elem.languages, elem.population, elem.area))).catch(error => console.log(error))
```

#### Exercise : Level 2

```js
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
```

1) Print out all the cat names in to catNames variable.
```js
let catNames = async () => {
  try {
    const response = await fetch(catsAPI)
    const jsonString = await response.json()
    let arr = [];
    jsonString.forEach(element => {arr.push(element.name)});
    console.log(arr)
  }
  catch (error) {
    console.log(error)
  }
}
catNames()
```

#### Exercise : Level 3

```js
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const countriesAPI = 'https://restcountries.com/v2/all'
```

1) Read the cats api and find the average weight of cat in metric unit.
```js
const catsAPIFetching = async () => {
  try {
    const catsFetch = await fetch(catsAPI)
    const response = await catsFetch.json()
    const weightMetric = [];
    response.forEach(element => {weightMetric.push(element.weight.metric)});
    let metricWeights = [];
    weightMetric.forEach((elem) => {
      let arr = [];
      let spllitted = elem.split(/\s\-\s/);
      arr.push(spllitted)
      let array = [];
      for (let i of arr) {
        let arr = [];
        for (let j of i) {
          arr.push(parseInt(j))
        }
        array.push(arr)
      }
      metricWeights.push(array)
    })
    let builtInAverage = [];
    for (let k of metricWeights) {
      for (let l of k) {
        let average = (l[0] + l[1]) / 2
        builtInAverage.push(average)
      }
    }
    let sum = builtInAverage.reduce((acc, cur) => {return acc + cur}, 0)
    let length = builtInAverage.length
    let average = sum / length
    console.log(average)
  }
  catch (error) {
    console.log(error)
  }
}
catsAPIFetching()
```

2) Read the countries api and find out the 10 largest countries
```js
let readCountriesAPI = async () => {
  try {
    let fetchingCountries = await fetch(countriesAPI)
    let response = await fetchingCountries.json()
    let areaAndName = [];
    response.forEach(element => {areaAndName.push({['name']: element.name, ['area']: element.area})});
    let areaAndNameSorted = areaAndName.sort((a, b) => {return b.area - a.area})
    let i = 0;
    while (i < 10) {
      console.log(areaAndNameSorted[i].name)
      i++
    }
  }
  catch (error) {
    console.log(error) 
  }
}
readCountriesAPI()
```

3) Read the countries api and count total number of languages in the world used as officials.
```js
const languageCount = async () => {
  try {
    const fetchingCountries = await fetch(countriesAPI)
    const response = await fetchingCountries.json()
    let languageArray = [];
    response.forEach((elem) => languageArray.push(elem.languages))
    let languageNames = [];
    languageArray.forEach((element) => {element.forEach((e) => {languageNames.push(e.name)})})
    let LanguageNames = new Set(languageNames)
    console.log(LanguageNames.size)
  }
  catch (error) {
    console.log(error)
  }
}
languageCount()
```


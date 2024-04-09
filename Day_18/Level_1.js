const countriesAPI = 'https://restcountries.com/v2/all'

// 1) Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI).then(response => response.json()).then(data => data.forEach((elem) => console.log(elem.name, elem.capital, elem.languages, elem.population, elem.area))).catch(error => console.log(error))

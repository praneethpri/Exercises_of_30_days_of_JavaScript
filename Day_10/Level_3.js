const countries = require('./countries')

// 1) How many languages are there in the countries object file.
let languages = [];
countries.forEach((obj) => languages.push(obj.languages))
let languagesFlattened = languages.flat()
let Languages = new Set(languagesFlattened)

// 2) Use the countries data to find the 10 most spoken languages
function mostSpokenLanguages(arr, count) {
  let languages = [];
  arr.forEach((obj) => languages.push(obj.languages))
  let languagesFlattened = languages.flat()
  let Languages = new Set(languagesFlattened)
  let langCount = [];
  Languages.forEach((cou) => langCount.push((languagesFlattened.filter((item) => item === cou)).length))
  let returnObj = [];
  let langArray = Languages.values()
  console.log(langArray)
}

mostSpokenLanguages(countries, 15)

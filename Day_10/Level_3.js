const countries = require('./countries')

// 1) How many languages are there in the countries object file.
let languages = [];
countries.forEach((obj) => languages.push(obj.languages))
let languagesFlattened = languages.flat()
let Languages = new Set(languagesFlattened)
console.log(Languages.size)

// 2) Use the countries data to find the 10 most spoken languages
function mostSpokenLanguages(arr, count) {
  let languages = [];
  arr.forEach((obj) => languages.push(obj.languages))
  let languagesFlattened = languages.flat()
  let Languages = new Set(languagesFlattened)
  let langCount = [];
  Languages.forEach((cou) => langCount.push((languagesFlattened.filter((item) => item === cou)).length))
  let languagesArray = [];
  for (let x of Languages) {
    languagesArray.push(x)
  }
  let obj = [];
  for (let i = 0; i < languagesArray.length; i++) {
    obj.push({['language']: languagesArray[i], ['count']: langCount[i]})
  }
  let returnOutput = obj.sort((a, b) => b.count - a.count)
  let returnObj = [];
  for (let t of obj) {
    returnObj.push({[t.language]: t.count})
  }
  for (let q = 0; q < count; q++) {
    console.log(returnObj[q])
  }
}

mostSpokenLanguages(countries, 10)

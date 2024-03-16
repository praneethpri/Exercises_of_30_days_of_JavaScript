const countries = require('./countries')

// 1) How many languages are there in the countries object file.
let languages = [];
countries.forEach((obj) => languages.push(obj.languages))
languagesFlattened = languages.flat()
let Languages = new Set(languagesFlattened)

// 2) Use the countries data to find the 10 most spoken languagesFlattened
let languagesCount = [];
for (let i of Languages) {
  let num = languagesFlattened.filter((elem) => elem === i).length
  languagesCount.push({[i]: num})
}
let languagesCountChoosen = [];
languagesCount.forEach((obj) => languagesCountChoosen.push(Object.values(obj)))
let languagesCountChoosenFlattened = languagesCountChoosen.flat()
let languagesCountSorted = languagesCountChoosenFlattened.sort((a, b) => {return b - a})
let indexes = [];
console.log(indexes)

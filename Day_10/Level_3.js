const countries = require('./countries')

// 1) How many languages are there in the countries object file.
let languages = [];
countries.forEach((obj) => languages.push(obj.languages))
languagesFlattened = languages.flat()
let Languages = new Set(languagesFlattened)

// 2) Use the countries data to find the 10 most spoken languages
function mostSpokenLanguages() {

}

mostSpokenLanguages()

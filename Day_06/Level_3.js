const countries = require('./assets/countries')
const webTechs = require('./assets/web_techs')
const mernStack = require('./assets/mern_stack')
const countriesWithInformation = require('./assets/countries-with-information')

// 1) Copy countries array(Avoid mutation)
let countriesNew = [];
for (let i of countries) {
  countriesNew.push(i)
}
console.log(countriesNew)

// 2) Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let countries2 = [];
for (let j of countries) {
  countries2.push(j)
}
let sortedCountries = countries2.sort()
console.log(sortedCountries)


// 3) Sort the webTechs array and mernStack array 
let webTechs2 = [];
for (let k of webTechs) {
  webTechs2.push(k)
}
let sortedWebTechs = webTechs2.sort()

let mernStack2 = [];
for (let l of mernStack) {
  mernStack2.push(l)
}
let sortedMernStack = mernStack2.sort()
console.log(sortedMernStack)

// 4) Extract all the countries contain the word 'land' from the countries array and print it as array
let countriesContainWordLand = [];
for (let m of countries) {
  if (m.includes('land')) {
    countriesContainWordLand.push(m)
  }
}
console.log(countriesContainWordLand)

// 5) Find the country containing the hightest number of characters in the countries array
let characterCount = [];
for (let n of countries) {
  characterCount.push(n.length)
}
let index = characterCount.indexOf(Math.max(...characterCount))
let countryWithHighestNumberOfCharacters = countries[index]
console.log(countryWithHighestNumberOfCharacters)

// 6) Extract all the countries containing only four characters from the countries array and print it as array 
let countriesWithFourLetters = [];
for (let o of countriesWithInformation) {
  if (o.length === 4) {
    countriesWithFourLetters.push(o)
  }
}
console.log(countriesWithFourLetters)

// 7) Extract all the countries containing two or more words from the countries array and print it as array
let twoWordedCountries = [];
for (let p of countriesWithInformation) {
  if (p.includes(' ')) {
    twoWordedCountries.push(p)
  }
}
console.log(twoWordedCountries)

// 8) Reverse the countries array and capitalize each country and stored it as an array
let countriesReversedAndCapitalized = [];
for (let q of countriesWithInformation) {
  countriesReversedAndCapitalized.unshift(q.toUpperCase())
}
console.log(countriesReversedAndCapitalized)

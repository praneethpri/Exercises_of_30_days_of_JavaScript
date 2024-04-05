const countries = require('./assets/countries')
const webTechs = require('./assets/web_techs')

// 1) Develop a small script which generate any number of characters random id:


// 2) Write a script which generates a random hexadecimal number.
let hexadecimalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
let arr = ['#'];
for (let i = 0; i < 6; i++) {
  let num = Math.floor(Math.random() * hexadecimalCharacters.length)
  arr.push(hexadecimalCharacters[num].toString())
}
let hexadecimalNumber = arr.join('')
console.log(hexadecimalNumber)

// 3) Write a script which generates a random rgb color number.
let j = 0;
let rgbColorCodes = [];
while (j < 3) {
  let num = Math.floor(Math.random() * 256)
  rgbColorCodes.push(num)
  j++
}
let rgbString = `rgb(${rgbColorCodes[0]},${rgbColorCodes[1]},${rgbColorCodes[2]})`
console.log(rgbString)

// 4) Using the above countries array, create the following new array.
let countriesUpperCased = [];
for (let cou of countries) {
  countriesUpperCased.push(cou.toUpperCase())
}
console.log(countriesUpperCased)

// 5) Using the above countries array, create an array for countries length'.
let countriesLength = [];
for (let country of countries) {
  countriesLength.push(country.length)
}
console.log(countriesLength)

// 6) Use the countries array to create the following array of arrays:
let returnArrays = [];
for (let countryName of countries) {
  let arr = [];
  arr.push(countryName)
  let firstThreeLetters = [];
  let i = 0;
  while (i < 3) {
    firstThreeLetters.push(countryName[i].toUpperCase())
    i++
  }
  let string = firstThreeLetters.join('')
  arr.push(string)
  arr.push(countryName.length)
  returnArrays.push(arr)
}
console.log(returnArrays)


// 7) In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let countriesEndsWithWordLand = [];
for (let name of countries) {
  if (name.endsWith('land')) {
    countriesEndsWithWordLand.push(name)
  }
}
if (countriesEndsWithWordLand.length === 0) {
  console.log('All these countries are without land')
}
else {
console.log(countriesEndsWithWordLand)
}

// 8) In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let countriesEndsWithWordIA = [];
for (let couName of countries) {
  if (couName.endsWith('ia')) {
    countriesEndsWithWordIA.push(couName)
  }
}
if (countriesEndsWithWordIA.length === 0) {
  console.log('These are countries ends without ia')
}
else {
  console.log(countriesEndsWithWordIA)
}

// 9) Using the above countries array, find the country containing the biggest number of characters.
let countryNameLength = [];
for (let country of countries) {
  countryNameLength.push(country.length)
}
let biggestNameIndex = countryNameLength.indexOf(Math.max(...countryNameLength))
let biggestName = countries[biggestNameIndex]
console.log(biggestName)

// 10) Using the above countries array, find the country containing only 5 characters.
let countryWithFiveCharacters = [];
for (let x of countries) {
  if (x.length === 5) {
    countryWithFiveCharacters.push(x)
  }
}
console.log(countryWithFiveCharacters)

// 11) Find the longest word in the webTechs array
let longestWord = [];
for (let u of countries) {
  longestWord.push(u.length)
}

// 12) Use the webTechs array to create the following array of arrays:
let returnArrray = [];
for (let f of webTechs) {
  let arr = [];
  arr.push(f)
  arr.push(f.length)
  returnArrray.push(arr)
}
console.log(returnArrray)

// 13) An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mernStack = ['MongoDB', 'Express', 'React', 'Node']
let acronymArray = [];
for (let g of mernStack) {
  acronymArray.push(g[0])
}
let acronym = acronymArray.join('')
console.log(acronym)

// 14) Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let q of array) {
  console.log(q)
}

// 15) This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ['banana', 'orange', 'mango', 'lemon']
let fruitsReversed = [];
for (let y of fruits) {
  fruitsReversed.unshift(y)
}
console.log(fruitsReversed)

// 16) Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
for (let c of fullStack) {
  for (let d of c) {
    console.log(d)
  }
}

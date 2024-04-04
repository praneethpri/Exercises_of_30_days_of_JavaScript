const countries = require('./Level_2/countries');
const webTechs = require('./Level_2/web_techs');

// 1) Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file 

// 2) First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let textSplitted = text.split(/\s|,|\./)

// 3) In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//   - add 'Meat' in the beginning of your shopping cart if it has not been already added 
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat')
}

//   - add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar')
}

//   - remove 'Honey' if you are allergic to Honey
let allergicToHoney = true
if (allergicToHoney == true) {
  let index = shoppingCart.indexOf('Honey')
  let splitted = shoppingCart.slice(0, index)
  let splitted2 = shoppingCart.splice(index + 1, shoppingCart.length)
  let returnArray = splitted.concat(splitted2)
}

//   - modify Tea to 'Green Tea'
let indexOfTea = shoppingCart.indexOf('Tea')
shoppingCart[indexOfTea] = 'Green Tea'

// 4) In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA')
}
else {
  countries.push('Ethiopia')
}

// 5) In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocessor.')
}
else {
  webTechs.push('Sass')
}

// 6) Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

## Day 05

#### Exercise : Level 1

1) Declare an empty array
```js
let arr = [];
```

2) Declare an array with more than 5 number of elements
```js
let arr2 = [1, null, undefined, 'strings', true]
```

3) Find the length of your array
```js
console.log(arr2.length)
```

4) Get the first item, the middle item and the last item of the array
  - First Item
```js
console.log(arr2[0])
```
  - Middle Item
```js
console.log(arr2[Math.floor(arr2.length / 2)])
```
  - Last Item
```js
console.log(arr2[arr2.length - 1])
```

5) Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
```js
let mixedDataTypes = ['Strings', 11, 126e7, false, undefined, null, {}]
```

6) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
```js
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
```

7) Print the array using console.log()
```js
console.log(itCompanies)
```

8) Print the number of companies in the array
```js
console.log(itCompanies.length)
```

9) Print the first company, middle and last company
  - First company
```js
console.log(itCompanies[0])
```
  - Middle company
```js
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
```
  - Last company
```js
console.log(itCompanies[itCompanies.length - 1])
```

10) Print out each company
```js
itCompanies.forEach((elem) => console.log(elem))
```

11) Change each company name to uppercase one by one and print them out
```js
itCompanies.forEach((elem) => console.log(elem.toUpperCase()))
```

12) Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. 
```js
let poppedItem = itCompanies.pop()
let itCompaniesConverted = [];
for (let x = 0; x < itCompanies.length - 1; x++) {
  itCompaniesConverted.push(itCompanies[x] + ', ')
}
itCompaniesConverted.push(itCompanies[itCompanies.length - 1])
let itCompaniesJoined = itCompaniesConverted.join('')
console.log(`${itCompaniesJoined} and ${poppedItem} are big IT companies.`)
```

13) Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
```js
if (itCompanies.includes('Apple')) {
  console.log('Apple')
}
else {
  console.log('Company is not found.')
}
```

14) Filter out companies which have more than one 'o' without the filter method
```js
function filteringCompanies() {
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  let arr = [];
  itCompanies.forEach((elem) => {
    if (elem.includes('o')) {
      let index1 = elem.indexOf('o')
      let index2 = elem.lastIndexOf('o') 
      if (index1 !== index2) {
        arr.push(elem)
      }
    }
  })
  console.log(arr)
}
filteringCompanies()
```

15) Sort the array using sort() method
```js
let itCompaniesSorted = itCompanies.sort()
console.log(itCompaniesSorted)
```

16) Reverse the array using reverse() method
```js
let itCompaniesReversed = itCompanies.reverse()
console.log(itCompaniesReversed)
```

17) Slice out the first 3 companies from the array
```js
let itCompaniesSliced = itCompanies.slice(0, 3)
console.log(itCompaniesSliced)
```

18) Slice out the last 3 companies from the array
```js
let itCompaniesSliced2 = itCompanies.slice(itCompanies.length - 3, itCompanies.length)
console.log(itCompaniesSliced2)
```

19) Slice out the middle IT company or companies from the array
```js
if (itCompanies.length % 2 === 1) {
  let index = Math.floor(itCompanies.length / 2)
  let sliced = itCompanies.slice(index, index + 1)
  console.log(sliced)
}
else {
  let index = itCompanies.length / 2
  let sliced = itCompanies.slice(index - 1, index + 1)
  console.log(sliced)
}
```

20) Remove the first IT company from the array
```js
function removeFirstCompany() {
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  itCompanies.shift()
  console.log(itCompanies)
}
removeFirstCompany()
```

21) Remove the middle IT company or companies from the array
```js
function removeMiddleCompany() {
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  let middleIndex = Math.floor(itCompanies.length / 2)
  let sliced1 = itCompanies.slice(0, middleIndex)
  let sliced2 = itCompanies.slice(middleIndex + 1, itCompanies.length)
  let returnArray = sliced1.concat(sliced2)
  console.log(returnArray)
}
removeMiddleCompany()
```

22) Remove the last IT company from the array 
```js
function removeLastCompany() {
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  itCompanies.pop()
  console.log(itCompanies)
}
removeLastCompany()
```

23) Remove all IT companies
```js
function removeAllITCompanies() {
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  itCompanies = []
  console.log(itCompanies)
}
removeAllITCompanies()
```

#### Exercise : Level 2

```js
const countries = require('./Level_2/countries');
const webTechs = require('./Level_2/web_techs');
```

1) Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file 

2) First remove all the punctuations and change the string to array and count the number of words in the array
```js
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let textSplitted = text.split(/\s|,|\./)
```

3) In the following shopping cart add, remove, edit items
```js
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
```
  - add 'Meat' in the beginning of your shopping cart if it has not been already added 
```js
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat')
}
```

  - add Sugar at the end of you shopping cart if it has not been already added
```js
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar')
}
```

  - remove 'Honey' if you are allergic to Honey
```js
let allergicToHoney = true
if (allergicToHoney == true) {
  let index = shoppingCart.indexOf('Honey')
  let splitted = shoppingCart.slice(0, index)
  let splitted2 = shoppingCart.splice(index + 1, shoppingCart.length)
  let returnArray = splitted.concat(splitted2)
}
```

  - modify Tea to 'Green Tea'
```js
let indexOfTea = shoppingCart.indexOf('Tea')
shoppingCart[indexOfTea] = 'Green Tea'
```

4) In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
```js
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA')
}
else {
  countries.push('Ethiopia')
}
```

5) In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
```js
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocessor.')
}
else {
  webTechs.push('Sass')
}
```

6) Concatenate the following two variables and store it in a fullStack variable.
```js
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)
```

#### Exercise : Level 3

```js
const countries = require('./countries')
```

1) The following is an array of 10 students ages:
```js
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
```

  - Sort the array and find the min and max age
```js
let maxAgeValue = Math.max(...ages)
let minAgeValue = Math.min(...ages)
console.log(maxAgeValue)
console.log(minAgeValue)
```

  - Find the median age(one middle item or two middle items divided by two)
```js
if (ages.length % 2 === 1) {
  let index = Math.floor(ages.length / 2)
  console.log(ages[index])
}
else {
  let index = ages.length / 2
  let first = ages[index - 1]
  let second = ages[index]
  let median = (first + second) / 2
  console.log(median)
}
```

  - Find the average age(all items divided by number of items)
```js
let agesSum = ages.reduce((acc, cur) => {return acc + cur}, 0)
let average = agesSum / ages.length
console.log(average)
```

  - Find the range of the ages(max minus min)
```js
let range = maxAgeValue - minAgeValue
console.log(range)
```

  - Compare the value of (min - average) and (max - average), use abs() method
```js
let minMinusAverage = Math.abs(minAgeValue - average)
let maxMinusAverage = Math.abs(maxAgeValue - average)
console.log(minMinusAverage)
console.log(maxMinusAverage)
```

1) Slice the first ten countries from the countries array
```js
let countriesSliced = countries.slice(0, 11)
console.log(countriesSliced)
```

2) Find the middle country(ies) in the countries array
```js
if (countries.length % 2 === 1) {
  let index = Math.floor(countries.length / 2)
  console.log(countries[index])
}
else {
  let index = countries.length / 2
  let first = countries[index - 1]
  let second = countries[index]
  console.log(first)
  console.log(second)
}
```

3) Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
```js
if (countries.length % 2 === 1) {
  let index = Math.floor(countries.length / 2) + 1
  let countriesSliced1 = countries.slice(0, index)
  let countriesSliced2 = countries.slice(index + 1, countries.length - 1)
  console.log(countriesSliced1.length)
  console.log(countriesSliced2.length)
}
else {
  let index = countries.length / 2
  let countriesSliced1 = countries.slice(0, index - 1)
  let countriesSliced2 = countries.slice(index, countries.length - 1)
  console.log(countriesSliced1.length)
  console.log(countriesSliced2.length)
}
```

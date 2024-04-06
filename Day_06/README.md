## Day 06

#### Exercise : Level 1

1) Iterate 0 to 10 using for loop, do the same using while and do while loop
  - For loop
```js
for (let i = 1; i < 11; i++) {
  console.log(i)
}
```

  - While Loop
```js
let j = 1
while (j < 11) {
  console.log(j)
  j++
}
```

  - Do While Loop
```js
let k = 1;
do {
  console.log(k)
  k++
} while (k < 11)
```

2) Iterate 10 to 0 using for loop, do the same using while and do while Loop
  - For Loop
```js
for (let l = 10; l > 0; l--) {
  console.log(l)
}
```

  - While Loop
```js
let m = 10;
while (m > 0) {
  console.log(m)
  m--
}
```

  - Do While Loop
```js
let p = 10;
do {
  console.log(p)
  p--
} while (p > 0)
```

3) Iterate 0 to n using for loop
```js
let n = 5;
for (let o = 0; o <= n; n++) {
  console.log(o)
}
```

4) Write a loop that makes the following pattern using console.log():
```js
for (let s = 0; s < 8; s++) {
  let returnArr = [];
  for (let q = 0; q < s; q++) {
    returnArr.push('#')
  }
  let returnString = returnArr.join('')
  console.log(returnString)
}
```

5) Use loop to print the following pattern:
```js
for (let r = 0; r < 11; r++) {
  let num = 0;
  for (let t = 0; t < r; t++) {
    num++
  }
  console.log(`${num}\tx\t${num}\t=\t${num * num}`)
}
```

6) Using loop print the following pattern
```js
console.log(`i\ti^2\ti^3`)
for (let u = 0; u < 11; u++) {
  let num = 0;
  for (let v = 0; v < u; v++) {
    num++
  }
  console.log(`${num}\t${num ** 2}\t${num ** 3}`)
}
```

7) Use for loop to iterate from 0 to 100 and print only even numbers
```js
for (let w = 0; w < 101; w++) {
  if (w % 2 === 0) {
    console.log(w)
  }
}
```

8) Use for loop to iterate from 0 to 100 and print only odd numbers
```js
for (let x = 0; x < 101; x++) {
  if (x % 2 === 1) {
    console.log(x)
  }
}
```

9) Use for loop to iterate from 0 to 100 and print only prime numbers
```js
/*let number = 100;
for (let y = 0; y < number; y++) {
  for (let z = 0; z < Math.sqrt(number); z++) {
    if (number % z === 0) {
      console.log(false)
    }
    else {
      console.log(true)
    }
  }
}*/
/* 
 needs to be fixed
  */
```

10) Use for loop to iterate from 0 to 100 and print the sum of all numbers.

```js
let sum = 0
for (let a = 0; a < 101; a++) {
  sum += a
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`)
```

11) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
```js
let returnArray = [];
let sumOfOdds = 0;
let sumOfEvens = 0;
for (let d = 0; d < 101; d++) {
  if (d % 2 === 1) {
    sumOfOdds += d
  }
  else {
    sumOfEvens += d
  }
}
console.log(`The sum of all evens from 0 to 100 is ${sumOfEvens}. And the sum of all odds from 0 to 100 is ${sumOfOdds}.`)
```

12) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
```js
let returnArr = [];
let oddsCount = 0
let evensCount = 0
for (let b = 0; b < 101; b++) {
  if (b % 2 === 1) {
    oddsCount += b
  }
  else {
    evensCount += b
  }
}
returnArr.push(evensCount, oddsCount)
console.log(returnArr)
```

13) Develop a small script which generate array of 5 random numbers
```js
let arr = [];
let c = 0;
while (c < 5) {
  arr.push(Math.floor(Math.random() * 100))
  c++
}
console.log(arr)
```

14) Develop a small script which generate array of 5 random numbers and the numbers must be unique
```js
let array = [];
let e = 0;
let f = 5;
while (e < f) {
  let g = Math.floor(Math.random() * 100)
  if (array.includes(g)) {
    f++
    e++
    continue
  }
  else {
    array.push(g)
    e++
  }
}
console.log(array)
```

15) Develop a small script which generate a six characters random id:
```js
let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let chosenCharacters = [];
for (let h = 0; h < 6; h++) {
  let num = Math.floor(Math.random() * characters.length)
  chosenCharacters.push(characters[num].toString())
}
let randomString = chosenCharacters.join('')
console.log(randomString)
```

#### Exercise : Level 2

```js
const countries = require('./assets/countries')
const webTechs = require('./assets/web_techs')
```

1) Develop a small script which generate any number of characters random id:
```js
/* needs fixes */
```

2) Write a script which generates a random hexadecimal number.
```js
let hexadecimalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
let arr = ['#'];
for (let i = 0; i < 6; i++) {
  let num = Math.floor(Math.random() * hexadecimalCharacters.length)
  arr.push(hexadecimalCharacters[num].toString())
}
let hexadecimalNumber = arr.join('')
console.log(hexadecimalNumber)
```

3) Write a script which generates a random rgb color number.
```js
let j = 0;
let rgbColorCodes = [];
while (j < 3) {
  let num = Math.floor(Math.random() * 256)
  rgbColorCodes.push(num)
  j++
}
let rgbString = `rgb(${rgbColorCodes[0]},${rgbColorCodes[1]},${rgbColorCodes[2]})`
console.log(rgbString)
```

4) Using the above countries array, create the following new array.
```js
let countriesUpperCased = [];
for (let cou of countries) {
  countriesUpperCased.push(cou.toUpperCase())
}
console.log(countriesUpperCased)
```

5) Using the above countries array, create an array for countries length'.
```js
let countriesLength = [];
for (let country of countries) {
  countriesLength.push(country.length)
}
console.log(countriesLength)
```

6) Use the countries array to create the following array of arrays:
```js
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
```


7) In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
```js
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
```

8) In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
```js
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
```

9) Using the above countries array, find the country containing the biggest number of characters.
```js
let countryNameLength = [];
for (let country of countries) {
  countryNameLength.push(country.length)
}
let biggestNameIndex = countryNameLength.indexOf(Math.max(...countryNameLength))
let biggestName = countries[biggestNameIndex]
console.log(biggestName)
```

10) Using the above countries array, find the country containing only 5 characters.
```js
let countryWithFiveCharacters = [];
for (let x of countries) {
  if (x.length === 5) {
    countryWithFiveCharacters.push(x)
  }
}
console.log(countryWithFiveCharacters)
```

11) Find the longest word in the webTechs array
```js
let longestWord = [];
for (let u of countries) {
  longestWord.push(u.length)
}
```

12) Use the webTechs array to create the following array of arrays:
```js
let returnArrray = [];
for (let f of webTechs) {
  let arr = [];
  arr.push(f)
  arr.push(f.length)
  returnArrray.push(arr)
}
console.log(returnArrray)
```

13) An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
```js
let mernStack = ['MongoDB', 'Express', 'React', 'Node']
let acronymArray = [];
for (let g of mernStack) {
  acronymArray.push(g[0])
}
let acronym = acronymArray.join('')
console.log(acronym)
```

14) Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
```js
let array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let q of array) {
  console.log(q)
}
```

15) This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
```js
let fruits = ['banana', 'orange', 'mango', 'lemon']
let fruitsReversed = [];
for (let y of fruits) {
  fruitsReversed.unshift(y)
}
console.log(fruitsReversed)
```

16) Print all the elements of array as shown below.
```js
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
for (let c of fullStack) {
  for (let d of c) {
    console.log(d)
  }
}
```

#### Exercise : Level 3

```js
const countries = require('./assets/countries')
const webTechs = require('./assets/web_techs')
const mernStack = require('./assets/mern_stack')
const countriesWithInformation = require('./assets/countries-with-information')
```

1) Copy countries array(Avoid mutation)
```js
let countriesNew = [];
for (let i of countries) {
  countriesNew.push(i)
}
console.log(countriesNew)
```

2) Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
```js
let countries2 = [];
for (let j of countries) {
  countries2.push(j)
}
let sortedCountries = countries2.sort()
console.log(sortedCountries)
```

3) Sort the webTechs array and mernStack array 
```js
let webTechs2 = [];
for (let k of webTechs) {
  webTechs2.push(k)
}
let sortedWebTechs = webTechs2.sort()
```
```js
let mernStack2 = [];
for (let l of mernStack) {
  mernStack2.push(l)
}
let sortedMernStack = mernStack2.sort()
console.log(sortedMernStack)
```

4) Extract all the countries contain the word 'land' from the countries array and print it as array
```js
let countriesContainWordLand = [];
for (let m of countries) {
  if (m.includes('land')) {
    countriesContainWordLand.push(m)
  }
}
console.log(countriesContainWordLand)
```

5) Find the country containing the hightest number of characters in the countries array
```js
let characterCount = [];
for (let n of countries) {
  characterCount.push(n.length)
}
let index = characterCount.indexOf(Math.max(...characterCount))
let countryWithHighestNumberOfCharacters = countries[index]
console.log(countryWithHighestNumberOfCharacters)
```

6) Extract all the countries containing only four characters from the countries array and print it as array 
```js
let countriesWithFourLetters = [];
for (let o of countriesWithInformation) {
  if (o.length === 4) {
    countriesWithFourLetters.push(o)
  }
}
console.log(countriesWithFourLetters)
```

7) Extract all the countries containing two or more words from the countries array and print it as array
```js
let twoWordedCountries = [];
for (let p of countriesWithInformation) {
  if (p.includes(' ')) {
    twoWordedCountries.push(p)
  }
}
console.log(twoWordedCountries)
```

8) Reverse the countries array and capitalize each country and stored it as an array
```js
let countriesReversedAndCapitalized = [];
for (let q of countriesWithInformation) {
  countriesReversedAndCapitalized.unshift(q.toUpperCase())
}
console.log(countriesReversedAndCapitalized)
```


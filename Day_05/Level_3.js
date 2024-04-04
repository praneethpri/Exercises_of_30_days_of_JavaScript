const countries = require('./countries')

// 1) The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//   - Sort the array and find the min and max age
let maxAgeValue = Math.max(...ages)
let minAgeValue = Math.min(...ages)
console.log(maxAgeValue)
console.log(minAgeValue)

//   - Find the median age(one middle item or two middle items divided by two)
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

//   - Find the average age(all items divided by number of items)
let agesSum = ages.reduce((acc, cur) => {return acc + cur}, 0)
let average = agesSum / ages.length
console.log(average)

//   - Find the range of the ages(max minus min)
let range = maxAgeValue - minAgeValue
console.log(range)

//   - Compare the value of (min - average) and (max - average), use abs() method
let minMinusAverage = Math.abs(minAgeValue - average)
let maxMinusAverage = Math.abs(maxAgeValue - average)
console.log(minMinusAverage)
console.log(maxMinusAverage)

// 1) Slice the first ten countries from the countries array
let countriesSliced = countries.slice(0, 11)
console.log(countriesSliced)

// 2) Find the middle country(ies) in the countries array
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

// 3) Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
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

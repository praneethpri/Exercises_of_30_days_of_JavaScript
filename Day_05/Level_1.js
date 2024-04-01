const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

// 1) Declare an empty array
let arr = [];

// 2) Declare an array with more than 5 number of elements
let arr2 = [1, null, undefined, 'strings', true]

// 3) Find the length of your array
console.log(arr2.length)

// 4) Get the first item, the middle item and the last item of the array
//   - First Item
console.log(arr2[0])
//   - Middle Item
console.log(arr2[Math.floor(arr2.length / 2)])
//   - Last Item
console.log(arr2[arr2.length - 1])

// 5) Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ['Strings', 11, 126e7, false, undefined, null, {}]

// 6) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7) Print the array using console.log()
console.log(itCompanies)

// 8) Print the number of companies in the array
console.log(itCompanies.length)

// 9) Print the first company, middle and last company
//   - First company
console.log(itCompanies[0])
//   - Middle company
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
//   - Last company
console.log(itCompanies[itCompanies.length - 1])

// 10) Print out each company
itCompanies.forEach((elem) => console.log(elem))

// 11) Change each company name to uppercase one by one and print them out
itCompanies.forEach((elem) => console.log(elem.toUpperCase()))

// 12) Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. 

// 13) Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes('Apple')) {
  console.log('Apple')
}
else {
  console.log('Company is not found.')
}

// 14) Filter out companies which have more than one 'o' without the filter method

// 15) Sort the array using sort() method
let itCompaniesSorted = itCompanies.sort()
console.log(itCompaniesSorted)

// 16) Reverse the array using reverse() method
let itCompaniesReversed = itCompanies.reverse()
console.log(itCompaniesReversed)

// 17) Slice out the first 3 companies from the array
let itCompaniesSliced = itCompanies.slice(0, 3)
console.log(itCompaniesSliced)

// 18) Slice out the last 3 companies from the array
let itCompaniesSliced2 = itCompanies.slice(itCompanies.length - 3, itCompanies.length)
console.log(itCompaniesSliced2)

// 19) Slice out the middle IT company or companies from the array
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

// 20) Remove the first IT company from the array
function removeFirstCompany() {
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  itCompanies.shift()
  console.log(itCompanies)
}
removeFirstCompany()

// 21) Remove the middle IT company or companies from the array
function removeMiddleCompany() {
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  let middleIndex = Math.floor(itCompanies.length / 2)
  let sliced1 = itCompanies.slice(0, middleIndex)
  let sliced2 = itCompanies.slice(middleIndex + 1, itCompanies.length)
  let returnArray = sliced1.concat(sliced2)
  console.log(returnArray)
}
removeMiddleCompany()

// 22) Remove the last IT company from the array 
function removeLastCompany() {
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  itCompanies.pop()
  console.log(itCompanies)
}
removeLastCompany()

// 23) Remove all IT companies
function removeAllITCompanies() {
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  console.log(itCompanies.length)
  let index = 0
  for (let a = 0; a < itCompanies.length; a++) {
    index++
  }
  console.log(itCompanies)
  console.log(index)
}
removeAllITCompanies()

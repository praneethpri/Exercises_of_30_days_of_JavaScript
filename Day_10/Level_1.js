const countries = ['Finland', 'Sweden', 'Norway']
// 1) Create an empty set 
let newlyCreateSet = new Set()

// 2) Create a set containing 0 to 10 using loop
let countsCreated = new Set()
for (let i = 1; i <= 10; i++) {
  countsCreated.add(i)
}

// 3)Remove an element from a set 
let removeElement = new Set()
for (let j = 0; j < 10; j++) {
  removeElement.add(j)
}
removeElement.delete(8)

// 4) Clear a set
let clearSet = new Set()
for (let k = 0; k < 10; k++) {
  clearSet.add(k)
}
clearSet.clear()

// 5)Create a set of 5 string elements from array 
let arr = ['Blue', 'Orange', 'Red', 'Black', 'White']
let newSet = new Set(arr)

// 6) Create a map of countries and number of characters of a country 
let array = [];
for (let i of countries) {
  let arr2 = [];
  arr2.push(i)
  arr2.push(i.length)
  array.push(arr2)
}
let countriesMap = new Map(array)

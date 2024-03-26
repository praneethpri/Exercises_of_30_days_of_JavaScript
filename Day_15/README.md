## Day 15

#### Exercise : Level 1

1) Create an Animal class. The class will have name, age, color, legs properties and create different methods
```javascript
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
}
```

2) Create a Dog and Cat child class from the Animal Class.
```javascript
const dog = new Animal('Lassie', 5, 'Brown', 4)
const cat = new Animal('Kitty', 2, 'White', 4)
console.log(dog)
console.log(cat)
```
```javascript
module.exports = Animal;
```
#### Exercise : Level 2

```javascript
const Animal = require('./Level_1')
```

1) Override the method you create in Animal class
```javascript
class Bird extends Animal {
  constructor(name, age, color, legs, wings) {
    super(name, age, color, legs)
    this.wings = wings;
  }
}
```
```javascript
const parrot = new Bird('Peththappu', 1, 'Green', 2, true)
console.log(parrot)
```

#### Exercise : Level 3

1) Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
```javascript
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
```
```javascript
class Statistics {
  constructor(arr) {
    this.arr = arr;
  }
  count(arr) {
    return arr.length
  }
  sum(arr) {
    let sum = arr.reduce((acc, cur) => {return acc + cur}, 0)
    return sum
  }
  min(arr) {
    return Math.min(...arr)
  }
  max(arr) {
    return Math.max(...arr)
  }
  range(arr) {
    return Math.max(...arr) - Math.min(...arr)
  }
  mean(arr) {
    let sum = arr.reduce((acc, cur) => {return acc + cur}, 0)
    let count = arr.length
    let mean = sum / count
    return mean
  }
  median(arr) {
    let sorted = arr.sort((a, b) => {return a - b}, 0)
    let count = arr.length
    if (count % 2 === 1) {
      let num = ((count - 1) / 2) + 1
      return sorted[num]
    }
    else {
      let numMin = (count / 2) - 1
      let numMax = (count / 2) + 1
      let mean = (numMin + numMax) / 2
      return mean
    }
  }
  mode(arr) {
    let arrSet = new Set(arr)
    let arrx = [];
    let arry = [];
    for (let i of arrSet) {
      arrx.push(arr.filter((elem) => elem === i).length)
      arry.push(i)
    }
    let maxNum = Math.max(...arrx)
    let maxNumIndex = arrx.indexOf(maxNum)
    return arry[maxNumIndex], maxNum;
  }
  variance(arr) {
    let sum = arr.reduce((acc, cur) => {return acc + cur}, 0)
    let count = arr.length
    let average = sum / count
    let xixbar = [];
    for (let i of arr) {
      xixbar.push((i - average) ** 2)
    }
    let sigmaXiXbar = xixbar.reduce((acc, cur) => {return acc + cur}, 0)
    let variance = sigmaXiXbar / (count - 1)
    return variance
  }
  standard_deviation(arr) {
    let varianceValue = this.variance(arr)
    let standardDeviation = Math.sqrt(varianceValue)
    return standardDeviation
  }
}
```
```javascript
const x = new Statistics(ages)
console.log('Count : ', x.count(ages))
console.log('Sum : ', x.sum(ages))
console.log('Min : ', x.min(ages))
console.log('Max : ', x.max(ages))
console.log('Range : ', x.range(ages))
console.log('Mean : ', x.mean(ages))
console.log('Median : ', x.median(ages))
console.log('Mode : ', x.mode(ages))
console.log('Variance : ', x.variance(ages))
console.log('Standard Deviation : ', x.standard_deviation(ages))
```

2) Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description. 
```javascript
class PersonAccount {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = [];
    this.expenses = [];
  }
  totalIncome() {
    return this.incomes
  }
  totalExpense() {
    return this.expenses
  }
  accountInfo() {
    let returnString = `
First Name : ${this.firstName}
Last Name : ${this.lastName}
Incomes : ${this.incomes}
Expenses : ${this.expenses}
`
      return returnString;
  }
  set addIncome(newIncome) {
    this.incomes.push(newIncome)
  }
  set addExpenses(newExpense) {
    this.expenses.push(newExpense)
  }
}
```

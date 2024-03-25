// 1) Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

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

// 2) Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description. 
class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  totalIncome(newIncome) {
  }
}

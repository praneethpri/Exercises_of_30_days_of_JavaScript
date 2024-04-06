// 1) Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// 2) Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
  let solution1 = ((-b) + Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a)
  let solution2 = ((-b) - Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a)
  console.log(solution1, solution2)
}
solveQuadEquation(1, 5, 6)

// 3) Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  for (let a of arr) {
    console.log(a)
  }
}
printArray(['Dog', 'Cat', 'Cow'])

// 4) Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  let dateObj = new Date()
  let year = dateObj.getFullYear().toString()
  let month = dateObj.getMonth() + 1
  if (month.toString().length === 1) {
    month = `0${month.toString()}`
  }
  else {
    month = month.toString()
  }
  let date = dateObj.getDate().toString()
  if (date.length === 1) {
    date = `0${date}`
  }
  let hour = dateObj.getHours().toString()
  if (hour.length === 1) {
    hour = `0${hour}`
  }
  let minutes = dateObj.getMinutes().toString()
  if (minutes.length === 1) {
    minutes = `0${minutes}`
  }
  console.log(`${date}/${month}/${year} ${hour}:${minutes}`)
}
showDateTime()

// 5) Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  let a = x;
  let b = y;
  x = b;
  y = a;
  console.log(x, y)
}
swapValues(5, 3)

// 6) Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
  let returnArr = [];
  for (let k of arr) {
    returnArr.unshift(k)
  }
  console.log(returnArr)
}
reverseArray(['A', 'B', 'C'])

// 7) Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
  let returnArr = [];
  for (let k of arr) {
    returnArr.push(k.toUpperCase())
  }
  console.log(returnArr)
}
capitalizeArray(['name', 'age', 'year'])

// 8) Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let returnArr = [];
function addItem(item) {
  returnArr.push(item)
  console.log(returnArr)
}
addItem('Sugar')
addItem('Milk')

// 9) Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let array = ['Sugar', 'Milk', 'Coffee', 'Tea', 'Rice', 'Salt']
function removeItem(index) {
  if (index < array.length) {
    let first = array.slice(0, index)
    let second = array.slice(index + 1, array.length)
    let returnArr = first.concat(second)
    console.log(returnArr)
  }
  else {
    console.log('index out of range')
  }
}
removeItem(4)


// 10) Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    arr.push(i)
  }
  let sum = arr.reduce((acc, cur) => {return acc + cur}, 0)
  console.log(sum)
}
sumOfNumbers(100)

// 11) Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 1) {
      arr.push(i)
    }
  }
  let sum = arr.reduce((acc, cur) => {return acc + cur}, 0)
  console.log(sum)
}
sumOfOdds(90)

// 12) Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEvens(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      arr.push(i)
    }
  }
  let sum = arr.reduce((acc, cur) => {return acc + cur}, 0)
  console.log(sum)
}
sumOfEvens(90)

// 13) Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number. 
function evensAndOdds(number) {
  let evens = [];
  let odds = [];
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 1) {
      odds.push(i)
    }
    else {
      evens.push(i)
    }
  }
  console.log(`The number of odds are ${odds.length}.\nThe number of evens are ${evens.length}.`)
}
evensAndOdds(100)

// 14) Write a function which takes any number of arguments and return the sum of the arguments
function sumofArguments() {
  let arr = [];
  for (let i of arguments) {
    arr.push(parseInt(i))
  }
  let sum = arr.reduce((acc, cur) => {return acc + cur}, 0)
  console.log(sum)
}
sumofArguments(8, 90, 60)

// 15) Write a function which generates a randomUserIp.
function randomUserIp() {
  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(Math.floor(Math.random() * 256))
  }
  console.log(`${arr[0]}.${arr[1]}.${arr[2]}.${arr[3]}`)
}
randomUserIp()

// 16) Write a function which generates a randomMacAddress
function randomMacAddress() {
  let randomHexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let arr = [];
  let i = 0;
  while (i < 4) {
    let num1 = Math.floor(Math.random() * randomHexNum.length)
    let num2 = Math.floor(Math.random() * randomHexNum.length)
    arr.push(`${randomHexNum[num1]}${randomHexNum[num2]}`)
    i++
  }
  console.log(`${arr[0]}:${arr[1]}:${arr[2]}:${arr[3]}`)
}
randomMacAddress()

// 17) Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
  let randomHexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let arr = [];
  let i = 0;
  while (i < 6) {
    arr.push(randomHexNum[Math.floor(Math.random() * randomHexNum.length)])
    i++
  }
  console.log(`#${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}${arr[5]}`)
}
randomHexaNumberGenerator()

// 18) Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
/*function userIdGenerator() {
  let arr = [];
  while (true) {
    let num = Math.floor(Math.random() * 123)
    if (num >= 48 && num <= 57 && num >= 65 && num <= 90 && num >= 97) {
      arr.push(String.fromCharCode(num))
      arr.push(num)
      break
    }
    else {
      continue
    }
  }
  console.log(arr)
}
userIdGenerator()*/

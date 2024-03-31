// 1) Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt('Enter your age : ')
if (parseInt(age) >= 18) {
  console.log('You are old enough to drive.')
}
else if (parseInt(age) < 18) {
  let ageDifference = 18 - parseInt(age)
  console.log(`You are left with ${ageDifference} yeas to drive.`)
}
else {
  console.log('Enter a valid number.')
}


// 2) Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 26
let yourAge = prompt('Enter your age : ')
if (myAge > parseInt(yourAge)) {
  let ageDifference = myAge - parseInt(yourAge)
  console.log(`I am ${ageDifference} years older than you.`)
}
else if (myAge < parseInt(yourAge)) {
  let ageDifference = parseInt(yourAge) - myAge
  console.log(`You are ${ageDifference} years older than you.`)
}


// 3) If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4
let b = 3
//   - using if else
if (a > b) {
  console.log(`${a} is greater than ${b}`)
}
else {
  console.log(`${b} is greater than ${a}`)
}

//   - ternary operator.
(a > b) ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)

// 4) Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt('Enter a number : ')
if (parseInt(number) % 2 === 0) {
  console.log('This number is an even number.')
}
else {
  console.log('This number is an odd number.')
}

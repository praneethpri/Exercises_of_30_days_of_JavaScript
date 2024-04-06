## Day 04

#### Exercise : Level 1

1) Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
```js
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
```

2) Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
```js
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
```

3) If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
```js
let a = 4
let b = 3
```
  - using if else
```js
if (a > b) {
  console.log(`${a} is greater than ${b}`)
}
else {
  console.log(`${b} is greater than ${a}`)
}
```

  - ternary operator.
```js
let comparison = (a > b) ? `${a} is greater than ${b}` : `${b} is greater than ${a}`
console.log(comaparison)
```

4) Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
```js
let number = prompt('Enter a number : ')
if (parseInt(number) % 2 === 0) {
  console.log('This number is an even number.')
}
else {
  console.log('This number is an odd number.')
}
```

#### Exercise : Level 2

1) Write a code which can give grades to students according to theirs scores:
  - 80-100, A
  - 70-89, B
  - 60-69, C
  - 50-59, D
  - 0-49, F
```js
let score = parseInt(prompt('Enter a score : '))
if (score <= 100) {
  console.log('A')
}
else if (score <= 79) {
  console.log('B')
}
else if (score <= 69) {
  console.log('C')
}
else if (score <= 59) {
  console.log('D')
}
else {
  console.log('F')
}
```

2) Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
  - September, October or November, the season is Autumn.
  - December, January or February, the season is Winter.
  - March, April or May, the season is Spring
  - June, July or August, the season is Summer
```js
let month = prompt('Enter the month : ')
if (month === 'September' || month === 'October' || month === 'November') {
  console.log(`${month} is in Autumn season.`)
}
else if (month === 'December' || month === 'January' || month === 'February') {
  console.log(`${month} is in Winter season.`)
}
else if (month === 'March' || month === 'April' || month === 'May') {
  console.log(`${month} is in Spring season.`)
}
else if (month === 'June' || month === 'July' || month === 'August') {
  console.log(`${month} is in Summer season.`)
}
else {
  console.log('Please enter a valid month.')
}
```

3) Check if a day is weekend day or a working day. Your script will take day as an input. 
```js
let day = prompt('Enter a day : ').toLowerCase()
switch (day) {
  case 'monday':
    console.log('Monday is a working day.')
    break
  case 'tuesday':
    console.log('Tuesday is a working day.')
    break
  case 'wednesday':
    console.log('Wednesday is a working day.')
    break
  case 'thursday':
    console.log('Thursday is a working day.')
    break
  case 'friday':
    console.log('Friday is a working day.')
    break
  case 'saturday':
    console.log('Saturday is a weekend.')
    break
  case 'sunday':
    console.log('Sunday is a weekend.')
    break
  default:
    console.log('Enter a valid day.')
}
```

#### Exercise : Level 3

1) Write a program which tells the number of days in a month.
let month = prompt('Enter a valid month : ').toLowerCase()
```js
switch (month) {
  case 'january':
    console.log('January has 31 days.')
    break
  case 'february':
    console.log('February has 28 days.')
    break
  case 'march':
    console.log('March has 31 days.')
    break
  case 'april':
    console.log('April has 30 days.')
    break
  case 'may':
    console.log('May has 31 days.')
    break
  case 'june':
    console.log('June has 30 days.')
    break
  case 'july':
    console.log('July has 31 days.')
    break
  case 'august':
    console.log('August has 31 days.')
    break
  case 'september':
    console.log('September has 30 days.')
    break
  case 'october':
    console.log('October has 31 days.')
    break
  case 'november':
    console.log('November has 30 days.')
    break
  case 'december':
    console.log('December has 31 days.')
    break
  default:
    console.log('Enter a valid month.')
}
```

2) Write a program which tells the number of days in a month, now consider leap year.
```js
let enteredYear = prompt('Enter a year : ')
let enteredMonth = prompt('Enter a valid month : ').toLowerCase()
switch (enteredMonth) {
  case 'january':
    console.log('January has 31 days.')
    break
  case 'february':
    if (parseInt(enteredYear) % 4 === 0) {
      console.log('February has 29 days.')
    }
    else if (parseInt(enteredYear) % 4 !== 0) {
      console.log('February has 28 days.')
    }
    else {
      console.log('Enter a valid year')
    }
    break
  case 'march':
    console.log('March has 31 days.')
    break
  case 'april':
    console.log('April has 30 days.')
    break
  case 'may':
    console.log('May has 31 days.')
    break
  case 'june':
    console.log('June has 30 days.')
    break
  case 'july':
    console.log('July has 31 days.')
    break
  case 'august':
    console.log('August has 31 days.')
    break
  case 'september':
    console.log('September has 30 days.')
    break
  case 'october':
    console.log('October has 31 days.')
    break
  case 'november':
    console.log('November has 30 days.')
    break
  case 'december':
    console.log('December has 31 days.')
    break
  default:
    console.log('Enter a valid month.')
}
```

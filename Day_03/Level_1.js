// 1) Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Praneeth'
let lastName = 'Priyankara'
let country = 'Sri Lanka'
let city = 'Colombo'
let age = 26
let isMarried = false

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

// 2) Check if type of '10' is equal to 10
if (typeof '10' === typeof 10) {
  console.log(true)
}
else {
  console.log(false)
}

// 3) Check if parseInt('9.8') is equal to 10
if (parseInt('9.8') === 10) {
  console.log(true)
}
else {
  console.log(false)
}

// 4) Boolean value is either true or false.
//    - Write three JavaScript statement which provide truthy values
console.log(4 > 3)
console.log(typeof 30 === 'number')
console.log(true)

//    - Write three JavaScript statement which provide falsy value.
console.log(3 > 4)
console.log(typeof 30 === 'string')
console.log(false)

// 5) Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//      - 4 > 3
true
//      - 4 >= 3
false
//      - 4 < 3
false
//      - 4 <= 3
false
//      - 4 == 4
true
//      - 4 === 4
true
//      - 4 != 4
false
//      - 4 != '4'
false
//      - 4 == '4'
true
//      = 4 === '4'
false
//      - Find the length of python and jargon and make a falsy comparison statement.
let python = 'python'
let jargon = 'jargon'
console.log(python.length != jargon.length)

// 6) Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//      - 4 > 3 && 10 < 12 
true
//      - 4 > 3 && 10 > 12
false
//      - 4 > 3 || 10 < 12 
true
//      - 4 > 3 || 10 > 12
true
//      - !(4 > 3)
false
//      - !(4 < 3)
true
//      - !(false)
true
//      - !(4 > 3 && 10 < 12)
false
//      - !(4 > 3 && 10 > 12)
true
//      - !(4 === '4')
false
//      - There is no 'on' in both dragon and python
console.log(python.includes('on') && jargon.includes('on'))
true


// 7) Use the Date object to do the following activities
let date = new Date()
//      - What is the year today?
console.log(date.getFullYear())
//      - What is the month today as a number?
console.log(date.getMonth())
//      - What is the date today?
console.log(date.getDate())
//      - What is the day today as a number?
console.log(date.getDay())
//      - What is the hours now?
console.log(date.getHours())
//      - What is the minutes now?
console.log(date.getMinutes())
//      - Find out the numbers of seconds elapsed from January 1, 1970 to now.
let milliSec = Date.parse("1970-01-01")
let dateNow = new Date()
let dateNowMilliSec = Date.parse(dateNow)
let seconds = (dateNowMilliSec - milliSec) / 1000
console.log(seconds)

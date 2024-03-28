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


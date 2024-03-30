// 1) Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('Enter Base : ')
let height = prompt('Enter Height : ')
let areaOfTriangle = 0.5 * base * height
console.log(areaOfTriangle)

// 2) Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c) 
let sideA = prompt('Enter side a : ')
let sideB = prompt('Enter side b : ')
let sideC = prompt('Enter side c : ')
let perimeterOfTriangle = sideA + sideB + sideC
console.log(perimeterOfTriangle)

// 3) Get length and width using prompt and calculate an area of rectangle (area = length x width) and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Enter the length : ')
let width = prompt('Enter the width : ')
let area = length * width
let perimeter = 2 * (length + width)
console.log(`The area of the rectangle is ${area} and the perimeter is ${perimeter}.`)

// 4) Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = prompt('Enter the radius : ')
let pi = 3.14
let areaOfCircle = pi * r * r
let circumference = 2 * pi * r
console.log(`The area of the circle is ${areaOfCircle} and the circumference is ${circumference}.`)

// 5) Calculate the slope, x-intercept and y-intercept of y = 2x -2
//      - x-intercept
let xA = 0
let yA = (2 * xA) - 2;
console.log(yA)

//      - y-intercept
let yB = 0
let xB = (yB + B) / B
console.log(xB)


// 6) Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2, x2 = 6, y1 = 2, y2 = 10
let m = (y2 - y1) / (x2 - x1)
console.log(m)

// 7) Compare the slope of above two questions.


// 8) Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
function calulateY(x) {
  let y = x ** 2 + 6 * x + 9
  console.log(y)
}

calulateY(5)
calulateY(3)
calulateY(0)

function calulateX(y) {
  if (y == 0) {
    x1 = ((6) + Math.sqrt(((6) ** 2) - (4 * 1 * 9))) / 2 * 1
    x2 = ((6) - Math.sqrt(((6) ** 2) - (4 * 1 * 9))) / 2 * 1
    if (x1 === x2) {
      console.log(x1)  
    }
  }
}

calulateX(0)

// 9) Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('Enter the hours : ')
let ratePerHour = prompt('Enter the rate per hour : ')
let pay = hours * ratePerHour
console.log(pay)

// 10) If the length of your name is greater than 7 say, your name is long else say your name is short.
function nameLength(name) {
  if (name.length > 7) {
    console.log('Your name is Long.')
  }
  else {
    console.log('Your name is short.')
  }
}

nameLength('Priyankara')

// 11) Compare your first name length and your family name length and you should get this output.
function comparingNameLength(firstName, familyName) {
  if (firstName.length > familyName.length) {
    console.log(`Your first name ${firstName} is longer than your family name ${familyName}`)
  }
  else if (firstName.length == familyName.length) {
    console.log(`Your first name ${firstName} and family name ${familyName} are equal length.`)
  }
  else {
    console.log(`Your family name, ${familyName} is longer than your first name, ${firstName}`)
  }
}

comparingNameLength('Praneeth', 'Nakandala')

// 12) Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 26

if (myAge > yourAge) {
  let ageDifference = myAge - yourAge;
  console.log(`I am ${ageDifference} years older than you.`)
}
else {
  let ageDifference = yourAge - myAge;
  console.log(`I am ${ageDifference} years younger than you.`)
}

// 13) Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = prompt('Enter your Birth Year : ')
let date = new Date()
let thisYear = date.getFullYear()
let age = thisYear - birthYear
console.log(age)
if (age >= 18) {
  console.log('You are allowed to drive')
}
else {
  let ageDifference = 18 - age
  console.log(`Your are not allowed to drive. You have to wait ${ageDifference} years.`)
}

// 14) Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let years = prompt('Enter the years your have lived : ')
let availableYears = 100 - years
let availableYearsInSeconds = availableYears * 365 * 24 * 60 * 60
console.log(`You can live ${availableYearsInSeconds} seconds.`)

// 15) Create a human readable time format using the Date time object
let createDate = new Date()
let fullYear = createDate.getFullYear()
let month = createDate.getMonth() + 1
let day = createDate.getDay()
let hour = createDate.getHours()
let mintues = createDate.getMinutes()

//      - YYYY-MM-DD HH:mm 
console.log(`${fullYear}-${month}-${day} ${hour}:${mintues}`)
//      - DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${fullYear} ${hour}:${mintues}`)
//      - DD/MM/YYYY HH:mm
console.log(`${day}/${month}/${fullYear} ${hour}:${mintues}`)

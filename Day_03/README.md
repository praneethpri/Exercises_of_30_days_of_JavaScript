## Day 03

#### Exercise : Level 1

1) Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
```js
let firstName = 'Praneeth'
let lastName = 'Priyankara'
let country = 'Sri Lanka'
let city = 'Colombo'
let age = 26
let isMarried = false
```
```js
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
```

2) Check if type of '10' is equal to 10
```js
if (typeof '10' === typeof 10) {
  console.log(true)
}
else {
  console.log(false)
}
```

3) Check if parseInt('9.8') is equal to 10
```js
if (parseInt('9.8') === 10) {
  console.log(true)
}
else {
  console.log(false)
}
```

4) Boolean value is either true or false.
   - Write three JavaScript statement which provide truthy values
```js
console.log(4 > 3)
console.log(typeof 30 === 'number')
console.log(true)
```

   - Write three JavaScript statement which provide falsy value.
```js
console.log(3 > 4)
console.log(typeof 30 === 'string')
console.log(false)
```

5) Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
     - 4 > 3
```js
true
```
     - 4 >= 3
```js
false
```
     - 4 < 3
```js
false
```
     - 4 <= 3
```js
false
```
     - 4 == 4
```js
true
```
     - 4 === 4
```js
true
```
     - 4 != 4
```js
false
```
     - 4 != '4'
```js
false
```
     - 4 == '4'
```js
true
```
     - 4 === '4'
```js
false
```
     - Find the length of python and jargon and make a falsy comparison statement.
```js
let python = 'python'
let jargon = 'jargon'
console.log(python.length != jargon.length)
```

6) Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
  - 4 > 3 && 10 < 12 
```js
true
```
  - 4 > 3 && 10 > 12
```js
false
```
  - 4 > 3 || 10 < 12 
```js
true
```
  - 4 > 3 || 10 > 12
```js
true
```
  - !(4 > 3)
```js
false
```
  - !(4 < 3)
```js
true
```
  - !(false)
```js
true
```
  - !(4 > 3 && 10 < 12)
```js
false
```
  - !(4 > 3 && 10 > 12)
```js
true
```
  - !(4 === '4')
```js
false
```
  - There is no 'on' in both dragon and python
```js
console.log(python.includes('on') && jargon.includes('on'))
true
```
7) Use the Date object to do the following activities
```js
let date = new Date()
```
  - What is the year today?
```js
console.log(date.getFullYear())
```
  - What is the month today as a number?
```js
console.log(date.getMonth())
```
  - What is the date today?
```js
console.log(date.getDate())
```
  - What is the day today as a number?
```js
console.log(date.getDay())
```
  - What is the hours now?
```js
console.log(date.getHours())
```
  - What is the minutes now?
```js
console.log(date.getMinutes())
```
  - Find out the numbers of seconds elapsed from January 1, 1970 to now.
```js
let milliSec = Date.parse("1970-01-01")
let dateNow = new Date()
let dateNowMilliSec = Date.parse(dateNow)
let seconds = (dateNowMilliSec - milliSec) / 1000
console.log(seconds)
```

#### Exercise : Level 2

1) Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
```js
let base = prompt('Enter Base : ')
let height = prompt('Enter Height : ')
let areaOfTriangle = 0.5 * base * height
console.log(areaOfTriangle)
```

2) Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c) 
```js
let sideA = prompt('Enter side a : ')
let sideB = prompt('Enter side b : ')
let sideC = prompt('Enter side c : ')
let perimeterOfTriangle = sideA + sideB + sideC
console.log(perimeterOfTriangle)
```

3) Get length and width using prompt and calculate an area of rectangle (area = length x width) and the perimeter of rectangle (perimeter = 2 x (length + width))
```js
let length = prompt('Enter the length : ')
let width = prompt('Enter the width : ')
let area = length * width
let perimeter = 2 * (length + width)
console.log(`The area of the rectangle is ${area} and the perimeter is ${perimeter}.`)
```

4) Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
```js
let r = prompt('Enter the radius : ')
let pi = 3.14
let areaOfCircle = pi * r * r
let circumference = 2 * pi * r
console.log(`The area of the circle is ${areaOfCircle} and the circumference is ${circumference}.`)
```

5) Calculate the slope, x-intercept and y-intercept of y = 2x -2
  - x-intercept
```js
let xA = 0
let yA = (2 * xA) - 2;
console.log(yA)
```

  - y-intercept
```js
let yB = 0
let xB = (yB + B) / B
console.log(xB)
```

6) Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
```js
let x1 = 2, x2 = 6, y1 = 2, y2 = 10
let m = (y2 - y1) / (x2 - x1)
console.log(m)
```

7) Compare the slope of above two questions.


8) Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
```js
function calulateY(x) {
  let y = x ** 2 + 6 * x + 9
  console.log(y)
}
```
```js
calulateY(5)
calulateY(3)
calulateY(0)
```
```js
function calulateX(y) {
  if (y == 0) {
    x1 = ((6) + Math.sqrt(((6) ** 2) - (4 * 1 * 9))) / 2 * 1
    x2 = ((6) - Math.sqrt(((6) ** 2) - (4 * 1 * 9))) / 2 * 1
    if (x1 === x2) {
      console.log(x1)  
    }
  }
}
```
```js
calulateX(0)
```

9) Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
```js
let hours = prompt('Enter the hours : ')
let ratePerHour = prompt('Enter the rate per hour : ')
let pay = hours * ratePerHour
console.log(pay)
```

10) If the length of your name is greater than 7 say, your name is long else say your name is short.
```js
function nameLength(name) {
  if (name.length > 7) {
    console.log('Your name is Long.')
  }
  else {
    console.log('Your name is short.')
  }
}
```
```js
nameLength('Priyankara')
```

11) Compare your first name length and your family name length and you should get this output.
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

```js
comparingNameLength('Praneeth', 'Nakandala')
```

12) Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
```js
let myAge = 250
let yourAge = 26
```
```js
if (myAge > yourAge) {
  let ageDifference = myAge - yourAge;
  console.log(`I am ${ageDifference} years older than you.`)
}
else {
  let ageDifference = yourAge - myAge;
  console.log(`I am ${ageDifference} years younger than you.`)
}
```

13) Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
```js
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
```

14) Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
```js
let years = prompt('Enter the years your have lived : ')
let availableYears = 100 - years
let availableYearsInSeconds = availableYears * 365 * 24 * 60 * 60
console.log(`You can live ${availableYearsInSeconds} seconds.`)
```

15) Create a human readable time format using the Date time object
```js
let createDate = new Date()
let fullYear = createDate.getFullYear()
let month = createDate.getMonth() + 1
let day = createDate.getDay()
let hour = createDate.getHours()
let mintues = createDate.getMinutes()
```

     - YYYY-MM-DD HH:mm 
```js
console.log(`${fullYear}-${month}-${day} ${hour}:${mintues}`)
```
     - DD-MM-YYYY HH:mm
```js
console.log(`${day}-${month}-${fullYear} ${hour}:${mintues}`)
```
     - DD/MM/YYYY HH:mm
```js
console.log(`${day}/${month}/${fullYear} ${hour}:${mintues}`)
```

#### Exercise : Level 3

1) Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
```js
let date = new Date()
let fullYear = date.getFullYear().toString()
let month = date.getMonth() + 1
let monthString = month.toString()
if (monthString.length == 1) {
  let arr = [monthString]
  arr.unshift('0')
  monthString = arr.join('')
}
let day = date.getDate()
let dayString = day.toString()
if (day.length == 1) {
  let arr = [dayString]
  arr.unshift('0')
  dayString = arr.join('')
}
let hours = date.getHours().toString()
if (hours.length == 1) {
  let arr = [hours]
  arr.unshift('0')
  hours = arr.join('')
}
let minutes = date.getMinutes().toString()
if (minutes.length == 1) {
  let arr = [minutes]
  arr.unshift('0')
  minutes = arr.join('')
}
console.log(`${fullYear}-${monthString}-${dayString} ${hours}:${minutes}`)
```

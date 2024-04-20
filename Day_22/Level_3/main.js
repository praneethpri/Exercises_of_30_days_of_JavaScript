const challengesObj = require('./challenges_info')

// Random Hex Colors
function randomHexColors() {
let hexNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
  let arr = [];
  let i = 0;
  while (i < 6) {
    arr.push(hexNums[Math.floor(Math.random() * hexNums.length)])
    i++
  }
  let string = `#${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}${arr[5]}`
  return string;
}

// Getting Date
function getDate() {
  let date = new Date()
  let year = date.getFullYear().toString()
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let month = months[date.getMonth()]
  let day = date.getDay().toString()
  let hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()
  let seconds = date.getSeconds().toString()
  let fullString = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`
  return fullString;
}

let firstHeading = document.querySelector('h1')
let yearName = document.querySelector('#year')
let secondHeading = document.querySelector('h2')
let dateString = document.querySelector('#date')
let unorderedList = document.querySelector('#ul')
let allTheListElements = document.querySelectorAll('.li')
for (let i = 0; i < allTheListElements.length; i++) {
  allTheListElements[i].setAttribute('id', `list-item${i}`)
  allTheListElements[i].setAttribute('class', 'list-items')
}
let detailsElements = document.querySelectorAll('details')
for (let j = 0; j < detailsElements.length; j++) {
  detailsElements[i].setAttribute('id', `details-item${i}`)
  detailsElements[i].setAttribute('class', 'details-item')
}

firstHeading.style.font = 'bold 50px sans-serif'
firstHeading.style.margin = '10px 0 6px 0'
firstHeading.style.textAlign = 'center'

yearName.style.fontSize = '100px'
yearName.textContent = '2024'
setInterval(() => {
  yearName.style.color = randomHexColors();
}, 1000)

secondHeading.style.font = 'regular 30px serif'
secondHeading.style.textAlign = 'center'
secondHeading.style.textDecoration = 'underline'

setInterval(() => {
  dateString.textContent = getDate()
  dateString.style.backgroundColor = randomHexColors()
}, 1000)
dateString.style.textAlign = 'center'
dateString.style.fontFamily = 'sans-serif'
dateString.style.fontSize = '20px'
dateString.style.padding = '10px'
dateString.style.width = '300px'
dateString.style.transform = 'translateX(160%)'

allTheListElements.forEach((elem) => {elem.style.margin = '7px 0 7px 0'})
allTheListElements.forEach((elem) => {elem.style.fontSize = '18px'})
allTheListElements.forEach((elem) => {elem.style.padding = '18px'})
allTheListElements.forEach((elem) => {elem.style.backgroundColor = '#f38281'})

unorderedList.style.margin = '30px 0 20px 0'
unorderedList.style.listStyleType = 'none'
unorderedList.style.width = '600px'
unorderedList.style.transform = 'translateX(50%)'

let firstHeader = document.querySelector('h1')
let secondHeader = document.querySelector('h2')
let unorderedList = document.querySelector('ul')
let allTheListElements = document.querySelectorAll('li')
for (let i = 0; i < allTheListElements.length; i++) {
  allTheListElements[i].setAttribute('id', `list-item${i}`)
  allTheListElements[i].setAttribute('class', 'list-items')
}
let dateElement = document.querySelector('#date')
let yearName = document.querySelector('span')
let firstListElement = document.querySelector('#list-item0')
let secondListElement = document.querySelector('#list-item1')

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

firstHeader.style.font = 'bold 50px sans-serif'
firstHeader.style.margin = '10px 0 6px 0'
firstHeader.style.textAlign = 'center'

secondHeader.style.font = 'regular 30px serif'
secondHeader.style.textAlign = 'center'
secondHeader.style.textDecoration = 'underline'

unorderedList.style.margin = '30px 0 20px 0'
unorderedList.style.listStyleType = 'none'
unorderedList.style.width = '600px'
unorderedList.style.transform = 'translateX(50%)'

allTheListElements.forEach((elem) => {elem.style.margin = '7px 0 7px 0'})
allTheListElements.forEach((elem) => {elem.style.fontSize = '18px'})
allTheListElements.forEach((elem) => {elem.style.padding = '18px'})
allTheListElements.forEach((elem) => {elem.style.backgroundColor = '#f38281'})

firstListElement.style.backgroundColor = '#18e73b'
secondListElement.style.backgroundColor = '#f6fd77'


yearName.style.fontSize = '100px'
yearName.textContent = '2024'
setInterval(() => {
  yearName.style.color = randomHexColors();
}, 1000)

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

setInterval(() => {
  dateElement.textContent = getDate()
  dateElement.style.backgroundColor = randomHexColors()
}, 1000)
dateElement.style.textAlign = 'center'
dateElement.style.fontFamily = 'sans-serif'
dateElement.style.fontSize = '20px'
dateElement.style.padding = '10px'
dateElement.style.width = '300px'
dateElement.style.transform = 'translateX(160%)'

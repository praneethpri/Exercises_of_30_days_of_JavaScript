let containerDiv = document.querySelector('div')

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

function isOddOrEven(num) {
  if (isPrime(num)) {
    return '#f38281'
  }
  else {
    if (num % 2 === 1) {
      return '#f6fd77'
    }
    else {
      return '#18e73b'
    }
  }
}


for (let i = 0; i < 100; i++) {
  let createdDiv = document.createElement('div')
  createdDiv.className = 'numbers'
  createdDiv.id = `numbers${i + 1}`
  createdDiv.textContent = `${i + 1}`
  createdDiv.style.height = '65px'
  createdDiv.style.width = '100px'
  createdDiv.style.border = '1px solid black'
  createdDiv.style.display = 'flex'
  createdDiv.style.flexDirection = 'row'
  createdDiv.style.justifyContent = 'center'
  createdDiv.style.alignItems = 'center'
  createdDiv.style.fontFamily = 'sans-serif'
  createdDiv.style.fontSize = '32px'
  createdDiv.style.backgroundColor = isOddOrEven(i + 1)
  containerDiv.appendChild(createdDiv)
}

containerDiv.style.display = 'grid'
containerDiv.style.gridTemplateColumns = 'repeat(10, 1fr)'
containerDiv.style.gap = '9px'

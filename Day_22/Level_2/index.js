const countriesAPI = 'https://restcountries.com/v2/all'

let worldCountries = document.querySelector('h5')
let title = document.querySelector('h2')
let author = document.querySelector('p')
let cardDiv = document.createElement('div')
document.body.appendChild(cardDiv)

worldCountries.style.textAlign = 'center'
title.style.textAlign = 'center'
author.style.textAlign = 'center'
cardDiv.style.display = 'grid';
cardDiv.style.gridTemplateColumns = 'repeat(5, 1fr)';
cardDiv.style.gap = '10px'
cardDiv.style.margin = '10px'

let fetchingCountries = async () => {
  try {
    const countriesFetched = await fetch(countriesAPI)
    const response = await countriesFetched.json()
    return response;
  }
  catch (error) {
    return error;
  }
}

function fetched(item) {
  let arr = [];
  item.forEach((e) => arr.push(e.name))
  let flags = [];
  item.forEach((e) => flags.push(e.flags.png))
  let string = `Total Number of Countries : ${arr.length}`
  worldCountries.textContent = string;
  for (let i = 0; i < arr.length; i++) {
    let innerCards = document.createElement('div')
    innerCards.className = 'inner-cards'
    innerCards.id = `inner-card${i + 1}`
    innerCards.style.width = '220px'
    innerCards.style.height = '200px'
    innerCards.style.border = '1px solid black'
    let innerName = document.createElement('div')
    innerName.className = 'inner-name'
    innerCards.appendChild(innerName)
    innerName.style.width = 'inherit'
    innerName.style.height = '50px'
    innerName.textContent = `${arr[i]}`
    innerName.style.textAlign = 'center'
    innerName.style.borderBottom = '1px solid black'
    innerName.style.marginTop = '18px'
    innerName.style.marginBottom = '6px'
    innerName.style.fontFamily = 'lucidaConsole'
    let innerFlag = document.createElement('div')
    let image = document.createElement('img')
    image.src = `${flags[i]}`
    image.style.width = '160px'
    image.style.height = '100px'
    image.style.margin = '4px 0 4px 0'
    innerFlag.style.display = 'flex'
    innerFlag.style.justifyContent = 'center'
    cardDiv.appendChild(innerCards)
    innerCards.appendChild(innerFlag)
    innerFlag.appendChild(image)
  }
}
fetchingCountries().then((elem) => {fetched(elem)}).catch((error) => console.log(error))

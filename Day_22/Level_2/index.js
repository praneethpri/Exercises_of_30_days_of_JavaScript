const countriesAPI = 'https://restcountries.com/v2/all'

let worldCountries = document.querySelector('h5')
let cardDiv = document.createElement('div')
document.body.appendChild(cardDiv)

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
  let string = `Total Number of Countries : ${arr.length}`
  worldCountries.textContent = string;
  for (let i = 0; i < arr.length; i++) {
    let innerCards = document.createElement('div')
    innerCards.className = 'inner-cards'
    innerCards.id = `inner-card${i + 1}`
    innerCards.style.width = '220px'
    innerCards.style.height = '350px'
    innerCards.style.border = '1px solid black'
    let innerName = document.createElement('div')
    innerName.className = 'inner-name'
    innerCards.appendChild(innerName)
    innerName.style.width = 'inherit'
    innerName.style.height = '70px'
    innerName.textContent = `${arr[i]}`
    cardDiv.appendChild(innerCards)
  }
}
fetchingCountries().then((elem) => {fetched(elem)}).catch((error) => console.log(error))

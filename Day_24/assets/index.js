let selection = document.querySelector('select').value
let pictureDiv = document.querySelector('.picture')

function creatingImage(picName) {
  let image = document.createElement('img')
  image.src = picName
  image.style.position = 'relative'
  image.style.zIndex = '2'
  image.style.marginTop = '30px'
  image.style.marginLeft = '90pt'
  image.style.width = '400px'
  image.style.height = '400px'
  pictureDiv.appendChild(image)
}

switch (selection) {
  case 'mercury':
    creatingImage('./designs/mercury.png')
    break
  case 'venus':
    creatingImage('./designs/venus.png')
    break
  case 'earth':
    creatingImage('./designs/earth.png')
    break
  case 'mars':
    creatingImage('./designs/mars.png')
    break
  case 'jupiter':
    creatingImage('./designs/jupiter.png')
    break
  case 'saturn':
    creatingImage('./designs/saturn.png')
    break
  case 'neptune':
    creatingImage('./designs/neptune.png')
    break
  case 'uranus':
    creatingImage('./designs/uranus.png')
    break
  case 'pluto':
    creatingImage('./designs/pluto.png')
    break
  default:
    alert('Choosing a planet is required.')
    break
}

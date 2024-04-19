let pressedKey = document.querySelector('span')

document.addEventListener('keypress', function(e) {
  pressedKey.textContent = e.key
})

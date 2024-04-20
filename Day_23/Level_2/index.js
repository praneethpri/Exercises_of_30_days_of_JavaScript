let pressedKey = document.querySelector('#pressed-key')
let pressedKeyCode = document.querySelector('#key-code')
let paragraph = document.querySelector('p')
let keyCodeDiv = document.querySelector('#div-key-code')

keyCodeDiv.innerHTML = '';
paragraph.textContent = 'Press any keyboard key'

document.addEventListener('keydown', function(e) {
  pressedKey.textContent = e.key
  pressedKeyCode.textContent = e.code.charCodeAt()
})

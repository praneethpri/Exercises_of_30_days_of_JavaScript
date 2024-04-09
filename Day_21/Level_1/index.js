let tagName = document.querySelector('h1')
let unorderedList = document.querySelector('#list-item')
let allTheParagraphs = document.querySelectorAll('p')
let string = '';
for (let i of allTheParagraphs) {
  string += i.textContent + ' '
}
let fourthParagraph = document.querySelector('#fourth-paragraph')
fourthParagraph.textContent = string;

let i = 0;
while (i < allTheParagraphs.length) {
  allTheParagraphs[i].className = `paragraph${i}`
  allTheParagraphs[i].setAttribute('id', `paragraph-list${i}`)
  i++
}

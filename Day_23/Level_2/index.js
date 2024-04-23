let paragraph = document.querySelector("p");
let keyCodeDiv = document.querySelector("#div-key-code");
keyCodeDiv.style.display = 'none'

let keyCode = document.createElement('span')
keyCode.classList.add('key-code')
keyCode.style.color =  "#1aa646";
keyCode.style.textShadow =  "2px 2px #dedcdb";
keyCode.style.margin =  "10pt";
keyCode.style.marginTop =  "20pt";
keyCode.style.transform =  "translateY(30%)";
keyCode.style.padding =  "0";
keyCode.style.fontSize =  "70pt";
keyCode.style.fontFamily =  "Montserrat, Courier, monospace";

document.addEventListener("keydown", function (e) {
  paragraph.textContent = "You Pressed ";
  let spanElement = document.createElement("span");
  spanElement.classList.add("pressed-key");
  spanElement.textContent = e.key;
  spanElement.style.color = "#1aa646";
  paragraph.appendChild(spanElement);
  
  keyCode.textContent = e.key.charCodeAt();
  keyCodeDiv.style.display = 'block'
  keyCodeDiv.style.marginTop = '30pt'
  keyCodeDiv.style.boxShadow = '5px 5px 4px 4px #dedcdb'
  keyCodeDiv.appendChild(keyCode)
});

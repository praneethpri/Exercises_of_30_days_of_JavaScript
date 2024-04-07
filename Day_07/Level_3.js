// 1) Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
  let numOfCharacters = prompt("Enter the number of Characters : ");
  let numOfIds = prompt("How many IDs Do you need ? : ");
  let a = 0;
  while (a < numOfIds) {
    function userIdGenerator(j) {
      let arr = [];
      function genOneNum() {
        while (true) {
          let num = Math.floor(Math.random() * 123);
          if ((num >= 48 && num <= 57) || num >= 97) {
            arr.push(String.fromCharCode(num));
            break;
          } else {
            continue;
          }
        }
      }
      let i = 0;
      while (i < j) {
        genOneNum();
        i++;
      }
      let string = arr.join("");
      console.log(string);
    }
    userIdGenerator(numOfCharacters);
    a++;
  }
}
userIdGeneratedByUser();

// 2) Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
  let arr = [];
  let i = 0;
  while (i < 3) {
    let num = Math.floor(Math.random() * 256);
    arr.push(num);
    i++;
  }
  console.log(`rgb(${arr[0]},${arr[1]},${arr[2]})`);
}
rgbColorGenerator();

// 3) Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(u) {
  let arr = [];
  let symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let i = 0;
  while (i < u) {
    let arr2 = [];
    let b = 0;
    while (b < 6) {
      let char = symbols[Math.floor(Math.random() * symbols.length)];
      arr2.push(char);
      b++;
    }
    let hexString = `#${arr2[0]}${arr2[1]}${arr2[2]}${arr2[3]}${arr2[4]}${arr2[5]}`;
    arr.push(hexString);
    i++;
  }
  console.log(arr);
}
arrayOfHexaColors(6);

// 3) Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(v) {
  let arr = [];
  let i = 0;
  while (i < v) {
    let arr2 = [];
    let j = 0;
    while (j < 3) {
      let num = Math.floor(Math.random() * 256);
      arr2.push(num);
      j++;
    }
    let rgbString = `rgb(${arr2[0]},${arr2[1]},${arr2[2]})`;
    arr.push(rgbString);
    i++;
  }
  console.log(arr);
}
arrayOfRgbColors(7);

// 4) Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

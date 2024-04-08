// // 1) Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
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
function convertHexaToRgb(hexCode) {
  let hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  function convertSingleNum(item) {
    switch (item) {
      case 1:
        return 1;
        break;
      case 2:
        return 2;
        break;
      case 3:
        return 3;
        break;
      case 4:
        return 4;
        break;
      case 5:
        return 5;
        break;
      case 6:
        return 6;
        break;
      case 7:
        return 7;
        break;
      case 8:
        return 8;
        break;
      case 9:
        return 9;
        break;
      case 'a':
        return 10;
        break;
      case 'b':
        return 11;
        break;
      case 'c':
        return 12;
        break;
      case 'd':
        return 13;
        break;
      case 'e':
        return 14;
        break;
      default:
        return 15;
    }
  }
  let firstNum = convertSingleNum(hexCode[1]) * 16
  let secondNum = convertSingleNum(hexCode[2]) * 1
  let rValue = firstNum + secondNum
  let thirdNum = convertSingleNum(hexCode[3]) * 16
  let fourthNum = convertSingleNum(hexCode[4]) * 1
  let gValue = thirdNum + fourthNum
  let fifthNum = convertSingleNum(hexCode[5]) * 16
  let sixthNum = convertSingleNum(hexCode[6]) * 1
  let bValue = fifthNum + sixthNum
  console.log(`rgb(${rValue},${gValue},${bValue})`)
}
convertHexaToRgb('#c8b471')

// 6) Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

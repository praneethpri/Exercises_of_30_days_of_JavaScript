## Day 07

#### Exercise : Level 1

1) Declare a function fullName and it print out your full name.
```js
function fullName() {
  console.log("Praneeth Priyankara");
}
fullName();
```

2) Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
```js
function fullName2(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
fullName2("Praneeth", "Priyankara");
```

3) Declare a function addNumbers and it takes two two parameters and it returns sum.
```js
function addNumbers(num1, num2) {
  console.log(parseInt(num1) + parseInt(num2));
}
addNumbers(5, 8);
```

4) An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
```js
function areaOfRectangle(length, width) {
  console.log(parseInt(length) * parseInt(width));
}
areaOfRectangle(6, 9);
```

5) A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
```js
function perimeterOfRectangle(length, width) {
  console.log((parseInt(length) + parseInt(width)) * 2);
}
perimeterOfRectangle(6, 9);
```

6) A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
```js
function volumeOfRectPrism(length, width, height) {
  console.log(parseInt(length) * parseInt(width) * parseInt(height));
}
volumeOfRectPrism(6, 9, 5);
```

7) Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
```js
function areaOfCircle(radius) {
  console.log(Math.PI * parseInt(radius) ** 2);
}
areaOfCircle(7);
```

8) Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
```js
function circumOfCircle(radius) {
  console.log(2 * Math.PI * parseInt(radius));
}
circumOfCircle(6);
```

9) Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
```js
function density(mass, volume) {
  console.log(parseInt(mass) / parseInt(volume));
}
density(9, 3);
```

10) Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
```js
function speed(distance, time) {
  console.log(parseInt(distance) / parseInt(time));
}
speed(78, 4);
```

11) Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
```js
function weight(mass) {
  let gravity = 10;
  console.log(parseInt(mass) * gravity);
}
weight(6);
```

12) Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
```js
function convertCelsiusToFahrenheit(celciusValue) {
  console.log(parseInt(celciusValue) * (9 / 5) + 32);
}
convertCelsiusToFahrenheit(0);
```

13) Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

  - The same groups apply to both men and women.
  - Underweight: BMI is less than 18.5
  - Normal weight: BMI is 18.5 to 24.9
  - Overweight: BMI is 25 to 29.9
  - Obese: BMI is 30 or more

```js
function calculateBMI(weight, height) {
  let bmi = parseInt(weight) * parseFloat(height) ** 2;
  if (bmi < 18.5) {
    console.log(`BMI Value : ${bmi} (Underweight)`);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`BMI Value : ${bmi} (Normal Weight)`);
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log(`BMI Value : ${bmi} (Overweight)`);
  } else {
    console.log(`BMI Value : ${bmi} (Obese)`);
  }
}
calculateBMI(59, 1.57);
```

14) Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
```js
function checkSeason(month) {
  if (month === "September" || month === "October" || month === "November") {
    console.log(`${month} is in Autumn season.`);
  } else if (
    month === "December" ||
    month === "January" ||
    month === "February"
  ) {
    console.log(`${month} is in Winter season.`);
  } else if (month === "March" || month === "April" || month === "May") {
    console.log(`${month} is in Spring season.`);
  } else if (month === "June" || month === "July" || month === "August") {
    console.log(`${month} is in Summer season.`);
  } else {
    console.log("Please enter a valid month.");
  }
}
```

15) Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
```js
function findMax(num1, num2, num3) {
  console.log(Math.max(num1, num2, num3));
}
findMax(4, 6, 9);
```

#### Exercise : Level 2

1) Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

2) Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
```js
function solveQuadEquation(a, b, c) {
  let solution1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  let solution2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  console.log(solution1, solution2);
}
solveQuadEquation(1, 5, 6);
```

3) Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
```js
function printArray(arr) {
  for (let a of arr) {
    console.log(a);
  }
}
printArray(["Dog", "Cat", "Cow"]);
```

4) Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

```js
function showDateTime() {
  let dateObj = new Date();
  let year = dateObj.getFullYear().toString();
  let month = dateObj.getMonth() + 1;
  if (month.toString().length === 1) {
    month = `0${month.toString()}`;
  } else {
    month = month.toString();
  }
  let date = dateObj.getDate().toString();
  if (date.length === 1) {
    date = `0${date}`;
  }
  let hour = dateObj.getHours().toString();
  if (hour.length === 1) {
    hour = `0${hour}`;
  }
  let minutes = dateObj.getMinutes().toString();
  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }
  console.log(`${date}/${month}/${year} ${hour}:${minutes}`);
}
showDateTime();
```

5) Declare a function name swapValues. This function swaps value of x to y.
```js
function swapValues(x, y) {
  let a = x;
  let b = y;
  x = b;
  y = a;
  console.log(x, y);
}
swapValues(5, 3);
```

6) Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
```js
function reverseArray(arr) {
  let returnArr = [];
  for (let k of arr) {
    returnArr.unshift(k);
  }
  console.log(returnArr);
}
reverseArray(["A", "B", "C"]);
```

7) Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
```js
function capitalizeArray(arr) {
  let returnArr = [];
  for (let k of arr) {
    returnArr.push(k.toUpperCase());
  }
  console.log(returnArr);
}
capitalizeArray(["name", "age", "year"]);
```

8) Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
```js
let returnArr = [];
function addItem(item) {
  returnArr.push(item);
  console.log(returnArr);
}
addItem("Sugar");
addItem("Milk");
```

9) Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
```js
let array = ["Sugar", "Milk", "Coffee", "Tea", "Rice", "Salt"];
function removeItem(index) {
  if (index < array.length) {
    let first = array.slice(0, index);
    let second = array.slice(index + 1, array.length);
    let returnArr = first.concat(second);
    console.log(returnArr);
  } else {
    console.log("index out of range");
  }
}
removeItem(4);
```

10) Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
```js
function sumOfNumbers(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    arr.push(i);
  }
  let sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(sum);
}
sumOfNumbers(100);
```

11) Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
```js
function sumOfOdds(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 1) {
      arr.push(i);
    }
  }
  let sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(sum);
}
sumOfOdds(90);
```

12) Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
```js
function sumOfEvens(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  let sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(sum);
}
sumOfEvens(90);
```

13) Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
```js
function evensAndOdds(number) {
  let evens = [];
  let odds = [];
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 1) {
      odds.push(i);
    } else {
      evens.push(i);
    }
  }
  console.log(
    `The number of odds are ${odds.length}.\nThe number of evens are ${evens.length}.`,
  );
}
evensAndOdds(100);
```

14) Write a function which takes any number of arguments and return the sum of the arguments
```js
function sumofArguments() {
  let arr = [];
  for (let i of arguments) {
    arr.push(parseInt(i));
  }
  let sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(sum);
}
sumofArguments(8, 90, 60);
```

15) Write a function which generates a randomUserIp.
```js
function randomUserIp() {
  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(Math.floor(Math.random() * 256));
  }
  console.log(`${arr[0]}.${arr[1]}.${arr[2]}.${arr[3]}`);
}
randomUserIp();
```

16) Write a function which generates a randomMacAddress
```js
function randomMacAddress() {
  let randomHexNum = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let arr = [];
  let i = 0;
  while (i < 4) {
    let num1 = Math.floor(Math.random() * randomHexNum.length);
    let num2 = Math.floor(Math.random() * randomHexNum.length);
    arr.push(`${randomHexNum[num1]}${randomHexNum[num2]}`);
    i++;
  }
  console.log(`${arr[0]}:${arr[1]}:${arr[2]}:${arr[3]}`);
}
randomMacAddress();
```

17) Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
```js
function randomHexaNumberGenerator() {
  let randomHexNum = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let arr = [];
  let i = 0;
  while (i < 6) {
    arr.push(randomHexNum[Math.floor(Math.random() * randomHexNum.length)]);
    i++;
  }
  console.log(`#${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}${arr[5]}`);
}
randomHexaNumberGenerator();
```

18) Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
```js
function userIdGenerator() {
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
  while (i < 7) {
    genOneNum();
    i++;
  }
  let string = arr.join("");
  console.log(string);
}
userIdGenerator();
```

#### Exercise : Level 3

1) Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

```js
function userIdGeneratedByUser() {
  let numOfCharacters = prompt("How many characters would you like to use? ");
  let numOfIds = prompt("How many IDs would you like to create? : ");
  function userIdGenerator(l) {
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
    while (i < l) {
      genOneNum();
      i++;
    }
    let string = arr.join("");
    console.log(string);
  }
  let u = 0;
  while (u < numOfIds) {
    userIdGenerator(numOfCharacters);
    u++;
  }
}
userIdGeneratedByUser();
```

2) Write a function name rgbColorGenerator and it generates rgb colors.
```js
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
```

3) Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
```js
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
```

3) Write a function arrayOfRgbColors which return any number of RGB colors in an array.
```js
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
```

4) Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
```js
function convertHexaToRgb(hexCode) {
  let hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
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
      case "a":
        return 10;
        break;
      case "b":
        return 11;
        break;
      case "c":
        return 12;
        break;
      case "d":
        return 13;
        break;
      case "e":
        return 14;
        break;
      default:
        return 15;
    }
  }
  let firstNum = convertSingleNum(hexCode[1]) * 16;
  let secondNum = convertSingleNum(hexCode[2]) * 1;
  let rValue = firstNum + secondNum;
  let thirdNum = convertSingleNum(hexCode[3]) * 16;
  let fourthNum = convertSingleNum(hexCode[4]) * 1;
  let gValue = thirdNum + fourthNum;
  let fifthNum = convertSingleNum(hexCode[5]) * 16;
  let sixthNum = convertSingleNum(hexCode[6]) * 1;
  let bValue = fifthNum + sixthNum;
  console.log(`rgb(${rValue},${gValue},${bValue})`);
}
convertHexaToRgb("#c8b471");
```

6) Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
```js
function convertRgbToHexa(rgbString) {
  let spllittedPattern = /rgb\(|,|\)/;
  let spliitted = rgbString.split(spllittedPattern);
  let firstNum = spliitted[1];
  let secondNum = spliitted[2];
  let thirdNum = spliitted[3];
  function numToHex(item) {
    let itemNum = parseInt(item);
    let itemNumDivided = Math.round(itemNum / 16);
    let itemNumRemainder = itemNum % 16;
    let itemNumRemainderMultiplied = itemNumRemainder * 16;
    let arr = [];
    function numConverted(b) {
      if (b >= 0 && b <= 9) {
        return b;
      } else {
        switch (b) {
          case 10:
            return "a";
            break;
          case 11:
            return "b";
            break;
          case 12:
            return "c";
            break;
          case 13:
            return "d";
            break;
          case 14:
            return "e";
            break;
          default:
            return "f";
        }
      }
    }
    arr.push(numConverted(itemNumDivided));
    arr.push(numConverted(itemNumRemainderMultiplied));
    let string = arr.join("");
    return string;
  }
  let arr = [];
  arr.push(numToHex(firstNum));
  arr.push(numToHex(secondNum));
  arr.push(numToHex(thirdNum));
  let string = arr.join("");
  console.log(`#${string}`);
}
convertRgbToHexa("rgb(207,255,37)");
```



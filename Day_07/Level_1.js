// 1) Declare a function fullName and it print out your full name.
function fullName() {
  console.log("Praneeth Priyankara");
}
fullName();

// 2) Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName2(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
fullName2("Praneeth", "Priyankara");

// 3) Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
  console.log(parseInt(num1) + parseInt(num2));
}
addNumbers(5, 8);

// 4) An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  console.log(parseInt(length) * parseInt(width));
}
areaOfRectangle(6, 9);

// 5) A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  console.log((parseInt(length) + parseInt(width)) * 2);
}
perimeterOfRectangle(6, 9);

// 6) A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  console.log(parseInt(length) * parseInt(width) * parseInt(height));
}
volumeOfRectPrism(6, 9, 5);

// 7) Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
  console.log(Math.PI * parseInt(radius) ** 2);
}
areaOfCircle(7);

// 8) Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
  console.log(2 * Math.PI * parseInt(radius));
}
circumOfCircle(6);

// 9) Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
  console.log(parseInt(mass) / parseInt(volume));
}
density(9, 3);

// 10) Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
  console.log(parseInt(distance) / parseInt(time));
}
speed(78, 4);

// 11) Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass) {
  let gravity = 10;
  console.log(parseInt(mass) * gravity);
}
weight(6);

// 12) Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celciusValue) {
  console.log(parseInt(celciusValue) * (9 / 5) + 32);
}
convertCelsiusToFahrenheit(0);

// 13) Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

//   - The same groups apply to both men and women.
//   - Underweight: BMI is less than 18.5
//   - Normal weight: BMI is 18.5 to 24.9
//   - Overweight: BMI is 25 to 29.9
//   - Obese: BMI is 30 or more

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

// 14) Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
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

// 15) Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(num1, num2, num3) {
  console.log(Math.max(num1, num2, num3));
}
findMax(4, 6, 9);

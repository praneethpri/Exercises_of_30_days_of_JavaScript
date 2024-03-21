const users = require('./Level_1.js')

// 1) Iterate through the users array and get all the keys of the object using destructuring
let [firstObj, secondObj, thirdObj, fourthObj, fifthObj, sixthObj, seventhObj] = users;
let firstKeys = {...firstObj}
let secondKeys = {...secondObj}
let thirdKeys = {...thirdObj}
let fourthKeys = {...fourthObj}
let fifthKeys = {...fifthObj}
let sixthKeys = {...sixthObj}
let seventhKeys = {...seventhObj}
console.log(firstKeys, secondKeys, thirdKeys, fourthKeys, fifthKeys, sixthKeys, seventhKeys)

// 2) Find the persons who have less than two skills 
let [one, two, three, four, five, six, seven] = users;
let {skills: skills1} = one;
let {skills: skills2} = two;
let {skills: skills3} = three;
let {skills: skills4} = four;
let {skills: skills5} = five;
let {skills: skills6} = six;
let {skills: skills7} = seven;
let itemLength = [skills1.length, skills2.length, skills3.length, skills4.length, skills5.length, skills6.length]
let arr = [];
for (let num of itemLength) {
  if (num <= 2) {
    arr.push(itemLength.indexOf(num))
  }
}
let usersLessThan2Skills = [];
for (let i of arr) {
  usersLessThan2Skills.push(users[i].name)
}
console.log(usersLessThan2Skills)

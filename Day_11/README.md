## Day 11

#### Exercise : Level 1

```javascript
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTML', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTML', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTML', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTML', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTML', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTML', 'CSS', 'JS'],
  age:20
}
]
```
1) Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp. 

```javascript
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)
```

2) Destructure and assign the elements of countries array to fin, est, sw, den, nor

```javascript
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor)
```

3) Destructure the rectangle object by its properties or keys. 

```javascript
let {width, area, height, perimeter} = rectangle;
console.log(width, area, height, perimeter)
```

```javascript
module.exports = users;
```

#### Exercise : Level 2
```javascript
const users = require('./Level_1.js')
```

1) Iterate through the users array and get all the keys of the object using destructuring
```javascript
let [firstObj, secondObj, thirdObj, fourthObj, fifthObj, sixthObj, seventhObj] = users;
let firstKeys = {...firstObj}
let secondKeys = {...secondObj}
let thirdKeys = {...thirdObj}
let fourthKeys = {...fourthObj}
let fifthKeys = {...fifthObj}
let sixthKeys = {...sixthObj}
let seventhKeys = {...seventhObj}
console.log(firstKeys, secondKeys, thirdKeys, fourthKeys, fifthKeys, sixthKeys, seventhKeys)
```

2) Find the persons who have less than two skills 
```javascript
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
```

#### Exercise : Level 3

```javascript
const countries = require('./countries')
```

1) Destructure the countries object print name, capital, population and languages of all countries 
```javascript
let nameArr = [];
let capitalArr = [];
let populationArr = [];
let languagesArr = [];
countries.forEach((cou) => {
  let {name, capital, population, languages} = cou;
  nameArr.push(name);
  capitalArr.push(capital);
  populationArr.push(population);
  languagesArr.push(languages);
})
console.log(nameArr)
console.log(capitalArr)
console.log(populationArr)
console.log(languagesArr)
```
2) A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line. 
```javascript
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
```
```javascript
let [name, skills, [,, jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore)
```

3) Write a function called convertArrayToObject which can convert the array to a structure object. 
```javascript
function convertArrayToObject(arr) {
  let returnArray = [];
  for (let items of arr) {
    let [name, skills, scores] = items;
    let obj = {
      'name': name,
      'skills': skills,
      'scores': scores
    }
    returnArray.push(obj)
  }
  console.log(returnArray)
}

const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]
convertArrayToObject(students)
```
4) Copy the student object to newStudent without mutating the original object. In the new object add the following ?

    • Add Bootstrap with level 8 to the front end skill sets
    • Add Express with level 9 to the back end skill sets
    • Add SQL with level 8 to the data base skill sets
    • Add SQL without level to the data science skill sets

```javascript
const studentArray = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }

let {name: studentName, age: studentAge, skills: studentSkills} = studentArray;
let {frontEnd, backEnd, dataBase, dataScience} = studentSkills;
frontEnd.push({skill: 'Bootstrap', level: 8})
backEnd.push({skill: 'Express', level: 9})
dataBase.push({skill: 'SQL', level: 8})
dataScience.push({skill: 'SQL'})
let studentSkillSet = {frontEnd, backEnd, dataBase, dataScience}
let newStudent = {studentName, studentAge, studentSkillSet}
console.log(newStudent)
```


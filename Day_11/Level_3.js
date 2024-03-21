const countries = require('./countries')

// 1) Destructure the countries object print name, capital, population and languages of all countries 
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

// 2) A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line. 
  const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, [,, jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore)

// 3) Write a function called convertArrayToObject which can convert the array to a structure object. 
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

/* 4) Copy the student object to newStudent without mutating the original object. In the new object add the following ?

    • Add Bootstrap with level 8 to the front end skill sets
    • Add Express with level 9 to the back end skill sets
    • Add SQL with level 8 to the data base skill sets
    • Add SQL without level to the data science skill sets
*/

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


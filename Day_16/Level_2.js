const {skills, age, isMarried, student, txt} = require('./Exercise_Data')

// 1) Stringify the students object with only firstName, lastName and skills properties 
let studentStringChoosen = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 3)
console.log(studentStringChoosen)

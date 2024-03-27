const {skills, age, isMarried, student, txt} = require('./Exercise_Data')

// 1) Parse the txt JSON to object.
let txtObject = JSON.parse(txt)
console.log(txtObject)

// 2) Find the user who has many skills from the variable stored in txt.

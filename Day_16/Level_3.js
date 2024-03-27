const {skills, age, isMarried, student, txt} = require('./Exercise_Data')

// 1) Parse the txt JSON to object.
let txtObject = JSON.parse(txt)
console.log(txtObject)

// 2) Find the user who has many skills from the variable stored in txt.
let txtReturn = JSON.parse(txt, (key, value) => {
  let arr = [];
  let arr2 = []
  arr.push(value)
  for (let i in arr[0]) {
    arr2.push()
  }
  return arr2
})

console.log(txtReturn)

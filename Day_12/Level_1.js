// 1) Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern = /\d+/g
let result = txt.match(pattern)
let resultNumber = [];
result.forEach((elem) => resultNumber.push(parseInt(elem)))
let resultCounted = resultNumber.reduce((acc, cur) => { return acc + cur }, 0)
//console.log(resultCounted)

// 2) The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles. 
const txt2 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'
let pattern2 = /-\d+|\d+/g
let result2 = txt2.match(pattern2)
let result2Number = [];
result2.forEach((elem) => result2Number.push(parseInt(elem)))
let minNumber = Math.min(...result2Number)
let maxNumber = Math.max(...result2Number)
let distance = maxNumber - minNumber
//console.log(distance)

// 3) Write a pattern which identify if a string is a valid JavaScript variable
function is_valid_variable(string) {
  let pattern = /^[a-z]+(_{1})\w+|^\D\w+$/g
  let result = pattern.test(string)
  
  //console.log(result)
}

is_valid_variable('first_name') 
is_valid_variable('first-name')
is_valid_variable('1first_name')
is_valid_variable('firstname')

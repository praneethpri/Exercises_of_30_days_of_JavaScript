// 1) Create a closure which has one inner function
function outerFunction() {
  let i = 0;
  let sum = 0;
  function innerFunction() {
    sum += 5;
  }
  while (i < 3) {
    innerFunction()
    i++
  }
  return sum
}
console.log(outerFunction())

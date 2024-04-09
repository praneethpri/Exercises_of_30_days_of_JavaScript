// 1) Create a closure which has three inner functions
function outerFunction2() {
  function firstInnerFunction() {
    console.log('This is from the first inner function.')
  }
  function secondInnerFunction() {
    console.log('This is from the second inner function.')
  }
  function thirdInnerFunction() {
    console.log('This is from the third inner function.')
  }
  firstInnerFunction()
  secondInnerFunction()
  thirdInnerFunction()
}
outerFunction2()


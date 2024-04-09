## Day 19

#### Exercise : Level 1

1) Create a closure which has one inner function
```js
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
```

#### Exercise : Level 2

1) Create a closure which has three inner functions
```js
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
```

#### Exercise : Level 3

1) Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
```js
function personAccount() {
  let firstName = 'Praneeth';
  let secondName = 'Priyankara';
  let incomes = 0;
  let expenses = 0;
  
  function totalIncome() {
    console.log(incomes)
  }

  function accountInfo() {
    console.log(firstName)
    console.log(secondName)
    console.log(incomes)
    console.log(expenses)
  }

  function addIncome(income) {
    incomes += income;
  }

  function addExpense(expense) {
    expenses += expense;
  }

}
```

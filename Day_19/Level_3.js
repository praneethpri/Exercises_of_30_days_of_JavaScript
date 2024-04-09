// 1) Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
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

// 1) Write a code which can give grades to students according to theirs scores:
//   - 80-100, A
//   - 70-89, B
//   - 60-69, C
//   - 50-59, D
//   - 0-49, F
let score = parseInt(prompt('Enter a score : '))
if (score <= 100) {
  console.log('A')
}
else if (score <= 79) {
  console.log('B')
}
else if (score <= 69) {
  console.log('C')
}
else if (score <= 59) {
  console.log('D')
}
else {
  console.log('F')
}


// 2) Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//   - September, October or November, the season is Autumn.
//   - December, January or February, the season is Winter.
//   - March, April or May, the season is Spring
//   - June, July or August, the season is Summer
let month = prompt('Enter the month : ')
if (month === 'September' || month === 'October' || month === 'November') {
  console.log(`${month} is in Autumn season.`)
}
else if (month === 'December' || month === 'January' || month === 'February') {
  console.log(`${month} is in Winter season.`)
}
else if (month === 'March' || month === 'April' || month === 'May') {
  console.log(`${month} is in Spring season.`)
}
else if (month === 'June' || month === 'July' || month === 'August') {
  console.log(`${month} is in Summer season.`)
}
else {
  console.log('Please enter a valid month.')
}

// 3) Check if a day is weekend day or a working day. Your script will take day as an input. 
let day = prompt('Enter a day : ').toLowerCase()
switch (day) {
  case 'monday':
    console.log('Monday is a working day.')
    break
  case 'tuesday':
    console.log('Tuesday is a working day.')
    break
  case 'wednesday':
    console.log('Wednesday is a working day.')
    break
  case 'thursday':
    console.log('Thursday is a working day.')
    break
  case 'friday':
    console.log('Friday is a working day.')
    break
  case 'saturday':
    console.log('Saturday is a weekend.')
    break
  case 'sunday':
    console.log('Sunday is a weekend.')
    break
  default:
    console.log('Enter a valid day.')
}

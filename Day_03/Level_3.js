// 1) Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
let date = new Date()
let fullYear = date.getFullYear()
let month = date.getMonth()
let monthString = month.toString()
if (monthString.length == 1) {
  monthString = 0 + monthString
}
let day = date.getDay()
console.log(day)

// 1) Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
let date = new Date()
let fullYear = date.getFullYear().toString()
let month = date.getMonth() + 1
let monthString = month.toString()
if (monthString.length == 1) {
  let arr = [monthString]
  arr.unshift('0')
  monthString = arr.join('')
}
let day = date.getDate()
let dayString = day.toString()
if (day.length == 1) {
  let arr = [dayString]
  arr.unshift('0')
  dayString = arr.join('')
}
let hours = date.getHours().toString()
if (hours.length == 1) {
  let arr = [hours]
  arr.unshift('0')
  hours = arr.join('')
}
let minutes = date.getMinutes().toString()
if (minutes.length == 1) {
  let arr = [minutes]
  arr.unshift('0')
  minutes = arr.join('')
}
console.log(`${fullYear}-${monthString}-${dayString} ${hours}:${minutes}`)

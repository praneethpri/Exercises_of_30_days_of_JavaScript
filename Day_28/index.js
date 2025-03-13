let datePlacement = document.querySelector('.placements-date')

let date = new Date();
let dateHour = date.getHours();
let dateMinutes = date.getMinutes();
let dateYear = date.getFullYear();
let dateMonth = date.getMonth();
let dateDate = date.getDate();

let dateHourCorrected;
let timeCorrected;
let dateMonthCorrected;
let dateDateCorrected;

if (dateHour < 10) {
  dateHourCorrected = "0" + dateHour
}
else {
  dateHourCorrected = dateHour
}

if (dateMinutes < 10) {
  timeCorrected = "0" + dateMinutes
}
else {
  timeCorrected = dateMinutes
}

if (dateMonth < 10) {
  dateMonthCorrected = "0" + dateMonth
}
else {
  dateMonthCorrected = dateMonth
}

if (dateDate < 10) {
  dateDateCorrected = "0" + dateDate
}
else {
  dateDateCorrected = dateDate
}

let dateString = `${dateYear}/${dateMonthCorrected}/${dateDateCorrected}`
let timeString = `${dateHourCorrected}:${timeCorrected}`

let fullString = `${dateString}    ${timeString}`
datePlacement.innerHTML = fullString

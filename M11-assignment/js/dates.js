//STEP 1
function daysInMonth() {
  let year = prompt("Enter a year:");
  let month = prompt("Enter a month (1-12):");
  let date = new Date(year, month, 0);
  console.log("Number of days in the month: " + date.getDate());
}

//STEP 2

function monthName() {
  let dateStr = prompt("Enter a date (YYYY-MM-DD):");
  let date = new Date(dateStr);
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log("The month name is: " + monthNames[date.getMonth()]);
}

//STEP 3

function isWeekend() {
  let dateStr = prompt("Enter a date (YYYY-MM-DD):");
  let date = new Date(dateStr);
  let isWeekend = date.getDay() === 6 || date.getDay() === 0;
  console.log("Is the date a weekend? " + isWeekend);
}

//STEP 4
function yesterdayDayOfWeek() {
  let today = new Date();
  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log("Yesterday was: " + dayNames[yesterday.getDay()]);
}

//STEP 5
function firstLetterOfDay() {
  let today = new Date();
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(
    "The first letter of today is: " + dayNames[today.getDay()].charAt(0)
  );
}

daysInMonth();
monthName();
isWeekend();
yesterdayDayOfWeek();
firstLetterOfDay();

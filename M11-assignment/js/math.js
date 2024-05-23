//STEP 1
function absoluteValue() {
  let number = prompt("Enter a number:");
  console.log("The absolute value is: " + Math.abs(number));
}

//STEP 2

function roundUp() {
  let number = parseFloat(prompt("Enter a floating point value:"));
  console.log("The rounded up value is: " + Math.ceil(number));
}

//STEP 3
function roundDown() {
  let number = parseFloat(prompt("Enter a floating point value:"));
  console.log("The rounded down value is: " + Math.floor(number));
}

//STEP 4
function findMinMax() {
  let numbers = prompt("Enter 5 numbers, comma delimited:");
  let numArray = numbers.split(",").map(Number);
  console.log("The largest number is: " + Math.max(...numArray));
  console.log("The smallest number is: " + Math.min(...numArray));
}

//STEP 5

function findSquareRoot() {
  let number = prompt("Enter a number:");
  console.log("The square root is: " + Math.sqrt(number));
}

absoluteValue();
roundUp();
roundDown();
findMinMax();
findSquareRoot();

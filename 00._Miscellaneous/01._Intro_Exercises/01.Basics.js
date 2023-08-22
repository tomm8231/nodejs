// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log(`My first name is ${firstName} and my last name is ${lastName}`)
console.log("My first name is", firstName, "and my last name is", lastName)

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2022";
const number = 1;
const result1 = number + parseInt(year)
const result2 = Number(year)+number
const result3 = +year+number

// Add the year plus the number
console.log(result1)
console.log(result2)
console.log(result3)
// The result should be 2023
// You cannot touch line 1 or 2

//NaN - Not a number
console.log(Number("232435ff22"))

//Parser så godt den kan - altså parser alt op indtil "ff"
console.log(parseInt("232435ff22"))

// --------------------------------------
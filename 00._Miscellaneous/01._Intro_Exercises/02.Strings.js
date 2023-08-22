// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

const numberOneB = Number(numberOne)
console.log(numberOneB)
const numberTwoB = Number(numberTwo)
console.log(numberTwoB)

const result1 = numberOneB+numberTwoB
console.log(result1)
// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const result4 = parseFloat(anotherNumberOne)+parseFloat(anotherNumberTwo)
console.log(result4.toFixed(2))

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

const result5 = parseFloat(one+two,three)/3
console.log(result5.toFixed(5))
// Show in the console the avg. with 5 decimals


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";

// Get me the character "c"

console.log(letters.charAt(2))


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const result7 = fact.replace('j', 'J');

console.log(result7)

// --------------------------------------
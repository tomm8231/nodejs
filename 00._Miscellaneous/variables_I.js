//Use const whenever possible
const scheduledBreakTime = "09:27";
let consoleLogCounter = 0;
console.log(consoleLogCounter)

//Use comma in console log; not "+" when concat
console.log("Let's take a break at:", scheduledBreakTime);
consoleLogCounter++
console.log(consoleLogCounter)

//Datatyper i Javascript: Number, String, Boolean, Symbol, BigInt, undefined, null, Object
//Object: Object, Array, Date

//type coercion
//2 + "2" = 22

//The 3 ways to make strings

console.log("This is the first ''''' way")
console.log('This is the second """" way')
console.log(`This is the ${2+1}rd """" '''' way ${scheduledBreakTime}`)
//what's inside the curly brackets is a javascript expression
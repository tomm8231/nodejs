
// //Skriver 5, pga "hoisting" - explain hoisting
// console.log(getRandomInt())

// function getRandomInt(min, max) {
//     return 5;
//     // return Math.floor(Math.random() * (max + 1 - min) + min)
// }

//Skriver funktionen
// console.log(getRandomInt)

//skriver 5, da parametre er frivillige
// console.log(getRandomInt())

// const getRandomIntAnonymousFunction = function(min, max) {
//     return Math.floor(Math.random() * (max + 1 - min) + min)    
// }

// const getRandomIntArrowFunction = (min, max) => {
//     return Math.floor(Math.random() * (max + 1 - min) + min)
// }

// const getRandomIntArrowFunctionWithoutReturn = (min, max) =>
//     Math.floor(Math.random() * (max + 1 - min) + min)

//Callback funktioner
//Reference til en funktion med eksekverbar kode, som gives som et argument i en anden funktion.

function genericActionperformer(genericAction, name) {
    return genericAction(name)
}

const jump = (name) => `${name} is jumping`

console.log(genericActionperformer(jump, 'Lasse'))
//jump bruges som en callback funktion

//const run = (name) => `${name} is running`
const run = function(name) {
    return `${name} is running`
}
console.log(genericActionperformer(run, "Jonathan"))


console.log(genericActionperformer((name) => `${name} is sleeping`, "Daniel"))
//ASI - automatic semicolon assertion (i JavaScript)
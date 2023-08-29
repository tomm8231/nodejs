"use strict"
//Påpeger problemer, der normalt ikke bliver påpeget, f.eks. total global variables,
//eller hvis man kalder en variabel "arguments", da det er et keyword


//totalGlobalVariable = "NEVER EVER DO THIS"
//var globalVariale = "Also never do this"
// Hvorfor kan var + variabelnavn men ikke uden var virke med use strict, fordi var bløder ud af sit scope
// Derfor skal man passe meget på med var

//console.log(globalVariale)


//const er ikke en konstant, men en immutable variabel - kan ikke blive redeklæreret

//const isThisConstant = 123
//isThisConstant = 456
//Ovenstående fejler

//Kan ikke gøre nedenstående heller:
//const isThisConstant;

const isThisConstant = []
isThisConstant.push(1, 2, 3)

const anotherConstant = {}
anotherConstant.valueChange = true
console.log(anotherConstant)

//let eksisterer i det samme scope som const, men let kan redeklareres og deklareres uden at blive initialiseret
//var er en global variabel der bløder igennem scopet

// global scope

// function scope
function functionScope() {
    //...
}

// block scope
{
    //Egen call stack med egne lokale variabler
    var someVariable = true;
    {
        var someVariable = false
    }

    console.log(someVariable)
    //someVariable er false i ovenstående console.log(), fordi den bløder ud af sit scope
}

//Printer 666666, fordi var bløder ud
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}

//Printer 012345
for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}




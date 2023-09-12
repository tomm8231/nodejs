const trolls = [
    { name: "anonymous", trollLevel: 9 },
    { name: "krollebolle", trollLevel: 22},
    { name: "krolleline", trollLevel: 27}
]

const trollsLeveledUp = trolls.map((troll) => { 
    troll.trollLevel += 5
    return troll 
    })

console.log(trollsLeveledUp)


const oddLeveledTrolls = trollsLeveledUp.filter((troll) => troll.trollLevel % 2 === 1)

console.log(oddLeveledTrolls);


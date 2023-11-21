import bcrypt from "bcrypt"

const saltRounds = 15

const plainTextPassword = "hunter123"
const hashedPasswordOutPut = "$2b$15$FBj9NDtW9jII555HHsfxF.uteRgbvSm1TsA7/cwa8il8PMcJyeV2m" // From hashedPassword (below)
// const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds)
const compareResult = await bcrypt.compare(plainTextPassword, hashedPasswordOutPut)

console.log(compareResult); // true if correct; else false
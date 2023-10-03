//Jeg importerer express
import express from "express"

//Jeg instansierer express
const app = express()
app.use(express.static("public"))


import { randomInFromInterval } from "./util/randomUtil.js"


// =============Read pages ============
import { frontpagePage, battlePage, contactPage } from "./util/preparePages.js"


// ============= HTML =============

app.get("/", (req, res) => {
    res.send(frontpagePage)
})

app.get("/battle", (req, res) => {
    res.send(battlePage)
})

app.get("/contact", (req, res) => {
    res.send(contactPage)
})

// ============= Routes =============


let currentPokemon


app.get("/battlepokemon", (req, res) => {

    if (!currentPokemon || currentPokemon.strength <= 1) {
        const randomPokemonId = randomInFromInterval(1, 151)
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
        .then(((response) => {
            if (!response.ok) {
                throw new Error("Could not find pokemon")
            }
            return response.json()
        }))
        .then((result) => {
            console.log(result);
            const name = result.name.charAt(0).toUpperCase() + result.name.slice(1).toLowerCase()
            const url = result.sprites.other.home.front_default
            const strength = randomInFromInterval(1, 10)

            currentPokemon = {
                name,
                url,
                strength
            }

            res.send({ data: currentPokemon})
        })
    } 
    else {
        currentPokemon.strength--
        res.send({ data: currentPokemon })
    }
})


const PORT = Number(process.env.PORT) || 8080

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})
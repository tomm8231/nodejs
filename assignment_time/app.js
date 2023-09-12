const express = require("express")
const app = express()
app.use(express.json())

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/whatstime", (req, res) => {
    res.sendFile(__dirname + "/public/whatstime.html")
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})


//Hej Gitte. Lige et opfølgende spørgsmål vedr praktik. Mit praktikmål ligger i Nuuk - hvilket jeg gerne vil holde mellem os, da jeg ikke vil plante ideen om Grønland hos de andre. Mit spørgsmål er om Grønland går under EØS og om der kan drages på de økonomiske muligheder, der er, hvis man tager til et andet land EU-land?
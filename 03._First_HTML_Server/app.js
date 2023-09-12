const express = require("express")
const app = express()

app.use(express.json())

//"app.get({ ... })" hedder en route 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
})

// create a route

app.get("/secondPage", (req, res) => {
    res.sendFile(__dirname + "/public/secondPage.html")
})

app.get("/welcomeMessage", (req, res) => {
    const clientName = req.query.user
    if(!clientName) {
        res.send("Hello stranger")
} else {
    res.send({ data: `Welcome to my fancy website, ${clientName}` })
}
})


const PORT = 8080
app.listen(PORT, (error) => {
    if (error) {
        console.log("Server failed to start", error)
        return
    }
    console.log("Server is running on port", PORT)
})
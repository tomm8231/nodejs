const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("public"))

const { getWelcomeMessage } = require("./util/welcomeMessageUtil.js")

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
    const welcomeMessage = getWelcomeMessage(clientName)
    res.send({ data: welcomeMessage })
})

app.get("/doorman/:key", (req, res) => {
    if (req.params.key === "sesameopenup") {
        return res.send( {data: "Valid key provided" })
        //res.redirect("/welcomeMessage")
    }
    res.send( {data: "No valid key provided" })
})

app.get("/proxyserver", (req, res) => {
    fetch("http://www.google.com")
    .then((response) => response.text())
    .then((result) => {
        res.send(result)
    })
})

const PORT = 8080
app.listen(PORT, (error) => {
    if (error) {
        console.log("Server failed to start", error)
        return
    }
    console.log("Server is running on port", PORT)
})
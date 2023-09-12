const express = require("express")
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/whatstime", (req, res) => {
    res.sendFile(__dirname + "/public/whatstime.html")
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})

module.exports = app
//import
const express = require("express")

//instantiate Express
const app = express()

app.get("/", (req, res) => {
    res.send({ data: "First request handler"})
})

app.listen(8080)
//8080 er en tomcat server
//import
const express = require("express")

//instantiate Express
//app er server instance
const app = express()

app.use(express.json())

const otherData = 123

app.get("/", (req, res) => {
    res.send({data: "First request handler", otherData: otherData})
})

app.get("/dog", (req, res) => {
    res.send({sound: "woof"})
})

app.get("/dog/:someValue/:id", (req, res) => {
    console.log(req.params)
    res.send({dog: "Meow"})
})

// /cat?name=Napster&age=2.5
app.get("/cat", (req, res) => {
    res.send({data: req.query })
})

let balance = 100
app.get("/wallet/:withdrawalAmount", (req, res) => {
    const withdrawalAmount = req.params.withdrawalAmount
    balance -= withdrawalAmount
    if (balance < 0) {
        balance += withdrawalAmount
        res.send({message: "You can't withdraw. No more money left"})
    } else {
        res.send({message: `You have withdrawn ${req.params.withdrawalAmount}`})
    }
})

app.post("/giveMeTheBody", (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

app.listen(8080)
//8080 er en tomcat server
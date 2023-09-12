const express = require("express")
const app = express()

app.use(express.json())

//Locale Time String
//console.log(Date());

//UTC
//console.log(new Date());

//Epoch timestamp / Unix
//console.log(Date.now());

// task1: create a route that returns the date

app.get("/date", (req, res) => {
    const date = Date()
    res.send(date)
})

// task2: create a route that returns the current month
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

app.get("/month", (req, res) => {

    const currentDate = new Date();
    let name = month[currentDate.getMonth()];

    res.send({ data: name })
})

// task3: create a route that returns the current day

app.get("/current-day", (req, res) => {
    const currentDate = new Date()

    const currentDay = currentDate.toLocaleDateString('da', { weekday: 'long' });

    res.send({ data: currentDay })
})


app.listen(7070, () => {
    console.log("Server is running on port 7070");
})
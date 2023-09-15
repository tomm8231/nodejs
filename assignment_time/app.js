const express = require("express")
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/times", (req, res) => {
    res.sendFile(__dirname + "/public/times.html")
})

app.get("/answer", (req, res) => {
    res.sendFile(__dirname + "/public/answer.html")
})

app.get("/time/nuuk", (req, res) => {
    const currentTime = new Date().toLocaleTimeString('da', { timeZone: 'America/Nuuk' })
    res.send({ data: currentTime }) 
})

app.get("/time/torshavn", (req, res) => {
    const currentTime = new Date().toLocaleTimeString('da', { timeZone: 'Atlantic/Faroe'})
    res.send({ data: currentTime})
})

app.get("/time/copenhagen", (req, res) => {
    const currentTime = new Date().toLocaleTimeString('da', { timeZone: 'Europe/Copenhagen'})
    res.send({ data: currentTime})
})

app.get("/big-question", (req, res) => {
    const bigQuestion = "Du kender det... Følelsen i kroppen. Du har netop set det, de flotte lys, den store bro, de smukke mennesker. Hun har en rød kjole på, han er velfriseret, de hvide tænder, var der ikke også en opknappet skjorte? De hungrende øjne, den stikkes dybt ned. Gaflen i pizzaen. Det er Dr. Oetker. Du er sulten. Men hvad er klokken? Ikke spisetid. Men klokken er ikke 18. Kan man rejse i tid? Tid er et flydende begreb. Tid er relativt til hvor man er. Kant vil sige, det er en anskuelsesform, vi erkender Verden igennem - sammen med rum. Tid og rum udgør sammen et grundmodus, som vi erfarer Verden igennem. Man siger, at vilje kan flytte bjerge, og du er sulten. Hvor skal du være inden for Rigsfællesskabets grænser for at der er kortest tid til din ønskede middag? Måske har du lige spist din aftensmad for et par timer siden, og gerne vil ride på en ny bølge, der glider ind over kl. 18-målstregen. Livets store spørgsmål. Lad os dykke ned i det...."
    res.send({ data: bigQuestion})
})

app.get('/big-answer', (req, res) => {

    const timeZones = [
      { timeZone: 'America/Nuuk', locationName: "Nuuk" },
      { timeZone: 'Atlantic/Faroe', locationName: "Torshavn" },
      { timeZone: 'Europe/Copenhagen', locationName: "København" },
    ]
    
    let minHoursRemaining = 9999
    let locationWithLeastHours = ''
    
    function timeToDinner(dt2, dt1) {
      const timeToDinner = (dt2.getTime() - dt1.getTime()) / 1000 / 3600
      return timeToDinner
    }
    
    const desiredDinnerTime = new Date()
    desiredDinnerTime.setHours(18, 0, 0)
    


    for (const location of timeZones) {
      const currentTime = new Date().toLocaleTimeString('da-DK', { timeZone: location.timeZone })
      const [hours, minutes, seconds] = currentTime.split('.').map(Number)
      const currentTimeDate = new Date()
      currentTimeDate.setHours(hours, minutes, seconds)

      const hoursRemaining = timeToDinner(desiredDinnerTime, currentTimeDate)

        if (hoursRemaining < minHoursRemaining && Math.sign(hoursRemaining) !== -1) {
          minHoursRemaining = hoursRemaining
          locationWithLeastHours = location.locationName 
        }
      }

    const hoursRemaining = parseInt(Number(minHoursRemaining))
    const minutesRemaining = Math.round((Number(minHoursRemaining)-hoursRemaining) * 60) - 1
    res.send({ "timeZone": locationWithLeastHours, "hoursUntilDinner": hoursRemaining, "minutesUntilDinner": minutesRemaining })
})

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})

module.exports = app
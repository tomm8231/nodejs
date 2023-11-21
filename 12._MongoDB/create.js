import db from "./connectons.js"

await db.albums.insertOne({ title: "Shine on your crazy diamond", score: 9.8 })
import db from "./connectons.js"

await db.albums.updateOne({ title: "Animals" }, { $set: { score: 4 } })

await db.albums.updateMany({}, { $set: { label: "EMI"} })
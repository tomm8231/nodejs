import db from "./connectons.js"

await db.albums.deleteMany({ title: "Shine on your crazy diamond" })
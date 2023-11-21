import db from "./connectons.js"

// const allAlbums = await db.albums.find().toArray()

// console.log(allAlbums);

const faveAlbum = await db.albums.find({ title: "Piper at the gates of dawn" }).toArray()
console.log(faveAlbum);
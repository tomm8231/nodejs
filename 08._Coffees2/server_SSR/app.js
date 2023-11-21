// import dotenv from "dotenv";
// dotenv.config();
import "dotenv/config.js";

import express from "express";
const app = express();

import path from "path"
app.use(express.static(path.resolve("../client/dist")))

app.use(express.json())

import helmet from "helmet";
app.use(helmet());

//CORS KODE FJERNET


import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);
import coffeesRouter from "./routers/coffeesRouter.js";
app.use(coffeesRouter);
import coffeLoversRouter from "./routers/coffeeLoversRouter.js"
app.use(coffeLoversRouter)

app.get("*", (req, res) => {
    res.sendFile(path.resolve("../client/dist/index.html"))
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
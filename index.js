const express = require("express")
const app = express()
PORT = 8000

const ejsLayouts = require("express-ejs-layouts")

// middleware
app.set("view engine", "ejs")
app.use(ejsLayouts)

// routes
// home
app.get("/", (req, res)=>{
    res.render("home.ejs")
})

app.get("/animals", (req, res)=>{
    const favAnimals = ["dolphin", "killer whale", "turtle"]
    res.render("animals.ejs", {animals: favAnimals})
})

app.listen(PORT, ()=>{
    console.log("Listening....")
})
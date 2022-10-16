const express = require("express")
const app = express()
PORT = 8000

const ejsLayouts = require("express-ejs-layouts")

// middleware
app.set("view engine", "ejs")
app.use(ejsLayouts)

// controller middleware
app.use("/akreha", require("./controllers/akreha.js"))
app.use("/aheba", require("./controllers/aheba.js"))

// routes
// home
app.get("/", (req, res)=>{
    res.render("home.ejs")
})

app.listen(PORT, ()=>{
    console.log("Listening....")
})
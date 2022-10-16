const express = require("express")
const app = express()
PORT = 8000

// middleware
app.set("view engine", "ejs")

// routes



app.listen(PORT, ()=>{
    console.log("Listening....")
})
const express = require("express")
const router = express.Router()

// routes
// instead of app we put router
router.get("/movies", (req, res)=>{
    const worMovies = ["Guns Akimbo", "Scoob!", "Monster Hunter"]
    res.render("movies.ejs", {movies: worMovies})
})

router.get("/products", (req, res)=>{
    const worProducts = ["Plastic Straws", "Oven Cleaner", "Flame Retardants"]
    res.render("products.ejs", {products: worProducts})
})

module.exports = router
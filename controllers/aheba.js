const express = require("express")
const router = express.Router()

// routes
// instead of app we put router
router.get("/animals", (req, res)=>{
    const favAnimals = ["dolphin", "killer whale", "turtle"]
    res.render("animals.ejs", {animals: favAnimals})
})

router.get("/foods", (req, res)=>{
    const favFoods = ["pizza", "pasta", "taco"]
    res.render("foods.ejs", {foods: favFoods})
})

module.exports = router
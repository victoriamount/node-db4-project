const express = require('express')
const { getInstructions } = require('./recipe-model')

const Recipes = require('./recipe-model')
const router = express.Router()

router.get('/recipes/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })         
        })
})

router.get('/recipes/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(ingredients => {
            res.json(ingredients)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })   
        })
})

router.get('/recipes/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(instructions => {
            res.json(instructions)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

// I changed the endpoint from `GET /api/ingredients/:id/recipes` to this because it didn't make sense, there's no id needed 
router.get('/ingredients/easyRecipes', (req, res) => {
    Recipes.getEasyRecipes()
        .then(recipes => {
            res.json(recipes)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

module.exports = router
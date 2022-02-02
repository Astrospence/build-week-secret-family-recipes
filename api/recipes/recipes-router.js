const router = require('express').Router()
const Helpers = require('../db-helpers')

router.get('/', (req, res, next) => {
    Helpers.getAllRecipes()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    console.log('get unique recipe')
})

router.post('/', (req, res, next) => {
    console.log('add recipe endpoint')
})

module.exports = router
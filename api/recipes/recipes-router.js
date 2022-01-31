const router = require('express').Router()

router.get('/', (req, res, next) => {
    console.log('get all recipes')
})

router.get('/:id', (req, res, next) => {
    console.log('get unique recipe')
})

router.post('/', (req, res, next) => {
    console.log('add recipe endpoint')
})

module.exports = router
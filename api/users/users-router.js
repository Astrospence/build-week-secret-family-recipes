const router = require('express').Router()

router.post('/register', (req, res, next) => {
    console.log('registration endpoint')
})

router.post('/login', (req, res, next) => {
    console.log('login endpoint')
})

module.exports = router
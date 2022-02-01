const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { BCRYPT_ROUNDS } = require('../jwt-config')
const makeToken = require('../token-builder')
const Helpers = require('../db-helpers')

router.post('/register', (req, res, next) => {
    let user = req.body
    user.password = bcrypt.hashSync(user.password, BCRYPT_ROUNDS || 5)

    Helpers.addUser(user)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(next)
})

router.post('/login', (req, res, next) => {
    let { username, password } = req.body

    Helpers.findUserBy({ username })
        .then(response => {
            if (!response || !bcrypt.compareSync(password, response.password)) {
                next({ status: 401, message: 'invalid credentials' })
            } else {
                const token = makeToken(response)
                res.status(200).json({ message: `Here's your token, ${response.username}`, token })
            }
        })
})

module.exports = router
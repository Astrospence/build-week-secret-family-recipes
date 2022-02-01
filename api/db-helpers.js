const db = require('./data/db-config')

const addUser = async (newUser) => {
    const response = await db('users').insert(newUser, ['user_id', 'username'])
    return response[0]
}

const findUserBy = (filter) => {
    return db('users').where(filter).first()
}

module.exports = {
    addUser,
    findUserBy,
}
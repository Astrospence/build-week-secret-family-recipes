const db = require('./data/db-config')

const addUser = async (newUser) => {
    const response = await db('users').insert(newUser, ['user_id', 'username'])
    return response[0]
}

const findUserBy = (filter) => {
    return db('users').where(filter).first()
}

const getAllRecipes = () => {
    return db('recipes as r')
        .join('categories as c', 'r.category_id', 'c.category_id')
        .select('r.recipe_id', 'r.title', 'r.source', 'r.instructions', 'c.name')
}

module.exports = {
    addUser,
    findUserBy,
    getAllRecipes
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {title: 'Mac N Cheese', source: 'Grandma', instructions: 'Make mac N cheese', category_id: 1},
        {title: 'Chocolate Cake', source: 'Grandma', instructions: 'Make cake', category_id: 2}
      ])
    })
}
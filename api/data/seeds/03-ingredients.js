/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Maccaroni noodles'},
        {name: 'Cheese'},
        {name: 'Flour'},
        {name: 'eggs'},
        {name: 'milk'}
      ]);
    });
};

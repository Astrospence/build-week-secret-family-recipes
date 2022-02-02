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
        {ingredient: 'Maccaroni noodles'},
        {ingredient: 'Cheese'},
        {ingredient: 'Flour'},
        {ingredient: 'eggs'},
        {ingredient: 'milk'}
      ]);
    });
};

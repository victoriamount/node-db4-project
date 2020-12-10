
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Shots of Espresso'},
        {ingredient_name: 'C Oat Milk'},
        {ingredient_name: 't Honey'},
        {ingredient_name: 'Slice(s) of Sourdough'},
        {ingredient_name: 'T Cultured Butter'},
        {ingredient_name: 'Glass of Water'},
        {ingredient_name: 'Banana'}
      ]);
    });
};

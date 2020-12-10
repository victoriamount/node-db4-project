
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {recipe_id: 1, step: '1', instruction_id: 3},
        {recipe_id: 1, step: '2', instruction_id: 4},
        {recipe_id: 1, step: '3', instruction_id: 5},
        {recipe_id: 1, step: '4', instruction_id: 6},
        {recipe_id: 1, step: '5', instruction_id: 7},
        {recipe_id: 2, step: '1', instruction_id: 1},
        {recipe_id: 2, step: '2', instruction_id: 2},
        {recipe_id: 2, step: '3', instruction_id: 7},
        {recipe_id: 3, step: '1', instruction_id: 7},
        {recipe_id: 4, step: '1', instruction_id: 8},
        {recipe_id: 4, step: '2', instruction_id: 7},
      ]);
    });
};

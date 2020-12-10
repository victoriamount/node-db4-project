
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {instruction_text: 'Toast sourdough on setting 4'},
        {instruction_text: 'Spread softened butter on toast using a bread knife'},
        {instruction_text: 'Brew espresso'},
        {instruction_text: 'Pour oat milk into mug with espresso'},
        {instruction_text: 'Add honey'},
        {instruction_text: 'Stir'},
        {instruction_text: 'Enjoy!'},
        {instruction_text: 'Peel'}
      ]);
    });
};

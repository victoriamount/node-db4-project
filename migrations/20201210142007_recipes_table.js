
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 128).unique().notNullable()
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 128).unique().notNullable()
    })
    .createTable('instructions', table => {
        table.increments('instruction_id')
        table.string('instruction_text').notNullable()
    })
    .createTable('recipe_ingredients', table => {
        table.increments('recipe_ingredient_id')
        table.float('quantity').notNullable()
        table.integer('recipe_id')
            .unsigned().notNullable()
            .references('recipe_id').inTable('recipes')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
        table.integer('ingredient_id')
            .unsigned().notNullable()
            .references('ingredient_id').inTable('ingredients')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('recipe_instructions', table => {
        table.increments('recipe_instruction_id')
        table.string('step').notNullable()
        table.integer('recipe_id')
            .unsigned().notNullable()
            .references('recipe_id').inTable('recipes')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
        table.integer('instruction_id')
            .unsigned().notNullable()
            .references('instruction_id').inTable('instructions')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};

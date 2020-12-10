const db = require('../../data/db-config')

module.exports = {
    getRecipes() {
        return db('recipes')
    }, // should return a list of all recipes in the database.

    getShoppingList(recipe_id) {
        /*
            SELECT 
                r_ing.quantity, 
                ing.ingredient_name
            FROM recipe_ingredients r_ing
            JOIN ingredients ing
                ON r_ing.ingredient_id = ing.ingredient_id
            WHERE r_ing.recipe_id = 1
        */
        return db('recipe_ingredients as r_ing')
            .join('ingredients as ing', 'r_ing.ingredient_id', 'ing.ingredient_id')
            .select('r_ing.quantity', 'ing.ingredient_name')
            .where('r_ing.recipe_id', recipe_id)
    }, // should return a list of all ingredients and quantities for a given recipe

    getInstructions(recipe_id){
        /*
            SELECT 
                r_inst.step, 
                inst.instruction_text
            FROM recipe_instructions r_inst
            JOIN instructions inst
                ON r_inst.instruction_id = inst.instruction_id
            WHERE r_inst.recipe_id = 2
            ORDER BY r_inst.step
        */
        return db('recipe_instructions as r_inst')
            .join('instructions as inst', 'r_inst.instruction_id', 'inst.instruction_id')
            .select('r_inst.step', 'inst.instruction_text')
            .where('r_inst.recipe_id', recipe_id)
            .orderBy('r_inst.step')
    }, // should return a list of step by step instructions for preparing a recipe
    getEasyRecipes() {
        /*
            SELECT 
                r.recipe_name
            FROM recipe_ingredients r_ing
            JOIN recipes r
                ON r_ing.recipe_id = r.recipe_id
            GROUP BY r_ing.recipe_id
            HAVING count(r_ing.recipe_id) = 1
        */ 
        return db('recipe_ingredients as r_ing')   
            .join('recipes as r', 'r_ing.recipe_id', 'r.recipe_id')
            .select('r.recipe_name')
            .groupBy('r_ing.recipe_id') 
            .count('r_ing.recipe_id as recipe_count')
            .having('recipe_count', '=', 1)   
    } // all recipes in the system that utilize a single ingredient 
}
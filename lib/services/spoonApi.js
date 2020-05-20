const request = require('superagent');
require('dotenv').config();

function getRecipeList() {
  return request
    .get(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=chocolate&instructionsRequired=true&apiKey=${process.env.API_KEY}`)
    .then(res => res.body.results);
}
module.exports = {
  getRecipeList
};

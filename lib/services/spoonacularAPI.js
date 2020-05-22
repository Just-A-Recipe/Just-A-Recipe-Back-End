const request = require('superagent');
require('dotenv').config();

function fetchRecipes(searchQuery, resPP) {
  return request
    .get(`https://api.spoonacular.com/recipes/search?query=${searchQuery}&number=${resPP}&apiKey=${process.env.API_KEY}`)
    .then(res => res.body.results);
    
}



module.exports = {
  fetchRecipes
};

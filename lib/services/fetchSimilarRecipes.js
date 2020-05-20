const request = require('superagent');
require('dotenv').config();

function fetchSimilarRecipes() {
  const id =  969114;
  return request

    .get(`https://api.spoonacular.com/recipes/${id}/similar?${process.env.API_KEY}`)
    .then(res => res.body.results);
}

fetchSimilarRecipes().then(res => console.log(res));

module.exports = {
  fetchSimilarRecipes
};

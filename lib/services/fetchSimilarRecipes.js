const request = require('superagent');
require('dotenv').config();

function fetchSimilarRecipes() {
  // const id =  595654;
  return request
    .get(`https://api.spoonacular.com/recipes/${id}/similar?${process.env.API_KEY}`)
    .then(res => res);
}

fetchSimilarRecipes().then(res => console.log(res.body));

module.exports = {
  fetchSimilarRecipes
};

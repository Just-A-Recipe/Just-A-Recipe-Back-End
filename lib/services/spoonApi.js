const request = require('superagent');
require('dotenv').config();

function fetchRecipes() {
  let searchQuery = 'pizza'; /* call input field here */
  let resPP = '4';
  return request
    .get(`https://api.spoonacular.com/recipes/search?query=${searchQuery}&number=${resPP}${process.env.API_KEY}`)
    .then(res => res.body.results);
}
// function fetchSimilarRecipes() {
//   const id =  969114;
//   return request
// .get(`https://api.spoonacular.com/recipes/463220/similar${process.env.API_KEY}`)
// .get(`https://api.spoonacular.com/recipes/${id}/similar?${process.env.API_KEY}`)
// .then(res => res.body);
// }

fetchRecipes().then(res => console.log(res));

module.exports = {
  fetchRecipes, /* fetchSimilarRecipes */
};




// .get(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredient}&instructionsRequired=true${process.env.API_KEY}`)
// .then(res => res.body);
// .get('https://api.spoonacular.com/recipes/search?query=burger&number=10{process.env.API_KEY}')
// .then(res => res.body.results);

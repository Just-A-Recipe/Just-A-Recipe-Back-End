const request = require('superagent');
require('dotenv').config();

function fetchRecipes() {
  let searchQuery = 'pizza'; /* call input field here */
  let resPP = '4';
  return request
    .get(`https://api.spoonacular.com/recipes/search?query=${searchQuery}&number=${resPP}${process.env.API_KEY}`)
    .then(res => res.body.results);
}
fetchRecipes().then(res => console.log(res));

module.exports = {
  fetchRecipes
};

const { Router } = require('express');
const { fetchRecipes, fetchRecipe, fetchSimilarRecipes } = require('../services/spoonacularAPI');


module.exports = Router()

  .get('/', (req, res, next) => {
    const { searchQuery, offset, intolerances } = req.query;

    fetchRecipes({ searchQuery, offset, intolerances })

      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    fetchRecipe(req.params.id)
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .get('/:id/similar', (req, res, next) => {
    // invoke your service call
    fetchSimilarRecipes(req.params.id)
      .then(recipes => res.send(recipes))
      .catch(next);
  });

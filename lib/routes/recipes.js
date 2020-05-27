const { Router } = require('express');
const Recipe = require('../models/Recipe');
const { fetchRecipes, fetchRecipe, fetchSimilarRecipes } = require('../services/spoonacularAPI');


module.exports = Router()

  .get('/', (req, res, next) => {
    fetchRecipes(req.query.searchQuery, 20, req.query.offset, req.query.intolerances)
      .then(recipe => res.send(recipe))
      .catch(next);
  })
  
  .get('/:id', (req, res, next) => {
    fetchRecipe(req.params.id)
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .get('/:id/similar', (req, res, next) => {
    fetchSimilarRecipes
      .findById(req.params.id)
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Recipe
      .create(req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  });



const { Router } = require('express');
const Recipe = require('../models/Recipe');
const { fetchRecipes } = require('../services/spoonacularAPI');

module.exports = Router()

  .get('/', (req, res, next) => {
    fetchRecipes(req.query.searchQuery, 20)
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Recipe
      .create(req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Recipe
      .findById(req.params.id)
      // .populate('ingredients')
      .then(recipe => res.send(recipe))
      .catch(next);
  });



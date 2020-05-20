const { Router } = require('express');
const Recipe = require('../models/Recipe');

module.exports = Router()

  .get('/api/v1/recipes', (req, res, next) => {
    Recipe
      .find()
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .post('/api/v1/recipes', (req, res, next) => {
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

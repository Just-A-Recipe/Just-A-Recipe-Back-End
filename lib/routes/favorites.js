const { Router } = require('express');
const Recipe = require('../models/Recipe');

module.exports = Router()

  .post('/', (req, res, next) => {
    Recipe
      .create(req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  });



const Favorite = require('../models/Favorite');
const { Router } = require('express');

module.exports = Router()
  .post('/', (req, res, next) => {
    Favorite
      .create(req.body)
      .then(fav => res.send(fav))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Favorite
      .findByIdAndDelete(req.params.id)
      .then(fav => res.send(fav))
      .catch(next);
  });



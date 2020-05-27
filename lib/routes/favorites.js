const Favorite = require('../models/Favorite');
const { Router } = require('express');

module.exports = Router()
  // .get('/', (req, res, next) => {
  //   res.send('hello').catch(next);
  // })

  .post('/', (req, res, next) => {
    Favorite
      .create(req.body)
      .then(fav => res.send(fav))
      .catch(next);
  })
  
  .delete('/:id', (req, res, next) => {
    Favorite
      .findByIdAndDelete(req.params.id)
      .then(fav => res.send({message: `favorite ${fav.id} deleted`}))
      .catch(next);
  });



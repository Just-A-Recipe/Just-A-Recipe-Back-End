const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  recipeId: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Favorite', schema);

const mongoose = require('mongoose');
// define the schema for our model
const schema = new mongoose.Schema({

  userEmail: {
    type: String, 
    // required: true
  },
  recipeId: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Recipe',
    type: Number,
    required: true
  }
});
// export model
module.exports = mongoose.model('Favorite', schema);

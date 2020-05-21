const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true
  },
  // instructions: {
  //   type: String,
  //   required: true
  // },
  // extendedIngredients: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Ingredient',
  // }],
});

module.exports = mongoose.model('Recipe', schema);

// glutenFree: {
//   type: Boolean,
//   required: true,
// },
// dairyFree: {
//   type: Boolean,
//   required: true
// },
// vegan: {
//   type: Boolean,
//   required: true,
// },

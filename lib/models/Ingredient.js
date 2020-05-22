const mongoose = require('mongoose');

const schema = new mongoose.Schema([{
  name: {
    type: String,
    required: true
  },
  measures: {
    metric: {
      amount: {
        type: Number,
      },
      unitShort: {
        type: String,
      },
      us: {
        amount: {
          type: Number,
          required: true
        },
        unitShort: {
          type: String,
          required: true
        }
      },
      meta: {
        original: {
          type: String,
          required: true
        }
      }
    }
  }
}]);

module.exports = mongoose.model('Ingredient', schema);

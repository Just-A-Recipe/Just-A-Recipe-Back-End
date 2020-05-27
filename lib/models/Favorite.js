const mongoose = require('mongoose');
// define the schema for our model
const schema = mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true
  },
  favorites: [{
    id: Number,
    required: true
  }]
});
// export model
module.exports = mongoose.model('User', schema);

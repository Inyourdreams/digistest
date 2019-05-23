const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  markers: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Location', locationSchema);

// models/lab.js
const mongoose = require('mongoose');

const labSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  fyqs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FYQ'
  }]
});

module.exports = mongoose.model('Lab', labSchema);

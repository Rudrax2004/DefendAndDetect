// models/fyq.js
const mongoose = require('mongoose');

const fyqSchema = new mongoose.Schema({
  id: {
    type: Number,
    required:true,
    unique: true
  }
  ,question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('FYQ', fyqSchema);

// controllers/fyqController.js
const FYQ = require('../models/fyq-model');

// Create a new FYQ
exports.createFYQ = async (req, res) => {
  try {
    const fyq = await FYQ.create(req.body);
    res.status(201).json({ fyq });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

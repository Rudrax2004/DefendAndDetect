// controllers/labController.js
const Lab = require('../models/lab-model');

// Create a new lab
exports.createLab = async (req, res) => {
  try {
    const lab = await Lab.create(req.body);
    res.status(201).json({ lab });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all labs
exports.getAllLabs = async (req, res) => {
  try {
    const labs = await Lab.find().populate('fyqs');
    res.status(200).json({ labs });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// routes/labRoutes.js
const express = require('express');
const router = express.Router();
const labController = require('../controllers/lab-controller');
const fyqController = require('../controllers/fyq-Controller');

router.post('/labs/fyqs', fyqController.createFYQ);
router.post('/labs', labController.createLab);
router.get('/labs', labController.getAllLabs);

module.exports = router;

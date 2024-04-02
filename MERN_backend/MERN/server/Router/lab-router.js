// routes/labRoutes.js
const express = require('express');
const router = express.Router();
const labController = require('../controllers/lab-controller');
const fyqController = require('../controllers/fyq-Controller');

router.post('https://defendanddetect-production.up.railway.app/api/labs/fyqs', fyqController.createFYQ);
router.post('https://defendanddetect-production.up.railway.app/api/labs', labController.createLab);
router.get('https://defendanddetect-production.up.railway.app/api/labs', labController.getAllLabs);

module.exports = router;

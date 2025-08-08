// /routes/performanceRoutes.js
const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/performanceController');

// Define performance routes
router.post('/', performanceController.addPerformance);
router.get('/:student_id', performanceController.getPerformanceByStudentId);

module.exports = router;

// /routes/careerRoutes.js
const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');

// Define career routes
router.post('/', careerController.addCareerGuidance);
router.get('/:student_id', careerController.getCareerGuidanceByStudentId);

module.exports = router;

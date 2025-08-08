// /routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Define student routes
router.post('/', studentController.addStudent);
router.get('/:student_id', studentController.getStudentById);

module.exports = router;

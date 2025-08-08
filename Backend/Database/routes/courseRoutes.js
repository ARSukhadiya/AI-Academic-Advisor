// /routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Define course routes
router.post('/', courseController.addCourse);
router.get('/:course_id', courseController.getCourseById);

module.exports = router;

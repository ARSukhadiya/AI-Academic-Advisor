// /controllers/courseController.js
const Course = require('../models/course');

// Add a new course
async function addCourse(req, res) {
    try {
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (err) {
        console.error("Error adding course:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get a course by ID
async function getCourseById(req, res) {
    try {
        const course = await Course.findOne({ course_id: req.params.course_id });
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.json(course);
    } catch (err) {
        console.error("Error fetching course:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { addCourse, getCourseById };

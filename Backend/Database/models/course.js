// /models/course.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the course model
const courseSchema = new Schema({
    course_id: { type: String, required: true, unique: true },
    course_name: { type: String, required: true },
    instructor: String,
    syllabus: [String],
    prerequisites: [String],
});

// Export the course model
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;

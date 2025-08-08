// /models/performance.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the performance model
const performanceSchema = new Schema({
    student_id: { type: String, required: true },
    course_id: { type: String, required: true },
    grade: String,
    attendance: Number,
    assignments_completed: Number,
    exam_score: Number,
});

// Export the performance model
const Performance = mongoose.model('Performance', performanceSchema);
module.exports = Performance;

// /models/student.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the student model
const studentSchema = new Schema({
    student_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: Number,
    gender: String,
    major: String,
    interests: [String],
    current_courses: [String],
    academic_history: [
        {
            course: String,
            grade: String,
            semester: String,
        },
    ],
});

// Export the student model
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;

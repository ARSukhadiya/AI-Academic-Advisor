// /controllers/studentController.js
const Student = require('../models/student');

// Add a new student
async function addStudent(req, res) {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        console.error("Error adding student:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get a student by ID
async function getStudentById(req, res) {
    try {
        const student = await Student.findOne({ student_id: req.params.student_id });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        console.error("Error fetching student:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { addStudent, getStudentById };

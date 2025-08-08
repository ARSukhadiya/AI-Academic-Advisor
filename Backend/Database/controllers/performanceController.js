
// /controllers/performanceController.js
const Performance = require('../models/performance');

// Add a performance record
async function addPerformance(req, res) {
    try {
        const newPerformance = new Performance(req.body);
        await newPerformance.save();
        res.status(201).json(newPerformance);
    } catch (err) {
        console.error("Error adding performance record:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get performance by student ID
async function getPerformanceByStudentId(req, res) {
    try {
        const performance = await Performance.find({ student_id: req.params.student_id });
        res.json(performance);
    } catch (err) {
        console.error("Error fetching performance:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { addPerformance, getPerformanceByStudentId };

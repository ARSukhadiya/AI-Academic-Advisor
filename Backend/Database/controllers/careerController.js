// /controllers/careerController.js
const Career = require('../models/career');

// Add career guidance data
async function addCareerGuidance(req, res) {
    try {
        const newCareer = new Career(req.body);
        await newCareer.save();
        res.status(201).json(newCareer);
    } catch (err) {
        console.error("Error adding career guidance:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get career guidance by student ID
async function getCareerGuidanceByStudentId(req, res) {
    try {
        const career = await Career.findOne({ student_id: req.params.student_id });
        if (!career) {
            return res.status(404).json({ message: "Career guidance not found" });
        }
        res.json(career);
    } catch (err) {
        console.error("Error fetching career guidance:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { addCareerGuidance, getCareerGuidanceByStudentId };

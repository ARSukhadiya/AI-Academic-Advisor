// /controllers/advisorController.js
const Advisor = require('../models/advisor');

// Add a new advisor
async function addAdvisor(req, res) {
    try {
        const newAdvisor = new Advisor(req.body);
        await newAdvisor.save();
        res.status(201).json(newAdvisor);
    } catch (err) {
        console.error("Error adding advisor:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get advisor by ID
async function getAdvisorById(req, res) {
    try {
        const advisor = await Advisor.findOne({ advisor_id: req.params.advisor_id });
        if (!advisor) {
            return res.status(404).json({ message: "Advisor not found" });
        }
        res.json(advisor);
    } catch (err) {
        console.error("Error fetching advisor:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { addAdvisor, getAdvisorById };

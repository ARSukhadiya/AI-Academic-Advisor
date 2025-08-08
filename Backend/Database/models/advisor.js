// /models/advisor.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the advisor model
const advisorSchema = new Schema({
    advisor_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    department: String,
    student_ids: [String], // List of student IDs associated with the advisor
});

// Export the advisor model
const Advisor = mongoose.model('Advisor', advisorSchema);
module.exports = Advisor;


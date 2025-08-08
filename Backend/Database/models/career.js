// /models/career.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the career guidance model
const careerSchema = new Schema({
    student_id: { type: String, required: true },
    career_path_suggested: String,
    job_market_trends: [String],
    required_skills: [String],
});

// Export the career guidance model
const Career = mongoose.model('Career', careerSchema);
module.exports = Career;

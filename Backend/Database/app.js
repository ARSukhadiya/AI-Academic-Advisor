// app.js
const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const advisorRoutes = require('./routes/advisorRoutes');
const careerRoutes = require('./routes/careerRoutes');

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
connectDB().then(() => {
    console.log("MongoDB connection successful");
}).catch(err => {
    console.error("Error connecting to MongoDB", err);
});

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/advisors', advisorRoutes);
app.use('/api/career', careerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

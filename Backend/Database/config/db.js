// /config/db.js
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017"; // Use your MongoDB URI, for example, from MongoDB Atlas
const dbName = "academic_advisor";

let db;

async function connectDB() {
    if (db) return db;  // Avoid multiple connections
    try {
        // Connect to MongoDB using Mongoose
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected successfully");
        db = mongoose.connection.db;
        return db;
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err;
    }
}

module.exports = connectDB;


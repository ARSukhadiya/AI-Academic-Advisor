# API Documentation

This document provides comprehensive API documentation for the AI Academic Advisor application.

## 📋 Table of Contents

- [Overview](#overview)
- [Authentication](#authentication)
- [Base URL](#base-url)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [Examples](#examples)

## Overview

The AI Academic Advisor API provides RESTful endpoints for managing students, courses, performance data, and AI-powered recommendations.

### API Version
Current version: `v1.0.0`

### Content Type
All requests and responses use `application/json`

## Authentication

Currently, the API uses simple authentication. Future versions will implement JWT tokens.

### Headers
```http
Content-Type: application/json
```

## Base URL

### Development
```
http://localhost:5000/api
```

### Production
```
https://your-domain.com/api
```

## Endpoints

### Students

#### Get All Students
```http
GET /students
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Smith",
      "email": "john.smith@example.com",
      "major": "Computer Science",
      "gpa": 3.5,
      "year": 2024,
      "interests": ["AI", "Machine Learning"],
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "count": 1
}
```

#### Get Student by ID
```http
GET /students/:id
```

**Parameters:**
- `id` (string, required): Student ID

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Smith",
    "email": "john.smith@example.com",
    "major": "Computer Science",
    "gpa": 3.5,
    "year": 2024,
    "interests": ["AI", "Machine Learning"],
    "courses": ["CS101", "CS201"],
    "performance": {
      "overall": 85,
      "subjects": {
        "Computer Science": 88,
        "Mathematics": 82
      }
    }
  }
}
```

#### Create Student
```http
POST /students
```

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "major": "Computer Science",
  "gpa": 3.8,
  "year": 2024,
  "interests": ["Web Development", "Data Science"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "major": "Computer Science",
    "gpa": 3.8,
    "year": 2024,
    "interests": ["Web Development", "Data Science"],
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

#### Update Student
```http
PUT /students/:id
```

**Parameters:**
- `id` (string, required): Student ID

**Request Body:**
```json
{
  "gpa": 3.9,
  "interests": ["Web Development", "Data Science", "AI"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "major": "Computer Science",
    "gpa": 3.9,
    "year": 2024,
    "interests": ["Web Development", "Data Science", "AI"],
    "updatedAt": "2024-01-15T11:00:00Z"
  }
}
```

#### Delete Student
```http
DELETE /students/:id
```

**Parameters:**
- `id` (string, required): Student ID

**Response:**
```json
{
  "success": true,
  "message": "Student deleted successfully"
}
```

### Courses

#### Get All Courses
```http
GET /courses
```

**Query Parameters:**
- `major` (string, optional): Filter by major
- `level` (string, optional): Filter by course level
- `limit` (number, optional): Limit results (default: 10)
- `page` (number, optional): Page number (default: 1)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439013",
      "code": "CS101",
      "name": "Introduction to Computer Science",
      "description": "Fundamental concepts of computer science",
      "credits": 3,
      "major": "Computer Science",
      "level": "Undergraduate",
      "prerequisites": [],
      "instructor": "Dr. Smith",
      "semester": "Fall 2024"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "pages": 5
  }
}
```

#### Get Course by ID
```http
GET /courses/:id
```

**Parameters:**
- `id` (string, required): Course ID

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439013",
    "code": "CS101",
    "name": "Introduction to Computer Science",
    "description": "Fundamental concepts of computer science",
    "credits": 3,
    "major": "Computer Science",
    "level": "Undergraduate",
    "prerequisites": [],
    "instructor": "Dr. Smith",
    "semester": "Fall 2024",
    "enrollment": 120,
    "rating": 4.2
  }
}
```

#### Create Course
```http
POST /courses
```

**Request Body:**
```json
{
  "code": "CS201",
  "name": "Data Structures and Algorithms",
  "description": "Advanced programming concepts and algorithms",
  "credits": 4,
  "major": "Computer Science",
  "level": "Undergraduate",
  "prerequisites": ["CS101"],
  "instructor": "Dr. Johnson",
  "semester": "Spring 2024"
}
```

#### Update Course
```http
PUT /courses/:id
```

#### Delete Course
```http
DELETE /courses/:id
```

### Performance

#### Get Performance Data
```http
GET /performance
```

**Query Parameters:**
- `studentId` (string, optional): Filter by student
- `courseId` (string, optional): Filter by course
- `semester` (string, optional): Filter by semester

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439014",
      "studentId": "507f1f77bcf86cd799439011",
      "courseId": "507f1f77bcf86cd799439013",
      "grade": "A",
      "score": 92,
      "semester": "Fall 2024",
      "feedback": "Excellent work on assignments",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

#### Add Performance Record
```http
POST /performance
```

**Request Body:**
```json
{
  "studentId": "507f1f77bcf86cd799439011",
  "courseId": "507f1f77bcf86cd799439013",
  "grade": "A",
  "score": 92,
  "semester": "Fall 2024",
  "feedback": "Excellent work on assignments"
}
```

### Advisors

#### Get All Advisors
```http
GET /advisors
```

#### Get Advisor by ID
```http
GET /advisors/:id
```

#### Create Advisor
```http
POST /advisors
```

**Request Body:**
```json
{
  "name": "Dr. Sarah Wilson",
  "email": "sarah.wilson@university.edu",
  "department": "Computer Science",
  "specialization": ["AI", "Machine Learning"],
  "experience": 8
}
```

### Career Guidance

#### Get Career Recommendations
```http
GET /career/recommendations
```

**Query Parameters:**
- `studentId` (string, required): Student ID
- `interests` (string, optional): Comma-separated interests

**Response:**
```json
{
  "success": true,
  "data": {
    "studentId": "507f1f77bcf86cd799439011",
    "recommendations": [
      {
        "career": "Software Engineer",
        "matchScore": 0.85,
        "description": "Develop software applications and systems",
        "requiredSkills": ["Programming", "Problem Solving"],
        "salary": "$85,000 - $120,000",
        "growth": "High"
      },
      {
        "career": "Data Scientist",
        "matchScore": 0.78,
        "description": "Analyze and interpret complex data",
        "requiredSkills": ["Statistics", "Machine Learning"],
        "salary": "$90,000 - $130,000",
        "growth": "Very High"
      }
    ],
    "skillGaps": [
      {
        "skill": "Advanced Statistics",
        "importance": "High",
        "recommendedCourses": ["STAT301", "MATH401"]
      }
    ]
  }
}
```

#### Get Learning Path
```http
GET /career/learning-path
```

**Query Parameters:**
- `studentId` (string, required): Student ID
- `career` (string, required): Target career

**Response:**
```json
{
  "success": true,
  "data": {
    "studentId": "507f1f77bcf86cd799439011",
    "targetCareer": "Data Scientist",
    "path": [
      {
        "semester": "Spring 2024",
        "courses": [
          {
            "code": "STAT301",
            "name": "Advanced Statistics",
            "credits": 3,
            "priority": "High"
          },
          {
            "code": "CS301",
            "name": "Machine Learning",
            "credits": 4,
            "priority": "High"
          }
        ]
      },
      {
        "semester": "Fall 2024",
        "courses": [
          {
            "code": "CS401",
            "name": "Deep Learning",
            "credits": 4,
            "priority": "Medium"
          }
        ]
      }
    ],
    "estimatedDuration": "2 years",
    "totalCredits": 24
  }
}
```

## AI Chat Service

### Chat Endpoint
```http
POST /chat
```

**Base URL:** `http://localhost:5001` (AI Services)

**Request Body:**
```json
{
  "message": "I need help choosing courses for next semester",
  "studentId": "507f1f77bcf86cd799439011",
  "context": {
    "currentSemester": "Spring 2024",
    "major": "Computer Science",
    "gpa": 3.5
  }
}
```

**Response:**
```json
{
  "success": true,
  "reply": "Based on your academic profile, I recommend the following courses for Spring 2024: CS301 (Machine Learning), STAT301 (Advanced Statistics), and CS401 (Software Engineering). These align well with your interests in AI and will help you progress toward your career goals.",
  "recommendations": [
    {
      "type": "course",
      "code": "CS301",
      "name": "Machine Learning",
      "reason": "Aligns with your AI interests"
    }
  ],
  "confidence": 0.92
}
```

## Error Handling

### Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  }
}
```

### Common Error Codes

| Code | Description | HTTP Status |
|------|-------------|-------------|
| `VALIDATION_ERROR` | Invalid input data | 400 |
| `NOT_FOUND` | Resource not found | 404 |
| `UNAUTHORIZED` | Authentication required | 401 |
| `FORBIDDEN` | Access denied | 403 |
| `INTERNAL_ERROR` | Server error | 500 |

### Error Examples

#### Validation Error
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid student data",
    "details": [
      {
        "field": "email",
        "message": "Email must be valid"
      },
      {
        "field": "gpa",
        "message": "GPA must be between 0 and 4"
      }
    ]
  }
}
```

#### Not Found Error
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Student not found",
    "details": "No student found with ID: 507f1f77bcf86cd799439011"
  }
}
```

## Rate Limiting

### Limits
- **General API**: 100 requests per minute per IP
- **AI Chat**: 10 requests per minute per user
- **Bulk Operations**: 5 requests per minute per IP

### Rate Limit Headers
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642234567
```

### Rate Limit Exceeded Response
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests",
    "retryAfter": 60
  }
}
```

## Examples

### Complete Student Workflow

#### 1. Create Student
```bash
curl -X POST http://localhost:5000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "major": "Computer Science",
    "gpa": 3.7,
    "year": 2024,
    "interests": ["AI", "Data Science"]
  }'
```

#### 2. Get Student
```bash
curl http://localhost:5000/api/students/507f1f77bcf86cd799439011
```

#### 3. Add Performance Record
```bash
curl -X POST http://localhost:5000/api/performance \
  -H "Content-Type: application/json" \
  -d '{
    "studentId": "507f1f77bcf86cd799439011",
    "courseId": "507f1f77bcf86cd799439013",
    "grade": "A",
    "score": 95,
    "semester": "Fall 2024"
  }'
```

#### 4. Get Career Recommendations
```bash
curl "http://localhost:5000/api/career/recommendations?studentId=507f1f77bcf86cd799439011"
```

#### 5. Chat with AI
```bash
curl -X POST http://localhost:5001/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What courses should I take next semester?",
    "studentId": "507f1f77bcf86cd799439011"
  }'
```

### JavaScript Examples

#### Using Fetch API
```javascript
// Get all students
const response = await fetch('http://localhost:5000/api/students');
const data = await response.json();

// Create a new student
const newStudent = await fetch('http://localhost:5000/api/students', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john.doe@example.com',
    major: 'Computer Science',
    gpa: 3.8
  })
});
```

#### Using Axios
```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Get students
const students = await api.get('/students');

// Create student
const newStudent = await api.post('/students', {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  major: 'Computer Science',
  gpa: 3.9
});
```

## Testing

### Health Check
```bash
curl http://localhost:5000/api/health
```

**Response:**
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2024-01-15T10:30:00Z",
  "version": "1.0.0"
}
```

### API Status
```bash
curl http://localhost:5000/api/status
```

**Response:**
```json
{
  "success": true,
  "data": {
    "database": "connected",
    "aiServices": "connected",
    "uptime": "2h 15m 30s",
    "requests": 1250,
    "errors": 3
  }
}
```

---

For more information or support, please refer to the main documentation or contact the development team. 
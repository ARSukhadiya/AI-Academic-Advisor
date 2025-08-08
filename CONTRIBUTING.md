# Contributing to AI Academic Advisor

Thank you for your interest in contributing to the AI Academic Advisor project! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### 1. Fork and Clone
1. Fork the repository to your GitHub account
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/AI-Academic-Advisor.git
   cd AI-Academic-Advisor
   ```

### 2. Set Up Development Environment
1. **Frontend Setup**:
   ```bash
   cd Frontend
   npm install
   ```

2. **Backend Setup**:
   ```bash
   cd Backend/Database
   npm install
   ```

3. **AI Services Setup**:
   ```bash
   cd Backend/Chatboard
   pip install -r requirements.txt
   ```

### 3. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes
- Follow the coding standards outlined below
- Write tests for new functionality
- Update documentation as needed

### 5. Test Your Changes
```bash
# Frontend tests
cd Frontend
npm test

# Backend tests (if available)
cd Backend/Database
npm test
```

### 6. Commit Your Changes
```bash
git add .
git commit -m "feat: add your feature description"
```

### 7. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with a clear description of your changes.

## 📋 Development Guidelines

### Code Style

#### TypeScript/JavaScript
- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

```typescript
/**
 * Calculates student performance score based on academic data
 * @param gpa - Student's GPA
 * @param courses - Array of completed courses
 * @returns Performance score between 0-100
 */
function calculatePerformanceScore(gpa: number, courses: Course[]): number {
  // Implementation
}
```

#### Python
- Follow PEP 8 style guide
- Use type hints for function parameters
- Add docstrings for all functions and classes

```python
def calculate_performance_score(gpa: float, courses: List[Course]) -> float:
    """
    Calculate student performance score based on academic data.
    
    Args:
        gpa: Student's GPA
        courses: List of completed courses
        
    Returns:
        Performance score between 0-100
    """
    # Implementation
```

### Commit Message Convention
Use conventional commit messages:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Pull Request Guidelines

1. **Title**: Clear, descriptive title
2. **Description**: Detailed description of changes
3. **Testing**: Explain how to test your changes
4. **Screenshots**: Include screenshots for UI changes
5. **Checklist**: Complete the PR checklist

### PR Checklist
- [ ] Code follows style guidelines
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No console errors
- [ ] Responsive design tested
- [ ] Cross-browser compatibility checked

## 🐛 Reporting Bugs

### Bug Report Template
```markdown
**Bug Description**
Brief description of the issue

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 91]
- Version: [e.g., 1.0.0]

**Screenshots**
If applicable, add screenshots

**Additional Context**
Any other context about the problem
```

## 💡 Feature Requests

### Feature Request Template
```markdown
**Feature Description**
Brief description of the feature

**Use Case**
Why this feature would be useful

**Proposed Implementation**
How you think it should work

**Alternatives Considered**
Other approaches you considered

**Additional Context**
Any other relevant information
```

## 🧪 Testing

### Frontend Testing
```bash
cd Frontend
npm test
npm run test:coverage
```

### Backend Testing
```bash
cd Backend/Database
npm test
```

### Manual Testing Checklist
- [ ] Login/Registration flow
- [ ] Dashboard functionality
- [ ] Chat interface
- [ ] Course recommendations
- [ ] Performance analytics
- [ ] Responsive design
- [ ] Cross-browser compatibility

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for TypeScript functions
- Add docstrings for Python functions
- Update README.md for new features
- Update API documentation

### User Documentation
- Update user guides for new features
- Add screenshots for UI changes
- Update installation instructions

## 🔧 Development Setup

### Prerequisites
- Node.js (v16+)
- Python 3.8+
- MongoDB
- Git

### Environment Variables
Create `.env` files as needed:

**Frontend** (optional):
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_CHAT_URL=http://localhost:5001
```

**Backend**:
```env
MONGODB_URI=mongodb://localhost:27017/academic-advisor
PORT=5000
```

**AI Services**:
```env
OPENAI_API_KEY=your_openai_api_key
FLASK_ENV=development
```

## 🚀 Deployment

### Local Development
```bash
# Start all services
npm run dev
```

### Production Build
```bash
# Frontend
cd Frontend
npm run build

# Backend
cd Backend/Database
npm start
```

## 📞 Getting Help

- **Issues**: Use GitHub Issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Email**: Contact the maintainers directly

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to AI Academic Advisor! 🎓 
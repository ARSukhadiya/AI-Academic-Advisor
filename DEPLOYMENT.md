# Deployment Guide

This guide provides instructions for deploying the AI Academic Advisor application to various platforms.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- Python 3.8+
- MongoDB
- OpenAI API Key

## 📦 Local Deployment

### 1. Clone and Setup
```bash
git clone https://github.com/yourusername/AI-Academic-Advisor.git
cd AI-Academic-Advisor
```

### 2. Environment Configuration
Create environment files:

**Backend** (Backend/Database/.env):
```env
MONGODB_URI=mongodb://localhost:27017/academic-advisor
PORT=5000
NODE_ENV=production
```

**AI Services** (Backend/Chatboard/.env):
```env
OPENAI_API_KEY=your_openai_api_key_here
FLASK_ENV=production
FLASK_DEBUG=0
```

### 3. Install Dependencies
```bash
# Frontend
cd Frontend
npm install
npm run build

# Backend
cd Backend/Database
npm install

# AI Services
cd Backend/Chatboard
pip install -r requirements.txt
```

### 4. Start Services
```bash
# Start MongoDB (if not running)
mongod

# Start Backend (Terminal 1)
cd Backend/Database
npm start

# Start AI Services (Terminal 2)
cd Backend/Chatboard
python app.py

# Serve Frontend (Terminal 3)
cd Frontend
npx serve -s build -l 3000
```

## ☁️ Cloud Deployment

### Heroku Deployment

#### 1. Prepare for Heroku
```bash
# Create Procfile for Backend
echo "web: node app.js" > Backend/Database/Procfile

# Create Procfile for AI Services
echo "web: python app.py" > Backend/Chatboard/Procfile
```

#### 2. Deploy Backend
```bash
cd Backend/Database
heroku create ai-academic-advisor-backend
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
git add .
git commit -m "Deploy backend"
git push heroku main
```

#### 3. Deploy AI Services
```bash
cd Backend/Chatboard
heroku create ai-academic-advisor-ai
heroku config:set OPENAI_API_KEY=your_openai_api_key
git add .
git commit -m "Deploy AI services"
git push heroku main
```

#### 4. Deploy Frontend
```bash
cd Frontend
npm run build
# Use Heroku buildpack for static sites
heroku create ai-academic-advisor-frontend
git add .
git commit -m "Deploy frontend"
git push heroku main
```

### AWS Deployment

#### 1. EC2 Setup
```bash
# Launch EC2 instance
# Install Node.js, Python, MongoDB
sudo apt update
sudo apt install nodejs npm python3 python3-pip mongodb
```

#### 2. Deploy Application
```bash
# Clone repository
git clone https://github.com/yourusername/AI-Academic-Advisor.git
cd AI-Academic-Advisor

# Setup environment
# Configure environment variables
# Start services with PM2
npm install -g pm2
pm2 start Backend/Database/app.js --name "backend"
pm2 start Backend/Chatboard/app.py --name "ai-services"
pm2 start "npx serve -s Frontend/build -l 3000" --name "frontend"
```

### Docker Deployment

#### 1. Create Dockerfile for Backend
```dockerfile
# Backend/Database/Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

#### 2. Create Dockerfile for AI Services
```dockerfile
# Backend/Chatboard/Dockerfile
FROM python:3.8-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5001
CMD ["python", "app.py"]
```

#### 3. Create Dockerfile for Frontend
```dockerfile
# Frontend/Dockerfile
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### 4. Create docker-compose.yml
```yaml
version: '3.8'
services:
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  backend:
    build: ./Backend/Database
    ports:
      - "5000:5000"
    environment:
      - MONGODB_URI=mongodb://mongodb:27017/academic-advisor
    depends_on:
      - mongodb

  ai-services:
    build: ./Backend/Chatboard
    ports:
      - "5001:5001"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}

  frontend:
    build: ./Frontend
    ports:
      - "3000:80"
    depends_on:
      - backend
      - ai-services

volumes:
  mongodb_data:
```

#### 5. Deploy with Docker
```bash
# Build and run
docker-compose up -d

# View logs
docker-compose logs -f
```

## 🔧 Environment Variables

### Required Variables
```env
# Backend
MONGODB_URI=mongodb://localhost:27017/academic-advisor
PORT=5000
NODE_ENV=production

# AI Services
OPENAI_API_KEY=your_openai_api_key_here
FLASK_ENV=production
FLASK_DEBUG=0

# Frontend (optional)
REACT_APP_API_URL=http://localhost:5000
REACT_APP_CHAT_URL=http://localhost:5001
```

## 📊 Monitoring and Logging

### PM2 Monitoring
```bash
# Install PM2
npm install -g pm2

# Start services
pm2 start Backend/Database/app.js --name "backend"
pm2 start Backend/Chatboard/app.py --name "ai-services"

# Monitor
pm2 monit
pm2 logs
```

### Health Checks
```bash
# Backend health check
curl http://localhost:5000/api/health

# AI services health check
curl http://localhost:5001/health
```

## 🔒 Security Considerations

### Production Security
1. **Environment Variables**: Never commit API keys
2. **HTTPS**: Use SSL certificates
3. **CORS**: Configure properly for production
4. **Rate Limiting**: Implement API rate limits
5. **Authentication**: Use JWT tokens
6. **Database**: Use connection pooling

### Security Headers
```javascript
// Add to Express app
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
```

## 📈 Performance Optimization

### Frontend Optimization
```bash
# Build optimization
npm run build
# Enable gzip compression
# Use CDN for static assets
```

### Backend Optimization
```javascript
// Enable compression
app.use(compression());

// Database indexing
// Connection pooling
// Caching strategies
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Heroku
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: "ai-academic-advisor"
          heroku_email: "your-email@example.com"
```

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection**
   ```bash
   # Check MongoDB status
   sudo systemctl status mongodb
   # Restart if needed
   sudo systemctl restart mongodb
   ```

2. **Port Conflicts**
   ```bash
   # Check port usage
   netstat -tulpn | grep :5000
   # Kill process if needed
   kill -9 <PID>
   ```

3. **Environment Variables**
   ```bash
   # Check environment
   echo $MONGODB_URI
   echo $OPENAI_API_KEY
   ```

### Logs
```bash
# Backend logs
pm2 logs backend

# AI services logs
pm2 logs ai-services

# System logs
journalctl -u mongodb
```

## 📞 Support

For deployment issues:
- Check the troubleshooting section
- Review logs for error messages
- Ensure all environment variables are set
- Verify network connectivity
- Contact the development team

---

**Note**: This deployment guide covers the most common deployment scenarios. For specific platform requirements, refer to the platform's official documentation. 
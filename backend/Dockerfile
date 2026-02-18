# Create this file as ~/github-actions/ec2/backend/Dockerfile
FROM node:18-slim

WORKDIR /app

# Copy package files and install dependencies
# (If you don't have a package.json yet, we'll initialize one)
RUN npm init -y && npm install express

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

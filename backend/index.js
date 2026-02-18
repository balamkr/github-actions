// Create this file inside ~/github-actions/ec2/backend/index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.json({ message: "Hello from the EKS Backend!", status: "Healthy" });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

// ADD THIS: Root route for Kubernetes Health Checks
app.get('/', (req, res) => {
  res.status(200).send("Backend is healthy!");
});

// Your existing API route
app.get('/api', (req, res) => {
  res.json({ message: "Hello from the EKS Backend!", status: "Healthy" });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});

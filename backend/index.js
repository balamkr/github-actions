const express = require('express');
const app = express();
const port = 3000;

// Handle the "stripped" path from Traefik
app.get('/', (req, res) => {
  res.json({ message: "Backend is reached at root!" });
});

// Handle the direct path (if middleware is ever disabled)
app.get('/api', (req, res) => {
  res.json({ message: "Backend is reached at /api!" });
});

app.listen(port, () => console.log(`Listening on ${port}`));

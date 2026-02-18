const express = require('express');
const app = express();
const port = 3000;

// This fixes the "Unhealthy" probe error
app.get('/', (req, res) => {
  res.status(200).send("OK");
});

app.get('/api', (req, res) => {
  res.json({ message: "Backend is Live!" });
});

app.listen(port, () => console.log(`Listening on ${port}`));

//1. import require modules
const express = require('express');
const cors = require('cors');
const userData = require('./user.json');
//2- initialize express by calling it and set the port

const app = express();
const PORT = 8080; // Must match port 8080 used in script.js

// Enable CORS so the frontend can make requests across ports
app.use(cors());

// GET endpoint required by script.js
app.get('/professional', (req, res) => {
  res.json(userData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
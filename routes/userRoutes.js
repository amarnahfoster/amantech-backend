const express = require('express');
const router = express.Router();

// Sample user data (you can replace this later with MongoDB user model)
const users = [
  { id: 1, username: 'kwame123', network: 'MTN', plan: 'Data 1GB', price: 10 },
  { id: 2, username: 'ama_tech', network: 'Vodafone', plan: 'Data 2GB', price: 15 },
  { id: 3, username: 'johnDoe', network: 'AirtelTigo', plan: 'Data 5GB', price: 30 }
];

// Route: GET /api/users
router.get('/', (req, res) => {
  res.json(users);
});

// Optional: a test route to verify the file is loaded
router.get('/test', (req, res) => {
  res.send('✅ userRoutes is working!');
});

module.exports = router;

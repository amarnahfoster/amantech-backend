const express = require('express');
const router = express.Router();

const orders = [
  { username: 'kwame123', network: 'MTN', plan: 'Data 1GB', price: 10 },
  { username: 'ama_tech', network: 'Vodafone', plan: 'Data 2GB', price: 15 },
  { username: 'johnDoe', network: 'AirtelTigo', plan: 'Data 5GB', price: 30 }
];

router.get('/', (req, res) => {
  res.json(orders);
});

module.exports = router;

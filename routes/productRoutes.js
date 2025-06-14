const express = require('express');
const router = express.Router();

const products = [
  { network: 'MTN', plan: 'Data 1GB', price: 10, apiCode: 'MTN1GB' },
  { network: 'Vodafone', plan: 'Data 2GB', price: 15, apiCode: 'VOD2GB' },
  { network: 'AirtelTigo', plan: 'Data 5GB', price: 30, apiCode: 'AIR5GB' }
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;

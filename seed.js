// seed.js - To populate products into your MongoDB

const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.error('DB Connection Failed:', err));

const products = [
  // MTN
  { network: 'MTN', plan: '1GB', price: 5, currency: 'GHS', apiCode: 'mtn1gb' },
  { network: 'MTN', plan: '2GB', price: 10, currency: 'GHS', apiCode: 'mtn2gb' },
  { network: 'MTN', plan: '3GB', price: 15, currency: 'GHS', apiCode: 'mtn3gb' },
  { network: 'MTN', plan: '4GB', price: 21, currency: 'GHS', apiCode: 'mtn4gb' },
  { network: 'MTN', plan: '5GB', price: 26, currency: 'GHS', apiCode: 'mtn5gb' },
  { network: 'MTN', plan: '7GB', price: 37, currency: 'GHS', apiCode: 'mtn7gb' },
  { network: 'MTN', plan: '8GB', price: 45, currency: 'GHS', apiCode: 'mtn8gb' },
  { network: 'MTN', plan: '10GB', price: 50, currency: 'GHS', apiCode: 'mtn10gb' },
  { network: 'MTN', plan: '15GB', price: 72, currency: 'GHS', apiCode: 'mtn15gb' },
  { network: 'MTN', plan: '20GB', price: 90, currency: 'GHS', apiCode: 'mtn20gb' },
  { network: 'MTN', plan: '30GB', price: 135, currency: 'GHS', apiCode: 'mtn30gb' },
  { network: 'MTN', plan: '40GB', price: 180, currency: 'GHS', apiCode: 'mtn40gb' },
  { network: 'MTN', plan: '50GB', price: 210, currency: 'GHS', apiCode: 'mtn50gb' },
  { network: 'MTN', plan: '100GB', price: 400, currency: 'GHS', apiCode: 'mtn100gb' },

  // Telecel
  { network: 'Telecel', plan: '5GB', price: 25, currency: 'GHS', apiCode: 'telecel5gb' },
  { network: 'Telecel', plan: '10GB', price: 45, currency: 'GHS', apiCode: 'telecel10gb' },
  { network: 'Telecel', plan: '15GB', price: 75, currency: 'GHS', apiCode: 'telecel15gb' },
  { network: 'Telecel', plan: '20GB', price: 85, currency: 'GHS', apiCode: 'telecel20gb' },
  { network: 'Telecel', plan: '50GB', price: 225, currency: 'GHS', apiCode: 'telecel50gb' },
  { network: 'Telecel', plan: '100GB', price: 380, currency: 'GHS', apiCode: 'telecel100gb' },

  // AirtelTigo
  { network: 'AirtelTigo', plan: '1GB', price: 5, currency: 'GHS', apiCode: 'tigo1gb' },
  { network: 'AirtelTigo', plan: '2GB', price: 9, currency: 'GHS', apiCode: 'tigo2gb' },
  { network: 'AirtelTigo', plan: '3GB', price: 15, currency: 'GHS', apiCode: 'tigo3gb' },
  { network: 'AirtelTigo', plan: '4GB', price: 18, currency: 'GHS', apiCode: 'tigo4gb' },
  { network: 'AirtelTigo', plan: '5GB', price: 22, currency: 'GHS', apiCode: 'tigo5gb' },
  { network: 'AirtelTigo', plan: '6GB', price: 26, currency: 'GHS', apiCode: 'tigo6gb' },
  { network: 'AirtelTigo', plan: '8GB', price: 33, currency: 'GHS', apiCode: 'tigo8gb' },
  { network: 'AirtelTigo', plan: '10GB', price: 45, currency: 'GHS', apiCode: 'tigo10gb' },
  { network: 'AirtelTigo', plan: '15GB', price: 55, currency: 'GHS', apiCode: 'tigo15gb' },
  { network: 'AirtelTigo', plan: '20GB', price: 70, currency: 'GHS', apiCode: 'tigo20gb' },
  { network: 'AirtelTigo', plan: '50GB', price: 145, currency: 'GHS', apiCode: 'tigo50gb' },
  { network: 'AirtelTigo', plan: '100GB', price: 280, currency: 'GHS', apiCode: 'tigo100gb' },
];

async function seed() {
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log('Products seeded');
  mongoose.disconnect();
}

seed();

const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.post('/create-order', ordersController.createOrder);

module.exports = router;

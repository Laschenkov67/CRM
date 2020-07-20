const express = require('express');
const orderController =  require('../controllers/orderController');
const router = express.Router();

router.get('/', orderController.getAllOrder);
router.post('/', orderController.createOrder);

module.exports = router;

const express = require('express');
const authController =  require('../controllers/authController');

//Создаем локальный роутер
const router = express.Router();

router.post('/login', authController.login);
router.post('/signup', authController.signup);

module.exports = router;

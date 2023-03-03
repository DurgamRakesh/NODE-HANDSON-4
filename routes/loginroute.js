const express = require('express');
const router = express.Router();
const loginController = require('../controllers/logincontroller');

router.post('/login', loginController.LoginController);

module.exports = router;
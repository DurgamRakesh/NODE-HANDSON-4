const express = require('express');
const router = express.Router();
const regcontroller = require('../controllers/registercontroller');

router.post('/register', regcontroller.RegisterController);

module.exports = router;
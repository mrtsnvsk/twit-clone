const { Router } = require('express');
const router = Router();
const registrationController = require('../controllers/authController/registerController');
const loginController = require('../controllers/authController/loginController');

// http://localhost:8080/api/registration
router.post('/registration', registrationController);

// http://localhost:8080/api/login
router.post('/login', loginController);

module.exports = router;

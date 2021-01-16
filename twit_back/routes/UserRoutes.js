const { Router } = require('express');
const router = Router();
const registration = require('../controllers/authController/registerController');
const login = require('../controllers/authController/loginController');
const uploadAvatar = require('../controllers/uploadAvatarController');

// http://localhost:8080/api/registration
router.post('/registration', registration);

// http://localhost:8080/api/login
router.post('/login', login);

// http://localhost:8080/api/uploadAvatar
router.post('/uploadAvatar', uploadAvatar);

module.exports = router;

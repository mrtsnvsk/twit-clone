const { Router } = require('express');
const router = Router();
const registration = require('../controllers/authController/registerController');
const login = require('../controllers/authController/loginController');
const uploadAvatar = require('../controllers/uploadAvatarController');
const newTwitController = require('../controllers/newTwitController');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const checkAuthMiddleware = require('../middleware/checkAuthMiddleware');
const checkAuthController = require('../controllers/authController/checkAuthController');

// http://localhost:8080/api/registration
router.post('/registration', registration);

// http://localhost:8080/api/login
router.post('/login', login);

// http://localhost:8080/api/uploadAvatar
router.post('/uploadAvatar', uploadAvatar);

// http://localhost:8080/api/newTwit
router.post('/newTweet', newTwitController);

// http://localhost:8080/api/reload
router.get('/reload', checkAuthMiddleware, checkAuthController);

module.exports = router;

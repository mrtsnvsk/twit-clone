const { Router } = require('express');
const router = Router();
const upload = require('../middleware/checkFile');

const {
  registrationController,
  loginController,
  uploadAvatarController,
} = require('../controllers/index');

// http://localhost:8080/api/registration
router.post('/registration', registrationController);

// http://localhost:8080/api/login
router.post('/login', loginController);

// http://localhost:8080/api/uploadAvatar
router.put('/uploadAvatar', upload, uploadAvatarController);

module.exports = router;

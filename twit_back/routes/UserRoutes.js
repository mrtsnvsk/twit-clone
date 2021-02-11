const { Router } = require('express');
const router = Router();
const upload = require('../middleware/checkFile');

const {
  registrationController,
  loginController,
  uploadAvatarController,
} = require('../controllers/index');

const User = require('../models/User');

// http://localhost:8080/api/registration
router.post('/registration', registrationController);

// http://localhost:8080/api/login
router.post('/login', loginController);

// http://localhost:8080/api/uploadAvatar
router.put('/uploadAvatar', upload, uploadAvatarController);

// http://localhost:8080/api/profile/:login
router.post('/profile/:login', async (req, res) => {
  try {
    console.log('req', req.params);
    const { login } = req.params;

    const user = await User.findOne({ login });

    res.json(user);
  } catch (e) {
    res.json({
      error: 'Ошибка при загрузке профиля.',
    });
  }
});

module.exports = router;

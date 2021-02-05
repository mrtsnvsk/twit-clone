const { Router } = require('express');
const router = Router();
const checkAuthMiddleware = require('../middleware/checkAuthMiddleware');
const {
  registrationController,
  loginController,
  checkAuthController,
  uploadAvatarController,
  newTweetController,
  deleteTweetController,
  allTweetsController,
  likeTweetController,
  unlikeTweetController,
} = require('../controllers/index');
/////
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const config = require('config');

// http://localhost:8080/api/registration
router.post('/registration', registrationController);

// http://localhost:8080/api/login
router.post('/login', loginController);

// http://localhost:8080/api/uploadAvatar
router.post('/uploadAvatar', uploadAvatarController);

// http://localhost:8080/api/newTwit
router.post('/newTweet', newTweetController);

// http://localhost:8080/api/reload
// router.get('/reload', checkAuthMiddleware, checkAuthController);

// http://localhost:8080/api/deleteTweet
router.post('/deleteTweet', deleteTweetController);

// http://localhost:8080/api/allTweets
router.get('/allTweets', allTweetsController);

// http://localhost:8080/api/likeTweet
router.post('/likeTweet', likeTweetController);

// http://localhost:8080/api/unlikeTweet
router.post('/unlikeTweet', unlikeTweetController);

module.exports = router;

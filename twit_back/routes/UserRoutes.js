const { Router } = require('express');
const router = Router();
const registration = require('../controllers/authController/registerController');
const login = require('../controllers/authController/loginController');
const uploadAvatar = require('../controllers/actionWithDataController/uploadAvatarController');
const newTwitController = require('../controllers/actionWithDataController/newTwitController');
const deleteTweetController = require('../controllers/actionWithDataController/deleteTweetController');
const checkAuthMiddleware = require('../middleware/checkAuthMiddleware');
const checkAuthController = require('../controllers/authController/checkAuthController');
const allTweetsController = require('../controllers/actionWithDataController/allTweetsController');
/////
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

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

// http://localhost:8080/api/deleteTweet
router.post('/deleteTweet', deleteTweetController);

// http://localhost:8080/api/allTweets
router.get('/allTweets', allTweetsController);

// http://localhost:8080/api/likeTweet
router.post('/likeTweet', async (req, res) => {
  try {
    const { id, tweetId, likedUser } = req.body;
    const currentUser = await User.findOne({ _id: id });
    let likedTweet = currentUser.tweets.filter((el) => el.tweetId === tweetId);
    likedTweet.map((el) => {
      if (!el.likes.includes(likedUser)) {
        console.log('likes', el.likes);
        console.log('user', likedUser);
        return el.likes.push(likedUser);
      }
    });

    const otherTweets = currentUser.tweets.filter(
      (el) => el.tweetId !== tweetId
    );
    const tweets = [...otherTweets, ...likedTweet];
    await User.updateOne({ _id: id }, { tweets: tweets });
    const newData = await User.findOne({ _id: id });

    const token = jwt.sign(
      {
        email: newData.email,
        login: newData.login,
        name: newData.name,
        id: newData._id,
        regDate: newData.registrationDate,
        avatar: newData.avatar,
        tweets: newData.tweets,
      },
      config.get('jwtSecretKey')
    );

    res.json({ token });
  } catch (e) {
    res.status(401).json({ error: 'Ошибка при лайке записи.' });
  }
});

module.exports = router;

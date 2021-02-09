// auth
const registrationController = require('./authController/registerController');
const loginController = require('./authController/loginController');
const checkAuthController = require('./authController/checkAuthController');
// tweets
const uploadAvatarController = require('./tweetControllers/uploadAvatarController');
const newTweetController = require('./tweetControllers/newTweetController');
const deleteTweetController = require('./tweetControllers/deleteTweetController');
const allTweetsController = require('./tweetControllers/allTweetsController');
const currentTweetController = require('./tweetControllers/currentTweetController');
const addReplyController = require('./tweetControllers/addReplyController');
const {
  likeTweetController,
  unlikeTweetController,
} = require('./tweetControllers/likeTweetController');

module.exports = {
  registrationController,
  loginController,
  checkAuthController,
  uploadAvatarController,
  newTweetController,
  deleteTweetController,
  allTweetsController,
  likeTweetController,
  unlikeTweetController,
  currentTweetController,
  addReplyController,
};

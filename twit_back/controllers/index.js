// auth
const registrationController = require('./authController/registerController');
const loginController = require('./authController/loginController');
const checkAuthController = require('./authController/checkAuthController');
// actions
const uploadAvatarController = require('./actionWithDataController/uploadAvatarController');
const newTweetController = require('./actionWithDataController/newTweetController');
const deleteTweetController = require('./actionWithDataController/deleteTweetController');
const allTweetsController = require('./actionWithDataController/allTweetsController');
const {
  likeTweetController,
  unlikeTweetController,
} = require('./actionWithDataController/likeTweetController');

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
};

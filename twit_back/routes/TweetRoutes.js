const { Router } = require('express');
const router = Router();
const {
  newTweetController,
  allTweetsController,
  deleteTweetController,
  likeTweetController,
  unlikeTweetController,
  currentTweetController,
  addReplyController,
} = require('../controllers/index');

// // http://localhost:8080/api/newTweet
router.post('/newTweet', newTweetController);

// http://localhost:8080/api/tweets
router.get('/tweets', allTweetsController);

// http://localhost:8080/api/deleteTweet
router.post('/deleteTweet', deleteTweetController);

// http://localhost:8080/api/likeTweet
router.post('/likeTweet', likeTweetController);

// http://localhost:8080/api/unlikeTweet
router.post('/unlikeTweet', unlikeTweetController);

// http://localhost:8080/api/tweets/:id
router.post('/tweets/:id', currentTweetController);

// http://localhost:8080/api/newReply
router.post('/newReply', addReplyController);

module.exports = router;

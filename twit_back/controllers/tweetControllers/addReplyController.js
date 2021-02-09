const Tweet = require('../../models/Tweet');

const addReplyController = async (req, res) => {
  try {
    const {
      name,
      login,
      text,
      tweetIdOwner,
      tweetId,
      avatar,
      likes,
      reposts,
    } = req.body;

    const currentTweet = await Tweet.findOne({ tweetId: tweetIdOwner });

    await Tweet.updateOne(
      { tweetId: tweetIdOwner },
      {
        replyes: [
          ...currentTweet.replyes,
          {
            name,
            login,
            text,
            tweetIdOwner,
            tweetId,
            avatar,
            likes,
            reposts,
            replyes: req.body.replyes,
          },
        ],
      }
    );
    const updateTweet = await Tweet.findOne({ tweetId: tweetIdOwner });
    const newReply = updateTweet.replyes.filter((el) => el.tweetId === tweetId);

    res.json(...newReply);
  } catch (e) {
    res.json({ message: 'Ошибка при ответе.' });
  }
};

module.exports = addReplyController;

const Tweet = require('../../models/Tweet');

const currentTweetController = async (req, res) => {
  try {
    const { id } = req.params;
    const currentTweet = await Tweet.findOne({ tweetId: id });

    res.json(currentTweet);
  } catch (e) {
    res.json({ error: 'Ошибка при загрузке твита.' });
  }
};

module.exports = currentTweetController;

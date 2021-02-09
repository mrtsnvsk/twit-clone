const Tweet = require('../../models/Tweet');

const deleteTweetController = async (req, res) => {
  try {
    const { userId, tweetId } = req.body;
    const currentTweet = await Tweet.findOne({ tweetId });

    if (currentTweet.tweetId !== tweetId && currentTweet.userId !== userId) {
      return res.json({ error: 'Твит не был удален' });
    } else {
      await Tweet.deleteOne({ tweetId });
      return res.json({ message: 'Твит успешно удален.' });
    }
  } catch (e) {
    res.json({ error: 'Ошибка при удалении твита.' });
  }
};

module.exports = deleteTweetController;

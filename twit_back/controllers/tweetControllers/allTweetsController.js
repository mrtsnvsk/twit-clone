const Tweet = require('../../models/Tweet');

const allTweetsController = async (req, res) => {
  try {
    const allTweets = await Tweet.find().sort({ createDate: -1 });

    res.json(allTweets);
  } catch (e) {
    res.json({ error: 'Ошибка при загрузке всех твитов.' });
  }
};

module.exports = allTweetsController;

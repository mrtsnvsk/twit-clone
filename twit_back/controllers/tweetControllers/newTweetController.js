const Tweet = require('../../models/Tweet');

const newTweetController = async (req, res) => {
  try {
    await Tweet.create({
      ...req.body,
    });

    res.json({ message: 'Твит успешно добавлен.' });
  } catch (e) {
    res.json({ error: 'Твит не был создан.' });
  }
};

module.exports = newTweetController;

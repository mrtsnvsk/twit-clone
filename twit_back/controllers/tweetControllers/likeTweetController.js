const Tweet = require('../../models/Tweet');

const likeTweetController = async (req, res) => {
  try {
    console.log('like', req.body);
    const { tweetId, likedUser } = req.body;

    let currentUser = await Tweet.findOne({ tweetId });

    if (currentUser.likes.includes(likedUser)) {
      return res.json({ message: 'Вы уже лайкали этот твит.' });
    } else {
      currentUser.likes.push(likedUser);
    }

    await Tweet.updateOne({ tweetId }, { likes: currentUser.likes });

    res.json({ message: 'Твит лайкнут!' });
  } catch (e) {
    res.json({ error: 'Ошибка при лайке твита.' });
  }
};

const unlikeTweetController = async (req, res) => {
  try {
    const { tweetId, likedUser } = req.body;

    let currentUser = await Tweet.findOne({ tweetId });

    const likes = currentUser.likes.filter((el) => el !== likedUser);

    await Tweet.updateOne({ tweetId }, { likes });

    res.json({ message: 'Лайк убран.' });
  } catch (e) {
    res.json({ error: 'Ошибка при удалении лайка.' });
  }
};

module.exports = { likeTweetController, unlikeTweetController };
